import React from 'react';
import { AlertTriangle, Play, Square } from 'lucide-react';
import { AIProvider, ExampleTask, ProviderConfigEntry, StrictnessLevel } from '../t3s/types';
import { estimateTokens } from '../s6s/apiService';
import { STRICTNESS_PRESETS } from '../u3s/crucibleUtils';
import { Badge, Button, Card, SectionHeader, cx } from './ui';

interface ComposerProps {
  prompt: string;
  onPromptChange: (value: string) => void;
  examples: ExampleTask[];
  strictness: StrictnessLevel;
  onStrictness: (level: StrictnessLevel) => void;
  isRunning: boolean;
  isReady: boolean;
  missingProviders: AIProvider[];
  providerConfig: Record<AIProvider, ProviderConfigEntry>;
  onRun: () => void;
  onStop: () => void;
}

const LEVELS: StrictnessLevel[] = ['standard', 'ruthless', 'formal'];

export const Composer: React.FC<ComposerProps> = ({
  prompt,
  onPromptChange,
  examples,
  strictness,
  onStrictness,
  isRunning,
  isReady,
  missingProviders,
  providerConfig,
  onRun,
  onStop,
}) => {
  const canRun = isReady && !isRunning && prompt.trim().length > 0;

  return (
    <section aria-labelledby="composer-title" className="mb-10">
      <SectionHeader
        step="02"
        title="Describe the task"
        subtitle="Anything an autonomous agent might ship: code, migrations, architectures, research briefs."
      />
      <h3 id="composer-title" className="sr-only">
        Task composer
      </h3>

      <Card className="overflow-hidden">
        <div className="px-4 sm:px-5 pt-4 pb-3 border-b-2 border-ink bg-soft">
          <div className="font-mono text-[11px] font-bold uppercase tracking-wide text-muted mb-2">
            Start from an example (loads the prompt only, nothing runs until you press Run)
          </div>
          <div className="flex flex-wrap gap-2">
            {examples.map((ex) => (
              <button
                key={ex.id}
                type="button"
                disabled={isRunning}
                onClick={() => onPromptChange(ex.prompt)}
                className={cx(
                  'rounded-md border-2 border-ink bg-card px-3 py-1.5 text-left transition-all duration-100 motion-reduce:transition-none',
                  'hover:bg-primary hover:text-night hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-nb-sm disabled:opacity-50 disabled:pointer-events-none',
                  prompt === ex.prompt && 'bg-primary text-night shadow-nb-sm'
                )}
              >
                <span className="block text-[13px] font-extrabold leading-tight">{ex.label}</span>
                <span className="block font-mono text-[10px] uppercase tracking-wide opacity-70">
                  {ex.tag}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <label htmlFor="task-prompt" className="sr-only">
            Task prompt
          </label>
          <textarea
            id="task-prompt"
            rows={6}
            value={prompt}
            disabled={isRunning}
            onChange={(e) => onPromptChange(e.target.value)}
            onKeyDown={(e) => {
              if ((e.metaKey || e.ctrlKey) && e.key === 'Enter' && canRun) {
                e.preventDefault();
                onRun();
              }
            }}
            placeholder="e.g. Write an idempotent webhook handler for Stripe events that survives retries and out-of-order delivery…"
            className="w-full resize-y rounded-md border-2 border-ink bg-surface p-3.5 text-[15px] leading-relaxed text-ink placeholder:text-muted focus:bg-card disabled:opacity-60"
          />

          <fieldset className="mt-4">
            <legend className="font-mono text-[11px] font-bold uppercase tracking-wide text-muted mb-2">
              Audit strictness (sets detection d and repair r)
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {LEVELS.map((level) => {
                const preset = STRICTNESS_PRESETS[level];
                const active = strictness === level;
                return (
                  <label
                    key={level}
                    className={cx(
                      'relative cursor-pointer rounded-md border-2 border-ink p-3 transition-all duration-100 motion-reduce:transition-none',
                      active
                        ? 'bg-primary text-night shadow-nb -translate-x-0.5 -translate-y-0.5'
                        : 'bg-card text-ink hover:bg-soft'
                    )}
                  >
                    <input
                      type="radio"
                      name="strictness"
                      value={level}
                      checked={active}
                      disabled={isRunning}
                      onChange={() => onStrictness(level)}
                      className="sr-only"
                    />
                    <span className="flex items-center justify-between gap-2">
                      <span className="text-[15px] font-black">{preset.label}</span>
                      <span className="font-mono text-[11px] font-bold">
                        d={preset.d} r={preset.r}
                      </span>
                    </span>
                    <span
                      className={cx(
                        'block mt-1 text-[13px]',
                        active ? 'text-night' : 'text-muted'
                      )}
                    >
                      {preset.description}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          {!isReady && !isRunning && (
            <div
              role="alert"
              className="mt-4 flex items-start gap-2.5 rounded-md border-2 border-ink bg-warning-soft px-3.5 py-2.5 text-[13px] text-ink"
            >
              <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>
                Add an API key for{' '}
                <strong>{missingProviders.map((p) => providerConfig[p].label).join(', ')}</strong>{' '}
                in step 01 to run a verification.
              </span>
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 font-mono text-[12px] text-muted">
              <Badge>~{estimateTokens(prompt)} prompt tokens</Badge>
              <span className="hidden sm:inline">⌘/Ctrl + Enter to run</span>
            </div>
            <div className="flex items-center gap-2">
              {isRunning && (
                <Button variant="danger" onClick={onStop} icon={<Square className="w-4 h-4" />}>
                  Stop
                </Button>
              )}
              <Button
                variant="primary"
                size="lg"
                onClick={onRun}
                disabled={!canRun}
                loading={isRunning}
                icon={!isRunning ? <Play className="w-4 h-4" /> : undefined}
              >
                {isRunning ? 'Verifying…' : 'Run verification'}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
