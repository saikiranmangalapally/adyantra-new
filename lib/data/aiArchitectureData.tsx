import React from "react";
import { ServicePageData } from "@/components/templates/ServicePageTemplate";

export const aiArchitectureData: Record<string, ServicePageData> = {
  "ai-architecture-consulting": {
    hero: {
      badge: "AI CONSULTING",
      title: <>Future-Proof Your Business With <span className="text-primary underline decoration-accent/60 decoration-4">Enterprise AI Architecture</span></>,
      description: "Don't get left behind. We provide high-level strategic consulting to help enterprise leadership identify, design, and deploy generative AI solutions that drastically reduce operational costs and create defensible market moats."
    },
    about: {
      title: "Strategic AI Implementation for Enterprises",
      paragraphs: [
        "The rapid advancement of Large Language Models (LLMs) and generative AI has created an adapt-or-die scenario for modern businesses. However, haphazardly buying AI software without a cohesive strategy leads to data silos, security vulnerabilities, and negative ROI. Adyantra Digital provides the technical and strategic oversight required for successful enterprise AI adoption.",
        "Our consulting process begins with a deep, forensic analysis of your current operational bottlenecks. We identify the exact workflows—from customer support to internal data retrieval—that are ripe for AI automation. We then architect a bespoke AI roadmap, detailing the exact models, infrastructure, and data governance policies required.",
        "We are model-agnostic. Whether your use case requires fine-tuning open-source models like Llama 3 for absolute data privacy, or leveraging the raw power of GPT-4o and Claude 3.5 Sonnet, we design the optimal architecture to maximize performance while minimizing computational costs (inference)."
      ],
      pillars: [
        "Forensic Enterprise Workflow & Bottleneck Audit",
        "Model-Agnostic AI Stack Selection & Benchmarking",
        "Enterprise Data Governance & Compliance (SOC2/GDPR)",
        "Fine-Tuning Open-Source LLMs (Llama 3/Mistral)",
        "Retrieval-Augmented Generation (RAG) Architecture Design",
        "Proof-of-Concept (PoC) Prototype Rapid Execution",
        "Executive Leadership & Internal Team AI Upskilling"
      ]
    },
    intro: {
      tagline: "Executive AI Strategy",
      headline: "Stop Experimenting. Start Engineering ROI.",
      description: "Move past toy AI tools and ChatGPT wrappers. We design scalable, secure, and highly integrated AI infrastructures that solve complex, multi-million dollar operational problems for your business."
    },
    subServices: [
      { title: "AI Readiness Audits", desc: "Evaluating your current tech stack and data cleanliness to determine if you are ready for LLM deployment.", href: "/contact", img: "/assets/img/service/ai-3d.png" },
      { title: "Custom LLM Strategy", desc: "Determining whether to use off-the-shelf APIs, RAG architecture, or fine-tune open-source models.", href: "/contact", img: "/assets/img/service/seo-3d.png" },
      { title: "Data Security & Governance", desc: "Establishing strict guardrails to ensure PII and proprietary IP are never leaked to public AI models.", href: "/contact", img: "/assets/img/service/webdev-3d.png" },
      { title: "Proof of Concept (PoC) Development", desc: "Rapid prototyping of AI solutions to prove ROI before committing to enterprise-wide deployment.", href: "/contact", img: "/assets/img/service/seo-3d.png" }
    ],
    processSteps: [
      { title: "Executive Discovery", description: "In-depth workshops with C-suite and department heads to identify high-cost operational bottlenecks.", timeline: "Weeks 1-2" },
      { title: "Technical Feasibility Audit", description: "Our engineers analyze your data warehouses, APIs, and infrastructure to assess AI readiness.", timeline: "Weeks 3-4" },
      { title: "Architecture Blueprinting", description: "Delivering a comprehensive technical roadmap, detailing the recommended AI stack, costs, and timeline.", timeline: "Weeks 5-6" },
      { title: "PoC Execution & Handoff", description: "Building a functional prototype for a single use-case to demonstrate measurable value to stakeholders.", timeline: "Weeks 7-10" }
    ],
    whyChooseUs: [
      { title: "Business-First Approach", description: "We don't implement AI for the sake of AI. Every recommendation is tied directly to reducing costs or increasing revenue." },
      { title: "Deep Technical Bench", description: "Our consultants are actual AI engineers and data scientists, not just high-level strategists." },
      { title: "Absolute Vendor Neutrality", description: "We are not tied to Microsoft, Google, or OpenAI. We recommend the exact model that fits your specific need and budget." },
      { title: "Security Obsessed", description: "We understand enterprise compliance. Our architectures utilize private VPCs and secure endpoints to protect your data." }
    ],
    faqData: [
      { q: "What is the difference between AI Consulting and AI Development?", a: "AI Consulting is the strategic phase; AI Development is the actual coding and deployment of that blueprint." },
      { q: "Is our data safe if we use AI?", a: "We design architectures using Enterprise APIs with zero-data-retention policies, or deploy open-source models locally within your own secure servers." },
      { q: "How do we know which AI model is right for us?", a: "We analyze the task requirements and run benchmark tests to determine the optimal model for speed and cost." },
      { q: "How long does a Proof of Concept (PoC) take?", a: "A functional PoC typically takes between 4 to 8 weeks to develop, test, and present." },
      { q: "Do you help train our internal team?", a: "Yes, we provide extensive workshops and documentation to upskill your internal team." }
    ]
  },
  "workflow-architecture": {
    hero: {
      badge: "SYSTEMS ARCHITECTURE",
      title: <>Eliminate Manual Operations With <span className="text-primary underline decoration-accent/60 decoration-4">Workflow Architecture</span></>,
      description: "Scale your output without scaling your headcount. We design and build hyper-efficient, fully automated digital workflows that connect your fragmented software stack into a single, cohesive engine."
    },
    about: {
      title: "Engineering the Invisible Workforce",
      paragraphs: [
        "In most scaling businesses, highly paid employees spend up to 40% of their day doing 'glue work'—manually moving data from a CRM to a spreadsheet, drafting repetitive emails, or chasing down approvals. This manual overhead destroys profit margins. Adyantra Digital solves this through expert Workflow Architecture.",
        "We are specialists in Business Process Automation (BPA). We conduct deep forensic audits of your daily operations to identify repetitive tasks. Then, utilizing enterprise-grade middleware like n8n, Make.com, or custom Node.js AWS Lambda functions, we build 'invisible bridges' between your disconnected software tools.",
        "Whether it's automating employee onboarding, building complex financial reconciliation loops, or creating dynamic project management triggers in Jira or Asana, our architectures ensure that data flows flawlessly and instantly across your organization, drastically reducing human error."
      ],
      pillars: [
        "Forensic Business Process Mapping & Blueprinting",
        "Enterprise Middleware Engineering (n8n/Make.com)",
        "Serverless Node.js & Python AWS Lambda Functions",
        "Zero-Touch Employee & Client Onboarding Loops",
        "Automated Financial & Invoicing Reconciliation",
        "Fault-Tolerant Auto-Retry & Error Catching Logic",
        "Real-Time Slack/Teams Operational Alerting"
      ]
    },
    intro: {
      tagline: "Operational Excellence",
      headline: "Stop Doing Software's Job",
      description: "We transform your business from a chaotic collection of disjointed apps into a streamlined, automated machine where data moves autonomously, allowing your team to focus strictly on high-value, creative work."
    },
    subServices: [
      { title: "SaaS API Integrations", desc: "Connecting distinct platforms (e.g., Salesforce, Slack, Jira, Stripe) to share data instantly.", href: "/contact", img: "/assets/img/service/ai-3d.png" },
      { title: "Custom Middleware Development", desc: "Building secure, scalable Node.js/Python serverless functions for tasks too complex for Zapier.", href: "/contact", img: "/assets/img/service/seo-3d.png" },
      { title: "HR & Onboarding Automation", desc: "Zero-touch employee onboarding: auto-generating contracts, creating software accounts, and assigning training.", href: "/contact", img: "/assets/img/service/webdev-3d.png" },
      { title: "Financial & Invoicing Loops", desc: "Automating quote-to-cash processes, syncing CRM closed deals directly into QuickBooks/Xero.", href: "/contact", img: "/assets/img/service/seo-3d.png" }
    ],
    processSteps: [
      { title: "Workflow Audit & Mapping", description: "Shadowing your team and creating detailed BPMN diagrams of current bottlenecks.", timeline: "Weeks 1-2" },
      { title: "System Architecture Design", description: "Selecting the optimal integration platforms and designing the data schema.", timeline: "Weeks 2-3" },
      { title: "Build & Sandbox Testing", description: "Developing the automations in a secure testing environment to ensure edge-cases are handled.", timeline: "Weeks 4-6" },
      { title: "Deployment & Monitoring", description: "Pushing the workflows live, setting up error-alerting via Slack, and training your staff.", timeline: "Weeks 7-8" }
    ],
    whyChooseUs: [
      { title: "Beyond Basic Zapier", description: "We handle complex data transformations, arrays, and iterative loops that basic automation tools can't support." },
      { title: "Fault-Tolerant Design", description: "Our architectures include auto-retries, error catching, and redundant fallbacks so your operations never halt." },
      { title: "Security First", description: "We utilize secure webhook protocols (HMAC), API key rotation, and encrypted data transmission." },
      { title: "Scalable Infrastructure", description: "Whether processing 10 tasks a day or 100,000, our serverless architectures scale automatically without crashing." }
    ],
    faqData: [
      { q: "Is this the same as Zapier?", a: "Zapier is for simple tasks. For enterprise Workflow Architecture involving complex logic and high volume, we use Make.com, n8n, or custom serverless code." },
      { q: "What happens if a software platform changes its API?", a: "We build robust error-handling. If an endpoint fails, the system automatically alerts our technical team via Slack." },
      { q: "Can you automate legacy software that doesn't have an API?", a: "Yes, via direct SQL database connections, secure FTP file drops, or Robotic Process Automation (RPA)." },
      { q: "How do we calculate the ROI of Workflow Architecture?", a: "We calculate ROI based on hours saved multiplied by hourly rates. Clients typically see full ROI within 3-6 months." },
      { q: "Will automation replace my employees?", a: "No, it frees up your skilled staff from copy-paste admin work to focus on strategic growth." }
    ]
  },
  "ai-agent-development": {
    hero: {
      badge: "CUSTOM AI AGENTS",
      title: <>Deploy Autonomous Workforces With <span className="text-primary underline decoration-accent/60 decoration-4">AI Agent Development</span></>,
      description: "Move beyond simple chatbots. We engineer autonomous AI Agents capable of reasoning, utilizing external tools, and executing complex, multi-step workflows entirely on their own."
    },
    about: {
      title: "Engineering Autonomous Digital Employees",
      paragraphs: [
        "The current paradigm of AI relies on human prompting—you ask a question, the AI gives an answer. Adyantra Digital is pioneering the next frontier: Autonomous AI Agents. These are sophisticated AI systems that are given a high-level goal and determine the necessary steps to achieve it without human intervention.",
        "We build Agents using advanced frameworks like LangChain, AutoGen, and CrewAI. These frameworks allow the LLM to 'think' (reasoning), access the internet, read databases, and use tools via API (like sending emails, updating CRMs, or executing code).",
        "Imagine an AI Agent acting as a Financial Analyst: You ask for a competitor report. The Agent independently browses the web for recent SEC filings, parses the PDFs, runs financial models using a Python interpreter, and generates a formatted dashboard—all autonomously. We build these bespoke, highly capable systems tailored to your specific operational needs."
      ],
      pillars: [
        "Autonomous Agentic Reasoning (ReAct Prompting)",
        "Multi-Agent Team Orchestration (CrewAI/AutoGen)",
        "Custom Python Tool Binding & API Function Calling",
        "Human-in-the-Loop Approval & Permission Safety",
        "LangChain & LlamaIndex RAG Data Memory Ingestion",
        "Autonomous Web Scraping & Market Research Agents",
        "Token-Optimized Low-Cost Inference Architecture"
      ]
    },
    intro: {
      tagline: "Autonomous Execution",
      headline: "AI That Actually Does the Work For You",
      description: "We don't just build tools that generate text; we build autonomous software entities that can interact with your existing tech stack, execute decisions, and solve complex problems continuously."
    },
    subServices: [
      { title: "Autonomous Research Agents", desc: "Bots that continuously scrape the web, monitor competitors, and summarize industry data autonomously.", href: "/contact", img: "/assets/img/service/ai-3d.png" },
      { title: "Multi-Agent Systems (CrewAI)", desc: "Orchestrating teams of AI agents (e.g., a 'Researcher' agent passing data to a 'Writer' agent) to complete complex projects.", href: "/contact", img: "/assets/img/service/seo-3d.png" },
      { title: "Internal Copilots", desc: "Custom AI assistants integrated into your internal Slack or Microsoft Teams that can query company databases on command.", href: "/contact", img: "/assets/img/service/webdev-3d.png" },
      { title: "Automated Coding Agents", desc: "Systems that can analyze bug reports, write patches, and submit pull requests in your GitHub repositories.", href: "/contact", img: "/assets/img/service/seo-3d.png" }
    ],
    processSteps: [
      { title: "Use-Case Definition & Logic Flow", description: "Defining the exact goal of the agent, the data it needs to access, and the actions it is permitted to take.", timeline: "Weeks 1-2" },
      { title: "Framework & LLM Selection", description: "Selecting the optimal foundation model (GPT-4o, Claude) and orchestration framework (LangChain, AutoGen).", timeline: "Week 3" },
      { title: "Tool Binding & API Integration", description: "Programming the custom tools (Python scripts, REST APIs) that the agent will use to interact with the world.", timeline: "Weeks 4-6" },
      { title: "Guardrail Testing & Deployment", description: "Extensive sandboxed testing to ensure the agent doesn't enter infinite loops or execute destructive actions.", timeline: "Weeks 7-9" }
    ],
    whyChooseUs: [
      { title: "Pioneers in Agentic AI", description: "We are at the cutting edge of LLM research, actively deploying production-ready multi-agent systems." },
      { title: "Strict Safety Guardrails", description: "Autonomous AI can be dangerous if left unchecked. We implement strict 'Human-in-the-Loop' approvals for critical actions." },
      { title: "Advanced Tool Creation", description: "We don't just use pre-built tools. Our Python developers write custom functions for the AI to interact with your proprietary systems." },
      { title: "Cost-Optimized Inference", description: "Agents consume massive amounts of tokens while 'thinking'. We optimize prompts and use caching to keep API costs strictly controlled." }
    ],
    faqData: [
      { q: "What is the difference between an AI Agent and ChatGPT?", a: "ChatGPT is reactive; an AI Agent is proactive and autonomous, planning and executing multi-step tasks independently." },
      { q: "Is it safe to let an AI Agent act autonomously?", a: "We implement strict Human-in-the-Loop approvals for sensitive actions." },
      { q: "What frameworks do you use to build AI Agents?", a: "LangChain, LlamaIndex, AutoGen, and CrewAI." },
      { q: "How expensive are AI Agents to run?", a: "We optimize inference using hybrid model routing to keep token costs strictly managed." },
      { q: "Can an AI Agent integrate with our custom internal software?", a: "Yes, by writing custom Python tools and API connectors." }
    ]
  },
  "whatsapp-crm": {
    hero: {
      badge: "CONVERSATIONAL COMMERCE",
      title: <>Turn Chats Into Revenue With <span className="text-primary underline decoration-accent/60 decoration-4">WhatsApp & CRM Integration</span></>,
      description: "WhatsApp has a 98% open rate. We build powerful conversational commerce engines by integrating the WhatsApp Business API directly into your CRM, enabling automated sales, instant support, and mass broadcasting at scale."
    },
    about: {
      title: "Unlocking the World's Most Powerful Channel",
      paragraphs: [
        "Email marketing is suffering from declining open rates, and cold calling is highly inefficient. WhatsApp is the most direct, intimate channel to reach your customers, boasting near-100% visibility. However, managing WhatsApp manually on a single phone is impossible to scale. Adyantra Digital solves this by engineering robust WhatsApp Business API infrastructures.",
        "We connect the official Meta WhatsApp API directly into your CRM (HubSpot, Salesforce, GoHighLevel). This allows your entire sales team to manage conversations from a centralized dashboard, track chat history permanently against the contact record, and trigger automated messages based on CRM deal stages.",
        "Furthermore, we layer conversational AI (chatbots) on top of this infrastructure. We build intelligent flows that can qualify leads, answer FAQs, process e-commerce orders, and book appointments directly within the WhatsApp interface, providing a frictionless experience for your customers."
      ],
      pillars: [
        "Official Meta WhatsApp Business API Provisioning",
        "Centralized 2-Way CRM Integration (HubSpot/Salesforce)",
        "ChatGPT-Powered Conversational In-Chat Bots",
        "Automated WhatsApp Sales Sequences & Abandoned Cart Recovery",
        "Meta-Approved Template Message Broadcast Management",
        "Multi-Agent Simultaneous Inbox Dashboard Setup",
        "Shopify Order & Shipping Notification Automation"
      ]
    },
    intro: {
      tagline: "Direct-to-Consumer Communication",
      headline: "Engage Customers Where They Actually Spend Their Time",
      description: "We transform WhatsApp from a simple messaging app into a highly automated, deeply integrated sales and support powerhouse for your business."
    },
    subServices: [
      { title: "WhatsApp API to CRM Integration", desc: "Syncing all chats, media, and statuses directly into HubSpot, Salesforce, or Zoho.", href: "/contact", img: "/assets/img/service/ai-3d.png" },
      { title: "Automated Sales Sequences", desc: "Triggering abandoned cart reminders and meeting follow-ups via WhatsApp automatically.", href: "/contact", img: "/assets/img/service/seo-3d.png" },
      { title: "AI WhatsApp Chatbots", desc: "Deploying ChatGPT-powered bots to handle 24/7 customer support and lead qualification in-chat.", href: "/contact", img: "/assets/img/service/webdev-3d.png" },
      { title: "Compliant Broadcast Campaigns", desc: "Managing template approvals and sending mass promotional messages without getting banned.", href: "/contact", img: "/assets/img/service/seo-3d.png" }
    ],
    processSteps: [
      { title: "API Provisioning & Verification", description: "We handle the complex Meta Business verification process and provision your official WhatsApp API number.", timeline: "Weeks 1-2" },
      { title: "CRM Architecture & Sync", description: "Engineering the two-way sync between the WhatsApp API provider and your CRM.", timeline: "Weeks 2-3" },
      { title: "Automation & Bot Building", description: "Designing the conversational flows, integrating AI, and setting up automated trigger sequences.", timeline: "Weeks 3-5" },
      { title: "Template Approval & Launch", description: "Submitting High-Quality Message Templates to Meta for approval and launching the system.", timeline: "Week 6" }
    ],
    whyChooseUs: [
      { title: "Meta API Experts", description: "We navigate strict Meta compliance guidelines so you don't risk getting your number banned." },
      { title: "Seamless CRM Data", description: "We ensure every single message is logged in your CRM, maintaining perfect data integrity for your sales team." },
      { title: "Advanced Conversational AI", description: "We don't build frustrating 'Press 1' bots. We use LLMs for natural, fluid conversation." },
      { title: "Multi-Agent Dashboards", description: "We set up infrastructure allowing 50+ sales reps to handle WhatsApp chats simultaneously from one number." }
    ],
    faqData: [
      { q: "WhatsApp App vs. WhatsApp Business API?", a: "The free App is for 1 phone; the API allows unlimited reps, CRM syncing, AI chatbots, and bulk broadcasts." },
      { q: "Can my number get banned?", a: "We keep you 100% compliant using official API channels and Meta-approved templates." },
      { q: "How much does the WhatsApp API cost?", a: "Meta charges per 24-hour conversation window depending on country and message type." },
      { q: "Can we use our existing phone number?", a: "Yes, we can migrate your landline or mobile number to the official API." },
      { q: "Do you integrate with Shopify?", a: "Yes, for order confirmations, shipping alerts, and abandoned cart recovery." }
    ]
  }
};
