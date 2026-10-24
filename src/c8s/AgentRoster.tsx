import React, { useState } from 'react';
import { Eye, EyeOff, ExternalLink, Zap } from 'lucide-react';
import {
  AIProvider,
  AgentConfig,
  AgentSlotId,
  PingResult,
  ProviderConfigEntry,
} from '../t3s/types';
import { PROVIDER_ORDER, getModelPricing } from '../s6s/apiService';
import { formatUsd } from '../u3s/crucibleUtils';
import { Badge, BadgeTone, Button, Card, SectionHeader, cx } from './ui';

interface AgentRosterProps {
  agents: Record<AgentSlotId, AgentConfig>;
  providerConfig: Record<AIProvider, ProviderConfigEntry>;
  apiKeys: Record<AIProvider, string>;
  pings: Record<AIProvider, PingResult | null>;
  onProvider: (slot: AgentSlotId, provider: AIProvider) => void;
  onModel: (slot: AgentSlotId, model: string) => void;
  onKey: (provider: AIProvider, key: string) => void;
  onTest: (provider: AIProvider) => void;
}

const SLOTS: Array<{ id: AgentSlotId; accent: string; accentText: string }> = [
  { id: 'builder', accent: 'bg-primary', accentText: 'text-night' },
  { id: 'redTeam', accent: 'bg-danger', accentText: 'text-white' },
  { id: 'judge', accent: 'bg-secondary', accentText: 'text-white' },
];

const pingTone = (ping: PingResult | null): { tone: BadgeTone; label: string } => {
  if (!ping) return { tone: 'neutral', label: 'Not tested' };
  if (ping.status === 'Testing') return { tone: 'primary', label: 'Testing…' };
  if (ping.status === 'Connected') {
    return { tone: 'success', label: `Connected${ping.latencyMs ? ` · ${ping.latencyMs} ms` : ''}` };
  }
  return { tone: 'dangerSolid', label: 'Invalid key' };
};

const fieldClass =
  'w-full rounded-md border-2 border-ink bg-surface px-3 py-2 font-mono text-[13px] text-ink placeholder:text-muted focus:bg-card';

const KeyField: React.FC<{
  id: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}> = ({ id, value, placeholder, onChange, onSubmit }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative">
      <input
        id={id}
        type={visible ? 'text' : 'password'}
        value={value}
        autoComplete="off"
        spellCheck={false}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value.trim())}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            onSubmit();
          }
        }}
        className={cx(fieldClass, 'pr-10')}
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? 'Hide API key' : 'Show API key'}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded text-ink hover:bg-soft"
      >
        {visible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </button>
    </div>
  );
};

export const AgentRoster: React.FC<AgentRosterProps> = ({
  agents,
  providerConfig,
  apiKeys,
  pings,
  onProvider,
  onModel,
  onKey,
  onTest,
}) => (
  <section aria-labelledby="roster-title" className="mb-10">
    <SectionHeader
      step="01"
      title="Assemble your agents"
      subtitle="Bring your own keys. Use different providers per stage so the critic never shares blind spots with the builder. Keys live only in this browser's localStorage."
    />
    <h3 id="roster-title" className="sr-only">
      Agent configuration
    </h3>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {SLOTS.map(({ id, accent, accentText }) => {
        const agent = agents[id];
        const cfg = providerConfig[agent.provider];
        const key = apiKeys[agent.provider];
        const ping = pings[agent.provider];
        const tone = pingTone(ping);
        const models = cfg.models.some((m) => m.id === agent.model)
          ? cfg.models
          : [{ id: agent.model, displayName: agent.model }, ...cfg.models];
        const price = getModelPricing(agent.model);

        return (
          <Card key={id} className="overflow-hidden flex flex-col">
            <div
              className={cx(
                'flex items-center justify-between gap-2 px-4 py-2.5 border-b-2 border-ink',
                accent,
                accentText
              )}
            >
              <span className="font-mono text-[13px] font-black uppercase tracking-wider">
                Stage 0{agent.stageNumber}
              </span>
              <span className="font-mono text-[11px] font-bold uppercase">{agent.role}</span>
            </div>

            <div className="p-4 space-y-3.5 flex-1">
              <h3 className="text-[21px] font-black text-ink leading-tight">{agent.title}</h3>

              <div>
                <label
                  htmlFor={`provider-${id}`}
                  className="block mb-1 font-mono text-[11px] font-bold uppercase tracking-wide text-muted"
                >
                  Provider
                </label>
                <select
                  id={`provider-${id}`}
                  value={agent.provider}
                  onChange={(e) => onProvider(id, e.target.value as AIProvider)}
                  className={cx(fieldClass, 'cursor-pointer font-bold')}
                >
                  {PROVIDER_ORDER.map((p) => (
                    <option key={p} value={p}>
                      {providerConfig[p].label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor={`model-${id}`}
                  className="block mb-1 font-mono text-[11px] font-bold uppercase tracking-wide text-muted"
                >
                  Model {cfg.isLiveList && <span className="text-accent">· live list</span>}
                </label>
                <select
                  id={`model-${id}`}
                  value={agent.model}
                  onChange={(e) => onModel(id, e.target.value)}
                  className={cx(fieldClass, 'cursor-pointer')}
                >
                  {models.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.displayName || m.id}
                    </option>
                  ))}
                </select>
                <p className="mt-1 font-mono text-[11px] text-muted">
                  {price.known
                    ? `${formatUsd(price.input)} in · ${formatUsd(price.output)} out per 1M tokens`
                    : 'Price unknown: cost shown as n/a'}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label
                    htmlFor={`key-${id}`}
                    className="font-mono text-[11px] font-bold uppercase tracking-wide text-muted"
                  >
                    {cfg.shortLabel} API key
                  </label>
                  <a
                    href={cfg.keyHelpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-accent underline underline-offset-2"
                  >
                    Get a key <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <KeyField
                  id={`key-${id}`}
                  value={key}
                  placeholder={cfg.placeholder}
                  onChange={(v) => onKey(agent.provider, v)}
                  onSubmit={() => onTest(agent.provider)}
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => onTest(agent.provider)}
                  disabled={!key}
                  loading={ping?.status === 'Testing'}
                  icon={<Zap className="w-3.5 h-3.5" />}
                >
                  Test connection
                </Button>
                <span role="status">
                  <Badge tone={tone.tone}>{tone.label}</Badge>
                </span>
              </div>
              {ping && ping.status === 'Invalid Key' && (
                <p className="font-mono text-[12px] text-ink bg-danger-soft border-2 border-ink rounded-md px-2.5 py-1.5 break-words">
                  {ping.message}
                </p>
              )}
              {!key && (
                <p className="font-mono text-[11px] text-muted">
                  Keys are shared by provider: any stage using {cfg.shortLabel} reuses this key.
                </p>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  </section>
);
