import TAGS from "./tags";

interface Project {
  title: string;
  description: string;
  link: string;
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
    title: "Healthysthetics",
    description:
      "Creation of a website from scratch for Healthysthetics Micropigmentation and Aesthetic Clinic, in Murcia, Spain. With a modern and personalized layout, fast loading with CDN, appointment scheduling system and WhatsApp notification automation.",
    link: "https://healthysthetics.es",
    image: "https://assets-bunny-cdn.b-cdn.net/healthysthetics.webp",
    tags: [TAGS.WORDPRESS, TAGS.ELEMENTOR, TAGS.PHP, TAGS.N8N, TAGS.CALCOM, TAGS.EVOLUTION, TAGS.BUNNY, TAGS.HESTIA, TAGS.DIGITALOCEAN],
  },
  {
    title: "TitansDev",
    description:
      "Creation of a website for TitansDev - Digital Agency for Software Development and Digital Marketing, in Ourense, Spain. With a modern and bold design, it was created using Nuxt.js with Static Site Generation (SSG) technology. It includes a video call scheduling system with Cal.com and WhatsApp notification automation.",
    link: "https://titansdev.es",
    image: "https://assets-bunny-cdn.b-cdn.net/titansdev.webp",
    tags: [TAGS.NUXT, TAGS.TAILWIND, TAGS.SASS, TAGS.STRAPI, TAGS.YARN, TAGS.TYPESCRIPT, TAGS.N8N, TAGS.CALCOM, TAGS.EVOLUTION, TAGS.NETLIFY],
  },
  {
    title: "Portfolio Alexandre Spindola",
    description:
      "The website was developed using Astro and Tailwind CSS, resulting in a modern, responsive portfolio. The use of Astro allows for optimized performance, while Tailwind CSS makes it easy to create an attractive and personalized design, reflecting the developer's expertise in contemporary technologies.",
    link: "https://alexandrespindola.netlify.app",
    image: "https://assets-bunny-cdn.b-cdn.net/alexandreportfolio.webp",
    tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.BUN, TAGS.TYPESCRIPT, TAGS.NETLIFY, TAGS.BUNNY],
    github: "https://github.com/alexandrespindola/portfolio-dev",
  },
  {
    title: "PejoterDay",
    description:
      "This website was created with WordPress and Elementor, featuring a modern, responsive design for the PejoterDay event, aimed at training professionals in the financial sector. Using WooCommerce to sell passports and n8n for process automation, the platform offers information on programming and mentoring, providing an intuitive and efficient experience for users.",
    link: "https://pejoterday.com.br",
    image: "https://assets-bunny-cdn.b-cdn.net/pejoterday.webp",
    tags: [TAGS.WORDPRESS, TAGS.ELEMENTOR, TAGS.PHP, TAGS.WOOCOMMERCE, TAGS.N8N, TAGS.EVOLUTION, TAGS.HESTIA, TAGS.DIGITALOCEAN],
  },
  {
    title: "Clínica Pélvica",
    description:
      "The website was developed using WordPress and Elementor, based on a design created in Adobe XD. The platform is dedicated to Clínica Pélvica, which offers physiotherapy services focused on women's health. With a modern and responsive layout, the site provides information on the treatments available, highlighting the clinic's humanized and specialized approach.",
    link: "https://clinicapelvica.com.br",
    image: "https://assets-bunny-cdn.b-cdn.net/clinica-pelvica.webp",
    tags: [TAGS.WORDPRESS, TAGS.ELEMENTOR, TAGS.PHP, TAGS.HESTIA, TAGS.DIGITALOCEAN],
  },
];

export default PROJECTS;