import React from 'react';
import { MathTelemetryParams, StrictnessLevel, VerificationSessionState } from '../t3s/types';
import {
  STRICTNESS_PRESETS,
  buildTelemetryMarkdown,
  computeCostBreakdown,
  computeCurve,
  computeHorizonTable,
  computeMathSummary,
  formatMs,
  formatTokens,
  formatUsd,
} from '../u3s/crucibleUtils';
import { Badge, BadgeTone, Card, CopyButton, Slider, cx } from './ui';

interface TelemetryTabProps {
  session: VerificationSessionState;
  params: MathTelemetryParams;
  strictness: StrictnessLevel;
  onChange: (partial: Partial<MathTelemetryParams>) => void;
  onStrictness: (level: StrictnessLevel) => void;
}

const STATUS_TONE: Record<'Stable' | 'Degrading' | 'Collapsed', BadgeTone> = {
  Stable: 'success',
  Degrading: 'warning',
  Collapsed: 'dangerSolid',
};

const Formula: React.FC<{ title: string; formula: string; value: React.ReactNode; tone?: string }> = ({
  title,
  formula,
  value,
  tone = 'bg-card',
}) => (
  <div className={cx('rounded-md border-2 border-ink p-3.5 shadow-nb-sm', tone)}>
    <div className="font-mono text-[11px] font-bold uppercase tracking-wide text-muted">{title}</div>
    <div className="mt-0.5 font-mono text-[13px] font-bold text-ink">{formula}</div>
    <div className="mt-2 text-[27px] font-black leading-none text-ink">{value}</div>
  </div>
);

const ReliabilityChart: React.FC<{ params: MathTelemetryParams }> = ({ params }) => {
  const width = 640;
  const height = 260;
  const pad = { left: 44, right: 16, top: 14, bottom: 32 };
  const innerW = width - pad.left - pad.right;
  const innerH = height - pad.top - pad.bottom;
  const maxN = 50;
  const points = computeCurve(params, maxN);
  const x = (n: number) => pad.left + (n / maxN) * innerW;
  const y = (pct: number) => pad.top + innerH - (pct / 100) * innerH;
  const path = (key: 'open' | 'closed') =>
    points.map((pt, i) => `${i === 0 ? 'M' : 'L'}${x(pt.n).toFixed(1)},${y(pt[key]).toFixed(1)}`).join(' ');
  const activeN = Math.min(maxN, Math.max(1, Math.round(params.n)));
  const active = points[activeN];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto"
      role="img"
      aria-label={`Reliability decay curve. At ${activeN} steps, open-loop success is ${active.open.toFixed(1)} percent and closed-loop is ${active.closed.toFixed(1)} percent.`}
    >
      {[0, 25, 50, 75, 100].map((tick) => (
        <g key={tick}>
          <line x1={pad.left} x2={width - pad.right} y1={y(tick)} y2={y(tick)} strokeWidth="1" strokeDasharray="4 4" style={{ stroke: 'var(--muted)', opacity: 0.5 }} />
          <text x={pad.left - 8} y={y(tick) + 4} textAnchor="end" fontSize="11" fontFamily="JetBrains Mono, monospace" style={{ fill: 'var(--muted)' }}>
            {tick}%
          </text>
        </g>
      ))}
      {[0, 10, 20, 30, 40, 50].map((tick) => (
        <text key={tick} x={x(tick)} y={height - 10} textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono, monospace" style={{ fill: 'var(--muted)' }}>
          {tick}
        </text>
      ))}
      <rect x={pad.left} y={pad.top} width={innerW} height={innerH} fill="none" strokeWidth="2" style={{ stroke: 'var(--ink)' }} />
      <line x1={x(activeN)} x2={x(activeN)} y1={pad.top} y2={pad.top + innerH} strokeWidth="2" strokeDasharray="6 4" style={{ stroke: 'var(--ink)' }} />
      <path d={path('open')} fill="none" strokeWidth="4" strokeLinejoin="round" style={{ stroke: '#DC2626' }} />
      <path d={path('closed')} fill="none" strokeWidth="4" strokeLinejoin="round" style={{ stroke: 'var(--chart-closed)' }} />
      <circle cx={x(activeN)} cy={y(active.open)} r="6" strokeWidth="2.5" style={{ fill: '#DC2626', stroke: 'var(--ink)' }} />
      <circle cx={x(activeN)} cy={y(active.closed)} r="6" strokeWidth="2.5" style={{ fill: 'var(--chart-closed)', stroke: 'var(--ink)' }} />
    </svg>
  );
};

export const TelemetryTab: React.FC<TelemetryTabProps> = ({
  session,
  params,
  strictness,
  onChange,
  onStrictness,
}) => {
  const math = computeMathSummary(params);
  const horizon = computeHorizonTable(params);
  const cost = computeCostBreakdown(session);
  const hasCost = cost.totalApiCalls > 0;

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <h3 className="text-[21px] font-black text-ink">Reliability model</h3>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Strictness preset">
            {(Object.keys(STRICTNESS_PRESETS) as StrictnessLevel[]).map((level) => {
              const preset = STRICTNESS_PRESETS[level];
              const active = strictness === level;
              return (
                <button
                  key={level}
                  type="button"
                  aria-pressed={active}
                  onClick={() => onStrictness(level)}
                  className={cx(
                    'rounded-md border-2 border-ink px-3 py-1.5 font-mono text-[12px] font-bold uppercase transition-all duration-100 motion-reduce:transition-none',
                    active ? 'bg-primary text-night shadow-nb-sm' : 'bg-card text-ink hover:bg-soft'
                  )}
                >
                  {preset.short} · d={preset.d} r={preset.r}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <Slider
            id="slider-p"
            label="Step accuracy p"
            valueLabel={`${(params.p * 100).toFixed(0)}%`}
            min={0.5}
            max={0.99}
            step={0.01}
            value={params.p}
            onChange={(p) => onChange({ p })}
            hint="Chance one unaided agent step is correct."
          />
          <Slider
            id="slider-d"
            label="Detection d"
            valueLabel={`${(params.d * 100).toFixed(0)}%`}
            min={0.2}
            max={0.99}
            step={0.01}
            value={params.d}
            onChange={(d) => onChange({ d })}
            hint="Chance the Red-Team catches a bad step."
          />
          <Slider
            id="slider-r"
            label="Repair r"
            valueLabel={`${(params.r * 100).toFixed(0)}%`}
            min={0.2}
            max={0.99}
            step={0.01}
            value={params.r}
            onChange={(r) => onChange({ r })}
            hint="Chance the Judge fixes a caught step."
          />
          <Slider
            id="slider-n"
            label="Horizon n"
            valueLabel={`${params.n} steps`}
            min={1}
            max={50}
            step={1}
            value={params.n}
            onChange={(n) => onChange({ n: Math.round(n) })}
            hint="Number of sequential agent steps."
          />
        </div>
      </div>

      {/* Formulas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <Formula
          title="Open-loop success"
          formula={`P_open(n) = p^n = ${math.p.toFixed(2)}^${math.n}`}
          value={<span className="text-danger">{math.openLoopAtN.toFixed(2)}%</span>}
        />
        <Formula
          title="Half-life horizon"
          formula="n½ = ln(0.5) / ln(p)"
          value={
            <>
              {math.halfLifeOpen.toFixed(1)}
              <span className="text-[15px] font-bold text-muted"> → {math.halfLifeClosed.toFixed(1)} steps</span>
            </>
          }
        />
        <Formula
          title="Effective step reliability"
          formula="p_eff = p + (1 − p)·d·r"
          value={<span className="text-accent">{(math.pEff * 100).toFixed(2)}%</span>}
        />
        <Formula
          title="Closed-loop success"
          formula={`P_closed(n) = p_eff^${math.n}`}
          tone="bg-primary-soft"
          value={
            <>
              {math.closedLoopAtN.toFixed(2)}%
              <span className="text-[15px] font-bold text-muted"> (+{math.gainAtN.toFixed(1)})</span>
            </>
          }
        />
      </div>

      {/* Chart */}
      <Card flat className="p-4">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h4 className="font-mono text-[13px] font-black uppercase tracking-wide text-ink">
            Success probability vs. task horizon
          </h4>
          <div className="flex items-center gap-3 font-mono text-[11px] font-bold text-ink">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-4 h-1.5 bg-danger border border-ink" aria-hidden="true" /> Open-loop
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-4 h-1.5 border border-ink" style={{ background: 'var(--chart-closed)' }} aria-hidden="true" /> Crucible
            </span>
          </div>
        </div>
        <ReliabilityChart params={params} />
      </Card>

      {/* Table 1 */}
      <div>
        <h3 className="text-[21px] font-black text-ink mb-3">Horizon reliability comparison</h3>
        <div className="overflow-x-auto rounded-md border-2 border-ink">
          <table className="w-full min-w-[720px] text-left border-collapse">
            <caption className="sr-only">Open-loop versus Crucible closed-loop reliability by step horizon</caption>
            <thead>
              <tr className="bg-ink text-surface font-mono text-[11px] uppercase tracking-wider">
                <th scope="col" className="px-3 py-2.5">Step horizon</th>
                <th scope="col" className="px-3 py-2.5 text-right">Open-loop (p^n)</th>
                <th scope="col" className="px-3 py-2.5 text-right">Crucible (p_eff^n)</th>
                <th scope="col" className="px-3 py-2.5 text-right">Gain (+Δ%)</th>
                <th scope="col" className="px-3 py-2.5">Status</th>
              </tr>
            </thead>
            <tbody className="font-mono text-[13px]">
              {horizon.map((row) => {
                const active = row.n === math.n;
                return (
                  <tr key={row.n} className={cx('border-t-2 border-ink', active ? 'bg-primary-soft font-bold' : 'odd:bg-card even:bg-surface')}>
                    <td className="px-3 py-2.5 text-ink">
                      n = {row.n}
                      {active && <Badge tone="dark" className="ml-2">Active</Badge>}
                    </td>
                    <td className="px-3 py-2.5 text-right tabular-nums text-ink">{row.openLoopPct.toFixed(2)}%</td>
                    <td className="px-3 py-2.5 text-right tabular-nums text-ink">{row.closedLoopPct.toFixed(2)}%</td>
                    <td className="px-3 py-2.5 text-right tabular-nums text-ink">+{row.reliabilityGainPct.toFixed(2)}%</td>
                    <td className="px-3 py-2.5">
                      <span className="inline-flex items-center gap-1.5">
                        <Badge tone={STATUS_TONE[row.openStatus]}>{row.openStatus}</Badge>
                        <span aria-hidden="true">→</span>
                        <Badge tone={STATUS_TONE[row.closedStatus]}>{row.closedStatus}</Badge>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Table 2 */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <h3 className="text-[21px] font-black text-ink">Token &amp; cost breakdown</h3>
          <CopyButton
            size="md"
            label="Copy full telemetry table"
            text={buildTelemetryMarkdown(session, params, strictness)}
          />
        </div>

        {!hasCost ? (
          <div className="rounded-lg border-2 border-dashed border-ink bg-soft px-6 py-8 text-center text-[15px] text-muted">
            Run a verification to see real token usage, latency and cost per stage.
          </div>
        ) : (
          <>
            <div className="overflow-x-auto rounded-md border-2 border-ink">
              <table className="w-full min-w-[820px] text-left border-collapse">
                <caption className="sr-only">Per-stage token, latency and cost breakdown</caption>
                <thead>
                  <tr className="bg-ink text-surface font-mono text-[11px] uppercase tracking-wider">
                    <th scope="col" className="px-3 py-2.5">Pipeline stage</th>
                    <th scope="col" className="px-3 py-2.5">Model</th>
                    <th scope="col" className="px-3 py-2.5 text-right">Input tok</th>
                    <th scope="col" className="px-3 py-2.5 text-right">Output tok</th>
                    <th scope="col" className="px-3 py-2.5 text-right">API calls</th>
                    <th scope="col" className="px-3 py-2.5 text-right">Latency</th>
                    <th scope="col" className="px-3 py-2.5 text-right">Est. cost (USD)</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-[13px] text-ink">
                  {cost.rows.map((row) => (
                    <tr key={row.stageId} className="border-t-2 border-ink odd:bg-card even:bg-surface">
                      <td className="px-3 py-2.5 font-bold">{row.stageLabel}</td>
                      <td className="px-3 py-2.5 text-muted">{row.modelUsed}</td>
                      <td className="px-3 py-2.5 text-right tabular-nums">{formatTokens(row.inputTokens)}</td>
                      <td className="px-3 py-2.5 text-right tabular-nums">{formatTokens(row.outputTokens)}</td>
                      <td className="px-3 py-2.5 text-right tabular-nums">{row.apiCalls}</td>
                      <td className="px-3 py-2.5 text-right tabular-nums">{formatMs(row.latencyMs)}</td>
                      <td className="px-3 py-2.5 text-right tabular-nums font-bold">
                        {row.priceKnown ? formatUsd(row.estimatedCostUsd) : 'n/a'}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t-[3px] border-ink bg-primary-soft font-black">
                    <td className="px-3 py-3" colSpan={2}>Total · closed-loop runtime</td>
                    <td className="px-3 py-3 text-right tabular-nums">{formatTokens(cost.totalInputTokens)}</td>
                    <td className="px-3 py-3 text-right tabular-nums">{formatTokens(cost.totalOutputTokens)}</td>
                    <td className="px-3 py-3 text-right tabular-nums">{cost.totalApiCalls}</td>
                    <td className="px-3 py-3 text-right tabular-nums">{formatMs(cost.totalLatencyMs)}</td>
                    <td className="px-3 py-3 text-right tabular-nums">{formatUsd(cost.closedLoopCostUsd)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Formula title="Single-pass (Stage 1 only)" formula={formatMs(cost.singlePassLatencyMs)} value={formatUsd(cost.singlePassCostUsd)} />
              <Formula title="Closed-loop (all stages)" formula={formatMs(cost.totalLatencyMs)} value={formatUsd(cost.closedLoopCostUsd)} tone="bg-primary-soft" />
              <Formula
                title="Verification premium"
                formula="closed-loop ÷ single-pass cost"
                value={cost.costMultiplier ? `${cost.costMultiplier.toFixed(1)}×` : 'n/a'}
              />
            </div>
            <p className="mt-3 font-mono text-[11px] text-muted">
              Cost = tokens × public list price per 1M tokens for the selected model.
              {cost.anyTokensEstimated && ' * Some token counts are estimated (the provider did not report usage).'}
              {cost.anyPriceUnknown && ' Models without a known price are shown as n/a and excluded from totals.'}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
