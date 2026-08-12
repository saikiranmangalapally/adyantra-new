export interface AIService {
  slug: string;
  title: string;
  headline: string;
  tagline: string;
  description: string;
  icon: string;
  category: "Conversational AI" | "AI Agents" | "Automation";
  checklist?: string[];
  introduction?: {
    badge: string;
    heading: string;
    paragraphs: string[];
  };
  overview: {
    heading: string;
    paragraphs: string[];
    bestFor: string;
  };
  features: string[];
  subServices?: {
    title: string;
    description: string;
    icon: string;
  }[];
  whyChooseUs?: {
    title: string;
    description: string;
    icon?: string;
  }[];
  testimonials?: {
    name: string;
    role: string;
    quote: string;
    initials: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
    timeline: string;
  }[];
  tools: string[];
  caseStudy: {
    brand: string;
    icon: string;
    challenge: string;
    solution: string;
    metrics: { value: string; label: string }[];
  };
  pricing: {
    starter: { price: string; features: string[] };
    growth: { price: string; features: string[] };
    scale: { price: string; features: string[] };
  };
  faqs: { q: string; a: string }[];
  related: string[];
}

export const aiServicesData: AIService[] = [
  {
    slug: "chatbot-development",
    title: "AI Chatbot Development",
    headline: "Automate Sales & Support with AI Chatbots",
    tagline: "Deploy custom-trained AI chatbots that answer queries, qualify leads, and book meetings 24/7.",
    description: "Our AI chatbots are built on advanced LLMs (like GPT-4) and trained exclusively on your business data. They don't just answer FAQs — they guide users through the sales funnel.",
    icon: "🤖",
    category: "Conversational AI",
    overview: {
      heading: "Why Custom AI Chatbots?",
      paragraphs: [
        "Traditional chatbots use rigid decision trees that frustrate users. Modern AI chatbots understand context, intent, and natural language.",
        "We build secure, hallucination-free chatbots that integrate directly with your CRM, inventory, or booking system, acting as a 24/7 digital employee."
      ],
      bestFor: "E-commerce, SaaS, Real Estate, and Healthcare companies with high customer inquiry volumes.",
    },
    features: [
      "Natural Language Understanding (NLU)",
      "Multi-lingual support (50+ languages)",
      "CRM & ERP Integration (HubSpot, Salesforce)",
      "Human handoff protocols",
      "Analytics & conversation insights",
      "Custom personality tuning"
    ],
    process: [
      { step: "01", title: "Data Ingestion", description: "We scrape your website, knowledge base, and past support tickets to create a training corpus.", timeline: "Week 1" },
      { step: "02", title: "Model Tuning", description: "We configure the LLM, set up retrieval-augmented generation (RAG), and define the bot's persona.", timeline: "Week 2" },
      { step: "03", title: "Integration", description: "We connect the bot to your website, WhatsApp, and internal CRM tools.", timeline: "Week 3" },
      { step: "04", title: "Testing & Go-Live", description: "Rigorous testing with human-in-the-loop validation before public deployment.", timeline: "Week 4" }
    ],
    tools: ["OpenAI / GPT-4", "LangChain", "Pinecone", "Botpress", "Voiceflow"],
    caseStudy: {
      brand: "ARTECHSHIELD",
      icon: "🛡️",
      challenge: "Sales team was overwhelmed with repetitive basic inquiries, causing a 4-hour delay in lead response times.",
      solution: "Deployed a custom RAG-based AI chatbot trained on their product documentation that auto-qualified leads and routed complex queries to human agents.",
      metrics: [
        { value: "60s", label: "Response Time" },
        { value: "70%", label: "Queries Resolved" },
        { value: "3.5x", label: "More Meetings Booked" },
        { value: "0", label: "Added Headcount" }
      ]
    },
    pricing: {
      starter: {
        price: "₹40,000",
        features: ["Website Widget", "Standard FAQs", "Email capture", "Basic Analytics"]
      },
      growth: {
        price: "₹75,000",
        features: ["Custom RAG Knowledge", "WhatsApp Integration", "CRM Sync", "Human Handoff"]
      },
      scale: {
        price: "Custom",
        features: ["Multi-agent system", "API Integrations", "Custom LLM Hosting", "Dedicated Support"]
      }
    },
    faqs: [
      { q: "Will the AI hallucinate or invent answers?", a: "No. We use strict prompting and RAG architecture to constrain the AI strictly to your approved knowledge base." },
      { q: "How long does deployment take?", a: "Most custom chatbots are live within 3 to 4 weeks depending on integration complexity." },
      { q: "Can it speak regional Indian languages?", a: "Yes, our bots support Hindi, Telugu, Tamil, and other regional languages flawlessly." }
    ],
    related: ["whatsapp-ai-chatbot", "ai-agents", "ai-customer-support"]
  },
  {
    slug: "whatsapp-ai-chatbot",
    title: "WhatsApp AI Chatbot",
    headline: "Turn WhatsApp into a Sales Engine",
    tagline: "Engage your customers where they spend the most time with an intelligent WhatsApp automation system.",
    description: "With over 2.5 billion users, WhatsApp is the most direct channel to your customers. We build AI that talks, sells, and supports directly on WhatsApp.",
    icon: "💬",
    category: "Conversational AI",
    overview: {
      heading: "The Power of WhatsApp AI",
      paragraphs: [
        "Email open rates are plummeting. WhatsApp offers a 98% open rate, making it the ultimate channel for sales, support, and marketing.",
        "We integrate official WhatsApp Business API with advanced AI models to create conversational commerce experiences."
      ],
      bestFor: "D2C brands, EdTech, Real Estate, and Retail businesses targeting the Indian market.",
    },
    features: [
      "Official WhatsApp Cloud API Integration",
      "Interactive Messages (Buttons, Lists)",
      "Automated Drip Campaigns",
      "Payment Gateway Integration",
      "Multimedia Support (Images, PDFs)",
      "Automated abandoned cart recovery"
    ],
    process: [
      { step: "01", title: "API Setup", description: "We handle the Meta Business verification and WhatsApp API approval process.", timeline: "Week 1" },
      { step: "02", title: "Flow Design", description: "Mapping out the conversational flows for sales, support, and marketing.", timeline: "Week 2" },
      { step: "03", title: "AI Integration", description: "Connecting the AI brain and your internal databases to the WhatsApp interface.", timeline: "Week 3" },
      { step: "04", title: "Launch", description: "Deploying the bot and setting up your marketing templates.", timeline: "Week 4" }
    ],
    tools: ["WhatsApp Cloud API", "Interakt / Wati", "OpenAI", "Make.com"],
    caseStudy: {
      brand: "Kalivi Vanam",
      icon: "🌿",
      challenge: "High volume of catalog requests and order tracking queries handled manually on WhatsApp.",
      solution: "End-to-end WhatsApp automation covering catalog browsing, ordering, and automated shipping updates.",
      metrics: [
        { value: "45%", label: "Conversion Rate" },
        { value: "24/7", label: "Order Taking" },
        { value: "80%", label: "Reduction in Support Calls" },
        { value: "₹12L", label: "Generated in Month 1" }
      ]
    },
    pricing: {
      starter: {
        price: "₹35,000",
        features: ["API Setup", "Basic FAQ Flow", "Contact Capture", "Broadcast Setup"]
      },
      growth: {
        price: "₹65,000",
        features: ["AI Intent Recognition", "Catalog Integration", "Abandoned Cart Flow", "Zendesk/HubSpot Sync"]
      },
      scale: {
        price: "Custom",
        features: ["Full Commerce Setup", "Complex ERP Sync", "Custom Dashboards", "Priority Support"]
      }
    },
    faqs: [
      { q: "Do I need an official WhatsApp API?", a: "Yes, we build on the official API to ensure your number isn't banned and to enable interactive messaging." },
      { q: "Can we send broadcast marketing messages?", a: "Yes, you can send template messages to opted-in users for offers, updates, and newsletters." },
      { q: "What happens if the bot can't answer?", a: "The conversation is automatically routed to a human agent on a shared inbox dashboard." }
    ],
    related: ["chatbot-development", "ecommerce-ai", "marketing-automation"]
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation",
    headline: "Scale Your Marketing on Autopilot",
    tagline: "Connect your tools, sync your data, and automate your multi-channel marketing campaigns.",
    description: "Stop manually downloading CSVs and moving data between tools. We build intelligent marketing automation pipelines that execute campaigns, score leads, and track attribution automatically.",
    icon: "⚡",
    category: "Automation",
    overview: {
      heading: "Data-Driven Marketing, Automated",
      paragraphs: [
        "Modern marketing requires speed. If a lead isn't contacted within 5 minutes, conversion rates drop by 80%.",
        "We build webhook-driven architectures that connect your ads, landing pages, CRM, and email marketing platforms into a single, automated revenue engine."
      ],
      bestFor: "B2B Service Providers, SaaS companies, and Agencies with complex lead generation funnels.",
    },
    features: [
      "Cross-platform data sync",
      "Lead scoring & routing",
      "Automated email/SMS nurture sequences",
      "Webinar & event automation",
      "ROAS & attribution tracking",
      "Dynamic audience updating"
    ],
    process: [
      { step: "01", title: "Workflow Audit", description: "We map out your current manual processes and identify bottlenecks.", timeline: "Week 1" },
      { step: "02", title: "Architecture Design", description: "Designing the data flow between your marketing tools.", timeline: "Week 2" },
      { step: "03", title: "Build & Connect", description: "Setting up webhooks, APIs, and automation scenarios (Make/Zapier).", timeline: "Week 3" },
      { step: "04", title: "Testing & Handover", description: "Running dummy data to ensure flawless execution and providing team training.", timeline: "Week 4" }
    ],
    tools: ["Make.com", "Zapier", "HubSpot", "ActiveCampaign", "Meta Webhooks"],
    caseStudy: {
      brand: "SMSIMSR",
      icon: "🏥",
      challenge: "Leads from 4 different ad platforms were being manually entered into a spreadsheet, resulting in 24+ hour response delays.",
      solution: "A unified webhook architecture that caught leads instantly, enriched the data, and distributed them to the sales team via Slack in under 5 seconds.",
      metrics: [
        { value: "5s", label: "Lead Routing Time" },
        { value: "100%", label: "Data Accuracy" },
        { value: "22%", label: "Increase in Lead-to-Appt" },
        { value: "40 hrs", label: "Saved per Month" }
      ]
    },
    pricing: {
      starter: {
        price: "₹30,000",
        features: ["Up to 5 Zaps/Scenarios", "Basic Lead Routing", "Email Notifications", "Spreadsheet Sync"]
      },
      growth: {
        price: "₹60,000",
        features: ["Complex Multi-step Workflows", "CRM Integration", "Nurture Sequences", "Error Handling"]
      },
      scale: {
        price: "Custom",
        features: ["Custom API Endpoints", "Database Sync", "Enterprise Platforms", "Maintenance SLA"]
      }
    },
    faqs: [
      { q: "Do you use Make.com or Zapier?", a: "We prefer Make.com for its visual complexity and cost-effectiveness, but we are experts in both platforms." },
      { q: "What happens if an automation breaks?", a: "We build robust error handling and notifications into our workflows so you know immediately if an API fails." },
      { q: "Can you automate my specific CRM?", a: "If your CRM has an API or webhooks (which 99% of modern CRMs do), we can automate it." }
    ],
    related: ["lead-generation-automation", "ai-agents"]
  },
  {
    slug: "ai-agents",
    title: "Autonomous AI Agents",
    headline: "Deploy Digital Workers That Think and Act",
    tagline: "Move beyond chatbots to autonomous agents that can research, reason, use tools, and execute complex workflows.",
    description: "Chatbots wait for instructions; AI Agents take action. We build custom multi-agent systems that can scrape the web, read emails, update databases, and perform multi-step business logic autonomously.",
    icon: "🧠",
    category: "AI Agents",
    overview: {
      heading: "The Next Evolution of AI",
      paragraphs: [
        "AI Agents represent a paradigm shift from 'Conversational AI' to 'Action-Oriented AI'. By giving LLMs access to tools (APIs, browsers, code execution), they become digital workers.",
        "Whether it's an agent that researches competitors and generates daily reports, or a sales agent that autonomously researches a prospect before drafting an outreach email — agents are the future of work."
      ],
      bestFor: "Enterprise operations, Data-heavy research teams, and Scaling startups looking for massive operational leverage.",
    },
    features: [
      "Tool/Function Calling capabilities",
      "Multi-agent orchestration",
      "Autonomous web research & scraping",
      "Long-term memory & context management",
      "Self-correction and reasoning loops",
      "API integration for action execution"
    ],
    process: [
      { step: "01", title: "Workflow Mapping", description: "Identifying the precise logic, decision trees, and edge cases of the task.", timeline: "Week 1-2" },
      { step: "02", title: "Agent Architecture", description: "Designing the multi-agent system (e.g., Researcher Agent + Writer Agent + Reviewer Agent).", timeline: "Week 3" },
      { step: "03", title: "Tool Integration", description: "Building the custom API tools the agents will use to interact with your systems.", timeline: "Week 4-5" },
      { step: "04", title: "Sandbox Testing", description: "Extensive testing of agent autonomy in a safe environment before production deployment.", timeline: "Week 6" }
    ],
    tools: ["LangGraph", "AutoGen", "OpenAI Assistants API", "Python", "Docker"],
    caseStudy: {
      brand: "DataFirst Tech",
      icon: "📊",
      challenge: "A team of 4 analysts spent 30 hours a week manually scraping competitor pricing and compiling reports.",
      solution: "Deployed a dual-agent system: A Scraper Agent that runs daily checks on competitor sites, and an Analyst Agent that generates a summary of changes.",
      metrics: [
        { value: "30h", label: "Saved per Week" },
        { value: "Daily", label: "Report Frequency" },
        { value: "100%", label: "Coverage Increase" },
        { value: "₹4L", label: "Annual Cost Savings" }
      ]
    },
    pricing: {
      starter: {
        price: "₹80,000",
        features: ["Single Agent", "Up to 3 Tools/APIs", "Basic Prompting Logic", "Standard Deployment"]
      },
      growth: {
        price: "₹1,50,000",
        features: ["Multi-Agent System", "Complex Reasoning", "Memory Management", "Dashboard UI"]
      },
      scale: {
        price: "Custom",
        features: ["Enterprise Security", "Custom Model Fine-tuning", "Infinite Scalability", "Dedicated Infrastructure"]
      }
    },
    faqs: [
      { q: "Are AI Agents safe to use?", a: "Yes. We build 'Human-in-the-loop' systems where the agent proposes actions but requires human approval for critical steps (like sending an email or spending money)." },
      { q: "How are agents different from standard automation like Zapier?", a: "Zapier follows static 'If X then Y' rules. AI Agents can handle unstructured data, make decisions based on context, and recover from unexpected errors." },
      { q: "What LLM do you use for agents?", a: "Typically GPT-4o or Claude 3.5 Sonnet, as they currently possess the best reasoning and tool-calling capabilities." }
    ],
    related: ["chatbot-development", "marketing-automation"]
  },
  {
    slug: "ai-content-automation",
    title: "AI Content & Automation",
    headline: "Automate Your Content Engine",
    tagline: "Generate, optimize, and distribute high-quality content at scale using Generative AI.",
    description: "Stop spending hours writing blogs, social posts, and ad copy. We build custom AI content engines that generate brand-aligned, SEO-optimized content 10x faster.",
    icon: "📝",
    category: "Automation",
    overview: {
      heading: "Scale Content Without Scaling Headcount",
      paragraphs: [
        "Content is king, but producing it consistently is a massive bottleneck. Our AI content systems learn your brand voice and generate high-quality text, images, and videos on demand.",
        "We don't just use generic ChatGPT. We build structured workflows using advanced prompt engineering, custom fine-tuning, and API integrations to automate your entire content pipeline."
      ],
      bestFor: "Agencies, E-commerce, Media Companies, and Content-Heavy SaaS.",
    },
    features: [
      "Custom Brand Voice Tuning",
      "Automated Blog Generation",
      "Social Media Post Scheduling",
      "SEO-Optimized Copywriting",
      "Programmatic SEO Campaigns",
      "Dynamic Ad Copy Variations"
    ],
    process: [
      { step: "01", title: "Voice & Style Mapping", description: "We analyze your past content to extract your unique brand tone and style guidelines.", timeline: "Week 1" },
      { step: "02", title: "Workflow Design", description: "Creating the automated pipeline from ideation to draft generation.", timeline: "Week 2" },
      { step: "03", title: "AI Integration", description: "Connecting LLMs to your CMS (WordPress, Webflow) and social tools.", timeline: "Week 3" },
      { step: "04", title: "Review & Deploy", description: "Human-in-the-loop testing to ensure content quality before full automation.", timeline: "Week 4" }
    ],
    tools: ["OpenAI / GPT-4", "Claude 3", "Midjourney", "Make.com", "Airtable"],
    caseStudy: {
      brand: "MediaVerse",
      icon: "📰",
      challenge: "Struggling to produce enough SEO blog content to compete, with a small writing team.",
      solution: "Implemented an AI content engine that generated structured drafts based on targeted keywords, requiring only light human editing.",
      metrics: [
        { value: "10x", label: "Content Output" },
        { value: "85%", label: "Time Saved" },
        { value: "300%", label: "Organic Traffic Growth" },
        { value: "0", label: "Added Writers" }
      ]
    },
    pricing: {
      starter: {
        price: "₹30,000",
        features: ["Brand Voice Setup", "Basic Blog Generator", "Email Copy Prompts", "Standard Support"]
      },
      growth: {
        price: "₹65,000",
        features: ["CMS Integration", "Social Media Automation", "Image Generation", "Monthly Optimization"]
      },
      scale: {
        price: "Custom",
        features: ["Fully Autonomous Pipeline", "Video Generation", "Programmatic SEO", "Dedicated Slack Channel"]
      }
    },
    faqs: [
      { q: "Will Google penalize AI-generated content?", a: "Google penalizes spam, not AI. As long as the content is high-quality, helpful, and provides value to the user, it will rank well. Our systems focus on quality and structure." },
      { q: "Does the AI sound like a robot?", a: "Not when configured correctly. We fine-tune the system and use advanced prompting to ensure the output matches your specific brand voice and tone." },
      { q: "Do I still need human writers?", a: "We recommend a 'human-in-the-loop' approach. The AI does the heavy lifting (research, drafting, structuring), and humans review and polish the final piece." }
    ],
    related: ["ai-agents", "marketing-automation"]
  }
];

export function getAIServiceBySlug(slug: string): AIService | undefined {
  return aiServicesData.find((service) => service.slug === slug);
}
