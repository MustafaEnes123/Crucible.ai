import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MathTelemetryParams } from '../t3s/types';
import { computeMathSummary } from '../u3s/crucibleUtils';
import { Badge, Card } from './ui';

export const Hero: React.FC<{ params: MathTelemetryParams }> = ({ params }) => {
  const math = computeMathSummary(params);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-6 lg:gap-8 items-stretch mb-10">
      <div className="flex flex-col justify-center">
        <Badge tone="secondary" className="self-start mb-4">
          The adversarial verification runtime for autonomous AI agents
        </Badge>
        <h2 className="text-[35px] sm:text-[52px] leading-[1.02] font-black tracking-tight text-ink">
          One model says it's fine.
          <br />
          <span className="inline-block mt-1 px-2 bg-primary text-night border-2 border-ink shadow-nb -rotate-1">
            Crucible tries to break it.
          </span>
        </h2>
        <p className="mt-5 text-[17px] text-muted max-w-xl">
          Every task runs through four stages: a builder drafts, a red-team prosecutor attacks the
          draft, a deterministic gate checks it with no model involved, and a chief judge repairs
          what is actually broken. You see every flaw, every repaired line, and the exact cost.
        </p>
      </div>

      <Card className="p-5 sm:p-6 bg-primary text-night self-center">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-mono text-[12px] font-black uppercase tracking-wider">
            Live reliability lift
          </span>
          <span className="font-mono text-[11px] font-bold">
            p={math.p.toFixed(2)} · d={math.d.toFixed(2)} · r={math.r.toFixed(2)} · n={math.n}
          </span>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          <div>
            <div className="font-mono text-[11px] font-bold uppercase">Single agent</div>
            <div className="text-[35px] sm:text-[44px] font-black leading-none">
              {math.openLoopAtN.toFixed(1)}%
            </div>
          </div>
          <ArrowRight className="w-8 h-8 shrink-0" aria-hidden="true" />
          <div className="px-3 py-2 rounded-md border-2 border-night bg-card text-ink shadow-nb-sm">
            <div className="font-mono text-[11px] font-bold uppercase">With Crucible</div>
            <div className="text-[35px] sm:text-[44px] font-black leading-none text-accent">
              {math.closedLoopAtN.toFixed(1)}%
            </div>
          </div>
        </div>
        <p className="mt-4 font-mono text-[12px] font-bold leading-relaxed">
          P_open(n) = p^n → P_closed(n) = (p + (1 − p)·d·r)^n. Tune the inputs in the Telemetry tab.
        </p>
      </Card>
    </section>
  );
};
