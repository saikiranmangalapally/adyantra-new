import React from "react";
import { ServicePageData } from "@/components/templates/ServicePageTemplate";

export const aiArchitectureData: Record<string, ServicePageData> = {
  "ai-architecture-consulting": {
    hero: {
      badge: "ENTERPRISE AI ARCHITECTURE",
      title: <>Build Resilient AI Systems With <span className="text-primary underline decoration-accent/60 decoration-4">Enterprise Architecture</span></>,
      description: "Scale AI initiatives from prototype to production with zero data vulnerability. We architect enterprise LLM gateways, vector database pipelines, and secure API middleware engineered for high throughput, sub-100ms latency, and strict SOC2 compliance."
    },
    about: {
      title: "Mission-Critical AI Infrastructure Engineering",
      paragraphs: [
        "Deploying artificial intelligence inside enterprise environments involves significant engineering hurdles: vendor lock-in, unpredictable API latency, data leakage risks, and uncontrollable token costs. Toy demos and unmanaged API calls collapse under production traffic loads.",
        "Adyantra Digital designs and deploys robust enterprise AI architectures. We construct secure LLM gateways featuring model fallback routing, semantic caching, rate limiting, and strict PII redacting filters. Our vector database pipelines (Pinecone, Qdrant, pgvector) ensure accurate retrieval for domain-specific RAG applications.",
        "By enforcing strict zero-trust principles and containerized microservice deployments, we enable organizations to leverage frontier AI models with complete confidence in security and uptime."
      ],
      pillars: [
        "Enterprise LLM Gateway Design (Model Fallback, Caching & Cost Caps)",
        "Sub-100ms API Latency Infrastructure & Global Edge Deployments",
        "Zero-Trust Security, Data Isolation & PII Sanitization Filters",
        "Scalable Vector Database Architecture (Qdrant, Pinecone & pgvector)",
        "SOC2, HIPAA & GDPR Architectural Compliance Guardrails",
        "Idempotent Event-Driven Microservices on Kubernetes & Docker",
        "Full Telemetry, Token Observability & Automated Error Alerting"
      ]
    },
    intro: {
      tagline: "Enterprise AI Architecture",
      headline: "Production-Grade AI Built for Scale, Speed, and Compliance",
      description: "We design and deploy mission-critical AI systems engineered for resilient high-throughput production environments."
    },
    subServices: [
      { title: "Enterprise AI Blueprints", desc: "Detailed technical architecture documentation mapping model selection, security, and cloud infrastructure.", href: "/contact", img: "/assets/img/service/illustrations/service-ai-architecture.svg" },
      { title: "LLM Gateway & Security", desc: "Centralized API gateway with automatic fallback routing, semantic caching, and token cost caps.", href: "/contact", img: "/assets/img/service/illustrations/service-ai-agents.svg" },
      { title: "Compliance & PII Guardrails", desc: "Automated sanitization filters ensuring proprietary client data is never leaked to external models.", href: "/contact", img: "/assets/img/service/illustrations/service-ai-audit.svg" },
      { title: "Sub-100ms Edge Infrastructure", desc: "Deploying lightweight models and edge caching for instant global response times.", href: "/contact", img: "/assets/img/service/illustrations/service-web-development.svg" }
    ],
    processSteps: [
      { title: "System & Security Audit", description: "Evaluating existing cloud architecture, data privacy requirements, and volume projections.", timeline: "Week 1" },
      { title: "Architectural Blueprinting", description: "Designing containerized microservices, vector search pipelines, and failover topologies.", timeline: "Weeks 1-2" },
      { title: "Prototype & Stress Testing", description: "Simulating heavy concurrency, testing fallback triggers, and verifying PII scrubbing filters.", timeline: "Weeks 2-4" },
      { title: "Production Rollout & Monitoring", description: "Deploying to production cloud environments with Prometheus observability and live alerts.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "99.99% Uptime Architecture", description: "Multi-model fallback logic ensures your application never goes down when an individual LLM provider suffers an outage." },
      { title: "-60% Token Cost Reduction", description: "Semantic caching and intelligent prompt compression cut monthly API expenditure significantly." },
      { title: "Zero-Trust Data Isolation", description: "Client data is processed through private VPC endpoints without exposure to public training models." }
    ],
    faqData: [
      { q: "How do you protect proprietary corporate data when using AI models?", a: "We deploy private VPC networking, automated PII redaction middleware, and enforce zero-data-retention agreements with enterprise AI providers like Anthropic and OpenAI." },
      { q: "What is an LLM Gateway and why does our company need one?", a: "An LLM Gateway is a centralized router managing all internal AI requests. It provides automated failover between models, enforces rate limits, logs usage telemetry, and caches common queries to cut token costs." }
    ]
  },

  "workflow-architecture": {
    hero: {
      badge: "FAULT-TOLERANT ARCHITECTURE",
      title: <>Connect Disparate Systems With <span className="text-primary underline decoration-accent/60 decoration-4">Event-Driven Workflows</span></>,
      description: "Eliminate broken webhooks and manual data syncs. We architect fault-tolerant, event-driven integration systems with idempotent queues, automated retries, and dead-letter handling across your entire enterprise software stack."
    },
    about: {
      title: "Industrial-Grade Integration Engineering",
      paragraphs: [
        "As businesses adopt dozens of specialized SaaS tools, data fragmentation causes operational gridlock. Standard point-to-point Zapier triggers frequently fail silently during API rate limits or schema changes, creating invisible revenue loss.",
        "Adyantra Digital engineers industrial-strength workflow architectures using n8n, Apache Kafka, and cloud message queues (AWS SQS / Google Cloud Pub/Sub). We implement idempotent execution logic so transactions are never processed twice, and dead-letter queues capture edge-case payloads for safe reprocessing.",
        "Whether syncing multi-million-dollar ERP inventory or orchestrating complex customer onboarding sequences, our architectures guarantee 100% data integrity."
      ],
      pillars: [
        "Event-Driven Architecture with Guaranteed At-Least-Once Delivery",
        "Idempotent Message Processing & Duplicate Prevention",
        "Dead-Letter Queues (DLQ) & Automated Exponential Backoff Retries",
        "Scalable Message Brokers (Cloud Pub/Sub, Redis & RabbitMQ)",
        "End-to-End Payload Encryption in Transit & at Rest",
        "Self-Hosted n8n & Dockerized Integration Microservices",
        "Real-Time Health Monitoring & Instant PagerDuty/Slack Alerts"
      ]
    },
    intro: {
      tagline: "Resilient Integration",
      headline: "Zero Data Loss Across Complex Business Workflows",
      description: "We build reliable event-driven integration pipelines connecting your software tools with guaranteed execution."
    },
    subServices: [
      { title: "Event-Driven Integration Mesh", desc: "Connecting CRMs, payment gateways, and databases through asynchronous message brokers.", href: "/contact", img: "/assets/img/service/illustrations/service-workflow-integrations.svg" },
      { title: "Idempotent Queue Pipelines", desc: "Guaranteed single-execution logic preventing duplicate customer billings or double task assignments.", href: "/contact", img: "/assets/img/service/illustrations/service-crm-automation.svg" },
      { title: "Custom Middleware Development", desc: "Lightweight Node.js microservices transforming custom data schemas between legacy and modern APIs.", href: "/contact", img: "/assets/img/service/illustrations/service-ai-architecture.svg" },
      { title: "Zero-Loss Disaster Recovery", desc: "Dead-letter queues and automated error alerting ensuring failed payloads are safely re-executed.", href: "/contact", img: "/assets/img/service/illustrations/service-ai-audit.svg" }
    ],
    processSteps: [
      { title: "Data Flow & Failure Audit", description: "Mapping every external API dependency, payload format, rate limit, and historical failure mode.", timeline: "Week 1" },
      { title: "Queue & Schema Architecture", description: "Designing asynchronous message queues, payload schemas, and automated retry policies.", timeline: "Weeks 1-2" },
      { title: "Pipeline Build & Concurrency Stress Testing", description: "Deploying microservices and bombarding endpoints with burst traffic to verify stability.", timeline: "Weeks 2-3" },
      { title: "Monitoring & SLA Signoff", description: "Configuring telemetry dashboards and delivering comprehensive failover documentation.", timeline: "Week 4" }
    ],
    whyChooseUs: [
      { title: "Zero Dropped Transactions", description: "Our message buffering architectures survive third-party API outages without losing data." },
      { title: "Self-Hosted Privacy", description: "We deploy secure, self-hosted integration clusters behind your own corporate firewall." },
      { title: "Sub-Second Data Sync", description: "Event-driven webhooks process transactions near-instantaneously across all connected systems." }
    ],
    faqData: [
      { q: "What is idempotent execution and why is it important?", a: "Idempotency ensures that even if an event notification is received multiple times due to a network glitch, the underlying action (such as charging a card or creating an invoice) is executed only once." },
      { q: "Can you replace our existing expensive Zapier account with self-hosted n8n?", a: "Yes. Self-hosting n8n in your private cloud eliminates per-task billing, reduces monthly software costs by up to 80%, and guarantees complete data privacy." }
    ]
  },

  "ai-agent-development": {
    hero: {
      badge: "AUTONOMOUS AI AGENTS",
      title: <>Deploy Autonomous Capacity With <span className="text-primary underline decoration-accent/60 decoration-4">Custom AI Agents</span></>,
      description: "Move beyond passive chatbots. We engineer autonomous AI agents equipped with cognitive reasoning loops, external tool execution, and vector memory to execute complex multi-step business workflows with 99.4% accuracy."
    },
    about: {
      title: "Autonomous Decision-Making & Workflow Execution",
      paragraphs: [
        "Simple chatbots can only answer pre-scripted questions. Autonomous AI agents, by contrast, possess the capability to reason, formulate multi-step plans, access external databases, call third-party APIs, and evaluate the success of their own actions.",
        "Adyantra Digital builds task-specific autonomous agent squads. Whether acting as an autonomous Sales Development Rep (SDR) researching leads and personalizing outreach, or a technical triage agent resolving software tickets, our agents execute business processes without human intervention.",
        "We implement strict execution guardrails, state-machine boundaries, and human-in-the-loop checkpoints to guarantee safe, reliable operation in production environments."
      ],
      pillars: [
        "Multi-Step Autonomous Reasoning & Tool-Use Execution",
        "Long-Term & Short-Term Vector Memory Persistence",
        "Deterministic State-Machine Guardrails & Safety Boundaries",
        "Integration with External APIs (Search, SQL, CRM & Email)",
        "Human-in-the-Loop Escalation & Verification Checkpoints",
        "Self-Reflective Evaluation & Error-Recovery Feedback Loops",
        "Multi-Agent Collaborative Squad Architectures"
      ]
    },
    intro: {
      tagline: "Autonomous Intelligence",
      headline: "AI Agents That Think, Plan, and Execute Real Work",
      description: "We deploy cognitive software agents capable of executing end-to-end multi-step business operations autonomously."
    },
    subServices: [
      { title: "Autonomous SDR Agents", desc: "Agents that research prospect company accounts, verify lead criteria, and draft bespoke email outreach.", href: "/contact", img: "/assets/img/service/illustrations/service-ai-agents.svg" },
      { title: "Custom Tool Execution", desc: "Empowering agents to query SQL databases, execute API calls, and generate reports on demand.", href: "/contact", img: "/assets/img/service/illustrations/service-workflow-integrations.svg" },
      { title: "RAG & Vector Memory", desc: "Long-term episodic memory allowing agents to recall past customer conversations and preferences.", href: "/contact", img: "/assets/img/service/illustrations/service-ai-architecture.svg" },
      { title: "Multi-Agent Collaboration", desc: "Coordinated squads of specialized agents (Researcher, Writer, Reviewer) solving complex tasks together.", href: "/contact", img: "/assets/img/service/illustrations/service-analytics.svg" }
    ],
    processSteps: [
      { title: "Agent Role & Scope Blueprinting", description: "Defining the agent's objective, permissible actions, external tools, and escalation conditions.", timeline: "Week 1" },
      { title: "Cognitive Loop & Tool Engineering", description: "Writing deterministic system logic, tool definitions, and fallback error handling in LangChain/CrewAI.", timeline: "Weeks 1-3" },
      { title: "Evaluation & Adversarial Testing", description: "Running automated benchmark evaluations against hundreds of edge cases to verify 99%+ accuracy.", timeline: "Weeks 3-4" },
      { title: "Deployment with Human Oversight", description: "Launching into production with a verification dashboard for monitoring agent reasoning steps.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "99.4% Task Pass Rate", description: "Rigorous adversarial testing ensures agents execute assigned tasks without getting trapped in loops." },
      { title: "Deterministic Guardrails", description: "Hardcoded safety boundaries prevent unauthorized financial or contractual commitments." },
      { title: "Full Execution Transparency", description: "Every thought step, tool call, and decision is logged with comprehensive audit trails." }
    ],
    faqData: [
      { q: "How do you prevent an autonomous agent from taking harmful actions?", a: "We enforce strict permission boundaries using state machines. High-risk actions (such as publishing code or executing financial refunds) require explicit human approval via 1-click Slack buttons." },
      { q: "What frameworks do you build AI agents with?", a: "We build on top of industry-standard frameworks including LangGraph, CrewAI, AutoGen, and custom Python/TypeScript orchestration runtimes." }
    ]
  },

  "whatsapp-crm": {
    hero: {
      badge: "WHATSAPP COMMERCE & CRM",
      title: <>Turn Conversations Into Revenue With <span className="text-primary underline decoration-accent/60 decoration-4">WhatsApp CRM Automation</span></>,
      description: "Reach your customers where they spend their day. We build official Meta WhatsApp Business Cloud API automation—combining interactive product catalogs, 24/7 sales bots, and two-way CRM synchronization that delivers 98% open rates."
    },
    about: {
      title: "High-Conversion Conversational Commerce",
      paragraphs: [
        "Email open rates hover around 20%, while SMS is frequently blocked by carrier spam filters. WhatsApp offers an astonishing 98% message open rate and 45%+ response rate, making it the most direct and effective communication channel in the world.",
        "Adyantra Digital builds compliant conversational commerce engines using the official Meta WhatsApp Business Cloud API. We deploy interactive catalogs, automated lead triage, instant order checkout, and appointment scheduling directly inside WhatsApp chat.",
        "Every incoming conversation and customer detail is synchronized in real time with HubSpot, Salesforce, or Zoho, giving your sales team an unfair competitive edge."
      ],
      pillars: [
        "Official Meta WhatsApp Cloud API Setup & Verified Green Badge",
        "Interactive Native Product Catalogs & 1-Tap Checkout Flows",
        "Sub-5-Second Conversational AI Lead Qualification",
        "Two-Way Real-Time Synchronization with Enterprise CRMs",
        "Personalized Segmentation Broadcasts & Opt-In Compliance",
        "Automated Multi-Agent Sales & Support Team Inbox Routing",
        "Attributable Revenue & Conversion Attribution Dashboards"
      ]
    },
    intro: {
      tagline: "Conversational Commerce",
      headline: "Engage Buyers on the World's Most Popular Messaging App",
      description: "We deploy official WhatsApp Business automation that qualifies leads, showcases products, and closes sales directly inside chat."
    },
    subServices: [
      { title: "Official WhatsApp Cloud API", desc: "Direct integration with Meta's cloud infrastructure for maximum delivery speed and verified green badge.", href: "/contact", img: "/assets/img/service/illustrations/service-whatsapp-crm.svg" },
      { title: "Interactive Product Catalogs", desc: "Allowing customers to browse product collections, select variants, and purchase inside chat.", href: "/contact", img: "/assets/img/service/illustrations/service-ecommerce.svg" },
      { title: "Two-Way CRM Synchronization", desc: "Auto-logging every WhatsApp message, attachment, and stage update directly into your CRM deal record.", href: "/contact", img: "/assets/img/service/illustrations/service-crm-automation.svg" },
      { title: "Targeted Retargeting Broadcasts", desc: "Sending personalized notifications and cart recovery reminders to opted-in buyer segments.", href: "/contact", img: "/assets/img/service/illustrations/service-sales-followup.svg" }
    ],
    processSteps: [
      { title: "Meta Verification & Number Setup", description: "Registering your brand phone number on Meta Business Manager and securing official API access.", timeline: "Week 1" },
      { title: "Catalog & Dialogue Architecture", description: "Configuring interactive menus, product catalogs, qualification prompts, and fallback routes.", timeline: "Weeks 1-2" },
      { title: "CRM Webhook Integration", description: "Connecting WhatsApp webhooks to your CRM to sync contacts, deals, and team notifications.", timeline: "Weeks 2-3" },
      { title: "Launch & Broadcast Cadence", description: "Going live and configuring automated cart abandonment and event reminder broadcast triggers.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "98% Inbound Open Rate", description: "WhatsApp messages are seen and read almost instantly by nearly every customer." },
      { title: "Official Meta Partner API", description: "Zero risk of phone number bans by adhering strictly to Meta's Cloud API guidelines." },
      { title: "Unified Team Inbox", description: "Allow multiple human sales reps to respond to customer inquiries from one central business number." }
    ],
    faqData: [
      { q: "Is our business phone number safe from bans on WhatsApp?", a: "Yes. By using the official Meta WhatsApp Business Cloud API through verified Meta Business accounts, your number is completely protected from unapproved third-party bot bans." },
      { q: "Can multiple team members manage customer chats simultaneously?", a: "Yes. We deploy a multi-agent team inbox where incoming conversations are auto-routed to available sales representatives with full customer CRM history visible." }
    ]
  }
};
