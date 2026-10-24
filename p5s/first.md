You are a Principal AI Systems Engineer and Full-Stack Architect. We are upgrading and rebranding this existing Verdict.ai codebase into a much more advanced, standalone multi-agent verification platform called **Crucible.ai** ("The Adversarial Verification Runtime for Autonomous AI Agents").

In this Phase 1 (Core Application & Functional Engine), focus 100% on completeness of features, real multi-API orchestration, data tables, mathematical telemetry, diffing logic, and interactive controls. Do NOT strip out existing working API fetching or table-generation capabilities from Verdict.ai—preserve and upgrade them so everything works seamlessly both with real user API keys (BYOK) and in a rich, deterministic Simulation Mode.

### 1. REBRANDING & CORE STATE ARCHITECTURE
- Rebrand the platform title, headers, and metadata from `Verdict.ai` to **Crucible.ai** (`v2.0 — Closed-Loop Adversarial Verification Runtime`).
- Maintain a clean, modular state object (`CrucibleState`) that tracks:
  - `providerConfig`: Supports **Google Gemini** (`gemini-1.5-pro` / `gemini-2.0-flash`), **OpenAI** (`gpt-4o` / `gpt-4o-mini`), **Anthropic** (`claude-3-5-sonnet`), **Groq** (`llama-3.3-70b-versatile`), and **OpenRouter**, plus a built-in **Deterministic Simulation Mode** toggle so users without an API key can still run full, realistic multi-agent verifications.
  - `apiKeys`: Stored in `localStorage` with a live **"Test Connection (Ping)"** function that verifies the active key and displays latency (`ms`) and connection status (`Connected` / `Invalid Key` / `Simulation Active`).
  - `strictnessLevel`: `'standard'` (Standard Audit, $d=0.65, r=0.75$), `'ruthless'` (Ruthless Red-Team, $d=0.82, r=0.85$), or `'formal'` (Formal Verification Harness, $d=0.92, r=0.90$).

### 2. THE 4-STAGE ADVERSARIAL EXECUTION PIPELINE
Upgrade the execution flow so every user prompt (or pre-loaded benchmark task) runs sequentially through 4 distinct, inspectable stages with real-time status updates, elapsed time (`ms`), and token counts:
1. **Stage 1 — The Architect (Builder Agent):** Generates the initial solution, code, or system architecture.
2. **Stage 2 — The Red-Team Prosecutor (Adversarial Critic):** Operates under a strict anti-sycophancy system prompt. It must NOT politely agree with Stage 1. It outputs a structured critique containing:
   - **Detected Failure Modes Table:** Every flaw tagged with an academic taxonomy badge from long-horizon agent research:
     - `[STATE DRIFT]`
     - `[RLHF SYCOPHANCY]`
     - `[CONTEXT POLLUTION]`
     - `[HALLUCINATED API / SCHEMA]`
     - `[UNHANDLED EDGE CASE / SECURITY]`
   - Each row in the Failure Modes Table must show: `ID`, `Failure Category Badge`, `Severity (CRITICAL / HIGH / MEDIUM)`, `Exact Flawed Snippet or Claim`, and `Required Fix`.
3. **Stage 3 — Deterministic Heuristic & Schema Gate:** Performs a fast programmatic check on the output (checking for missing error handling, unsafe operations like unguarded `DROP TABLE` / non-idempotent calls, undefined variables, or ungrounded quantitative claims) and logs pass/fail flags in a structured checklist table.
4. **Stage 4 — The Chief Judge (Synthesizer & Repair Engine):** Cross-examines the Builder's draft against the Red-Team Prosecutor's table and Stage 3 checks, prunes hallucinated branches, repairs every flagged bug, and produces the **Verified Final Output** + a **Verification Confidence Score (0–100%)**.

### 3. SIDE-BY-SIDE & UNIFIED DIFF ENGINE (BEFORE vs. AFTER)
To prove visually that Crucible.ai doesn't just click a button and pick a random output, build an interactive **Diff Viewer** panel:
- **Toggleable Views:** `Side-by-Side Comparison (Stage 1 Raw Draft vs. Stage 4 Repaired Output)`, `Red-Team Annotated Diff (Red Strikethroughs for Flaws, Green Highlights for Repairs)`, and `Clean Final Output`.
- Explicitly highlight what the Red-Team Prosecutor removed (in red `-`) and what the Chief Judge injected/repaired (in green `+`), with a summary counter: e.g., `4 Hallucinations/Bugs Caught • 12 Lines Repaired • Sycophancy Bias Eliminated`.

### 4. LIVE MATHEMATICAL & COST TELEMETRY TABLES (STEP-20 ENGINE)
Create a dedicated **Reliability & Cost Telemetry Section** with dynamic tables that update on every run and allow the user to adjust sliders for single-step accuracy ($p$), detection probability ($d$), repair probability ($r$), and task horizon ($n$ steps):
- **Formulas Implemented:**
  - Open-Loop Single-Agent Success: $P_{\text{open}}(n) = p^n$
  - Half-Life Horizon: $n_{1/2} = \frac{\ln(0.5)}{\ln(p)}$
  - Closed-Loop Effective Step Reliability: $p_{\text{eff}} = p + (1 - p) \cdot d \cdot r$
  - Closed-Loop Multi-Agent Success: $P_{\text{closed}}(n) = (p_{\text{eff}})^n$
- **Table 1 — Horizon Reliability Comparison Table:** Columns for `Step Horizon (n = 1, 3, 5, 10, 15, 20, 30, 50)`, `Open-Loop Naive Agent (p^n %)`, `Crucible Closed-Loop (p_eff^n %)`, `Reliability Gain (+Δ%)`, and `Status (Stable / Degrading / Collapsed)`.
- **Table 2 — Worked Token & Cost Breakdown Table:** Columns for `Pipeline Stage (Builder / Red-Team / Deterministic Check / Judge / Total)`, `Model Used`, `Input Tokens`, `Output Tokens`, `API Calls`, `Latency (ms)`, and `Estimated Cost ($ USD = Tokens × Price per 1M)`, comparing single-pass cost vs. closed-loop verification cost.

### 5. EDITABLE SYSTEM PROMPT INSPECTOR
Add an **"Inspect & Edit Agent System Prompts"** drawer/tab where the user can view, edit, and reset the exact system prompts used for:
- `Builder Agent System Prompt`
- `Red-Team Prosecutor Anti-Sycophancy Prompt`
- `Chief Judge Synthesis Prompt`
Changing these prompts must directly affect the live API calls.

### 6. PRE-LOADED BENCHMARK SCENARIOS & 1-CLICK AUDIT EXPORT
- Include **4 Pre-Loaded High-Signal Benchmark Scenarios** (selectable via quick-load buttons) so the user can demonstrate the platform on a Loom video or test without an API key:
  1. `Scenario 1: Autonomous SQL Migration Agent (Catches Unguarded DROP TABLE & Missing Saga Rollback)`
  2. `Scenario 2: Multi-Step Python Chronoparse Refactor (Catches Off-by-One State Drift & False Test Pass Sycophancy)`
  3. `Scenario 3: Distributed Payment Microservice (Catches Missing Idempotency Keys & Race Condition)`
  4. `Scenario 4: Scientific Literature Synthesizer (Catches Hallucinated Citations & Extrapolated Benchmarks)`
- Add a **"Download Verification Audit Report (.md)"** button and a **"Copy Full Telemetry Table"** button that exports the entire run (Prompt, Builder Draft, Red-Team Failure Table, Diff Summary, Judge Final Output, and Step-20 Math/Cost Tables) as a clean Markdown file.

Ensure all JavaScript logic is clean, self-contained, free of placeholders or TODOs, and works immediately when opening `index.html`.