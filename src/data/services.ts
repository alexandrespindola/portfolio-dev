import FullStackIcon from "../components/icons/services/FullStackIcon.astro";
import AutomationIcon from "../components/icons/services/AutomationIcon.astro";
import DashboardIcon from "../components/icons/services/DashboardIcon.astro";
import IntegrationIcon from "../components/icons/services/IntegrationIcon.astro";
import AIIcon from "../components/icons/services/AIIcon.astro";
import APIIcon from "../components/icons/services/APIIcon.astro";

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
    title: "Full-Stack Web Development",
    description: "Development of modern and responsive web applications, from frontend to backend, using the latest technologies and development best practices.",
    features: [
      "Svelte, React, Vue.js and Astro applications",
      "Backend with Node.js, Go and TypeScript",
      "Responsive design and SEO optimized",
      "API and database integration",
      "Deployment on modern cloud platforms"
    ],
    icon: FullStackIcon,
    tagKeys: ["SVELTE", "VUE", "ASTRO", "TYPESCRIPT", "TAILWIND", "GO"]
  },
  {
    title: "Process Automation with N8N",
    description: "Creation of automated workflows to connect different platforms and systems, eliminating manual tasks and increasing operational efficiency.",
    features: [
      "E-commerce and ERP integration",
      "Marketing and sales automation",
      "Real-time data synchronization",
      "Custom and scalable workflows",
      "Monitoring and automatic alerts"
    ],
    icon: AutomationIcon,
    tagKeys: ["N8N", "SUPABASE", "POSTGRE", "REDIS", "DOCKER"]
  },
  {
    title: "Administrative Dashboards",
    description: "Development of custom control panels for operations monitoring, data analysis and business process management.",
    features: [
      "Real-time data visualization",
      "Interactive and exportable reports",
      "Intuitive and responsive interface",
      "Integration with multiple data sources",
      "Access control and permissions"
    ],
    icon: DashboardIcon,
    tagKeys: ["VUE", "NUXT", "TAILWIND", "SUPABASE", "TYPESCRIPT"]
  },
  {
    title: "System Integration",
    description: "Connecting different platforms and systems to create an integrated ecosystem that optimizes workflows and improves user experience.",
    features: [
      "REST and GraphQL APIs",
      "Webhooks and real-time events",
      "Bidirectional data synchronization",
      "Complex data mapping",
      "Error handling and automatic retry"
    ],
    icon: IntegrationIcon,
    tagKeys: ["N8N", "SUPABASE", "REDIS", "DOCKER", "TYPESCRIPT"]
  }
];

export default SERVICES;
