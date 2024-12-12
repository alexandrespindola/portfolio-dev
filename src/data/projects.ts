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
    image: "/projects/healthysthetics.webp",
    tags: [TAGS.WORDPRESS, TAGS.ELEMENTOR, TAGS.PHP, TAGS.N8N, TAGS.CALCOM, TAGS.BUNNY],
  },
  {
    title: "TitansDev",
    description:
      "Creation of a website for TitansDev - Digital Agency for Software Development and Digital Marketing, in Ourense, Spain. With a modern and bold design, it was created using Nuxt.js with Static Site Generation (SSG) technology. It includes a video call scheduling system with Cal.com and WhatsApp notification automation.",
    link: "https://titansdev.es",
    image: "/projects/titansdev.webp",
    tags: [TAGS.NUXT, TAGS.TAILWIND, TAGS.SASS, TAGS.STRAPI, TAGS.YARN, TAGS.TYPESCRIPT, TAGS.N8N, TAGS.CALCOM, TAGS.NETLIFY],
  },
  {
    title: "Portfolio Alexandre Spindola",
    description:
      "The website was developed using Astro and Tailwind CSS, resulting in a modern, responsive portfolio. The use of Astro allows for optimized performance, while Tailwind CSS makes it easy to create an attractive and personalized design, reflecting the developer's expertise in contemporary technologies.",
    link: "https://alexandrespindola.netlify.es",
    image: "/projects/alexandreportfolio.webp",
    tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.BUN, TAGS.TYPESCRIPT, TAGS.NETLIFY],
    github: "https://github.com/alexandrespindola/portfolio-dev",
  },
  {
    title: "PejoterDay",
    description:
      "This website was created with WordPress and Elementor, featuring a modern, responsive design for the PejoterDay event, aimed at training professionals in the financial sector. Using WooCommerce to sell passports and n8n for process automation, the platform offers information on programming and mentoring, providing an intuitive and efficient experience for users.",
    link: "https://pejoterday.com.br",
    image: "/projects/pejoterday.webp",
    tags: [TAGS.WORDPRESS, TAGS.ELEMENTOR, TAGS.PHP, TAGS.WOOCOMMERCE, TAGS.N8N],
  },
  {
    title: "Clínica Pélvica",
    description:
      "The website was developed using WordPress and Elementor, based on a design created in Adobe XD. The platform is dedicated to Clínica Pélvica, which offers physiotherapy services focused on women's health. With a modern and responsive layout, the site provides information on the treatments available, highlighting the clinic's humanized and specialized approach.",
    link: "https://clinicapelvica.com.br",
    image: "/projects/clinica-pelvica.webp",
    tags: [TAGS.WORDPRESS, TAGS.ELEMENTOR, TAGS.PHP],
  },
];

export default PROJECTS;