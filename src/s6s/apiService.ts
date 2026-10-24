import {
  AIProvider,
  FailureModeRow,
  HeuristicCheckItem,
  ModelOption,
  PingResult,
  ProviderConfigEntry,
  StrictnessLevel,
  SystemPromptsConfig,
} from '../t3s/types';

export const PROVIDER_ORDER: AIProvider[] = [
  'openai',
  'anthropic',
  'gemini',
  'groq',
  'openrouter',
];

export const DEFAULT_PROVIDER_CONFIG: Record<AIProvider, ProviderConfigEntry> = {
  gemini: {
    provider: 'gemini',
    label: 'Google Gemini',
    shortLabel: 'Gemini',
    placeholder: 'AIzaSy…',
    keyHelpUrl: 'https://aistudio.google.com/apikey',
    models: [
      { id: 'gemini-2.0-flash', displayName: 'Gemini 2.0 Flash' },
      { id: 'gemini-1.5-pro', displayName: 'Gemini 1.5 Pro' },
      { id: 'gemini-1.5-flash', displayName: 'Gemini 1.5 Flash' },
    ],
    isLiveList: false,
    defaultModel: 'gemini-2.0-flash',
  },
  openai: {
    provider: 'openai',
    label: 'OpenAI',
    shortLabel: 'OpenAI',
    placeholder: 'sk-proj-…',
    keyHelpUrl: 'https://platform.openai.com/api-keys',
    models: [
      { id: 'gpt-4o', displayName: 'GPT-4o' },
      { id: 'gpt-4o-mini', displayName: 'GPT-4o mini' },
      { id: 'o3-mini', displayName: 'o3-mini' },
    ],
    isLiveList: false,
    defaultModel: 'gpt-4o',
  },
  anthropic: {
    provider: 'anthropic',
    label: 'Anthropic Claude',
    shortLabel: 'Claude',
    placeholder: 'sk-ant-api03-…',
    keyHelpUrl: 'https://console.anthropic.com/settings/keys',
    models: [
      { id: 'claude-3-5-sonnet-latest', displayName: 'Claude 3.5 Sonnet' },
      { id: 'claude-3-5-haiku-latest', displayName: 'Claude 3.5 Haiku' },
    ],
    isLiveList: false,
    defaultModel: 'claude-3-5-sonnet-latest',
  },
  groq: {
    provider: 'groq',
    label: 'Groq',
    shortLabel: 'Groq',
    placeholder: 'gsk_…',
    keyHelpUrl: 'https://console.groq.com/keys',
    models: [
      { id: 'llama-3.3-70b-versatile', displayName: 'Llama 3.3 70B Versatile' },
      { id: 'llama-3.1-8b-instant', displayName: 'Llama 3.1 8B Instant' },
    ],
    isLiveList: false,
    defaultModel: 'llama-3.3-70b-versatile',
  },
  openrouter: {
    provider: 'openrouter',
    label: 'OpenRouter',
    shortLabel: 'OpenRouter',
    placeholder: 'sk-or-v1-…',
    keyHelpUrl: 'https://openrouter.ai/keys',
    models: [
      { id: 'anthropic/claude-3.5-sonnet', displayName: 'Anthropic: Claude 3.5 Sonnet' },
      { id: 'openai/gpt-4o', displayName: 'OpenAI: GPT-4o' },
      { id: 'google/gemini-2.0-flash-001', displayName: 'Google: Gemini 2.0 Flash' },
      { id: 'meta-llama/llama-3.3-70b-instruct', displayName: 'Meta: Llama 3.3 70B Instruct' },
    ],
    isLiveList: false,
    defaultModel: 'anthropic/claude-3.5-sonnet',
  },
};

/* -------------------------------------------------------------------------- */
/*  Pricing (USD per 1M tokens — public list prices, used for cost estimates)  */
/* -------------------------------------------------------------------------- */

interface PriceRule {
  match: RegExp;
  input: number;
  output: number;
}

const PRICE_RULES: PriceRule[] = [
  { match: /gpt-4o-mini/i, input: 0.15, output: 0.6 },
  { match: /gpt-4o/i, input: 2.5, output: 10 },
  { match: /gpt-4\.1-mini/i, input: 0.4, output: 1.6 },
  { match: /gpt-4\.1/i, input: 2, output: 8 },
  { match: /o4-mini|o3-mini|o1-mini/i, input: 1.1, output: 4.4 },
  { match: /\bo3\b|o3-2/i, input: 2, output: 8 },
  { match: /\bo1\b|o1-2/i, input: 15, output: 60 },
  { match: /claude-3-5-haiku|claude-3\.5-haiku/i, input: 0.8, output: 4 },
  { match: /haiku-4|haiku-4\.5/i, input: 1, output: 5 },
  { match: /claude-3-haiku/i, input: 0.25, output: 1.25 },
  { match: /opus/i, input: 15, output: 75 },
  { match: /sonnet/i, input: 3, output: 15 },
  { match: /gemini-2\.5-pro/i, input: 1.25, output: 10 },
  { match: /gemini-2\.5-flash/i, input: 0.3, output: 2.5 },
  { match: /gemini-2\.0-flash/i, input: 0.1, output: 0.4 },
  { match: /gemini-1\.5-flash/i, input: 0.075, output: 0.3 },
  { match: /gemini-1\.5-pro/i, input: 1.25, output: 5 },
  { match: /llama-3\.3-70b/i, input: 0.59, output: 0.79 },
  { match: /llama-3\.1-8b/i, input: 0.05, output: 0.08 },
  { match: /mixtral/i, input: 0.24, output: 0.24 },
];

export function getModelPricing(
  model: string
): { input: number; output: number; known: boolean } {
  for (const rule of PRICE_RULES) {
    if (rule.match.test(model)) {
      return { input: rule.input, output: rule.output, known: true };
    }
  }
  return { input: 0, output: 0, known: false };
}

/* -------------------------------------------------------------------------- */
/*  System prompts                                                             */
/* -------------------------------------------------------------------------- */

export const DEFAULT_SYSTEM_PROMPTS: SystemPromptsConfig = {
  builder:
    'You are Stage 1, The Architect (Builder Agent), in the Crucible.ai closed-loop adversarial verification runtime. ' +
    'Produce a complete, concrete solution to the user task: working code, a SQL migration, a system design, or a technical synthesis. ' +
    'Put all code in fenced code blocks. Do not flatter the user, do not claim the result is perfect or guaranteed, and never invent APIs, library methods, citations, or benchmark numbers. ' +
    'If you are unsure whether something exists, say so explicitly instead of guessing.',

  redTeam:
    'You are Stage 2, The Red-Team Prosecutor (Adversarial Critic), in Crucible.ai. ' +
    'ANTI-SYCOPHANCY MANDATE: never politely agree with or praise Stage 1. Assume the draft contains subtle bugs, race conditions, hallucinated APIs, state drift, unsafe operations, and unjustified claims, then try to prove it.\n\n' +
    'Classify every finding with exactly one of these taxonomy badges:\n' +
    '- [STATE DRIFT]  (wrong math, unit errors, off-by-one, state that silently diverges)\n' +
    '- [RLHF SYCOPHANCY]  (flattery, false assurances, vacuous tests, unearned certainty)\n' +
    '- [CONTEXT POLLUTION]  (shared mutable state, leaked context, scope that bleeds between runs)\n' +
    '- [HALLUCINATED API / SCHEMA]  (methods, parameters, settings, citations, or numbers that do not exist)\n' +
    '- [UNHANDLED EDGE CASE / SECURITY]  (missing error handling, injection, races, destructive operations)\n\n' +
    'Rules: every finding MUST quote a snippet that appears verbatim in the Stage 1 draft. Do not invent findings to fill a quota. If a category has no genuine flaw, report nothing for it.\n\n' +
    'Return ONLY a valid JSON object, no markdown fences, matching this schema:\n' +
    '{\n' +
    '  "prosecutorSummary": "Two to four sentences summarising the most serious problems.",\n' +
    '  "failureModes": [\n' +
    '    {\n' +
    '      "id": "FLAW-01",\n' +
    '      "category": "[STATE DRIFT]" | "[RLHF SYCOPHANCY]" | "[CONTEXT POLLUTION]" | "[HALLUCINATED API / SCHEMA]" | "[UNHANDLED EDGE CASE / SECURITY]",\n' +
    '      "severity": "CRITICAL" | "HIGH" | "MEDIUM",\n' +
    '      "flawedSnippet": "Exact text copied from the Stage 1 draft",\n' +
    '      "requiredFix": "Precise, actionable fix"\n' +
    '    }\n' +
    '  ]\n' +
    '}',

  judge:
    'You are Stage 4, The Chief Judge (Synthesizer & Repair Engine), in Crucible.ai. ' +
    'Cross-examine the Stage 1 draft against the Stage 2 failure table and the Stage 3 deterministic gate results. ' +
    'Reject any Red-Team finding that is wrong (the Prosecutor can also hallucinate), prune hallucinated APIs and citations, remove flattery and false assurances, and repair every genuine flaw. ' +
    'Keep the original structure and wording wherever it was already correct so the diff stays honest and minimal.\n\n' +
    'Respond using EXACTLY this layout and nothing before or after it:\n' +
    '=====SYNTHESIS=====\n' +
    '<3 to 6 sentences: what you repaired, what you pruned, which findings you rejected and why>\n' +
    '=====CONFIDENCE=====\n' +
    '<a single integer 0-100: your honest confidence the output is now correct>\n' +
    '=====VERIFIED OUTPUT=====\n' +
    '<the complete repaired output, with code in fenced code blocks>',
};

/* -------------------------------------------------------------------------- */
/*  Provider HTTP layer                                                        */
/* -------------------------------------------------------------------------- */

async function readApiError(response: Response, label: string): Promise<Error> {
  let message = `${label} error (HTTP ${response.status})`;
  try {
    const data = await response.json();
    const detail =
      data?.error?.message ||
      data?.error?.error?.message ||
      (typeof data?.message === 'string' ? data.message : '');
    if (detail) message = `${label}: ${detail}`;
  } catch {
    // Body was not JSON; keep the generic message.
  }
  return new Error(message);
}

export async function fetchProviderModels(
  provider: AIProvider,
  rawApiKey: string,
  signal?: AbortSignal
): Promise<ModelOption[]> {
  const apiKey = rawApiKey.trim();
  if (!apiKey) throw new Error('Enter an API key first.');
  const label = DEFAULT_PROVIDER_CONFIG[provider].label;

  if (provider === 'gemini') {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?pageSize=200&key=${encodeURIComponent(apiKey)}`,
      { method: 'GET', signal }
    );
    if (!response.ok) throw await readApiError(response, label);
    const data = await response.json();
    const raw: Array<{
      name?: string;
      displayName?: string;
      supportedGenerationMethods?: string[];
    }> = Array.isArray(data?.models) ? data.models : [];
    const models = raw
      .filter(
        (m) =>
          typeof m?.name === 'string' &&
          Array.isArray(m.supportedGenerationMethods) &&
          m.supportedGenerationMethods.includes('generateContent')
      )
      .map((m) => {
        const id = (m.name as string).replace(/^models\//, '');
        return { id, displayName: m.displayName ? `${m.displayName} (${id})` : id };
      });
    if (models.length === 0) throw new Error('This Gemini key has no generateContent models.');
    return models;
  }

  if (provider === 'openai') {
    const response = await fetch('https://api.openai.com/v1/models', {
      method: 'GET',
      headers: { Authorization: `Bearer ${apiKey}` },
      signal,
    });
    if (!response.ok) throw await readApiError(response, label);
    const data = await response.json();
    const raw: Array<{ id?: string }> = Array.isArray(data?.data) ? data.data : [];
    const include = ['gpt-', 'o1', 'o3', 'o4', 'chatgpt-'];
    const exclude = [
      'realtime',
      'audio',
      'tts',
      'transcribe',
      'whisper',
      'embedding',
      'moderation',
      'dall-e',
      'search',
      'image',
      'instruct',
    ];
    const models = raw
      .filter((m) => {
        if (typeof m?.id !== 'string') return false;
        const id = m.id.toLowerCase();
        return include.some((p) => id.startsWith(p)) && !exclude.some((s) => id.includes(s));
      })
      .map((m) => ({ id: m.id as string, displayName: m.id as string }))
      .sort((a, b) => a.id.localeCompare(b.id));
    if (models.length === 0) throw new Error('This OpenAI key has no compatible chat models.');
    return models;
  }

  if (provider === 'anthropic') {
    const response = await fetch('https://api.anthropic.com/v1/models?limit=100', {
      method: 'GET',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      signal,
    });
    if (!response.ok) throw await readApiError(response, label);
    const data = await response.json();
    const raw: Array<{ id?: string; display_name?: string }> = Array.isArray(data?.data)
      ? data.data
      : [];
    const models = raw
      .filter((m) => typeof m?.id === 'string')
      .map((m) => ({
        id: m.id as string,
        displayName: m.display_name ? `${m.display_name} (${m.id})` : (m.id as string),
      }));
    if (models.length === 0) throw new Error('This Anthropic key returned no models.');
    return models;
  }

  if (provider === 'groq') {
    const response = await fetch('https://api.groq.com/openai/v1/models', {
      method: 'GET',
      headers: { Authorization: `Bearer ${apiKey}` },
      signal,
    });
    if (!response.ok) throw await readApiError(response, label);
    const data = await response.json();
    const raw: Array<{ id?: string }> = Array.isArray(data?.data) ? data.data : [];
    const models = raw
      .filter((m) => {
        if (typeof m?.id !== 'string') return false;
        const id = m.id.toLowerCase();
        return !id.includes('whisper') && !id.includes('tts') && !id.includes('guard');
      })
      .map((m) => ({ id: m.id as string, displayName: m.id as string }))
      .sort((a, b) => a.id.localeCompare(b.id));
    if (models.length === 0) throw new Error('This Groq key returned no chat models.');
    return models;
  }

  const response = await fetch('https://openrouter.ai/api/v1/models', {
    method: 'GET',
    headers: { Authorization: `Bearer ${apiKey}` },
    signal,
  });
  if (!response.ok) throw await readApiError(response, label);
  const data = await response.json();
  const raw: Array<{ id?: string; name?: string }> = Array.isArray(data?.data) ? data.data : [];
  const models = raw
    .filter((m) => typeof m?.id === 'string')
    .map((m) => ({
      id: m.id as string,
      displayName: m.name ? `${m.name} (${m.id})` : (m.id as string),
    }));
  if (models.length === 0) throw new Error('OpenRouter returned no models.');
  return models;
}

/**
 * Test Connection (Ping): performs a real authenticated request against the provider,
 * measures round-trip latency in ms, and returns the live model list on success.
 */
export async function testProviderConnection(
  provider: AIProvider,
  apiKey: string
): Promise<{ ping: PingResult; models: ModelOption[] }> {
  const trimmed = apiKey.trim();
  if (!trimmed) {
    return {
      ping: {
        provider,
        status: 'Invalid Key',
        latencyMs: null,
        message: 'No API key entered.',
        testedAt: Date.now(),
      },
      models: [],
    };
  }

  const start = performance.now();
  try {
    const models = await fetchProviderModels(provider, trimmed);
    const latencyMs = Math.max(1, Math.round(performance.now() - start));
    return {
      ping: {
        provider,
        status: 'Connected',
        latencyMs,
        message: `${models.length} models available`,
        testedAt: Date.now(),
      },
      models,
    };
  } catch (err) {
    const latencyMs = Math.max(1, Math.round(performance.now() - start));
    const raw = err instanceof Error ? err.message : 'Request failed';
    const networkIssue = /failed to fetch|networkerror|load failed/i.test(raw);
    return {
      ping: {
        provider,
        status: 'Invalid Key',
        latencyMs: networkIssue ? null : latencyMs,
        message: networkIssue
          ? 'Network or CORS error: could not reach the provider.'
          : raw,
        testedAt: Date.now(),
      },
      models: [],
    };
  }
}

export interface CompletionResult {
  text: string;
  inputTokens: number;
  outputTokens: number;
  tokensReported: boolean;
  latencyMs: number;
}

export async function generateLiveCompletion(params: {
  provider: AIProvider;
  apiKey: string;
  model: string;
  systemPrompt: string;
  prompt: string;
  jsonMode?: boolean;
  signal?: AbortSignal;
}): Promise<CompletionResult> {
  const { provider, model, systemPrompt, prompt, jsonMode, signal } = params;
  const apiKey = params.apiKey.trim();
  const label = DEFAULT_PROVIDER_CONFIG[provider].label;

  if (!apiKey) throw new Error(`Missing ${label} API key.`);
  if (!model) throw new Error('No model selected.');

  const started = performance.now();
  const finish = (
    text: string,
    inTok: number | undefined,
    outTok: number | undefined
  ): CompletionResult => {
    const reported = typeof inTok === 'number' && typeof outTok === 'number';
    return {
      text,
      inputTokens: reported ? (inTok as number) : estimateTokens(systemPrompt + prompt),
      outputTokens: reported ? (outTok as number) : estimateTokens(text),
      tokensReported: reported,
      latencyMs: Math.max(1, Math.round(performance.now() - started)),
    };
  };

  if (provider === 'gemini') {
    const cleanModel = model.replace(/^models\//, '');
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(
        cleanModel
      )}:generateContent?key=${encodeURIComponent(apiKey)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal,
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          systemInstruction: { parts: [{ text: systemPrompt }] },
          ...(jsonMode ? { generationConfig: { responseMimeType: 'application/json' } } : {}),
        }),
      }
    );
    if (!response.ok) throw await readApiError(response, label);
    const data = await response.json();
    const parts: Array<{ text?: string; thought?: boolean }> =
      data?.candidates?.[0]?.content?.parts ?? [];
    const text = parts
      .filter((p) => !p.thought)
      .map((p) => p.text || '')
      .join('');
    if (!text.trim()) {
      const reason = data?.candidates?.[0]?.finishReason || data?.promptFeedback?.blockReason;
      throw new Error(`${label} returned an empty response${reason ? ` (${reason})` : ''}.`);
    }
    const usage = data?.usageMetadata;
    const outTok =
      typeof usage?.candidatesTokenCount === 'number'
        ? usage.candidatesTokenCount + (usage.thoughtsTokenCount || 0)
        : undefined;
    return finish(text, usage?.promptTokenCount, outTok);
  }

  if (provider === 'anthropic') {
    const smallCap = /claude-3-(opus|haiku)/i.test(model);
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
        'Content-Type': 'application/json',
      },
      signal,
      body: JSON.stringify({
        model,
        max_tokens: smallCap ? 4096 : 8192,
        system: systemPrompt,
        messages: [{ role: 'user', content: prompt }],
      }),
    });
    if (!response.ok) throw await readApiError(response, label);
    const data = await response.json();
    const text = Array.isArray(data?.content)
      ? data.content
          .filter((b: { type?: string }) => b.type === 'text')
          .map((b: { text: string }) => b.text)
          .join('\n')
      : '';
    if (!text.trim()) throw new Error(`${label} returned an empty response.`);
    return finish(text, data?.usage?.input_tokens, data?.usage?.output_tokens);
  }

  const endpoints: Record<'openai' | 'groq' | 'openrouter', string> = {
    openai: 'https://api.openai.com/v1/chat/completions',
    groq: 'https://api.groq.com/openai/v1/chat/completions',
    openrouter: 'https://openrouter.ai/api/v1/chat/completions',
  };
  const headers: Record<string, string> = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };
  if (provider === 'openrouter') {
    headers['HTTP-Referer'] =
      typeof window !== 'undefined' && window.location.origin.startsWith('http')
        ? window.location.origin
        : 'https://crucible.ai';
    headers['X-Title'] = 'Crucible.ai';
  }
  const supportsJsonMode =
    (provider === 'openai' && /^gpt-/i.test(model)) || provider === 'groq';

  const response = await fetch(endpoints[provider as 'openai' | 'groq' | 'openrouter'], {
    method: 'POST',
    headers,
    signal,
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt },
      ],
      ...(jsonMode && supportsJsonMode ? { response_format: { type: 'json_object' } } : {}),
    }),
  });
  if (!response.ok) throw await readApiError(response, label);
  const data = await response.json();
  const text = data?.choices?.[0]?.message?.content;
  if (typeof text !== 'string' || !text.trim()) {
    throw new Error(`${label} returned an empty response.`);
  }
  return finish(text, data?.usage?.prompt_tokens, data?.usage?.completion_tokens);
}

export function estimateTokens(text: string): number {
  if (!text) return 0;
  return Math.max(1, Math.ceil(text.length / 3.8));
}

/* -------------------------------------------------------------------------- */
/*  Stage prompt builders                                                      */
/* -------------------------------------------------------------------------- */

const STRICTNESS_INSTRUCTIONS: Record<StrictnessLevel, string> = {
  standard:
    'STRICTNESS: STANDARD AUDIT (d=0.65, r=0.75). Report primary correctness, safety, and schema flaws.',
  ruthless:
    'STRICTNESS: RUTHLESS RED-TEAM (d=0.82, r=0.85). Hunt aggressively for race conditions, hallucinated symbols, state drift, unit errors, and unearned certainty.',
  formal:
    'STRICTNESS: FORMAL VERIFICATION HARNESS (d=0.92, r=0.90). Demand explicit invariants, idempotency arguments, and evidence for every quantitative or factual claim. Treat any unstated assumption as a finding.',
};

export function buildRedTeamPrompt(params: {
  userPrompt: string;
  stage1Draft: string;
  strictnessLevel: StrictnessLevel;
}): string {
  return [
    STRICTNESS_INSTRUCTIONS[params.strictnessLevel],
    '',
    '=== ORIGINAL TASK ===',
    params.userPrompt,
    '',
    '=== STAGE 1 DRAFT (audit this) ===',
    params.stage1Draft,
    '',
    '=== INSTRUCTIONS ===',
    'Do not agree with or praise the draft. Quote exact snippets. Respond with the JSON object described in your system prompt and nothing else.',
  ].join('\n');
}

export function buildJudgePrompt(params: {
  userPrompt: string;
  stage1Draft: string;
  prosecutorSummary: string;
  failureModes: FailureModeRow[];
  heuristicChecks: HeuristicCheckItem[];
  strictnessLevel: StrictnessLevel;
}): string {
  const gate = params.heuristicChecks.map((c) => ({
    id: c.id,
    check: c.checkName,
    status: c.stage1Status,
    detail: c.detail,
    evidence: c.evidence,
  }));
  const modes = params.failureModes.map((f) => ({
    id: f.id,
    category: f.category,
    severity: f.severity,
    flawedSnippet: f.flawedSnippet,
    requiredFix: f.requiredFix,
    snippetFoundInDraft: f.groundedInDraft,
  }));

  return [
    STRICTNESS_INSTRUCTIONS[params.strictnessLevel],
    '',
    '=== ORIGINAL TASK ===',
    params.userPrompt,
    '',
    '=== STAGE 1 DRAFT ===',
    params.stage1Draft,
    '',
    '=== STAGE 2 RED-TEAM SUMMARY ===',
    params.prosecutorSummary,
    '',
    '=== STAGE 2 FAILURE MODES (JSON; snippetFoundInDraft=false means the quote could not be located and may be a hallucinated finding) ===',
    JSON.stringify(modes, null, 2),
    '',
    '=== STAGE 3 DETERMINISTIC GATE (JSON) ===',
    JSON.stringify(gate, null, 2),
    '',
    '=== INSTRUCTIONS ===',
    'Repair every genuine flaw and respond in the exact =====SYNTHESIS===== / =====CONFIDENCE===== / =====VERIFIED OUTPUT===== layout from your system prompt.',
  ].join('\n');
}
