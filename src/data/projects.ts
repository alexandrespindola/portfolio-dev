import TAGS from "./tags";

interface Project {
  title: string;
  description: string;
  link?: string;
  image: string;
  tags: {
    name: string;
    class: string;
    icon: any;
  }[];
  github?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Enterprise E-commerce Integration Platform",
    description:
      "Complex multi-system integration architecture connecting Magento 2, Shopify, and Holded ERP with real-time synchronization. Built with event-driven design using n8n workflows, PostgreSQL 17 with automated triggers, and Supabase Edge Functions. Features advanced inventory management with FIFO lot selection, automated invoice generation, bidirectional product sync, and custom Nuxt.js dashboard for manual interventions. The system handles 5 parallel workers with Redis queuing and RabbitMQ messaging, enabling seamless data flow between e-commerce platforms and enterprise resource planning systems.",
    link: "https://books.gnosisdeutschland.org",
    image: "https://assets-bunny-cdn.b-cdn.net/portfolio-dev/gnosis.webp",
    tags: [TAGS.N8N, TAGS.POSTGRE, TAGS.SUPABASE, TAGS.NUXT, TAGS.REDIS, TAGS.DOCKER],
  },
  {
    title: "International Gnostic Library",
    description:
      "Multilingual platform supporting 100+ languages with automated translation workflows. Built with Astro and Starlight template, featuring Strapi CMS for content management and n8n for intelligent automation. This innovative project integrates Google Gemini AI for automated translations, implements advanced i18n routing, and uses Tailwind CSS for a modern, responsive interface. The application leverages CDN distribution via Netlify for global performance, making the extensive Gnostic manuscript collection accessible to researchers and readers worldwide through automated content localization.",
    link: "https://books.gnosisdeutschland.org",
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
    image: "https://assets-bunny-cdn.b-cdn.net/portfolio-dev/titansdev.webp",
    tags: [TAGS.NUXT, TAGS.TAILWIND, TAGS.SASS, TAGS.STRAPI, TAGS.YARN, TAGS.TYPESCRIPT, TAGS.SUPABASE, TAGS.N8N, TAGS.CALCOM, TAGS.EVOLUTION, TAGS.NETLIFY],
  },
  {
    title: "Portfolio Alexandre Spindola",
    description:
      "The website was developed using Astro and Tailwind CSS, resulting in a modern, responsive portfolio. The use of Astro allows for optimized performance, while Tailwind CSS makes it easy to create an attractive and personalized design, reflecting the developer's expertise in contemporary technologies.",
    link: "/",
    image: "https://assets-bunny-cdn.b-cdn.net/portfolio-dev/alexandreportfolio.webp",
    tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.BUN, TAGS.TYPESCRIPT, TAGS.NETLIFY, TAGS.BUNNY],
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
    title: "SendNotes",
    description:
      'Developed with the TALL Stack (Tailwind CSS, Alpine.js, Laravel and Livewire), SendNotes allow create notes and share them by email. Hosted on Fly.io. Developed with the "The Complete TALL Stack Tutorial" by Josh Cirre',
    link: "https://sendnotes-tall.fly.dev",
    image: "https://assets-bunny-cdn.b-cdn.net/portfolio-dev/sendnotes2.webp",
    tags: [TAGS.LARAVEL, TAGS.TAILWIND, TAGS.ALPINE, TAGS.LIVEWIRE, TAGS.WIREUI, TAGS.SUPABASE, TAGS.PHP, TAGS.FLY],
    github: "https://github.com/alexandrespindola/sendnotes-tall",
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