import React, { useMemo } from 'react';
import { Download, Hourglass, ShieldCheck } from 'lucide-react';
import { VerificationSessionState } from '../t3s/types';
import { buildTelemetryMarkdown, computeLineDiff } from '../u3s/crucibleUtils';
import { MathTelemetryParams } from '../t3s/types';
import { Badge, Button, Card, CopyButton, EmptyState } from './ui';
import { MarkdownView } from './MarkdownView';

const Gauge: React.FC<{ score: number }> = ({ score }) => {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - score / 100);
  const color = score >= 85 ? '#16A34A' : score >= 65 ? '#FDC800' : '#DC2626';
  return (
    <div className="relative w-[168px] h-[168px] shrink-0" role="img" aria-label={`Verification confidence ${score} percent`}>
      <svg viewBox="0 0 140 140" className="w-full h-full -rotate-90">
        <circle cx="70" cy="70" r={radius} fill="none" strokeWidth="18" style={{ stroke: 'var(--soft)' }} />
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          strokeWidth="18"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ stroke: color, transition: 'stroke-dashoffset 0.6s ease' }}
        />
        <circle cx="70" cy="70" r={radius + 9} fill="none" strokeWidth="2" style={{ stroke: 'var(--ink)' }} />
        <circle cx="70" cy="70" r={radius - 9} fill="none" strokeWidth="2" style={{ stroke: 'var(--ink)' }} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[44px] font-black leading-none text-ink">{score}</span>
        <span className="font-mono text-[11px] font-bold uppercase text-muted">% confident</span>
      </div>
    </div>
  );
};

const Stat: React.FC<{ value: string | number; label: string; tone: string }> = ({ value, label, tone }) => (
  <div className={`rounded-md border-2 border-ink p-3 shadow-nb-sm ${tone}`}>
    <div className="text-[27px] font-black leading-none text-ink">{value}</div>
    <div className="mt-1 font-mono text-[11px] font-bold uppercase tracking-wide text-ink">{label}</div>
  </div>
);

interface VerdictTabProps {
  session: VerificationSessionState;
  mathParams: MathTelemetryParams;
  onDownloadReport: () => void;
}

export const VerdictTab: React.FC<VerdictTabProps> = ({ session, mathParams, onDownloadReport }) => {
  const done = session.stage4Judge.status === 'completed';
  const diff = useMemo(
    () => computeLineDiff(session.stage1Builder.content, session.stage4Judge.content, session.failureModes),
    [session.stage1Builder.content, session.stage4Judge.content, session.failureModes]
  );

  if (!session.prompt) {
    return (
      <EmptyState
        icon={<ShieldCheck className="w-10 h-10" aria-hidden="true" />}
        title="No verification yet"
        body="Add your keys, describe a task and press Run verification. The verdict, confidence score and repaired output appear here."
      />
    );
  }

  if (!done) {
    return (
      <div>
        <EmptyState
          icon={<Hourglass className="w-10 h-10" aria-hidden="true" />}
          title={session.isRunning ? `Stage ${session.activeStage} of 4 in progress…` : 'This run did not finish'}
          body={
            session.isRunning
              ? 'The verdict appears as soon as the Chief Judge completes. Earlier stages are already inspectable in the other tabs.'
              : 'A stage failed. The error is shown on its card above; fix the key or model and run again.'
          }
        />
        {session.stage1Builder.content && (
          <details className="mt-4 rounded-md border-2 border-ink bg-card">
            <summary className="cursor-pointer px-3.5 py-2.5 font-mono text-[13px] font-bold uppercase text-ink">
              Stage 1 draft (unverified)
            </summary>
            <div className="px-3.5 pb-3.5">
              <MarkdownView content={session.stage1Builder.content} />
            </div>
          </details>
        )}
      </div>
    );
  }

  const confidence = session.confidence;
  const sycophancy = session.failureModes.filter((f) => f.category === '[RLHF SYCOPHANCY]').length;
  const repairedGates = session.heuristicChecks.filter(
    (c) =>
      (c.stage1Status === 'FAIL' || c.stage1Status === 'WARN') &&
      (c.stage4Status === 'PASS' || c.stage4Status === 'N/A')
  ).length;
  const remaining = session.heuristicChecks.filter((c) => c.stage4Status === 'FAIL').length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 xl:grid-cols-[auto_1fr] gap-6 items-center">
        <div className="flex flex-col items-center gap-3 sm:flex-row xl:flex-col">
          {confidence && <Gauge score={confidence.score} />}
          {confidence && (
            <p className="max-w-[16rem] text-center sm:text-left xl:text-center font-mono text-[11px] text-muted">
              {confidence.explanation}
            </p>
          )}
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <Stat value={session.failureModes.length} label="Flaws caught" tone="bg-danger-soft" />
            <Stat value={`−${diff.removedCount} / +${diff.addedCount}`} label="Lines changed" tone="bg-success-soft" />
            <Stat value={sycophancy} label="Sycophancy flags" tone="bg-primary-soft" />
            <Stat value={`${repairedGates}`} label={`Gate checks repaired${remaining ? ` (${remaining} still failing)` : ''}`} tone="bg-secondary-soft" />
          </div>

          <Card flat className="p-4 bg-soft">
            <div className="font-mono text-[11px] font-bold uppercase tracking-wide text-muted mb-1">
              Judge's repair synthesis
            </div>
            <p className="text-[15px] leading-relaxed text-ink whitespace-pre-wrap">{session.judgeSynthesis}</p>
          </Card>

          <div className="flex flex-wrap items-center gap-2">
            <Button variant="primary" onClick={onDownloadReport} icon={<Download className="w-4 h-4" />}>
              Download Verification Audit Report (.md)
            </Button>
            <CopyButton
              size="md"
              label="Copy full telemetry table"
              text={buildTelemetryMarkdown(session, mathParams, session.strictnessLevel)}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h3 className="flex items-center gap-2 text-[21px] font-black text-ink">
            Verified final output <Badge tone="success">Repaired</Badge>
          </h3>
          <CopyButton text={session.stage4Judge.content} label="Copy output" />
        </div>
        <div className="rounded-lg border-2 border-ink bg-surface p-4">
          <MarkdownView content={session.stage4Judge.content} />
        </div>
      </div>
    </div>
  );
};
