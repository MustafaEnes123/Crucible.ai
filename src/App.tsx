import React, { useCallback, useState } from 'react';
import { useCruciblePipeline } from './h3s/useCruciblePipeline';
import { EXAMPLE_TASKS } from './s6s/exampleTasks';
import { buildAuditReportMarkdown } from './u3s/crucibleUtils';
import { Header } from './c8s/Header';
import { Hero } from './c8s/Hero';
import { AgentRoster } from './c8s/AgentRoster';
import { Composer } from './c8s/Composer';
import { PipelineTracker } from './c8s/PipelineTracker';
import { Results } from './c8s/Results';
import { PromptDrawer } from './c8s/PromptDrawer';

export const App: React.FC = () => {
  const {
    state,
    session,
    isDark,
    isReady,
    missingKeyProviders,
    toggleTheme,
    setApiKey,
    setAgentProvider,
    setAgentModel,
    testConnection,
    setStrictness,
    updateMathParams,
    setDiffViewMode,
    updateSystemPrompt,
    resetSystemPrompt,
    runVerification,
    stopRun,
  } = useCruciblePipeline();

  const [prompt, setPrompt] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const canExport = session.stage4Judge.status === 'completed';

  const handleRun = useCallback(() => {
    const matched = EXAMPLE_TASKS.find((ex) => ex.prompt === prompt);
    runVerification(prompt, matched ? matched.id : null);
    const target = document.getElementById('pipeline');
    if (target) {
      const reduce =
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    }
  }, [prompt, runVerification]);

  const handleDownloadReport = useCallback(() => {
    if (!canExport) return;
    const markdown = buildAuditReportMarkdown({ session, mathParams: state.mathParams });
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-');
    link.href = url;
    link.download = `crucible-audit-${stamp}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [canExport, session, state.mathParams]);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const openDrawer = useCallback(() => setDrawerOpen(true), []);

  return (
    <div className="min-h-screen bg-surface text-ink font-sans antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:border-2 focus:border-ink focus:bg-primary focus:px-4 focus:py-2 focus:font-mono focus:font-bold focus:text-night"
      >
        Skip to content
      </a>

      <Header
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenPrompts={openDrawer}
        onDownloadReport={handleDownloadReport}
        canExport={canExport}
      />

      <main id="main" className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16">
        <Hero params={state.mathParams} />

        <AgentRoster
          agents={state.agents}
          providerConfig={state.providerConfig}
          apiKeys={state.apiKeys}
          pings={state.pings}
          onProvider={setAgentProvider}
          onModel={setAgentModel}
          onKey={setApiKey}
          onTest={testConnection}
        />

        <Composer
          prompt={prompt}
          onPromptChange={setPrompt}
          examples={EXAMPLE_TASKS}
          strictness={state.strictnessLevel}
          onStrictness={setStrictness}
          isRunning={session.isRunning}
          isReady={isReady}
          missingProviders={missingKeyProviders}
          providerConfig={state.providerConfig}
          onRun={handleRun}
          onStop={stopRun}
        />

        <PipelineTracker session={session} />

        <Results
          session={session}
          mathParams={state.mathParams}
          strictness={state.strictnessLevel}
          diffViewMode={state.diffViewMode}
          onDiffViewMode={setDiffViewMode}
          onMathChange={updateMathParams}
          onStrictness={setStrictness}
          onDownloadReport={handleDownloadReport}
        />
      </main>

      <footer className="border-t-[3px] border-ink bg-ink text-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-wrap items-center justify-between gap-3 font-mono text-[12px]">
          <span className="font-bold uppercase tracking-wider">Crucible.ai v2.0</span>
          <span>Requests go straight from your browser to the provider. Nothing is sent to a Crucible server.</span>
        </div>
      </footer>

      <PromptDrawer
        open={drawerOpen}
        onClose={closeDrawer}
        prompts={state.systemPrompts}
        onChange={updateSystemPrompt}
        onReset={resetSystemPrompt}
      />
    </div>
  );
};

export default App;
