import TAGS, { type Tag } from "./tags.ts";

export interface Project {
  title: string;
  category: string;
  description: string;
  link?: string;
  image?: string;
  featured?: boolean;
  featuredOrder?: number;
  caseStudy?: string;
  proof?: string;
  tags: Tag[];
  github?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Gnosis Congress",
    category: "Event management platform",
    description:
      "Event-registration platform with a responsive Nuxt frontend, Tailwind CSS and PostgreSQL. The Hono API, deployed with Coolify, supports secure authentication, registration workflows and scalable delivery for international attendees.",
    image: "/projects/congreso.webp",
    featured: true,
    featuredOrder: 4,
    caseStudy: "/projects/gnosis-congress/",
    proof: "Secure registration for international attendees",
    tags: [
      TAGS.TYPESCRIPT,
      TAGS.NUXT,
      TAGS.HONO,
      TAGS.TAILWIND,
      TAGS.CLOUDFLARE,
      TAGS.BUN,
      TAGS.POSTGRE,
      TAGS.N8N,
    ],
    link: "https://congreso.gnosis.is",
  },
  {
    title: "RPA Migration",
    category: "UiPath to n8n + Puppeteer",
    description:
      "Migrated 11 UiPath processes and 38 sub-processes to reusable n8n workflows and Puppeteer/API patterns. Built a containerized TypeScript/Bun backend with Hono, isolated Chrome runners, typed APIs, export orchestration and an HTMX/SSE operations dashboard.",
    featured: true,
    featuredOrder: 3,
    caseStudy: "/projects/rpa-migration/",
    proof: "11 processes · 38 sub-processes",
    tags: [
      TAGS.HONO,
      TAGS.N8N,
      TAGS.BUN,
      TAGS.DOCKER,
      TAGS.POSTGRE,
    ],
  },
  {
    title: "Gnosis Platform",
    category: "Multilingual digital library",
    description:
      "A multilingual platform for reading, searching and managing digital content. Built with Rust, Axum, SvelteKit, PostgreSQL, Valkey and Meilisearch; it includes REST APIs and background workers, Azure OpenAI RAG with pgvector, Azure AI Speech narration and an offline-ready PWA with role-based administration.",
    featured: true,
    featuredOrder: 1,
    caseStudy: "/projects/gnosis-platform/",
    proof: "Planned launch: October 2026",
    tags: [TAGS.RUST, TAGS.SVELTE, TAGS.POSTGRE, TAGS.REDIS, TAGS.CLOUDFLARE],
  },
  {
    title: "Live Event Interpretation Platform",
    category: "Real-time speech interpretation · Planned launch October 2026",
    description:
      "Real-time platform that converts WebM/Opus audio into text, translates it into seven languages and creates per-sentence MP3 audio in parallel. A single Rust binary serves the Svelte frontend, API, metrics and WebSockets, designed for Oracle Cloud with a p95 latency target of up to five seconds.",
    featured: true,
    featuredOrder: 2,
    proof: "Seven languages · p95 target: ≤5 seconds",
    tags: [TAGS.RUST, TAGS.SVELTE, TAGS.TYPESCRIPT, TAGS.POSTGRE],
  },
  {
    title: "Holded Core",
    category: "Enterprise resource integration",
    description:
      "NestJS integration foundation connecting Magento 2, Shopify and Holded ERP through event-driven and adaptive-CRON processing. It establishes cross-store stock synchronization, reservations and asynchronous workflows with BullMQ, Redis and PostgreSQL.",
    caseStudy: "/projects/holded-core/",
    proof: "Integration foundation with automated stock-sync tests",
    tags: [TAGS.NEST, TAGS.POSTGRE, TAGS.NUXT, TAGS.REDIS, TAGS.DOCKER],
  },
  {
    title: "Gentlecan",
    category: "Dog grooming management system",
    description:
      "Full-stack operations platform for a dog-grooming salon, with Flutter and SvelteKit clients backed by Firebase. It provides calendar management, live occupancy indicators, customer segmentation, booking, pet profiles, galleries and automated reminders.",
    tags: [TAGS.FLUTTER, TAGS.SVELTE, TAGS.FIREBASE, TAGS.TYPESCRIPT],
  },
  {
    title: "Gnosis International Websites",
    category: "Multilingual websites · Germany, Netherlands & Romania",
    description:
      "Migrated two legacy websites and built a third from scratch on a reusable multilingual Astro architecture. The result is a serverless, low-maintenance content platform for German, Dutch and Romanian audiences.",
    tags: [
      TAGS.TYPESCRIPT,
      TAGS.ASTRO,
      TAGS.TAILWIND,
      TAGS.SUPABASE,
      TAGS.CLOUDFLARE,
    ],
  },
  {
    title: "Multilingual Content Automation",
    category: "Gnosis content workflow",
    description:
      "AI-supported localisation and publishing workflow for a large collection of Gnostic texts. The platform makes content accessible across languages while reducing manual translation and publication effort.",
    link: "https://books.gnosisdeutschland.org",
    github: "https://github.com/alexandrespindola/gnosisapp",
    image: "/projects/gnosis.webp",
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
    image: "/projects/alexandreportfolio.webp",
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
