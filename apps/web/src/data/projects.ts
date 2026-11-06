import TAGS, { type Tag } from "./tags.ts";

export interface Project {
  title: string;
  category: string;
  description: string;
  link?: string;
  featured?: boolean;
  featuredOrder?: number;
  caseStudy?: string;
  proof?: string;
  tags: Tag[];
  github?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Live Event AI Interpretation",
    category: "Real-time speech translation",
    description:
      "Single Rust (Axum) + Svelte 5 binary streaming live captions in 11 languages over WebSockets. Azure Speech STT with glossary phrase lists, translation by Azure Translator or switchable LLMs (Azure OpenAI GPT-4.1, Claude Haiku/Sonnet) with automatic fallback, and per-sentence TTS. Tracing and latency metrics for the AI pipeline.",
    featured: true,
    featuredOrder: 1,
    proof: "11 languages · 5 days live with zero downtime",
    tags: [TAGS.RUST, TAGS.SVELTE, TAGS.TYPESCRIPT, TAGS.CLAUDE, TAGS.DOCKER],
  },
  {
    title: "AI Value Loop",
    category: "Answer-rate optimisation for a call center",
    description:
      "Rust (Axum), DuckDB/DuckLake, PostgreSQL, Valkey, Meilisearch and a Svelte dashboard on Oracle Cloud. Ingests ~1M calls/day in 5-minute batches and detects answer-rate drops by route and server. An MCP server with 13 Rust tools (fixed SQL, statistics in code: Wilson intervals, MSTL baselines, switchback tests) lets Claude propose and critique hypotheses while a human approves. Privacy-first: a local model triages alerts and the LLM only sees aggregates.",
    featured: true,
    featuredOrder: 2,
    proof: "~1M calls/day · MCP tools for Claude",
    tags: [TAGS.RUST, TAGS.SVELTE, TAGS.POSTGRE, TAGS.REDIS, TAGS.CLAUDE],
  },
  {
    title: "David Platform",
    category: "Multilingual digital library",
    description:
      "Rust API and workers (Axum, SQLx, PostgreSQL/pgvector, Valkey, Meilisearch) with OpenAPI contract tests and a SvelteKit PWA in 30 languages. AI video pipeline with automatic subtitle extraction (Azure Video Indexer), LLM subtitle translation and a web cue editor; streaming RAG chat (Claude / Azure OpenAI), Azure Speech narration and an internal CMS with per-language editors.",
    featured: true,
    featuredOrder: 3,
    caseStudy: "/projects/david-platform/",
    proof: "30 languages · RAG chat · AI subtitles",
    tags: [TAGS.RUST, TAGS.SVELTE, TAGS.POSTGRE, TAGS.REDIS, TAGS.CLOUDFLARE, TAGS.CLAUDE],
  },
  {
    title: "RPA Modernisation",
    category: "UiPath to n8n + browser automation",
    description:
      "Migrating UiPath processes to self-hosted n8n (Queue Mode) and a custom browser automation service built with TypeScript, Bun, Hono, Puppeteer, PostgreSQL and a SvelteKit UI: pg-boss queues with per-process locks, SSE logs, RBAC, encrypted vault, audit logging and Rust validators that check output parity with the legacy files.",
    featured: true,
    featuredOrder: 4,
    caseStudy: "/projects/rpa-migration/",
    proof: "n8n Queue Mode · Rust parity validators",
    tags: [TAGS.TYPESCRIPT, TAGS.HONO, TAGS.N8N, TAGS.BUN, TAGS.SVELTE, TAGS.DOCKER, TAGS.POSTGRE, TAGS.RUST],
  },
  {
    title: "Gnosis Congress 2026",
    category: "Event management platform",
    description:
      "Production registration platform with Nuxt, Bun, Hono, PostgreSQL (Drizzle), Better Auth and n8n. Manages visits, lunch-day selection, accommodation and transport with Redsys payments, country-level RBAC and country-filtered analytics, plus an Astro static site for the livestreams.",
    featured: true,
    featuredOrder: 5,
    caseStudy: "/projects/gnosis-congress/",
    proof: "3,905 registrations in production",
    tags: [TAGS.TYPESCRIPT, TAGS.NUXT, TAGS.HONO, TAGS.BUN, TAGS.POSTGRE, TAGS.N8N, TAGS.TAILWIND],
    link: "https://congreso.gnosis.is",
  },
  {
    title: "Holded Core",
    category: "E-commerce ERP middleware",
    description:
      "NestJS (Fastify) middleware syncing Magento 2, Shopify and Holded ERP with an event-driven + adaptive CRON architecture, PostgreSQL/Drizzle and BullMQ/Redis asynchronous processing, with more than 80% test coverage.",
    featured: true,
    featuredOrder: 6,
    caseStudy: "/projects/holded-core/",
    proof: ">80% test coverage",
    tags: [TAGS.NEST, TAGS.POSTGRE, TAGS.REDIS, TAGS.DOCKER, TAGS.TYPESCRIPT],
  },
  {
    title: "Gnosis International Websites",
    category: "Multilingual websites · Germany, Netherlands & Romania",
    description:
      "Astro, SvelteKit, TypeScript, Tailwind, Supabase and Cloudflare Pages: migrated legacy sites into a reusable multilingual edge architecture with zero server maintenance.",
    tags: [TAGS.TYPESCRIPT, TAGS.ASTRO, TAGS.SVELTE, TAGS.TAILWIND, TAGS.SUPABASE, TAGS.CLOUDFLARE],
  },
  {
    title: "Dog Grooming Management System",
    category: "Salon operations platform",
    description:
      "SvelteKit + Firebase platform for salon operations with calendar management, real-time occupancy indicators and customer segmentation.",
    tags: [TAGS.SVELTE, TAGS.FIREBASE, TAGS.TYPESCRIPT],
  },
  {
    title: "Multilingual Content Automation",
    category: "Gnosis content workflow",
    description:
      "AI-supported localisation and publishing workflow for a large collection of Gnostic texts. The platform makes content accessible across languages while reducing manual translation and publication effort.",
    link: "https://books.gnosisdeutschland.org",
    github: "https://github.com/alexandrespindola/gnosisapp",
    tags: [
      TAGS.ASTRO,
      TAGS.TAILWIND,
      TAGS.STRAPI,
      TAGS.N8N,
      TAGS.PNPM,
      TAGS.NETLIFY,
    ],
  },
  {
    title: "IFV",
    category: "WordPress migration & institutional platform",
    description:
      "Migrated a legacy WordPress website to a zero-maintenance Astro platform deployed on Cloudflare Pages. The four-language institutional site includes SEO-ready content and a Supabase-backed contact pipeline.",
    tags: [
      TAGS.ASTRO,
      TAGS.CLOUDFLARE,
      TAGS.SUPABASE,
    ],
  },
  {
    title: "Content Alchemist",
    category: "AI-augmented campaigns",
    description:
      "AI-augmented marketing campaign generator that transforms cleaned transcripts into multi-channel content packages for Facebook, Instagram and LinkedIn. It orchestrates Deno Deploy and Google Gemini through n8n, with Google Sheets and Apps Script as the human interface, Google Drive delivery, optional Valkey/Redis caching, and structured JSON prompts for deterministic, platform-optimised output.",
    tags: [
      TAGS.N8N,
      TAGS.TYPESCRIPT,
      TAGS.DENO,
      TAGS.GEMINI,
      TAGS.REDIS,
      TAGS.ALPINE,
      TAGS.TAILWIND,
    ],
  },
  {
    title: "Portfolio Alexandre Spindola",
    category: "Personal portfolio",
    description:
      "Showcased development expertise by building a modern, responsive, and high-performance personal portfolio. The project demonstrates proficiency in creating visually appealing and technically sound web applications, serving as a practical example of skills in contemporary web development practices and providing a central hub for professional information and project showcases.",
    link: "/",
    tags: [
      TAGS.ASTRO,
      TAGS.TAILWIND,
      TAGS.BUN,
      TAGS.TYPESCRIPT,
      TAGS.DENO,
      TAGS.BUNNY,
    ],
    github: "https://github.com/alexandrespindola/portfolio-dev",
  },
];

export default PROJECTS;
