import { ServicePageData } from "@/components/templates/ServicePageTemplate";
import { marketingData } from "./marketingData";
import { aiSystemsData } from "./aiSystemsData";
import { aiArchitectureData } from "./aiArchitectureData";

const defaultFallbackData: ServicePageData = {
  hero: {
    badge: "ENTERPRISE SOLUTIONS",
    title: "Transform Your Business With Intelligent Automation",
    description: "We engineer high-performance systems and custom AI workflows to accelerate growth, reduce operating costs, and scale your brand predictably."
  },
  about: {
    title: "Engineered For Scalable Business Growth",
    paragraphs: [
      "In a rapidly evolving digital marketplace, relying on legacy processes leads to operational bottlenecks and lost revenue. Adyantra Digital builds modern, high-efficiency digital ecosystems tailored to your strategic objectives.",
      "Our multi-disciplinary team of engineers, growth strategists, and AI architects work together to design, deploy, and optimize end-to-end solutions that deliver measurable ROI."
    ],
    pillars: ["Custom System Architecture", "Data Integrity & Security", "Measurable Performance ROI"]
  },
  intro: {
    tagline: "Expert Digital Solutions",
    headline: "Systematize Your Growth Strategy",
    description: "Eliminate manual effort and scale your operational velocity with our proven engineering framework."
  },
  subServices: [
    { title: "Strategic Architecture & Design", desc: "Custom blueprinting and technical roadmap development for your growth goals.", href: "/contact", img: "/assets/img/service/illustrations/service-ai-chatbots.svg" },
    { title: "Automated Workflow Integration", desc: "Connecting your software tools via secure APIs to streamline operations.", href: "/contact", img: "/assets/img/service/illustrations/service-email-workflows.svg" },
    { title: "Performance Optimization", desc: "Continuous testing and data analytics to maximize ROI and operational speed.", href: "/contact", img: "/assets/img/service/illustrations/service-web-development.svg" }
  ],
  processSteps: [
    { title: "Discovery & Technical Audit", description: "We analyze your existing workflows, data infrastructure, and growth bottlenecks.", timeline: "Week 1" },
    { title: "Architecture & System Design", description: "Blueprinting custom integrations, user flows, and software requirements.", timeline: "Weeks 2-3" },
    { title: "Engineering & Deployment", description: "Developing, testing, and launching the solution in a secure production environment.", timeline: "Weeks 4-6" },
    { title: "Optimization & Scaling", description: "Monitoring metrics, refining processes, and scaling volume autonomously.", timeline: "Ongoing" }
  ],
  whyChooseUs: [
    { title: "In-House Engineering Excellence", description: "Every line of code and workflow is engineered 100% in-house by senior technical experts." },
    { title: "Data-Driven ROI Focus", description: "We measure success by cost savings, lead velocity, and attributable revenue." },
    { title: "Enterprise Security Guardrails", description: "Strict data privacy compliance and robust fault-tolerant architecture." },
    { title: "End-to-End Implementation", description: "From initial consulting to final execution and team training, we handle everything." }
  ],
  faqData: [
    { q: "How quickly can we expect to see results?", a: "Initial workflow improvements and quick wins typically go live within 14-30 days, with full system maturity achieved within 60-90 days." },
    { q: "Can your solutions integrate with our current tech stack?", a: "Yes, we specialize in building custom API integrations and middleware to seamlessly connect with any modern CRM, ERP, or web platform." },
    { q: "Do you offer ongoing support and maintenance?", a: "We provide comprehensive retainers for continuous monitoring, optimization, and scaling as your business expands." }
  ]
};

const rawMap: Record<string, ServicePageData> = {
  ...marketingData,
  ...aiSystemsData,
  ...aiArchitectureData,
  "performance-marketing": marketingData["digital-marketing-growth"],
  "ai-automation": {
    ...aiSystemsData["whatsapp-crm"],
    hero: {
      badge: "ENTERPRISE AI ARCHITECTURE • AUTONOMOUS AGENTS",
      title: <>Automate Revenue Operations with <span className="text-primary underline decoration-accent/60 decoration-4">Autonomous AI &amp; CRM Agents</span></>,
      description: "Deploy cognitive lead qualification agents, bi-directional CRM syncing, and multi-channel conversational AI workflows that convert prospects instantly."
    }
  },
  "branding-creative-services": {
    ...marketingData["social-media-marketing"],
    hero: {
      badge: "BRAND IDENTITY & CREATIVE SERVICES",
      title: <>Craft Memorable Brand Authority With <span className="text-primary underline decoration-accent/60 decoration-4">Creative Design Systems</span></>,
      description: "Elevate your market perception with high-conversion visual design, direct-response ad creative suites, and authoritative brand architecture."
    }
  },
  "ecommerce-solutions": {
    ...marketingData["ecommerce-marketing"],
    hero: {
      badge: "HEADLESS ECOMMERCE • HIGH CONVERSION",
      title: <>Scale Online Store Revenue With <span className="text-primary underline decoration-accent/60 decoration-4">Composable E-Commerce</span></>,
      description: "Sub-second Next.js storefronts, automated cart recovery sequences, and algorithmic product recommendation funnels driving high AOV."
    }
  },
  "mobile-app-development": {
    ...marketingData["web-design-development"],
    hero: {
      badge: "CROSS-PLATFORM MOBILE ENGINEERING",
      title: <>Deploy Native &amp; Hybrid Apps With <span className="text-primary underline decoration-accent/60 decoration-4">React Native &amp; Swift</span></>,
      description: "High-performance iOS and Android applications engineered for fluid 60fps responsiveness, offline-first reliability, and seamless API sync."
    }
  },
  "ui-ux-product-design": {
    ...marketingData["web-design-development"],
    hero: {
      badge: "CONVERSION-FIRST PRODUCT DESIGN",
      title: <>Engineered For Retention With <span className="text-primary underline decoration-accent/60 decoration-4">Modern UI/UX Design Systems</span></>,
      description: "Data-driven user interface and experience design focused on eliminating checkout friction, maximizing session duration, and scaling conversion rates."
    }
  },
  "web-software-development": {
    ...marketingData["web-design-development"],
    hero: {
      badge: "NEXT.JS 15 & REACT WEB SOFTWARE",
      title: <>Sub-Second Load Times With <span className="text-primary underline decoration-accent/60 decoration-4">Modern Web Architecture</span></>,
      description: "Ultra-fast Next.js web applications, headless CMS backends, and server-side tracking pipelines engineered for 100/100 Core Web Vitals."
    }
  },
};

export const serviceDataMap: Record<string, ServicePageData> = new Proxy(rawMap, {
  get(target, prop: string) {
    if (prop in target) {
      return target[prop];
    }
    return defaultFallbackData;
  }
});
