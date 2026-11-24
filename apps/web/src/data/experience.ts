const EXPERIENCE = [
  {
    date: "Mar 2026 - Present",
    title: "Senior Full-Stack, AI & Workflow Automation Engineer",
    company: "Value AG · Contract",
    location: "Germany · Remote",
    highlights: [
      { label: "RPA modernisation", text: "Migrating legacy UiPath RPA processes to self-hosted n8n and a custom headless browser automation service for a real estate valuation enterprise." },
      { label: "Browser automation platform", text: "Built a browser & document automation platform (TypeScript, Bun, Hono, Puppeteer, PostgreSQL, SvelteKit UI) with pg-boss locks, SSE logs, RBAC, encrypted vault and audit logs." },
      { label: "Self-hosted n8n & infra", text: "Architected n8n in Queue Mode (Docker Compose, workers, isolated JS/Python task runners, Redis, RabbitMQ) with Azure DevOps CI/CD and Rust validators for 1:1 output parity." },
      { label: "Enterprise & AI integrations", text: "Integrated Microsoft Graph (SharePoint, mail), REST APIs, OAuth2 and LLM workflows (OpenAI, Anthropic Claude, Azure OpenAI) for classification and structured data extraction." },
    ],
    link: "https://value.ag/home",
  },
  {
    date: "Jan 2025 - Mar 2026",
    title: "Full-Stack & Integration Engineer (TypeScript / Node.js / n8n) | Independent Contractor",
    company: "POROPO | Desarrollo de Software · Contract",
    location: "Spain · Remote",
    highlights: [
      { label: "Merchant infrastructure", text: "Built NestJS (Fastify) middleware syncing Magento 2, Shopify and Holded ERP, plus SvelteKit/Firebase applications and n8n workflows." },
      { label: "Reliable data flows", text: "Designed PostgreSQL/Drizzle architecture and event-driven job queues with BullMQ and Redis." },
      { label: "Tested services", text: "Developed high-throughput Fastify REST APIs with OpenAPI schemas and >80% test coverage." },
    ],
    link: "https://poropo.es",
  },
  {
    date: "Oct 2023 - Dec 2024",
    title: "Full-Stack Engineer (TypeScript / Node.js / Vue & Nuxt) | Independent Contractor",
    company: "TitansDev · Contract",
    location: "Spain · Remote",
    highlights: [
      { label: "Frontend engineering", text: "Built responsive web applications with Vue 3, Nuxt 3, Astro and TypeScript." },
      { label: "Backend & data layer", text: "Managed Node.js backend services and SQL databases, ensuring high availability, data integrity and secure API communication for client projects." },
      { label: "Quality", text: "Developed Vue.js/Nuxt.js automated testing suites and CI/CD quality gates." },
    ],
    link: "https://titansdev.es",
  },
  {
    date: "Dec 2021 - Sep 2023",
    title: "Full-Stack Web Developer & Automation Consultant",
    company: "Self-employed",
    location: "Brazil · Remote",
    highlights: [
      { label: "End-to-end delivery", text: "Delivered 10+ full-stack web projects and integrations for international clients, leading the full lifecycle from requirements and architecture to deployment and ongoing maintenance." },
      { label: "Performance & Edge", text: "Optimized applications for Core Web Vitals, SEO and Cloudflare Pages edge deployment." },
      { label: "CMS & workflows", text: "Customized headless CMS setups (Strapi, Directus, Supabase) and automated content management workflows." },
    ],
  },
];

export default EXPERIENCE;
