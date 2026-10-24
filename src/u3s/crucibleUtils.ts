import {
  ConfidenceBreakdown,
  CostBreakdownRow,
  DiffComputationResult,
  DiffLine,
  FailureModeRow,
  FailureSeverity,
  FailureTaxonomyBadge,
  HeuristicCheckItem,
  HeuristicStatus,
  HorizonTelemetryRow,
  MathTelemetryParams,
  SideBySideDiffRow,
  StageExecutionState,
  StrictnessLevel,
  VerificationSessionState,
} from '../t3s/types';
import { DEFAULT_PROVIDER_CONFIG, getModelPricing } from '../s6s/apiService';

/* -------------------------------------------------------------------------- */
/*  Strictness presets                                                         */
/* -------------------------------------------------------------------------- */

export const STRICTNESS_PRESETS: Record<
  StrictnessLevel,
  { id: StrictnessLevel; label: string; short: string; d: number; r: number; description: string }
> = {
  standard: {
    id: 'standard',
    label: 'Standard Audit',
    short: 'Standard',
    d: 0.65,
    r: 0.75,
    description: 'Baseline correctness, safety and schema review.',
  },
  ruthless: {
    id: 'ruthless',
    label: 'Ruthless Red-Team',
    short: 'Ruthless',
    d: 0.82,
    r: 0.85,
    description: 'Aggressive hunt for races, state drift and hallucinated symbols.',
  },
  formal: {
    id: 'formal',
    label: 'Formal Verification Harness',
    short: 'Formal',
    d: 0.92,
    r: 0.9,
    description: 'Explicit invariants and evidence for every claim.',
  },
};

export const TAXONOMY_BADGES: FailureTaxonomyBadge[] = [
  '[STATE DRIFT]',
  '[RLHF SYCOPHANCY]',
  '[CONTEXT POLLUTION]',
  '[HALLUCINATED API / SCHEMA]',
  '[UNHANDLED EDGE CASE / SECURITY]',
];

/* -------------------------------------------------------------------------- */
/*  Formatting helpers                                                         */
/* -------------------------------------------------------------------------- */

export function formatMs(ms: number): string {
  if (!ms) return '0 ms';
  if (ms < 1000) return `${Math.round(ms)} ms`;
  return `${(ms / 1000).toFixed(2)} s`;
}

export function formatUsd(value: number): string {
  if (value === 0) return '$0.00';
  if (value < 0.01) return `$${value.toFixed(5)}`;
  return `$${value.toFixed(4)}`;
}

export function formatTokens(value: number): string {
  return Math.round(value).toLocaleString('en-US');
}

function escapeCell(text: string): string {
  return String(text).replace(/\|/g, '\\|').replace(/\s*\n\s*/g, ' ');
}

/* -------------------------------------------------------------------------- */
/*  Stage 3 — Deterministic heuristic & schema gate                            */
/* -------------------------------------------------------------------------- */

interface CheckResult {
  status: HeuristicStatus;
  detail: string;
  evidence: string[];
}

function fencedBlocks(text: string): string[] {
  const blocks: string[] = [];
  const re = /```[^\n]*\n([\s\S]*?)```/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(text)) !== null) {
    blocks.push(match[1]);
  }
  return blocks;
}

/** Code-only view of a response: fenced blocks (or whole text) minus comment-only lines. */
function codeView(text: string): string {
  const blocks = fencedBlocks(text);
  const base = blocks.length > 0 ? blocks.join('\n') : text;
  return base
    .split('\n')
    .filter((line) => !/^\s*(--|\/\/|#|\*|\/\*)/.test(line))
    .join('\n');
}

function proseView(text: string): string {
  return text.replace(/```[\s\S]*?```/g, ' ');
}

function looksLikeCode(text: string): boolean {
  if (fencedBlocks(text).length > 0) return true;
  const lines = text.split('\n').filter((l) => l.trim().length > 0);
  if (lines.length < 4) return false;
  return (
    /\b(function|const|let|def|class|SELECT|INSERT|CREATE|ALTER|import|return|async|await)\b/.test(text) &&
    /[{};=()]/.test(text)
  );
}

function trimEvidence(line: string): string {
  const clean = line.trim().replace(/\s+/g, ' ');
  return clean.length > 120 ? `${clean.slice(0, 117)}…` : clean;
}

function collectLines(text: string, patterns: RegExp[], max = 4): string[] {
  const found: string[] = [];
  for (const line of text.split('\n')) {
    if (patterns.some((p) => p.test(line))) {
      found.push(trimEvidence(line));
      if (found.length >= max) break;
    }
  }
  return found;
}

function collectMatches(text: string, patterns: RegExp[], max = 4): string[] {
  const found: string[] = [];
  for (const re of patterns) {
    const m = text.match(re);
    if (m) {
      found.push(trimEvidence(m[0]));
      if (found.length >= max) break;
    }
  }
  return found;
}

const notApplicable = (detail: string): CheckResult => ({
  status: 'N/A',
  detail,
  evidence: [],
});

interface GateDefinition {
  id: string;
  name: string;
  category: string;
  run: (text: string) => CheckResult;
}

const GATE_DEFINITIONS: GateDefinition[] = [
  {
    id: 'GATE-01',
    name: 'Destructive operations',
    category: 'Schema & data safety',
    run: (text) => {
      const view = codeView(text);
      const hard = collectLines(view, [
        /\bDROP\s+(?:TABLE|DATABASE|SCHEMA|COLUMN)\b(?!\s+IF\s+EXISTS)/i,
        /\bDROP\b[^\n]*\bCASCADE\b/i,
        /\bTRUNCATE\s+(?:TABLE\s+)?[\w."`]+/i,
        /\bDELETE\s+FROM\s+[\w."`]+\s*;?\s*$/i,
        /\brm\s+-r?f\s+[/~*]/i,
      ]);
      if (hard.length > 0) {
        return {
          status: 'FAIL',
          detail: 'Unguarded destructive statement (DROP / TRUNCATE / DELETE without WHERE / rm -rf).',
          evidence: hard,
        };
      }
      const soft = collectLines(view, [/\bDROP\s+(?:TABLE|DATABASE|SCHEMA|COLUMN)\s+IF\s+EXISTS/i]);
      if (soft.length > 0) {
        return {
          status: 'WARN',
          detail: 'Destructive DROP present. Confirm it is gated behind a parity check and retention window.',
          evidence: soft,
        };
      }
      return {
        status: 'PASS',
        detail: 'No unguarded destructive statements found.',
        evidence: [],
      };
    },
  },
  {
    id: 'GATE-02',
    name: 'Injection & unsafe execution',
    category: 'Security',
    run: (text) => {
      const view = codeView(text);
      const hard = collectLines(view, [
        /\b(?:SELECT|INSERT\s+INTO|UPDATE|DELETE\s+FROM)\b[^\n]*(?:\$\{[^}]+\}|["'`]\s*\+\s*[A-Za-z_]|\bf["'][^"'\n]*\{[^}]+\}|["']\s*\.format\s*\()/i,
        /\beval\s*\(/,
        /\bnew\s+Function\s*\(/,
        /\bos\.system\s*\(/,
        /shell\s*=\s*True/,
        /(^|[^.\w])exec\s*\(/,
      ]);
      if (hard.length > 0) {
        return {
          status: 'FAIL',
          detail: 'String-built SQL or dynamic code execution detected.',
          evidence: hard,
        };
      }
      const soft = collectLines(view, [/\.innerHTML\s*=/]);
      if (soft.length > 0) {
        return {
          status: 'WARN',
          detail: 'Direct innerHTML assignment can enable XSS.',
          evidence: soft,
        };
      }
      return {
        status: 'PASS',
        detail: 'No string-built SQL or dynamic execution found.',
        evidence: [],
      };
    },
  },
  {
    id: 'GATE-03',
    name: 'Error handling & timeouts',
    category: 'Resilience',
    run: (text) => {
      if (!looksLikeCode(text)) return notApplicable('No executable code detected.');
      const view = codeView(text);
      const meaningful = view.split('\n').filter((l) => l.trim().length > 0).length;
      const hasErrorHandling =
        /\b(?:try|catch|except|rescue)\b|\.catch\s*\(|\bROLLBACK\b|RAISE\s+EXCEPTION|\.ok\b|raise_for_status|\bthrow\b|\braise\b|\bif\s*\(\s*!\s*\w+/i.test(
          view
        );
      const hasNetwork =
        /\b(?:fetch|axios\.\w+|requests\.(?:get|post|put|delete|patch)|urlopen|http\.request)\s*\(/.test(view);
      const hasTimeout = /timeout|AbortSignal|signal\s*:/i.test(view);
      const openTxn =
        /^\s*(?:BEGIN|START\s+TRANSACTION)\s*;\s*$/im.test(view) && !/\b(?:COMMIT|ROLLBACK)\b/i.test(view);

      if (openTxn) {
        return {
          status: 'FAIL',
          detail: 'Transaction opened with BEGIN but no COMMIT or ROLLBACK path.',
          evidence: collectLines(view, [/^\s*(?:BEGIN|START\s+TRANSACTION)\s*;/i], 2),
        };
      }
      if (meaningful >= 6 && !hasErrorHandling) {
        return {
          status: 'FAIL',
          detail: 'No error handling found (try/catch, except, status checks, rollback).',
          evidence: [],
        };
      }
      if (hasNetwork && !hasTimeout) {
        return {
          status: 'WARN',
          detail: 'Network call without an explicit timeout or abort signal.',
          evidence: collectLines(view, [/\b(?:fetch|axios\.\w+|requests\.\w+|urlopen|http\.request)\s*\(/], 2),
        };
      }
      return {
        status: 'PASS',
        detail: 'Error handling present and network calls are bounded.',
        evidence: [],
      };
    },
  },
  {
    id: 'GATE-04',
    name: 'Idempotency & concurrency guards',
    category: 'Distributed systems',
    run: (text) => {
      if (!looksLikeCode(text)) return notApplicable('No executable code detected.');
      const view = codeView(text);
      const hasWrite =
        /\b(?:INSERT\s+INTO|UPDATE\s+\w+\s+SET|DELETE\s+FROM)\b|\.(?:post|put|patch)\s*\(|method\s*:\s*['"](?:POST|PUT|PATCH)|\b(?:transfers?|charges?|payouts?|refunds?)\.create/i.test(
          view
        );
      if (!hasWrite) return notApplicable('No write operations detected.');
      const hasGuard =
        /idempot|ON\s+CONFLICT|IF\s+NOT\s+EXISTS|FOR\s+UPDATE|SKIP\s+LOCKED|UNIQUE|upsert|lock_timeout|advisory|mutex|semaphore|SERIALIZABLE|\bversion\b\s*=|etag/i.test(
          view
        );
      if (!hasGuard) {
        return {
          status: 'WARN',
          detail: 'Write path with no idempotency key, row lock, upsert, or version check.',
          evidence: collectLines(view, [/\b(?:INSERT\s+INTO|UPDATE\s+\w+\s+SET|DELETE\s+FROM)\b|\.(?:post|put|patch)\s*\(/i], 2),
        };
      }
      return {
        status: 'PASS',
        detail: 'Write path shows idempotency or locking evidence.',
        evidence: [],
      };
    },
  },
  {
    id: 'GATE-05',
    name: 'Placeholders & unfinished work',
    category: 'Completeness',
    run: (text) => {
      const evidence = collectLines(text, [
        /\b(?:TODO|FIXME|TBD)\b/,
        /NotImplemented(?:Error)?/,
        /\blorem ipsum\b/i,
        /\b(?:YOUR|your)[_-](?:API[_-])?(?:KEY|TOKEN|SECRET)\b/,
        /<\s*your[\w\s-]*>/i,
        /^\s*\.\.\.\s*$/,
      ]);
      if (evidence.length > 0) {
        return {
          status: 'FAIL',
          detail: 'Placeholder or unfinished marker left in the output.',
          evidence,
        };
      }
      return { status: 'PASS', detail: 'No placeholders found.', evidence: [] };
    },
  },
  {
    id: 'GATE-06',
    name: 'Sycophancy & false assurance',
    category: 'Epistemic integrity',
    run: (text) => {
      const strong = collectMatches(text, [
        /you(?:'re|\s+are)\s+(?:absolutely|completely|totally|entirely)\s+right/i,
        /\bgreat\s+(?:question|catch|point|idea)\b/i,
        /\bas\s+you\s+(?:rightly|correctly|astutely)\s+\w+/i,
        /\brightly\s+noted\b/i,
        /\bguarantee[sd]?\s+(?:100\s*%|zero|no\s+(?:errors?|bugs?|failures?|hallucinations?)|perfect|fault[- ]free)/i,
        /\b100(?:\.0+)?\s*%\s*(?:safe|correct|reliable|fault[- ]free|accurate|bug[- ]free|zero[- ]hallucination)/i,
        /\bzero[- ](?:risk|errors?|bugs?|hallucinations?)\b/i,
        /\bassert\s+True\b/,
        /\ball\s+\d+\s+(?:unit\s+)?tests?\s+pass/i,
      ]);
      if (strong.length > 0) {
        return {
          status: 'FAIL',
          detail: 'Flattery, unearned certainty, or a vacuous assertion.',
          evidence: strong,
        };
      }
      const soft = collectMatches(text, [
        /\bproduction[- ]ready\b/i,
        /\bbulletproof\b|\bflawless\b|\bfool[- ]?proof\b/i,
        /\bthread[- ]safe\b/i,
      ]);
      if (soft.length > 0) {
        return {
          status: 'WARN',
          detail: 'Absolute-quality claim that the output itself does not demonstrate.',
          evidence: soft,
        };
      }
      return { status: 'PASS', detail: 'No sycophantic or overconfident language found.', evidence: [] };
    },
  },
  {
    id: 'GATE-07',
    name: 'Ungrounded claims & citations',
    category: 'Hallucination risk',
    run: (text) => {
      const prose = proseView(text);
      const citations = collectMatches(prose, [
        /\bdoi\.org\/\S+/i,
        /\b10\.\d{4,9}\/[^\s)\]]+/,
        /\bet\s+al\.?,?\s*\(?(?:19|20)\d{2}/i,
        /\([A-Z][A-Za-z]+(?:\s+(?:&|and)\s+[A-Z][A-Za-z]+)?,?\s+(?:19|20)\d{2}\)/,
        /\barXiv:\d{4}\.\d{4,5}/i,
      ]);
      if (citations.length > 0) {
        return {
          status: 'WARN',
          detail: 'Citation-like references found. Crucible cannot resolve sources offline, so verify each manually.',
          evidence: citations,
        };
      }
      const claims = collectMatches(prose, [
        /\b\d+(?:\.\d+)?\s*%[^.\n]{0,70}\b(?:improv|increas|reduc|faster|slower|accura|resolution|latency|overhead|success|fewer|more)\w*/i,
        /\b(?:improv|increas|reduc|faster|slower|accura|resolution|latency|overhead|success)\w*[^.\n]{0,70}\b\d+(?:\.\d+)?\s*%/i,
      ]);
      const hasDerivation = /[=≈]|\$\$|\\frac|\^\{?\d/.test(prose);
      if (claims.length > 0 && !hasDerivation) {
        return {
          status: 'WARN',
          detail: 'Quantitative performance claim with no derivation or source in the text.',
          evidence: claims,
        };
      }
      return {
        status: 'PASS',
        detail: 'No unsourced citations or unsupported quantitative claims detected.',
        evidence: [],
      };
    },
  },
  {
    id: 'GATE-08',
    name: 'State drift & shared mutable state',
    category: 'State integrity',
    run: (text) => {
      if (!looksLikeCode(text)) return notApplicable('No executable code detected.');
      const view = codeView(text);
      const hard = collectLines(view, [
        /\bdef\s+\w+\s*\([^)]*=\s*(?:\[\]|\{\}|set\(\)|dict\(\)|list\(\))/,
        /\b(?:globalThis|window)\.\w+\s*(?:=|\|\|)/,
        /^\s*global\s+\w+/,
      ]);
      if (hard.length > 0) {
        return {
          status: 'FAIL',
          detail: 'Mutable default argument or shared global state can leak between calls.',
          evidence: hard,
        };
      }
      const soft = collectLines(view, [/\bexcept\s*:/]);
      if (soft.length > 0) {
        return {
          status: 'WARN',
          detail: 'Bare except swallows every error, including real bugs.',
          evidence: soft,
        };
      }
      return { status: 'PASS', detail: 'No shared mutable state patterns found.', evidence: [] };
    },
  },
  {
    id: 'GATE-09',
    name: 'DDL lock safety',
    category: 'Database reliability',
    run: (text) => {
      const view = codeView(text);
      const hasDdl = /\bALTER\s+TABLE\b|\bCREATE\s+(?:UNIQUE\s+)?INDEX\b|\bDROP\s+(?:TABLE|INDEX)\b/i.test(view);
      if (!hasDdl) return notApplicable('No DDL detected.');
      const guarded = /lock_timeout|statement_timeout|CONCURRENTLY/i.test(view);
      if (!guarded) {
        return {
          status: 'WARN',
          detail: 'DDL without lock_timeout, statement_timeout, or CONCURRENTLY can stall production traffic.',
          evidence: collectLines(view, [/\bALTER\s+TABLE\b|\bCREATE\s+(?:UNIQUE\s+)?INDEX\b|\bDROP\s+(?:TABLE|INDEX)\b/i], 2),
        };
      }
      return { status: 'PASS', detail: 'DDL is bounded by lock or statement timeouts.', evidence: [] };
    },
  },
];

/**
 * Runs the deterministic gate against the Stage 1 draft and, when available, the Stage 4 output.
 * Pure function, zero API calls.
 */
export function runDeterministicGate(
  stage1Draft: string,
  stage4Output: string | null
): HeuristicCheckItem[] {
  return GATE_DEFINITIONS.map((def) => {
    const before = def.run(stage1Draft);
    const after = stage4Output !== null ? def.run(stage4Output) : null;
    let detail = before.detail;
    let evidence = before.evidence;
    if (after && before.status !== after.status) {
      detail = `${before.detail} After repair: ${after.detail}`;
    }
    if (before.status === 'PASS' || before.status === 'N/A') {
      evidence = after && after.evidence.length > 0 ? after.evidence : before.evidence;
    }
    return {
      id: def.id,
      checkName: def.name,
      category: def.category,
      stage1Status: before.status,
      stage4Status: after ? after.status : null,
      detail,
      evidence,
    };
  });
}

/* -------------------------------------------------------------------------- */
/*  Stage 2 / Stage 4 output parsing                                           */
/* -------------------------------------------------------------------------- */

function extractJsonObject(raw: string): unknown | null {
  const cleaned = raw
    .trim()
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```$/, '')
    .trim();
  const first = cleaned.indexOf('{');
  const last = cleaned.lastIndexOf('}');
  if (first === -1 || last <= first) return null;
  try {
    return JSON.parse(cleaned.slice(first, last + 1));
  } catch {
    return null;
  }
}

function normalizeForMatch(text: string): string {
  return text.replace(/\s+/g, ' ').trim().toLowerCase();
}

function snippetFoundInDraft(snippet: string, draft: string): boolean {
  const needle = normalizeForMatch(snippet);
  const haystack = normalizeForMatch(draft);
  if (needle.length === 0) return false;
  if (haystack.includes(needle)) return true;
  const segments = needle
    .split(/\.\.\.|…/)
    .map((s) => s.trim())
    .filter((s) => s.length >= 8);
  return segments.length > 0 && segments.every((s) => haystack.includes(s));
}

function normalizeBadge(raw: string): FailureTaxonomyBadge {
  const upper = String(raw || '').toUpperCase();
  if (upper.includes('SYCOPHAN')) return '[RLHF SYCOPHANCY]';
  if (upper.includes('DRIFT')) return '[STATE DRIFT]';
  if (upper.includes('POLLUT')) return '[CONTEXT POLLUTION]';
  if (upper.includes('HALLUCIN') || upper.includes('SCHEMA')) return '[HALLUCINATED API / SCHEMA]';
  return '[UNHANDLED EDGE CASE / SECURITY]';
}

function normalizeSeverity(raw: string): FailureSeverity {
  const upper = String(raw || '').toUpperCase();
  if (upper.includes('CRIT')) return 'CRITICAL';
  if (upper.includes('MED') || upper.includes('LOW')) return 'MEDIUM';
  return 'HIGH';
}

export function parseRedTeamOutput(
  raw: string,
  stage1Draft: string
): { summary: string; failureModes: FailureModeRow[] } | null {
  const parsed = extractJsonObject(raw) as {
    prosecutorSummary?: unknown;
    failureModes?: unknown;
  } | null;
  if (!parsed || !Array.isArray(parsed.failureModes)) return null;

  const failureModes: FailureModeRow[] = (parsed.failureModes as Array<Record<string, unknown>>)
    .filter((item) => item && typeof item === 'object')
    .map((item, idx) => {
      const snippet = String(item.flawedSnippet ?? '').trim();
      return {
        id: String(item.id || `FLAW-${String(idx + 1).padStart(2, '0')}`),
        category: normalizeBadge(String(item.category ?? '')),
        severity: normalizeSeverity(String(item.severity ?? 'HIGH')),
        flawedSnippet: snippet || '(no snippet provided)',
        requiredFix: String(item.requiredFix ?? '').trim() || '(no fix provided)',
        groundedInDraft: snippetFoundInDraft(snippet, stage1Draft),
      };
    });

  return {
    summary:
      typeof parsed.prosecutorSummary === 'string' && parsed.prosecutorSummary.trim()
        ? parsed.prosecutorSummary.trim()
        : failureModes.length === 0
        ? 'The Red-Team Prosecutor reported no genuine failure modes.'
        : `The Red-Team Prosecutor reported ${failureModes.length} failure modes.`,
    failureModes,
  };
}

export function parseJudgeOutput(raw: string): {
  verifiedOutput: string;
  synthesis: string;
  confidence: number | null;
  format: 'tagged' | 'json' | 'raw';
} {
  const text = raw.trim();

  const tagged = text.match(
    /=====\s*SYNTHESIS\s*=====\s*([\s\S]*?)=====\s*CONFIDENCE\s*=====\s*([\s\S]*?)=====\s*VERIFIED\s+OUTPUT\s*=====\s*([\s\S]*)$/i
  );
  if (tagged) {
    const num = parseInt(tagged[2].replace(/[^0-9]/g, ''), 10);
    return {
      verifiedOutput: tagged[3].trim(),
      synthesis: tagged[1].trim(),
      confidence: Number.isFinite(num) ? Math.min(100, Math.max(0, num)) : null,
      format: 'tagged',
    };
  }

  const json = extractJsonObject(text) as {
    verifiedOutput?: unknown;
    judgeSynthesis?: unknown;
    confidenceScore?: unknown;
  } | null;
  if (json && typeof json.verifiedOutput === 'string' && json.verifiedOutput.trim()) {
    const num = Number(json.confidenceScore);
    return {
      verifiedOutput: json.verifiedOutput.trim(),
      synthesis: typeof json.judgeSynthesis === 'string' ? json.judgeSynthesis.trim() : '',
      confidence: Number.isFinite(num) ? Math.min(100, Math.max(0, Math.round(num))) : null,
      format: 'json',
    };
  }

  return { verifiedOutput: text, synthesis: '', confidence: null, format: 'raw' };
}

/**
 * Verification Confidence Score: the Judge's self-reported confidence, penalised by what the
 * deterministic gate still finds in the repaired output and by Red-Team findings that could not be
 * located in the draft. Never reaches 100.
 */
export function computeConfidence(
  judgeReported: number | null,
  checks: HeuristicCheckItem[],
  failureModes: FailureModeRow[]
): ConfidenceBreakdown {
  const gateFailures = checks.filter((c) => c.stage4Status === 'FAIL').length;
  const gateWarnings = checks.filter((c) => c.stage4Status === 'WARN').length;
  const ungroundedFindings = failureModes.filter((f) => !f.groundedInDraft).length;
  const base = judgeReported ?? 80;
  const raw = base - gateFailures * 10 - gateWarnings * 3 - ungroundedFindings * 2;
  const score = Math.min(99, Math.max(5, Math.round(raw)));

  const parts: string[] = [
    judgeReported !== null
      ? `Judge self-report ${judgeReported}`
      : 'Judge gave no score (baseline 80)',
  ];
  if (gateFailures > 0) parts.push(`−${gateFailures * 10} for ${gateFailures} gate failure(s) still present`);
  if (gateWarnings > 0) parts.push(`−${gateWarnings * 3} for ${gateWarnings} gate warning(s)`);
  if (ungroundedFindings > 0) parts.push(`−${ungroundedFindings * 2} for ${ungroundedFindings} unverifiable finding(s)`);
  if (parts.length === 1) parts.push('clean gate on repaired output');

  return {
    score,
    judgeReported,
    gateFailures,
    gateWarnings,
    ungroundedFindings,
    explanation: parts.join(' · '),
  };
}

/* -------------------------------------------------------------------------- */
/*  Diff engine                                                                */
/* -------------------------------------------------------------------------- */

export function computeLineDiff(
  oldText: string,
  newText: string,
  failureModes: FailureModeRow[] = []
): DiffComputationResult {
  const a = (oldText || '').split('\n');
  const b = (newText || '').split('\n');
  const ka = a.map((l) => l.trim());
  const kb = b.map((l) => l.trim());
  const m = a.length;
  const n = b.length;

  const badgeFor = (line: string): FailureTaxonomyBadge | undefined => {
    const norm = normalizeForMatch(line);
    if (norm.length < 6) return undefined;
    for (const fm of failureModes) {
      const snippet = normalizeForMatch(fm.flawedSnippet);
      if (snippet.length >= 6 && (snippet.includes(norm) || norm.includes(snippet))) {
        return fm.category;
      }
    }
    if (
      /you(?:'re|\s+are)\s+(?:absolutely|completely)\s+right|great\s+(?:question|catch)|guarantee|assert\s+True|100\s*%/i.test(
        line
      )
    ) {
      return '[RLHF SYCOPHANCY]';
    }
    return undefined;
  };

  const unified: DiffLine[] = [];
  let oldNo = 1;
  let newNo = 1;

  if (m * n > 4_000_000) {
    const setA = new Set(ka);
    const setB = new Set(kb);
    for (let i = 0; i < m; i++) {
      if (!setB.has(ka[i])) {
        unified.push({ type: 'removed', oldLineNumber: oldNo++, newLineNumber: null, text: a[i], flawBadge: badgeFor(a[i]) });
      } else {
        oldNo++;
      }
    }
    for (let j = 0; j < n; j++) {
      if (!setA.has(kb[j])) {
        unified.push({ type: 'added', oldLineNumber: null, newLineNumber: newNo++, text: b[j] });
      } else {
        unified.push({ type: 'unchanged', oldLineNumber: null, newLineNumber: newNo++, text: b[j] });
      }
    }
  } else {
    const width = n + 1;
    const dp = new Int32Array((m + 1) * width);
    for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
        dp[i * width + j] =
          ka[i] === kb[j]
            ? dp[(i + 1) * width + j + 1] + 1
            : Math.max(dp[(i + 1) * width + j], dp[i * width + j + 1]);
      }
    }
    let i = 0;
    let j = 0;
    while (i < m && j < n) {
      if (ka[i] === kb[j]) {
        unified.push({ type: 'unchanged', oldLineNumber: oldNo++, newLineNumber: newNo++, text: b[j] });
        i++;
        j++;
      } else if (dp[(i + 1) * width + j] >= dp[i * width + j + 1]) {
        unified.push({ type: 'removed', oldLineNumber: oldNo++, newLineNumber: null, text: a[i], flawBadge: badgeFor(a[i]) });
        i++;
      } else {
        unified.push({ type: 'added', oldLineNumber: null, newLineNumber: newNo++, text: b[j] });
        j++;
      }
    }
    while (i < m) {
      unified.push({ type: 'removed', oldLineNumber: oldNo++, newLineNumber: null, text: a[i], flawBadge: badgeFor(a[i]) });
      i++;
    }
    while (j < n) {
      unified.push({ type: 'added', oldLineNumber: null, newLineNumber: newNo++, text: b[j] });
      j++;
    }
  }

  const removedCount = unified.filter((l) => l.type === 'removed').length;
  const addedCount = unified.filter((l) => l.type === 'added').length;

  const rows: SideBySideDiffRow[] = [];
  let idx = 0;
  while (idx < unified.length) {
    const line = unified[idx];
    if (line.type === 'unchanged') {
      rows.push({
        leftLineNumber: line.oldLineNumber,
        leftText: line.text,
        leftType: 'unchanged',
        rightLineNumber: line.newLineNumber,
        rightText: line.text,
        rightType: 'unchanged',
      });
      idx++;
      continue;
    }
    const removedChunk: DiffLine[] = [];
    const addedChunk: DiffLine[] = [];
    while (idx < unified.length && unified[idx].type !== 'unchanged') {
      (unified[idx].type === 'removed' ? removedChunk : addedChunk).push(unified[idx]);
      idx++;
    }
    const height = Math.max(removedChunk.length, addedChunk.length);
    for (let k = 0; k < height; k++) {
      const rem = removedChunk[k];
      const add = addedChunk[k];
      rows.push({
        leftLineNumber: rem ? rem.oldLineNumber : null,
        leftText: rem ? rem.text : '',
        leftType: rem ? 'removed' : 'empty',
        rightLineNumber: add ? add.newLineNumber : null,
        rightText: add ? add.text : '',
        rightType: add ? 'added' : 'empty',
      });
    }
  }

  return { unifiedLines: unified, sideBySideRows: rows, removedCount, addedCount };
}

/* -------------------------------------------------------------------------- */
/*  Step-20 reliability math                                                   */
/* -------------------------------------------------------------------------- */

export function computeMathSummary(params: MathTelemetryParams) {
  const p = Math.min(0.999, Math.max(0.01, params.p));
  const d = Math.min(0.999, Math.max(0, params.d));
  const r = Math.min(0.999, Math.max(0, params.r));
  const n = Math.max(1, Math.round(params.n));

  const pEff = Math.min(0.9999, p + (1 - p) * d * r);
  const openLoopAtN = Math.pow(p, n) * 100;
  const closedLoopAtN = Math.pow(pEff, n) * 100;

  return {
    p,
    d,
    r,
    n,
    pEff,
    openLoopAtN,
    closedLoopAtN,
    gainAtN: closedLoopAtN - openLoopAtN,
    multiplierAtN: openLoopAtN > 0.0001 ? closedLoopAtN / openLoopAtN : null,
    halfLifeOpen: Math.log(0.5) / Math.log(p),
    halfLifeClosed: Math.log(0.5) / Math.log(pEff),
  };
}

export function classifyHorizonStatus(pct: number): 'Stable' | 'Degrading' | 'Collapsed' {
  if (pct >= 70) return 'Stable';
  if (pct >= 30) return 'Degrading';
  return 'Collapsed';
}

export const HORIZON_STEPS = [1, 3, 5, 10, 15, 20, 30, 50];

export function computeHorizonTable(params: MathTelemetryParams): HorizonTelemetryRow[] {
  const { p, pEff, n } = computeMathSummary(params);
  const steps = HORIZON_STEPS.includes(n) ? [...HORIZON_STEPS] : [...HORIZON_STEPS, n].sort((x, y) => x - y);
  return steps.map((step) => {
    const openLoopPct = Math.pow(p, step) * 100;
    const closedLoopPct = Math.pow(pEff, step) * 100;
    return {
      n: step,
      openLoopPct,
      closedLoopPct,
      reliabilityGainPct: closedLoopPct - openLoopPct,
      openStatus: classifyHorizonStatus(openLoopPct),
      closedStatus: classifyHorizonStatus(closedLoopPct),
    };
  });
}

export function computeCurve(params: MathTelemetryParams, maxN = 50) {
  const { p, pEff } = computeMathSummary(params);
  const points: Array<{ n: number; open: number; closed: number }> = [];
  for (let step = 0; step <= maxN; step++) {
    points.push({ n: step, open: Math.pow(p, step) * 100, closed: Math.pow(pEff, step) * 100 });
  }
  return points;
}

/* -------------------------------------------------------------------------- */
/*  Token & cost accounting                                                    */
/* -------------------------------------------------------------------------- */

function stageCost(stage: StageExecutionState): { cost: number; priceKnown: boolean } {
  if (stage.apiCalls === 0) return { cost: 0, priceKnown: true };
  const price = getModelPricing(stage.model);
  return {
    cost: (stage.inputTokens / 1_000_000) * price.input + (stage.outputTokens / 1_000_000) * price.output,
    priceKnown: price.known,
  };
}

function modelLabel(stage: StageExecutionState): string {
  if (!stage.provider) return '—';
  return `${DEFAULT_PROVIDER_CONFIG[stage.provider].shortLabel} / ${stage.model}`;
}

export function computeCostBreakdown(session: VerificationSessionState) {
  const s1 = stageCost(session.stage1Builder);
  const s2 = stageCost(session.stage2RedTeam);
  const s4 = stageCost(session.stage4Judge);

  const stages: Array<{ id: string; label: string; stage: StageExecutionState; cost: { cost: number; priceKnown: boolean }; model: string }> = [
    { id: 'stage-1', label: 'Stage 1 · Architect', stage: session.stage1Builder, cost: s1, model: modelLabel(session.stage1Builder) },
    { id: 'stage-2', label: 'Stage 2 · Red-Team', stage: session.stage2RedTeam, cost: s2, model: modelLabel(session.stage2RedTeam) },
    { id: 'stage-3', label: 'Stage 3 · Deterministic gate', stage: session.stage3Heuristic, cost: { cost: 0, priceKnown: true }, model: 'Crucible rule engine (local)' },
    { id: 'stage-4', label: 'Stage 4 · Chief Judge', stage: session.stage4Judge, cost: s4, model: modelLabel(session.stage4Judge) },
  ];

  const rows: CostBreakdownRow[] = stages.map((s) => ({
    stageId: s.id,
    stageLabel: s.label,
    modelUsed: s.model,
    inputTokens: s.stage.apiCalls === 0 ? 0 : s.stage.inputTokens,
    outputTokens: s.stage.apiCalls === 0 ? 0 : s.stage.outputTokens,
    apiCalls: s.stage.apiCalls,
    latencyMs: s.stage.latencyMs,
    estimatedCostUsd: s.cost.cost,
    priceKnown: s.cost.priceKnown,
  }));

  const totalCost = s1.cost + s2.cost + s4.cost;
  return {
    rows,
    singlePassCostUsd: s1.cost,
    closedLoopCostUsd: totalCost,
    costMultiplier: s1.cost > 0 ? totalCost / s1.cost : null,
    singlePassLatencyMs: session.stage1Builder.latencyMs,
    totalInputTokens: rows.reduce((acc, r) => acc + r.inputTokens, 0),
    totalOutputTokens: rows.reduce((acc, r) => acc + r.outputTokens, 0),
    totalApiCalls: rows.reduce((acc, r) => acc + r.apiCalls, 0),
    totalLatencyMs: rows.reduce((acc, r) => acc + r.latencyMs, 0),
    anyPriceUnknown: rows.some((r) => !r.priceKnown),
    anyTokensEstimated: [session.stage1Builder, session.stage2RedTeam, session.stage4Judge].some(
      (s) => s.apiCalls > 0 && !s.tokensReported
    ),
  };
}

/* -------------------------------------------------------------------------- */
/*  Markdown exports                                                           */
/* -------------------------------------------------------------------------- */

export function buildTelemetryMarkdown(
  session: VerificationSessionState,
  params: MathTelemetryParams,
  strictness: StrictnessLevel
): string {
  const math = computeMathSummary(params);
  const horizon = computeHorizonTable(params);
  const cost = computeCostBreakdown(session);

  return [
    `### Reliability telemetry (${STRICTNESS_PRESETS[strictness].label})`,
    '',
    `- p = ${math.p.toFixed(2)}, d = ${math.d.toFixed(2)}, r = ${math.r.toFixed(2)}, n = ${math.n}`,
    `- p_eff = p + (1 − p)·d·r = ${(math.pEff * 100).toFixed(2)}%`,
    `- Half-life horizon n½ = ln(0.5)/ln(p) = ${math.halfLifeOpen.toFixed(2)} steps open-loop, ${math.halfLifeClosed.toFixed(2)} steps closed-loop`,
    '',
    '| Step horizon (n) | Open-loop p^n | Crucible closed-loop p_eff^n | Gain (+Δ%) | Status (open → closed) |',
    '| :-- | --: | --: | --: | :-- |',
    ...horizon.map(
      (r) =>
        `| ${r.n} | ${r.openLoopPct.toFixed(2)}% | ${r.closedLoopPct.toFixed(2)}% | +${r.reliabilityGainPct.toFixed(2)}% | ${r.openStatus} → ${r.closedStatus} |`
    ),
    '',
    '### Token & cost breakdown',
    '',
    '| Pipeline stage | Model | Input tokens | Output tokens | API calls | Latency | Est. cost (USD) |',
    '| :-- | :-- | --: | --: | --: | --: | --: |',
    ...cost.rows.map(
      (r) =>
        `| ${r.stageLabel} | ${escapeCell(r.modelUsed)} | ${formatTokens(r.inputTokens)} | ${formatTokens(r.outputTokens)} | ${r.apiCalls} | ${r.latencyMs} ms | ${r.priceKnown ? formatUsd(r.estimatedCostUsd) : 'n/a (unpriced model)'} |`
    ),
    `| **Total** |  | **${formatTokens(cost.totalInputTokens)}** | **${formatTokens(cost.totalOutputTokens)}** | **${cost.totalApiCalls}** | **${cost.totalLatencyMs} ms** | **${formatUsd(cost.closedLoopCostUsd)}** |`,
    '',
    `Single-pass cost (Stage 1 only): ${formatUsd(cost.singlePassCostUsd)} · Closed-loop cost: ${formatUsd(cost.closedLoopCostUsd)}${cost.costMultiplier ? ` (${cost.costMultiplier.toFixed(1)}× single-pass)` : ''}`,
  ].join('\n');
}

export function buildAuditReportMarkdown(params: {
  session: VerificationSessionState;
  mathParams: MathTelemetryParams;
}): string {
  const { session, mathParams } = params;
  const diff = computeLineDiff(session.stage1Builder.content, session.stage4Judge.content, session.failureModes);
  const sycophancy = session.failureModes.filter((f) => f.category === '[RLHF SYCOPHANCY]').length;
  const preset = STRICTNESS_PRESETS[session.strictnessLevel];

  const stageRow = (label: string, s: StageExecutionState) =>
    `| ${label} | ${s.provider ? DEFAULT_PROVIDER_CONFIG[s.provider].label : 'Local'} | ${escapeCell(s.model)} | ${s.latencyMs} ms |`;

  return [
    '# Crucible.ai Verification Audit Report',
    '',
    `- **Generated:** ${new Date().toISOString()}`,
    `- **Strictness:** ${preset.label} (d=${preset.d}, r=${preset.r})`,
    `- **Verification confidence:** ${session.confidence ? `${session.confidence.score}%` : 'n/a'}${session.confidence ? ` (${session.confidence.explanation})` : ''}`,
    `- **Summary:** ${session.failureModes.length} failure modes caught · ${diff.removedCount} lines removed / ${diff.addedCount} lines added · ${sycophancy} sycophancy finding(s)`,
    '',
    '| Stage | Provider | Model | Latency |',
    '| :-- | :-- | :-- | --: |',
    stageRow('1 · Architect', session.stage1Builder),
    stageRow('2 · Red-Team', session.stage2RedTeam),
    '| 3 · Deterministic gate | Local | Crucible rule engine | ' + session.stage3Heuristic.latencyMs + ' ms |',
    stageRow('4 · Chief Judge', session.stage4Judge),
    '',
    '---',
    '',
    '## 1. Prompt',
    '',
    session.prompt,
    '',
    '## 2. Stage 1: Builder draft',
    '',
    '```',
    session.stage1Builder.content,
    '```',
    '',
    '## 3. Stage 2: Red-Team failure modes',
    '',
    `> ${escapeCell(session.prosecutorSummary)}`,
    '',
    '| ID | Category | Severity | Flawed snippet | Required fix | Snippet verified in draft |',
    '| :-- | :-- | :-- | :-- | :-- | :-- |',
    ...session.failureModes.map(
      (f) =>
        `| ${f.id} | \`${f.category}\` | ${f.severity} | \`${escapeCell(f.flawedSnippet)}\` | ${escapeCell(f.requiredFix)} | ${f.groundedInDraft ? 'yes' : 'no'} |`
    ),
    '',
    '## 4. Stage 3: Deterministic gate',
    '',
    '| Check | Category | Draft | Repaired | Detail |',
    '| :-- | :-- | :-- | :-- | :-- |',
    ...session.heuristicChecks.map(
      (h) =>
        `| ${h.id} ${h.checkName} | ${h.category} | ${h.stage1Status} | ${h.stage4Status ?? '—'} | ${escapeCell(h.detail)}${h.evidence.length ? ` Evidence: \`${escapeCell(h.evidence.join(' ; '))}\`` : ''} |`
    ),
    '',
    '## 5. Stage 4: Chief Judge',
    '',
    `> ${escapeCell(session.judgeSynthesis || 'No synthesis text returned.')}`,
    '',
    '### Verified output',
    '',
    session.stage4Judge.content,
    '',
    '## 6. Diff summary',
    '',
    `- Lines removed from draft: ${diff.removedCount}`,
    `- Lines added by judge: ${diff.addedCount}`,
    '',
    '## 7. Reliability & cost telemetry',
    '',
    buildTelemetryMarkdown(session, mathParams, session.strictnessLevel),
    '',
  ].join('\n');
}
