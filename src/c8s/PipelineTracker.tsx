import React, { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { StageExecutionState, VerificationSessionState } from '../t3s/types';
import { formatMs, formatTokens } from '../u3s/crucibleUtils';
import { DEFAULT_PROVIDER_CONFIG } from '../s6s/apiService';
import { Badge, Card, SectionHeader, cx } from './ui';

const Elapsed: React.FC<{ stage: StageExecutionState }> = ({ stage }) => {
  const running = stage.status === 'running';
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setNow(Date.now()), 100);
    return () => window.clearInterval(id);
  }, [running]);
  const value = running && stage.startedAt ? now - stage.startedAt : stage.latencyMs;
  return <span className="tabular-nums">{formatMs(value)}</span>;
};

interface StageMeta {
  num: string;
  title: string;
  blurb: string;
  accent: string;
  state: StageExecutionState;
}

export const PipelineTracker: React.FC<{ session: VerificationSessionState }> = ({ session }) => {
  const label = (s: StageExecutionState) =>
    s.provider ? `${DEFAULT_PROVIDER_CONFIG[s.provider].shortLabel} · ${s.model}` : s.model;

  const stages: StageMeta[] = [
    {
      num: '01',
      title: 'The Architect',
      blurb: 'Drafts the solution, code or architecture.',
      accent: 'bg-primary text-night',
      state: session.stage1Builder,
    },
    {
      num: '02',
      title: 'Red-Team Prosecutor',
      blurb: 'Attacks the draft. No politeness allowed.',
      accent: 'bg-danger text-white',
      state: session.stage2RedTeam,
    },
    {
      num: '03',
      title: 'Deterministic Gate',
      blurb: 'Rule-based checks. No model, no API call.',
      accent: 'bg-success-soft text-ink',
      state: session.stage3Heuristic,
    },
    {
      num: '04',
      title: 'Chief Judge',
      blurb: 'Repairs flaws and scores confidence.',
      accent: 'bg-secondary text-white',
      state: session.stage4Judge,
    },
  ];

  const hasRun = session.prompt.length > 0;

  return (
    <section id="pipeline" aria-labelledby="pipeline-title" className="mb-10 scroll-mt-28">
      <SectionHeader
        step="03"
        title="Watch the pipeline"
        subtitle="Four inspectable stages with live timers and token counts."
        right={
          hasRun ? (
            <Badge tone={session.isRunning ? 'primary' : 'dark'}>
              {session.isRunning ? `Running stage ${session.activeStage} of 4` : 'Run finished'}
            </Badge>
          ) : (
            <Badge>Idle</Badge>
          )
        }
      />
      <h3 id="pipeline-title" className="sr-only">
        Pipeline status
      </h3>

      <ol className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5" aria-live="polite">
        {stages.map((stage) => {
          const { status } = stage.state;
          const running = status === 'running';
          const done = status === 'completed';
          const errored = status === 'error';
          const isGate = stage.num === '03';

          return (
            <li key={stage.num}>
              <Card
                className={cx(
                  'h-full overflow-hidden transition-colors',
                  running && 'bg-primary-soft',
                  errored && 'bg-danger-soft',
                  !hasRun && 'opacity-90'
                )}
              >
                <div
                  className={cx(
                    'flex items-center justify-between px-3.5 py-2 border-b-2 border-ink',
                    stage.accent
                  )}
                >
                  <span className="font-mono text-[15px] font-black">{stage.num}</span>
                  <span className="font-mono text-[11px] font-black uppercase tracking-wider">
                    {running && 'Running'}
                    {done && 'Done'}
                    {errored && 'Failed'}
                    {status === 'idle' && 'Queued'}
                  </span>
                </div>

                <div className="p-3.5">
                  <h4 className="text-[17px] font-black text-ink leading-tight">{stage.title}</h4>
                  <p className="text-[13px] text-muted mt-0.5">{stage.blurb}</p>

                  {hasRun && (
                    <div className="mt-3 space-y-1.5 font-mono text-[12px] text-ink">
                      <div className="truncate" title={label(stage.state)}>
                        {isGate ? 'Local rule engine' : label(stage.state)}
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-muted">Latency</span>
                        <span className="font-bold">
                          {status === 'idle' ? '—' : <Elapsed stage={stage.state} />}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-muted">Tokens in / out</span>
                        <span className="font-bold tabular-nums">
                          {isGate || status === 'idle' || running
                            ? isGate && done
                              ? '0 / 0 (local)'
                              : '—'
                            : `${formatTokens(stage.state.inputTokens)} / ${formatTokens(stage.state.outputTokens)}${stage.state.tokensReported ? '' : '*'}`}
                        </span>
                      </div>
                      {stage.state.apiCalls > 1 && (
                        <div className="text-[11px] text-muted">
                          {stage.state.apiCalls} API calls (JSON repair retry)
                        </div>
                      )}
                    </div>
                  )}

                  {running && <div className="nb-stripes mt-3 h-2.5 rounded border-2 border-ink" />}

                  {done && (
                    <div className="mt-3 flex items-center gap-1.5 font-mono text-[12px] font-bold text-ink">
                      <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                      {stage.num === '02' && `${session.failureModes.length} failure modes`}
                      {stage.num === '03' &&
                        `${session.heuristicChecks.filter((c) => c.stage1Status === 'FAIL').length} fails · ${session.heuristicChecks.filter((c) => c.stage1Status === 'WARN').length} warns`}
                      {stage.num === '04' && session.confidence && `${session.confidence.score}% confidence`}
                      {stage.num === '01' && `${stage.state.content.split('\n').length} lines drafted`}
                    </div>
                  )}

                  {errored && (
                    <div
                      role="alert"
                      className="mt-3 flex items-start gap-2 rounded-md border-2 border-ink bg-card px-2.5 py-2 text-[13px] text-ink break-words"
                    >
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-danger" aria-hidden="true" />
                      <span>{stage.state.error}</span>
                    </div>
                  )}
                </div>
              </Card>
            </li>
          );
        })}
      </ol>
    </section>
  );
};
