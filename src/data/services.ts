interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string; // Nome do componente Astro
  tagKeys: string[]; // Chaves das tags no objeto TAGS
}

const SERVICES: Service[] = [
  {
    title: "Full-Stack Web Development",
    description: "Development of modern and responsive web applications, from frontend to backend, using the latest technologies and development best practices.",
    features: [
      "React, Vue.js and Astro applications",
      "Backend with Node.js, Go and TypeScript",
      "Responsive design and SEO optimized",
      "API and database integration",
      "Deployment on modern cloud platforms"
    ],
    icon: "CodeIcon",
    tagKeys: ["REACT", "VUE", "ASTRO", "TYPESCRIPT", "TAILWIND", "GO"]
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
    icon: "BriefcaseIcon",
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
    icon: "ProfileCheck",
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
    icon: "LinkIcon",
    tagKeys: ["N8N", "SUPABASE", "REDIS", "DOCKER", "TYPESCRIPT"]
  },
  {
    title: "AI-Powered Solutions",
    description: "Implementation of AI features to automate processes, improve user experience and extract valuable insights from data.",
    features: [
      "AI-powered content automation",
      "Chatbots and virtual assistants",
      "Predictive data analysis",
      "Natural language processing",
      "Integration with modern AI models"
    ],
    icon: "CodeIcon",
    tagKeys: ["N8N", "CLAUDE", "GEMINI", "TYPESCRIPT", "DENO"]
  },
  {
    title: "High-Performance APIs",
    description: "Development of ultra-fast, scalable APIs using Go and modern architectural patterns to handle high traffic loads with minimal latency.",
    features: [
      "Go-based REST and GraphQL APIs",
      "Microservices architecture",
      "High-throughput data processing",
      "Real-time communication protocols",
      "Performance monitoring and optimization"
    ],
    icon: "CodeIcon",
    tagKeys: ["GO", "DOCKER", "REDIS", "TYPESCRIPT", "RAILWAY"]
  },
  {
    title: "Distributed Systems & Microservices",
    description: "Architecture and development of distributed systems using microservices patterns, ensuring scalability, reliability, and maintainability across cloud platforms.",
    features: [
      "Microservices architecture design",
      "Service mesh implementation",
      "Distributed data management",
      "Load balancing and auto-scaling",
      "Cross-platform deployment strategies"
    ],
    icon: "BriefcaseIcon",
    tagKeys: ["DOCKER", "GO", "TYPESCRIPT", "CLOUDFLARE", "REDIS"]
  },
  {
    title: "Technical Consulting",
    description: "Strategic guidance for software architecture, technology selection and development process optimization to maximize results.",
    features: [
      "Scalable system architecture",
      "Code review and best practices",
      "Technology migration strategy",
      "Performance optimization",
      "Development mentoring"
    ],
    icon: "ProfileCheck",
    tagKeys: ["TYPESCRIPT", "GO", "DOCKER", "REDIS", "SUPABASE"]
  }
];

export default SERVICES;
