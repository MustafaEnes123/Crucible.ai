import React from 'react';
import { ListChecks } from 'lucide-react';
import { HeuristicStatus, VerificationSessionState } from '../t3s/types';
import { Badge, BadgeTone, EmptyState } from './ui';

const STATUS_TONE: Record<HeuristicStatus, BadgeTone> = {
  PASS: 'success',
  WARN: 'warning',
  FAIL: 'dangerSolid',
  'N/A': 'neutral',
};

const StatusBadge: React.FC<{ status: HeuristicStatus | null }> = ({ status }) =>
  status ? <Badge tone={STATUS_TONE[status]}>{status}</Badge> : <Badge>Pending</Badge>;

export const GateTab: React.FC<{ session: VerificationSessionState }> = ({ session }) => {
  const checks = session.heuristicChecks;

  if (checks.length === 0) {
    return (
      <EmptyState
        icon={<ListChecks className="w-10 h-10" aria-hidden="true" />}
        title="Gate has not run"
        body="Stage 3 runs nine deterministic rules locally on the draft and again on the repaired output. No model, no API call, no cost."
      />
    );
  }

  const failBefore = checks.filter((c) => c.stage1Status === 'FAIL').length;
  const warnBefore = checks.filter((c) => c.stage1Status === 'WARN').length;
  const hasAfter = checks.some((c) => c.stage4Status !== null);
  const failAfter = checks.filter((c) => c.stage4Status === 'FAIL').length;
  const warnAfter = checks.filter((c) => c.stage4Status === 'WARN').length;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="neutral">Draft: {failBefore} fail · {warnBefore} warn</Badge>
        {hasAfter && (
          <Badge tone={failAfter === 0 ? 'success' : 'dangerSolid'}>
            Repaired: {failAfter} fail · {warnAfter} warn
          </Badge>
        )}
        <span className="font-mono text-[12px] text-muted">
          Rules are regex and structure checks. N/A means the rule does not apply to this output.
        </span>
      </div>

      <div className="overflow-x-auto rounded-md border-2 border-ink">
        <table className="w-full min-w-[820px] text-left border-collapse">
          <caption className="sr-only">Deterministic heuristic and schema gate checklist</caption>
          <thead>
            <tr className="bg-ink text-surface font-mono text-[11px] uppercase tracking-wider">
              <th scope="col" className="px-3 py-2.5">Check</th>
              <th scope="col" className="px-3 py-2.5">Category</th>
              <th scope="col" className="px-3 py-2.5">Stage 1 draft</th>
              <th scope="col" className="px-3 py-2.5">Stage 4 repaired</th>
              <th scope="col" className="px-3 py-2.5">Diagnostic</th>
            </tr>
          </thead>
          <tbody>
            {checks.map((c) => (
              <tr key={c.id} className="border-t-2 border-ink align-top odd:bg-card even:bg-surface">
                <td className="px-3 py-3">
                  <div className="font-mono text-[11px] font-bold text-muted">{c.id}</div>
                  <div className="text-[15px] font-extrabold text-ink leading-tight">{c.checkName}</div>
                </td>
                <td className="px-3 py-3 font-mono text-[12px] text-muted whitespace-nowrap">{c.category}</td>
                <td className="px-3 py-3"><StatusBadge status={c.stage1Status} /></td>
                <td className="px-3 py-3"><StatusBadge status={c.stage4Status} /></td>
                <td className="px-3 py-3 max-w-[28rem]">
                  <p className="text-[13px] leading-relaxed text-ink">{c.detail}</p>
                  {c.evidence.length > 0 && (
                    <ul className="mt-1.5 space-y-1">
                      {c.evidence.map((line, i) => (
                        <li
                          key={i}
                          className="rounded border border-ink bg-soft px-2 py-1 font-mono text-[11px] text-ink break-words"
                        >
                          {line}
                        </li>
                      ))}
                    </ul>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
