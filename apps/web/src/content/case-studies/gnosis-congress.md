---
title: Gnosis Congress
category: Event management platform
summary: A production event platform for registration, payments and operational coordination for an international congress.
role: Full-stack platform engineering
status: In production and evolving
period: Congress 2026 · 3,000+ registrations in production
challenge: Support a high-volume international registration process while maintaining accurate payment, attendance and logistics data. The product had to serve participants on mobile, preserve country-scoped administration and make the operational work after payment visible and traceable.
solution: Delivered a Nuxt 3 and Tailwind frontend backed by a Bun/Hono API with PostgreSQL and Drizzle. The application uses Better Auth with role-based access, multi-step registration, payment and attendance workflows, localized communications, PDF confirmations, administrative tools and n8n webhooks for operational automation.
outcomes:
  - Runs the attendee registration journey in production for an international event.
  - Gives country administrators controlled access to registration, payment and logistics operations.
  - Connects registration events to email, reminders and operational workflows without coupling them to the frontend.
metrics:
  - 3,000+ registrations in production
  - Seven frontend languages
tagKeys: [TYPESCRIPT, NUXT, TAILWIND, CLOUDFLARE, BUN, HONO, POSTGRE, N8N]
visibility: public
liveUrl: https://congreso.gnosis.is
cover: /projects/congreso.webp
gallery:
  - label: Public registration journey
    alt: Placeholder for the registration flow
  - label: Participant and payment operations
    alt: Placeholder for participant operations
  - label: Country-scoped administration
    alt: Placeholder for the administration dashboard
---
