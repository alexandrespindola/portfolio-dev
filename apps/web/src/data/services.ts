import AIIcon from "../components/icons/services/AIIcon.astro";
import AutomationIcon from "../components/icons/services/AutomationIcon.astro";
import DistributedIcon from "../components/icons/services/DistributedIcon.astro";
import FullStackIcon from "../components/icons/services/FullStackIcon.astro";

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
    title: "Forward Deployed AI Engineering",
    description: "Working directly with stakeholders to turn a business problem into an AI system running in production, from discovery to rollout.",
    features: [
      "Stakeholder discovery, scoping and fast prototypes",
      "LLM features with Claude, OpenAI and Azure OpenAI",
      "MCP servers, tool calling and structured outputs",
      "RAG with pgvector, embeddings and streaming chat",
      "Human-in-the-loop approval, audit logs and privacy by design"
    ],
    icon: AIIcon,
    tagKeys: ["CLAUDE", "TYPESCRIPT", "RUST", "POSTGRE"]
  },
  {
    title: "Workflow & RPA Automation",
    description: "Replacing manual work and legacy RPA with observable n8n, browser and LLM-powered workflows.",
    features: [
      "UiPath to n8n migration with output-parity validation",
      "Self-hosted n8n in Queue Mode on Docker",
      "Puppeteer browser automation for complex web portals",
      "pg-boss queues, SSE logs, RBAC and audit trails",
      "Microsoft Graph, REST APIs, webhooks and OAuth2"
    ],
    icon: AutomationIcon,
    tagKeys: ["N8N", "BUN", "HONO", "DOCKER"]
  },
  {
    title: "Real-time AI & Data Systems",
    description: "Streaming speech, translation and analytics pipelines that stay fast and measurable in production.",
    features: [
      "Speech-to-Text and Text-to-Speech with Azure AI Speech",
      "Live LLM translation with automatic fallback",
      "WebSockets and SSE streaming to many clients",
      "DuckDB/DuckLake batch ingestion and analytics",
      "Anomaly detection, A/B and switchback experiments"
    ],
    icon: DistributedIcon,
    tagKeys: ["RUST", "SVELTE", "POSTGRE", "REDIS"]
  },
  {
    title: "Full-Stack Product Engineering",
    description: "Typed, tested products and integrations in TypeScript and Rust, from API design to multilingual frontends.",
    features: [
      "TypeScript (Node.js, Bun, Hono, NestJS) and Rust (Axum, SQLx)",
      "SvelteKit, Nuxt and Astro frontends in many languages",
      "PostgreSQL design, query tuning and OpenAPI contracts",
      "ERP and e-commerce sync (Magento 2, Shopify, Holded)",
      "Docker, Cloudflare, GCP, Railway and CI/CD"
    ],
    icon: FullStackIcon,
    tagKeys: ["TYPESCRIPT", "SVELTE", "NEST", "CLOUDFLARE"]
  }
];

export default SERVICES;
