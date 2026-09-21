import FullStackIcon from "../components/icons/services/FullStackIcon.astro";
import AutomationIcon from "../components/icons/services/AutomationIcon.astro";
import DashboardIcon from "../components/icons/services/DashboardIcon.astro";
import IntegrationIcon from "../components/icons/services/IntegrationIcon.astro";

type AstroIconComponent = (props: { class?: string }) => unknown;

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: AstroIconComponent; // Astro component
  tagKeys: string[];
}

const SERVICES: Service[] = [
  {
    title: "AI-Enabled Product Engineering",
    description: "Building reliable products and web platforms with Rust, TypeScript, Svelte, Vue and modern API architecture.",
    features: [
      "Rust, Axum, NestJS, Hono and REST/OpenAPI services",
      "SvelteKit, Astro, Vue and Nuxt frontends",
      "RAG, semantic retrieval and AI-assisted workflows",
      "PostgreSQL, pgvector and full-text search",
      "Cloudflare and GCP-ready delivery"
    ],
    icon: FullStackIcon,
    tagKeys: ["RUST", "NEST", "SVELTE", "TYPESCRIPT"]
  },
  {
    title: "AI & Workflow Automation",
    description: "Replacing manual and legacy RPA processes with observable n8n, browser and LLM-powered workflows.",
    features: [
      "Self-hosted n8n, Docker workers and Cloudflare Tunnel",
      "Puppeteer browser automation and DOM extraction",
      "LLM classification, extraction and content pipelines",
      "Queued jobs, retries and operational visibility",
      "ERP, webhook and OAuth2 integrations"
    ],
    icon: AutomationIcon,
    tagKeys: ["N8N", "NODE", "DOCKER", "JSON"]
  },
  {
    title: "Platform Modernisation",
    description: "Migrating WordPress and legacy products to multilingual, serverless platforms that are fast to operate and easy to maintain.",
    features: [
      "Astro content collections and Markdown workflows",
      "Multilingual routing and international SEO",
      "Svelte/Vue operational dashboards with SSE",
      "Role-based administration and secure authentication",
      "CDN-first delivery and optimised assets"
    ],
    icon: DashboardIcon,
    tagKeys: ["ASTRO", "SVELTE", "VUE", "CLOUDFLARE"]
  },
  {
    title: "E-commerce & Systems Integration",
    description: "Connecting commerce, ERP and internal systems through resilient middleware, queues and auditable data flows.",
    features: [
      "Magento 2, Shopify and Holded ERP synchronisation",
      "Event-driven processing and adaptive schedules",
      "Async jobs with Redis/Valkey and BullMQ",
      "Data migrations, testing and health checks",
      "Docker, GCP, Linux and CI/CD operations"
    ],
    icon: IntegrationIcon,
    tagKeys: ["NEST", "POSTGRE", "REDIS", "DOCKER"]
  }
];

export default SERVICES;
