import { useCallback, useEffect, useRef, useState } from 'react';
import {
  AIProvider,
  AgentConfig,
  AgentSlotId,
  CrucibleState,
  DiffViewMode,
  MathTelemetryParams,
  ProviderConfigEntry,
  StageExecutionState,
  StrictnessLevel,
  SystemPromptsConfig,
  VerificationSessionState,
} from '../t3s/types';
import {
  CompletionResult,
  DEFAULT_PROVIDER_CONFIG,
  DEFAULT_SYSTEM_PROMPTS,
  PROVIDER_ORDER,
  buildJudgePrompt,
  buildRedTeamPrompt,
  generateLiveCompletion,
  testProviderConnection,
} from '../s6s/apiService';
import {
  STRICTNESS_PRESETS,
  computeConfidence,
  parseJudgeOutput,
  parseRedTeamOutput,
  runDeterministicGate,
} from '../u3s/crucibleUtils';

const STORAGE = {
  keys: 'crucible_v2_api_keys',
  prompts: 'crucible_v2_system_prompts',
  agents: 'crucible_v2_agents',
  theme: 'crucible_v2_theme',
  strictness: 'crucible_v2_strictness',
};

function readJson<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function writeJson(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage may be unavailable (private mode); the app keeps working in memory.
  }
}

const isProvider = (value: unknown): value is AIProvider =>
  typeof value === 'string' && (PROVIDER_ORDER as string[]).includes(value);

function emptyKeys(): Record<AIProvider, string> {
  return { gemini: '', openai: '', anthropic: '', groq: '', openrouter: '' };
}

function loadKeys(): Record<AIProvider, string> {
  const stored = readJson<Partial<Record<AIProvider, unknown>>>(STORAGE.keys);
  const keys = emptyKeys();
  if (stored) {
    for (const p of PROVIDER_ORDER) {
      if (typeof stored[p] === 'string') keys[p] = stored[p] as string;
    }
  }
  return keys;
}

function loadPrompts(): SystemPromptsConfig {
  const stored = readJson<Partial<SystemPromptsConfig>>(STORAGE.prompts);
  const pick = (value: unknown, fallback: string) =>
    typeof value === 'string' && value.trim() ? value : fallback;
  return {
    builder: pick(stored?.builder, DEFAULT_SYSTEM_PROMPTS.builder),
    redTeam: pick(stored?.redTeam, DEFAULT_SYSTEM_PROMPTS.redTeam),
    judge: pick(stored?.judge, DEFAULT_SYSTEM_PROMPTS.judge),
  };
}

function defaultAgents(): Record<AgentSlotId, AgentConfig> {
  return {
    builder: {
      slotId: 'builder',
      stageNumber: 1,
      title: 'The Architect',
      role: 'Builder agent',
      provider: 'openai',
      model: DEFAULT_PROVIDER_CONFIG.openai.defaultModel,
    },
    redTeam: {
      slotId: 'redTeam',
      stageNumber: 2,
      title: 'Red-Team Prosecutor',
      role: 'Adversarial critic',
      provider: 'anthropic',
      model: DEFAULT_PROVIDER_CONFIG.anthropic.defaultModel,
    },
    judge: {
      slotId: 'judge',
      stageNumber: 4,
      title: 'Chief Judge',
      role: 'Synthesizer & repair engine',
      provider: 'gemini',
      model: DEFAULT_PROVIDER_CONFIG.gemini.defaultModel,
    },
  };
}

function loadAgents(): Record<AgentSlotId, AgentConfig> {
  const agents = defaultAgents();
  const stored = readJson<Partial<Record<AgentSlotId, { provider?: unknown; model?: unknown }>>>(
    STORAGE.agents
  );
  if (stored) {
    (Object.keys(agents) as AgentSlotId[]).forEach((slot) => {
      const entry = stored[slot];
      if (entry && isProvider(entry.provider) && typeof entry.model === 'string' && entry.model) {
        agents[slot] = { ...agents[slot], provider: entry.provider, model: entry.model };
      }
    });
  }
  return agents;
}

function emptyStage(provider: AIProvider | null, model: string): StageExecutionState {
  return {
    status: 'idle',
    content: '',
    error: null,
    startedAt: null,
    completedAt: null,
    latencyMs: 0,
    inputTokens: 0,
    outputTokens: 0,
    apiCalls: 0,
    provider,
    model,
    tokensReported: true,
  };
}

function idleSession(
  agents: Record<AgentSlotId, AgentConfig>,
  strictness: StrictnessLevel
): VerificationSessionState {
  return {
    exampleId: null,
    prompt: '',
    isRunning: false,
    activeStage: 0,
    startedAt: null,
    finishedAt: null,
    strictnessLevel: strictness,
    stage1Builder: emptyStage(agents.builder.provider, agents.builder.model),
    stage2RedTeam: emptyStage(agents.redTeam.provider, agents.redTeam.model),
    stage3Heuristic: emptyStage(null, 'Crucible rule engine'),
    stage4Judge: emptyStage(agents.judge.provider, agents.judge.model),
    prosecutorSummary: '',
    failureModes: [],
    heuristicChecks: [],
    judgeSynthesis: '',
    judgeReportedConfidence: null,
    confidence: null,
  };
}

function initialState(): CrucibleState {
  const agents = loadAgents();
  const storedStrictness = readJson<StrictnessLevel>(STORAGE.strictness);
  const strictness: StrictnessLevel =
    storedStrictness && storedStrictness in STRICTNESS_PRESETS ? storedStrictness : 'ruthless';
  const preset = STRICTNESS_PRESETS[strictness];

  const providerConfig = {} as Record<AIProvider, ProviderConfigEntry>;
  const pings = {} as CrucibleState['pings'];
  for (const p of PROVIDER_ORDER) {
    providerConfig[p] = { ...DEFAULT_PROVIDER_CONFIG[p] };
    pings[p] = null;
  }

  return {
    version: '2.0.0',
    strictnessLevel: strictness,
    providerConfig,
    apiKeys: loadKeys(),
    pings,
    agents,
    systemPrompts: loadPrompts(),
    mathParams: { p: 0.85, d: preset.d, r: preset.r, n: 20 },
    diffViewMode: 'annotated-diff',
    session: idleSession(agents, strictness),
  };
}

type TimedStageKey = 'stage1Builder' | 'stage2RedTeam' | 'stage4Judge';

export function useCruciblePipeline() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE.theme) === 'dark';
    } catch {
      return false;
    }
  });
  const [state, setState] = useState<CrucibleState>(initialState);
  const stateRef = useRef<CrucibleState>(state);
  stateRef.current = state;
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    try {
      localStorage.setItem(STORAGE.theme, isDark ? 'dark' : 'light');
    } catch {
      // Ignore storage failures.
    }
  }, [isDark]);

  useEffect(() => {
    const compact: Record<string, { provider: AIProvider; model: string }> = {};
    (Object.keys(state.agents) as AgentSlotId[]).forEach((slot) => {
      compact[slot] = { provider: state.agents[slot].provider, model: state.agents[slot].model };
    });
    writeJson(STORAGE.agents, compact);
    writeJson(STORAGE.strictness, state.strictnessLevel);
  }, [state.agents, state.strictnessLevel]);

  const toggleTheme = useCallback(() => setIsDark((prev) => !prev), []);

  /* ----------------------------- configuration ----------------------------- */

  const setApiKey = useCallback((provider: AIProvider, key: string) => {
    setState((prev) => {
      const apiKeys = { ...prev.apiKeys, [provider]: key };
      writeJson(STORAGE.keys, apiKeys);
      return { ...prev, apiKeys, pings: { ...prev.pings, [provider]: null } };
    });
  }, []);

  const setAgentProvider = useCallback((slot: AgentSlotId, provider: AIProvider) => {
    setState((prev) => {
      if (prev.agents[slot].provider === provider) return prev;
      return {
        ...prev,
        agents: {
          ...prev.agents,
          [slot]: {
            ...prev.agents[slot],
            provider,
            model: prev.providerConfig[provider].defaultModel,
          },
        },
      };
    });
  }, []);

  const setAgentModel = useCallback((slot: AgentSlotId, model: string) => {
    setState((prev) => ({
      ...prev,
      agents: { ...prev.agents, [slot]: { ...prev.agents[slot], model } },
    }));
  }, []);

  const testConnection = useCallback(async (provider: AIProvider) => {
    const key = stateRef.current.apiKeys[provider];
    setState((prev) => ({
      ...prev,
      pings: {
        ...prev.pings,
        [provider]: {
          provider,
          status: 'Testing',
          latencyMs: null,
          message: 'Contacting provider…',
          testedAt: Date.now(),
        },
      },
    }));

    const { ping, models } = await testProviderConnection(provider, key);

    setState((prev) => {
      let providerConfig = prev.providerConfig;
      let agents = prev.agents;
      if (ping.status === 'Connected' && models.length > 0) {
        const preferred = models.find((m) => m.id === prev.providerConfig[provider].defaultModel);
        providerConfig = {
          ...prev.providerConfig,
          [provider]: {
            ...prev.providerConfig[provider],
            models,
            isLiveList: true,
            defaultModel: preferred ? preferred.id : models[0].id,
          },
        };
        const nextAgents = { ...prev.agents };
        (Object.keys(nextAgents) as AgentSlotId[]).forEach((slot) => {
          const agent = nextAgents[slot];
          if (agent.provider === provider && !models.some((m) => m.id === agent.model)) {
            nextAgents[slot] = { ...agent, model: providerConfig[provider].defaultModel };
          }
        });
        agents = nextAgents;
      }
      return { ...prev, providerConfig, agents, pings: { ...prev.pings, [provider]: ping } };
    });
  }, []);

  const setStrictness = useCallback((level: StrictnessLevel) => {
    const preset = STRICTNESS_PRESETS[level];
    setState((prev) => ({
      ...prev,
      strictnessLevel: level,
      mathParams: { ...prev.mathParams, d: preset.d, r: preset.r },
    }));
  }, []);

  const updateMathParams = useCallback((partial: Partial<MathTelemetryParams>) => {
    setState((prev) => ({ ...prev, mathParams: { ...prev.mathParams, ...partial } }));
  }, []);

  const setDiffViewMode = useCallback((mode: DiffViewMode) => {
    setState((prev) => ({ ...prev, diffViewMode: mode }));
  }, []);

  const updateSystemPrompt = useCallback((role: keyof SystemPromptsConfig, value: string) => {
    setState((prev) => {
      const systemPrompts = { ...prev.systemPrompts, [role]: value };
      writeJson(STORAGE.prompts, systemPrompts);
      return { ...prev, systemPrompts };
    });
  }, []);

  const resetSystemPrompt = useCallback((role: keyof SystemPromptsConfig) => {
    setState((prev) => {
      const systemPrompts = { ...prev.systemPrompts, [role]: DEFAULT_SYSTEM_PROMPTS[role] };
      writeJson(STORAGE.prompts, systemPrompts);
      return { ...prev, systemPrompts };
    });
  }, []);

  /* ------------------------------- readiness ------------------------------- */

  const agentSlots: AgentSlotId[] = ['builder', 'redTeam', 'judge'];
  const missingKeyProviders = Array.from(
    new Set(
      agentSlots
        .map((slot) => state.agents[slot].provider)
        .filter((provider) => !state.apiKeys[provider].trim())
    )
  );
  const isReady =
    missingKeyProviders.length === 0 && agentSlots.every((slot) => Boolean(state.agents[slot].model));

  /* ------------------------------- pipeline -------------------------------- */

  const stopRun = useCallback(() => {
    if (abortRef.current) abortRef.current.abort();
  }, []);

  const runVerification = useCallback(async (promptText: string, exampleId: string | null = null) => {
    const prompt = promptText.trim();
    const snap = stateRef.current;
    if (!prompt || snap.session.isRunning) return;

    const { agents, apiKeys, systemPrompts, strictnessLevel } = snap;
    const slots: AgentSlotId[] = ['builder', 'redTeam', 'judge'];
    if (slots.some((slot) => !apiKeys[agents[slot].provider].trim() || !agents[slot].model)) return;

    const controller = new AbortController();
    abortRef.current = controller;
    const signal = controller.signal;

    const patch = (fn: (s: VerificationSessionState) => VerificationSessionState) =>
      setState((prev) => ({ ...prev, session: fn(prev.session) }));

    const fail = (key: TimedStageKey, err: unknown, content = '') => {
      const aborted = err instanceof Error && err.name === 'AbortError';
      const message = aborted
        ? 'Run stopped by user.'
        : err instanceof Error
        ? err.message
        : 'Unexpected error.';
      patch((s) => ({
        ...s,
        isRunning: false,
        finishedAt: Date.now(),
        [key]: {
          ...s[key],
          status: 'error',
          error: message,
          content: content || s[key].content,
          completedAt: Date.now(),
        },
      }));
    };

    const call = (
      slot: AgentSlotId,
      systemPrompt: string,
      userPrompt: string,
      jsonMode: boolean
    ): Promise<CompletionResult> =>
      generateLiveCompletion({
        provider: agents[slot].provider,
        apiKey: apiKeys[agents[slot].provider],
        model: agents[slot].model,
        systemPrompt,
        prompt: userPrompt,
        jsonMode,
        signal,
      });

    const runStart = Date.now();
    const fresh = idleSession(agents, strictnessLevel);
    setState((prev) => ({
      ...prev,
      session: {
        ...fresh,
        exampleId,
        prompt,
        isRunning: true,
        activeStage: 1,
        startedAt: runStart,
        stage1Builder: { ...fresh.stage1Builder, status: 'running', startedAt: runStart },
      },
    }));

    /* Stage 1 — The Architect */
    let draft: CompletionResult;
    try {
      draft = await call('builder', systemPrompts.builder, prompt, false);
    } catch (err) {
      fail('stage1Builder', err);
      return;
    }
    const stage2Start = Date.now();
    patch((s) => ({
      ...s,
      activeStage: 2,
      stage1Builder: {
        ...s.stage1Builder,
        status: 'completed',
        content: draft.text,
        completedAt: Date.now(),
        latencyMs: draft.latencyMs,
        inputTokens: draft.inputTokens,
        outputTokens: draft.outputTokens,
        apiCalls: 1,
        tokensReported: draft.tokensReported,
      },
      stage2RedTeam: { ...s.stage2RedTeam, status: 'running', startedAt: stage2Start },
    }));

    /* Stage 2 — Red-Team Prosecutor (one repair retry if the JSON is malformed) */
    const redTeamPrompt = buildRedTeamPrompt({
      userPrompt: prompt,
      stage1Draft: draft.text,
      strictnessLevel,
    });
    const totals = { input: 0, output: 0, latency: 0, calls: 0, reported: true };
    let parsedRedTeam: ReturnType<typeof parseRedTeamOutput> = null;
    let lastRaw = '';
    try {
      for (let attempt = 0; attempt < 2 && !parsedRedTeam; attempt++) {
        const userPrompt =
          attempt === 0
            ? redTeamPrompt
            : `${redTeamPrompt}\n\nYour previous reply was not valid JSON. Reply again with ONLY the JSON object, no prose and no code fences.`;
        const res = await call('redTeam', systemPrompts.redTeam, userPrompt, true);
        totals.input += res.inputTokens;
        totals.output += res.outputTokens;
        totals.latency += res.latencyMs;
        totals.calls += 1;
        totals.reported = totals.reported && res.tokensReported;
        lastRaw = res.text;
        parsedRedTeam = parseRedTeamOutput(res.text, draft.text);
      }
    } catch (err) {
      fail('stage2RedTeam', err);
      return;
    }
    if (!parsedRedTeam) {
      fail(
        'stage2RedTeam',
        new Error(
          'The Red-Team model did not return valid JSON after two attempts. Choose a stronger model for Stage 2 or relax your custom prompt.'
        ),
        lastRaw
      );
      return;
    }
    const redTeam = parsedRedTeam;

    /* Stage 3 — Deterministic heuristic & schema gate (local, zero API calls) */
    const gateStart = performance.now();
    const gateChecks = runDeterministicGate(draft.text, null);
    const gateMs = Math.max(1, Math.round(performance.now() - gateStart));
    const stage4Start = Date.now();

    patch((s) => ({
      ...s,
      activeStage: 4,
      prosecutorSummary: redTeam.summary,
      failureModes: redTeam.failureModes,
      heuristicChecks: gateChecks,
      stage2RedTeam: {
        ...s.stage2RedTeam,
        status: 'completed',
        content: redTeam.summary,
        completedAt: Date.now(),
        latencyMs: totals.latency,
        inputTokens: totals.input,
        outputTokens: totals.output,
        apiCalls: totals.calls,
        tokensReported: totals.reported,
      },
      stage3Heuristic: {
        ...s.stage3Heuristic,
        status: 'completed',
        content: `${gateChecks.length} deterministic checks executed locally.`,
        startedAt: stage4Start - gateMs,
        completedAt: stage4Start,
        latencyMs: gateMs,
      },
      stage4Judge: { ...s.stage4Judge, status: 'running', startedAt: stage4Start },
    }));

    /* Stage 4 — Chief Judge */
    const judgePrompt = buildJudgePrompt({
      userPrompt: prompt,
      stage1Draft: draft.text,
      prosecutorSummary: redTeam.summary,
      failureModes: redTeam.failureModes,
      heuristicChecks: gateChecks,
      strictnessLevel,
    });
    let judgeRes: CompletionResult;
    try {
      judgeRes = await call('judge', systemPrompts.judge, judgePrompt, false);
    } catch (err) {
      fail('stage4Judge', err);
      return;
    }
    const verdict = parseJudgeOutput(judgeRes.text);
    if (!verdict.verifiedOutput.trim()) {
      fail('stage4Judge', new Error('The Chief Judge returned an empty verified output.'));
      return;
    }

    const finalChecks = runDeterministicGate(draft.text, verdict.verifiedOutput);
    const confidence = computeConfidence(verdict.confidence, finalChecks, redTeam.failureModes);
    const synthesis =
      verdict.synthesis ||
      'The Judge did not follow the requested response layout, so its full reply is shown below as the verified output.';

    patch((s) => ({
      ...s,
      isRunning: false,
      finishedAt: Date.now(),
      heuristicChecks: finalChecks,
      judgeSynthesis: synthesis,
      judgeReportedConfidence: verdict.confidence,
      confidence,
      stage4Judge: {
        ...s.stage4Judge,
        status: 'completed',
        content: verdict.verifiedOutput,
        completedAt: Date.now(),
        latencyMs: judgeRes.latencyMs,
        inputTokens: judgeRes.inputTokens,
        outputTokens: judgeRes.outputTokens,
        apiCalls: 1,
        tokensReported: judgeRes.tokensReported,
      },
    }));
  }, []);

  return {
    state,
    session: state.session,
    isDark,
    isReady,
    missingKeyProviders,
    toggleTheme,
    setApiKey,
    setAgentProvider,
    setAgentModel,
    testConnection,
    setStrictness,
    updateMathParams,
    setDiffViewMode,
    updateSystemPrompt,
    resetSystemPrompt,
    runVerification,
    stopRun,
  };
}
