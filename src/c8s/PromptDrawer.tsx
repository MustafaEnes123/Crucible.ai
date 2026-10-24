import React, { useEffect, useRef, useState } from 'react';
import { RotateCcw, X } from 'lucide-react';
import { SystemPromptsConfig } from '../t3s/types';
import { DEFAULT_SYSTEM_PROMPTS, estimateTokens } from '../s6s/apiService';
import { Badge, Button, Tabs } from './ui';

interface PromptDrawerProps {
  open: boolean;
  onClose: () => void;
  prompts: SystemPromptsConfig;
  onChange: (role: keyof SystemPromptsConfig, value: string) => void;
  onReset: (role: keyof SystemPromptsConfig) => void;
}

const TABS: Array<{ id: keyof SystemPromptsConfig; label: string; title: string; note: string }> = [
  {
    id: 'builder',
    label: 'Builder',
    title: 'Stage 1 · Builder agent system prompt',
    note: 'Sent with your task to the Architect.',
  },
  {
    id: 'redTeam',
    label: 'Red-Team',
    title: 'Stage 2 · Red-Team Prosecutor anti-sycophancy prompt',
    note: 'The app expects a JSON object with prosecutorSummary and failureModes. Keep that schema or parsing fails.',
  },
  {
    id: 'judge',
    label: 'Judge',
    title: 'Stage 4 · Chief Judge synthesis prompt',
    note: 'The app expects the =====SYNTHESIS===== / =====CONFIDENCE===== / =====VERIFIED OUTPUT===== layout (JSON with verifiedOutput also works).',
  },
];

export const PromptDrawer: React.FC<PromptDrawerProps> = ({ open, onClose, prompts, onChange, onReset }) => {
  const [active, setActive] = useState<keyof SystemPromptsConfig>('redTeam');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const previous = document.activeElement as HTMLElement | null;
    const timer = window.setTimeout(() => textareaRef.current?.focus(), 50);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.clearTimeout(timer);
      if (previous && typeof previous.focus === 'function') previous.focus();
    };
  }, [open, onClose]);

  if (!open) return null;
  const meta = TABS.find((t) => t.id === active) as (typeof TABS)[number];
  const isDefault = prompts[active] === DEFAULT_SYSTEM_PROMPTS[active];

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="presentation">
      <div
        className="absolute inset-0 bg-night/60 nb-fade"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="prompt-drawer-title"
        className="nb-slide relative flex h-full w-full max-w-2xl flex-col border-l-[3px] border-ink bg-surface"
      >
        <div className="flex items-start justify-between gap-3 border-b-[3px] border-ink bg-primary px-5 py-4 text-night">
          <div>
            <h2 id="prompt-drawer-title" className="text-[21px] font-black leading-tight">
              Inspect &amp; edit agent system prompts
            </h2>
            <p className="mt-0.5 text-[13px] font-medium">
              Edits save automatically and go out with the very next API call.
            </p>
          </div>
          <Button size="sm" variant="ghost" onClick={onClose} aria-label="Close prompt inspector" icon={<X className="w-4 h-4" />}>
            Esc
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          <Tabs
            label="Agent prompt"
            active={active}
            onChange={(id) => setActive(id as keyof SystemPromptsConfig)}
            tabs={TABS.map((t) => ({ id: t.id, label: t.label }))}
          />

          <div id={`panel-${active}`} role="tabpanel" aria-labelledby={`tab-${active}`} className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-[17px] font-black text-ink">{meta.title}</h3>
              <div className="flex items-center gap-2">
                <Badge>~{estimateTokens(prompts[active])} tokens</Badge>
                {isDefault ? <Badge tone="success">Default</Badge> : <Badge tone="warning">Customised</Badge>}
              </div>
            </div>
            <p className="text-[13px] text-muted">{meta.note}</p>

            <label htmlFor="prompt-editor" className="sr-only">
              {meta.title}
            </label>
            <textarea
              id="prompt-editor"
              ref={textareaRef}
              value={prompts[active]}
              onChange={(e) => onChange(active, e.target.value)}
              spellCheck={false}
              rows={18}
              className="w-full resize-y rounded-md border-2 border-ink bg-card p-3.5 font-mono text-[13px] leading-relaxed text-ink"
            />

            <Button
              size="sm"
              onClick={() => onReset(active)}
              disabled={isDefault}
              icon={<RotateCcw className="w-3.5 h-3.5" />}
            >
              Reset to default
            </Button>
          </div>
        </div>
      </aside>
    </div>
  );
};
