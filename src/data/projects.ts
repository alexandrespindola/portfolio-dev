import TAGS from "./tags.ts";

interface Project {
  title: string;
  description: string;
  link?: string;
  image: string;
  tags: {
    name: string;
    class: string;
    icon: string;
  }[];
  github?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Content Alchemist - AI-Augmented Campaigns | 2025",
    description:
      "Built an AI-augmented marketing campaign generator that transforms cleaned transcripts into multi-channel content packages for Facebook, Instagram, and LinkedIn. The system orchestrates Deno Deploy (text sanitization) and Google Gemini (generation) via n8n, uses Google Sheets + Apps Script as the human interface, and delivers organized assets to Google Drive. Optional Valkey/Redis caching prevents duplicate processing and controls costs, while structured JSON prompts ensure deterministic, platform-optimized output.",
    image: "https://assets-bunny-cdn.b-cdn.net/portfolio-dev/content-alchemist.webp",
    tags: [TAGS.TYPESCRIPT, TAGS.N8N, TAGS.DENO, TAGS.REDIS, TAGS.TAILWIND, TAGS.JSON, TAGS.GOOGLECLOUD],
    github: "https://github.com/alexandrespindola/content-alchemist",
  },
  {
    title: "HeroChat - Heroku Go Chat | 2025",
    description:
      "Developed a Go CLI tool for interacting with advanced AI models via Heroku, enabling developers to send prompts and receive real-time responses from Claude 4 Sonnet in the terminal. Features include persistent conversation history, tagging, and interactive navigation. Built with Cobra for user-friendly commands and colorized output, Heroku Go Chat showcases expertise in Go, API integration, and developer-focused tool-building.",
    image:
      "https://assets-bunny-cdn.b-cdn.net/portfolio-dev/herochat.webp",
    tags: [TAGS.GO, TAGS.HEROKU, TAGS.CLAUDE, TAGS.JSON],
    github: "https://github.com/alexandrespindola/heroku-go-chat",
  },
  {
    title: "Job Tracker Deutschland | 2025",
    description:
      "Addressed the challenge of a fragmented job market by creating a centralized platform that aggregates opportunities directly from the German Federal Employment Agency. The solution provides job seekers with a single, reliable source for tech roles, featuring an intuitive, modern interface with advanced search filters to simplify and accelerate the job search process. The platform enhances user experience by offering clear application pathways, even for listings without direct links, ensuring a seamless journey from discovery to application.",
    image: "https://assets-bunny-cdn.b-cdn.net/portfolio-dev/job-tracker.webp",
    tags: [
      TAGS.TYPESCRIPT,
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.HONO,
      TAGS.BUN,
      TAGS.VITE,
      TAGS.RAILWAY,
      TAGS.NETLIFY,
    ],
    link: "https://german-job-tracker.netlify.app",
    github: "https://github.com/alexandrespindola/job-tracker-mono",
  },
  {
    title: "Enterprise E-commerce Integration Dashboard | 2025",
    description:
      "Solved the lack of visibility and control in complex e-commerce operations by delivering a custom administrative dashboard. This central control panel provides real-time monitoring of the automated workflows connecting multiple sales channels and an ERP system. It empowers administrators to manually oversee and intervene in critical processes, ensuring data integrity, reducing errors, and minimizing the need for technical support when managing inventory and order synchronization.",
    image: "https://assets-bunny-cdn.b-cdn.net/portfolio-dev/dashboard.webp",
    tags: [
      TAGS.TYPESCRIPT,
      TAGS.VUE,
      TAGS.NUXT,
      TAGS.TAILWIND,
      TAGS.BUN,
      TAGS.NETLIFY,
      TAGS.SUPABASE,
      TAGS.N8N,
    ],
  },
  {
    title: "Enterprise E-commerce Integration Platform | 2025",
    description:
      "Resolved critical data inconsistencies for an e-commerce business operating across multiple platforms (Magento 2, Shopify) and an ERP. The solution is an event-driven integration architecture that ensures real-time, bidirectional synchronization of inventory, orders, and product data. This automation eliminates manual data entry, prevents overselling, and streamlines operations by implementing complex business logic for inventory management and automated invoicing, leading to significant gains in operational efficiency.",
    image:
      "https://assets-bunny-cdn.b-cdn.net/portfolio-dev/ecommerce-erp2.webp",
    tags: [
      TAGS.N8N,
      TAGS.POSTGRE,
      TAGS.SUPABASE,
      TAGS.NUXT,
      TAGS.REDIS,
      TAGS.DOCKER,
    ],
  },
  {
    title: "AI-Powered Multilingual Content Automation | 2025",
    description:
      "Overcame the language barrier for a global audience by building an intelligent platform to translate and publish a vast collection of gnostic manuscripts. The solution automates the localization process for over 100 languages using AI, making scholarly content accessible worldwide. This approach drastically reduces manual translation efforts and costs, ensuring that new and updated content is efficiently distributed to a global community of researchers and readers through a high-performance, easy-to-navigate website.",
    link: "https://books.gnosisdeutschland.org",
    github: "https://github.com/alexandrespindola/gnosisapp",
    image: "https://assets-bunny-cdn.b-cdn.net/portfolio-dev/gnosis.webp",
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
    title: "TitansDev Agency Website | 2024",
    description:
      "Established a strong digital presence for a software development agency by creating a modern, high-performance website to showcase its services. The site was designed to attract and convert potential clients with a bold, professional aesthetic and a seamless user experience. To streamline client acquisition, an integrated scheduling system with automated notifications was implemented, allowing leads to book consultations directly, improving the lead-to-client conversion funnel.",
    link: "https://titansdev.es",
    github: "https://github.com/alexandrespindola/titansdev",
    image: "https://assets-bunny-cdn.b-cdn.net/portfolio-dev/titansdev.webp",
    tags: [
      TAGS.NUXT,
      TAGS.TAILWIND,
      TAGS.SASS,
      TAGS.STRAPI,
      TAGS.YARN,
      TAGS.TYPESCRIPT,
      TAGS.SUPABASE,
      TAGS.N8N,
      TAGS.CALCOM,
      TAGS.EVOLUTION,
      TAGS.NETLIFY,
    ],
  },
  {
    title: "Portfolio Alexandre Spindola | 2024",
    description:
      "Showcased development expertise by building a modern, responsive, and high-performance personal portfolio. The project demonstrates proficiency in creating visually appealing and technically sound web applications, serving as a practical example of skills in contemporary web development practices and providing a central hub for professional information and project showcases.",
    link: "/",
    image:
      "https://assets-bunny-cdn.b-cdn.net/portfolio-dev/alexandreportfolio.webp",
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
