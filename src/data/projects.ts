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
  title: "Job Tracker Deutschland - German Tech Job Search Platform",
  description:
    "Modern full-stack job search application built with monorepo architecture, aggregating opportunities from the German Federal Employment Agency API. Features React frontend with TypeScript, Hono backend runtime on Bun, and shared type system for end-to-end type safety. Implements advanced UI/UX with glassmorphism design, micro-interactions, and responsive grid layouts. The platform includes intelligent search filters, pagination, skeleton loading states, and alternative application pathways for jobs without direct URLs. Deployed with modern CI/CD pipeline using Railway for backend services and Netlify for frontend hosting, demonstrating enterprise-level architecture and deployment practices.",
    image: "https://assets-bunny-cdn.b-cdn.net/portfolio-dev/job-tracker.webp",
  tags: [TAGS.TYPESCRIPT, TAGS.REACT, TAGS.TAILWIND, TAGS.HONO, TAGS.BUN, TAGS.VITE, TAGS.RAILWAY, TAGS.NETLIFY],
  link: "https://german-job-tracker.netlify.app",
  github: "https://github.com/alexandrespindola/job-tracker-mono"
},
{
  title: "Enterprise E-commerce Integration Dashboard",
  description:
    "Custom-built administrative dashboard developed with Nuxt.js and Bun runtime for managing complex e-commerce integration workflows. Features secure authentication via Supabase Auth with role-based access control, deployed on Netlify with edge computing capabilities. The dashboard provides real-time monitoring of integration processes, manual activation controls for Supabase Edge Functions, and comprehensive oversight of automated workflows connecting Magento 2, Shopify, and Holded ERP systems.",
    image: "https://assets-bunny-cdn.b-cdn.net/portfolio-dev/dashboard.webp",
  tags: [TAGS.TYPESCRIPT, TAGS.VUE, TAGS.NUXT, TAGS.TAILWIND, TAGS.BUN, TAGS.NETLIFY, TAGS.SUPABASE, TAGS.N8N]
},
  {
    title: "Enterprise E-commerce Integration Platform",
    description:
      "Complex multi-system integration architecture connecting Magento 2, Shopify, and Holded ERP with real-time synchronization. Built with event-driven design using n8n workflows, PostgreSQL 17 with automated triggers, and Supabase Edge Functions. Features advanced inventory management with FIFO lot selection, automated invoice generation, bidirectional product sync, and custom Nuxt.js dashboard for manual interventions. The system handles 5 parallel workers with Redis queuing and RabbitMQ messaging, enabling seamless data flow between e-commerce platforms and enterprise resource planning systems.",
    image: "https://assets-bunny-cdn.b-cdn.net/portfolio-dev/ecommerce-erp2.webp",
    tags: [TAGS.N8N, TAGS.POSTGRE, TAGS.SUPABASE, TAGS.NUXT, TAGS.REDIS, TAGS.DOCKER],
  },
  {
    title: "AI-Powered Multilingual Automation",
    description:
      "Multilingual gnostic platform supporting 100+ languages with automated translation workflows. Built with Astro and Starlight template, featuring Strapi CMS for content management and n8n for intelligent automation. This innovative project integrates Google Gemini AI for automated translations, implements advanced i18n routing, and uses Tailwind CSS for a modern, responsive interface. The application leverages CDN distribution via Netlify for global performance, making the extensive Gnostic manuscript collection accessible to researchers and readers worldwide through automated content localization.",
    link: "https://books.gnosisdeutschland.org",
    github: "https://github.com/alexandrespindola/gnosisapp",
    image: "https://assets-bunny-cdn.b-cdn.net/portfolio-dev/gnosis.webp",
    tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.STRAPI, TAGS.N8N, TAGS.PNPM, TAGS.NETLIFY],
  },
  {
    title: "Healthysthetics",
    description:
      "Creation of a website from scratch for Healthysthetics Micropigmentation and Aesthetic Clinic, in Murcia, Spain. With a modern and personalized layout, fast loading with CDN, appointment scheduling system and WhatsApp notification automation.",
    link: "https://healthysthetics.es",
    image: "https://assets-bunny-cdn.b-cdn.net/portfolio-dev/healthysthetics.webp",
    tags: [TAGS.WORDPRESS, TAGS.ELEMENTOR, TAGS.PHP, TAGS.N8N, TAGS.CALCOM, TAGS.EVOLUTION, TAGS.BUNNY, TAGS.HESTIA, TAGS.DIGITALOCEAN],
  },
  {
    title: "TitansDev",
    description:
      "Creation of a website for TitansDev - Digital Agency for Software Development and Digital Marketing, in Ourense, Spain. With a modern and bold design, it was created using Nuxt.js with Static Site Generation (SSG) technology. It includes a video call scheduling system with Cal.com and WhatsApp notification automation.",
    link: "https://titansdev.es",
    github: "https://github.com/alexandrespindola/titansdev",
    image: "https://assets-bunny-cdn.b-cdn.net/portfolio-dev/titansdev.webp",
    tags: [TAGS.NUXT, TAGS.TAILWIND, TAGS.SASS, TAGS.STRAPI, TAGS.YARN, TAGS.TYPESCRIPT, TAGS.SUPABASE, TAGS.N8N, TAGS.CALCOM, TAGS.EVOLUTION, TAGS.NETLIFY],
  },
  {
    title: "Portfolio Alexandre Spindola",
    description:
      "The website was developed using Astro and Tailwind CSS, resulting in a modern, responsive portfolio. The use of Astro allows for optimized performance, while Tailwind CSS makes it easy to create an attractive and personalized design, reflecting the developer's expertise in contemporary technologies.",
    link: "/",
    image: "https://assets-bunny-cdn.b-cdn.net/portfolio-dev/alexandreportfolio.webp",
    tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.BUN, TAGS.TYPESCRIPT, TAGS.DENO, TAGS.BUNNY],
    github: "https://github.com/alexandrespindola/portfolio-dev",
  },
  {
    title: "MyReminders",
    description:
      "MyReminders is a web application developed from scratch with the TALL Stack (Tailwind CSS, Alpine.js, Laravel, and Livewire), allowing users to create reminders that will be automatically sent to their email. The application uses Laravel for the backend, Livewire for dynamic updates, Tailwind CSS for responsive design, and Alpine.js for interactivity on the client. It also uses Blade and WireUI, a powerful toolkit designed to revolutionize the development workflow. The app is hosted on Fly.io, which offers a scalable and efficient infrastructure for web applications, and uses Mailgun to send emails.",
    link: "https://myreminder.fly.dev",
    image: "https://assets-bunny-cdn.b-cdn.net/portfolio-dev/myreminders.webp",
    tags: [TAGS.LARAVEL, TAGS.TAILWIND, TAGS.ALPINE, TAGS.LIVEWIRE, TAGS.WIREUI, TAGS.SUPABASE, TAGS.PHP, TAGS.FLY],
    github: "https://github.com/alexandrespindola/reminders",
  },
  {
    title: "Gnosis Deutschland Institutional Platform",
    description:
      "Institutional WordPress platform built with robust architecture and intelligent automation workflows, featuring multilingual support across 6 languages for global accessibility. Deployed on HestiaCP infrastructure with Digital Ocean hosting, the system implements Bunny CDN and Cloudflare for optimized content delivery and enhanced performance worldwide. Features advanced automation through n8n integration for seamless workflow management, Evolution API for WhatsApp notification systems, and integrated contact forms with automated response capabilities",
    link: "https://gnosisdeutschland.org",
    image: "https://assets-bunny-cdn.b-cdn.net/portfolio-dev/gnosis-deutschland.webp",
    tags: [TAGS.WORDPRESS, TAGS.ELEMENTOR, TAGS.PHP, TAGS.WOOCOMMERCE, TAGS.N8N, TAGS.EVOLUTION, TAGS.HESTIA, TAGS.DIGITALOCEAN],
  },
  {
    title: "PejoterDay",
    description:
      "This website was created with WordPress and Elementor, featuring a modern, responsive design for the PejoterDay event, aimed at training professionals in the financial sector. Using WooCommerce to sell passports and n8n for process automation, the platform offers information on programming and mentoring, providing an intuitive and efficient experience for users.",
    link: "https://pejoterday.com.br",
    image: "https://assets-bunny-cdn.b-cdn.net/portfolio-dev/pejoterday.webp",
    tags: [TAGS.WORDPRESS, TAGS.ELEMENTOR, TAGS.PHP, TAGS.WOOCOMMERCE, TAGS.N8N, TAGS.EVOLUTION, TAGS.HESTIA, TAGS.DIGITALOCEAN],
  },
  {
    title: "Clínica Pélvica",
    description:
      "The website was developed using WordPress and Elementor, based on a design created in Adobe XD. The platform is dedicated to Clínica Pélvica, which offers physiotherapy services focused on women's health. With a modern and responsive layout, the site provides information on the treatments available, highlighting the clinic's humanized and specialized approach.",
    link: "https://clinicapelvica.com.br",
    image: "https://assets-bunny-cdn.b-cdn.net/portfolio-dev/clinica-pelvica.webp",
    tags: [TAGS.WORDPRESS, TAGS.ELEMENTOR, TAGS.PHP, TAGS.HESTIA, TAGS.DIGITALOCEAN],
  },
];

export default PROJECTS;