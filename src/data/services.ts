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
    title: "Enterprise & Web App Development",
    description: "Building scalable, production-ready applications combining modern frontend frameworks with robust backend architectures (Java/Node.js).",
    features: [
      "Enterprise Backend (Java/Spring Boot & Node.js)",
      "Modern Frontend (Vue.js, Nuxt & Angular)",
      "Cloud-Native Architectures (GCP Certified)",
      "RESTful API Design & Implementation",
      "Secure & Scalable Database Design"
    ],
    icon: FullStackIcon,
    tagKeys: ["JAVA", "SPRING", "ANGULAR", "TYPESCRIPT", "POSTGRE"]
  },
  {
    title: "Business Automation (n8n)",
    description: "Orchestrating complex workflows to reduce manual operational overhead, integrating ERPs, CRMs, and internal systems.",
    features: [
      "Workflow Orchestration with n8n",
      "Reduction of manual data entry tasks",
      "ERP & E-commerce Synchronization",
      "Automated Reporting & Alerting",
      "Error Handling & Retry Mechanisms"
    ],
    icon: AutomationIcon,
    tagKeys: ["N8N", "NODE", "DOCKER", "JSON", "GOOGLECLOUD"]
  },
  {
    title: "Internal Tools & Dashboards",
    description: "Developing custom administrative interfaces and control panels to empower support teams and improve operational decision-making.",
    features: [
      "Real-time Data Visualization",
      "Custom Admin Panels (Vue/React)",
      "Role-Based Access Control (RBAC)",
      "Interactive Reporting Tools",
      "User-Centric UI/UX Design"
    ],
    icon: DashboardIcon,
    tagKeys: ["VUE", "NUXT", "TAILWIND", "SUPABASE", "TYPESCRIPT"]
  },
  {
    title: "System Integration & Cloud Ops",
    description: "Connecting disparate systems into a unified ecosystem, ensuring data integrity and leveraging Google Cloud Platform services.",
    features: [
      "Legacy System Integration",
      "Cloud Infrastructure Management (GCP)",
      "Data Migration & Synchronization",
      "Serverless Functions Deployment",
      "Continuous Integration/Deployment (CI/CD)"
    ],
    icon: IntegrationIcon,
    tagKeys: ["GOOGLECLOUD", "KUBERNETES", "TERRAFORM", "REDIS", "DOCKER"]
  }
];

export default SERVICES;