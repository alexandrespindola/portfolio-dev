---
title: RPA Migration
category: UiPath to n8n + Puppeteer
summary: A staged modernization path from legacy UiPath automation to versioned n8n workflows and browser automation services.
role: Automation architecture and delivery
status: Foundation delivered; migration work in progress
period: Planning and infrastructure · 2026
challenge: Modernize a business-critical UiPath estate while maintaining a safe path for operations that depend on it. The work began with process inventory, prioritization and a delivery model that allows validation before any production cutover.
solution: "Defined the phased migration approach and built the core automation environment: n8n in queue mode with three workers and isolated task runners, PostgreSQL and RabbitMQ. A separate Bun, Hono and Puppeteer service provides containerized browser automation. The first export automation was validated locally; its remaining external integration dependencies were explicitly tracked rather than presented as complete."
outcomes:
  - Produced a prioritized migration plan and a reversible rollout model for the automation portfolio.
  - Delivered reusable n8n and Puppeteer foundations with versioned workflows and isolated execution.
  - Established a local validation path for the first export automation while documenting outstanding access and integration dependencies.
metrics:
  - "Migration scope assessed: 11 active processes"
  - "38 sub-processes mapped in the operating estate"
tagKeys: [HONO, N8N, BUN, DOCKER, POSTGRE]
visibility: private
gallery:
  - label: Migration architecture
    alt: Placeholder for the n8n and browser automation architecture
  - label: Versioned workflow operations
    alt: Placeholder for the workflow environment
  - label: Browser automation validation
    alt: Placeholder for the Puppeteer automation output
---
