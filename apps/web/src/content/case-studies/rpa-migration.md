---
title: RPA Modernisation
category: UiPath to n8n + Puppeteer
summary: A migration of legacy UiPath automation to self-hosted n8n and a custom browser automation service with queues, observability and output-parity validation.
role: Automation architecture and delivery
status: In progress
period: "2026"
challenge: Modernize a business-critical UiPath estate while retaining dependable, reusable patterns for browser and API automation.
solution: "Migrating UiPath processes to self-hosted n8n in Queue Mode (Docker Compose with workers, external task runners, PostgreSQL, Redis and RabbitMQ) and a custom browser automation service built with TypeScript, Bun, Hono, Puppeteer, PostgreSQL/Drizzle and a SvelteKit UI. The service uses pg-boss queues with per-process locks, real-time SSE logs, Better Auth with service tokens, an encrypted secret vault and audit logging; Rust CLI validators check output parity against the legacy RPA files."
outcomes:
  - Each legacy process gets its own automations, run-engine lock and completion webhook, so processes never block each other.
  - Rust validators confirm whole-workbook parity between the legacy UiPath outputs and the new pipelines.
  - n8n owns schedules, business rules, SharePoint lists and e-mails via Microsoft Graph; the service drives the web portals and writes the files.
  - Azure DevOps CI/CD with dev/prod promotion on Linux VMs.
metrics:
  - "n8n Queue Mode with 3 workers"
  - "Rust output-parity validators"
tagKeys: [TYPESCRIPT, HONO, N8N, BUN, SVELTE, DOCKER, POSTGRE, RUST]
visibility: private
---
