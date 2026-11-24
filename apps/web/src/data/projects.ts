import TAGS, { type Tag } from "./tags.ts";

export interface Project {
  title: string;
  image?: string;
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
    image: "/images/projects/live-multilingual-captioning-demo.webp",
    category: "Real-time speech translation",
    description:
      "Single-binary Rust (Axum) + Svelte 5 app streaming live captions in 11 languages over WebSockets. Azure Speech STT with glossary phrase lists, translation by Azure Translator or switchable LLMs (Azure OpenAI GPT-4.1, Claude Haiku/Sonnet) with automatic fallback, and per-sentence TTS. Replay quality gates, tracing and latency metrics for the AI pipeline.",
    featured: true,
    featuredOrder: 1,
    proof: "11 languages · 5 days live with zero downtime",
    tags: [TAGS.RUST, TAGS.SVELTE, TAGS.TYPESCRIPT, TAGS.CLAUDE, TAGS.DOCKER],
  },
  {
    title: "David Platform",
    image: "/images/projects/michelangelos-david-digital-archive.webp",
    category: "Multilingual digital library",
    description:
      "Ported Go API/workers to Rust (Axum, SQLx, PostgreSQL/pgvector, Valkey, Meilisearch) with OpenAPI contract tests and PDF/ePub workers, paired with a Turborepo + SvelteKit PWA in 30 languages. AI video pipeline with automatic subtitle extraction (Azure Video Indexer), LLM subtitle translation and a web cue editor; streaming RAG chat (Claude / Azure OpenAI), Azure Speech TTS narration and a multi-language RBAC CMS.",
    featured: true,
    featuredOrder: 2,
    caseStudy: "/projects/david-platform/",
    proof: "30 languages · RAG chat · AI subtitles",
    tags: [TAGS.RUST, TAGS.SVELTE, TAGS.POSTGRE, TAGS.REDIS, TAGS.CLOUDFLARE, TAGS.CLAUDE],
  },
  {
    title: "RPA Modernisation",
    image: "/images/projects/automation-modernization-dashboard.webp",
    category: "UiPath to n8n + browser automation",
    description:
      "Migrating legacy UiPath processes to self-hosted n8n (Queue Mode, isolated JS/Python task runners) and a custom browser & document automation platform built with TypeScript, Bun, Hono, Puppeteer, PostgreSQL and a SvelteKit UI: pg-boss queues with per-process locks, SSE logs, RBAC, encrypted vault, audit logging and Rust validators that check 1:1 output parity.",
    featured: true,
    featuredOrder: 3,
    caseStudy: "/projects/rpa-migration/",
    proof: "n8n Queue Mode · Rust parity validators",
    tags: [TAGS.TYPESCRIPT, TAGS.HONO, TAGS.N8N, TAGS.BUN, TAGS.SVELTE, TAGS.DOCKER, TAGS.POSTGRE, TAGS.RUST],
  },
  {
    title: "Gnosis Congress 2026",
    image: "/images/projects/toledo-registration-dashboard-ui.webp",
    category: "Event management platform",
    description:
      "Production registration platform with Nuxt 3, Bun, Hono, PostgreSQL (Drizzle), Better Auth (2FA/TOTP, RBAC) and n8n. Manages visits, lunch-day selection, accommodation and transport with Redsys payments, country-level RBAC and country-filtered analytics, plus an Astro static site for the livestreams.",
    featured: true,
    featuredOrder: 4,
    caseStudy: "/projects/gnosis-congress/",
    proof: "3,905 registrations in production",
    tags: [TAGS.TYPESCRIPT, TAGS.NUXT, TAGS.HONO, TAGS.BUN, TAGS.POSTGRE, TAGS.N8N, TAGS.TAILWIND],
    link: "https://congreso.gnosis.is",
  },
  {
    title: "Holded Core",
    image: "/images/projects/neon-inventory-sync-hub.webp",
    category: "E-commerce ERP middleware",
    description:
      "NestJS (Fastify) middleware syncing Magento 2, Shopify and Holded ERP with an event-driven + adaptive CRON architecture, PostgreSQL/Drizzle and BullMQ/Redis asynchronous processing, with more than 80% test coverage.",
    featured: true,
    featuredOrder: 5,
    caseStudy: "/projects/holded-core/",
    proof: ">80% test coverage",
    tags: [TAGS.NEST, TAGS.POSTGRE, TAGS.REDIS, TAGS.DOCKER, TAGS.TYPESCRIPT],
  },
  {
    title: "Gnosis International Websites",
    image: "/images/projects/gnosis-websites-netherlands-germany-romania.webp",
    category: "Multilingual websites · Germany, Netherlands & Romania",
    description:
      "Turborepo monorepos (Astro, SvelteKit, TypeScript, Tailwind, Supabase, Cloudflare Pages): migrated legacy sites into a reusable multilingual edge architecture with zero server maintenance.",
    tags: [TAGS.TYPESCRIPT, TAGS.ASTRO, TAGS.SVELTE, TAGS.TAILWIND, TAGS.SUPABASE, TAGS.CLOUDFLARE],
  },
  {
    title: "Dog Grooming Management System",
    image: "/images/projects/neon-pet-grooming-dashboard.webp",
    category: "Salon operations platform",
    description:
      "SvelteKit + Firebase platform for salon operations with calendar management, real-time occupancy indicators and customer segmentation.",
    tags: [TAGS.SVELTE, TAGS.FIREBASE, TAGS.TYPESCRIPT],
  },
  {
    title: "Multilingual Content Automation",
    image: "/images/projects/multilingual-publishing-workflow-infographic.webp",
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
    image: "/images/projects/modern-multilingual-website-redesign.webp",
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
    image: "/images/projects/ai-content-workflow-dashboard.webp",
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
    image: "/images/projects/neon-full-stack-portfolio-dashboard.webp",
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
