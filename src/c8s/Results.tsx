import React, { useState } from 'react';
import {
  DiffViewMode,
  MathTelemetryParams,
  StrictnessLevel,
  VerificationSessionState,
} from '../t3s/types';
import { Badge, Card, SectionHeader, Tabs } from './ui';
import { VerdictTab } from './VerdictTab';
import { FindingsTab } from './FindingsTab';
import { GateTab } from './GateTab';
import { DiffTab } from './DiffTab';
import { TelemetryTab } from './TelemetryTab';

interface ResultsProps {
  session: VerificationSessionState;
  mathParams: MathTelemetryParams;
  strictness: StrictnessLevel;
  diffViewMode: DiffViewMode;
  onDiffViewMode: (mode: DiffViewMode) => void;
  onMathChange: (partial: Partial<MathTelemetryParams>) => void;
  onStrictness: (level: StrictnessLevel) => void;
  onDownloadReport: () => void;
}

export const Results: React.FC<ResultsProps> = ({
  session,
  mathParams,
  strictness,
  diffViewMode,
  onDiffViewMode,
  onMathChange,
  onStrictness,
  onDownloadReport,
}) => {
  const [tab, setTab] = useState<string>('verdict');
  const gateFails = session.heuristicChecks.filter((c) => c.stage1Status === 'FAIL').length;

  return (
    <section aria-labelledby="results-title" className="mb-10">
      <SectionHeader
        step="04"
        title="Read the verdict"
        subtitle="Every claim is inspectable: the failures found, the checks that ran, the lines that changed and what it all cost."
      />
      <h3 id="results-title" className="sr-only">
        Verification results
      </h3>

      <Card className="p-4 sm:p-5">
        <Tabs
          label="Result views"
          active={tab}
          onChange={setTab}
          tabs={[
            { id: 'verdict', label: 'Verdict' },
            {
              id: 'findings',
              label: 'Red-team findings',
              badge: session.failureModes.length > 0 ? <Badge tone="dangerSolid">{session.failureModes.length}</Badge> : undefined,
            },
            {
              id: 'gate',
              label: 'Heuristic gate',
              badge: gateFails > 0 ? <Badge tone="warning">{gateFails}</Badge> : undefined,
            },
            { id: 'diff', label: 'Diff' },
            { id: 'telemetry', label: 'Telemetry' },
          ]}
        />

        <div
          role="tabpanel"
          id={`panel-${tab}`}
          aria-labelledby={`tab-${tab}`}
          tabIndex={0}
          className="mt-5 focus-visible:outline-offset-4"
        >
          {tab === 'verdict' && (
            <VerdictTab session={session} mathParams={mathParams} onDownloadReport={onDownloadReport} />
          )}
          {tab === 'findings' && <FindingsTab session={session} />}
          {tab === 'gate' && <GateTab session={session} />}
          {tab === 'diff' && <DiffTab session={session} mode={diffViewMode} onModeChange={onDiffViewMode} />}
          {tab === 'telemetry' && (
            <TelemetryTab
              session={session}
              params={mathParams}
              strictness={strictness}
              onChange={onMathChange}
              onStrictness={onStrictness}
            />
          )}
        </div>
      </Card>
    </section>
  );
};
