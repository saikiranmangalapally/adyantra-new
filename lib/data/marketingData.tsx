import React from "react";
import { ServicePageData } from "@/components/templates/ServicePageTemplate";

export const marketingData: Record<string, ServicePageData> = {
  "digital-marketing-growth": {
    hero: {
      badge: "PERFORMANCE MARKETING",
      title: <>Accelerate Revenue With <span className="text-primary underline decoration-accent/60 decoration-4">Data-Driven Growth</span></>,
      description: "Stop burning ad budget on vanity impressions. We engineer high-ROAS acquisition systems uniting algorithmic media buying, dynamic creative optimization, and server-side attribution to scale your pipeline profitably."
    },
    about: {
      title: "Engineered For Sustainable Market Dominance",
      paragraphs: [
        "In modern customer acquisition, fragmented campaigns create cost leaks and attribution blindness. At Adyantra Digital, we architect integrated growth engines where paid search, social media performance, and technical SEO feed directly into a unified conversion funnel.",
        "We build deterministic audience models using first-party customer cohorts to lower your blended Customer Acquisition Cost (CAC). By deploying continuous multivariate experiments on messaging, creative angles, and landing page checkout flows, every marketing dollar works toward verified revenue.",
        "Our cross-functional guild of senior media buyers, conversion engineers, and data analysts monitor daily ROAS velocity. We replace guesswork with server-side CAPI tracking, ensuring complete visibility across the entire customer lifecycle."
      ],
      pillars: [
        "Multi-Channel Paid Acquisition (Google Search, PMax & Meta Ads)",
        "Conversion Rate Optimization (CRO & Multivariate A/B Testing)",
        "Server-Side Attribution & First-Party Data Ingestion (sGTM / CAPI)",
        "Dynamic Direct-Response Creative & Video Asset Production",
        "Full-Funnel Customer Lifetime Value (LTV) Expansion",
        "Algorithmic Bidding Optimization & Margin Protection",
        "Continuous Landing Page Velocity & Funnel Friction Removal"
      ]
    },
    intro: {
      tagline: "Growth Architecture",
      headline: "Predictable Scaling Through Mathematical Marketing",
      description: "We eliminate guesswork from digital expansion. By pairing first-party customer telemetry with machine-learning bidding models, we turn marketing into a predictable revenue driver."
    },
    subServices: [
      { title: "Meta & Google Ads Scaling", desc: "Algorithmic bidding and dynamic creative testing on Facebook, Instagram, and Google Search.", href: "/contact", img: "/assets/img/service/illustrations/service-google-ppc.svg" },
      { title: "Conversion Rate Optimization", desc: "Multivariate testing of page architecture and micro-copy to maximize completed checkouts.", href: "/contact", img: "/assets/img/service/illustrations/service-ui-ux-design.svg" },
      { title: "Multi-Touch Attribution", desc: "Server-side tracking (sGTM & Meta CAPI) ensuring 100% signal durability and zero tracking loss.", href: "/contact", img: "/assets/img/service/illustrations/service-analytics.svg" },
      { title: "Lifecycle Email & SMS", desc: "Automated retention sequences and behavioral triggers to multiply Customer Lifetime Value.", href: "/contact", img: "/assets/img/service/illustrations/service-email-workflows.svg" }
    ],
    processSteps: [
      { title: "Deep Technical & Funnel Audit", description: "We analyze your historical ad data, pixel health, tracking setup, and competitor positioning to identify immediate revenue leaks.", timeline: "Days 1-7" },
      { title: "Server-Side Tracking Architecture", description: "Deployment of server-side Google Tag Manager (sGTM) and Meta CAPI to establish 100% accurate data attribution.", timeline: "Days 7-14" },
      { title: "Direct-Response Creative Sprints", description: "Our in-house design team produces high-converting video and static variations tailored to your core buyer personas.", timeline: "Days 14-21" },
      { title: "Algorithmic Scaling & ROAS Protection", description: "Once benchmark ROAS is established, we systematically scale budgets horizontally across proven cohorts and winners.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "Data-Obsessed Media Buyers", description: "Our media team manages high-volume budgets focused entirely on customer acquisition costs and net revenue." },
      { title: "Server-Side Attribution Experts", description: "We implement advanced server APIs to recover the 25-35% of conversion signals lost to browser ad blockers." },
      { title: "Creative-First Velocity", description: "We treat direct-response creative as your primary targeting tool, refreshing concepts weekly to eliminate fatigue." },
      { title: "Live Executive Dashboards", description: "You receive 24/7 access to real-time Looker Studio reporting tracking pipeline value and blended ROAS." }
    ],
    faqData: [
      { q: "How long does it take to achieve positive ROAS on paid acquisition?", a: "Initial campaign validation and quick-win optimizations typically yield measurable efficiency gains within 14-30 days, with full algorithmic maturity and scalable stability achieved in 60-90 days." },
      { q: "Do you handle ad creatives, copy, and video assets in-house?", a: "Yes. Adyantra Digital has a 100% in-house creative studio of motion designers, conversion copywriters, and video editors specializing in direct-response formats." },
      { q: "How do you track conversions accurately despite iOS privacy restrictions?", a: "We build server-side tracking pipelines using sGTM and Meta Conversions API (CAPI), transmitting hashed first-party customer events directly to advertising networks." },
      { q: "What is your minimum monthly ad spend recommendation?", a: "To ensure adequate conversion volume for algorithmic machine learning models to optimize effectively, we recommend a minimum ad budget of $3,500 to $5,000 monthly." },
      { q: "Are clients locked into long-term retainers?", a: "No. We partner on flexible 90-day initial validation sprints followed by rolling monthly performance terms. We retain clients through tangible business outcomes." }
    ]
  },

  "ai-content-automation": {
    hero: {
      badge: "RANKWISE CONTENT ENGINE",
      title: <>Scale Organic Authority With <span className="text-primary underline decoration-accent/60 decoration-4">49-Factor SEO Content</span></>,
      description: "Publish authoritative, human-first articles engineered against 49 measurable SEO ranking signals. We eliminate robotic AI fluff to secure Google Featured Snippets, build topical authority, and accelerate organic inbound leads."
    },
    about: {
      title: "Human-First Content Architecture for Scaling Brands",
      paragraphs: [
        "Search algorithms increasingly penalize generic, low-effort AI writing. Adyantra Digital deploys the RankWise Content Engine—a rigorous framework combining human subject-matter expertise with structured LLM workflows that score 46+/49 on Google's technical and editorial ranking signals.",
        "We craft topical clusters with rich E-E-A-T proof points, real-world data benchmarks, and concise 40-60 word definition blocks tailored for Featured Snippets. Every piece is audited for keyword placement, heading hierarchy, semantic LSI terms, and zero burned-word vocabulary.",
        "Our publishing pipelines connect directly into your CMS (Next.js, WordPress, Webflow, Shopify). From executive thought leadership to programmatic landing pages, we deliver editorial excellence at 10x traditional speed without sacrificing credibility."
      ],
      pillars: [
        "RankWise 49-Factor Ranking Audit & Verification",
        "Google Featured Snippet & Direct Answer Optimization",
        "E-E-A-T Demonstration (Credentials, Data Points & Citations)",
        "Topical Authority Clustering & Semantic LSI Matrices",
        "Zero-Hallucination Human Editorial Review Gates",
        "Direct CMS Publishing Pipelines (Next.js / WordPress / Webflow)",
        "High-Intent Programmatic SEO Landing Page Architectures"
      ]
    },
    intro: {
      tagline: "Content That Ranks",
      headline: "Writing for Humans First, Search Engines Second",
      description: "We craft content that earns trust from human readers while satisfying every technical ranking factor required by modern search engines."
    },
    subServices: [
      { title: "Technical Content Audits", desc: "Scoring existing content against 49 ranking factors to identify structural, keyword, and schema gaps.", href: "/contact", img: "/assets/img/service/illustrations/service-seo.svg" },
      { title: "Programmatic Topic Clusters", desc: "Mapping and executing dense topical hubs covering every high-intent search query in your sector.", href: "/contact", img: "/assets/img/service/illustrations/service-content-automation.svg" },
      { title: "Direct-Response Copywriting", desc: "High-converting sales copy, email sequences, and landing page headlines crafted for action.", href: "/contact", img: "/assets/img/service/illustrations/service-sales-followup.svg" },
      { title: "Omnichannel Repurposing", desc: "Transforming long-form flagship articles into social carousels, video scripts, and executive newsletters.", href: "/contact", img: "/assets/img/service/illustrations/service-social-meta.svg" }
    ],
    processSteps: [
      { title: "Topic Architecture & SERP Analysis", description: "We identify keyword opportunities, analyze competitor snippet vulnerabilities, and construct comprehensive editorial briefs.", timeline: "Week 1" },
      { title: "RankWise Content Drafting", description: "Our editorial engine generates first-draft assets satisfying all readability, keyword density, and heading hierarchy rules.", timeline: "Weeks 1-2" },
      { title: "E-E-A-T & Data Enrichment", description: "Human subject-matter editors inject proprietary data benchmarks, industry citations, and custom diagrams.", timeline: "Weeks 2-3" },
      { title: "Structured Publishing & Indexing", description: "We deploy schema markup (JSON-LD), internal links, and push live via CMS APIs for rapid search engine indexing.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "RankWise 49-Factor Standard", description: "Every article is scored against 49 precise ranking factors before reaching production." },
      { title: "Zero Cliché AI Vocabulary", description: "We systematically eliminate burned AI filler phrases to protect your domain from HCU penalties." },
      { title: "Built-In Featured Snippet Blocks", description: "We format direct answers to win Position Zero across conversational search engines and AI Overviews." },
      { title: "Turnkey CMS Integration", description: "From markdown generation to meta tags and schema, articles are formatted ready for instant publishing." }
    ],
    faqData: [
      { q: "What makes RankWise content different from standard ChatGPT text?", a: "RankWise content enforces 49 technical ranking signals including strict keyword placement, active voice readability, custom data points, E-E-A-T author credentials, and zero burned AI cliché words." },
      { q: "How quickly do newly published articles begin to rank?", a: "With clean schema markup and proper technical indexing, articles targeting low-to-medium competition clusters often index within 48-72 hours and climb to page 1 within 30-90 days." },
      { q: "Can this system match our company's unique tone and style guidelines?", a: "Yes. We ingest your past high-performing writing, style books, and brand guidelines into custom system guardrails to maintain an authentic, consistent brand voice." },
      { q: "Does your content include JSON-LD Schema markup?", a: "Yes. All articles are generated complete with schema markup (Article, FAQPage, BreadcrumbList) for rich search engine display." }
    ]
  },

  "marketing-automation": {
    hero: {
      badge: "MARKETING AUTOMATION",
      title: <>Systematize Your Pipeline With <span className="text-primary underline decoration-accent/60 decoration-4">Automated Workflows</span></>,
      description: "Eliminate manual lead tracking and pipeline leakage. We engineer event-driven marketing workflows connecting your forms, ad accounts, WhatsApp API, and CRM into an autonomous conversion system."
    },
    about: {
      title: "Zero-Leakage Customer Journey Engineering",
      paragraphs: [
        "When prospects wait hours for a sales response, conversion rates drop by over 80%. Adyantra Digital builds instant-response automation systems that qualify leads within seconds of submission, route deals to top reps, and trigger tailored nurturing sequences across WhatsApp, SMS, and email.",
        "We integrate fragmented tools—linking your Meta Ads, Google Ads, Zapier, Make.com, HubSpot, Zoho, and internal databases into a cohesive, fault-tolerant infrastructure with automated retries and dead-letter queues.",
        "By replacing manual data entry with reliable event webhooks, your sales team spends 100% of their time closing qualified opportunities rather than chasing dead leads."
      ],
      pillars: [
        "Sub-15-Second Lead Qualification & Scoring Engines",
        "Multi-Platform Webhook & API Mesh (Make / Zapier / n8n)",
        "Two-Way WhatsApp Business API & SMS Automation",
        "CRM Lifecycle Deal Stage Progression & Task Assignment",
        "Dynamic Cart Abandonment & Win-Back Triggers",
        "Idempotent Execution & Automated Error Handling",
        "Live Executive Revenue Pipeline Dashboards"
      ]
    },
    intro: {
      tagline: "Autonomous Operations",
      headline: "Never Miss a High-Intent Customer Lead",
      description: "We build reliable automation bridges connecting lead acquisition to CRM deal closing with zero manual latency."
    },
    subServices: [
      { title: "Lead Ingestion & Scoring", desc: "Instant capture, enrichment, and predictive scoring routing high-intent buyers to senior closers.", href: "/contact", img: "/assets/img/service/illustrations/service-lead-generation.svg" },
      { title: "Omnichannel Drip Workflows", desc: "Coordinated WhatsApp, SMS, and email sequences triggered by real-time customer behavioral signals.", href: "/contact", img: "/assets/img/service/illustrations/service-whatsapp-crm.svg" },
      { title: "CRM Sync & Deal Hygiene", desc: "Automatic field normalization, duplicate prevention, and stage progression across your sales CRM.", href: "/contact", img: "/assets/img/service/illustrations/service-crm-automation.svg" },
      { title: "Multi-Platform Middleware", desc: "Custom n8n and Make.com architectures connecting legacy databases with modern marketing software.", href: "/contact", img: "/assets/img/service/illustrations/service-workflow-integrations.svg" }
    ],
    processSteps: [
      { title: "Workflow & Tooling Discovery", description: "We map your current tech stack, lead sources, and team handoffs to locate pipeline bottlenecks.", timeline: "Days 1-5" },
      { title: "System Architecture & Logic Design", description: "Blueprinting trigger conditions, enrichment filters, fallback routes, and message payloads.", timeline: "Days 6-12" },
      { title: "Integration & Sandbox Testing", description: "Building webhooks, testing multi-branch sequences, and simulating edge cases with dummy transactions.", timeline: "Days 13-20" },
      { title: "Production Deployment & Monitoring", description: "Going live with automated execution logs, instant Slack alerting for errors, and continuous uptime audits.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "Sub-15s Response Speed", description: "Leads receive personalized outreach within seconds, maximizing contact and conversion rates." },
      { title: "Enterprise Fault Tolerance", description: "Every workflow incorporates automated retries and error alerting to ensure zero dropped data." },
      { title: "Official WhatsApp Cloud API", description: "We implement verified Meta WhatsApp APIs for compliant, high-deliverability conversational sales." },
      { title: "CRM Platform Agnostic", description: "We build seamlessly across HubSpot, Salesforce, Zoho, Pipedrive, and custom PostgreSQL systems." }
    ],
    faqData: [
      { q: "Which automation platforms do you specialize in?", a: "We build complex architectures using n8n (self-hosted or cloud), Make.com, Zapier, custom Node.js webhooks, and direct native REST APIs." },
      { q: "Can you automate WhatsApp messages for incoming website leads?", a: "Yes. Using the official Meta WhatsApp Business Cloud API, we deploy automated two-way chatbots that qualify prospects and book meetings." },
      { q: "What happens if an external API goes down during a sync?", a: "Our workflow architectures include idempotent queuing and retry mechanisms that buffer payloads and re-attempt execution until delivery is verified." }
    ]
  },

  "social-media-marketing": {
    hero: {
      badge: "PAID SOCIAL ACCELERATION",
      title: <>Dominate Social Feeds With <span className="text-primary underline decoration-accent/60 decoration-4">High-Converting Ads</span></>,
      description: "Transform your social channels into predictable revenue drivers. We combine direct-response video creative, dynamic Meta Advantage+ campaigns, and deep audience segmentation to scale your return on ad spend."
    },
    about: {
      title: "Direct-Response Paid Social Built for Conversion",
      paragraphs: [
        "In the modern social advertising landscape, static stock images and vanity follower counts no longer generate meaningful revenue. Success requires high-volume creative iteration, thumb-stopping hooks, and machine-learning campaign structures.",
        "Adyantra Digital produces and tests 20+ creative variations monthly across Meta (Instagram & Facebook), TikTok, and LinkedIn. We pair direct-response video storytelling with server-side CAPI tracking, ensuring social algorithms find your highest-spending customers.",
        "From cold prospecting to personalized dynamic retargeting, our full-funnel paid social frameworks deliver steady, scalable customer acquisition for high-growth brands."
      ],
      pillars: [
        "Meta Advantage+ & Dynamic Creative Optimization (DCO)",
        "Direct-Response Short-Form Video Production (Reels & TikToks)",
        "High-Converting Headline Hook & Angle Testing Matrices",
        "Server-Side Meta Conversions API (CAPI) Tracking",
        "B2B Account-Based Marketing (ABM) on LinkedIn",
        "Omnichannel Dynamic Product Retargeting Flows",
        "Predictable Customer Acquisition Cost (CAC) Management"
      ]
    },
    intro: {
      tagline: "Social Performance",
      headline: "Creative Is Your Most Powerful Targeting Lever",
      description: "We craft thumb-stopping direct-response video and static creative assets optimized to capture buyer attention and drive profitable checkouts."
    },
    subServices: [
      { title: "Meta Advantage+ Campaigns", desc: "Machine-learning campaign structures maximizing return on ad spend across Instagram and Facebook.", href: "/contact", img: "/assets/img/service/illustrations/service-social-meta.svg" },
      { title: "Dynamic Creative Optimization", desc: "Algorithmic testing of hooks, angles, and CTA overlays to discover breakout winning creative assets.", href: "/contact", img: "/assets/img/service/illustrations/service-ad-creative.svg" },
      { title: "Direct-Response Reels & Video", desc: "Short-form video assets engineered to arrest feed scrolling and drive immediate landing page clicks.", href: "/contact", img: "/assets/img/service/illustrations/service-ai-video.svg" },
      { title: "B2B LinkedIn Marketing", desc: "High-precision account-based targeting to engage C-suite decision makers and generate enterprise pipeline.", href: "/contact", img: "/assets/img/service/illustrations/service-lead-generation.svg" }
    ],
    processSteps: [
      { title: "Competitor & Creative Analysis", description: "We analyze high-performing creative hooks and angle saturation in your niche using ad intelligence tools.", timeline: "Week 1" },
      { title: "Creative Sprint Production", description: "Our studio scripts, designs, and edits initial creative concepts across 9:16 vertical and 1:1 feed formats.", timeline: "Weeks 1-2" },
      { title: "Campaign Launch & DCO Sandbox", description: "Deploying campaigns under consolidated structures to feed ad algorithms statistically significant conversion data.", timeline: "Weeks 2-3" },
      { title: "Scale Winning Angles", description: "Doubling down on winning angles with fresh visual variations and scaling budgets profitably.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "In-House Creative Studio", description: "We shoot, edit, and iterate video and static assets internally, delivering rapid turnaround times." },
      { title: "Algorithmic Best Practices", description: "We structure campaigns aligned with modern machine-learning ad algorithms to avoid audience overlap." },
      { title: "Attribution Transparency", description: "Every conversion is verified via server-side CAPI and third-party attribution models." }
    ],
    faqData: [
      { q: "How many creative variations do you produce each month?", a: "Depending on your monthly ad spend and tier, our creative studio produces between 12 and 30 new direct-response video and static variations monthly." },
      { q: "Do you supply UGC creators and voiceovers?", a: "Yes. We source, direct, and license vetted creators, matching authentic voices to your core customer demographics." }
    ]
  },

  "seo": {
    hero: {
      badge: "TECHNICAL & PROGRAMMATIC SEO",
      title: <>Capture High-Intent Demand With <span className="text-primary underline decoration-accent/60 decoration-4">RankWise SEO</span></>,
      description: "Dominate Google search results with technical audits, topical authority clusters, and the RankWise 49-factor framework. We engineer websites to rank in top positions and capture compounding inbound organic revenue."
    },
    about: {
      title: "Technical Search Engine Optimization Engineered for ROI",
      paragraphs: [
        "Organic search represents your business's highest-margin acquisition channel. However, outdated keyword stuffing and low-quality PBN links no longer work in modern search ecosystems driven by Google's helpful content systems and AI Overviews.",
        "Adyantra Digital deploys the proprietary RankWise 49-Factor methodology. We build search architectures that excel across technical site health, Core Web Vitals, semantic entity mapping, and human-first editorial standards.",
        "By structuring deep topic clusters with clear internal link flows and JSON-LD schema markup, we transform your domain into an acknowledged authority in your market, driving qualified organic pipeline that compounds month over month."
      ],
      pillars: [
        "RankWise 49-Factor Ranking Audit & Remediation",
        "Core Web Vitals Optimization (Sub-100ms INP, LCP & CLS)",
        "Topical Authority Clustering & Semantic Entity Mapping",
        "Google Featured Snippet & AI Overview Domination",
        "Enterprise JSON-LD Schema Markup (Service, Organization, FAQ)",
        "Internal PageRank Architecture & Crawl Budget Optimization",
        "High-Authority Digital PR & Editorial Backlink Acquisition"
      ]
    },
    intro: {
      tagline: "Search Dominance",
      headline: "Rank for High-Intent Commercial Queries",
      description: "We optimize your technical architecture, content quality, and domain authority to turn search engines into compounding customer channels."
    },
    subServices: [
      { title: "Technical Site Health Audits", desc: "Comprehensive crawling to eliminate 404s, redirect chains, canonical errors, and index bloat.", href: "/contact", img: "/assets/img/service/illustrations/service-ai-audit.svg" },
      { title: "RankWise Editorial Content", desc: "Long-form search assets built against 49 factors, optimized for Featured Snippet Position Zero.", href: "/contact", img: "/assets/img/service/illustrations/service-seo.svg" },
      { title: "Enterprise Schema Markup", desc: "JSON-LD structured data for rich snippet enhancements across Google mobile and desktop search.", href: "/contact", img: "/assets/img/service/illustrations/service-content-automation.svg" },
      { title: "Digital PR & Authority Outreach", desc: "Earning contextual backlinks from tier-1 media publications and reputable industry domains.", href: "/contact", img: "/assets/img/service/illustrations/service-pr-reputation.svg" }
    ],
    processSteps: [
      { title: "Full Technical & Log File Audit", description: "Crawling every URL on your domain to resolve server response delays, indexation gaps, and mobile issues.", timeline: "Week 1" },
      { title: "Keyword & Entity Opportunity Mapping", description: "Grouping thousands of high-intent search terms into cohesive topic clusters with clear search intent.", timeline: "Weeks 1-2" },
      { title: "On-Page & Schema Deployment", description: "Rewriting titles, optimizing headings, deploying JSON-LD schema, and structuring internal links.", timeline: "Weeks 2-4" },
      { title: "Authority Growth & Ongoing Content", description: "Publishing weekly RankWise clusters and running targeted digital PR to build domain rating.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "The RankWise 49-Factor Standard", description: "We adhere strictly to a 49-factor technical and content checklist ensuring no ranking factor is overlooked." },
      { title: "Sub-100ms Core Web Vitals", description: "Our web engineers optimize frontend bundles for flawless speed scores across Google PageSpeed." },
      { title: "Zero Black-Hat Risk", description: "We protect your brand by exclusively applying white-hat, Google-compliant optimization practices." }
    ],
    faqData: [
      { q: "How long does it take for SEO investments to generate revenue?", a: "While technical fixes and low-hanging fruit keywords often show ranking momentum in 30-60 days, authoritative commercial terms typically achieve top-3 rankings in 3 to 6 months of steady execution." },
      { q: "How do you optimize for Google's new AI Overviews (SGE)?", a: "We apply the RankWise Featured Snippet methodology: concise 40-60 word definition blocks, structured tables, bulleted process lists, and verified E-E-A-T credentials that AI crawlers cite directly." }
    ]
  },

  "ecommerce-marketing": {
    hero: {
      badge: "E-COMMERCE ACCELERATION",
      title: <>Scale Online Store Sales With <span className="text-primary underline decoration-accent/60 decoration-4">D2C Growth Engines</span></>,
      description: "Scale your e-commerce brand profitably across Shopify, Amazon, and Meta. We combine high-converting storefront architecture, multi-channel shopping ads, and automated cart abandonment flows to maximize revenue."
    },
    about: {
      title: "Full-Funnel Commerce Architecture for D2C Brands",
      paragraphs: [
        "Scaling an online retail brand requires synchronized performance across advertising, storefront user experience, and post-purchase customer retention. A breakdown in any of these three stages destroys your net contribution margin.",
        "Adyantra Digital builds unified commerce systems. We optimize your store for sub-second page loads, frictionless one-click checkouts, and high Average Order Value (AOV) through intelligent bundles and upsells.",
        "Our growth team runs multi-channel acquisition across Meta Advantage+ Shopping, Google Performance Max, and Amazon PPC while automated email and SMS workflows capture lost revenue and drive repeat purchases."
      ],
      pillars: [
        "Google Performance Max & Shopping Campaign Management",
        "Meta Advantage+ Shopping & Dynamic Product Ads (DPA)",
        "Shopify & Custom Storefront Checkout Rate Optimization",
        "Automated Cart Recovery Sequences (WhatsApp, SMS, Email)",
        "Average Order Value (AOV) Expansion & Post-Purchase Upsells",
        "Customer Lifetime Value (LTV) Retention & VIP Loyalty Flows",
        "First-Party Data Integration & Server-Side Shopify CAPI"
      ]
    },
    intro: {
      tagline: "Commerce Scaling",
      headline: "Turn Store Visitors Into Repeat Customers",
      description: "We optimize your e-commerce storefront, paid traffic acquisition, and retention flows to build a profitable, compounding retail brand."
    },
    subServices: [
      { title: "Performance Max & Shopping Ads", desc: "Capturing high-intent shoppers on Google Search, YouTube, and the Google Shopping tab.", href: "/contact", img: "/assets/img/service/illustrations/service-google-ppc.svg" },
      { title: "Storefront UX & CRO", desc: "Removing checkout friction, optimizing mobile product pages, and deploying smart bundles.", href: "/contact", img: "/assets/img/service/illustrations/service-ui-ux-design.svg" },
      { title: "Automated Cart Recovery", desc: "Multi-channel WhatsApp, SMS, and email triggers recovering up to 22% of abandoned checkouts.", href: "/contact", img: "/assets/img/service/illustrations/service-ecommerce.svg" },
      { title: "Customer Retention & VIP Flows", desc: "Automated post-purchase onboarding, replenishment reminders, and loyalty incentives.", href: "/contact", img: "/assets/img/service/illustrations/service-email-workflows.svg" }
    ],
    processSteps: [
      { title: "Storefront & Attribution Audit", description: "We analyze your checkout funnel drop-offs, tracking accuracy, and product margin contributions.", timeline: "Days 1-7" },
      { title: "Tracking & Retention Deployment", description: "Installing server-side Shopify CAPI and configuring automated cart recovery drip workflows.", timeline: "Days 7-14" },
      { title: "Shopping Campaign Restructuring", description: "Deploying Google Performance Max and Meta Advantage+ catalogs with segmented product margins.", timeline: "Days 14-21" },
      { title: "Continuous AOV & Margin Scaling", description: "Testing new bundles, dynamic pricing thresholds, and creative angles to grow net profitability.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "Profit Margin Focused", description: "We optimize campaigns for contribution margin and net profit, not just top-line revenue." },
      { title: "Shopify & Custom Headless Experts", description: "Our developers build high-speed storefronts that load in under 1 second on mobile networks." },
      { title: "Proven +20% Cart Recovery", description: "Our multi-channel WhatsApp and SMS recovery flows consistently rescue high-intent buyers." }
    ],
    faqData: [
      { q: "Which e-commerce platforms do you support?", a: "We work primarily with Shopify, Shopify Plus, WooCommerce, and custom headless Next.js e-commerce storefronts." },
      { q: "How do you recover abandoned checkouts?", a: "We deploy an automated 3-touch sequence: instant WhatsApp message with cart link within 15 minutes, followed by personalized email reminders with dynamic incentives." }
    ]
  },

  "web-design-development": {
    hero: {
      badge: "ENGINEERING & DEV",
      title: <>High-Speed Web Software <span className="text-primary underline decoration-accent/60 decoration-4">Engineered to Convert</span></>,
      description: "Slow, bloated websites kill conversions and search rankings. We architect modern Next.js and React web applications engineered for sub-100ms latency, responsive aesthetics, and maximum conversion rates."
    },
    about: {
      title: "Modern Web Engineering Built for Growth & Speed",
      paragraphs: [
        "Your website is the digital headquarters of your business. If it takes more than 2 seconds to load or fails on mobile screens, prospective customers bounce and your paid ad spend is squandered.",
        "Adyantra Digital designs and develops bespoke web applications using Next.js, TypeScript, and modern headless architectures. We achieve 100/100 Core Web Vitals scores, seamless animations, and structured conversion paths that guide visitors to purchase or inquire.",
        "Every line of code is crafted 100% in-house. We integrate secure CMS backends, enterprise APIs, and real-time CRM webhooks so your site functions as an automated customer generation asset."
      ],
      pillars: [
        "Full-Stack Next.js, React & TypeScript Architecture",
        "Sub-100ms Page Load Speeds & 100/100 Core Web Vitals",
        "Conversion-Optimized Landing Page Design (CRO)",
        "Enterprise API & Webhook Integrations (CRM / ERP / Payment)",
        "Responsive Mobile-First Interface & Motion Micro-Interactions",
        "Strict SOC2, GDPR & Security Best Practice Compliance",
        "Clean, Maintainable Codebase with Zero Bloated Plugins"
      ]
    },
    intro: {
      tagline: "Software Excellence",
      headline: "Speed, Security, and Seamless Conversion",
      description: "We build custom web software combining world-class aesthetics with blisteringly fast engineering to scale your business."
    },
    subServices: [
      { title: "Custom Next.js Web Apps", desc: "Production-grade web applications engineered with server-side rendering for optimal speed.", href: "/contact", img: "/assets/img/service/illustrations/service-web-development.svg" },
      { title: "Design Systems & UI/UX", desc: "Bespoke design systems, responsive wireframes, and interactive prototypes built for engagement.", href: "/contact", img: "/assets/img/service/illustrations/service-ui-ux-design.svg" },
      { title: "Cross-Platform Mobile Apps", desc: "Native iOS and Android mobile applications built on React Native with offline capability.", href: "/contact", img: "/assets/img/service/illustrations/service-mobile-apps.svg" },
      { title: "API & Backend Integrations", desc: "Connecting payment gateways, authentication providers, and CRM endpoints via secure webhooks.", href: "/contact", img: "/assets/img/service/illustrations/service-workflow-integrations.svg" }
    ],
    processSteps: [
      { title: "Architecture & User Flow Wireframing", description: "Blueprinting component structures, database schemas, and intuitive customer conversion paths.", timeline: "Weeks 1-2" },
      { title: "High-Fidelity UI/UX Design", description: "Designing interactive prototypes with custom dark mode palettes, typographic scales, and micro-animations.", timeline: "Weeks 2-3" },
      { title: "Full-Stack Development & Testing", description: "Writing clean, modular TypeScript code with strict linting, mobile responsiveness, and speed tuning.", timeline: "Weeks 3-5" },
      { title: "Deployment & Lighthouse Speed Auditing", description: "Deploying to global Edge networks with 99.99% uptime SLAs and verified 100/100 Core Web Vitals.", timeline: "Week 6" }
    ],
    whyChooseUs: [
      { title: "Sub-100ms Latency Guarantee", description: "We eliminate monolithic framework bloat, delivering near-instant page transitions on edge CDN networks." },
      { title: "100% In-House Engineers", description: "Zero outsourcing. Senior full-stack engineers author and maintain every component." },
      { title: "Engineered for Conversion", description: "Every page is designed with prominent visual hierarchy, social proof, and streamlined action triggers." }
    ],
    faqData: [
      { q: "Why do you build with Next.js instead of WordPress?", a: "Next.js delivers unmatched performance (sub-100ms loading), enterprise-grade security with no vulnerable plugins, and superior SEO through dynamic server-side rendering." },
      { q: "Will our internal team be able to update content easily?", a: "Yes. We connect modern headless CMS platforms (Sanity, Strapi, or Contentful) allowing your team to edit text, images, and blog posts with simple visual forms." }
    ]
  },

  "analytics-reporting": {
    hero: {
      badge: "MARKETING INTELLIGENCE",
      title: <>Uncover Hidden Revenue With <span className="text-primary underline decoration-accent/60 decoration-4">Unified Analytics</span></>,
      description: "Stop flying blind with broken tracking and inaccurate metrics. We implement server-side tracking, multi-touch attribution models, and live executive Looker Studio command centers so you know your exact customer acquisition economics."
    },
    about: {
      title: "Data Integrity & Attribution Architecture",
      paragraphs: [
        "Modern privacy updates and ad blockers cause traditional client-side analytics to lose up to 30% of critical conversion events. Relying on fragmented data leads to misallocated ad budgets and inaccurate customer lifetime value estimates.",
        "Adyantra Digital architects resilient tracking ecosystems. We deploy server-side Google Tag Manager (sGTM), Meta Conversions API (CAPI), and clean first-party data pipelines to ensure every transaction and customer touchpoint is accurately recorded.",
        "We synthesize this raw data into intuitive, real-time Looker Studio dashboards. Executives, marketing leaders, and sales teams get an unvarnished view of customer acquisition costs, blended ROAS, and pipeline velocity."
      ],
      pillars: [
        "Server-Side Google Tag Manager (sGTM) Infrastructure",
        "Meta Conversions API (CAPI) & Google Enhanced Conversions",
        "First-Party Data Governance & Signal Durability",
        "Cross-Channel Multi-Touch Attribution Modeling",
        "Automated Real-Time Looker Studio Executive Dashboards",
        "Custom Event Tracking & User Behavior Flow Analysis",
        "Data Hygiene, Deduplication & Pipeline Health Alerts"
      ]
    },
    intro: {
      tagline: "Marketing Intelligence",
      headline: "Make Confident Decisions Grounded in Truth",
      description: "We build reliable data pipelines and automated visual dashboards that reveal your true marketing ROI."
    },
    subServices: [
      { title: "Server-Side CAPI Setup", desc: "Bypassing browser ad blockers by transmitting verified conversion data directly from your server.", href: "/contact", img: "/assets/img/service/illustrations/service-analytics.svg" },
      { title: "Executive Looker Dashboards", desc: "Clean, real-time command centers tracking spend, revenue, ROAS, and customer CAC in one place.", href: "/contact", img: "/assets/img/service/illustrations/service-crm-automation.svg" },
      { title: "Attribution Modeling", desc: "Uncovering the true value of top-of-funnel channels with multi-touch data attribution models.", href: "/contact", img: "/assets/img/service/illustrations/service-ai-audit.svg" },
      { title: "Conversion Funnel Telemetry", desc: "Detailed tracking of micro-conversions, scroll depth, form drop-offs, and checkout steps.", href: "/contact", img: "/assets/img/service/illustrations/service-lead-generation.svg" }
    ],
    processSteps: [
      { title: "Tracking & Pixel Health Audit", description: "Diagnosing missing tags, duplicate triggers, unverified domains, and data discrepancy rates.", timeline: "Days 1-5" },
      { title: "Server-Side Infrastructure Setup", description: "Configuring cloud server containers for sGTM and connecting direct Meta, Google, and TikTok APIs.", timeline: "Days 6-12" },
      { title: "Event Schema & Schema Testing", description: "Mapping purchase, lead, and signup events with custom parameter passing and transaction verification.", timeline: "Days 13-18" },
      { title: "Executive Dashboard Delivery", description: "Connecting data warehouses to Looker Studio with automated refreshes and role-based views.", timeline: "Days 19-25" }
    ],
    whyChooseUs: [
      { title: "100% Signal Durability", description: "Server-side tracking safeguards your data against browser restrictions and cookie decay." },
      { title: "Blended CAC & LTV Clarity", description: "We calculate true blended economics across all paid and organic acquisition channels." },
      { title: "No Fluff Metric Focus", description: "We focus on revenue, cash flow, and cost per acquisition rather than vanity impressions." }
    ],
    faqData: [
      { q: "Why do I need server-side tracking (sGTM)?", a: "Standard client-side tags are routinely blocked by privacy extensions, iOS updates, and Safari ITP. Server-side tracking routes data directly through your own domain, restoring 20-30% of lost conversion signals." },
      { q: "Can you connect our custom CRM or database to Looker Studio?", a: "Yes. We build automated data connectors linking BigQuery, PostgreSQL, HubSpot, Stripe, and ad platforms directly into unified reporting views." }
    ]
  },

  "influencer-marketing": {
    hero: {
      badge: "CREATOR & INFLUENCER GROWTH",
      title: <>Scale Brand Trust With <span className="text-primary underline decoration-accent/60 decoration-4">Vetted Creators</span></>,
      description: "Harness the power of authentic creator partnerships. We source, negotiate, and execute performance influencer campaigns across Instagram and YouTube that drive real customer engagement and measurable sales."
    },
    about: {
      title: "Performance-Driven Creator Partnerships",
      paragraphs: [
        "Consumers no longer respond to generic branded advertising. They purchase from trusted creators who authentically integrate products into their daily lifestyle. However, managing dozens of creators manually is chaotic and prone to wasted spend.",
        "Adyantra Digital turns influencer marketing into a structured acquisition channel. We vet creator audiences for real engagement, negotiate content licensing rights for paid ad whitelisting, and track every campaign with unique affiliate referral links.",
        "By repurposing winning creator videos across your paid Meta and TikTok ad accounts, you multiply campaign reach while reducing creative production costs."
      ],
      pillars: [
        "Audience Authenticity & Fake Follower Auditing",
        "End-to-End Creator Contracting & Usage Rights Licensing",
        "Performance Whitelisting & Dark Posting on Meta / TikTok",
        "Unique Coupon & Server-Side Affiliate Attribution",
        "Direct-Response Creative Briefing & Storyboard Review",
        "Tiered Ambassador & Micro-Influencer Management",
        "Attributable ROAS & Cost Per Acquisition Tracking"
      ]
    },
    intro: {
      tagline: "Authentic Reach",
      headline: "Partner With Creators Your Customers Already Trust",
      description: "We handle creator discovery, contract negotiations, creative briefs, and performance tracking to turn influencers into reliable revenue generators."
    },
    subServices: [
      { title: "Creator Discovery & Vetting", desc: "Auditing audience demographics, engagement ratios, and brand affinity to avoid fake influencers.", href: "/contact", img: "/assets/img/service/illustrations/service-influencer-marketing.svg" },
      { title: "Affiliate & Commission Structures", desc: "Setting up automated performance commission networks that reward creators for verified sales.", href: "/contact", img: "/assets/img/service/illustrations/service-affiliate-partners.svg" },
      { title: "Creator Video Whitelisting", desc: "Running paid ads directly through creator social handles for higher trust and lower CPMs.", href: "/contact", img: "/assets/img/service/illustrations/service-ai-video.svg" },
      { title: "Attribution & Sales Tracking", desc: "Tracking campaign performance with unique coupon codes and server-side UTM parameters.", href: "/contact", img: "/assets/img/service/illustrations/service-analytics.svg" }
    ],
    processSteps: [
      { title: "Persona & Creator Mapping", description: "Identifying high-affinity micro and macro creators who align with your ideal customer profile.", timeline: "Week 1" },
      { title: "Outreach & Rate Negotiation", description: "Contacting creators, negotiating usage rights, and securing favorable deliverables and fee structures.", timeline: "Weeks 1-2" },
      { title: "Product Seeding & Content Review", description: "Shipping products, reviewing draft videos against creative briefs, and approving final assets.", timeline: "Weeks 2-3" },
      { title: "Launch & Whitelisting Scale", description: "Coordinating posting dates and boosting top-performing posts via paid Meta ad campaigns.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "Strict Audience Vetting", description: "We run deep algorithmic scans on every creator to eliminate bot followings and low engagement." },
      { title: "Usage Rights Included", description: "We secure full digital advertising rights so your team can repurpose content across your ad accounts." },
      { title: "Performance-Based Terms", description: "We structure deals tying creator compensation to actual revenue and customer acquisitions." }
    ],
    faqData: [
      { q: "How do you measure ROI on influencer campaigns?", a: "We track performance through unique discount codes, custom affiliate links, and lift in branded search volume during the campaign window." },
      { q: "Do you work with micro-influencers or celebrity creators?", a: "We focus primarily on high-engagement micro-influencers (10k-150k followers) who generate significantly higher conversion rates per dollar spent than celebrity accounts." }
    ]
  },

  "ai-video-marketing": {
    hero: {
      badge: "AI VIDEO PRODUCTION",
      title: <>Capture Feed Attention With <span className="text-primary underline decoration-accent/60 decoration-4">AI Video Creatives</span></>,
      description: "Scale your short-form video production without expensive studio equipment. We engineer automated AI video pipelines that script, render, caption, and format high-converting Reels, Shorts, and paid video ads."
    },
    about: {
      title: "Direct-Response Video Marketing at Scale",
      paragraphs: [
        "Short-form video is the dominant media format across modern digital channels. However, traditional video production is prohibitively slow, costly, and difficult to test across multiple angles.",
        "Adyantra Digital deploys automated video production workflows. We generate dozens of hook variations, synthetic voiceovers, animated captions, and platform-native 9:16 aspect ratios engineered specifically for Instagram Reels, YouTube Shorts, and Meta ad feeds.",
        "Our iterative video testing model allows brands to test 10x more angles per week, identifying breakout winning creatives that lower Cost Per Click (CPC) and dramatically boost customer acquisition volume."
      ],
      pillars: [
        "Short-Form Direct-Response Scripting & Hook Engineering",
        "Automated Multi-Format Video Rendering (9:16, 1:1, 16:9)",
        "AI Voiceover Synthesis with Authentic Human Inflections",
        "Dynamic Animated Subtitles & B-Roll Visual Stitching",
        "High-Velocity Creative A/B Testing on Meta & TikTok",
        "Multi-Language Video Localization & Dubbing",
        "Direct-Response CTA Overlays for Maximum Click-Throughs"
      ]
    },
    intro: {
      tagline: "Video Acceleration",
      headline: "Publish 20+ High-Converting Video Variations Monthly",
      description: "We combine automated video rendering with direct-response copywriting to produce scroll-stopping video assets built to sell."
    },
    subServices: [
      { title: "AI Video Production Studio", desc: "Generating high-definition video assets with automated B-roll insertion and dynamic transitions.", href: "/contact", img: "/assets/img/service/illustrations/service-ai-video.svg" },
      { title: "Multi-Format DCO Variations", desc: "Rendering vertical 9:16 Reels and square 1:1 feed variations with different opening hooks.", href: "/contact", img: "/assets/img/service/illustrations/service-ad-creative.svg" },
      { title: "AI Voiceover & Subtitles", desc: "Crystal-clear synthesized voices paired with high-contrast animated captions for silent feed viewing.", href: "/contact", img: "/assets/img/service/illustrations/service-content-automation.svg" },
      { title: "Paid Social Video Scaling", desc: "Deploying winning video creatives into Meta Advantage+ and YouTube Shorts advertising campaigns.", href: "/contact", img: "/assets/img/service/illustrations/service-social-meta.svg" }
    ],
    processSteps: [
      { title: "Angle Scripting & Hook Matrix", description: "Writing 10+ distinct 3-second hook variations targeting specific customer pain points and objections.", timeline: "Week 1" },
      { title: "Automated Rendering & Voiceover", description: "Stitching high-resolution footage, generating voice tracks, and rendering animated kinetic typography.", timeline: "Weeks 1-2" },
      { title: "Creative A/B Launch", description: "Deploying variations into live ad campaigns to identify the lowest CPA and highest retention hooks.", timeline: "Weeks 2-3" },
      { title: "Iteration & Winner Expansion", description: "Iterating on the winning 20% of creatives by testing new end cards and direct-response CTAs.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "10x Production Speed", description: "Generate dozens of polished video variations in days rather than waiting weeks for studio crews." },
      { title: "Optimized for Silent Viewing", description: "High-contrast dynamic captions ensure message delivery even when users browse feeds on mute." },
      { title: "Built for Direct Response", description: "Every second of footage is engineered to drive clicks, app installs, and e-commerce purchases." }
    ],
    faqData: [
      { q: "Can we use our own brand footage and product clips?", a: "Yes. We can incorporate your raw product unboxings, customer testimonials, and brand b-roll into our automated rendering pipeline." },
      { q: "How realistic do the AI voiceovers sound?", a: "We utilize next-generation neural voice models that sound indistinguishable from professional voice actors, complete with natural pacing and emotion." }
    ]
  },

  "affiliate-marketing": {
    hero: {
      badge: "AFFILIATE & PARTNER SCALE",
      title: <>Multiply Distribution With <span className="text-primary underline decoration-accent/60 decoration-4">Affiliate Networks</span></>,
      description: "Scale your customer acquisition with zero upfront ad risk. We recruit, onboard, and manage high-volume affiliate partners and creators who promote your brand on a verified pay-per-sale commission model."
    },
    about: {
      title: "Performance Partnerships That Protect Margins",
      paragraphs: [
        "Relying solely on paid advertising leaves your business vulnerable to rising ad auction costs and policy changes. An affiliate marketing engine creates a decentralized sales army that only gets paid when they generate confirmed revenue.",
        "Adyantra Digital designs, launches, and manages enterprise affiliate programs. We recruit top-tier publishers, comparison portals, and niche content creators, providing them with conversion-tested creatives, tracking links, and competitive commission tiers.",
        "With automated fraud detection and server-side tracking, we ensure every commission payout is tied to a legitimate, verified customer transaction."
      ],
      pillars: [
        "Custom Affiliate Program Architecture & Commission Structuring",
        "Proactive Partner Recruitment & Content Publisher Outreach",
        "Automated Affiliate Tracking & Server-Side Webhook Attributions",
        "Affiliate Asset Portal (Banners, Copy Swipes & Promo Codes)",
        "Affiliate Fraud Protection & Coupon Abuse Prevention",
        "Tiered Performance Incentives for Super-Affiliate Retention",
        "Automated Payout Reconciliation & Accounting Sync"
      ]
    },
    intro: {
      tagline: "Partner Ecosystem",
      headline: "Only Pay When Customers Actually Purchase",
      description: "We recruit, equip, and manage an active network of affiliate promoters driving verified revenue to your storefront."
    },
    subServices: [
      { title: "Program Setup & Commission Modeling", desc: "Designing competitive tiered payout structures that attract top affiliates while protecting profit margins.", href: "/contact", img: "/assets/img/service/illustrations/service-affiliate-partners.svg" },
      { title: "Partner Sourcing & Outreach", desc: "Direct outreach to authority comparison sites, industry bloggers, and high-influence reviewers.", href: "/contact", img: "/assets/img/service/illustrations/service-lead-generation.svg" },
      { title: "Fraud & Coupon Protection", desc: "Automated monitoring preventing coupon code leakage, trademark bidding, and bot transactions.", href: "/contact", img: "/assets/img/service/illustrations/service-workflow-integrations.svg" },
      { title: "Affiliate Tracking & Attribution", desc: "First-party server tracking ensuring accurate attribution across complex multi-touch customer journeys.", href: "/contact", img: "/assets/img/service/illustrations/service-analytics.svg" }
    ],
    processSteps: [
      { title: "Margin Analysis & Program Rules", description: "Calculating allowable customer acquisition costs and establishing strict promotional terms of service.", timeline: "Week 1" },
      { title: "Tracking Integration & Asset Prep", description: "Configuring affiliate tracking software and preparing high-converting marketing collateral and copy.", timeline: "Weeks 1-2" },
      { title: "Targeted Publisher Recruitment", description: "Conducting personalized outreach to hundreds of high-ranking editorial review sites and creators.", timeline: "Weeks 2-4" },
      { title: "Ongoing Partner Management", description: "Distributing monthly promotional calendars, optimizing conversion paths, and auditing payouts.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "Zero Ad Spend Waste", description: "You pay commissions strictly upon verified customer purchases, eliminating media waste." },
      { title: "Proactive Publisher Relations", description: "We actively build direct relationships with super-affiliates to secure prominent homepage features." },
      { title: "Strict Brand Guardrails", description: "We enforce brand compliance rules to prevent misleading claims or unauthorized discount promotions." }
    ],
    faqData: [
      { q: "Which affiliate tracking platforms do you integrate with?", a: "We work with top platforms including Impact, CJ Affiliate, ShareASale, Refersion, UpPromote, and custom server-side webhook systems." },
      { q: "How do you prevent affiliates from bidding on our brand name?", a: "We enforce negative keyword policies and monitor search engine results with automated brand-bidding audit tools to catch and disqualify violators." }
    ]
  }
};
