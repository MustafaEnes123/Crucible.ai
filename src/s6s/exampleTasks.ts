import { ExampleTask } from '../t3s/types';

/**
 * Starter prompts only. They are sent to the real providers like any other task;
 * nothing about the outcome is pre-written.
 */
export const EXAMPLE_TASKS: ExampleTask[] = [
  {
    id: 'sql-migration',
    label: 'SQL migration agent',
    tag: 'Database safety',
    prompt:
      'Design and write a production PostgreSQL 16 zero-downtime migration script and Python saga orchestrator to migrate `tenant_ledger_entries` (420M rows) from a monolithic table with `amount_cents INT` to a hash-partitioned table with `amount_micros BIGINT` and `currency_iso CHAR(3)`. Must enforce transactional safety, lock timeouts, and automated compensating saga rollback.',
  },
  {
    id: 'chronoparse',
    label: 'Chronoparse refactor',
    tag: 'State drift',
    prompt:
      'Refactor the `ChronoWindowAggregator` Python class that ingests out-of-order UTC telemetry events `(timestamp_ms, metric_val)`, normalizes ISO-8601 leap-year boundaries, and computes exact inclusive sliding-window percentiles over `[t_start, t_end]`. Include a self-verifying unit test suite.',
  },
  {
    id: 'payments',
    label: 'Payment microservice',
    tag: 'Concurrency',
    prompt:
      'Implement a TypeScript/Node.js payment settlement handler `settleMerchantPayout(req, res)` that debits a merchant wallet in PostgreSQL and dispatches an external wire transfer via Stripe/banking API. Must prevent double-spend race conditions under concurrent retries and handle partial network failures.',
  },
  {
    id: 'literature',
    label: 'Literature synthesizer',
    tag: 'Grounding',
    prompt:
      'Synthesize an executive technical brief on compounding error rates in multi-step autonomous LLM agents (n=20 horizon), contrasting open-loop autoregressive execution (P(n)=p^n) against closed-loop adversarial verification (p_eff = p + (1-p)dr). Cite only verifiable mathematical derivations and flag any ungrounded empirical claims.',
  },
];
