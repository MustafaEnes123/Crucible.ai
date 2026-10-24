import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Check, Copy, Loader2 } from 'lucide-react';

export const cx = (...parts: Array<string | false | null | undefined>): string =>
  parts.filter(Boolean).join(' ');

/* ------------------------------- clipboard -------------------------------- */

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Fall through to the legacy path.
  }
  try {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(area);
    return ok;
  } catch {
    return false;
  }
}

export function useCopy(resetMs = 1800): [boolean, (text: string) => void] {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const copy = useCallback(
    (text: string) => {
      copyToClipboard(text).then((ok) => {
        if (!ok) return;
        setCopied(true);
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setCopied(false), resetMs);
      });
    },
    [resetMs]
  );
  return [copied, copy];
}

/* --------------------------------- button --------------------------------- */

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'dark';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
}

const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-night',
  secondary: 'bg-secondary text-white',
  ghost: 'bg-card text-ink',
  danger: 'bg-danger text-white',
  dark: 'bg-ink text-surface',
};

const BUTTON_SIZES: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-[12px] shadow-nb-sm hover:shadow-nb',
  md: 'px-4 py-2.5 text-[13px] shadow-nb hover:shadow-nb-lg',
  lg: 'px-6 py-3.5 text-[15px] shadow-nb hover:shadow-nb-lg',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'ghost',
  size = 'md',
  loading = false,
  icon,
  className,
  children,
  disabled,
  type = 'button',
  ...rest
}) => (
  <button
    type={type}
    disabled={disabled || loading}
    className={cx(
      'inline-flex items-center justify-center gap-2 rounded-md border-2 border-ink font-mono font-bold uppercase tracking-wide',
      'transition-all duration-100 motion-reduce:transition-none select-none',
      'hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none',
      'disabled:opacity-45 disabled:pointer-events-none disabled:shadow-none',
      BUTTON_VARIANTS[variant],
      BUTTON_SIZES[size],
      className
    )}
    {...rest}
  >
    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : icon}
    {children}
  </button>
);

/* ---------------------------------- card ---------------------------------- */

export const Card: React.FC<{
  className?: string;
  children: React.ReactNode;
  flat?: boolean;
}> = ({ className, children, flat }) => (
  <div
    className={cx(
      'bg-card border-2 border-ink rounded-lg',
      !flat && 'shadow-nb',
      className
    )}
  >
    {children}
  </div>
);

export const SectionHeader: React.FC<{
  step?: string;
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
}> = ({ step, title, subtitle, right }) => (
  <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
    <div className="flex items-start gap-3">
      {step && (
        <span className="mt-0.5 inline-flex items-center justify-center min-w-[2.5rem] h-10 px-2 rounded-md border-2 border-ink bg-secondary text-white font-mono text-[15px] font-black shadow-nb-sm">
          {step}
        </span>
      )}
      <div>
        <h2 className="text-[21px] sm:text-[27px] leading-tight font-black tracking-tight text-ink">
          {title}
        </h2>
        {subtitle && <p className="text-[15px] text-muted mt-0.5 max-w-2xl">{subtitle}</p>}
      </div>
    </div>
    {right}
  </div>
);

/* ---------------------------------- badge --------------------------------- */

export type BadgeTone =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'dangerSolid'
  | 'dark';

const BADGE_TONES: Record<BadgeTone, string> = {
  neutral: 'bg-soft text-ink',
  primary: 'bg-primary text-night',
  secondary: 'bg-secondary text-white',
  success: 'bg-success-soft text-ink',
  warning: 'bg-warning-soft text-ink',
  danger: 'bg-danger-soft text-ink',
  dangerSolid: 'bg-danger text-white',
  dark: 'bg-ink text-surface',
};

export const Badge: React.FC<{
  tone?: BadgeTone;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  title?: string;
}> = ({ tone = 'neutral', className, children, style, title }) => (
  <span
    title={title}
    style={style}
    className={cx(
      'inline-flex items-center gap-1 rounded border-2 border-ink px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wide whitespace-nowrap',
      BADGE_TONES[tone],
      className
    )}
  >
    {children}
  </span>
);

/* ---------------------------------- tabs ---------------------------------- */

export const Tabs: React.FC<{
  tabs: Array<{ id: string; label: string; badge?: React.ReactNode }>;
  active: string;
  onChange: (id: string) => void;
  label: string;
}> = ({ tabs, active, onChange, label }) => {
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const index = tabs.findIndex((t) => t.id === active);
    const next =
      e.key === 'ArrowRight'
        ? tabs[(index + 1) % tabs.length]
        : tabs[(index - 1 + tabs.length) % tabs.length];
    onChange(next.id);
    const el = document.getElementById(`tab-${next.id}`);
    if (el) el.focus();
  };

  return (
    <div
      role="tablist"
      aria-label={label}
      onKeyDown={onKeyDown}
      className="flex flex-wrap gap-2"
    >
      {tabs.map((tab) => {
        const selected = tab.id === active;
        return (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            role="tab"
            type="button"
            aria-selected={selected}
            aria-controls={`panel-${tab.id}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(tab.id)}
            className={cx(
              'inline-flex items-center gap-2 rounded-md border-2 border-ink px-3.5 py-2 font-mono text-[13px] font-bold uppercase tracking-wide transition-all duration-100 motion-reduce:transition-none',
              selected
                ? 'bg-primary text-night shadow-nb -translate-x-0.5 -translate-y-0.5'
                : 'bg-card text-ink hover:bg-soft'
            )}
          >
            {tab.label}
            {tab.badge}
          </button>
        );
      })}
    </div>
  );
};

/* ------------------------------ code + helpers ----------------------------- */

export const CopyButton: React.FC<{
  text: string;
  label?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
}> = ({ text, label = 'Copy', size = 'sm', variant = 'ghost', disabled }) => {
  const [copied, copy] = useCopy();
  return (
    <Button
      size={size}
      variant={variant}
      disabled={disabled}
      onClick={() => copy(text)}
      icon={copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      aria-live="polite"
    >
      {copied ? 'Copied' : label}
    </Button>
  );
};

export const CodeBlock: React.FC<{
  code: string;
  language?: string;
  maxHeight?: string;
}> = ({ code, language, maxHeight = 'max-h-[560px]' }) => (
  <div className="my-3 rounded-md border-2 border-ink overflow-hidden bg-soft">
    <div className="flex items-center justify-between gap-2 px-3 py-1.5 border-b-2 border-ink bg-card">
      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-muted">
        {language || 'text'}
      </span>
      <CopyButton text={code} />
    </div>
    <pre
      tabIndex={0}
      className={cx(
        'p-3.5 font-mono text-[13px] leading-relaxed text-ink overflow-auto',
        maxHeight
      )}
    >
      <code>{code}</code>
    </pre>
  </div>
);

export const EmptyState: React.FC<{
  title: string;
  body: string;
  icon?: React.ReactNode;
}> = ({ title, body, icon }) => (
  <div className="rounded-lg border-2 border-dashed border-ink bg-soft px-6 py-12 text-center">
    {icon && <div className="mx-auto mb-3 w-fit text-ink">{icon}</div>}
    <h3 className="text-[17px] font-black text-ink">{title}</h3>
    <p className="mt-1 text-[15px] text-muted max-w-md mx-auto">{body}</p>
  </div>
);

export const Slider: React.FC<{
  label: string;
  valueLabel: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
  hint: string;
  id: string;
}> = ({ label, valueLabel, min, max, step, value, onChange, hint, id }) => (
  <div className="rounded-md border-2 border-ink bg-card p-3.5">
    <div className="flex items-center justify-between gap-2 mb-2">
      <label htmlFor={id} className="font-mono text-[12px] font-bold uppercase tracking-wide text-ink">
        {label}
      </label>
      <Badge tone="primary">{valueLabel}</Badge>
    </div>
    <input
      id={id}
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="nb-range w-full"
    />
    <p className="mt-1.5 font-mono text-[11px] text-muted">{hint}</p>
  </div>
);
