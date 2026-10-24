/* CRUCIBLE.AI v2.0 — compiled bundle from src/ (generated). */
(function () {
  var React = window.React;
  var ReactDOM = window.ReactDOM;

  function createLucideIcon(paths) {
    return function LucideIcon(props) {
      props = props || {};
      return React.createElement(
        "svg",
        {
          className: props.className || "w-4 h-4",
          style: props.style,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2.25",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "aria-hidden": "true",
          focusable: "false"
        },
        paths.map(function (d, idx) {
          return React.createElement("path", { key: idx, d: d });
        })
      );
    };
  }

  var LucideIcons = {
    AlertCircle: createLucideIcon(["M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z", "M12 8v4", "M12 16h.01"]),
    AlertTriangle: createLucideIcon(["m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", "M12 9v4", "M12 17h.01"]),
    TriangleAlert: createLucideIcon(["m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", "M12 9v4", "M12 17h.01"]),
    ArrowRight: createLucideIcon(["M5 12h14", "m12 5 7 7-7 7"]),
    Check: createLucideIcon(["M20 6 9 17l-5-5"]),
    CheckCircle2: createLucideIcon(["M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z", "m9 12 2 2 4-4"]),
    Copy: createLucideIcon(["M10 8h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z", "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"]),
    Download: createLucideIcon(["M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", "m7 10 5 5 5-5", "M12 15V3"]),
    ExternalLink: createLucideIcon(["M15 3h6v6", "M10 14 21 3", "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"]),
    Eye: createLucideIcon(["M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0", "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"]),
    EyeOff: createLucideIcon(["m2 2 20 20", "M6.71 6.71C3.9 8.4 2.4 11 2.062 11.65a1 1 0 0 0 0 .7 10.75 10.75 0 0 0 14.1 5.6", "M10.73 5.08A10.43 10.43 0 0 1 12 5c4.4 0 8.1 2.9 9.94 6.65a1 1 0 0 1 0 .7 10.8 10.8 0 0 1-1.2 1.95", "M14.12 14.12a3 3 0 1 1-4.24-4.24"]),
    GitCompare: createLucideIcon(["M18 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M6 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6z", "M13 6h3a2 2 0 0 1 2 2v7", "M11 18H8a2 2 0 0 1-2-2V9"]),
    Hourglass: createLucideIcon(["M5 22h14", "M5 2h14", "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22", "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"]),
    ListChecks: createLucideIcon(["m3 17 2 2 4-4", "m3 7 2 2 4-4", "M13 6h8", "M13 12h8", "M13 18h8"]),
    Loader2: createLucideIcon(["M21 12a9 9 0 1 1-6.219-8.56"]),
    Moon: createLucideIcon(["M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"]),
    Play: createLucideIcon(["M6 3l14 9-14 9V3z"]),
    RotateCcw: createLucideIcon(["M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", "M3 3v5h5"]),
    ShieldAlert: createLucideIcon(["M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", "M12 8v4", "M12 16h.01"]),
    ShieldCheck: createLucideIcon(["M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", "m9 12 2 2 4-4"]),
    Square: createLucideIcon(["M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"]),
    Sun: createLucideIcon(["M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z", "M12 2v2", "M12 20v2", "m4.93 4.93 1.41 1.41", "m17.66 17.66 1.41 1.41", "M2 12h2", "M20 12h2", "m6.34 17.66-1.41 1.41", "m19.07 4.93-1.41 1.41"]),
    Terminal: createLucideIcon(["m4 17 6-6-6-6", "M12 19h8"]),
    X: createLucideIcon(["M18 6 6 18", "m6 6 12 12"]),
    Zap: createLucideIcon(["M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"]),
  };

  var moduleFactories = {
    "./App": function(module, exports, require) {
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importStar(require("react"));
const useCruciblePipeline_1 = require("./h3s/useCruciblePipeline");
const exampleTasks_1 = require("./s6s/exampleTasks");
const crucibleUtils_1 = require("./u3s/crucibleUtils");
const Header_1 = require("./c8s/Header");
const Hero_1 = require("./c8s/Hero");
const AgentRoster_1 = require("./c8s/AgentRoster");
const Composer_1 = require("./c8s/Composer");
const PipelineTracker_1 = require("./c8s/PipelineTracker");
const Results_1 = require("./c8s/Results");
const PromptDrawer_1 = require("./c8s/PromptDrawer");
const App = () => {
    const { state, session, isDark, isReady, missingKeyProviders, toggleTheme, setApiKey, setAgentProvider, setAgentModel, testConnection, setStrictness, updateMathParams, setDiffViewMode, updateSystemPrompt, resetSystemPrompt, runVerification, stopRun, } = (0, useCruciblePipeline_1.useCruciblePipeline)();
    const [prompt, setPrompt] = (0, react_1.useState)('');
    const [drawerOpen, setDrawerOpen] = (0, react_1.useState)(false);
    const canExport = session.stage4Judge.status === 'completed';
    const handleRun = (0, react_1.useCallback)(() => {
        const matched = exampleTasks_1.EXAMPLE_TASKS.find((ex) => ex.prompt === prompt);
        runVerification(prompt, matched ? matched.id : null);
        const target = document.getElementById('pipeline');
        if (target) {
            const reduce = typeof window.matchMedia === 'function' &&
                window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
        }
    }, [prompt, runVerification]);
    const handleDownloadReport = (0, react_1.useCallback)(() => {
        if (!canExport)
            return;
        const markdown = (0, crucibleUtils_1.buildAuditReportMarkdown)({ session, mathParams: state.mathParams });
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
    const closeDrawer = (0, react_1.useCallback)(() => setDrawerOpen(false), []);
    const openDrawer = (0, react_1.useCallback)(() => setDrawerOpen(true), []);
    return (react_1.default.createElement("div", { className: "min-h-screen bg-surface text-ink font-sans antialiased" },
        react_1.default.createElement("a", { href: "#main", className: "sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:border-2 focus:border-ink focus:bg-primary focus:px-4 focus:py-2 focus:font-mono focus:font-bold focus:text-night" }, "Skip to content"),
        react_1.default.createElement(Header_1.Header, { isDark: isDark, onToggleTheme: toggleTheme, onOpenPrompts: openDrawer, onDownloadReport: handleDownloadReport, canExport: canExport }),
        react_1.default.createElement("main", { id: "main", className: "max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16" },
            react_1.default.createElement(Hero_1.Hero, { params: state.mathParams }),
            react_1.default.createElement(AgentRoster_1.AgentRoster, { agents: state.agents, providerConfig: state.providerConfig, apiKeys: state.apiKeys, pings: state.pings, onProvider: setAgentProvider, onModel: setAgentModel, onKey: setApiKey, onTest: testConnection }),
            react_1.default.createElement(Composer_1.Composer, { prompt: prompt, onPromptChange: setPrompt, examples: exampleTasks_1.EXAMPLE_TASKS, strictness: state.strictnessLevel, onStrictness: setStrictness, isRunning: session.isRunning, isReady: isReady, missingProviders: missingKeyProviders, providerConfig: state.providerConfig, onRun: handleRun, onStop: stopRun }),
            react_1.default.createElement(PipelineTracker_1.PipelineTracker, { session: session }),
            react_1.default.createElement(Results_1.Results, { session: session, mathParams: state.mathParams, strictness: state.strictnessLevel, diffViewMode: state.diffViewMode, onDiffViewMode: setDiffViewMode, onMathChange: updateMathParams, onStrictness: setStrictness, onDownloadReport: handleDownloadReport })),
        react_1.default.createElement("footer", { className: "border-t-[3px] border-ink bg-ink text-surface" },
            react_1.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-wrap items-center justify-between gap-3 font-mono text-[12px]" },
                react_1.default.createElement("span", { className: "font-bold uppercase tracking-wider" }, "Crucible.ai v2.0"),
                react_1.default.createElement("span", null, "Requests go straight from your browser to the provider. Nothing is sent to a Crucible server."))),
        react_1.default.createElement(PromptDrawer_1.PromptDrawer, { open: drawerOpen, onClose: closeDrawer, prompts: state.systemPrompts, onChange: updateSystemPrompt, onReset: resetSystemPrompt })));
};
exports.App = App;
exports.default = exports.App;

    },
    "./c8s/AgentRoster": function(module, exports, require) {
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentRoster = void 0;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const apiService_1 = require("../s6s/apiService");
const crucibleUtils_1 = require("../u3s/crucibleUtils");
const ui_1 = require("./ui");
const SLOTS = [
    { id: 'builder', accent: 'bg-primary', accentText: 'text-night' },
    { id: 'redTeam', accent: 'bg-danger', accentText: 'text-white' },
    { id: 'judge', accent: 'bg-secondary', accentText: 'text-white' },
];
const pingTone = (ping) => {
    if (!ping)
        return { tone: 'neutral', label: 'Not tested' };
    if (ping.status === 'Testing')
        return { tone: 'primary', label: 'Testing…' };
    if (ping.status === 'Connected') {
        return { tone: 'success', label: `Connected${ping.latencyMs ? ` · ${ping.latencyMs} ms` : ''}` };
    }
    return { tone: 'dangerSolid', label: 'Invalid key' };
};
const fieldClass = 'w-full rounded-md border-2 border-ink bg-surface px-3 py-2 font-mono text-[13px] text-ink placeholder:text-muted focus:bg-card';
const KeyField = ({ id, value, placeholder, onChange, onSubmit }) => {
    const [visible, setVisible] = (0, react_1.useState)(false);
    return (react_1.default.createElement("div", { className: "relative" },
        react_1.default.createElement("input", { id: id, type: visible ? 'text' : 'password', value: value, autoComplete: "off", spellCheck: false, placeholder: placeholder, onChange: (e) => onChange(e.target.value.trim()), onKeyDown: (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    onSubmit();
                }
            }, className: (0, ui_1.cx)(fieldClass, 'pr-10') }),
        react_1.default.createElement("button", { type: "button", onClick: () => setVisible((v) => !v), "aria-label": visible ? 'Hide API key' : 'Show API key', className: "absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded text-ink hover:bg-soft" }, visible ? react_1.default.createElement(lucide_react_1.EyeOff, { className: "w-4 h-4" }) : react_1.default.createElement(lucide_react_1.Eye, { className: "w-4 h-4" }))));
};
const AgentRoster = ({ agents, providerConfig, apiKeys, pings, onProvider, onModel, onKey, onTest, }) => (react_1.default.createElement("section", { "aria-labelledby": "roster-title", className: "mb-10" },
    react_1.default.createElement(ui_1.SectionHeader, { step: "01", title: "Assemble your agents", subtitle: "Bring your own keys. Use different providers per stage so the critic never shares blind spots with the builder. Keys live only in this browser's localStorage." }),
    react_1.default.createElement("h3", { id: "roster-title", className: "sr-only" }, "Agent configuration"),
    react_1.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-5" }, SLOTS.map(({ id, accent, accentText }) => {
        const agent = agents[id];
        const cfg = providerConfig[agent.provider];
        const key = apiKeys[agent.provider];
        const ping = pings[agent.provider];
        const tone = pingTone(ping);
        const models = cfg.models.some((m) => m.id === agent.model)
            ? cfg.models
            : [{ id: agent.model, displayName: agent.model }, ...cfg.models];
        const price = (0, apiService_1.getModelPricing)(agent.model);
        return (react_1.default.createElement(ui_1.Card, { key: id, className: "overflow-hidden flex flex-col" },
            react_1.default.createElement("div", { className: (0, ui_1.cx)('flex items-center justify-between gap-2 px-4 py-2.5 border-b-2 border-ink', accent, accentText) },
                react_1.default.createElement("span", { className: "font-mono text-[13px] font-black uppercase tracking-wider" },
                    "Stage 0",
                    agent.stageNumber),
                react_1.default.createElement("span", { className: "font-mono text-[11px] font-bold uppercase" }, agent.role)),
            react_1.default.createElement("div", { className: "p-4 space-y-3.5 flex-1" },
                react_1.default.createElement("h3", { className: "text-[21px] font-black text-ink leading-tight" }, agent.title),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { htmlFor: `provider-${id}`, className: "block mb-1 font-mono text-[11px] font-bold uppercase tracking-wide text-muted" }, "Provider"),
                    react_1.default.createElement("select", { id: `provider-${id}`, value: agent.provider, onChange: (e) => onProvider(id, e.target.value), className: (0, ui_1.cx)(fieldClass, 'cursor-pointer font-bold') }, apiService_1.PROVIDER_ORDER.map((p) => (react_1.default.createElement("option", { key: p, value: p }, providerConfig[p].label))))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { htmlFor: `model-${id}`, className: "block mb-1 font-mono text-[11px] font-bold uppercase tracking-wide text-muted" },
                        "Model ",
                        cfg.isLiveList && react_1.default.createElement("span", { className: "text-accent" }, "\u00B7 live list")),
                    react_1.default.createElement("select", { id: `model-${id}`, value: agent.model, onChange: (e) => onModel(id, e.target.value), className: (0, ui_1.cx)(fieldClass, 'cursor-pointer') }, models.map((m) => (react_1.default.createElement("option", { key: m.id, value: m.id }, m.displayName || m.id)))),
                    react_1.default.createElement("p", { className: "mt-1 font-mono text-[11px] text-muted" }, price.known
                        ? `${(0, crucibleUtils_1.formatUsd)(price.input)} in · ${(0, crucibleUtils_1.formatUsd)(price.output)} out per 1M tokens`
                        : 'Price unknown: cost shown as n/a')),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: "flex items-center justify-between mb-1" },
                        react_1.default.createElement("label", { htmlFor: `key-${id}`, className: "font-mono text-[11px] font-bold uppercase tracking-wide text-muted" },
                            cfg.shortLabel,
                            " API key"),
                        react_1.default.createElement("a", { href: cfg.keyHelpUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1 font-mono text-[11px] font-bold text-accent underline underline-offset-2" },
                            "Get a key ",
                            react_1.default.createElement(lucide_react_1.ExternalLink, { className: "w-3 h-3" }))),
                    react_1.default.createElement(KeyField, { id: `key-${id}`, value: key, placeholder: cfg.placeholder, onChange: (v) => onKey(agent.provider, v), onSubmit: () => onTest(agent.provider) })),
                react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2 pt-1" },
                    react_1.default.createElement(ui_1.Button, { size: "sm", variant: "primary", onClick: () => onTest(agent.provider), disabled: !key, loading: ping?.status === 'Testing', icon: react_1.default.createElement(lucide_react_1.Zap, { className: "w-3.5 h-3.5" }) }, "Test connection"),
                    react_1.default.createElement("span", { role: "status" },
                        react_1.default.createElement(ui_1.Badge, { tone: tone.tone }, tone.label))),
                ping && ping.status === 'Invalid Key' && (react_1.default.createElement("p", { className: "font-mono text-[12px] text-ink bg-danger-soft border-2 border-ink rounded-md px-2.5 py-1.5 break-words" }, ping.message)),
                !key && (react_1.default.createElement("p", { className: "font-mono text-[11px] text-muted" },
                    "Keys are shared by provider: any stage using ",
                    cfg.shortLabel,
                    " reuses this key.")))));
    }))));
exports.AgentRoster = AgentRoster;

    },
    "./c8s/Composer": function(module, exports, require) {
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Composer = void 0;
const react_1 = __importDefault(require("react"));
const lucide_react_1 = require("lucide-react");
const apiService_1 = require("../s6s/apiService");
const crucibleUtils_1 = require("../u3s/crucibleUtils");
const ui_1 = require("./ui");
const LEVELS = ['standard', 'ruthless', 'formal'];
const Composer = ({ prompt, onPromptChange, examples, strictness, onStrictness, isRunning, isReady, missingProviders, providerConfig, onRun, onStop, }) => {
    const canRun = isReady && !isRunning && prompt.trim().length > 0;
    return (react_1.default.createElement("section", { "aria-labelledby": "composer-title", className: "mb-10" },
        react_1.default.createElement(ui_1.SectionHeader, { step: "02", title: "Describe the task", subtitle: "Anything an autonomous agent might ship: code, migrations, architectures, research briefs." }),
        react_1.default.createElement("h3", { id: "composer-title", className: "sr-only" }, "Task composer"),
        react_1.default.createElement(ui_1.Card, { className: "overflow-hidden" },
            react_1.default.createElement("div", { className: "px-4 sm:px-5 pt-4 pb-3 border-b-2 border-ink bg-soft" },
                react_1.default.createElement("div", { className: "font-mono text-[11px] font-bold uppercase tracking-wide text-muted mb-2" }, "Start from an example (loads the prompt only, nothing runs until you press Run)"),
                react_1.default.createElement("div", { className: "flex flex-wrap gap-2" }, examples.map((ex) => (react_1.default.createElement("button", { key: ex.id, type: "button", disabled: isRunning, onClick: () => onPromptChange(ex.prompt), className: (0, ui_1.cx)('rounded-md border-2 border-ink bg-card px-3 py-1.5 text-left transition-all duration-100 motion-reduce:transition-none', 'hover:bg-primary hover:text-night hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-nb-sm disabled:opacity-50 disabled:pointer-events-none', prompt === ex.prompt && 'bg-primary text-night shadow-nb-sm') },
                    react_1.default.createElement("span", { className: "block text-[13px] font-extrabold leading-tight" }, ex.label),
                    react_1.default.createElement("span", { className: "block font-mono text-[10px] uppercase tracking-wide opacity-70" }, ex.tag)))))),
            react_1.default.createElement("div", { className: "p-4 sm:p-5" },
                react_1.default.createElement("label", { htmlFor: "task-prompt", className: "sr-only" }, "Task prompt"),
                react_1.default.createElement("textarea", { id: "task-prompt", rows: 6, value: prompt, disabled: isRunning, onChange: (e) => onPromptChange(e.target.value), onKeyDown: (e) => {
                        if ((e.metaKey || e.ctrlKey) && e.key === 'Enter' && canRun) {
                            e.preventDefault();
                            onRun();
                        }
                    }, placeholder: "e.g. Write an idempotent webhook handler for Stripe events that survives retries and out-of-order delivery\u2026", className: "w-full resize-y rounded-md border-2 border-ink bg-surface p-3.5 text-[15px] leading-relaxed text-ink placeholder:text-muted focus:bg-card disabled:opacity-60" }),
                react_1.default.createElement("fieldset", { className: "mt-4" },
                    react_1.default.createElement("legend", { className: "font-mono text-[11px] font-bold uppercase tracking-wide text-muted mb-2" }, "Audit strictness (sets detection d and repair r)"),
                    react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3" }, LEVELS.map((level) => {
                        const preset = crucibleUtils_1.STRICTNESS_PRESETS[level];
                        const active = strictness === level;
                        return (react_1.default.createElement("label", { key: level, className: (0, ui_1.cx)('relative cursor-pointer rounded-md border-2 border-ink p-3 transition-all duration-100 motion-reduce:transition-none', active
                                ? 'bg-primary text-night shadow-nb -translate-x-0.5 -translate-y-0.5'
                                : 'bg-card text-ink hover:bg-soft') },
                            react_1.default.createElement("input", { type: "radio", name: "strictness", value: level, checked: active, disabled: isRunning, onChange: () => onStrictness(level), className: "sr-only" }),
                            react_1.default.createElement("span", { className: "flex items-center justify-between gap-2" },
                                react_1.default.createElement("span", { className: "text-[15px] font-black" }, preset.label),
                                react_1.default.createElement("span", { className: "font-mono text-[11px] font-bold" },
                                    "d=",
                                    preset.d,
                                    " r=",
                                    preset.r)),
                            react_1.default.createElement("span", { className: (0, ui_1.cx)('block mt-1 text-[13px]', active ? 'text-night' : 'text-muted') }, preset.description)));
                    }))),
                !isReady && !isRunning && (react_1.default.createElement("div", { role: "alert", className: "mt-4 flex items-start gap-2.5 rounded-md border-2 border-ink bg-warning-soft px-3.5 py-2.5 text-[13px] text-ink" },
                    react_1.default.createElement(lucide_react_1.AlertTriangle, { className: "w-4 h-4 mt-0.5 shrink-0" }),
                    react_1.default.createElement("span", null,
                        "Add an API key for",
                        ' ',
                        react_1.default.createElement("strong", null, missingProviders.map((p) => providerConfig[p].label).join(', ')),
                        ' ',
                        "in step 01 to run a verification."))),
                react_1.default.createElement("div", { className: "mt-4 flex flex-wrap items-center justify-between gap-3" },
                    react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2 font-mono text-[12px] text-muted" },
                        react_1.default.createElement(ui_1.Badge, null,
                            "~",
                            (0, apiService_1.estimateTokens)(prompt),
                            " prompt tokens"),
                        react_1.default.createElement("span", { className: "hidden sm:inline" }, "\u2318/Ctrl + Enter to run")),
                    react_1.default.createElement("div", { className: "flex items-center gap-2" },
                        isRunning && (react_1.default.createElement(ui_1.Button, { variant: "danger", onClick: onStop, icon: react_1.default.createElement(lucide_react_1.Square, { className: "w-4 h-4" }) }, "Stop")),
                        react_1.default.createElement(ui_1.Button, { variant: "primary", size: "lg", onClick: onRun, disabled: !canRun, loading: isRunning, icon: !isRunning ? react_1.default.createElement(lucide_react_1.Play, { className: "w-4 h-4" }) : undefined }, isRunning ? 'Verifying…' : 'Run verification')))))));
};
exports.Composer = Composer;

    },
    "./c8s/DiffTab": function(module, exports, require) {
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiffTab = void 0;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const crucibleUtils_1 = require("../u3s/crucibleUtils");
const ui_1 = require("./ui");
const MarkdownView_1 = require("./MarkdownView");
const TAXONOMY_COLORS = {
    '[STATE DRIFT]': '#C4B5FD',
    '[RLHF SYCOPHANCY]': '#FDE68A',
    '[CONTEXT POLLUTION]': '#A5F3FC',
    '[HALLUCINATED API / SCHEMA]': '#FBCFE8',
    '[UNHANDLED EDGE CASE / SECURITY]': '#FCA5A5',
};
const lineNo = (n) => (react_1.default.createElement("span", { className: "w-9 shrink-0 text-right select-none text-muted tabular-nums" }, n ?? ''));
const DiffTab = ({ session, mode, onModeChange }) => {
    const ready = session.stage4Judge.status === 'completed';
    const diff = (0, react_1.useMemo)(() => (0, crucibleUtils_1.computeLineDiff)(session.stage1Builder.content, session.stage4Judge.content, session.failureModes), [session.stage1Builder.content, session.stage4Judge.content, session.failureModes]);
    if (!ready) {
        return (react_1.default.createElement(ui_1.EmptyState, { icon: react_1.default.createElement(lucide_react_1.GitCompare, { className: "w-10 h-10", "aria-hidden": "true" }), title: "Diff unlocks after Stage 4", body: "Compare the raw draft against the Judge's repaired output line by line." }));
    }
    const sycophancy = session.failureModes.filter((f) => f.category === '[RLHF SYCOPHANCY]').length;
    return (react_1.default.createElement("div", { className: "space-y-4" },
        react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-3" },
            react_1.default.createElement(ui_1.Tabs, { label: "Diff view", active: mode, onChange: (id) => onModeChange(id), tabs: [
                    { id: 'side-by-side', label: 'Side-by-side' },
                    { id: 'annotated-diff', label: 'Red-team annotated' },
                    { id: 'clean-final', label: 'Clean final' },
                ] }),
            react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                react_1.default.createElement(ui_1.Badge, { tone: "danger" },
                    "\u2212 ",
                    diff.removedCount,
                    " removed"),
                react_1.default.createElement(ui_1.Badge, { tone: "success" },
                    "+ ",
                    diff.addedCount,
                    " added"))),
        react_1.default.createElement("p", { className: "rounded-md border-2 border-ink bg-soft px-3.5 py-2.5 font-mono text-[13px] font-bold text-ink" },
            session.failureModes.length,
            " bugs caught \u00B7 ",
            Math.max(diff.removedCount, diff.addedCount),
            " lines repaired \u00B7",
            ' ',
            sycophancy > 0 ? `${sycophancy} sycophancy finding${sycophancy > 1 ? 's' : ''} eliminated` : 'no sycophancy findings'),
        react_1.default.createElement("div", { role: "tabpanel", id: `panel-${mode}`, "aria-labelledby": `tab-${mode}` },
            mode === 'annotated-diff' && (react_1.default.createElement("div", { className: "rounded-md border-2 border-ink overflow-auto max-h-[640px] bg-surface font-mono text-[12px] leading-relaxed" }, diff.unifiedLines.map((line, idx) => {
                if (line.type === 'removed') {
                    return (react_1.default.createElement("div", { key: idx, className: "flex items-start gap-2 px-2 py-0.5 bg-danger-soft border-l-4 border-danger" },
                        lineNo(line.oldLineNumber),
                        react_1.default.createElement("span", { className: "w-3 shrink-0 font-black text-danger select-none", "aria-label": "removed" }, "\u2212"),
                        react_1.default.createElement("span", { className: "flex-1 whitespace-pre-wrap break-all text-ink line-through decoration-danger decoration-2" }, line.text || ' '),
                        line.flawBadge && (react_1.default.createElement(ui_1.Badge, { className: "text-night shrink-0", style: { backgroundColor: TAXONOMY_COLORS[line.flawBadge] } }, line.flawBadge))));
                }
                if (line.type === 'added') {
                    return (react_1.default.createElement("div", { key: idx, className: "flex items-start gap-2 px-2 py-0.5 bg-success-soft border-l-4 border-success" },
                        lineNo(line.newLineNumber),
                        react_1.default.createElement("span", { className: "w-3 shrink-0 font-black text-success select-none", "aria-label": "added" }, "+"),
                        react_1.default.createElement("span", { className: "flex-1 whitespace-pre-wrap break-all text-ink" }, line.text || ' ')));
                }
                return (react_1.default.createElement("div", { key: idx, className: "flex items-start gap-2 px-2 py-0.5 border-l-4 border-transparent" },
                    lineNo(line.newLineNumber),
                    react_1.default.createElement("span", { className: "w-3 shrink-0" }),
                    react_1.default.createElement("span", { className: "flex-1 whitespace-pre-wrap break-all text-muted" }, line.text || ' ')));
            }))),
            mode === 'side-by-side' && (react_1.default.createElement("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-4" }, ['left', 'right'].map((side) => (react_1.default.createElement("div", { key: side, className: "rounded-md border-2 border-ink overflow-hidden bg-surface" },
                react_1.default.createElement("div", { className: (0, ui_1.cx)('px-3 py-2 border-b-2 border-ink font-mono text-[12px] font-black uppercase tracking-wide text-ink', side === 'left' ? 'bg-danger-soft' : 'bg-success-soft') }, side === 'left' ? 'Stage 1 · raw draft' : 'Stage 4 · repaired output'),
                react_1.default.createElement("div", { className: "overflow-auto max-h-[640px] font-mono text-[12px] leading-relaxed" }, diff.sideBySideRows.map((row, idx) => {
                    const type = side === 'left' ? row.leftType : row.rightType;
                    const text = side === 'left' ? row.leftText : row.rightText;
                    const no = side === 'left' ? row.leftLineNumber : row.rightLineNumber;
                    return (react_1.default.createElement("div", { key: idx, className: (0, ui_1.cx)('flex items-start gap-2 px-2 py-0.5', type === 'removed' && 'bg-danger-soft line-through decoration-danger', type === 'added' && 'bg-success-soft', type === 'empty' && 'bg-soft opacity-60') },
                        lineNo(no),
                        react_1.default.createElement("span", { className: "flex-1 whitespace-pre-wrap break-all text-ink" }, text || ' ')));
                }))))))),
            mode === 'clean-final' && (react_1.default.createElement("div", { className: "rounded-md border-2 border-ink bg-surface p-4" },
                react_1.default.createElement(MarkdownView_1.MarkdownView, { content: session.stage4Judge.content }))))));
};
exports.DiffTab = DiffTab;

    },
    "./c8s/FindingsTab": function(module, exports, require) {
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindingsTab = void 0;
const react_1 = __importDefault(require("react"));
const lucide_react_1 = require("lucide-react");
const ui_1 = require("./ui");
const TAXONOMY_COLORS = {
    '[STATE DRIFT]': '#C4B5FD',
    '[RLHF SYCOPHANCY]': '#FDE68A',
    '[CONTEXT POLLUTION]': '#A5F3FC',
    '[HALLUCINATED API / SCHEMA]': '#FBCFE8',
    '[UNHANDLED EDGE CASE / SECURITY]': '#FCA5A5',
};
const SEVERITY_TONE = {
    CRITICAL: 'dangerSolid',
    HIGH: 'warning',
    MEDIUM: 'primary',
};
const FindingsTab = ({ session }) => {
    const { failureModes, stage2RedTeam } = session;
    if (!session.prompt) {
        return (react_1.default.createElement(ui_1.EmptyState, { icon: react_1.default.createElement(lucide_react_1.ShieldAlert, { className: "w-10 h-10", "aria-hidden": "true" }), title: "No findings yet", body: "The Red-Team Prosecutor's failure modes table appears here after Stage 2." }));
    }
    if (stage2RedTeam.status === 'idle' || stage2RedTeam.status === 'running') {
        return (react_1.default.createElement(ui_1.EmptyState, { icon: react_1.default.createElement(lucide_react_1.ShieldAlert, { className: "w-10 h-10", "aria-hidden": "true" }), title: stage2RedTeam.status === 'running' ? 'The Prosecutor is attacking the draft…' : 'Waiting for Stage 1', body: "Findings are classified with the five-badge failure taxonomy and checked against the draft." }));
    }
    if (stage2RedTeam.status === 'error') {
        return (react_1.default.createElement(ui_1.EmptyState, { icon: react_1.default.createElement(lucide_react_1.TriangleAlert, { className: "w-10 h-10", "aria-hidden": "true" }), title: "Stage 2 failed", body: stage2RedTeam.error || 'The Red-Team Prosecutor did not return a usable result.' }));
    }
    const counts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0 };
    failureModes.forEach((f) => {
        counts[f.severity] += 1;
    });
    const ungrounded = failureModes.filter((f) => !f.groundedInDraft).length;
    return (react_1.default.createElement("div", { className: "space-y-4" },
        react_1.default.createElement("div", { className: "rounded-md border-2 border-ink bg-danger-soft p-4" },
            react_1.default.createElement("div", { className: "font-mono text-[11px] font-bold uppercase tracking-wide text-ink mb-1" }, "Prosecutor's indictment"),
            react_1.default.createElement("p", { className: "text-[15px] leading-relaxed text-ink" }, session.prosecutorSummary)),
        react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
            react_1.default.createElement(ui_1.Badge, { tone: "dangerSolid" },
                counts.CRITICAL,
                " critical"),
            react_1.default.createElement(ui_1.Badge, { tone: "warning" },
                counts.HIGH,
                " high"),
            react_1.default.createElement(ui_1.Badge, { tone: "primary" },
                counts.MEDIUM,
                " medium"),
            ungrounded > 0 && (react_1.default.createElement(ui_1.Badge, { tone: "neutral", title: "The quoted snippet could not be located in the Stage 1 draft. Treat with suspicion." },
                ungrounded,
                " unverifiable quote",
                ungrounded > 1 ? 's' : ''))),
        failureModes.length === 0 ? (react_1.default.createElement(ui_1.EmptyState, { icon: react_1.default.createElement(lucide_react_1.ShieldCheck, { className: "w-10 h-10", "aria-hidden": "true" }), title: "No failure modes reported", body: "The Prosecutor found nothing it could quote from the draft. The deterministic gate still ran independently." })) : (react_1.default.createElement("div", { className: "overflow-x-auto rounded-md border-2 border-ink" },
            react_1.default.createElement("table", { className: "w-full min-w-[820px] text-left border-collapse" },
                react_1.default.createElement("caption", { className: "sr-only" }, "Detected failure modes"),
                react_1.default.createElement("thead", null,
                    react_1.default.createElement("tr", { className: "bg-ink text-surface font-mono text-[11px] uppercase tracking-wider" },
                        react_1.default.createElement("th", { scope: "col", className: "px-3 py-2.5" }, "ID"),
                        react_1.default.createElement("th", { scope: "col", className: "px-3 py-2.5" }, "Category"),
                        react_1.default.createElement("th", { scope: "col", className: "px-3 py-2.5" }, "Severity"),
                        react_1.default.createElement("th", { scope: "col", className: "px-3 py-2.5" }, "Exact flawed snippet or claim"),
                        react_1.default.createElement("th", { scope: "col", className: "px-3 py-2.5" }, "Required fix"))),
                react_1.default.createElement("tbody", null, failureModes.map((row) => (react_1.default.createElement("tr", { key: row.id, className: "border-t-2 border-ink align-top odd:bg-card even:bg-surface" },
                    react_1.default.createElement("td", { className: "px-3 py-3 font-mono text-[13px] font-black text-ink whitespace-nowrap" }, row.id),
                    react_1.default.createElement("td", { className: "px-3 py-3" },
                        react_1.default.createElement(ui_1.Badge, { className: "text-night", style: { backgroundColor: TAXONOMY_COLORS[row.category] } }, row.category)),
                    react_1.default.createElement("td", { className: "px-3 py-3" },
                        react_1.default.createElement(ui_1.Badge, { tone: SEVERITY_TONE[row.severity] }, row.severity)),
                    react_1.default.createElement("td", { className: "px-3 py-3 max-w-[22rem]" },
                        react_1.default.createElement("code", { className: "block rounded border-2 border-ink bg-danger-soft px-2 py-1.5 font-mono text-[12px] text-ink break-words whitespace-pre-wrap" }, row.flawedSnippet),
                        react_1.default.createElement("span", { className: "mt-1.5 inline-flex items-center gap-1 font-mono text-[11px] font-bold text-muted", title: row.groundedInDraft ? 'Snippet located in the Stage 1 draft' : 'Snippet NOT found in the Stage 1 draft' }, row.groundedInDraft ? (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(lucide_react_1.CheckCircle2, { className: "w-3.5 h-3.5", "aria-hidden": "true" }),
                            " Quote verified in draft")) : (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(lucide_react_1.TriangleAlert, { className: "w-3.5 h-3.5", "aria-hidden": "true" }),
                            " Quote not found in draft")))),
                    react_1.default.createElement("td", { className: "px-3 py-3 text-[15px] leading-relaxed text-ink" }, row.requiredFix))))))))));
};
exports.FindingsTab = FindingsTab;

    },
    "./c8s/GateTab": function(module, exports, require) {
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GateTab = void 0;
const react_1 = __importDefault(require("react"));
const lucide_react_1 = require("lucide-react");
const ui_1 = require("./ui");
const STATUS_TONE = {
    PASS: 'success',
    WARN: 'warning',
    FAIL: 'dangerSolid',
    'N/A': 'neutral',
};
const StatusBadge = ({ status }) => status ? react_1.default.createElement(ui_1.Badge, { tone: STATUS_TONE[status] }, status) : react_1.default.createElement(ui_1.Badge, null, "Pending");
const GateTab = ({ session }) => {
    const checks = session.heuristicChecks;
    if (checks.length === 0) {
        return (react_1.default.createElement(ui_1.EmptyState, { icon: react_1.default.createElement(lucide_react_1.ListChecks, { className: "w-10 h-10", "aria-hidden": "true" }), title: "Gate has not run", body: "Stage 3 runs nine deterministic rules locally on the draft and again on the repaired output. No model, no API call, no cost." }));
    }
    const failBefore = checks.filter((c) => c.stage1Status === 'FAIL').length;
    const warnBefore = checks.filter((c) => c.stage1Status === 'WARN').length;
    const hasAfter = checks.some((c) => c.stage4Status !== null);
    const failAfter = checks.filter((c) => c.stage4Status === 'FAIL').length;
    const warnAfter = checks.filter((c) => c.stage4Status === 'WARN').length;
    return (react_1.default.createElement("div", { className: "space-y-4" },
        react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
            react_1.default.createElement(ui_1.Badge, { tone: "neutral" },
                "Draft: ",
                failBefore,
                " fail \u00B7 ",
                warnBefore,
                " warn"),
            hasAfter && (react_1.default.createElement(ui_1.Badge, { tone: failAfter === 0 ? 'success' : 'dangerSolid' },
                "Repaired: ",
                failAfter,
                " fail \u00B7 ",
                warnAfter,
                " warn")),
            react_1.default.createElement("span", { className: "font-mono text-[12px] text-muted" }, "Rules are regex and structure checks. N/A means the rule does not apply to this output.")),
        react_1.default.createElement("div", { className: "overflow-x-auto rounded-md border-2 border-ink" },
            react_1.default.createElement("table", { className: "w-full min-w-[820px] text-left border-collapse" },
                react_1.default.createElement("caption", { className: "sr-only" }, "Deterministic heuristic and schema gate checklist"),
                react_1.default.createElement("thead", null,
                    react_1.default.createElement("tr", { className: "bg-ink text-surface font-mono text-[11px] uppercase tracking-wider" },
                        react_1.default.createElement("th", { scope: "col", className: "px-3 py-2.5" }, "Check"),
                        react_1.default.createElement("th", { scope: "col", className: "px-3 py-2.5" }, "Category"),
                        react_1.default.createElement("th", { scope: "col", className: "px-3 py-2.5" }, "Stage 1 draft"),
                        react_1.default.createElement("th", { scope: "col", className: "px-3 py-2.5" }, "Stage 4 repaired"),
                        react_1.default.createElement("th", { scope: "col", className: "px-3 py-2.5" }, "Diagnostic"))),
                react_1.default.createElement("tbody", null, checks.map((c) => (react_1.default.createElement("tr", { key: c.id, className: "border-t-2 border-ink align-top odd:bg-card even:bg-surface" },
                    react_1.default.createElement("td", { className: "px-3 py-3" },
                        react_1.default.createElement("div", { className: "font-mono text-[11px] font-bold text-muted" }, c.id),
                        react_1.default.createElement("div", { className: "text-[15px] font-extrabold text-ink leading-tight" }, c.checkName)),
                    react_1.default.createElement("td", { className: "px-3 py-3 font-mono text-[12px] text-muted whitespace-nowrap" }, c.category),
                    react_1.default.createElement("td", { className: "px-3 py-3" },
                        react_1.default.createElement(StatusBadge, { status: c.stage1Status })),
                    react_1.default.createElement("td", { className: "px-3 py-3" },
                        react_1.default.createElement(StatusBadge, { status: c.stage4Status })),
                    react_1.default.createElement("td", { className: "px-3 py-3 max-w-[28rem]" },
                        react_1.default.createElement("p", { className: "text-[13px] leading-relaxed text-ink" }, c.detail),
                        c.evidence.length > 0 && (react_1.default.createElement("ul", { className: "mt-1.5 space-y-1" }, c.evidence.map((line, i) => (react_1.default.createElement("li", { key: i, className: "rounded border border-ink bg-soft px-2 py-1 font-mono text-[11px] text-ink break-words" }, line))))))))))))));
};
exports.GateTab = GateTab;

    },
    "./c8s/Header": function(module, exports, require) {
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const react_1 = __importDefault(require("react"));
const lucide_react_1 = require("lucide-react");
const ui_1 = require("./ui");
const Header = ({ isDark, onToggleTheme, onOpenPrompts, onDownloadReport, canExport, }) => (react_1.default.createElement("header", { className: "sticky top-0 z-40 bg-surface border-b-[3px] border-ink" },
    react_1.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3" },
        react_1.default.createElement("div", { className: "flex items-center gap-3" },
            react_1.default.createElement("div", { "aria-hidden": "true", className: "w-11 h-11 rounded-md border-2 border-ink bg-primary text-night shadow-nb-sm flex items-center justify-center font-black text-[21px] -rotate-3" }, "C"),
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: "flex items-center gap-2" },
                    react_1.default.createElement("h1", { className: "text-[21px] font-black tracking-tight text-ink leading-none" },
                        "Crucible",
                        react_1.default.createElement("span", { className: "text-accent" }, ".ai")),
                    react_1.default.createElement(ui_1.Badge, { tone: "dark" }, "v2.0")),
                react_1.default.createElement("p", { className: "font-mono text-[11px] text-muted mt-1 hidden sm:block" }, "Closed-Loop Adversarial Verification Runtime"))),
        react_1.default.createElement("nav", { "aria-label": "Primary actions", className: "flex flex-wrap items-center gap-2" },
            react_1.default.createElement(ui_1.Button, { size: "sm", onClick: onOpenPrompts, icon: react_1.default.createElement(lucide_react_1.Terminal, { className: "w-4 h-4" }) },
                react_1.default.createElement("span", { className: "hidden sm:inline" }, "Agent prompts"),
                react_1.default.createElement("span", { className: "sm:hidden" }, "Prompts")),
            react_1.default.createElement(ui_1.Button, { size: "sm", onClick: onDownloadReport, disabled: !canExport, icon: react_1.default.createElement(lucide_react_1.Download, { className: "w-4 h-4" }), title: canExport ? 'Download the audit report as Markdown' : 'Complete a run to export' },
                react_1.default.createElement("span", { className: "hidden sm:inline" }, "Export .md"),
                react_1.default.createElement("span", { className: "sm:hidden" }, "Export")),
            react_1.default.createElement(ui_1.Button, { size: "sm", variant: "dark", onClick: onToggleTheme, "aria-label": isDark ? 'Switch to light theme' : 'Switch to dark theme', icon: isDark ? react_1.default.createElement(lucide_react_1.Sun, { className: "w-4 h-4" }) : react_1.default.createElement(lucide_react_1.Moon, { className: "w-4 h-4" }) },
                react_1.default.createElement("span", { className: "hidden sm:inline" }, isDark ? 'Light' : 'Dark')))),
    react_1.default.createElement("div", { "aria-hidden": "true", className: "border-t-[3px] border-ink bg-ink text-surface overflow-hidden" },
        react_1.default.createElement("div", { className: "nb-marquee flex whitespace-nowrap py-1.5 font-mono text-[12px] font-bold uppercase tracking-[0.2em]" }, [0, 1].map((copy) => (react_1.default.createElement("span", { key: copy, className: "flex shrink-0 items-center" }, [
            'Architect drafts',
            'Red-Team prosecutes',
            'Gate checks deterministically',
            'Judge repairs',
            'No sycophancy',
        ].map((text) => (react_1.default.createElement("span", { key: text, className: "flex items-center" },
            react_1.default.createElement("span", { className: "px-6" }, text),
            react_1.default.createElement("span", { className: "text-primary" }, "\u2726")))))))))));
exports.Header = Header;

    },
    "./c8s/Hero": function(module, exports, require) {
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
const react_1 = __importDefault(require("react"));
const lucide_react_1 = require("lucide-react");
const crucibleUtils_1 = require("../u3s/crucibleUtils");
const ui_1 = require("./ui");
const Hero = ({ params }) => {
    const math = (0, crucibleUtils_1.computeMathSummary)(params);
    return (react_1.default.createElement("section", { className: "grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-6 lg:gap-8 items-stretch mb-10" },
        react_1.default.createElement("div", { className: "flex flex-col justify-center" },
            react_1.default.createElement(ui_1.Badge, { tone: "secondary", className: "self-start mb-4" }, "The adversarial verification runtime for autonomous AI agents"),
            react_1.default.createElement("h2", { className: "text-[35px] sm:text-[52px] leading-[1.02] font-black tracking-tight text-ink" },
                "One model says it's fine.",
                react_1.default.createElement("br", null),
                react_1.default.createElement("span", { className: "inline-block mt-1 px-2 bg-primary text-night border-2 border-ink shadow-nb -rotate-1" }, "Crucible tries to break it.")),
            react_1.default.createElement("p", { className: "mt-5 text-[17px] text-muted max-w-xl" }, "Every task runs through four stages: a builder drafts, a red-team prosecutor attacks the draft, a deterministic gate checks it with no model involved, and a chief judge repairs what is actually broken. You see every flaw, every repaired line, and the exact cost.")),
        react_1.default.createElement(ui_1.Card, { className: "p-5 sm:p-6 bg-primary text-night self-center" },
            react_1.default.createElement("div", { className: "flex items-center justify-between gap-2 mb-3" },
                react_1.default.createElement("span", { className: "font-mono text-[12px] font-black uppercase tracking-wider" }, "Live reliability lift"),
                react_1.default.createElement("span", { className: "font-mono text-[11px] font-bold" },
                    "p=",
                    math.p.toFixed(2),
                    " \u00B7 d=",
                    math.d.toFixed(2),
                    " \u00B7 r=",
                    math.r.toFixed(2),
                    " \u00B7 n=",
                    math.n)),
            react_1.default.createElement("div", { className: "flex items-center gap-3 sm:gap-4 flex-wrap" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: "font-mono text-[11px] font-bold uppercase" }, "Single agent"),
                    react_1.default.createElement("div", { className: "text-[35px] sm:text-[44px] font-black leading-none" },
                        math.openLoopAtN.toFixed(1),
                        "%")),
                react_1.default.createElement(lucide_react_1.ArrowRight, { className: "w-8 h-8 shrink-0", "aria-hidden": "true" }),
                react_1.default.createElement("div", { className: "px-3 py-2 rounded-md border-2 border-night bg-card text-ink shadow-nb-sm" },
                    react_1.default.createElement("div", { className: "font-mono text-[11px] font-bold uppercase" }, "With Crucible"),
                    react_1.default.createElement("div", { className: "text-[35px] sm:text-[44px] font-black leading-none text-accent" },
                        math.closedLoopAtN.toFixed(1),
                        "%"))),
            react_1.default.createElement("p", { className: "mt-4 font-mono text-[12px] font-bold leading-relaxed" }, "P_open(n) = p^n \u2192 P_closed(n) = (p + (1 \u2212 p)\u00B7d\u00B7r)^n. Tune the inputs in the Telemetry tab."))));
};
exports.Hero = Hero;

    },
    "./c8s/MarkdownView": function(module, exports, require) {
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownView = void 0;
const react_1 = __importDefault(require("react"));
const ui_1 = require("./ui");
function renderInline(text) {
    return text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).map((token, idx) => {
        if (token.length > 2 && token.startsWith('`') && token.endsWith('`')) {
            return (react_1.default.createElement("code", { key: idx, className: "px-1.5 py-0.5 rounded border border-ink bg-soft font-mono text-[0.88em] text-ink" }, token.slice(1, -1)));
        }
        if (token.length > 4 && token.startsWith('**') && token.endsWith('**')) {
            return (react_1.default.createElement("strong", { key: idx, className: "font-extrabold text-ink" }, token.slice(2, -2)));
        }
        return token;
    });
}
const splitRow = (line) => line
    .trim()
    .replace(/^\||\|$/g, '')
    .split('|')
    .map((c) => c.trim());
function renderTextBlock(segment, keyPrefix) {
    const lines = segment.split('\n');
    const nodes = [];
    let i = 0;
    while (i < lines.length) {
        const raw = lines[i];
        const line = raw.trim();
        const key = `${keyPrefix}-${i}`;
        if (!line) {
            i++;
            continue;
        }
        if (line.startsWith('|') && i + 1 < lines.length && /^\s*\|?\s*:?-{2,}/.test(lines[i + 1])) {
            const header = splitRow(line);
            const rows = [];
            i += 2;
            while (i < lines.length && lines[i].trim().startsWith('|')) {
                rows.push(splitRow(lines[i]));
                i++;
            }
            nodes.push(react_1.default.createElement("div", { key: key, className: "overflow-x-auto rounded-md border-2 border-ink" },
                react_1.default.createElement("table", { className: "w-full text-left text-[13px]" },
                    react_1.default.createElement("thead", null,
                        react_1.default.createElement("tr", { className: "bg-soft border-b-2 border-ink" }, header.map((h, c) => (react_1.default.createElement("th", { key: c, className: "px-3 py-2 font-mono font-bold uppercase text-[11px]" }, renderInline(h)))))),
                    react_1.default.createElement("tbody", null, rows.map((r, ri) => (react_1.default.createElement("tr", { key: ri, className: "border-b border-ink/30 last:border-b-0" }, r.map((cell, c) => (react_1.default.createElement("td", { key: c, className: "px-3 py-2 align-top" }, renderInline(cell)))))))))));
            continue;
        }
        if (/^---+$/.test(line)) {
            nodes.push(react_1.default.createElement("hr", { key: key, className: "border-t-2 border-ink my-2" }));
        }
        else if (line.startsWith('### ')) {
            nodes.push(react_1.default.createElement("h4", { key: key, className: "text-[15px] font-black text-ink pt-2" }, renderInline(line.slice(4))));
        }
        else if (line.startsWith('## ')) {
            nodes.push(react_1.default.createElement("h3", { key: key, className: "text-[17px] font-black text-ink pt-3" }, renderInline(line.slice(3))));
        }
        else if (line.startsWith('# ')) {
            nodes.push(react_1.default.createElement("h2", { key: key, className: "text-[21px] font-black text-ink pt-3" }, renderInline(line.slice(2))));
        }
        else if (line.startsWith('> ')) {
            nodes.push(react_1.default.createElement("blockquote", { key: key, className: "border-l-4 border-secondary pl-3 text-muted" }, renderInline(line.slice(2))));
        }
        else if (/^[-*]\s+/.test(line)) {
            nodes.push(react_1.default.createElement("div", { key: key, className: "flex items-start gap-2.5 pl-1" },
                react_1.default.createElement("span", { className: "mt-2 w-2 h-2 border-2 border-ink bg-primary shrink-0", "aria-hidden": "true" }),
                react_1.default.createElement("span", { className: "flex-1" }, renderInline(line.replace(/^[-*]\s+/, '')))));
        }
        else {
            const numbered = line.match(/^(\d+)\.\s+(.*)$/);
            if (numbered) {
                nodes.push(react_1.default.createElement("div", { key: key, className: "flex items-start gap-2.5 pl-1" },
                    react_1.default.createElement("span", { className: "font-mono font-bold text-[13px] mt-0.5 min-w-[1.5rem] text-accent" },
                        numbered[1],
                        "."),
                    react_1.default.createElement("span", { className: "flex-1" }, renderInline(numbered[2]))));
            }
            else {
                nodes.push(react_1.default.createElement("p", { key: key }, renderInline(raw)));
            }
        }
        i++;
    }
    return react_1.default.createElement("div", { key: keyPrefix, className: "space-y-2" }, nodes);
}
const MarkdownView = ({ content }) => {
    if (!content)
        return null;
    const segments = content.split(/(```[\s\S]*?```)/g);
    return (react_1.default.createElement("div", { className: "space-y-2 text-[15px] leading-relaxed text-ink" }, segments.map((segment, idx) => {
        if (segment.startsWith('```') && segment.endsWith('```') && segment.length >= 6) {
            const body = segment.slice(3, -3);
            const newline = body.indexOf('\n');
            const language = newline === -1 ? '' : body.slice(0, newline).trim();
            const code = newline === -1 ? body : body.slice(newline + 1).replace(/\n$/, '');
            return react_1.default.createElement(ui_1.CodeBlock, { key: idx, language: language, code: code });
        }
        return renderTextBlock(segment, `seg-${idx}`);
    })));
};
exports.MarkdownView = MarkdownView;

    },
    "./c8s/PipelineTracker": function(module, exports, require) {
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PipelineTracker = void 0;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const crucibleUtils_1 = require("../u3s/crucibleUtils");
const apiService_1 = require("../s6s/apiService");
const ui_1 = require("./ui");
const Elapsed = ({ stage }) => {
    const running = stage.status === 'running';
    const [now, setNow] = (0, react_1.useState)(Date.now());
    (0, react_1.useEffect)(() => {
        if (!running)
            return;
        const id = window.setInterval(() => setNow(Date.now()), 100);
        return () => window.clearInterval(id);
    }, [running]);
    const value = running && stage.startedAt ? now - stage.startedAt : stage.latencyMs;
    return react_1.default.createElement("span", { className: "tabular-nums" }, (0, crucibleUtils_1.formatMs)(value));
};
const PipelineTracker = ({ session }) => {
    const label = (s) => s.provider ? `${apiService_1.DEFAULT_PROVIDER_CONFIG[s.provider].shortLabel} · ${s.model}` : s.model;
    const stages = [
        {
            num: '01',
            title: 'The Architect',
            blurb: 'Drafts the solution, code or architecture.',
            accent: 'bg-primary text-night',
            state: session.stage1Builder,
        },
        {
            num: '02',
            title: 'Red-Team Prosecutor',
            blurb: 'Attacks the draft. No politeness allowed.',
            accent: 'bg-danger text-white',
            state: session.stage2RedTeam,
        },
        {
            num: '03',
            title: 'Deterministic Gate',
            blurb: 'Rule-based checks. No model, no API call.',
            accent: 'bg-success-soft text-ink',
            state: session.stage3Heuristic,
        },
        {
            num: '04',
            title: 'Chief Judge',
            blurb: 'Repairs flaws and scores confidence.',
            accent: 'bg-secondary text-white',
            state: session.stage4Judge,
        },
    ];
    const hasRun = session.prompt.length > 0;
    return (react_1.default.createElement("section", { id: "pipeline", "aria-labelledby": "pipeline-title", className: "mb-10 scroll-mt-28" },
        react_1.default.createElement(ui_1.SectionHeader, { step: "03", title: "Watch the pipeline", subtitle: "Four inspectable stages with live timers and token counts.", right: hasRun ? (react_1.default.createElement(ui_1.Badge, { tone: session.isRunning ? 'primary' : 'dark' }, session.isRunning ? `Running stage ${session.activeStage} of 4` : 'Run finished')) : (react_1.default.createElement(ui_1.Badge, null, "Idle")) }),
        react_1.default.createElement("h3", { id: "pipeline-title", className: "sr-only" }, "Pipeline status"),
        react_1.default.createElement("ol", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5", "aria-live": "polite" }, stages.map((stage) => {
            const { status } = stage.state;
            const running = status === 'running';
            const done = status === 'completed';
            const errored = status === 'error';
            const isGate = stage.num === '03';
            return (react_1.default.createElement("li", { key: stage.num },
                react_1.default.createElement(ui_1.Card, { className: (0, ui_1.cx)('h-full overflow-hidden transition-colors', running && 'bg-primary-soft', errored && 'bg-danger-soft', !hasRun && 'opacity-90') },
                    react_1.default.createElement("div", { className: (0, ui_1.cx)('flex items-center justify-between px-3.5 py-2 border-b-2 border-ink', stage.accent) },
                        react_1.default.createElement("span", { className: "font-mono text-[15px] font-black" }, stage.num),
                        react_1.default.createElement("span", { className: "font-mono text-[11px] font-black uppercase tracking-wider" },
                            running && 'Running',
                            done && 'Done',
                            errored && 'Failed',
                            status === 'idle' && 'Queued')),
                    react_1.default.createElement("div", { className: "p-3.5" },
                        react_1.default.createElement("h4", { className: "text-[17px] font-black text-ink leading-tight" }, stage.title),
                        react_1.default.createElement("p", { className: "text-[13px] text-muted mt-0.5" }, stage.blurb),
                        hasRun && (react_1.default.createElement("div", { className: "mt-3 space-y-1.5 font-mono text-[12px] text-ink" },
                            react_1.default.createElement("div", { className: "truncate", title: label(stage.state) }, isGate ? 'Local rule engine' : label(stage.state)),
                            react_1.default.createElement("div", { className: "flex items-center justify-between gap-2" },
                                react_1.default.createElement("span", { className: "text-muted" }, "Latency"),
                                react_1.default.createElement("span", { className: "font-bold" }, status === 'idle' ? '—' : react_1.default.createElement(Elapsed, { stage: stage.state }))),
                            react_1.default.createElement("div", { className: "flex items-center justify-between gap-2" },
                                react_1.default.createElement("span", { className: "text-muted" }, "Tokens in / out"),
                                react_1.default.createElement("span", { className: "font-bold tabular-nums" }, isGate || status === 'idle' || running
                                    ? isGate && done
                                        ? '0 / 0 (local)'
                                        : '—'
                                    : `${(0, crucibleUtils_1.formatTokens)(stage.state.inputTokens)} / ${(0, crucibleUtils_1.formatTokens)(stage.state.outputTokens)}${stage.state.tokensReported ? '' : '*'}`)),
                            stage.state.apiCalls > 1 && (react_1.default.createElement("div", { className: "text-[11px] text-muted" },
                                stage.state.apiCalls,
                                " API calls (JSON repair retry)")))),
                        running && react_1.default.createElement("div", { className: "nb-stripes mt-3 h-2.5 rounded border-2 border-ink" }),
                        done && (react_1.default.createElement("div", { className: "mt-3 flex items-center gap-1.5 font-mono text-[12px] font-bold text-ink" },
                            react_1.default.createElement(lucide_react_1.CheckCircle2, { className: "w-4 h-4", "aria-hidden": "true" }),
                            stage.num === '02' && `${session.failureModes.length} failure modes`,
                            stage.num === '03' &&
                                `${session.heuristicChecks.filter((c) => c.stage1Status === 'FAIL').length} fails · ${session.heuristicChecks.filter((c) => c.stage1Status === 'WARN').length} warns`,
                            stage.num === '04' && session.confidence && `${session.confidence.score}% confidence`,
                            stage.num === '01' && `${stage.state.content.split('\n').length} lines drafted`)),
                        errored && (react_1.default.createElement("div", { role: "alert", className: "mt-3 flex items-start gap-2 rounded-md border-2 border-ink bg-card px-2.5 py-2 text-[13px] text-ink break-words" },
                            react_1.default.createElement(lucide_react_1.AlertCircle, { className: "w-4 h-4 mt-0.5 shrink-0 text-danger", "aria-hidden": "true" }),
                            react_1.default.createElement("span", null, stage.state.error)))))));
        }))));
};
exports.PipelineTracker = PipelineTracker;

    },
    "./c8s/PromptDrawer": function(module, exports, require) {
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptDrawer = void 0;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const apiService_1 = require("../s6s/apiService");
const ui_1 = require("./ui");
const TABS = [
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
const PromptDrawer = ({ open, onClose, prompts, onChange, onReset }) => {
    const [active, setActive] = (0, react_1.useState)('redTeam');
    const textareaRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (!open)
            return;
        const onKey = (e) => {
            if (e.key === 'Escape')
                onClose();
        };
        document.addEventListener('keydown', onKey);
        const previous = document.activeElement;
        const timer = window.setTimeout(() => textareaRef.current?.focus(), 50);
        return () => {
            document.removeEventListener('keydown', onKey);
            window.clearTimeout(timer);
            if (previous && typeof previous.focus === 'function')
                previous.focus();
        };
    }, [open, onClose]);
    if (!open)
        return null;
    const meta = TABS.find((t) => t.id === active);
    const isDefault = prompts[active] === apiService_1.DEFAULT_SYSTEM_PROMPTS[active];
    return (react_1.default.createElement("div", { className: "fixed inset-0 z-50 flex justify-end", role: "presentation" },
        react_1.default.createElement("div", { className: "absolute inset-0 bg-night/60 nb-fade", onClick: onClose, "aria-hidden": "true" }),
        react_1.default.createElement("aside", { role: "dialog", "aria-modal": "true", "aria-labelledby": "prompt-drawer-title", className: "nb-slide relative flex h-full w-full max-w-2xl flex-col border-l-[3px] border-ink bg-surface" },
            react_1.default.createElement("div", { className: "flex items-start justify-between gap-3 border-b-[3px] border-ink bg-primary px-5 py-4 text-night" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h2", { id: "prompt-drawer-title", className: "text-[21px] font-black leading-tight" }, "Inspect & edit agent system prompts"),
                    react_1.default.createElement("p", { className: "mt-0.5 text-[13px] font-medium" }, "Edits save automatically and go out with the very next API call.")),
                react_1.default.createElement(ui_1.Button, { size: "sm", variant: "ghost", onClick: onClose, "aria-label": "Close prompt inspector", icon: react_1.default.createElement(lucide_react_1.X, { className: "w-4 h-4" }) }, "Esc")),
            react_1.default.createElement("div", { className: "flex-1 overflow-y-auto p-5 space-y-4" },
                react_1.default.createElement(ui_1.Tabs, { label: "Agent prompt", active: active, onChange: (id) => setActive(id), tabs: TABS.map((t) => ({ id: t.id, label: t.label })) }),
                react_1.default.createElement("div", { id: `panel-${active}`, role: "tabpanel", "aria-labelledby": `tab-${active}`, className: "space-y-3" },
                    react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-2" },
                        react_1.default.createElement("h3", { className: "text-[17px] font-black text-ink" }, meta.title),
                        react_1.default.createElement("div", { className: "flex items-center gap-2" },
                            react_1.default.createElement(ui_1.Badge, null,
                                "~",
                                (0, apiService_1.estimateTokens)(prompts[active]),
                                " tokens"),
                            isDefault ? react_1.default.createElement(ui_1.Badge, { tone: "success" }, "Default") : react_1.default.createElement(ui_1.Badge, { tone: "warning" }, "Customised"))),
                    react_1.default.createElement("p", { className: "text-[13px] text-muted" }, meta.note),
                    react_1.default.createElement("label", { htmlFor: "prompt-editor", className: "sr-only" }, meta.title),
                    react_1.default.createElement("textarea", { id: "prompt-editor", ref: textareaRef, value: prompts[active], onChange: (e) => onChange(active, e.target.value), spellCheck: false, rows: 18, className: "w-full resize-y rounded-md border-2 border-ink bg-card p-3.5 font-mono text-[13px] leading-relaxed text-ink" }),
                    react_1.default.createElement(ui_1.Button, { size: "sm", onClick: () => onReset(active), disabled: isDefault, icon: react_1.default.createElement(lucide_react_1.RotateCcw, { className: "w-3.5 h-3.5" }) }, "Reset to default"))))));
};
exports.PromptDrawer = PromptDrawer;

    },
    "./c8s/Results": function(module, exports, require) {
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Results = void 0;
const react_1 = __importStar(require("react"));
const ui_1 = require("./ui");
const VerdictTab_1 = require("./VerdictTab");
const FindingsTab_1 = require("./FindingsTab");
const GateTab_1 = require("./GateTab");
const DiffTab_1 = require("./DiffTab");
const TelemetryTab_1 = require("./TelemetryTab");
const Results = ({ session, mathParams, strictness, diffViewMode, onDiffViewMode, onMathChange, onStrictness, onDownloadReport, }) => {
    const [tab, setTab] = (0, react_1.useState)('verdict');
    const gateFails = session.heuristicChecks.filter((c) => c.stage1Status === 'FAIL').length;
    return (react_1.default.createElement("section", { "aria-labelledby": "results-title", className: "mb-10" },
        react_1.default.createElement(ui_1.SectionHeader, { step: "04", title: "Read the verdict", subtitle: "Every claim is inspectable: the failures found, the checks that ran, the lines that changed and what it all cost." }),
        react_1.default.createElement("h3", { id: "results-title", className: "sr-only" }, "Verification results"),
        react_1.default.createElement(ui_1.Card, { className: "p-4 sm:p-5" },
            react_1.default.createElement(ui_1.Tabs, { label: "Result views", active: tab, onChange: setTab, tabs: [
                    { id: 'verdict', label: 'Verdict' },
                    {
                        id: 'findings',
                        label: 'Red-team findings',
                        badge: session.failureModes.length > 0 ? react_1.default.createElement(ui_1.Badge, { tone: "dangerSolid" }, session.failureModes.length) : undefined,
                    },
                    {
                        id: 'gate',
                        label: 'Heuristic gate',
                        badge: gateFails > 0 ? react_1.default.createElement(ui_1.Badge, { tone: "warning" }, gateFails) : undefined,
                    },
                    { id: 'diff', label: 'Diff' },
                    { id: 'telemetry', label: 'Telemetry' },
                ] }),
            react_1.default.createElement("div", { role: "tabpanel", id: `panel-${tab}`, "aria-labelledby": `tab-${tab}`, tabIndex: 0, className: "mt-5 focus-visible:outline-offset-4" },
                tab === 'verdict' && (react_1.default.createElement(VerdictTab_1.VerdictTab, { session: session, mathParams: mathParams, onDownloadReport: onDownloadReport })),
                tab === 'findings' && react_1.default.createElement(FindingsTab_1.FindingsTab, { session: session }),
                tab === 'gate' && react_1.default.createElement(GateTab_1.GateTab, { session: session }),
                tab === 'diff' && react_1.default.createElement(DiffTab_1.DiffTab, { session: session, mode: diffViewMode, onModeChange: onDiffViewMode }),
                tab === 'telemetry' && (react_1.default.createElement(TelemetryTab_1.TelemetryTab, { session: session, params: mathParams, strictness: strictness, onChange: onMathChange, onStrictness: onStrictness }))))));
};
exports.Results = Results;

    },
    "./c8s/TelemetryTab": function(module, exports, require) {
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelemetryTab = void 0;
const react_1 = __importDefault(require("react"));
const crucibleUtils_1 = require("../u3s/crucibleUtils");
const ui_1 = require("./ui");
const STATUS_TONE = {
    Stable: 'success',
    Degrading: 'warning',
    Collapsed: 'dangerSolid',
};
const Formula = ({ title, formula, value, tone = 'bg-card', }) => (react_1.default.createElement("div", { className: (0, ui_1.cx)('rounded-md border-2 border-ink p-3.5 shadow-nb-sm', tone) },
    react_1.default.createElement("div", { className: "font-mono text-[11px] font-bold uppercase tracking-wide text-muted" }, title),
    react_1.default.createElement("div", { className: "mt-0.5 font-mono text-[13px] font-bold text-ink" }, formula),
    react_1.default.createElement("div", { className: "mt-2 text-[27px] font-black leading-none text-ink" }, value)));
const ReliabilityChart = ({ params }) => {
    const width = 640;
    const height = 260;
    const pad = { left: 44, right: 16, top: 14, bottom: 32 };
    const innerW = width - pad.left - pad.right;
    const innerH = height - pad.top - pad.bottom;
    const maxN = 50;
    const points = (0, crucibleUtils_1.computeCurve)(params, maxN);
    const x = (n) => pad.left + (n / maxN) * innerW;
    const y = (pct) => pad.top + innerH - (pct / 100) * innerH;
    const path = (key) => points.map((pt, i) => `${i === 0 ? 'M' : 'L'}${x(pt.n).toFixed(1)},${y(pt[key]).toFixed(1)}`).join(' ');
    const activeN = Math.min(maxN, Math.max(1, Math.round(params.n)));
    const active = points[activeN];
    return (react_1.default.createElement("svg", { viewBox: `0 0 ${width} ${height}`, className: "w-full h-auto", role: "img", "aria-label": `Reliability decay curve. At ${activeN} steps, open-loop success is ${active.open.toFixed(1)} percent and closed-loop is ${active.closed.toFixed(1)} percent.` },
        [0, 25, 50, 75, 100].map((tick) => (react_1.default.createElement("g", { key: tick },
            react_1.default.createElement("line", { x1: pad.left, x2: width - pad.right, y1: y(tick), y2: y(tick), strokeWidth: "1", strokeDasharray: "4 4", style: { stroke: 'var(--muted)', opacity: 0.5 } }),
            react_1.default.createElement("text", { x: pad.left - 8, y: y(tick) + 4, textAnchor: "end", fontSize: "11", fontFamily: "JetBrains Mono, monospace", style: { fill: 'var(--muted)' } },
                tick,
                "%")))),
        [0, 10, 20, 30, 40, 50].map((tick) => (react_1.default.createElement("text", { key: tick, x: x(tick), y: height - 10, textAnchor: "middle", fontSize: "11", fontFamily: "JetBrains Mono, monospace", style: { fill: 'var(--muted)' } }, tick))),
        react_1.default.createElement("rect", { x: pad.left, y: pad.top, width: innerW, height: innerH, fill: "none", strokeWidth: "2", style: { stroke: 'var(--ink)' } }),
        react_1.default.createElement("line", { x1: x(activeN), x2: x(activeN), y1: pad.top, y2: pad.top + innerH, strokeWidth: "2", strokeDasharray: "6 4", style: { stroke: 'var(--ink)' } }),
        react_1.default.createElement("path", { d: path('open'), fill: "none", strokeWidth: "4", strokeLinejoin: "round", style: { stroke: '#DC2626' } }),
        react_1.default.createElement("path", { d: path('closed'), fill: "none", strokeWidth: "4", strokeLinejoin: "round", style: { stroke: 'var(--chart-closed)' } }),
        react_1.default.createElement("circle", { cx: x(activeN), cy: y(active.open), r: "6", strokeWidth: "2.5", style: { fill: '#DC2626', stroke: 'var(--ink)' } }),
        react_1.default.createElement("circle", { cx: x(activeN), cy: y(active.closed), r: "6", strokeWidth: "2.5", style: { fill: 'var(--chart-closed)', stroke: 'var(--ink)' } })));
};
const TelemetryTab = ({ session, params, strictness, onChange, onStrictness, }) => {
    const math = (0, crucibleUtils_1.computeMathSummary)(params);
    const horizon = (0, crucibleUtils_1.computeHorizonTable)(params);
    const cost = (0, crucibleUtils_1.computeCostBreakdown)(session);
    const hasCost = cost.totalApiCalls > 0;
    return (react_1.default.createElement("div", { className: "space-y-8" },
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-3 mb-3" },
                react_1.default.createElement("h3", { className: "text-[21px] font-black text-ink" }, "Reliability model"),
                react_1.default.createElement("div", { className: "flex flex-wrap gap-2", role: "group", "aria-label": "Strictness preset" }, Object.keys(crucibleUtils_1.STRICTNESS_PRESETS).map((level) => {
                    const preset = crucibleUtils_1.STRICTNESS_PRESETS[level];
                    const active = strictness === level;
                    return (react_1.default.createElement("button", { key: level, type: "button", "aria-pressed": active, onClick: () => onStrictness(level), className: (0, ui_1.cx)('rounded-md border-2 border-ink px-3 py-1.5 font-mono text-[12px] font-bold uppercase transition-all duration-100 motion-reduce:transition-none', active ? 'bg-primary text-night shadow-nb-sm' : 'bg-card text-ink hover:bg-soft') },
                        preset.short,
                        " \u00B7 d=",
                        preset.d,
                        " r=",
                        preset.r));
                }))),
            react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4" },
                react_1.default.createElement(ui_1.Slider, { id: "slider-p", label: "Step accuracy p", valueLabel: `${(params.p * 100).toFixed(0)}%`, min: 0.5, max: 0.99, step: 0.01, value: params.p, onChange: (p) => onChange({ p }), hint: "Chance one unaided agent step is correct." }),
                react_1.default.createElement(ui_1.Slider, { id: "slider-d", label: "Detection d", valueLabel: `${(params.d * 100).toFixed(0)}%`, min: 0.2, max: 0.99, step: 0.01, value: params.d, onChange: (d) => onChange({ d }), hint: "Chance the Red-Team catches a bad step." }),
                react_1.default.createElement(ui_1.Slider, { id: "slider-r", label: "Repair r", valueLabel: `${(params.r * 100).toFixed(0)}%`, min: 0.2, max: 0.99, step: 0.01, value: params.r, onChange: (r) => onChange({ r }), hint: "Chance the Judge fixes a caught step." }),
                react_1.default.createElement(ui_1.Slider, { id: "slider-n", label: "Horizon n", valueLabel: `${params.n} steps`, min: 1, max: 50, step: 1, value: params.n, onChange: (n) => onChange({ n: Math.round(n) }), hint: "Number of sequential agent steps." }))),
        react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4" },
            react_1.default.createElement(Formula, { title: "Open-loop success", formula: `P_open(n) = p^n = ${math.p.toFixed(2)}^${math.n}`, value: react_1.default.createElement("span", { className: "text-danger" },
                    math.openLoopAtN.toFixed(2),
                    "%") }),
            react_1.default.createElement(Formula, { title: "Half-life horizon", formula: "n\u00BD = ln(0.5) / ln(p)", value: react_1.default.createElement(react_1.default.Fragment, null,
                    math.halfLifeOpen.toFixed(1),
                    react_1.default.createElement("span", { className: "text-[15px] font-bold text-muted" },
                        " \u2192 ",
                        math.halfLifeClosed.toFixed(1),
                        " steps")) }),
            react_1.default.createElement(Formula, { title: "Effective step reliability", formula: "p_eff = p + (1 \u2212 p)\u00B7d\u00B7r", value: react_1.default.createElement("span", { className: "text-accent" },
                    (math.pEff * 100).toFixed(2),
                    "%") }),
            react_1.default.createElement(Formula, { title: "Closed-loop success", formula: `P_closed(n) = p_eff^${math.n}`, tone: "bg-primary-soft", value: react_1.default.createElement(react_1.default.Fragment, null,
                    math.closedLoopAtN.toFixed(2),
                    "%",
                    react_1.default.createElement("span", { className: "text-[15px] font-bold text-muted" },
                        " (+",
                        math.gainAtN.toFixed(1),
                        ")")) })),
        react_1.default.createElement(ui_1.Card, { flat: true, className: "p-4" },
            react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-2 mb-2" },
                react_1.default.createElement("h4", { className: "font-mono text-[13px] font-black uppercase tracking-wide text-ink" }, "Success probability vs. task horizon"),
                react_1.default.createElement("div", { className: "flex items-center gap-3 font-mono text-[11px] font-bold text-ink" },
                    react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5" },
                        react_1.default.createElement("span", { className: "w-4 h-1.5 bg-danger border border-ink", "aria-hidden": "true" }),
                        " Open-loop"),
                    react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5" },
                        react_1.default.createElement("span", { className: "w-4 h-1.5 border border-ink", style: { background: 'var(--chart-closed)' }, "aria-hidden": "true" }),
                        " Crucible"))),
            react_1.default.createElement(ReliabilityChart, { params: params })),
        react_1.default.createElement("div", null,
            react_1.default.createElement("h3", { className: "text-[21px] font-black text-ink mb-3" }, "Horizon reliability comparison"),
            react_1.default.createElement("div", { className: "overflow-x-auto rounded-md border-2 border-ink" },
                react_1.default.createElement("table", { className: "w-full min-w-[720px] text-left border-collapse" },
                    react_1.default.createElement("caption", { className: "sr-only" }, "Open-loop versus Crucible closed-loop reliability by step horizon"),
                    react_1.default.createElement("thead", null,
                        react_1.default.createElement("tr", { className: "bg-ink text-surface font-mono text-[11px] uppercase tracking-wider" },
                            react_1.default.createElement("th", { scope: "col", className: "px-3 py-2.5" }, "Step horizon"),
                            react_1.default.createElement("th", { scope: "col", className: "px-3 py-2.5 text-right" }, "Open-loop (p^n)"),
                            react_1.default.createElement("th", { scope: "col", className: "px-3 py-2.5 text-right" }, "Crucible (p_eff^n)"),
                            react_1.default.createElement("th", { scope: "col", className: "px-3 py-2.5 text-right" }, "Gain (+\u0394%)"),
                            react_1.default.createElement("th", { scope: "col", className: "px-3 py-2.5" }, "Status"))),
                    react_1.default.createElement("tbody", { className: "font-mono text-[13px]" }, horizon.map((row) => {
                        const active = row.n === math.n;
                        return (react_1.default.createElement("tr", { key: row.n, className: (0, ui_1.cx)('border-t-2 border-ink', active ? 'bg-primary-soft font-bold' : 'odd:bg-card even:bg-surface') },
                            react_1.default.createElement("td", { className: "px-3 py-2.5 text-ink" },
                                "n = ",
                                row.n,
                                active && react_1.default.createElement(ui_1.Badge, { tone: "dark", className: "ml-2" }, "Active")),
                            react_1.default.createElement("td", { className: "px-3 py-2.5 text-right tabular-nums text-ink" },
                                row.openLoopPct.toFixed(2),
                                "%"),
                            react_1.default.createElement("td", { className: "px-3 py-2.5 text-right tabular-nums text-ink" },
                                row.closedLoopPct.toFixed(2),
                                "%"),
                            react_1.default.createElement("td", { className: "px-3 py-2.5 text-right tabular-nums text-ink" },
                                "+",
                                row.reliabilityGainPct.toFixed(2),
                                "%"),
                            react_1.default.createElement("td", { className: "px-3 py-2.5" },
                                react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5" },
                                    react_1.default.createElement(ui_1.Badge, { tone: STATUS_TONE[row.openStatus] }, row.openStatus),
                                    react_1.default.createElement("span", { "aria-hidden": "true" }, "\u2192"),
                                    react_1.default.createElement(ui_1.Badge, { tone: STATUS_TONE[row.closedStatus] }, row.closedStatus)))));
                    }))))),
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-3 mb-3" },
                react_1.default.createElement("h3", { className: "text-[21px] font-black text-ink" }, "Token & cost breakdown"),
                react_1.default.createElement(ui_1.CopyButton, { size: "md", label: "Copy full telemetry table", text: (0, crucibleUtils_1.buildTelemetryMarkdown)(session, params, strictness) })),
            !hasCost ? (react_1.default.createElement("div", { className: "rounded-lg border-2 border-dashed border-ink bg-soft px-6 py-8 text-center text-[15px] text-muted" }, "Run a verification to see real token usage, latency and cost per stage.")) : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "overflow-x-auto rounded-md border-2 border-ink" },
                    react_1.default.createElement("table", { className: "w-full min-w-[820px] text-left border-collapse" },
                        react_1.default.createElement("caption", { className: "sr-only" }, "Per-stage token, latency and cost breakdown"),
                        react_1.default.createElement("thead", null,
                            react_1.default.createElement("tr", { className: "bg-ink text-surface font-mono text-[11px] uppercase tracking-wider" },
                                react_1.default.createElement("th", { scope: "col", className: "px-3 py-2.5" }, "Pipeline stage"),
                                react_1.default.createElement("th", { scope: "col", className: "px-3 py-2.5" }, "Model"),
                                react_1.default.createElement("th", { scope: "col", className: "px-3 py-2.5 text-right" }, "Input tok"),
                                react_1.default.createElement("th", { scope: "col", className: "px-3 py-2.5 text-right" }, "Output tok"),
                                react_1.default.createElement("th", { scope: "col", className: "px-3 py-2.5 text-right" }, "API calls"),
                                react_1.default.createElement("th", { scope: "col", className: "px-3 py-2.5 text-right" }, "Latency"),
                                react_1.default.createElement("th", { scope: "col", className: "px-3 py-2.5 text-right" }, "Est. cost (USD)"))),
                        react_1.default.createElement("tbody", { className: "font-mono text-[13px] text-ink" },
                            cost.rows.map((row) => (react_1.default.createElement("tr", { key: row.stageId, className: "border-t-2 border-ink odd:bg-card even:bg-surface" },
                                react_1.default.createElement("td", { className: "px-3 py-2.5 font-bold" }, row.stageLabel),
                                react_1.default.createElement("td", { className: "px-3 py-2.5 text-muted" }, row.modelUsed),
                                react_1.default.createElement("td", { className: "px-3 py-2.5 text-right tabular-nums" }, (0, crucibleUtils_1.formatTokens)(row.inputTokens)),
                                react_1.default.createElement("td", { className: "px-3 py-2.5 text-right tabular-nums" }, (0, crucibleUtils_1.formatTokens)(row.outputTokens)),
                                react_1.default.createElement("td", { className: "px-3 py-2.5 text-right tabular-nums" }, row.apiCalls),
                                react_1.default.createElement("td", { className: "px-3 py-2.5 text-right tabular-nums" }, (0, crucibleUtils_1.formatMs)(row.latencyMs)),
                                react_1.default.createElement("td", { className: "px-3 py-2.5 text-right tabular-nums font-bold" }, row.priceKnown ? (0, crucibleUtils_1.formatUsd)(row.estimatedCostUsd) : 'n/a')))),
                            react_1.default.createElement("tr", { className: "border-t-[3px] border-ink bg-primary-soft font-black" },
                                react_1.default.createElement("td", { className: "px-3 py-3", colSpan: 2 }, "Total \u00B7 closed-loop runtime"),
                                react_1.default.createElement("td", { className: "px-3 py-3 text-right tabular-nums" }, (0, crucibleUtils_1.formatTokens)(cost.totalInputTokens)),
                                react_1.default.createElement("td", { className: "px-3 py-3 text-right tabular-nums" }, (0, crucibleUtils_1.formatTokens)(cost.totalOutputTokens)),
                                react_1.default.createElement("td", { className: "px-3 py-3 text-right tabular-nums" }, cost.totalApiCalls),
                                react_1.default.createElement("td", { className: "px-3 py-3 text-right tabular-nums" }, (0, crucibleUtils_1.formatMs)(cost.totalLatencyMs)),
                                react_1.default.createElement("td", { className: "px-3 py-3 text-right tabular-nums" }, (0, crucibleUtils_1.formatUsd)(cost.closedLoopCostUsd)))))),
                react_1.default.createElement("div", { className: "mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4" },
                    react_1.default.createElement(Formula, { title: "Single-pass (Stage 1 only)", formula: (0, crucibleUtils_1.formatMs)(cost.singlePassLatencyMs), value: (0, crucibleUtils_1.formatUsd)(cost.singlePassCostUsd) }),
                    react_1.default.createElement(Formula, { title: "Closed-loop (all stages)", formula: (0, crucibleUtils_1.formatMs)(cost.totalLatencyMs), value: (0, crucibleUtils_1.formatUsd)(cost.closedLoopCostUsd), tone: "bg-primary-soft" }),
                    react_1.default.createElement(Formula, { title: "Verification premium", formula: "closed-loop \u00F7 single-pass cost", value: cost.costMultiplier ? `${cost.costMultiplier.toFixed(1)}×` : 'n/a' })),
                react_1.default.createElement("p", { className: "mt-3 font-mono text-[11px] text-muted" },
                    "Cost = tokens \u00D7 public list price per 1M tokens for the selected model.",
                    cost.anyTokensEstimated && ' * Some token counts are estimated (the provider did not report usage).',
                    cost.anyPriceUnknown && ' Models without a known price are shown as n/a and excluded from totals.'))))));
};
exports.TelemetryTab = TelemetryTab;

    },
    "./c8s/VerdictTab": function(module, exports, require) {
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerdictTab = void 0;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const crucibleUtils_1 = require("../u3s/crucibleUtils");
const ui_1 = require("./ui");
const MarkdownView_1 = require("./MarkdownView");
const Gauge = ({ score }) => {
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - score / 100);
    const color = score >= 85 ? '#16A34A' : score >= 65 ? '#FDC800' : '#DC2626';
    return (react_1.default.createElement("div", { className: "relative w-[168px] h-[168px] shrink-0", role: "img", "aria-label": `Verification confidence ${score} percent` },
        react_1.default.createElement("svg", { viewBox: "0 0 140 140", className: "w-full h-full -rotate-90" },
            react_1.default.createElement("circle", { cx: "70", cy: "70", r: radius, fill: "none", strokeWidth: "18", style: { stroke: 'var(--soft)' } }),
            react_1.default.createElement("circle", { cx: "70", cy: "70", r: radius, fill: "none", strokeWidth: "18", strokeDasharray: circumference, strokeDashoffset: offset, style: { stroke: color, transition: 'stroke-dashoffset 0.6s ease' } }),
            react_1.default.createElement("circle", { cx: "70", cy: "70", r: radius + 9, fill: "none", strokeWidth: "2", style: { stroke: 'var(--ink)' } }),
            react_1.default.createElement("circle", { cx: "70", cy: "70", r: radius - 9, fill: "none", strokeWidth: "2", style: { stroke: 'var(--ink)' } })),
        react_1.default.createElement("div", { className: "absolute inset-0 flex flex-col items-center justify-center" },
            react_1.default.createElement("span", { className: "text-[44px] font-black leading-none text-ink" }, score),
            react_1.default.createElement("span", { className: "font-mono text-[11px] font-bold uppercase text-muted" }, "% confident"))));
};
const Stat = ({ value, label, tone }) => (react_1.default.createElement("div", { className: `rounded-md border-2 border-ink p-3 shadow-nb-sm ${tone}` },
    react_1.default.createElement("div", { className: "text-[27px] font-black leading-none text-ink" }, value),
    react_1.default.createElement("div", { className: "mt-1 font-mono text-[11px] font-bold uppercase tracking-wide text-ink" }, label)));
const VerdictTab = ({ session, mathParams, onDownloadReport }) => {
    const done = session.stage4Judge.status === 'completed';
    const diff = (0, react_1.useMemo)(() => (0, crucibleUtils_1.computeLineDiff)(session.stage1Builder.content, session.stage4Judge.content, session.failureModes), [session.stage1Builder.content, session.stage4Judge.content, session.failureModes]);
    if (!session.prompt) {
        return (react_1.default.createElement(ui_1.EmptyState, { icon: react_1.default.createElement(lucide_react_1.ShieldCheck, { className: "w-10 h-10", "aria-hidden": "true" }), title: "No verification yet", body: "Add your keys, describe a task and press Run verification. The verdict, confidence score and repaired output appear here." }));
    }
    if (!done) {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(ui_1.EmptyState, { icon: react_1.default.createElement(lucide_react_1.Hourglass, { className: "w-10 h-10", "aria-hidden": "true" }), title: session.isRunning ? `Stage ${session.activeStage} of 4 in progress…` : 'This run did not finish', body: session.isRunning
                    ? 'The verdict appears as soon as the Chief Judge completes. Earlier stages are already inspectable in the other tabs.'
                    : 'A stage failed. The error is shown on its card above; fix the key or model and run again.' }),
            session.stage1Builder.content && (react_1.default.createElement("details", { className: "mt-4 rounded-md border-2 border-ink bg-card" },
                react_1.default.createElement("summary", { className: "cursor-pointer px-3.5 py-2.5 font-mono text-[13px] font-bold uppercase text-ink" }, "Stage 1 draft (unverified)"),
                react_1.default.createElement("div", { className: "px-3.5 pb-3.5" },
                    react_1.default.createElement(MarkdownView_1.MarkdownView, { content: session.stage1Builder.content }))))));
    }
    const confidence = session.confidence;
    const sycophancy = session.failureModes.filter((f) => f.category === '[RLHF SYCOPHANCY]').length;
    const repairedGates = session.heuristicChecks.filter((c) => (c.stage1Status === 'FAIL' || c.stage1Status === 'WARN') &&
        (c.stage4Status === 'PASS' || c.stage4Status === 'N/A')).length;
    const remaining = session.heuristicChecks.filter((c) => c.stage4Status === 'FAIL').length;
    return (react_1.default.createElement("div", { className: "space-y-6" },
        react_1.default.createElement("div", { className: "grid grid-cols-1 xl:grid-cols-[auto_1fr] gap-6 items-center" },
            react_1.default.createElement("div", { className: "flex flex-col items-center gap-3 sm:flex-row xl:flex-col" },
                confidence && react_1.default.createElement(Gauge, { score: confidence.score }),
                confidence && (react_1.default.createElement("p", { className: "max-w-[16rem] text-center sm:text-left xl:text-center font-mono text-[11px] text-muted" }, confidence.explanation))),
            react_1.default.createElement("div", { className: "space-y-4" },
                react_1.default.createElement("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3" },
                    react_1.default.createElement(Stat, { value: session.failureModes.length, label: "Flaws caught", tone: "bg-danger-soft" }),
                    react_1.default.createElement(Stat, { value: `−${diff.removedCount} / +${diff.addedCount}`, label: "Lines changed", tone: "bg-success-soft" }),
                    react_1.default.createElement(Stat, { value: sycophancy, label: "Sycophancy flags", tone: "bg-primary-soft" }),
                    react_1.default.createElement(Stat, { value: `${repairedGates}`, label: `Gate checks repaired${remaining ? ` (${remaining} still failing)` : ''}`, tone: "bg-secondary-soft" })),
                react_1.default.createElement(ui_1.Card, { flat: true, className: "p-4 bg-soft" },
                    react_1.default.createElement("div", { className: "font-mono text-[11px] font-bold uppercase tracking-wide text-muted mb-1" }, "Judge's repair synthesis"),
                    react_1.default.createElement("p", { className: "text-[15px] leading-relaxed text-ink whitespace-pre-wrap" }, session.judgeSynthesis)),
                react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                    react_1.default.createElement(ui_1.Button, { variant: "primary", onClick: onDownloadReport, icon: react_1.default.createElement(lucide_react_1.Download, { className: "w-4 h-4" }) }, "Download Verification Audit Report (.md)"),
                    react_1.default.createElement(ui_1.CopyButton, { size: "md", label: "Copy full telemetry table", text: (0, crucibleUtils_1.buildTelemetryMarkdown)(session, mathParams, session.strictnessLevel) })))),
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-2 mb-2" },
                react_1.default.createElement("h3", { className: "flex items-center gap-2 text-[21px] font-black text-ink" },
                    "Verified final output ",
                    react_1.default.createElement(ui_1.Badge, { tone: "success" }, "Repaired")),
                react_1.default.createElement(ui_1.CopyButton, { text: session.stage4Judge.content, label: "Copy output" })),
            react_1.default.createElement("div", { className: "rounded-lg border-2 border-ink bg-surface p-4" },
                react_1.default.createElement(MarkdownView_1.MarkdownView, { content: session.stage4Judge.content })))));
};
exports.VerdictTab = VerdictTab;

    },
    "./c8s/ui": function(module, exports, require) {
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = exports.EmptyState = exports.CodeBlock = exports.CopyButton = exports.Tabs = exports.Badge = exports.SectionHeader = exports.Card = exports.Button = exports.cx = void 0;
exports.copyToClipboard = copyToClipboard;
exports.useCopy = useCopy;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const cx = (...parts) => parts.filter(Boolean).join(' ');
exports.cx = cx;
/* ------------------------------- clipboard -------------------------------- */
async function copyToClipboard(text) {
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return true;
        }
    }
    catch {
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
    }
    catch {
        return false;
    }
}
function useCopy(resetMs = 1800) {
    const [copied, setCopied] = (0, react_1.useState)(false);
    const timer = (0, react_1.useRef)(undefined);
    (0, react_1.useEffect)(() => () => window.clearTimeout(timer.current), []);
    const copy = (0, react_1.useCallback)((text) => {
        copyToClipboard(text).then((ok) => {
            if (!ok)
                return;
            setCopied(true);
            window.clearTimeout(timer.current);
            timer.current = window.setTimeout(() => setCopied(false), resetMs);
        });
    }, [resetMs]);
    return [copied, copy];
}
const BUTTON_VARIANTS = {
    primary: 'bg-primary text-night',
    secondary: 'bg-secondary text-white',
    ghost: 'bg-card text-ink',
    danger: 'bg-danger text-white',
    dark: 'bg-ink text-surface',
};
const BUTTON_SIZES = {
    sm: 'px-3 py-1.5 text-[12px] shadow-nb-sm hover:shadow-nb',
    md: 'px-4 py-2.5 text-[13px] shadow-nb hover:shadow-nb-lg',
    lg: 'px-6 py-3.5 text-[15px] shadow-nb hover:shadow-nb-lg',
};
const Button = ({ variant = 'ghost', size = 'md', loading = false, icon, className, children, disabled, type = 'button', ...rest }) => (react_1.default.createElement("button", { type: type, disabled: disabled || loading, className: (0, exports.cx)('inline-flex items-center justify-center gap-2 rounded-md border-2 border-ink font-mono font-bold uppercase tracking-wide', 'transition-all duration-100 motion-reduce:transition-none select-none', 'hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none', 'disabled:opacity-45 disabled:pointer-events-none disabled:shadow-none', BUTTON_VARIANTS[variant], BUTTON_SIZES[size], className), ...rest },
    loading ? react_1.default.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin" }) : icon,
    children));
exports.Button = Button;
/* ---------------------------------- card ---------------------------------- */
const Card = ({ className, children, flat }) => (react_1.default.createElement("div", { className: (0, exports.cx)('bg-card border-2 border-ink rounded-lg', !flat && 'shadow-nb', className) }, children));
exports.Card = Card;
const SectionHeader = ({ step, title, subtitle, right }) => (react_1.default.createElement("div", { className: "flex flex-wrap items-end justify-between gap-3 mb-4" },
    react_1.default.createElement("div", { className: "flex items-start gap-3" },
        step && (react_1.default.createElement("span", { className: "mt-0.5 inline-flex items-center justify-center min-w-[2.5rem] h-10 px-2 rounded-md border-2 border-ink bg-secondary text-white font-mono text-[15px] font-black shadow-nb-sm" }, step)),
        react_1.default.createElement("div", null,
            react_1.default.createElement("h2", { className: "text-[21px] sm:text-[27px] leading-tight font-black tracking-tight text-ink" }, title),
            subtitle && react_1.default.createElement("p", { className: "text-[15px] text-muted mt-0.5 max-w-2xl" }, subtitle))),
    right));
exports.SectionHeader = SectionHeader;
const BADGE_TONES = {
    neutral: 'bg-soft text-ink',
    primary: 'bg-primary text-night',
    secondary: 'bg-secondary text-white',
    success: 'bg-success-soft text-ink',
    warning: 'bg-warning-soft text-ink',
    danger: 'bg-danger-soft text-ink',
    dangerSolid: 'bg-danger text-white',
    dark: 'bg-ink text-surface',
};
const Badge = ({ tone = 'neutral', className, children, style, title }) => (react_1.default.createElement("span", { title: title, style: style, className: (0, exports.cx)('inline-flex items-center gap-1 rounded border-2 border-ink px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wide whitespace-nowrap', BADGE_TONES[tone], className) }, children));
exports.Badge = Badge;
/* ---------------------------------- tabs ---------------------------------- */
const Tabs = ({ tabs, active, onChange, label }) => {
    const onKeyDown = (e) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft')
            return;
        e.preventDefault();
        const index = tabs.findIndex((t) => t.id === active);
        const next = e.key === 'ArrowRight'
            ? tabs[(index + 1) % tabs.length]
            : tabs[(index - 1 + tabs.length) % tabs.length];
        onChange(next.id);
        const el = document.getElementById(`tab-${next.id}`);
        if (el)
            el.focus();
    };
    return (react_1.default.createElement("div", { role: "tablist", "aria-label": label, onKeyDown: onKeyDown, className: "flex flex-wrap gap-2" }, tabs.map((tab) => {
        const selected = tab.id === active;
        return (react_1.default.createElement("button", { key: tab.id, id: `tab-${tab.id}`, role: "tab", type: "button", "aria-selected": selected, "aria-controls": `panel-${tab.id}`, tabIndex: selected ? 0 : -1, onClick: () => onChange(tab.id), className: (0, exports.cx)('inline-flex items-center gap-2 rounded-md border-2 border-ink px-3.5 py-2 font-mono text-[13px] font-bold uppercase tracking-wide transition-all duration-100 motion-reduce:transition-none', selected
                ? 'bg-primary text-night shadow-nb -translate-x-0.5 -translate-y-0.5'
                : 'bg-card text-ink hover:bg-soft') },
            tab.label,
            tab.badge));
    })));
};
exports.Tabs = Tabs;
/* ------------------------------ code + helpers ----------------------------- */
const CopyButton = ({ text, label = 'Copy', size = 'sm', variant = 'ghost', disabled }) => {
    const [copied, copy] = useCopy();
    return (react_1.default.createElement(exports.Button, { size: size, variant: variant, disabled: disabled, onClick: () => copy(text), icon: copied ? react_1.default.createElement(lucide_react_1.Check, { className: "w-3.5 h-3.5" }) : react_1.default.createElement(lucide_react_1.Copy, { className: "w-3.5 h-3.5" }), "aria-live": "polite" }, copied ? 'Copied' : label));
};
exports.CopyButton = CopyButton;
const CodeBlock = ({ code, language, maxHeight = 'max-h-[560px]' }) => (react_1.default.createElement("div", { className: "my-3 rounded-md border-2 border-ink overflow-hidden bg-soft" },
    react_1.default.createElement("div", { className: "flex items-center justify-between gap-2 px-3 py-1.5 border-b-2 border-ink bg-card" },
        react_1.default.createElement("span", { className: "font-mono text-[11px] font-bold uppercase tracking-wider text-muted" }, language || 'text'),
        react_1.default.createElement(exports.CopyButton, { text: code })),
    react_1.default.createElement("pre", { tabIndex: 0, className: (0, exports.cx)('p-3.5 font-mono text-[13px] leading-relaxed text-ink overflow-auto', maxHeight) },
        react_1.default.createElement("code", null, code))));
exports.CodeBlock = CodeBlock;
const EmptyState = ({ title, body, icon }) => (react_1.default.createElement("div", { className: "rounded-lg border-2 border-dashed border-ink bg-soft px-6 py-12 text-center" },
    icon && react_1.default.createElement("div", { className: "mx-auto mb-3 w-fit text-ink" }, icon),
    react_1.default.createElement("h3", { className: "text-[17px] font-black text-ink" }, title),
    react_1.default.createElement("p", { className: "mt-1 text-[15px] text-muted max-w-md mx-auto" }, body)));
exports.EmptyState = EmptyState;
const Slider = ({ label, valueLabel, min, max, step, value, onChange, hint, id }) => (react_1.default.createElement("div", { className: "rounded-md border-2 border-ink bg-card p-3.5" },
    react_1.default.createElement("div", { className: "flex items-center justify-between gap-2 mb-2" },
        react_1.default.createElement("label", { htmlFor: id, className: "font-mono text-[12px] font-bold uppercase tracking-wide text-ink" }, label),
        react_1.default.createElement(exports.Badge, { tone: "primary" }, valueLabel)),
    react_1.default.createElement("input", { id: id, type: "range", min: min, max: max, step: step, value: value, onChange: (e) => onChange(parseFloat(e.target.value)), className: "nb-range w-full" }),
    react_1.default.createElement("p", { className: "mt-1.5 font-mono text-[11px] text-muted" }, hint)));
exports.Slider = Slider;

    },
    "./h3s/useCruciblePipeline": function(module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCruciblePipeline = useCruciblePipeline;
const react_1 = require("react");
const apiService_1 = require("../s6s/apiService");
const crucibleUtils_1 = require("../u3s/crucibleUtils");
const STORAGE = {
    keys: 'crucible_v2_api_keys',
    prompts: 'crucible_v2_system_prompts',
    agents: 'crucible_v2_agents',
    theme: 'crucible_v2_theme',
    strictness: 'crucible_v2_strictness',
};
function readJson(key) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : null;
    }
    catch {
        return null;
    }
}
function writeJson(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    }
    catch {
        // Storage may be unavailable (private mode); the app keeps working in memory.
    }
}
const isProvider = (value) => typeof value === 'string' && apiService_1.PROVIDER_ORDER.includes(value);
function emptyKeys() {
    return { gemini: '', openai: '', anthropic: '', groq: '', openrouter: '' };
}
function loadKeys() {
    const stored = readJson(STORAGE.keys);
    const keys = emptyKeys();
    if (stored) {
        for (const p of apiService_1.PROVIDER_ORDER) {
            if (typeof stored[p] === 'string')
                keys[p] = stored[p];
        }
    }
    return keys;
}
function loadPrompts() {
    const stored = readJson(STORAGE.prompts);
    const pick = (value, fallback) => typeof value === 'string' && value.trim() ? value : fallback;
    return {
        builder: pick(stored?.builder, apiService_1.DEFAULT_SYSTEM_PROMPTS.builder),
        redTeam: pick(stored?.redTeam, apiService_1.DEFAULT_SYSTEM_PROMPTS.redTeam),
        judge: pick(stored?.judge, apiService_1.DEFAULT_SYSTEM_PROMPTS.judge),
    };
}
function defaultAgents() {
    return {
        builder: {
            slotId: 'builder',
            stageNumber: 1,
            title: 'The Architect',
            role: 'Builder agent',
            provider: 'openai',
            model: apiService_1.DEFAULT_PROVIDER_CONFIG.openai.defaultModel,
        },
        redTeam: {
            slotId: 'redTeam',
            stageNumber: 2,
            title: 'Red-Team Prosecutor',
            role: 'Adversarial critic',
            provider: 'anthropic',
            model: apiService_1.DEFAULT_PROVIDER_CONFIG.anthropic.defaultModel,
        },
        judge: {
            slotId: 'judge',
            stageNumber: 4,
            title: 'Chief Judge',
            role: 'Synthesizer & repair engine',
            provider: 'gemini',
            model: apiService_1.DEFAULT_PROVIDER_CONFIG.gemini.defaultModel,
        },
    };
}
function loadAgents() {
    const agents = defaultAgents();
    const stored = readJson(STORAGE.agents);
    if (stored) {
        Object.keys(agents).forEach((slot) => {
            const entry = stored[slot];
            if (entry && isProvider(entry.provider) && typeof entry.model === 'string' && entry.model) {
                agents[slot] = { ...agents[slot], provider: entry.provider, model: entry.model };
            }
        });
    }
    return agents;
}
function emptyStage(provider, model) {
    return {
        status: 'idle',
        content: '',
        error: null,
        startedAt: null,
        completedAt: null,
        latencyMs: 0,
        inputTokens: 0,
        outputTokens: 0,
        apiCalls: 0,
        provider,
        model,
        tokensReported: true,
    };
}
function idleSession(agents, strictness) {
    return {
        exampleId: null,
        prompt: '',
        isRunning: false,
        activeStage: 0,
        startedAt: null,
        finishedAt: null,
        strictnessLevel: strictness,
        stage1Builder: emptyStage(agents.builder.provider, agents.builder.model),
        stage2RedTeam: emptyStage(agents.redTeam.provider, agents.redTeam.model),
        stage3Heuristic: emptyStage(null, 'Crucible rule engine'),
        stage4Judge: emptyStage(agents.judge.provider, agents.judge.model),
        prosecutorSummary: '',
        failureModes: [],
        heuristicChecks: [],
        judgeSynthesis: '',
        judgeReportedConfidence: null,
        confidence: null,
    };
}
function initialState() {
    const agents = loadAgents();
    const storedStrictness = readJson(STORAGE.strictness);
    const strictness = storedStrictness && storedStrictness in crucibleUtils_1.STRICTNESS_PRESETS ? storedStrictness : 'ruthless';
    const preset = crucibleUtils_1.STRICTNESS_PRESETS[strictness];
    const providerConfig = {};
    const pings = {};
    for (const p of apiService_1.PROVIDER_ORDER) {
        providerConfig[p] = { ...apiService_1.DEFAULT_PROVIDER_CONFIG[p] };
        pings[p] = null;
    }
    return {
        version: '2.0.0',
        strictnessLevel: strictness,
        providerConfig,
        apiKeys: loadKeys(),
        pings,
        agents,
        systemPrompts: loadPrompts(),
        mathParams: { p: 0.85, d: preset.d, r: preset.r, n: 20 },
        diffViewMode: 'annotated-diff',
        session: idleSession(agents, strictness),
    };
}
function useCruciblePipeline() {
    const [isDark, setIsDark] = (0, react_1.useState)(() => {
        try {
            return localStorage.getItem(STORAGE.theme) === 'dark';
        }
        catch {
            return false;
        }
    });
    const [state, setState] = (0, react_1.useState)(initialState);
    const stateRef = (0, react_1.useRef)(state);
    stateRef.current = state;
    const abortRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        document.documentElement.classList.toggle('dark', isDark);
        try {
            localStorage.setItem(STORAGE.theme, isDark ? 'dark' : 'light');
        }
        catch {
            // Ignore storage failures.
        }
    }, [isDark]);
    (0, react_1.useEffect)(() => {
        const compact = {};
        Object.keys(state.agents).forEach((slot) => {
            compact[slot] = { provider: state.agents[slot].provider, model: state.agents[slot].model };
        });
        writeJson(STORAGE.agents, compact);
        writeJson(STORAGE.strictness, state.strictnessLevel);
    }, [state.agents, state.strictnessLevel]);
    const toggleTheme = (0, react_1.useCallback)(() => setIsDark((prev) => !prev), []);
    /* ----------------------------- configuration ----------------------------- */
    const setApiKey = (0, react_1.useCallback)((provider, key) => {
        setState((prev) => {
            const apiKeys = { ...prev.apiKeys, [provider]: key };
            writeJson(STORAGE.keys, apiKeys);
            return { ...prev, apiKeys, pings: { ...prev.pings, [provider]: null } };
        });
    }, []);
    const setAgentProvider = (0, react_1.useCallback)((slot, provider) => {
        setState((prev) => {
            if (prev.agents[slot].provider === provider)
                return prev;
            return {
                ...prev,
                agents: {
                    ...prev.agents,
                    [slot]: {
                        ...prev.agents[slot],
                        provider,
                        model: prev.providerConfig[provider].defaultModel,
                    },
                },
            };
        });
    }, []);
    const setAgentModel = (0, react_1.useCallback)((slot, model) => {
        setState((prev) => ({
            ...prev,
            agents: { ...prev.agents, [slot]: { ...prev.agents[slot], model } },
        }));
    }, []);
    const testConnection = (0, react_1.useCallback)(async (provider) => {
        const key = stateRef.current.apiKeys[provider];
        setState((prev) => ({
            ...prev,
            pings: {
                ...prev.pings,
                [provider]: {
                    provider,
                    status: 'Testing',
                    latencyMs: null,
                    message: 'Contacting provider…',
                    testedAt: Date.now(),
                },
            },
        }));
        const { ping, models } = await (0, apiService_1.testProviderConnection)(provider, key);
        setState((prev) => {
            let providerConfig = prev.providerConfig;
            let agents = prev.agents;
            if (ping.status === 'Connected' && models.length > 0) {
                const preferred = models.find((m) => m.id === prev.providerConfig[provider].defaultModel);
                providerConfig = {
                    ...prev.providerConfig,
                    [provider]: {
                        ...prev.providerConfig[provider],
                        models,
                        isLiveList: true,
                        defaultModel: preferred ? preferred.id : models[0].id,
                    },
                };
                const nextAgents = { ...prev.agents };
                Object.keys(nextAgents).forEach((slot) => {
                    const agent = nextAgents[slot];
                    if (agent.provider === provider && !models.some((m) => m.id === agent.model)) {
                        nextAgents[slot] = { ...agent, model: providerConfig[provider].defaultModel };
                    }
                });
                agents = nextAgents;
            }
            return { ...prev, providerConfig, agents, pings: { ...prev.pings, [provider]: ping } };
        });
    }, []);
    const setStrictness = (0, react_1.useCallback)((level) => {
        const preset = crucibleUtils_1.STRICTNESS_PRESETS[level];
        setState((prev) => ({
            ...prev,
            strictnessLevel: level,
            mathParams: { ...prev.mathParams, d: preset.d, r: preset.r },
        }));
    }, []);
    const updateMathParams = (0, react_1.useCallback)((partial) => {
        setState((prev) => ({ ...prev, mathParams: { ...prev.mathParams, ...partial } }));
    }, []);
    const setDiffViewMode = (0, react_1.useCallback)((mode) => {
        setState((prev) => ({ ...prev, diffViewMode: mode }));
    }, []);
    const updateSystemPrompt = (0, react_1.useCallback)((role, value) => {
        setState((prev) => {
            const systemPrompts = { ...prev.systemPrompts, [role]: value };
            writeJson(STORAGE.prompts, systemPrompts);
            return { ...prev, systemPrompts };
        });
    }, []);
    const resetSystemPrompt = (0, react_1.useCallback)((role) => {
        setState((prev) => {
            const systemPrompts = { ...prev.systemPrompts, [role]: apiService_1.DEFAULT_SYSTEM_PROMPTS[role] };
            writeJson(STORAGE.prompts, systemPrompts);
            return { ...prev, systemPrompts };
        });
    }, []);
    /* ------------------------------- readiness ------------------------------- */
    const agentSlots = ['builder', 'redTeam', 'judge'];
    const missingKeyProviders = Array.from(new Set(agentSlots
        .map((slot) => state.agents[slot].provider)
        .filter((provider) => !state.apiKeys[provider].trim())));
    const isReady = missingKeyProviders.length === 0 && agentSlots.every((slot) => Boolean(state.agents[slot].model));
    /* ------------------------------- pipeline -------------------------------- */
    const stopRun = (0, react_1.useCallback)(() => {
        if (abortRef.current)
            abortRef.current.abort();
    }, []);
    const runVerification = (0, react_1.useCallback)(async (promptText, exampleId = null) => {
        const prompt = promptText.trim();
        const snap = stateRef.current;
        if (!prompt || snap.session.isRunning)
            return;
        const { agents, apiKeys, systemPrompts, strictnessLevel } = snap;
        const slots = ['builder', 'redTeam', 'judge'];
        if (slots.some((slot) => !apiKeys[agents[slot].provider].trim() || !agents[slot].model))
            return;
        const controller = new AbortController();
        abortRef.current = controller;
        const signal = controller.signal;
        const patch = (fn) => setState((prev) => ({ ...prev, session: fn(prev.session) }));
        const fail = (key, err, content = '') => {
            const aborted = err instanceof Error && err.name === 'AbortError';
            const message = aborted
                ? 'Run stopped by user.'
                : err instanceof Error
                    ? err.message
                    : 'Unexpected error.';
            patch((s) => ({
                ...s,
                isRunning: false,
                finishedAt: Date.now(),
                [key]: {
                    ...s[key],
                    status: 'error',
                    error: message,
                    content: content || s[key].content,
                    completedAt: Date.now(),
                },
            }));
        };
        const call = (slot, systemPrompt, userPrompt, jsonMode) => (0, apiService_1.generateLiveCompletion)({
            provider: agents[slot].provider,
            apiKey: apiKeys[agents[slot].provider],
            model: agents[slot].model,
            systemPrompt,
            prompt: userPrompt,
            jsonMode,
            signal,
        });
        const runStart = Date.now();
        const fresh = idleSession(agents, strictnessLevel);
        setState((prev) => ({
            ...prev,
            session: {
                ...fresh,
                exampleId,
                prompt,
                isRunning: true,
                activeStage: 1,
                startedAt: runStart,
                stage1Builder: { ...fresh.stage1Builder, status: 'running', startedAt: runStart },
            },
        }));
        /* Stage 1 — The Architect */
        let draft;
        try {
            draft = await call('builder', systemPrompts.builder, prompt, false);
        }
        catch (err) {
            fail('stage1Builder', err);
            return;
        }
        const stage2Start = Date.now();
        patch((s) => ({
            ...s,
            activeStage: 2,
            stage1Builder: {
                ...s.stage1Builder,
                status: 'completed',
                content: draft.text,
                completedAt: Date.now(),
                latencyMs: draft.latencyMs,
                inputTokens: draft.inputTokens,
                outputTokens: draft.outputTokens,
                apiCalls: 1,
                tokensReported: draft.tokensReported,
            },
            stage2RedTeam: { ...s.stage2RedTeam, status: 'running', startedAt: stage2Start },
        }));
        /* Stage 2 — Red-Team Prosecutor (one repair retry if the JSON is malformed) */
        const redTeamPrompt = (0, apiService_1.buildRedTeamPrompt)({
            userPrompt: prompt,
            stage1Draft: draft.text,
            strictnessLevel,
        });
        const totals = { input: 0, output: 0, latency: 0, calls: 0, reported: true };
        let parsedRedTeam = null;
        let lastRaw = '';
        try {
            for (let attempt = 0; attempt < 2 && !parsedRedTeam; attempt++) {
                const userPrompt = attempt === 0
                    ? redTeamPrompt
                    : `${redTeamPrompt}\n\nYour previous reply was not valid JSON. Reply again with ONLY the JSON object, no prose and no code fences.`;
                const res = await call('redTeam', systemPrompts.redTeam, userPrompt, true);
                totals.input += res.inputTokens;
                totals.output += res.outputTokens;
                totals.latency += res.latencyMs;
                totals.calls += 1;
                totals.reported = totals.reported && res.tokensReported;
                lastRaw = res.text;
                parsedRedTeam = (0, crucibleUtils_1.parseRedTeamOutput)(res.text, draft.text);
            }
        }
        catch (err) {
            fail('stage2RedTeam', err);
            return;
        }
        if (!parsedRedTeam) {
            fail('stage2RedTeam', new Error('The Red-Team model did not return valid JSON after two attempts. Choose a stronger model for Stage 2 or relax your custom prompt.'), lastRaw);
            return;
        }
        const redTeam = parsedRedTeam;
        /* Stage 3 — Deterministic heuristic & schema gate (local, zero API calls) */
        const gateStart = performance.now();
        const gateChecks = (0, crucibleUtils_1.runDeterministicGate)(draft.text, null);
        const gateMs = Math.max(1, Math.round(performance.now() - gateStart));
        const stage4Start = Date.now();
        patch((s) => ({
            ...s,
            activeStage: 4,
            prosecutorSummary: redTeam.summary,
            failureModes: redTeam.failureModes,
            heuristicChecks: gateChecks,
            stage2RedTeam: {
                ...s.stage2RedTeam,
                status: 'completed',
                content: redTeam.summary,
                completedAt: Date.now(),
                latencyMs: totals.latency,
                inputTokens: totals.input,
                outputTokens: totals.output,
                apiCalls: totals.calls,
                tokensReported: totals.reported,
            },
            stage3Heuristic: {
                ...s.stage3Heuristic,
                status: 'completed',
                content: `${gateChecks.length} deterministic checks executed locally.`,
                startedAt: stage4Start - gateMs,
                completedAt: stage4Start,
                latencyMs: gateMs,
            },
            stage4Judge: { ...s.stage4Judge, status: 'running', startedAt: stage4Start },
        }));
        /* Stage 4 — Chief Judge */
        const judgePrompt = (0, apiService_1.buildJudgePrompt)({
            userPrompt: prompt,
            stage1Draft: draft.text,
            prosecutorSummary: redTeam.summary,
            failureModes: redTeam.failureModes,
            heuristicChecks: gateChecks,
            strictnessLevel,
        });
        let judgeRes;
        try {
            judgeRes = await call('judge', systemPrompts.judge, judgePrompt, false);
        }
        catch (err) {
            fail('stage4Judge', err);
            return;
        }
        const verdict = (0, crucibleUtils_1.parseJudgeOutput)(judgeRes.text);
        if (!verdict.verifiedOutput.trim()) {
            fail('stage4Judge', new Error('The Chief Judge returned an empty verified output.'));
            return;
        }
        const finalChecks = (0, crucibleUtils_1.runDeterministicGate)(draft.text, verdict.verifiedOutput);
        const confidence = (0, crucibleUtils_1.computeConfidence)(verdict.confidence, finalChecks, redTeam.failureModes);
        const synthesis = verdict.synthesis ||
            'The Judge did not follow the requested response layout, so its full reply is shown below as the verified output.';
        patch((s) => ({
            ...s,
            isRunning: false,
            finishedAt: Date.now(),
            heuristicChecks: finalChecks,
            judgeSynthesis: synthesis,
            judgeReportedConfidence: verdict.confidence,
            confidence,
            stage4Judge: {
                ...s.stage4Judge,
                status: 'completed',
                content: verdict.verifiedOutput,
                completedAt: Date.now(),
                latencyMs: judgeRes.latencyMs,
                inputTokens: judgeRes.inputTokens,
                outputTokens: judgeRes.outputTokens,
                apiCalls: 1,
                tokensReported: judgeRes.tokensReported,
            },
        }));
    }, []);
    return {
        state,
        session: state.session,
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
    };
}

    },
    "./s6s/apiService": function(module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_SYSTEM_PROMPTS = exports.DEFAULT_PROVIDER_CONFIG = exports.PROVIDER_ORDER = void 0;
exports.getModelPricing = getModelPricing;
exports.fetchProviderModels = fetchProviderModels;
exports.testProviderConnection = testProviderConnection;
exports.generateLiveCompletion = generateLiveCompletion;
exports.estimateTokens = estimateTokens;
exports.buildRedTeamPrompt = buildRedTeamPrompt;
exports.buildJudgePrompt = buildJudgePrompt;
exports.PROVIDER_ORDER = [
    'openai',
    'anthropic',
    'gemini',
    'groq',
    'openrouter',
];
exports.DEFAULT_PROVIDER_CONFIG = {
    gemini: {
        provider: 'gemini',
        label: 'Google Gemini',
        shortLabel: 'Gemini',
        placeholder: 'AIzaSy…',
        keyHelpUrl: 'https://aistudio.google.com/apikey',
        models: [
            { id: 'gemini-2.0-flash', displayName: 'Gemini 2.0 Flash' },
            { id: 'gemini-1.5-pro', displayName: 'Gemini 1.5 Pro' },
            { id: 'gemini-1.5-flash', displayName: 'Gemini 1.5 Flash' },
        ],
        isLiveList: false,
        defaultModel: 'gemini-2.0-flash',
    },
    openai: {
        provider: 'openai',
        label: 'OpenAI',
        shortLabel: 'OpenAI',
        placeholder: 'sk-proj-…',
        keyHelpUrl: 'https://platform.openai.com/api-keys',
        models: [
            { id: 'gpt-4o', displayName: 'GPT-4o' },
            { id: 'gpt-4o-mini', displayName: 'GPT-4o mini' },
            { id: 'o3-mini', displayName: 'o3-mini' },
        ],
        isLiveList: false,
        defaultModel: 'gpt-4o',
    },
    anthropic: {
        provider: 'anthropic',
        label: 'Anthropic Claude',
        shortLabel: 'Claude',
        placeholder: 'sk-ant-api03-…',
        keyHelpUrl: 'https://console.anthropic.com/settings/keys',
        models: [
            { id: 'claude-3-5-sonnet-latest', displayName: 'Claude 3.5 Sonnet' },
            { id: 'claude-3-5-haiku-latest', displayName: 'Claude 3.5 Haiku' },
        ],
        isLiveList: false,
        defaultModel: 'claude-3-5-sonnet-latest',
    },
    groq: {
        provider: 'groq',
        label: 'Groq',
        shortLabel: 'Groq',
        placeholder: 'gsk_…',
        keyHelpUrl: 'https://console.groq.com/keys',
        models: [
            { id: 'llama-3.3-70b-versatile', displayName: 'Llama 3.3 70B Versatile' },
            { id: 'llama-3.1-8b-instant', displayName: 'Llama 3.1 8B Instant' },
        ],
        isLiveList: false,
        defaultModel: 'llama-3.3-70b-versatile',
    },
    openrouter: {
        provider: 'openrouter',
        label: 'OpenRouter',
        shortLabel: 'OpenRouter',
        placeholder: 'sk-or-v1-…',
        keyHelpUrl: 'https://openrouter.ai/keys',
        models: [
            { id: 'anthropic/claude-3.5-sonnet', displayName: 'Anthropic: Claude 3.5 Sonnet' },
            { id: 'openai/gpt-4o', displayName: 'OpenAI: GPT-4o' },
            { id: 'google/gemini-2.0-flash-001', displayName: 'Google: Gemini 2.0 Flash' },
            { id: 'meta-llama/llama-3.3-70b-instruct', displayName: 'Meta: Llama 3.3 70B Instruct' },
        ],
        isLiveList: false,
        defaultModel: 'anthropic/claude-3.5-sonnet',
    },
};
const PRICE_RULES = [
    { match: /gpt-4o-mini/i, input: 0.15, output: 0.6 },
    { match: /gpt-4o/i, input: 2.5, output: 10 },
    { match: /gpt-4\.1-mini/i, input: 0.4, output: 1.6 },
    { match: /gpt-4\.1/i, input: 2, output: 8 },
    { match: /o4-mini|o3-mini|o1-mini/i, input: 1.1, output: 4.4 },
    { match: /\bo3\b|o3-2/i, input: 2, output: 8 },
    { match: /\bo1\b|o1-2/i, input: 15, output: 60 },
    { match: /claude-3-5-haiku|claude-3\.5-haiku/i, input: 0.8, output: 4 },
    { match: /haiku-4|haiku-4\.5/i, input: 1, output: 5 },
    { match: /claude-3-haiku/i, input: 0.25, output: 1.25 },
    { match: /opus/i, input: 15, output: 75 },
    { match: /sonnet/i, input: 3, output: 15 },
    { match: /gemini-2\.5-pro/i, input: 1.25, output: 10 },
    { match: /gemini-2\.5-flash/i, input: 0.3, output: 2.5 },
    { match: /gemini-2\.0-flash/i, input: 0.1, output: 0.4 },
    { match: /gemini-1\.5-flash/i, input: 0.075, output: 0.3 },
    { match: /gemini-1\.5-pro/i, input: 1.25, output: 5 },
    { match: /llama-3\.3-70b/i, input: 0.59, output: 0.79 },
    { match: /llama-3\.1-8b/i, input: 0.05, output: 0.08 },
    { match: /mixtral/i, input: 0.24, output: 0.24 },
];
function getModelPricing(model) {
    for (const rule of PRICE_RULES) {
        if (rule.match.test(model)) {
            return { input: rule.input, output: rule.output, known: true };
        }
    }
    return { input: 0, output: 0, known: false };
}
/* -------------------------------------------------------------------------- */
/*  System prompts                                                             */
/* -------------------------------------------------------------------------- */
exports.DEFAULT_SYSTEM_PROMPTS = {
    builder: 'You are Stage 1, The Architect (Builder Agent), in the Crucible.ai closed-loop adversarial verification runtime. ' +
        'Produce a complete, concrete solution to the user task: working code, a SQL migration, a system design, or a technical synthesis. ' +
        'Put all code in fenced code blocks. Do not flatter the user, do not claim the result is perfect or guaranteed, and never invent APIs, library methods, citations, or benchmark numbers. ' +
        'If you are unsure whether something exists, say so explicitly instead of guessing.',
    redTeam: 'You are Stage 2, The Red-Team Prosecutor (Adversarial Critic), in Crucible.ai. ' +
        'ANTI-SYCOPHANCY MANDATE: never politely agree with or praise Stage 1. Assume the draft contains subtle bugs, race conditions, hallucinated APIs, state drift, unsafe operations, and unjustified claims, then try to prove it.\n\n' +
        'Classify every finding with exactly one of these taxonomy badges:\n' +
        '- [STATE DRIFT]  (wrong math, unit errors, off-by-one, state that silently diverges)\n' +
        '- [RLHF SYCOPHANCY]  (flattery, false assurances, vacuous tests, unearned certainty)\n' +
        '- [CONTEXT POLLUTION]  (shared mutable state, leaked context, scope that bleeds between runs)\n' +
        '- [HALLUCINATED API / SCHEMA]  (methods, parameters, settings, citations, or numbers that do not exist)\n' +
        '- [UNHANDLED EDGE CASE / SECURITY]  (missing error handling, injection, races, destructive operations)\n\n' +
        'Rules: every finding MUST quote a snippet that appears verbatim in the Stage 1 draft. Do not invent findings to fill a quota. If a category has no genuine flaw, report nothing for it.\n\n' +
        'Return ONLY a valid JSON object, no markdown fences, matching this schema:\n' +
        '{\n' +
        '  "prosecutorSummary": "Two to four sentences summarising the most serious problems.",\n' +
        '  "failureModes": [\n' +
        '    {\n' +
        '      "id": "FLAW-01",\n' +
        '      "category": "[STATE DRIFT]" | "[RLHF SYCOPHANCY]" | "[CONTEXT POLLUTION]" | "[HALLUCINATED API / SCHEMA]" | "[UNHANDLED EDGE CASE / SECURITY]",\n' +
        '      "severity": "CRITICAL" | "HIGH" | "MEDIUM",\n' +
        '      "flawedSnippet": "Exact text copied from the Stage 1 draft",\n' +
        '      "requiredFix": "Precise, actionable fix"\n' +
        '    }\n' +
        '  ]\n' +
        '}',
    judge: 'You are Stage 4, The Chief Judge (Synthesizer & Repair Engine), in Crucible.ai. ' +
        'Cross-examine the Stage 1 draft against the Stage 2 failure table and the Stage 3 deterministic gate results. ' +
        'Reject any Red-Team finding that is wrong (the Prosecutor can also hallucinate), prune hallucinated APIs and citations, remove flattery and false assurances, and repair every genuine flaw. ' +
        'Keep the original structure and wording wherever it was already correct so the diff stays honest and minimal.\n\n' +
        'Respond using EXACTLY this layout and nothing before or after it:\n' +
        '=====SYNTHESIS=====\n' +
        '<3 to 6 sentences: what you repaired, what you pruned, which findings you rejected and why>\n' +
        '=====CONFIDENCE=====\n' +
        '<a single integer 0-100: your honest confidence the output is now correct>\n' +
        '=====VERIFIED OUTPUT=====\n' +
        '<the complete repaired output, with code in fenced code blocks>',
};
/* -------------------------------------------------------------------------- */
/*  Provider HTTP layer                                                        */
/* -------------------------------------------------------------------------- */
async function readApiError(response, label) {
    let message = `${label} error (HTTP ${response.status})`;
    try {
        const data = await response.json();
        const detail = data?.error?.message ||
            data?.error?.error?.message ||
            (typeof data?.message === 'string' ? data.message : '');
        if (detail)
            message = `${label}: ${detail}`;
    }
    catch {
        // Body was not JSON; keep the generic message.
    }
    return new Error(message);
}
async function fetchProviderModels(provider, rawApiKey, signal) {
    const apiKey = rawApiKey.trim();
    if (!apiKey)
        throw new Error('Enter an API key first.');
    const label = exports.DEFAULT_PROVIDER_CONFIG[provider].label;
    if (provider === 'gemini') {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?pageSize=200&key=${encodeURIComponent(apiKey)}`, { method: 'GET', signal });
        if (!response.ok)
            throw await readApiError(response, label);
        const data = await response.json();
        const raw = Array.isArray(data?.models) ? data.models : [];
        const models = raw
            .filter((m) => typeof m?.name === 'string' &&
            Array.isArray(m.supportedGenerationMethods) &&
            m.supportedGenerationMethods.includes('generateContent'))
            .map((m) => {
            const id = m.name.replace(/^models\//, '');
            return { id, displayName: m.displayName ? `${m.displayName} (${id})` : id };
        });
        if (models.length === 0)
            throw new Error('This Gemini key has no generateContent models.');
        return models;
    }
    if (provider === 'openai') {
        const response = await fetch('https://api.openai.com/v1/models', {
            method: 'GET',
            headers: { Authorization: `Bearer ${apiKey}` },
            signal,
        });
        if (!response.ok)
            throw await readApiError(response, label);
        const data = await response.json();
        const raw = Array.isArray(data?.data) ? data.data : [];
        const include = ['gpt-', 'o1', 'o3', 'o4', 'chatgpt-'];
        const exclude = [
            'realtime',
            'audio',
            'tts',
            'transcribe',
            'whisper',
            'embedding',
            'moderation',
            'dall-e',
            'search',
            'image',
            'instruct',
        ];
        const models = raw
            .filter((m) => {
            if (typeof m?.id !== 'string')
                return false;
            const id = m.id.toLowerCase();
            return include.some((p) => id.startsWith(p)) && !exclude.some((s) => id.includes(s));
        })
            .map((m) => ({ id: m.id, displayName: m.id }))
            .sort((a, b) => a.id.localeCompare(b.id));
        if (models.length === 0)
            throw new Error('This OpenAI key has no compatible chat models.');
        return models;
    }
    if (provider === 'anthropic') {
        const response = await fetch('https://api.anthropic.com/v1/models?limit=100', {
            method: 'GET',
            headers: {
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
                'anthropic-dangerous-direct-browser-access': 'true',
            },
            signal,
        });
        if (!response.ok)
            throw await readApiError(response, label);
        const data = await response.json();
        const raw = Array.isArray(data?.data)
            ? data.data
            : [];
        const models = raw
            .filter((m) => typeof m?.id === 'string')
            .map((m) => ({
            id: m.id,
            displayName: m.display_name ? `${m.display_name} (${m.id})` : m.id,
        }));
        if (models.length === 0)
            throw new Error('This Anthropic key returned no models.');
        return models;
    }
    if (provider === 'groq') {
        const response = await fetch('https://api.groq.com/openai/v1/models', {
            method: 'GET',
            headers: { Authorization: `Bearer ${apiKey}` },
            signal,
        });
        if (!response.ok)
            throw await readApiError(response, label);
        const data = await response.json();
        const raw = Array.isArray(data?.data) ? data.data : [];
        const models = raw
            .filter((m) => {
            if (typeof m?.id !== 'string')
                return false;
            const id = m.id.toLowerCase();
            return !id.includes('whisper') && !id.includes('tts') && !id.includes('guard');
        })
            .map((m) => ({ id: m.id, displayName: m.id }))
            .sort((a, b) => a.id.localeCompare(b.id));
        if (models.length === 0)
            throw new Error('This Groq key returned no chat models.');
        return models;
    }
    const response = await fetch('https://openrouter.ai/api/v1/models', {
        method: 'GET',
        headers: { Authorization: `Bearer ${apiKey}` },
        signal,
    });
    if (!response.ok)
        throw await readApiError(response, label);
    const data = await response.json();
    const raw = Array.isArray(data?.data) ? data.data : [];
    const models = raw
        .filter((m) => typeof m?.id === 'string')
        .map((m) => ({
        id: m.id,
        displayName: m.name ? `${m.name} (${m.id})` : m.id,
    }));
    if (models.length === 0)
        throw new Error('OpenRouter returned no models.');
    return models;
}
/**
 * Test Connection (Ping): performs a real authenticated request against the provider,
 * measures round-trip latency in ms, and returns the live model list on success.
 */
async function testProviderConnection(provider, apiKey) {
    const trimmed = apiKey.trim();
    if (!trimmed) {
        return {
            ping: {
                provider,
                status: 'Invalid Key',
                latencyMs: null,
                message: 'No API key entered.',
                testedAt: Date.now(),
            },
            models: [],
        };
    }
    const start = performance.now();
    try {
        const models = await fetchProviderModels(provider, trimmed);
        const latencyMs = Math.max(1, Math.round(performance.now() - start));
        return {
            ping: {
                provider,
                status: 'Connected',
                latencyMs,
                message: `${models.length} models available`,
                testedAt: Date.now(),
            },
            models,
        };
    }
    catch (err) {
        const latencyMs = Math.max(1, Math.round(performance.now() - start));
        const raw = err instanceof Error ? err.message : 'Request failed';
        const networkIssue = /failed to fetch|networkerror|load failed/i.test(raw);
        return {
            ping: {
                provider,
                status: 'Invalid Key',
                latencyMs: networkIssue ? null : latencyMs,
                message: networkIssue
                    ? 'Network or CORS error: could not reach the provider.'
                    : raw,
                testedAt: Date.now(),
            },
            models: [],
        };
    }
}
async function generateLiveCompletion(params) {
    const { provider, model, systemPrompt, prompt, jsonMode, signal } = params;
    const apiKey = params.apiKey.trim();
    const label = exports.DEFAULT_PROVIDER_CONFIG[provider].label;
    if (!apiKey)
        throw new Error(`Missing ${label} API key.`);
    if (!model)
        throw new Error('No model selected.');
    const started = performance.now();
    const finish = (text, inTok, outTok) => {
        const reported = typeof inTok === 'number' && typeof outTok === 'number';
        return {
            text,
            inputTokens: reported ? inTok : estimateTokens(systemPrompt + prompt),
            outputTokens: reported ? outTok : estimateTokens(text),
            tokensReported: reported,
            latencyMs: Math.max(1, Math.round(performance.now() - started)),
        };
    };
    if (provider === 'gemini') {
        const cleanModel = model.replace(/^models\//, '');
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(cleanModel)}:generateContent?key=${encodeURIComponent(apiKey)}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            signal,
            body: JSON.stringify({
                contents: [{ role: 'user', parts: [{ text: prompt }] }],
                systemInstruction: { parts: [{ text: systemPrompt }] },
                ...(jsonMode ? { generationConfig: { responseMimeType: 'application/json' } } : {}),
            }),
        });
        if (!response.ok)
            throw await readApiError(response, label);
        const data = await response.json();
        const parts = data?.candidates?.[0]?.content?.parts ?? [];
        const text = parts
            .filter((p) => !p.thought)
            .map((p) => p.text || '')
            .join('');
        if (!text.trim()) {
            const reason = data?.candidates?.[0]?.finishReason || data?.promptFeedback?.blockReason;
            throw new Error(`${label} returned an empty response${reason ? ` (${reason})` : ''}.`);
        }
        const usage = data?.usageMetadata;
        const outTok = typeof usage?.candidatesTokenCount === 'number'
            ? usage.candidatesTokenCount + (usage.thoughtsTokenCount || 0)
            : undefined;
        return finish(text, usage?.promptTokenCount, outTok);
    }
    if (provider === 'anthropic') {
        const smallCap = /claude-3-(opus|haiku)/i.test(model);
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
                'anthropic-dangerous-direct-browser-access': 'true',
                'Content-Type': 'application/json',
            },
            signal,
            body: JSON.stringify({
                model,
                max_tokens: smallCap ? 4096 : 8192,
                system: systemPrompt,
                messages: [{ role: 'user', content: prompt }],
            }),
        });
        if (!response.ok)
            throw await readApiError(response, label);
        const data = await response.json();
        const text = Array.isArray(data?.content)
            ? data.content
                .filter((b) => b.type === 'text')
                .map((b) => b.text)
                .join('\n')
            : '';
        if (!text.trim())
            throw new Error(`${label} returned an empty response.`);
        return finish(text, data?.usage?.input_tokens, data?.usage?.output_tokens);
    }
    const endpoints = {
        openai: 'https://api.openai.com/v1/chat/completions',
        groq: 'https://api.groq.com/openai/v1/chat/completions',
        openrouter: 'https://openrouter.ai/api/v1/chat/completions',
    };
    const headers = {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
    };
    if (provider === 'openrouter') {
        headers['HTTP-Referer'] =
            typeof window !== 'undefined' && window.location.origin.startsWith('http')
                ? window.location.origin
                : 'https://crucible.ai';
        headers['X-Title'] = 'Crucible.ai';
    }
    const supportsJsonMode = (provider === 'openai' && /^gpt-/i.test(model)) || provider === 'groq';
    const response = await fetch(endpoints[provider], {
        method: 'POST',
        headers,
        signal,
        body: JSON.stringify({
            model,
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: prompt },
            ],
            ...(jsonMode && supportsJsonMode ? { response_format: { type: 'json_object' } } : {}),
        }),
    });
    if (!response.ok)
        throw await readApiError(response, label);
    const data = await response.json();
    const text = data?.choices?.[0]?.message?.content;
    if (typeof text !== 'string' || !text.trim()) {
        throw new Error(`${label} returned an empty response.`);
    }
    return finish(text, data?.usage?.prompt_tokens, data?.usage?.completion_tokens);
}
function estimateTokens(text) {
    if (!text)
        return 0;
    return Math.max(1, Math.ceil(text.length / 3.8));
}
/* -------------------------------------------------------------------------- */
/*  Stage prompt builders                                                      */
/* -------------------------------------------------------------------------- */
const STRICTNESS_INSTRUCTIONS = {
    standard: 'STRICTNESS: STANDARD AUDIT (d=0.65, r=0.75). Report primary correctness, safety, and schema flaws.',
    ruthless: 'STRICTNESS: RUTHLESS RED-TEAM (d=0.82, r=0.85). Hunt aggressively for race conditions, hallucinated symbols, state drift, unit errors, and unearned certainty.',
    formal: 'STRICTNESS: FORMAL VERIFICATION HARNESS (d=0.92, r=0.90). Demand explicit invariants, idempotency arguments, and evidence for every quantitative or factual claim. Treat any unstated assumption as a finding.',
};
function buildRedTeamPrompt(params) {
    return [
        STRICTNESS_INSTRUCTIONS[params.strictnessLevel],
        '',
        '=== ORIGINAL TASK ===',
        params.userPrompt,
        '',
        '=== STAGE 1 DRAFT (audit this) ===',
        params.stage1Draft,
        '',
        '=== INSTRUCTIONS ===',
        'Do not agree with or praise the draft. Quote exact snippets. Respond with the JSON object described in your system prompt and nothing else.',
    ].join('\n');
}
function buildJudgePrompt(params) {
    const gate = params.heuristicChecks.map((c) => ({
        id: c.id,
        check: c.checkName,
        status: c.stage1Status,
        detail: c.detail,
        evidence: c.evidence,
    }));
    const modes = params.failureModes.map((f) => ({
        id: f.id,
        category: f.category,
        severity: f.severity,
        flawedSnippet: f.flawedSnippet,
        requiredFix: f.requiredFix,
        snippetFoundInDraft: f.groundedInDraft,
    }));
    return [
        STRICTNESS_INSTRUCTIONS[params.strictnessLevel],
        '',
        '=== ORIGINAL TASK ===',
        params.userPrompt,
        '',
        '=== STAGE 1 DRAFT ===',
        params.stage1Draft,
        '',
        '=== STAGE 2 RED-TEAM SUMMARY ===',
        params.prosecutorSummary,
        '',
        '=== STAGE 2 FAILURE MODES (JSON; snippetFoundInDraft=false means the quote could not be located and may be a hallucinated finding) ===',
        JSON.stringify(modes, null, 2),
        '',
        '=== STAGE 3 DETERMINISTIC GATE (JSON) ===',
        JSON.stringify(gate, null, 2),
        '',
        '=== INSTRUCTIONS ===',
        'Repair every genuine flaw and respond in the exact =====SYNTHESIS===== / =====CONFIDENCE===== / =====VERIFIED OUTPUT===== layout from your system prompt.',
    ].join('\n');
}

    },
    "./s6s/exampleTasks": function(module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EXAMPLE_TASKS = void 0;
/**
 * Starter prompts only. They are sent to the real providers like any other task;
 * nothing about the outcome is pre-written.
 */
exports.EXAMPLE_TASKS = [
    {
        id: 'sql-migration',
        label: 'SQL migration agent',
        tag: 'Database safety',
        prompt: 'Design and write a production PostgreSQL 16 zero-downtime migration script and Python saga orchestrator to migrate `tenant_ledger_entries` (420M rows) from a monolithic table with `amount_cents INT` to a hash-partitioned table with `amount_micros BIGINT` and `currency_iso CHAR(3)`. Must enforce transactional safety, lock timeouts, and automated compensating saga rollback.',
    },
    {
        id: 'chronoparse',
        label: 'Chronoparse refactor',
        tag: 'State drift',
        prompt: 'Refactor the `ChronoWindowAggregator` Python class that ingests out-of-order UTC telemetry events `(timestamp_ms, metric_val)`, normalizes ISO-8601 leap-year boundaries, and computes exact inclusive sliding-window percentiles over `[t_start, t_end]`. Include a self-verifying unit test suite.',
    },
    {
        id: 'payments',
        label: 'Payment microservice',
        tag: 'Concurrency',
        prompt: 'Implement a TypeScript/Node.js payment settlement handler `settleMerchantPayout(req, res)` that debits a merchant wallet in PostgreSQL and dispatches an external wire transfer via Stripe/banking API. Must prevent double-spend race conditions under concurrent retries and handle partial network failures.',
    },
    {
        id: 'literature',
        label: 'Literature synthesizer',
        tag: 'Grounding',
        prompt: 'Synthesize an executive technical brief on compounding error rates in multi-step autonomous LLM agents (n=20 horizon), contrasting open-loop autoregressive execution (P(n)=p^n) against closed-loop adversarial verification (p_eff = p + (1-p)dr). Cite only verifiable mathematical derivations and flag any ungrounded empirical claims.',
    },
];

    },
    "./t3s/types": function(module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

    },
    "./u3s/crucibleUtils": function(module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HORIZON_STEPS = exports.TAXONOMY_BADGES = exports.STRICTNESS_PRESETS = void 0;
exports.formatMs = formatMs;
exports.formatUsd = formatUsd;
exports.formatTokens = formatTokens;
exports.runDeterministicGate = runDeterministicGate;
exports.parseRedTeamOutput = parseRedTeamOutput;
exports.parseJudgeOutput = parseJudgeOutput;
exports.computeConfidence = computeConfidence;
exports.computeLineDiff = computeLineDiff;
exports.computeMathSummary = computeMathSummary;
exports.classifyHorizonStatus = classifyHorizonStatus;
exports.computeHorizonTable = computeHorizonTable;
exports.computeCurve = computeCurve;
exports.computeCostBreakdown = computeCostBreakdown;
exports.buildTelemetryMarkdown = buildTelemetryMarkdown;
exports.buildAuditReportMarkdown = buildAuditReportMarkdown;
const apiService_1 = require("../s6s/apiService");
/* -------------------------------------------------------------------------- */
/*  Strictness presets                                                         */
/* -------------------------------------------------------------------------- */
exports.STRICTNESS_PRESETS = {
    standard: {
        id: 'standard',
        label: 'Standard Audit',
        short: 'Standard',
        d: 0.65,
        r: 0.75,
        description: 'Baseline correctness, safety and schema review.',
    },
    ruthless: {
        id: 'ruthless',
        label: 'Ruthless Red-Team',
        short: 'Ruthless',
        d: 0.82,
        r: 0.85,
        description: 'Aggressive hunt for races, state drift and hallucinated symbols.',
    },
    formal: {
        id: 'formal',
        label: 'Formal Verification Harness',
        short: 'Formal',
        d: 0.92,
        r: 0.9,
        description: 'Explicit invariants and evidence for every claim.',
    },
};
exports.TAXONOMY_BADGES = [
    '[STATE DRIFT]',
    '[RLHF SYCOPHANCY]',
    '[CONTEXT POLLUTION]',
    '[HALLUCINATED API / SCHEMA]',
    '[UNHANDLED EDGE CASE / SECURITY]',
];
/* -------------------------------------------------------------------------- */
/*  Formatting helpers                                                         */
/* -------------------------------------------------------------------------- */
function formatMs(ms) {
    if (!ms)
        return '0 ms';
    if (ms < 1000)
        return `${Math.round(ms)} ms`;
    return `${(ms / 1000).toFixed(2)} s`;
}
function formatUsd(value) {
    if (value === 0)
        return '$0.00';
    if (value < 0.01)
        return `$${value.toFixed(5)}`;
    return `$${value.toFixed(4)}`;
}
function formatTokens(value) {
    return Math.round(value).toLocaleString('en-US');
}
function escapeCell(text) {
    return String(text).replace(/\|/g, '\\|').replace(/\s*\n\s*/g, ' ');
}
function fencedBlocks(text) {
    const blocks = [];
    const re = /```[^\n]*\n([\s\S]*?)```/g;
    let match;
    while ((match = re.exec(text)) !== null) {
        blocks.push(match[1]);
    }
    return blocks;
}
/** Code-only view of a response: fenced blocks (or whole text) minus comment-only lines. */
function codeView(text) {
    const blocks = fencedBlocks(text);
    const base = blocks.length > 0 ? blocks.join('\n') : text;
    return base
        .split('\n')
        .filter((line) => !/^\s*(--|\/\/|#|\*|\/\*)/.test(line))
        .join('\n');
}
function proseView(text) {
    return text.replace(/```[\s\S]*?```/g, ' ');
}
function looksLikeCode(text) {
    if (fencedBlocks(text).length > 0)
        return true;
    const lines = text.split('\n').filter((l) => l.trim().length > 0);
    if (lines.length < 4)
        return false;
    return (/\b(function|const|let|def|class|SELECT|INSERT|CREATE|ALTER|import|return|async|await)\b/.test(text) &&
        /[{};=()]/.test(text));
}
function trimEvidence(line) {
    const clean = line.trim().replace(/\s+/g, ' ');
    return clean.length > 120 ? `${clean.slice(0, 117)}…` : clean;
}
function collectLines(text, patterns, max = 4) {
    const found = [];
    for (const line of text.split('\n')) {
        if (patterns.some((p) => p.test(line))) {
            found.push(trimEvidence(line));
            if (found.length >= max)
                break;
        }
    }
    return found;
}
function collectMatches(text, patterns, max = 4) {
    const found = [];
    for (const re of patterns) {
        const m = text.match(re);
        if (m) {
            found.push(trimEvidence(m[0]));
            if (found.length >= max)
                break;
        }
    }
    return found;
}
const notApplicable = (detail) => ({
    status: 'N/A',
    detail,
    evidence: [],
});
const GATE_DEFINITIONS = [
    {
        id: 'GATE-01',
        name: 'Destructive operations',
        category: 'Schema & data safety',
        run: (text) => {
            const view = codeView(text);
            const hard = collectLines(view, [
                /\bDROP\s+(?:TABLE|DATABASE|SCHEMA|COLUMN)\b(?!\s+IF\s+EXISTS)/i,
                /\bDROP\b[^\n]*\bCASCADE\b/i,
                /\bTRUNCATE\s+(?:TABLE\s+)?[\w."`]+/i,
                /\bDELETE\s+FROM\s+[\w."`]+\s*;?\s*$/i,
                /\brm\s+-r?f\s+[/~*]/i,
            ]);
            if (hard.length > 0) {
                return {
                    status: 'FAIL',
                    detail: 'Unguarded destructive statement (DROP / TRUNCATE / DELETE without WHERE / rm -rf).',
                    evidence: hard,
                };
            }
            const soft = collectLines(view, [/\bDROP\s+(?:TABLE|DATABASE|SCHEMA|COLUMN)\s+IF\s+EXISTS/i]);
            if (soft.length > 0) {
                return {
                    status: 'WARN',
                    detail: 'Destructive DROP present. Confirm it is gated behind a parity check and retention window.',
                    evidence: soft,
                };
            }
            return {
                status: 'PASS',
                detail: 'No unguarded destructive statements found.',
                evidence: [],
            };
        },
    },
    {
        id: 'GATE-02',
        name: 'Injection & unsafe execution',
        category: 'Security',
        run: (text) => {
            const view = codeView(text);
            const hard = collectLines(view, [
                /\b(?:SELECT|INSERT\s+INTO|UPDATE|DELETE\s+FROM)\b[^\n]*(?:\$\{[^}]+\}|["'`]\s*\+\s*[A-Za-z_]|\bf["'][^"'\n]*\{[^}]+\}|["']\s*\.format\s*\()/i,
                /\beval\s*\(/,
                /\bnew\s+Function\s*\(/,
                /\bos\.system\s*\(/,
                /shell\s*=\s*True/,
                /(^|[^.\w])exec\s*\(/,
            ]);
            if (hard.length > 0) {
                return {
                    status: 'FAIL',
                    detail: 'String-built SQL or dynamic code execution detected.',
                    evidence: hard,
                };
            }
            const soft = collectLines(view, [/\.innerHTML\s*=/]);
            if (soft.length > 0) {
                return {
                    status: 'WARN',
                    detail: 'Direct innerHTML assignment can enable XSS.',
                    evidence: soft,
                };
            }
            return {
                status: 'PASS',
                detail: 'No string-built SQL or dynamic execution found.',
                evidence: [],
            };
        },
    },
    {
        id: 'GATE-03',
        name: 'Error handling & timeouts',
        category: 'Resilience',
        run: (text) => {
            if (!looksLikeCode(text))
                return notApplicable('No executable code detected.');
            const view = codeView(text);
            const meaningful = view.split('\n').filter((l) => l.trim().length > 0).length;
            const hasErrorHandling = /\b(?:try|catch|except|rescue)\b|\.catch\s*\(|\bROLLBACK\b|RAISE\s+EXCEPTION|\.ok\b|raise_for_status|\bthrow\b|\braise\b|\bif\s*\(\s*!\s*\w+/i.test(view);
            const hasNetwork = /\b(?:fetch|axios\.\w+|requests\.(?:get|post|put|delete|patch)|urlopen|http\.request)\s*\(/.test(view);
            const hasTimeout = /timeout|AbortSignal|signal\s*:/i.test(view);
            const openTxn = /^\s*(?:BEGIN|START\s+TRANSACTION)\s*;\s*$/im.test(view) && !/\b(?:COMMIT|ROLLBACK)\b/i.test(view);
            if (openTxn) {
                return {
                    status: 'FAIL',
                    detail: 'Transaction opened with BEGIN but no COMMIT or ROLLBACK path.',
                    evidence: collectLines(view, [/^\s*(?:BEGIN|START\s+TRANSACTION)\s*;/i], 2),
                };
            }
            if (meaningful >= 6 && !hasErrorHandling) {
                return {
                    status: 'FAIL',
                    detail: 'No error handling found (try/catch, except, status checks, rollback).',
                    evidence: [],
                };
            }
            if (hasNetwork && !hasTimeout) {
                return {
                    status: 'WARN',
                    detail: 'Network call without an explicit timeout or abort signal.',
                    evidence: collectLines(view, [/\b(?:fetch|axios\.\w+|requests\.\w+|urlopen|http\.request)\s*\(/], 2),
                };
            }
            return {
                status: 'PASS',
                detail: 'Error handling present and network calls are bounded.',
                evidence: [],
            };
        },
    },
    {
        id: 'GATE-04',
        name: 'Idempotency & concurrency guards',
        category: 'Distributed systems',
        run: (text) => {
            if (!looksLikeCode(text))
                return notApplicable('No executable code detected.');
            const view = codeView(text);
            const hasWrite = /\b(?:INSERT\s+INTO|UPDATE\s+\w+\s+SET|DELETE\s+FROM)\b|\.(?:post|put|patch)\s*\(|method\s*:\s*['"](?:POST|PUT|PATCH)|\b(?:transfers?|charges?|payouts?|refunds?)\.create/i.test(view);
            if (!hasWrite)
                return notApplicable('No write operations detected.');
            const hasGuard = /idempot|ON\s+CONFLICT|IF\s+NOT\s+EXISTS|FOR\s+UPDATE|SKIP\s+LOCKED|UNIQUE|upsert|lock_timeout|advisory|mutex|semaphore|SERIALIZABLE|\bversion\b\s*=|etag/i.test(view);
            if (!hasGuard) {
                return {
                    status: 'WARN',
                    detail: 'Write path with no idempotency key, row lock, upsert, or version check.',
                    evidence: collectLines(view, [/\b(?:INSERT\s+INTO|UPDATE\s+\w+\s+SET|DELETE\s+FROM)\b|\.(?:post|put|patch)\s*\(/i], 2),
                };
            }
            return {
                status: 'PASS',
                detail: 'Write path shows idempotency or locking evidence.',
                evidence: [],
            };
        },
    },
    {
        id: 'GATE-05',
        name: 'Placeholders & unfinished work',
        category: 'Completeness',
        run: (text) => {
            const evidence = collectLines(text, [
                /\b(?:TODO|FIXME|TBD)\b/,
                /NotImplemented(?:Error)?/,
                /\blorem ipsum\b/i,
                /\b(?:YOUR|your)[_-](?:API[_-])?(?:KEY|TOKEN|SECRET)\b/,
                /<\s*your[\w\s-]*>/i,
                /^\s*\.\.\.\s*$/,
            ]);
            if (evidence.length > 0) {
                return {
                    status: 'FAIL',
                    detail: 'Placeholder or unfinished marker left in the output.',
                    evidence,
                };
            }
            return { status: 'PASS', detail: 'No placeholders found.', evidence: [] };
        },
    },
    {
        id: 'GATE-06',
        name: 'Sycophancy & false assurance',
        category: 'Epistemic integrity',
        run: (text) => {
            const strong = collectMatches(text, [
                /you(?:'re|\s+are)\s+(?:absolutely|completely|totally|entirely)\s+right/i,
                /\bgreat\s+(?:question|catch|point|idea)\b/i,
                /\bas\s+you\s+(?:rightly|correctly|astutely)\s+\w+/i,
                /\brightly\s+noted\b/i,
                /\bguarantee[sd]?\s+(?:100\s*%|zero|no\s+(?:errors?|bugs?|failures?|hallucinations?)|perfect|fault[- ]free)/i,
                /\b100(?:\.0+)?\s*%\s*(?:safe|correct|reliable|fault[- ]free|accurate|bug[- ]free|zero[- ]hallucination)/i,
                /\bzero[- ](?:risk|errors?|bugs?|hallucinations?)\b/i,
                /\bassert\s+True\b/,
                /\ball\s+\d+\s+(?:unit\s+)?tests?\s+pass/i,
            ]);
            if (strong.length > 0) {
                return {
                    status: 'FAIL',
                    detail: 'Flattery, unearned certainty, or a vacuous assertion.',
                    evidence: strong,
                };
            }
            const soft = collectMatches(text, [
                /\bproduction[- ]ready\b/i,
                /\bbulletproof\b|\bflawless\b|\bfool[- ]?proof\b/i,
                /\bthread[- ]safe\b/i,
            ]);
            if (soft.length > 0) {
                return {
                    status: 'WARN',
                    detail: 'Absolute-quality claim that the output itself does not demonstrate.',
                    evidence: soft,
                };
            }
            return { status: 'PASS', detail: 'No sycophantic or overconfident language found.', evidence: [] };
        },
    },
    {
        id: 'GATE-07',
        name: 'Ungrounded claims & citations',
        category: 'Hallucination risk',
        run: (text) => {
            const prose = proseView(text);
            const citations = collectMatches(prose, [
                /\bdoi\.org\/\S+/i,
                /\b10\.\d{4,9}\/[^\s)\]]+/,
                /\bet\s+al\.?,?\s*\(?(?:19|20)\d{2}/i,
                /\([A-Z][A-Za-z]+(?:\s+(?:&|and)\s+[A-Z][A-Za-z]+)?,?\s+(?:19|20)\d{2}\)/,
                /\barXiv:\d{4}\.\d{4,5}/i,
            ]);
            if (citations.length > 0) {
                return {
                    status: 'WARN',
                    detail: 'Citation-like references found. Crucible cannot resolve sources offline, so verify each manually.',
                    evidence: citations,
                };
            }
            const claims = collectMatches(prose, [
                /\b\d+(?:\.\d+)?\s*%[^.\n]{0,70}\b(?:improv|increas|reduc|faster|slower|accura|resolution|latency|overhead|success|fewer|more)\w*/i,
                /\b(?:improv|increas|reduc|faster|slower|accura|resolution|latency|overhead|success)\w*[^.\n]{0,70}\b\d+(?:\.\d+)?\s*%/i,
            ]);
            const hasDerivation = /[=≈]|\$\$|\\frac|\^\{?\d/.test(prose);
            if (claims.length > 0 && !hasDerivation) {
                return {
                    status: 'WARN',
                    detail: 'Quantitative performance claim with no derivation or source in the text.',
                    evidence: claims,
                };
            }
            return {
                status: 'PASS',
                detail: 'No unsourced citations or unsupported quantitative claims detected.',
                evidence: [],
            };
        },
    },
    {
        id: 'GATE-08',
        name: 'State drift & shared mutable state',
        category: 'State integrity',
        run: (text) => {
            if (!looksLikeCode(text))
                return notApplicable('No executable code detected.');
            const view = codeView(text);
            const hard = collectLines(view, [
                /\bdef\s+\w+\s*\([^)]*=\s*(?:\[\]|\{\}|set\(\)|dict\(\)|list\(\))/,
                /\b(?:globalThis|window)\.\w+\s*(?:=|\|\|)/,
                /^\s*global\s+\w+/,
            ]);
            if (hard.length > 0) {
                return {
                    status: 'FAIL',
                    detail: 'Mutable default argument or shared global state can leak between calls.',
                    evidence: hard,
                };
            }
            const soft = collectLines(view, [/\bexcept\s*:/]);
            if (soft.length > 0) {
                return {
                    status: 'WARN',
                    detail: 'Bare except swallows every error, including real bugs.',
                    evidence: soft,
                };
            }
            return { status: 'PASS', detail: 'No shared mutable state patterns found.', evidence: [] };
        },
    },
    {
        id: 'GATE-09',
        name: 'DDL lock safety',
        category: 'Database reliability',
        run: (text) => {
            const view = codeView(text);
            const hasDdl = /\bALTER\s+TABLE\b|\bCREATE\s+(?:UNIQUE\s+)?INDEX\b|\bDROP\s+(?:TABLE|INDEX)\b/i.test(view);
            if (!hasDdl)
                return notApplicable('No DDL detected.');
            const guarded = /lock_timeout|statement_timeout|CONCURRENTLY/i.test(view);
            if (!guarded) {
                return {
                    status: 'WARN',
                    detail: 'DDL without lock_timeout, statement_timeout, or CONCURRENTLY can stall production traffic.',
                    evidence: collectLines(view, [/\bALTER\s+TABLE\b|\bCREATE\s+(?:UNIQUE\s+)?INDEX\b|\bDROP\s+(?:TABLE|INDEX)\b/i], 2),
                };
            }
            return { status: 'PASS', detail: 'DDL is bounded by lock or statement timeouts.', evidence: [] };
        },
    },
];
/**
 * Runs the deterministic gate against the Stage 1 draft and, when available, the Stage 4 output.
 * Pure function, zero API calls.
 */
function runDeterministicGate(stage1Draft, stage4Output) {
    return GATE_DEFINITIONS.map((def) => {
        const before = def.run(stage1Draft);
        const after = stage4Output !== null ? def.run(stage4Output) : null;
        let detail = before.detail;
        let evidence = before.evidence;
        if (after && before.status !== after.status) {
            detail = `${before.detail} After repair: ${after.detail}`;
        }
        if (before.status === 'PASS' || before.status === 'N/A') {
            evidence = after && after.evidence.length > 0 ? after.evidence : before.evidence;
        }
        return {
            id: def.id,
            checkName: def.name,
            category: def.category,
            stage1Status: before.status,
            stage4Status: after ? after.status : null,
            detail,
            evidence,
        };
    });
}
/* -------------------------------------------------------------------------- */
/*  Stage 2 / Stage 4 output parsing                                           */
/* -------------------------------------------------------------------------- */
function extractJsonObject(raw) {
    const cleaned = raw
        .trim()
        .replace(/^```(?:json)?\s*/i, '')
        .replace(/\s*```$/, '')
        .trim();
    const first = cleaned.indexOf('{');
    const last = cleaned.lastIndexOf('}');
    if (first === -1 || last <= first)
        return null;
    try {
        return JSON.parse(cleaned.slice(first, last + 1));
    }
    catch {
        return null;
    }
}
function normalizeForMatch(text) {
    return text.replace(/\s+/g, ' ').trim().toLowerCase();
}
function snippetFoundInDraft(snippet, draft) {
    const needle = normalizeForMatch(snippet);
    const haystack = normalizeForMatch(draft);
    if (needle.length === 0)
        return false;
    if (haystack.includes(needle))
        return true;
    const segments = needle
        .split(/\.\.\.|…/)
        .map((s) => s.trim())
        .filter((s) => s.length >= 8);
    return segments.length > 0 && segments.every((s) => haystack.includes(s));
}
function normalizeBadge(raw) {
    const upper = String(raw || '').toUpperCase();
    if (upper.includes('SYCOPHAN'))
        return '[RLHF SYCOPHANCY]';
    if (upper.includes('DRIFT'))
        return '[STATE DRIFT]';
    if (upper.includes('POLLUT'))
        return '[CONTEXT POLLUTION]';
    if (upper.includes('HALLUCIN') || upper.includes('SCHEMA'))
        return '[HALLUCINATED API / SCHEMA]';
    return '[UNHANDLED EDGE CASE / SECURITY]';
}
function normalizeSeverity(raw) {
    const upper = String(raw || '').toUpperCase();
    if (upper.includes('CRIT'))
        return 'CRITICAL';
    if (upper.includes('MED') || upper.includes('LOW'))
        return 'MEDIUM';
    return 'HIGH';
}
function parseRedTeamOutput(raw, stage1Draft) {
    const parsed = extractJsonObject(raw);
    if (!parsed || !Array.isArray(parsed.failureModes))
        return null;
    const failureModes = parsed.failureModes
        .filter((item) => item && typeof item === 'object')
        .map((item, idx) => {
        const snippet = String(item.flawedSnippet ?? '').trim();
        return {
            id: String(item.id || `FLAW-${String(idx + 1).padStart(2, '0')}`),
            category: normalizeBadge(String(item.category ?? '')),
            severity: normalizeSeverity(String(item.severity ?? 'HIGH')),
            flawedSnippet: snippet || '(no snippet provided)',
            requiredFix: String(item.requiredFix ?? '').trim() || '(no fix provided)',
            groundedInDraft: snippetFoundInDraft(snippet, stage1Draft),
        };
    });
    return {
        summary: typeof parsed.prosecutorSummary === 'string' && parsed.prosecutorSummary.trim()
            ? parsed.prosecutorSummary.trim()
            : failureModes.length === 0
                ? 'The Red-Team Prosecutor reported no genuine failure modes.'
                : `The Red-Team Prosecutor reported ${failureModes.length} failure modes.`,
        failureModes,
    };
}
function parseJudgeOutput(raw) {
    const text = raw.trim();
    const tagged = text.match(/=====\s*SYNTHESIS\s*=====\s*([\s\S]*?)=====\s*CONFIDENCE\s*=====\s*([\s\S]*?)=====\s*VERIFIED\s+OUTPUT\s*=====\s*([\s\S]*)$/i);
    if (tagged) {
        const num = parseInt(tagged[2].replace(/[^0-9]/g, ''), 10);
        return {
            verifiedOutput: tagged[3].trim(),
            synthesis: tagged[1].trim(),
            confidence: Number.isFinite(num) ? Math.min(100, Math.max(0, num)) : null,
            format: 'tagged',
        };
    }
    const json = extractJsonObject(text);
    if (json && typeof json.verifiedOutput === 'string' && json.verifiedOutput.trim()) {
        const num = Number(json.confidenceScore);
        return {
            verifiedOutput: json.verifiedOutput.trim(),
            synthesis: typeof json.judgeSynthesis === 'string' ? json.judgeSynthesis.trim() : '',
            confidence: Number.isFinite(num) ? Math.min(100, Math.max(0, Math.round(num))) : null,
            format: 'json',
        };
    }
    return { verifiedOutput: text, synthesis: '', confidence: null, format: 'raw' };
}
/**
 * Verification Confidence Score: the Judge's self-reported confidence, penalised by what the
 * deterministic gate still finds in the repaired output and by Red-Team findings that could not be
 * located in the draft. Never reaches 100.
 */
function computeConfidence(judgeReported, checks, failureModes) {
    const gateFailures = checks.filter((c) => c.stage4Status === 'FAIL').length;
    const gateWarnings = checks.filter((c) => c.stage4Status === 'WARN').length;
    const ungroundedFindings = failureModes.filter((f) => !f.groundedInDraft).length;
    const base = judgeReported ?? 80;
    const raw = base - gateFailures * 10 - gateWarnings * 3 - ungroundedFindings * 2;
    const score = Math.min(99, Math.max(5, Math.round(raw)));
    const parts = [
        judgeReported !== null
            ? `Judge self-report ${judgeReported}`
            : 'Judge gave no score (baseline 80)',
    ];
    if (gateFailures > 0)
        parts.push(`−${gateFailures * 10} for ${gateFailures} gate failure(s) still present`);
    if (gateWarnings > 0)
        parts.push(`−${gateWarnings * 3} for ${gateWarnings} gate warning(s)`);
    if (ungroundedFindings > 0)
        parts.push(`−${ungroundedFindings * 2} for ${ungroundedFindings} unverifiable finding(s)`);
    if (parts.length === 1)
        parts.push('clean gate on repaired output');
    return {
        score,
        judgeReported,
        gateFailures,
        gateWarnings,
        ungroundedFindings,
        explanation: parts.join(' · '),
    };
}
/* -------------------------------------------------------------------------- */
/*  Diff engine                                                                */
/* -------------------------------------------------------------------------- */
function computeLineDiff(oldText, newText, failureModes = []) {
    const a = (oldText || '').split('\n');
    const b = (newText || '').split('\n');
    const ka = a.map((l) => l.trim());
    const kb = b.map((l) => l.trim());
    const m = a.length;
    const n = b.length;
    const badgeFor = (line) => {
        const norm = normalizeForMatch(line);
        if (norm.length < 6)
            return undefined;
        for (const fm of failureModes) {
            const snippet = normalizeForMatch(fm.flawedSnippet);
            if (snippet.length >= 6 && (snippet.includes(norm) || norm.includes(snippet))) {
                return fm.category;
            }
        }
        if (/you(?:'re|\s+are)\s+(?:absolutely|completely)\s+right|great\s+(?:question|catch)|guarantee|assert\s+True|100\s*%/i.test(line)) {
            return '[RLHF SYCOPHANCY]';
        }
        return undefined;
    };
    const unified = [];
    let oldNo = 1;
    let newNo = 1;
    if (m * n > 4000000) {
        const setA = new Set(ka);
        const setB = new Set(kb);
        for (let i = 0; i < m; i++) {
            if (!setB.has(ka[i])) {
                unified.push({ type: 'removed', oldLineNumber: oldNo++, newLineNumber: null, text: a[i], flawBadge: badgeFor(a[i]) });
            }
            else {
                oldNo++;
            }
        }
        for (let j = 0; j < n; j++) {
            if (!setA.has(kb[j])) {
                unified.push({ type: 'added', oldLineNumber: null, newLineNumber: newNo++, text: b[j] });
            }
            else {
                unified.push({ type: 'unchanged', oldLineNumber: null, newLineNumber: newNo++, text: b[j] });
            }
        }
    }
    else {
        const width = n + 1;
        const dp = new Int32Array((m + 1) * width);
        for (let i = m - 1; i >= 0; i--) {
            for (let j = n - 1; j >= 0; j--) {
                dp[i * width + j] =
                    ka[i] === kb[j]
                        ? dp[(i + 1) * width + j + 1] + 1
                        : Math.max(dp[(i + 1) * width + j], dp[i * width + j + 1]);
            }
        }
        let i = 0;
        let j = 0;
        while (i < m && j < n) {
            if (ka[i] === kb[j]) {
                unified.push({ type: 'unchanged', oldLineNumber: oldNo++, newLineNumber: newNo++, text: b[j] });
                i++;
                j++;
            }
            else if (dp[(i + 1) * width + j] >= dp[i * width + j + 1]) {
                unified.push({ type: 'removed', oldLineNumber: oldNo++, newLineNumber: null, text: a[i], flawBadge: badgeFor(a[i]) });
                i++;
            }
            else {
                unified.push({ type: 'added', oldLineNumber: null, newLineNumber: newNo++, text: b[j] });
                j++;
            }
        }
        while (i < m) {
            unified.push({ type: 'removed', oldLineNumber: oldNo++, newLineNumber: null, text: a[i], flawBadge: badgeFor(a[i]) });
            i++;
        }
        while (j < n) {
            unified.push({ type: 'added', oldLineNumber: null, newLineNumber: newNo++, text: b[j] });
            j++;
        }
    }
    const removedCount = unified.filter((l) => l.type === 'removed').length;
    const addedCount = unified.filter((l) => l.type === 'added').length;
    const rows = [];
    let idx = 0;
    while (idx < unified.length) {
        const line = unified[idx];
        if (line.type === 'unchanged') {
            rows.push({
                leftLineNumber: line.oldLineNumber,
                leftText: line.text,
                leftType: 'unchanged',
                rightLineNumber: line.newLineNumber,
                rightText: line.text,
                rightType: 'unchanged',
            });
            idx++;
            continue;
        }
        const removedChunk = [];
        const addedChunk = [];
        while (idx < unified.length && unified[idx].type !== 'unchanged') {
            (unified[idx].type === 'removed' ? removedChunk : addedChunk).push(unified[idx]);
            idx++;
        }
        const height = Math.max(removedChunk.length, addedChunk.length);
        for (let k = 0; k < height; k++) {
            const rem = removedChunk[k];
            const add = addedChunk[k];
            rows.push({
                leftLineNumber: rem ? rem.oldLineNumber : null,
                leftText: rem ? rem.text : '',
                leftType: rem ? 'removed' : 'empty',
                rightLineNumber: add ? add.newLineNumber : null,
                rightText: add ? add.text : '',
                rightType: add ? 'added' : 'empty',
            });
        }
    }
    return { unifiedLines: unified, sideBySideRows: rows, removedCount, addedCount };
}
/* -------------------------------------------------------------------------- */
/*  Step-20 reliability math                                                   */
/* -------------------------------------------------------------------------- */
function computeMathSummary(params) {
    const p = Math.min(0.999, Math.max(0.01, params.p));
    const d = Math.min(0.999, Math.max(0, params.d));
    const r = Math.min(0.999, Math.max(0, params.r));
    const n = Math.max(1, Math.round(params.n));
    const pEff = Math.min(0.9999, p + (1 - p) * d * r);
    const openLoopAtN = Math.pow(p, n) * 100;
    const closedLoopAtN = Math.pow(pEff, n) * 100;
    return {
        p,
        d,
        r,
        n,
        pEff,
        openLoopAtN,
        closedLoopAtN,
        gainAtN: closedLoopAtN - openLoopAtN,
        multiplierAtN: openLoopAtN > 0.0001 ? closedLoopAtN / openLoopAtN : null,
        halfLifeOpen: Math.log(0.5) / Math.log(p),
        halfLifeClosed: Math.log(0.5) / Math.log(pEff),
    };
}
function classifyHorizonStatus(pct) {
    if (pct >= 70)
        return 'Stable';
    if (pct >= 30)
        return 'Degrading';
    return 'Collapsed';
}
exports.HORIZON_STEPS = [1, 3, 5, 10, 15, 20, 30, 50];
function computeHorizonTable(params) {
    const { p, pEff, n } = computeMathSummary(params);
    const steps = exports.HORIZON_STEPS.includes(n) ? [...exports.HORIZON_STEPS] : [...exports.HORIZON_STEPS, n].sort((x, y) => x - y);
    return steps.map((step) => {
        const openLoopPct = Math.pow(p, step) * 100;
        const closedLoopPct = Math.pow(pEff, step) * 100;
        return {
            n: step,
            openLoopPct,
            closedLoopPct,
            reliabilityGainPct: closedLoopPct - openLoopPct,
            openStatus: classifyHorizonStatus(openLoopPct),
            closedStatus: classifyHorizonStatus(closedLoopPct),
        };
    });
}
function computeCurve(params, maxN = 50) {
    const { p, pEff } = computeMathSummary(params);
    const points = [];
    for (let step = 0; step <= maxN; step++) {
        points.push({ n: step, open: Math.pow(p, step) * 100, closed: Math.pow(pEff, step) * 100 });
    }
    return points;
}
/* -------------------------------------------------------------------------- */
/*  Token & cost accounting                                                    */
/* -------------------------------------------------------------------------- */
function stageCost(stage) {
    if (stage.apiCalls === 0)
        return { cost: 0, priceKnown: true };
    const price = (0, apiService_1.getModelPricing)(stage.model);
    return {
        cost: (stage.inputTokens / 1000000) * price.input + (stage.outputTokens / 1000000) * price.output,
        priceKnown: price.known,
    };
}
function modelLabel(stage) {
    if (!stage.provider)
        return '—';
    return `${apiService_1.DEFAULT_PROVIDER_CONFIG[stage.provider].shortLabel} / ${stage.model}`;
}
function computeCostBreakdown(session) {
    const s1 = stageCost(session.stage1Builder);
    const s2 = stageCost(session.stage2RedTeam);
    const s4 = stageCost(session.stage4Judge);
    const stages = [
        { id: 'stage-1', label: 'Stage 1 · Architect', stage: session.stage1Builder, cost: s1, model: modelLabel(session.stage1Builder) },
        { id: 'stage-2', label: 'Stage 2 · Red-Team', stage: session.stage2RedTeam, cost: s2, model: modelLabel(session.stage2RedTeam) },
        { id: 'stage-3', label: 'Stage 3 · Deterministic gate', stage: session.stage3Heuristic, cost: { cost: 0, priceKnown: true }, model: 'Crucible rule engine (local)' },
        { id: 'stage-4', label: 'Stage 4 · Chief Judge', stage: session.stage4Judge, cost: s4, model: modelLabel(session.stage4Judge) },
    ];
    const rows = stages.map((s) => ({
        stageId: s.id,
        stageLabel: s.label,
        modelUsed: s.model,
        inputTokens: s.stage.apiCalls === 0 ? 0 : s.stage.inputTokens,
        outputTokens: s.stage.apiCalls === 0 ? 0 : s.stage.outputTokens,
        apiCalls: s.stage.apiCalls,
        latencyMs: s.stage.latencyMs,
        estimatedCostUsd: s.cost.cost,
        priceKnown: s.cost.priceKnown,
    }));
    const totalCost = s1.cost + s2.cost + s4.cost;
    return {
        rows,
        singlePassCostUsd: s1.cost,
        closedLoopCostUsd: totalCost,
        costMultiplier: s1.cost > 0 ? totalCost / s1.cost : null,
        singlePassLatencyMs: session.stage1Builder.latencyMs,
        totalInputTokens: rows.reduce((acc, r) => acc + r.inputTokens, 0),
        totalOutputTokens: rows.reduce((acc, r) => acc + r.outputTokens, 0),
        totalApiCalls: rows.reduce((acc, r) => acc + r.apiCalls, 0),
        totalLatencyMs: rows.reduce((acc, r) => acc + r.latencyMs, 0),
        anyPriceUnknown: rows.some((r) => !r.priceKnown),
        anyTokensEstimated: [session.stage1Builder, session.stage2RedTeam, session.stage4Judge].some((s) => s.apiCalls > 0 && !s.tokensReported),
    };
}
/* -------------------------------------------------------------------------- */
/*  Markdown exports                                                           */
/* -------------------------------------------------------------------------- */
function buildTelemetryMarkdown(session, params, strictness) {
    const math = computeMathSummary(params);
    const horizon = computeHorizonTable(params);
    const cost = computeCostBreakdown(session);
    return [
        `### Reliability telemetry (${exports.STRICTNESS_PRESETS[strictness].label})`,
        '',
        `- p = ${math.p.toFixed(2)}, d = ${math.d.toFixed(2)}, r = ${math.r.toFixed(2)}, n = ${math.n}`,
        `- p_eff = p + (1 − p)·d·r = ${(math.pEff * 100).toFixed(2)}%`,
        `- Half-life horizon n½ = ln(0.5)/ln(p) = ${math.halfLifeOpen.toFixed(2)} steps open-loop, ${math.halfLifeClosed.toFixed(2)} steps closed-loop`,
        '',
        '| Step horizon (n) | Open-loop p^n | Crucible closed-loop p_eff^n | Gain (+Δ%) | Status (open → closed) |',
        '| :-- | --: | --: | --: | :-- |',
        ...horizon.map((r) => `| ${r.n} | ${r.openLoopPct.toFixed(2)}% | ${r.closedLoopPct.toFixed(2)}% | +${r.reliabilityGainPct.toFixed(2)}% | ${r.openStatus} → ${r.closedStatus} |`),
        '',
        '### Token & cost breakdown',
        '',
        '| Pipeline stage | Model | Input tokens | Output tokens | API calls | Latency | Est. cost (USD) |',
        '| :-- | :-- | --: | --: | --: | --: | --: |',
        ...cost.rows.map((r) => `| ${r.stageLabel} | ${escapeCell(r.modelUsed)} | ${formatTokens(r.inputTokens)} | ${formatTokens(r.outputTokens)} | ${r.apiCalls} | ${r.latencyMs} ms | ${r.priceKnown ? formatUsd(r.estimatedCostUsd) : 'n/a (unpriced model)'} |`),
        `| **Total** |  | **${formatTokens(cost.totalInputTokens)}** | **${formatTokens(cost.totalOutputTokens)}** | **${cost.totalApiCalls}** | **${cost.totalLatencyMs} ms** | **${formatUsd(cost.closedLoopCostUsd)}** |`,
        '',
        `Single-pass cost (Stage 1 only): ${formatUsd(cost.singlePassCostUsd)} · Closed-loop cost: ${formatUsd(cost.closedLoopCostUsd)}${cost.costMultiplier ? ` (${cost.costMultiplier.toFixed(1)}× single-pass)` : ''}`,
    ].join('\n');
}
function buildAuditReportMarkdown(params) {
    const { session, mathParams } = params;
    const diff = computeLineDiff(session.stage1Builder.content, session.stage4Judge.content, session.failureModes);
    const sycophancy = session.failureModes.filter((f) => f.category === '[RLHF SYCOPHANCY]').length;
    const preset = exports.STRICTNESS_PRESETS[session.strictnessLevel];
    const stageRow = (label, s) => `| ${label} | ${s.provider ? apiService_1.DEFAULT_PROVIDER_CONFIG[s.provider].label : 'Local'} | ${escapeCell(s.model)} | ${s.latencyMs} ms |`;
    return [
        '# Crucible.ai Verification Audit Report',
        '',
        `- **Generated:** ${new Date().toISOString()}`,
        `- **Strictness:** ${preset.label} (d=${preset.d}, r=${preset.r})`,
        `- **Verification confidence:** ${session.confidence ? `${session.confidence.score}%` : 'n/a'}${session.confidence ? ` (${session.confidence.explanation})` : ''}`,
        `- **Summary:** ${session.failureModes.length} failure modes caught · ${diff.removedCount} lines removed / ${diff.addedCount} lines added · ${sycophancy} sycophancy finding(s)`,
        '',
        '| Stage | Provider | Model | Latency |',
        '| :-- | :-- | :-- | --: |',
        stageRow('1 · Architect', session.stage1Builder),
        stageRow('2 · Red-Team', session.stage2RedTeam),
        '| 3 · Deterministic gate | Local | Crucible rule engine | ' + session.stage3Heuristic.latencyMs + ' ms |',
        stageRow('4 · Chief Judge', session.stage4Judge),
        '',
        '---',
        '',
        '## 1. Prompt',
        '',
        session.prompt,
        '',
        '## 2. Stage 1: Builder draft',
        '',
        '```',
        session.stage1Builder.content,
        '```',
        '',
        '## 3. Stage 2: Red-Team failure modes',
        '',
        `> ${escapeCell(session.prosecutorSummary)}`,
        '',
        '| ID | Category | Severity | Flawed snippet | Required fix | Snippet verified in draft |',
        '| :-- | :-- | :-- | :-- | :-- | :-- |',
        ...session.failureModes.map((f) => `| ${f.id} | \`${f.category}\` | ${f.severity} | \`${escapeCell(f.flawedSnippet)}\` | ${escapeCell(f.requiredFix)} | ${f.groundedInDraft ? 'yes' : 'no'} |`),
        '',
        '## 4. Stage 3: Deterministic gate',
        '',
        '| Check | Category | Draft | Repaired | Detail |',
        '| :-- | :-- | :-- | :-- | :-- |',
        ...session.heuristicChecks.map((h) => `| ${h.id} ${h.checkName} | ${h.category} | ${h.stage1Status} | ${h.stage4Status ?? '—'} | ${escapeCell(h.detail)}${h.evidence.length ? ` Evidence: \`${escapeCell(h.evidence.join(' ; '))}\`` : ''} |`),
        '',
        '## 5. Stage 4: Chief Judge',
        '',
        `> ${escapeCell(session.judgeSynthesis || 'No synthesis text returned.')}`,
        '',
        '### Verified output',
        '',
        session.stage4Judge.content,
        '',
        '## 6. Diff summary',
        '',
        `- Lines removed from draft: ${diff.removedCount}`,
        `- Lines added by judge: ${diff.addedCount}`,
        '',
        '## 7. Reliability & cost telemetry',
        '',
        buildTelemetryMarkdown(session, mathParams, session.strictnessLevel),
        '',
    ].join('\n');
}

    },
  };

  var moduleCache = {};

  function resolveModulePath(fromKey, request) {
    if (request === "react") return "react";
    if (request === "react-dom" || request === "react-dom/client") return "react-dom";
    if (request === "lucide-react") return "lucide-react";
    var fromParts = fromKey.split("/").filter(function (p) { return p && p !== "."; }).slice(0, -1);
    var reqParts = request.split("/");
    for (var i = 0; i < reqParts.length; i++) {
      var seg = reqParts[i];
      if (seg === "." || seg === "") continue;
      if (seg === "..") fromParts.pop(); else fromParts.push(seg);
    }
    return "./" + fromParts.filter(Boolean).join("/");
  }

  function createRequire(currentKey) {
    return function require(request) {
      var resolved = resolveModulePath(currentKey, request);
      if (resolved === "react") return React;
      if (resolved === "react-dom") return ReactDOM;
      if (resolved === "lucide-react") return LucideIcons;
      if (moduleCache[resolved]) return moduleCache[resolved].exports;
      var factory = moduleFactories[resolved];
      if (!factory) throw new Error("Module not found: " + resolved + " (from " + currentKey + ")");
      var mod = { exports: {} };
      moduleCache[resolved] = mod;
      factory(mod, mod.exports, createRequire(resolved));
      return mod.exports;
    };
  }

  window.__CrucibleRequire = createRequire('./main');
  var AppModule = window.__CrucibleRequire("./App");
  var AppComponent = AppModule.default || AppModule.App;
  var rootEl = typeof document !== "undefined" ? document.getElementById("root") : null;
  if (rootEl && ReactDOM && ReactDOM.createRoot) {
    ReactDOM.createRoot(rootEl).render(React.createElement(AppComponent));
  }
})();