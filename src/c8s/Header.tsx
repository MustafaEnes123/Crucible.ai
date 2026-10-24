import React from 'react';
import { Download, Moon, Sun, Terminal } from 'lucide-react';
import { Badge, Button } from './ui';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenPrompts: () => void;
  onDownloadReport: () => void;
  canExport: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  isDark,
  onToggleTheme,
  onOpenPrompts,
  onDownloadReport,
  canExport,
}) => (
  <header className="sticky top-0 z-40 bg-surface border-b-[3px] border-ink">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div
          aria-hidden="true"
          className="w-11 h-11 rounded-md border-2 border-ink bg-primary text-night shadow-nb-sm flex items-center justify-center font-black text-[21px] -rotate-3"
        >
          C
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-[21px] font-black tracking-tight text-ink leading-none">
              Crucible<span className="text-accent">.ai</span>
            </h1>
            <Badge tone="dark">v2.0</Badge>
          </div>
          <p className="font-mono text-[11px] text-muted mt-1 hidden sm:block">
            Closed-Loop Adversarial Verification Runtime
          </p>
        </div>
      </div>

      <nav aria-label="Primary actions" className="flex flex-wrap items-center gap-2">
        <Button size="sm" onClick={onOpenPrompts} icon={<Terminal className="w-4 h-4" />}>
          <span className="hidden sm:inline">Agent prompts</span>
          <span className="sm:hidden">Prompts</span>
        </Button>
        <Button
          size="sm"
          onClick={onDownloadReport}
          disabled={!canExport}
          icon={<Download className="w-4 h-4" />}
          title={canExport ? 'Download the audit report as Markdown' : 'Complete a run to export'}
        >
          <span className="hidden sm:inline">Export .md</span>
          <span className="sm:hidden">Export</span>
        </Button>
        <Button
          size="sm"
          variant="dark"
          onClick={onToggleTheme}
          aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          icon={isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        >
          <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
        </Button>
      </nav>
    </div>

    <div
      aria-hidden="true"
      className="border-t-[3px] border-ink bg-ink text-surface overflow-hidden"
    >
      <div className="nb-marquee flex whitespace-nowrap py-1.5 font-mono text-[12px] font-bold uppercase tracking-[0.2em]">
        {[0, 1].map((copy) => (
          <span key={copy} className="flex shrink-0 items-center">
            {[
              'Architect drafts',
              'Red-Team prosecutes',
              'Gate checks deterministically',
              'Judge repairs',
              'No sycophancy',
            ].map((text) => (
              <span key={text} className="flex items-center">
                <span className="px-6">{text}</span>
                <span className="text-primary">✦</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  </header>
);
