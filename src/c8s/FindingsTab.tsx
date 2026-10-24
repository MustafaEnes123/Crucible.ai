import React from 'react';
import { CheckCircle2, ShieldAlert, ShieldCheck, TriangleAlert } from 'lucide-react';
import { FailureSeverity, FailureTaxonomyBadge, VerificationSessionState } from '../t3s/types';
import { Badge, BadgeTone, EmptyState } from './ui';

const TAXONOMY_COLORS: Record<FailureTaxonomyBadge, string> = {
  '[STATE DRIFT]': '#C4B5FD',
  '[RLHF SYCOPHANCY]': '#FDE68A',
  '[CONTEXT POLLUTION]': '#A5F3FC',
  '[HALLUCINATED API / SCHEMA]': '#FBCFE8',
  '[UNHANDLED EDGE CASE / SECURITY]': '#FCA5A5',
};

const SEVERITY_TONE: Record<FailureSeverity, BadgeTone> = {
  CRITICAL: 'dangerSolid',
  HIGH: 'warning',
  MEDIUM: 'primary',
};

export const FindingsTab: React.FC<{ session: VerificationSessionState }> = ({ session }) => {
  const { failureModes, stage2RedTeam } = session;

  if (!session.prompt) {
    return (
      <EmptyState
        icon={<ShieldAlert className="w-10 h-10" aria-hidden="true" />}
        title="No findings yet"
        body="The Red-Team Prosecutor's failure modes table appears here after Stage 2."
      />
    );
  }

  if (stage2RedTeam.status === 'idle' || stage2RedTeam.status === 'running') {
    return (
      <EmptyState
        icon={<ShieldAlert className="w-10 h-10" aria-hidden="true" />}
        title={stage2RedTeam.status === 'running' ? 'The Prosecutor is attacking the draft…' : 'Waiting for Stage 1'}
        body="Findings are classified with the five-badge failure taxonomy and checked against the draft."
      />
    );
  }

  if (stage2RedTeam.status === 'error') {
    return (
      <EmptyState
        icon={<TriangleAlert className="w-10 h-10" aria-hidden="true" />}
        title="Stage 2 failed"
        body={stage2RedTeam.error || 'The Red-Team Prosecutor did not return a usable result.'}
      />
    );
  }

  const counts: Record<FailureSeverity, number> = { CRITICAL: 0, HIGH: 0, MEDIUM: 0 };
  failureModes.forEach((f) => {
    counts[f.severity] += 1;
  });
  const ungrounded = failureModes.filter((f) => !f.groundedInDraft).length;

  return (
    <div className="space-y-4">
      <div className="rounded-md border-2 border-ink bg-danger-soft p-4">
        <div className="font-mono text-[11px] font-bold uppercase tracking-wide text-ink mb-1">
          Prosecutor's indictment
        </div>
        <p className="text-[15px] leading-relaxed text-ink">{session.prosecutorSummary}</p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="dangerSolid">{counts.CRITICAL} critical</Badge>
        <Badge tone="warning">{counts.HIGH} high</Badge>
        <Badge tone="primary">{counts.MEDIUM} medium</Badge>
        {ungrounded > 0 && (
          <Badge tone="neutral" title="The quoted snippet could not be located in the Stage 1 draft. Treat with suspicion.">
            {ungrounded} unverifiable quote{ungrounded > 1 ? 's' : ''}
          </Badge>
        )}
      </div>

      {failureModes.length === 0 ? (
        <EmptyState
          icon={<ShieldCheck className="w-10 h-10" aria-hidden="true" />}
          title="No failure modes reported"
          body="The Prosecutor found nothing it could quote from the draft. The deterministic gate still ran independently."
        />
      ) : (
        <div className="overflow-x-auto rounded-md border-2 border-ink">
          <table className="w-full min-w-[820px] text-left border-collapse">
            <caption className="sr-only">Detected failure modes</caption>
            <thead>
              <tr className="bg-ink text-surface font-mono text-[11px] uppercase tracking-wider">
                <th scope="col" className="px-3 py-2.5">ID</th>
                <th scope="col" className="px-3 py-2.5">Category</th>
                <th scope="col" className="px-3 py-2.5">Severity</th>
                <th scope="col" className="px-3 py-2.5">Exact flawed snippet or claim</th>
                <th scope="col" className="px-3 py-2.5">Required fix</th>
              </tr>
            </thead>
            <tbody>
              {failureModes.map((row) => (
                <tr key={row.id} className="border-t-2 border-ink align-top odd:bg-card even:bg-surface">
                  <td className="px-3 py-3 font-mono text-[13px] font-black text-ink whitespace-nowrap">{row.id}</td>
                  <td className="px-3 py-3">
                    <Badge className="text-night" style={{ backgroundColor: TAXONOMY_COLORS[row.category] }}>
                      {row.category}
                    </Badge>
                  </td>
                  <td className="px-3 py-3">
                    <Badge tone={SEVERITY_TONE[row.severity]}>{row.severity}</Badge>
                  </td>
                  <td className="px-3 py-3 max-w-[22rem]">
                    <code className="block rounded border-2 border-ink bg-danger-soft px-2 py-1.5 font-mono text-[12px] text-ink break-words whitespace-pre-wrap">
                      {row.flawedSnippet}
                    </code>
                    <span
                      className="mt-1.5 inline-flex items-center gap-1 font-mono text-[11px] font-bold text-muted"
                      title={row.groundedInDraft ? 'Snippet located in the Stage 1 draft' : 'Snippet NOT found in the Stage 1 draft'}
                    >
                      {row.groundedInDraft ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" /> Quote verified in draft
                        </>
                      ) : (
                        <>
                          <TriangleAlert className="w-3.5 h-3.5" aria-hidden="true" /> Quote not found in draft
                        </>
                      )}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-[15px] leading-relaxed text-ink">{row.requiredFix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
