export type AIProvider = 'gemini' | 'openai' | 'anthropic' | 'groq' | 'openrouter';

export type AgentSlotId = 'builder' | 'redTeam' | 'judge';

export type StrictnessLevel = 'standard' | 'ruthless' | 'formal';

export type FailureTaxonomyBadge =
  | '[STATE DRIFT]'
  | '[RLHF SYCOPHANCY]'
  | '[CONTEXT POLLUTION]'
  | '[HALLUCINATED API / SCHEMA]'
  | '[UNHANDLED EDGE CASE / SECURITY]';

export type FailureSeverity = 'CRITICAL' | 'HIGH' | 'MEDIUM';

export interface FailureModeRow {
  id: string;
  category: FailureTaxonomyBadge;
  severity: FailureSeverity;
  flawedSnippet: string;
  requiredFix: string;
  /** True when the quoted snippet was found verbatim (whitespace-normalised) in the Stage 1 draft. */
  groundedInDraft: boolean;
}

export type HeuristicStatus = 'PASS' | 'FAIL' | 'WARN' | 'N/A';

export interface HeuristicCheckItem {
  id: string;
  checkName: string;
  category: string;
  stage1Status: HeuristicStatus;
  stage4Status: HeuristicStatus | null;
  detail: string;
  evidence: string[];
}

export interface ModelOption {
  id: string;
  displayName: string;
}

export type ConnectionStatus = 'Connected' | 'Invalid Key' | 'Unverified' | 'Testing';

export interface PingResult {
  provider: AIProvider;
  status: ConnectionStatus;
  latencyMs: number | null;
  message: string;
  testedAt: number;
}

export interface ProviderConfigEntry {
  provider: AIProvider;
  label: string;
  shortLabel: string;
  placeholder: string;
  keyHelpUrl: string;
  models: ModelOption[];
  isLiveList: boolean;
  defaultModel: string;
}

export interface AgentConfig {
  slotId: AgentSlotId;
  stageNumber: 1 | 2 | 4;
  title: string;
  role: string;
  provider: AIProvider;
  model: string;
}

export type ExecutionStatus = 'idle' | 'running' | 'completed' | 'error';

export interface StageExecutionState {
  status: ExecutionStatus;
  content: string;
  error: string | null;
  startedAt: number | null;
  completedAt: number | null;
  latencyMs: number;
  inputTokens: number;
  outputTokens: number;
  apiCalls: number;
  provider: AIProvider | null;
  model: string;
  /** True when token counts come from provider usage metadata rather than a local estimate. */
  tokensReported: boolean;
}

export type DiffViewMode = 'side-by-side' | 'annotated-diff' | 'clean-final';

export interface DiffLine {
  type: 'unchanged' | 'removed' | 'added';
  oldLineNumber: number | null;
  newLineNumber: number | null;
  text: string;
  flawBadge?: FailureTaxonomyBadge;
}

export interface SideBySideDiffRow {
  leftLineNumber: number | null;
  leftText: string;
  leftType: 'unchanged' | 'removed' | 'empty';
  rightLineNumber: number | null;
  rightText: string;
  rightType: 'unchanged' | 'added' | 'empty';
}

export interface DiffComputationResult {
  unifiedLines: DiffLine[];
  sideBySideRows: SideBySideDiffRow[];
  removedCount: number;
  addedCount: number;
}

export interface SystemPromptsConfig {
  builder: string;
  redTeam: string;
  judge: string;
}

export interface MathTelemetryParams {
  p: number;
  d: number;
  r: number;
  n: number;
}

export interface HorizonTelemetryRow {
  n: number;
  openLoopPct: number;
  closedLoopPct: number;
  reliabilityGainPct: number;
  openStatus: 'Stable' | 'Degrading' | 'Collapsed';
  closedStatus: 'Stable' | 'Degrading' | 'Collapsed';
}

export interface CostBreakdownRow {
  stageId: string;
  stageLabel: string;
  modelUsed: string;
  inputTokens: number;
  outputTokens: number;
  apiCalls: number;
  latencyMs: number;
  estimatedCostUsd: number;
  priceKnown: boolean;
}

export interface ConfidenceBreakdown {
  score: number;
  judgeReported: number | null;
  gateFailures: number;
  gateWarnings: number;
  ungroundedFindings: number;
  explanation: string;
}

export interface ExampleTask {
  id: string;
  label: string;
  tag: string;
  prompt: string;
}

export interface VerificationSessionState {
  exampleId: string | null;
  prompt: string;
  isRunning: boolean;
  activeStage: 0 | 1 | 2 | 3 | 4;
  startedAt: number | null;
  finishedAt: number | null;
  strictnessLevel: StrictnessLevel;
  stage1Builder: StageExecutionState;
  stage2RedTeam: StageExecutionState;
  stage3Heuristic: StageExecutionState;
  stage4Judge: StageExecutionState;
  prosecutorSummary: string;
  failureModes: FailureModeRow[];
  heuristicChecks: HeuristicCheckItem[];
  judgeSynthesis: string;
  judgeReportedConfidence: number | null;
  confidence: ConfidenceBreakdown | null;
}

export interface CrucibleState {
  version: string;
  strictnessLevel: StrictnessLevel;
  providerConfig: Record<AIProvider, ProviderConfigEntry>;
  apiKeys: Record<AIProvider, string>;
  pings: Record<AIProvider, PingResult | null>;
  agents: Record<AgentSlotId, AgentConfig>;
  systemPrompts: SystemPromptsConfig;
  mathParams: MathTelemetryParams;
  diffViewMode: DiffViewMode;
  session: VerificationSessionState;
}
