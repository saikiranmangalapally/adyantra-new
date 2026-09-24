import React from "react";
import { ServicePageData } from "@/components/templates/ServicePageTemplate";

export const aiSystemsData: Record<string, ServicePageData> = {
  "lead-generation": {
    hero: {
      badge: "AI LEAD GENERATION ENGINES",
      title: <>Capture &amp; Verify Pipeline With <span className="text-primary underline decoration-accent/60 decoration-4">Autonomous Lead Engines</span></>,
      description: "Stop wasting sales capacity on unvetted inquiries. We engineer autonomous lead generation systems that capture, enrich, verify, and score high-intent B2B and B2C prospects in real time before routing them to your closers."
    },
    about: {
      title: "High-Intent Pipeline Acceleration at Scale",
      paragraphs: [
        "Traditional lead generation forms capture incomplete contact details, while manual lead vetting causes critical hours of delay that destroy conversion rates. In competitive markets, the business that responds first with personalized context wins the customer.",
        "Adyantra Digital architects autonomous lead ingestion pipelines. When a prospect submits an inquiry, our system instantly enriches the lead profile via enterprise data APIs, validates email and phone deliverability, calculates a predictive purchase intent score, and triggers instant personalized follow-up.",
        "By filtering out tire-kickers and prioritizing high-value decision makers, your sales team connects only with qualified buyers ready to transact."
      ],
      pillars: [
        "Sub-15-Second Lead Capture, Verification & Enrichment",
        "Predictive Intent Scoring & ICP Matching Algorithms",
        "Automated Two-Way WhatsApp & SMS Engagement Workflows",
        "Direct CRM Record Creation & Round-Robin Rep Assignment",
        "Multi-Channel Ingestion (Meta Ads, Google Ads & Web Forms)",
        "Zero-Lead-Drop Fault Tolerant Webhook Architecture",
        "Attributable Cost Per Qualified Lead (CPQL) Reporting"
      ]
    },
    intro: {
      tagline: "Autonomous Lead Generation",
      headline: "Deliver Qualified Opportunities Directly to Your Sales Calendar",
      description: "We turn your acquisition channels into an intelligent funnel that validates buyer intent and schedules confirmed sales consultations."
    },
    subServices: [
      { title: "Lead Capture & Verification", desc: "Instant syntax and deliverability checks validating real phone numbers, business domains, and identities.", href: "/contact", img: "/assets/img/service/illustrations/service-lead-generation.svg" },
      { title: "Predictive Intent Scoring", desc: "Machine-learning qualification models scoring prospects based on company size, budget, and urgency.", href: "/contact", img: "/assets/img/service/illustrations/service-ai-audit.svg" },
      { title: "Instant CRM Routing", desc: "Zero-latency lead handoff into HubSpot or Salesforce with automated sales rep task assignment.", href: "/contact", img: "/assets/img/service/illustrations/service-crm-automation.svg" },
      { title: "Automated Warming Sequences", desc: "Multi-touch WhatsApp and email sequences warming leads prior to sales consultation calls.", href: "/contact", img: "/assets/img/service/illustrations/service-sales-followup.svg" }
    ],
    processSteps: [
      { title: "ICP & Signal Definition", description: "Mapping qualification criteria, required enrichment fields, and sales routing rules.", timeline: "Week 1" },
      { title: "API Integration & Webhook Setup", description: "Building data ingestion pipelines connecting ad platforms, forms, and validation APIs.", timeline: "Weeks 1-2" },
      { title: "Scoring Logic & CRM Automation", description: "Deploying lead qualification scoring algorithms and round-robin rep distribution.", timeline: "Weeks 2-3" },
      { title: "Live Testing & Volume Scale", description: "Simulating high lead surges to verify sub-15s response latency and zero data drop.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "+180% Qualified Volume", description: "Our clients experience an average 180% lift in sales-accepted leads within 60 days." },
      { title: "Sub-15s Response Speed", description: "Automated instant outreach catches prospects while your offer is top of mind." },
      { title: "Verified Deliverability", description: "Strict validation filters out fake numbers, spam bots, and invalid email domains." }
    ],
    faqData: [
      { q: "How does the system verify lead authenticity?", a: "We run real-time API lookups to verify phone HLR validity, business domain MX records, and LinkedIn company profile attributes before pushing data into your CRM." },
      { q: "Can leads be routed based on specific criteria like territory or deal size?", a: "Yes. Our workflow architecture supports custom branching logic, directing enterprise opportunities to senior directors while routing standard leads to regional reps." }
    ]
  },

  "ad-creative-automation": {
    hero: {
      badge: "DYNAMIC AD CREATIVE (DCO)",
      title: <>Scale High-ROAS Ads With <span className="text-primary underline decoration-accent/60 decoration-4">Automated Creative Testing</span></>,
      description: "Beat ad fatigue and rising customer acquisition costs. We engineer automated creative pipelines that produce, resize, and A/B test hundreds of direct-response ad variations across Meta, Google, and TikTok to scale winning ROAS."
    },
    about: {
      title: "High-Velocity Creative Optimization Engine",
      paragraphs: [
        "In modern machine-learning ad platforms like Meta Advantage+ and Google Performance Max, ad creative is the primary lever that determines your Cost Per Acquisition. Running the same two creatives leads to rapid ad fatigue, rising CPMs, and declining returns.",
        "Adyantra Digital deploys dynamic creative automation systems. We generate dozens of hook variations, angle adaptations, and localized copy sets programmatically tested against live conversion algorithms.",
        "By identifying top-performing combinations in real time, we scale budgets behind verified winners while pruning underperforming creative variations autonomously."
      ],
      pillars: [
        "Dynamic Creative Optimization (DCO) Across Meta & Google",
        "Automated Multi-Format Aspect Ratio Resizing (9:16, 1:1, 16:9)",
        "Direct-Response Headline Hook & Visual Angle Testing",
        "Programmatic Motion Graphics & Video Overlay Generation",
        "Live ROAS Attribution & Creative Fatigue Detection",
        "Automated Winning Ad Budget Re-allocation Rules",
        "Brand Style Guideline Preservation with Zero Visual Hallucinations"
      ]
    },
    intro: {
      tagline: "Creative Velocity",
      headline: "Never Let Ad Fatigue Stall Your Brand Scaling",
      description: "We build systems that produce and test dozens of creative angles weekly, discovering breakout winners that lower customer acquisition costs."
    },
    subServices: [
      { title: "Dynamic Creative Optimization", desc: "Automated assembly of hooks, copy variations, and CTAs tested by machine-learning ad algorithms.", href: "/contact", img: "/assets/img/service/illustrations/service-ad-creative.svg" },
      { title: "Multi-Format Video Resizing", desc: "Automated rendering of 9:16 vertical Reels, 1:1 feed posts, and 16:9 YouTube video assets.", href: "/contact", img: "/assets/img/service/illustrations/service-ai-video.svg" },
      { title: "Paid Social Variant Testing", desc: "Structured testing sandboxes feeding conversion signals to Meta and Google ad models.", href: "/contact", img: "/assets/img/service/illustrations/service-google-ppc.svg" },
      { title: "High-Converting Hook Generation", desc: "Generating high-intent opening hooks tailored to emotional customer pain points and objections.", href: "/contact", img: "/assets/img/service/illustrations/service-content-automation.svg" }
    ],
    processSteps: [
      { title: "Persona & Hook Matrix", description: "Identifying customer pain points and drafting 15+ high-contrast opening angles.", timeline: "Week 1" },
      { title: "Template & Asset Engineering", description: "Configuring dynamic visual templates, typography standards, and motion overlays.", timeline: "Weeks 1-2" },
      { title: "Automated Rendering & Launch", description: "Generating variations and pushing directly into ad account dynamic creative testing sandboxes.", timeline: "Weeks 2-3" },
      { title: "Algorithmic Winner Scaling", description: "Detecting statistical breakout winners and scaling ad spend horizontally.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "10x Testing Velocity", description: "Test 20+ creative combinations weekly without expanding your internal design team." },
      { title: "+320% ROAS Improvement", description: "Our dynamic creative testing consistently uncovers high-margin winning variations." },
      { title: "Zero Ad Fatigue", description: "Fresh visual concepts are rotated automatically before audiences grow blind to campaigns." }
    ],
    faqData: [
      { q: "How does dynamic creative automation work with Meta Advantage+?", a: "We feed structured modules (hooks, bodies, headlines, and visual cards) into Meta's DCO algorithms, which dynamically assemble and deliver the most effective combination to each unique user." },
      { q: "Can we ensure our strict brand identity guidelines are followed?", a: "Yes. All automated rendering pipelines are constrained by strict design tokens (hex codes, font pairings, padding, logo placement) to guarantee brand consistency." }
    ]
  },

  "content-automation": {
    hero: {
      badge: "EDITORIAL AUTOMATION PIPELINES",
      title: <>Scale Publishing Velocity With <span className="text-primary underline decoration-accent/60 decoration-4">Automated Content Pipelines</span></>,
      description: "Eliminate editorial bottlenecks. We engineer automated content creation and publishing pipelines that turn core briefs into multi-format articles, social carousels, and email drips adhering to the RankWise 49-factor SEO framework."
    },
    about: {
      title: "Autonomous Content Infrastructure for Scaling Enterprises",
      paragraphs: [
        "Producing high-quality content across search, social, and email requires significant human hours and editorial oversight. When teams fall behind publishing schedules, organic visibility drops and audience attention drifts to competitors.",
        "Adyantra Digital builds end-to-end content automation architectures. We establish structured pipelines where a single flagship topic brief is expanded into a 49-factor SEO article, an executive email newsletter, LinkedIn thought-leadership posts, and Twitter threads.",
        "By integrating human-in-the-loop review gates with automated CMS publishing APIs, we enable brands to maintain an authoritative, omnipresent digital footprint with a fraction of traditional overhead."
      ],
      pillars: [
        "RankWise 49-Factor Editorial Standard Alignment",
        "Automated Multi-Format Repurposing (Blog, Social, Newsletter)",
        "Zero-Burned-Word Quality Filters & Hallucination Elimination",
        "Direct CMS Publishing Pipelines (Next.js, WordPress, Webflow)",
        "Custom Brand Voice System Prompts & Style Guide Constraints",
        "Automated Schema Markup (JSON-LD Article & FAQ) Generation",
        "Editorial Calendar Scheduling & Approval Queue Workflows"
      ]
    },
    intro: {
      tagline: "Publishing Velocity",
      headline: "Publish 10x More High-Value Content Without Extra Overhead",
      description: "We engineer intelligent pipelines that transform single strategic ideas into multi-channel content assets ready for instant distribution."
    },
    subServices: [
      { title: "Programmatic Article Generation", desc: "Authoritative long-form articles built against 49 SEO factors, formatted for Featured Snippets.", href: "/contact", img: "/assets/img/service/illustrations/service-content-automation.svg" },
      { title: "RankWise SEO Validation", desc: "Automated scoring checking keyword density, heading hierarchy, active voice, and E-E-A-T signals.", href: "/contact", img: "/assets/img/service/illustrations/service-seo.svg" },
      { title: "Social Carousel & Snippet Engine", desc: "Auto-extracting high-impact pull quotes, statistics, and carousels for LinkedIn and Instagram.", href: "/contact", img: "/assets/img/service/illustrations/service-social-meta.svg" },
      { title: "CMS Direct API Publishing", desc: "Automating draft uploads with featured images, tags, meta titles, and JSON-LD schema into your CMS.", href: "/contact", img: "/assets/img/service/illustrations/service-workflow-integrations.svg" }
    ],
    processSteps: [
      { title: "Editorial Style Guide Ingestion", description: "Mapping tone, vocabulary constraints, banned words, and target audience personas.", timeline: "Week 1" },
      { title: "Pipeline Architecture & Prompts", description: "Configuring multi-agent prompt chains and automated format converters in n8n or Make.", timeline: "Weeks 1-2" },
      { title: "CMS Webhook & Review Gate Integration", description: "Connecting your CMS via API and building a seamless 1-click human editorial approval dashboard.", timeline: "Weeks 2-3" },
      { title: "Full Autonomous Cadence", description: "Executing weekly content calendars automatically with continuous quality monitoring.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "49-Factor Quality Guarantee", description: "Every generated article complies with strict RankWise search and readability guidelines." },
      { title: "Zero AI Clichés", description: "We ban robotic filler words like 'delve', 'revolutionize', and 'tapestry' to ensure human-first tone." },
      { title: "10x Production Capacity", description: "Publish consistent, authoritative content across multiple digital channels every single week." }
    ],
    faqData: [
      { q: "Is human editing still required with automated content pipelines?", a: "We recommend a lightweight human review gate (10-15 minutes per piece) to verify strategic alignment and add personal executive anecdotes before publishing." },
      { q: "Can the pipeline automatically generate image alt texts and meta tags?", a: "Yes. The pipeline generates SEO-optimized meta titles, 140-160 character descriptions, URL slugs, and keyword-rich image alt tags automatically." }
    ]
  },

  "appointment-booking": {
    hero: {
      badge: "CONVERSATIONAL BOOKING AI",
      title: <>Automate Calendar Bookings With <span className="text-primary underline decoration-accent/60 decoration-4">24/7 AI Schedulers</span></>,
      description: "Never lose a high-value customer to scheduling friction. We deploy conversational AI booking agents across WhatsApp and webchat that qualify prospects, verify availability, and lock confirmed sales appointments directly into your team's calendar."
    },
    about: {
      title: "Frictionless Sales Scheduling That Fills Your Calendar",
      paragraphs: [
        "Back-and-forth emails and clunky external booking links cause over 60% of interested buyers to drop off before an appointment is ever set. High-intent prospects want instant answers and immediate confirmation.",
        "Adyantra Digital deploys conversational booking agents across WhatsApp, website chat, and SMS. Our AI engages prospects in natural dialogue, asks qualification questions, checks real-time calendar availability, and confirms appointments with calendar invites and location links.",
        "Automated two-way reminder sequences ensure attendance, reducing client no-shows by up to 45% and keeping your sales calendar full of qualified consultations."
      ],
      pillars: [
        "Natural Language Qualification & Booking Dialogue",
        "Two-Way Real-Time Calendar Sync (Google Calendar, Outlook)",
        "Official WhatsApp Business & SMS Confirmation Flows",
        "Automated Multi-Touch Attendance Reminders (Reduce No-Shows)",
        "Instant Lead CRM Profile Creation & Sales Rep Assignment",
        "Time Zone Detection & Rescheduling Management",
        "Attributable Booked Meeting Revenue Tracking"
      ]
    },
    intro: {
      tagline: "Conversational Booking",
      headline: "Turn Inquiries Into Confirmed Sales Meetings in Under 2 Minutes",
      description: "We deploy intelligent scheduling bots that converse with prospects, answer preliminary questions, and lock appointments into your team's calendar 24/7."
    },
    subServices: [
      { title: "Conversational Triage AI", desc: "Qualifying prospects through interactive chat before offering available calendar meeting slots.", href: "/contact", img: "/assets/img/service/illustrations/service-appointment-booking.svg" },
      { title: "Two-Way Calendar Sync", desc: "Real-time conflict detection across Google Calendar and Microsoft Outlook preventing double bookings.", href: "/contact", img: "/assets/img/service/illustrations/service-workflow-integrations.svg" },
      { title: "WhatsApp & SMS Reminders", desc: "Automated reminder pings at 24h, 2h, and 15m intervals with 1-tap reschedule buttons.", href: "/contact", img: "/assets/img/service/illustrations/service-whatsapp-crm.svg" },
      { title: "CRM Deal Creation", desc: "Auto-logging booked meetings, qualification answers, and prospect notes into HubSpot or Salesforce.", href: "/contact", img: "/assets/img/service/illustrations/service-crm-automation.svg" }
    ],
    processSteps: [
      { title: "Qualification & Booking Flow Design", description: "Mapping qualifying criteria, working hours, buffers, and meeting location configurations.", timeline: "Week 1" },
      { title: "Calendar & WhatsApp Integration", description: "Connecting calendar APIs, official WhatsApp Cloud API, and CRM customer records.", timeline: "Weeks 1-2" },
      { title: "Agent Simulation & Edge Case Testing", description: "Testing rescheduling requests, out-of-hours inquiries, and uncooperative user responses.", timeline: "Weeks 2-3" },
      { title: "Deployment & Attendance Optimization", description: "Going live and refining reminder timing to maximize sales meeting show-up rates.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "3.8x Booking Velocity", description: "Instant conversational booking delivers nearly 4x more booked calls than static web forms." },
      { title: "-45% No-Show Rate", description: "Two-way automated WhatsApp reminders dramatically reduce missed appointments." },
      { title: "24/7 Global Availability", description: "Capture and book international leads across time zones while your team is offline." }
    ],
    faqData: [
      { q: "Can prospects reschedule or cancel appointments directly in chat?", a: "Yes. The AI recognizes rescheduling requests, presents alternate open times, updates the calendar invite, and alerts the assigned sales rep automatically." },
      { q: "Can the AI handle multiple sales representatives with round-robin booking?", a: "Yes. Our systems support team round-robin routing, territory-based assignment, and executive VIP routing based on qualifying answers." }
    ]
  },

  "sales-follow-up": {
    hero: {
      badge: "SALES VELOCITY ACCELERATION",
      title: <>Close More Deals With <span className="text-primary underline decoration-accent/60 decoration-4">Autonomous Sales Follow-Up</span></>,
      description: "Eighty percent of sales require 5 or more follow-ups, yet most sales reps stop after two. We engineer automated sales follow-up systems that warm leads, overcome objections, and reactivate stalled opportunities across WhatsApp, email, and SMS."
    },
    about: {
      title: "Eliminating Pipeline Stagnation and Revenue Leakage",
      paragraphs: [
        "Sales reps are busy managing live deals and frequently neglect following up with lukewarm prospects or past proposals. This pipeline neglect results in thousands of dollars in lost deal value every month.",
        "Adyantra Digital builds persistent, intelligent follow-up engines. When a prospect goes silent after receiving a proposal, our system triggers tailored, value-first touchpoints delivering relevant case studies, ROI calculators, and meeting invites.",
        "Our multi-channel sequences adapt to recipient behavior—pausing immediately when a client replies or books a call, and escalating urgent replies directly to the assigned account executive."
      ],
      pillars: [
        "Multi-Channel Automated Warming (WhatsApp, Email & SMS)",
        "Behavioral Intent Triggers & Stalled Deal Reactivation",
        "Automated Sequence Pause on Customer Reply",
        "Dynamic Deal Value & Win-Probability Calculations",
        "CRM Task Creation & High-Priority Rep Escalations",
        "Industry-Specific Case Study & Objection Handling Drops",
        "Predictable Sales Pipeline Velocity Reporting"
      ]
    },
    intro: {
      tagline: "Pipeline Acceleration",
      headline: "Never Let a Stalled Sales Opportunity Slip Through the Cracks",
      description: "We deploy persistent, intelligent follow-up sequences that nurture prospects and reactivate dormant pipeline opportunities."
    },
    subServices: [
      { title: "Behavioral Follow-Up Sequences", desc: "Automated touchpoints triggered when prospects view proposals, visit pricing pages, or go silent.", href: "/contact", img: "/assets/img/service/illustrations/service-sales-followup.svg" },
      { title: "WhatsApp Direct Nurturing", desc: "Conversational check-ins on WhatsApp achieving 90%+ read rates compared to crowded email inboxes.", href: "/contact", img: "/assets/img/service/illustrations/service-whatsapp-crm.svg" },
      { title: "Pipeline Deal Scoring", desc: "Predictive algorithms identifying which stalled deals exhibit high intent and require human calls.", href: "/contact", img: "/assets/img/service/illustrations/service-analytics.svg" },
      { title: "Objection Resolution Bots", desc: "Automated answers to common pricing, implementation, and security questions in chat.", href: "/contact", img: "/assets/img/service/illustrations/service-customer-support.svg" }
    ],
    processSteps: [
      { title: "Sales Bottleneck Analysis", description: "Auditing current sales stages, average deal cycles, and where opportunities drop off.", timeline: "Week 1" },
      { title: "Copywriting & Value Touchpoints", description: "Crafting non-salesy, value-add sequences delivering case studies, templates, and video walkthroughs.", timeline: "Weeks 1-2" },
      { title: "CRM Integration & Trigger Setup", description: "Configuring stage-based triggers and automated sequence halt rules upon customer reply.", timeline: "Weeks 2-3" },
      { title: "Reactivation Sprints & Ongoing Tuning", description: "Testing subject lines, messaging cadence, and message channels to maximize reply rates.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "+64% Deal Win Rate", description: "Consistent multi-touch nurturing systematically recovers deals that would have been abandoned." },
      { title: "100% CRM Activity Logging", description: "Every message, reply, and engagement is automatically logged into the contact's CRM record." },
      { title: "Instant Reply Alerts", description: "When a prospect replies with interest, the account owner receives immediate Slack and SMS alerts." }
    ],
    faqData: [
      { q: "What happens when a prospect replies to an automated follow-up?", a: "The sequence halts immediately to prevent awkward automated replies, and an urgent task is created in your CRM with an instant Slack notification to the sales rep." },
      { q: "Can we use this to reactivate old leads from 6-12 months ago?", a: "Yes. We frequently run 'Dormant Pipeline Reactivation' sprints that re-engage old inquiries with fresh market insights or special offers, generating immediate sales opportunities." }
    ]
  },

  "crm-automation": {
    hero: {
      badge: "ENTERPRISE CRM ARCHITECTURE",
      title: <>Eliminate Data Chaos With <span className="text-primary underline decoration-accent/60 decoration-4">Automated CRM Systems</span></>,
      description: "Stop wasting hours on manual record updates. We engineer robust CRM automation across HubSpot, Salesforce, and Zoho—eliminating duplicate records, syncing pipeline data, and automating stage progressions with zero errors."
    },
    about: {
      title: "Clean Data & Automated Pipeline Governance",
      paragraphs: [
        "A disorganized CRM is worse than no CRM at all. Inconsistent data entry, missing contact numbers, and outdated deal stages lead to misinformed executive decisions, lost deals, and frustrated sales teams.",
        "Adyantra Digital architects enterprise-grade CRM automation. We build custom middleware that syncs marketing ad spend, web forms, payment transactions, and customer support tickets into unified, deduplicated customer records.",
        "With automated stage advancements, task assignments, and health alerts, your CRM transforms from a tedious data-entry burden into an automated operating system driving revenue growth."
      ],
      pillars: [
        "Enterprise CRM Data Normalization & Automated Deduplication",
        "Automated Deal Stage Advancement & SLA Escalation Rules",
        "Bidirectional Integration Between Ad Accounts & CRM Portals",
        "Real-Time Slack & Microsoft Teams Pipeline Notification Bots",
        "Customer Lifetime Value (LTV) & Churn Risk Telemetry",
        "Stripe, Razorpay & ERP Financial Synchronization",
        "SOC2 Compliant Role-Based Access & Audit Logging"
      ]
    },
    intro: {
      tagline: "CRM Governance",
      headline: "Turn Your CRM Into an Autonomous Revenue Engine",
      description: "We eliminate manual record entry, sync external customer data, and automate pipeline workflows across your organization."
    },
    subServices: [
      { title: "Enterprise Data Synchronization", desc: "Two-way data sync between ad platforms, website forms, billing systems, and sales records.", href: "/contact", img: "/assets/img/service/illustrations/service-crm-automation.svg" },
      { title: "Stage Progression & SLA Alerts", desc: "Automating deal stage movements and alerting managers when opportunities sit idle too long.", href: "/contact", img: "/assets/img/service/illustrations/service-workflow-integrations.svg" },
      { title: "Automated Lead Enrichment", desc: "Appending verified company headcount, industry, and revenue data to new leads automatically.", href: "/contact", img: "/assets/img/service/illustrations/service-lead-generation.svg" },
      { title: "Executive Revenue Dashboards", desc: "Syncing verified deal stages directly into live Looker Studio and PowerBI reporting views.", href: "/contact", img: "/assets/img/service/illustrations/service-analytics.svg" }
    ],
    processSteps: [
      { title: "CRM Architecture & Field Audit", description: "Reviewing existing properties, pipelines, user permissions, and custom object relationships.", timeline: "Week 1" },
      { title: "Schema Normalization & Cleaning", description: "Removing duplicates, standardizing phone/country formats, and organizing property groups.", timeline: "Weeks 1-2" },
      { title: "Automation Engine Configuration", description: "Building workflow triggers, deal stage automations, and external API webhook synchronizations.", timeline: "Weeks 2-3" },
      { title: "Documentation & Team Training", description: "Delivering detailed architecture diagrams and conducting live team onboarding sessions.", timeline: "Week 4" }
    ],
    whyChooseUs: [
      { title: "100% Data Hygiene", description: "Automated validation guarantees clean, standardized records across your entire contact database." },
      { title: "Certified CRM Architects", description: "Our engineers hold advanced certifications across HubSpot, Salesforce, and Zoho CRM platforms." },
      { title: "Zero Pipeline Leakage", description: "Automated SLA alerts ensure no qualified prospect sits untouched without rep accountability." }
    ],
    faqData: [
      { q: "Which CRM platforms do you support?", a: "We specialize in HubSpot, Salesforce, Zoho CRM, Pipedrive, GoHighLevel, and custom PostgreSQL database backends." },
      { q: "Can you migrate our data from our old CRM to a new one without data loss?", a: "Yes. We execute end-to-end data migrations including field mapping, historical activity preservation, contact association, and pipeline validation." }
    ]
  },

  "customer-support": {
    hero: {
      badge: "AI SUPPORT & VOICE CONCIERGE",
      title: <>Deliver Instant Help With <span className="text-primary underline decoration-accent/60 decoration-4">24/7 AI Support Agents</span></>,
      description: "Resolve 85%+ of customer inquiries in under 5 seconds. We deploy RAG-powered customer support AI agents across WhatsApp, website chat, and email that answer questions accurately and escalate complex tickets to human specialists."
    },
    about: {
      title: "Sub-Second Omnichannel Customer Resolution",
      paragraphs: [
        "Modern customers expect immediate resolutions at any hour of the day. Long email queues and slow ticket response times damage customer satisfaction (CSAT) scores and increase churn rates.",
        "Adyantra Digital deploys intelligent customer support agents powered by Retrieval-Augmented Generation (RAG). By indexing your company documentation, FAQs, product catalogs, and policies into a secure vector database, our AI answers questions with pinpoint accuracy and zero hallucinations.",
        "When an issue requires human empathy or complex judgment, the agent summarizes the dialogue and escalates the ticket directly to your support team with full context."
      ],
      pillars: [
        "Sub-Second Response Latency with 99%+ Uptime",
        "RAG Vector Database Ingestion (Help Docs, Policies & FAQs)",
        "Zero-Hallucination Strict Guardrails & Source Verification",
        "Omnichannel Deployment (WhatsApp, Webchat, Zendesk & Email)",
        "Automated Sentiment Analysis & Urgent Ticket Escalations",
        "Multi-Language Real-Time Translation & Localization",
        "Live CSAT & First-Contact Resolution (FCR) Dashboards"
      ]
    },
    intro: {
      tagline: "Instant Support",
      headline: "Delight Customers With 24/7 Sub-Second Answers",
      description: "We deploy intelligent AI agents that handle repetitive inquiries autonomously, allowing your human staff to focus on high-priority customer needs."
    },
    subServices: [
      { title: "24/7 Resolution Agent", desc: "Answering customer product, shipping, and account inquiries instantly across chat and messaging.", href: "/contact", img: "/assets/img/service/illustrations/service-customer-support.svg" },
      { title: "RAG Knowledge Base Sync", desc: "Continuously syncing your help docs, Notion pages, and policies into a secure vector database.", href: "/contact", img: "/assets/img/service/illustrations/service-ai-architecture.svg" },
      { title: "Sentiment & Escalation Triage", desc: "Detecting frustrated tone or billing disputes and instantly transferring the chat to human agents.", href: "/contact", img: "/assets/img/service/illustrations/service-ai-agents.svg" },
      { title: "WhatsApp Support Desk", desc: "Deploying an official WhatsApp Business customer care channel for frictionless mobile resolution.", href: "/contact", img: "/assets/img/service/illustrations/service-whatsapp-crm.svg" }
    ],
    processSteps: [
      { title: "Knowledge Extraction & Indexing", description: "Ingesting policy docs, historical ticket logs, and FAQs into a high-speed vector embeddings database.", timeline: "Week 1" },
      { title: "Guardrails & System Prompting", description: "Establishing strict boundaries preventing off-topic answers and ensuring 100% factual accuracy.", timeline: "Weeks 1-2" },
      { title: "Omnichannel Channel Integration", description: "Connecting the agent to WhatsApp, website chat widgets, Zendesk, or Freshdesk portals.", timeline: "Weeks 2-3" },
      { title: "Testing & Escalation Validation", description: "Simulating challenging customer scenarios and validating seamless human handoffs.", timeline: "Week 4" }
    ],
    whyChooseUs: [
      { title: "85% Deflection Rate", description: "Automate the resolution of up to 85% of incoming routine support tickets without human effort." },
      { title: "Zero Hallucinations", description: "Our strict RAG architecture prevents the AI from making up false policies or unauthorized offers." },
      { title: "Sub-5-Second Resolution", description: "Customers receive instant, accurate answers 24 hours a day, 365 days a year." }
    ],
    faqData: [
      { q: "What happens if the AI agent does not know the answer to a question?", a: "The AI agent gracefully admits it cannot answer that specific question, captures the customer's contact details, and routes the ticket to your human team with a full transcript." },
      { q: "Can the AI check order status or process refunds directly?", a: "Yes. By connecting to your Shopify or ERP API, the AI can authenticate users, look up live shipping tracking numbers, and initiate policy-compliant ticket actions." }
    ]
  },

  "ecommerce-automation": {
    hero: {
      badge: "E-COMMERCE REVENUE AUTOMATION",
      title: <>Boost Store Margin With <span className="text-primary underline decoration-accent/60 decoration-4">Automated Commerce Workflows</span></>,
      description: "Scale your e-commerce operations autonomously. We engineer dynamic cart recovery workflows, automated inventory reordering, post-purchase review generation, and customer loyalty sequences that maximize repeat purchase rates."
    },
    about: {
      title: "Autonomous Operations for High-Volume Online Stores",
      paragraphs: [
        "Running a modern e-commerce brand involves countless repetitive operational tasks—from manual inventory updates to chasing abandoned shopping carts. When these processes depend on human manual intervention, delays occur and revenue is left on the table.",
        "Adyantra Digital builds automated commerce workflows connecting Shopify, Amazon, ERP databases, and customer messaging channels. We deploy intelligent recovery sequences across WhatsApp and SMS that capture abandoned checkouts within minutes of cart abandonment.",
        "From automated supplier reorder alerts based on inventory velocity to dynamic post-purchase review requests, our automation infrastructure scales your revenue while keeping operational headcount lean."
      ],
      pillars: [
        "Automated Multi-Channel Cart Recovery (WhatsApp, SMS, Email)",
        "Dynamic Restock & Inventory Velocity Reorder Alerts",
        "Automated Post-Purchase Review & UGC Collection Sequences",
        "VIP Customer Loyalty & Segment-Specific Promotional Triggers",
        "Shopify, WooCommerce & ERP Two-Way Accounting Sync",
        "Automated Invoice Generation & Tax Compliance Workflows",
        "Attributable Recovered Revenue & Retention Telemetry"
      ]
    },
    intro: {
      tagline: "Storefront Automation",
      headline: "Recover Abandoned Carts and Drive Repeat Purchases Automatically",
      description: "We deploy intelligent workflows that automate operational friction and extract maximum revenue from your e-commerce traffic."
    },
    subServices: [
      { title: "Abandoned Checkout Recovery", desc: "Multi-channel WhatsApp and SMS sequences recovering up to 24% of abandoned shopping carts.", href: "/contact", img: "/assets/img/service/illustrations/service-ecommerce.svg" },
      { title: "Smart Inventory Reordering", desc: "Automated alerts sent to suppliers when stock levels drop below dynamic sales velocity thresholds.", href: "/contact", img: "/assets/img/service/illustrations/service-workflow-integrations.svg" },
      { title: "Automated Review Collection", desc: "Timed post-delivery WhatsApp messages requesting verified photo and video customer reviews.", href: "/contact", img: "/assets/img/service/illustrations/service-pr-reputation.svg" },
      { title: "Dynamic Customer Upsells", desc: "Triggering personalized product recommendations based on previous purchase history and seasonality.", href: "/contact", img: "/assets/img/service/illustrations/service-ad-creative.svg" }
    ],
    processSteps: [
      { title: "Store Funnel & Inventory Audit", description: "Mapping checkout abandonment drop-offs, stock turnover rates, and post-purchase workflows.", timeline: "Week 1" },
      { title: "WhatsApp & SMS API Setup", description: "Connecting the official WhatsApp Business Cloud API and configuring compliant opt-in capture.", timeline: "Weeks 1-2" },
      { title: "Workflow Automation Deployment", description: "Building recovery drip logic, inventory webhooks, and review collection sequences in n8n/Make.", timeline: "Weeks 2-3" },
      { title: "Testing & Margin Optimization", description: "Verifying discount code creation, tax calculations, and measuring recovered revenue daily.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "+22% Recovered Carts", description: "Our WhatsApp cart recovery sequences consistently outperform standard email-only campaigns." },
      { title: "Zero Stockout Risk", description: "Predictive inventory reorder triggers prevent running out of best-selling SKUs." },
      { title: "Hands-Free Operations", description: "Routine customer communications and fulfillment updates run completely autonomously." }
    ],
    faqData: [
      { q: "How quickly does the cart recovery message trigger?", a: "Best practice is an instant WhatsApp notification 15-30 minutes after abandonment, followed by a secondary reminder with a dynamic discount code 12-24 hours later." },
      { q: "Can this system integrate with our warehouse management software?", a: "Yes. We build custom API connectors connecting Shopify directly to your ERP or 3PL warehouse software for automated order fulfillment sync." }
    ]
  }
};
