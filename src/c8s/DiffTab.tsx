import React, { useMemo } from 'react';
import { GitCompare } from 'lucide-react';
import { DiffViewMode, FailureTaxonomyBadge, VerificationSessionState } from '../t3s/types';
import { computeLineDiff } from '../u3s/crucibleUtils';
import { Badge, EmptyState, Tabs, cx } from './ui';
import { MarkdownView } from './MarkdownView';

const TAXONOMY_COLORS: Record<FailureTaxonomyBadge, string> = {
  '[STATE DRIFT]': '#C4B5FD',
  '[RLHF SYCOPHANCY]': '#FDE68A',
  '[CONTEXT POLLUTION]': '#A5F3FC',
  '[HALLUCINATED API / SCHEMA]': '#FBCFE8',
  '[UNHANDLED EDGE CASE / SECURITY]': '#FCA5A5',
};

interface DiffTabProps {
  session: VerificationSessionState;
  mode: DiffViewMode;
  onModeChange: (mode: DiffViewMode) => void;
}

const lineNo = (n: number | null) => (
  <span className="w-9 shrink-0 text-right select-none text-muted tabular-nums">{n ?? ''}</span>
);

export const DiffTab: React.FC<DiffTabProps> = ({ session, mode, onModeChange }) => {
  const ready = session.stage4Judge.status === 'completed';
  const diff = useMemo(
    () => computeLineDiff(session.stage1Builder.content, session.stage4Judge.content, session.failureModes),
    [session.stage1Builder.content, session.stage4Judge.content, session.failureModes]
  );

  if (!ready) {
    return (
      <EmptyState
        icon={<GitCompare className="w-10 h-10" aria-hidden="true" />}
        title="Diff unlocks after Stage 4"
        body="Compare the raw draft against the Judge's repaired output line by line."
      />
    );
  }

  const sycophancy = session.failureModes.filter((f) => f.category === '[RLHF SYCOPHANCY]').length;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Tabs
          label="Diff view"
          active={mode}
          onChange={(id) => onModeChange(id as DiffViewMode)}
          tabs={[
            { id: 'side-by-side', label: 'Side-by-side' },
            { id: 'annotated-diff', label: 'Red-team annotated' },
            { id: 'clean-final', label: 'Clean final' },
          ]}
        />
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="danger">− {diff.removedCount} removed</Badge>
          <Badge tone="success">+ {diff.addedCount} added</Badge>
        </div>
      </div>

      <p className="rounded-md border-2 border-ink bg-soft px-3.5 py-2.5 font-mono text-[13px] font-bold text-ink">
        {session.failureModes.length} bugs caught · {Math.max(diff.removedCount, diff.addedCount)} lines repaired ·{' '}
        {sycophancy > 0 ? `${sycophancy} sycophancy finding${sycophancy > 1 ? 's' : ''} eliminated` : 'no sycophancy findings'}
      </p>

      <div role="tabpanel" id={`panel-${mode}`} aria-labelledby={`tab-${mode}`}>
        {mode === 'annotated-diff' && (
          <div className="rounded-md border-2 border-ink overflow-auto max-h-[640px] bg-surface font-mono text-[12px] leading-relaxed">
            {diff.unifiedLines.map((line, idx) => {
              if (line.type === 'removed') {
                return (
                  <div key={idx} className="flex items-start gap-2 px-2 py-0.5 bg-danger-soft border-l-4 border-danger">
                    {lineNo(line.oldLineNumber)}
                    <span className="w-3 shrink-0 font-black text-danger select-none" aria-label="removed">−</span>
                    <span className="flex-1 whitespace-pre-wrap break-all text-ink line-through decoration-danger decoration-2">
                      {line.text || ' '}
                    </span>
                    {line.flawBadge && (
                      <Badge className="text-night shrink-0" style={{ backgroundColor: TAXONOMY_COLORS[line.flawBadge] }}>
                        {line.flawBadge}
                      </Badge>
                    )}
                  </div>
                );
              }
              if (line.type === 'added') {
                return (
                  <div key={idx} className="flex items-start gap-2 px-2 py-0.5 bg-success-soft border-l-4 border-success">
                    {lineNo(line.newLineNumber)}
                    <span className="w-3 shrink-0 font-black text-success select-none" aria-label="added">+</span>
                    <span className="flex-1 whitespace-pre-wrap break-all text-ink">{line.text || ' '}</span>
                  </div>
                );
              }
              return (
                <div key={idx} className="flex items-start gap-2 px-2 py-0.5 border-l-4 border-transparent">
                  {lineNo(line.newLineNumber)}
                  <span className="w-3 shrink-0" />
                  <span className="flex-1 whitespace-pre-wrap break-all text-muted">{line.text || ' '}</span>
                </div>
              );
            })}
          </div>
        )}

        {mode === 'side-by-side' && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {(['left', 'right'] as const).map((side) => (
              <div key={side} className="rounded-md border-2 border-ink overflow-hidden bg-surface">
                <div
                  className={cx(
                    'px-3 py-2 border-b-2 border-ink font-mono text-[12px] font-black uppercase tracking-wide text-ink',
                    side === 'left' ? 'bg-danger-soft' : 'bg-success-soft'
                  )}
                >
                  {side === 'left' ? 'Stage 1 · raw draft' : 'Stage 4 · repaired output'}
                </div>
                <div className="overflow-auto max-h-[640px] font-mono text-[12px] leading-relaxed">
                  {diff.sideBySideRows.map((row, idx) => {
                    const type = side === 'left' ? row.leftType : row.rightType;
                    const text = side === 'left' ? row.leftText : row.rightText;
                    const no = side === 'left' ? row.leftLineNumber : row.rightLineNumber;
                    return (
                      <div
                        key={idx}
                        className={cx(
                          'flex items-start gap-2 px-2 py-0.5',
                          type === 'removed' && 'bg-danger-soft line-through decoration-danger',
                          type === 'added' && 'bg-success-soft',
                          type === 'empty' && 'bg-soft opacity-60'
                        )}
                      >
                        {lineNo(no)}
                        <span className="flex-1 whitespace-pre-wrap break-all text-ink">{text || ' '}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {mode === 'clean-final' && (
          <div className="rounded-md border-2 border-ink bg-surface p-4">
            <MarkdownView content={session.stage4Judge.content} />
          </div>
        )}
      </div>
    </div>
  );
};
