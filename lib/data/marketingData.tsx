import React from "react";
import { ServicePageData } from "@/components/templates/ServicePageTemplate";

export const marketingData: Record<string, ServicePageData> = {
  "digital-marketing-growth": {
    hero: {
      badge: "PERFORMANCE MARKETING",
      title: <>Accelerate Revenue With <span className="text-primary underline decoration-accent/60 decoration-4">Data-Driven Growth</span></>,
      description: "Stop burning budget on generic campaigns. We engineer high-ROAS digital marketing ecosystems that combine precision audience targeting, dynamic creative optimization, and deep funnel analytics to scale your brand predictably and profitably."
    },
    about: {
      title: "Engineered For Sustainable Market Dominance",
      paragraphs: [
        "In a hyper-competitive digital landscape, relying on outdated ad strategies leads to diminishing returns. At Adyantra Digital, we don't just 'run ads'—we architect comprehensive growth engines. Our approach unifies paid acquisition, organic visibility, and conversion rate optimization (CRO) into a single, cohesive revenue-generation machine.",
        "We leverage proprietary data models to identify high-intent cohorts, reducing your Cost Per Acquisition (CPA) while scaling ad spend. By aggressively A/B testing ad creatives, landing page layouts, and offer structures, we ensure every dollar you invest is mathematically optimized to produce maximum yield.",
        "Our team of senior media buyers, technical SEO specialists, and data scientists work in tandem. We map the entire customer journey from the first impression to the final checkout, deploying multi-touch attribution to uncover exactly which channels drive your highest Lifetime Value (LTV) customers."
      ],
      pillars: [
        "Multi-Channel Paid Acquisition (Meta & Google Ads)",
        "Conversion Rate Optimization (CRO & A/B Testing)",
        "Advanced Server-Side Multi-Touch Attribution",
        "Dynamic Direct-Response Creative Production",
        "Full-Funnel Customer Lifetime Value (LTV) Expansion",
        "Algorithmic Bidding & Budget Allocation Logic",
        "Continuous Landing Page & Offer Structure Optimization"
      ]
    },
    intro: {
      tagline: "Growth Architecture",
      headline: "Predictable Scaling Through Mathematical Marketing",
      description: "We eliminate the guesswork from digital expansion. By building deterministic marketing models based on historical data and real-time algorithmic bidding, we turn your marketing department from a cost center into a predictable profit center."
    },
    subServices: [
      { title: "Meta & Google Ads Management", desc: "Algorithmic bidding and dynamic creative testing on Facebook, Instagram, and Google Search.", href: "/contact", img: "/assets/img/service/seo-3d.png" },
      { title: "Conversion Rate Optimization", desc: "Multivariate testing of landing pages to maximize lead capture and checkout completions.", href: "/contact", img: "/assets/img/service/webdev-3d.png" },
      { title: "Multi-Touch Analytics", desc: "Implementation of server-side tracking (CAPI) to bypass iOS14 restrictions and track true ROI.", href: "/contact", img: "/assets/img/service/ai-3d.png" },
      { title: "Lifecycle Email & SMS", desc: "Automated retention sequences to maximize Customer Lifetime Value (LTV).", href: "/contact", img: "/assets/img/service/seo-3d.png" }
    ],
    processSteps: [
      { title: "Deep Technical Audit", description: "We analyze your historical ad account data, pixel health, tracking setup, and competitor positioning to identify immediate revenue leaks.", timeline: "Days 1-7" },
      { title: "Funnel Architecture & Tracking", description: "Deployment of server-side Google Tag Manager (sGTM) and Meta CAPI to ensure 100% accurate data attribution.", timeline: "Days 7-14" },
      { title: "Creative Production & Launch", description: "Our in-house design team produces high-converting video and static assets tailored to specific audience cohorts.", timeline: "Days 14-21" },
      { title: "Algorithmic Scaling", description: "Once baseline ROAS is achieved, we aggressively scale budgets horizontally across winning audiences and creatives.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "Data-Obsessed Media Buyers", description: "Our team manages millions in ad spend and relies on strict KPIs, not vanity metrics." },
      { title: "Server-Side Tracking Expertise", description: "We implement advanced API tracking to recover 20-30% of lost data from ad blockers." },
      { title: "Creative-First Strategy", description: "We treat ad creative as the ultimate targeting tool, constantly refreshing assets to prevent fatigue." },
      { title: "Transparent Reporting Dashboards", description: "You get 24/7 access to live Looker Studio dashboards tracking every dollar spent." }
    ],
    faqData: [
      { q: "How long does it take to see a positive ROI?", a: "While we often find immediate 'quick wins' in the first 30 days by plugging revenue leaks, a fully optimized, scalable algorithmic campaign typically requires 60-90 days of data seasoning." },
      { q: "Do you handle the ad creative and copywriting?", a: "Yes. Adyantra Digital has a 100% in-house creative team of designers, copywriters, and video editors who specialize in direct-response marketing." },
      { q: "How do you track conversions with iOS14 and ad blockers?", a: "We utilize Server-Side Tracking (sGTM) and Conversions API (CAPI) directly from your server to the ad platforms, bypassing browser-level restrictions." },
      { q: "What is your minimum monthly ad spend requirement?", a: "To ensure statistical significance in our testing and provide room for algorithmic optimization, we typically partner with brands spending a minimum of $5,000/month." },
      { q: "Do you lock clients into long-term contracts?", a: "No. We believe our performance should keep you as a client. We operate on flexible month-to-month agreements after an initial 90-day onboarding period." }
    ]
  },
  "ai-content-automation": {
    hero: {
      badge: "AI CONTENT ENGINEERING",
      title: <>Scale Your Reach With <span className="text-primary underline decoration-accent/60 decoration-4">AI-Driven Content</span></>,
      description: "Stop relying on slow, manual content creation. We engineer sophisticated AI workflows that generate high-quality, SEO-optimized content at massive scale—driving exponential traffic growth while slashing operational overhead."
    },
    about: {
      title: "Content Engineering for High-Growth Enterprises",
      paragraphs: [
        "In today's algorithmic landscape, content volume and relevance dictate market dominance. However, scaling human production introduces massive cost and quality bottlenecks. Adyantra Digital solves this by architecting bespoke AI content generation models trained specifically on your brand's unique voice, industry data, and target personas.",
        "We don't just use out-of-the-box LLMs to generate generic text. We engineer full-funnel content ecosystems. This involves setting up programmatic SEO architectures where thousands of hyper-targeted landing pages are generated, validated, and published automatically, ensuring every long-tail keyword in your industry is captured.",
        "Furthermore, our AI workflows seamlessly integrate with your existing CMS (WordPress, Shopify, Webflow) and CRM platforms. From drafting personalized cold-outreach emails to generating omni-channel social media matrices, our automation eliminates human bottlenecks, allowing your team to focus on high-level strategy."
      ],
      pillars: [
        "Custom LLM Fine-Tuning & Prompt Engineering",
        "Programmatic SEO Engine Architecture",
        "Multi-Channel Automated Content Distribution",
        "RAG Vector Database Ingestion (Brand Voice Cloning)",
        "Zero-Hallucination Human-In-The-Loop Approval Flows",
        "Automated Social Media Copy & Carousel Generation",
        "Direct API CMS Publishing Pipelines (WordPress/Webflow)"
      ]
    },
    intro: {
      tagline: "Intelligent Scaling",
      headline: "Dominate Search & Social Without the Human Overhead",
      description: "Your audience consumes content faster than a traditional team can produce it. Our AI content automation bridges that gap, delivering hyper-personalized, data-backed assets that engage your ideal buyers and accelerate your sales pipeline 24/7."
    },
    subServices: [
      { title: "Programmatic SEO Engines", desc: "Architecture for generating thousands of targeted, location-based or product-based landing pages using structured AI models.", href: "/contact", img: "/assets/img/service/seo-3d.png" },
      { title: "Automated Social Pipelines", desc: "AI-driven trend analysis, copy generation, and automated scheduling for absolute omni-channel presence.", href: "/contact", img: "/assets/img/service/ai-3d.png" },
      { title: "Dynamic Sales Copy generation", desc: "Hyper-personalized cold email and SMS sequences powered by behavioral triggers and CRM data enrichment.", href: "/contact", img: "/assets/img/service/webdev-3d.png" },
      { title: "Brand Voice Cloning", desc: "Strict system prompts and vector databases (RAG) to ensure AI output matches your exact brand tone.", href: "/contact", img: "/assets/img/service/seo-3d.png" }
    ],
    processSteps: [
      { title: "Brand Voice & Data Ingestion", description: "We scrape and analyze your past content, brand guidelines, and high-performing assets to build a custom vector database.", timeline: "Weeks 1-2" },
      { title: "Workflow Architecture & Integration", description: "Connecting your CMS, CRM, and social channels via n8n or Make.com to enable seamless, automated publishing.", timeline: "Weeks 2-3" },
      { title: "Prompt Engineering & Quality Testing", description: "Rigorous testing of system prompts and automated validation scripts to ensure zero hallucinations and high quality.", timeline: "Weeks 3-4" },
      { title: "Deployment & Automated Scaling", description: "Flipping the switch on the programmatic engine, generating and publishing content autonomously.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "Zero AI Hallucinations", description: "We use strict parameter controls and Retrieval-Augmented Generation (RAG) to ensure absolute factual accuracy." },
      { title: "Massive Cost Reduction", description: "Achieve the output of a 20-person content team for a fraction of the cost." },
      { title: "SEO-First Architecture", description: "Every piece of content is engineered to satisfy Google's Helpful Content (E-E-A-T) guidelines." },
      { title: "Native CMS Integration", description: "We build custom APIs to plug directly into WordPress, Webflow, Shopify, or your custom tech stack." }
    ],
    faqData: [
      { q: "Will AI content hurt my Google rankings?", a: "No. Google's official stance rewards high-quality content regardless of how it is produced. We engineer our AI to strictly adhere to E-E-A-T principles, ensuring your content ranks safely and effectively." },
      { q: "Does the content sound robotic or generic?", a: "Not at all. We utilize advanced prompt engineering and fine-tune large language models (LLMs) using your existing brand voice, style guides, and terminology." },
      { q: "Can we review the content before it goes live?", a: "parser. We build 'human-in-the-loop' workflows where your team can quickly approve, edit, or reject staged content." },
      { q: "How do you ensure factual accuracy?", a: "We use RAG (Retrieval-Augmented Generation) which forces the AI to pull facts solely from a strictly controlled database of your company's own documents." },
      { q: "What platforms can you automate content for?", a: "We build publishing pipelines for WordPress, Shopify, Webflow, LinkedIn, X, Facebook, Instagram, and major CRMs." }
    ]
  },
  "marketing-automation": {
    hero: {
      badge: "REVENUE AUTOMATION",
      title: <>Turn Traffic Into Revenue With <span className="text-primary underline decoration-accent/60 decoration-4">Marketing Automation</span></>,
      description: "Eliminate manual follow-ups and leaky funnels. We build intelligent, multi-channel automation ecosystems that capture, score, and nurture leads 24/7, dramatically accelerating your sales cycle."
    },
    about: {
      title: "Intelligent Workflows for Measurable Advantage",
      paragraphs: [
        "Most businesses lose massive amounts of revenue simply because leads fall through the cracks. Sales teams are too busy to follow up 7+ times, and generic email blasts are ignored. Adyantra Digital solves this by engineering interconnected marketing systems that capture, nurture, and close prospects automatically.",
        "By deeply integrating your CRM (HubSpot, Salesforce, GoHighLevel) with advanced automation logic, we ensure the right message hits the right prospect at the exact right time. We build complex branching logic based on user behavior—if they visit the pricing page, they get a specific SMS; if they abandon a cart, they get a personalized email.",
        "Our marketing automation setups go beyond basic autoresponders. We implement dynamic lead scoring algorithms that quantify prospect engagement, alerting your human sales team the exact moment a lead is 'hot' and ready to close."
      ],
      pillars: [
        "Advanced Enterprise CRM Architecture (HubSpot/Salesforce)",
        "Dynamic Multi-Touch Lead Scoring Algorithms",
        "Real-Time Behavioral Trigger Sequences",
        "Omni-Channel Messaging (Email, SMS, WhatsApp Sync)",
        "Automated Lead Assignment & Sales Round-Robin Logic",
        "Pipeline Velocity & Drop-off Analytics",
        "Closed-Loop Revenue Attribution Infrastructure"
      ]
    },
    intro: {
      tagline: "Systematized Sales",
      headline: "Stop Chasing Leads. Let Your Systems Convert Them.",
      description: "From sophisticated abandoned cart sequences to complex B2B lead nurturing pipelines lasting 12+ months, our automation strategies trigger highly personalized actions based on deep user behavior, ensuring maximum engagement."
    },
    subServices: [
      { title: "Behavioral Email Sequences", desc: "Highly segmented automated email logic based on exactly what users click, view, and purchase.", href: "/contact", img: "/assets/img/service/ai-3d.png" },
      { title: "WhatsApp & SMS Automation", desc: "Direct-to-phone messaging for high-intent lead closing and appointment reminders with 98% open rates.", href: "/contact", img: "/assets/img/service/seo-3d.png" },
      { title: "Dynamic Lead Scoring", desc: "Algorithms that track engagement across your site and emails to identify your hottest leads automatically.", href: "/contact", img: "/assets/img/service/webdev-3d.png" },
      { title: "CRM Implementation & Auditing", desc: "Complete setup and overhaul of HubSpot, ActiveCampaign, or GoHighLevel for maximum efficiency.", href: "/contact", img: "/assets/img/service/seo-3d.png" }
    ],
    processSteps: [
      { title: "Funnel Mapping & Audit", description: "We map out your entire customer journey, identifying drop-off points and missed follow-up opportunities.", timeline: "Weeks 1-2" },
      { title: "Tech Stack Integration", description: "We connect your website, CRM, advertising platforms, and communication channels via robust APIs.", timeline: "Weeks 2-3" },
      { title: "Workflow Logic Design", description: "Building complex conditional branches, delay timers, and dynamic tags to hyper-personalize the user journey.", timeline: "Weeks 3-4" },
      { title: "Testing & Iteration", description: "Live A/B testing of subject lines, wait times, and offer structures to maximize conversion rates.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "Omni-Channel Expertise", description: "We seamlessly blend Email, SMS, WhatsApp, and Retargeting Ads into unified sequences." },
      { title: "Complex Logic Specialists", description: "We build advanced 'If/Then' logic trees that respond to real-time prospect behavior." },
      { title: "CRM Agnostic Approach", description: "Whether you use HubSpot, Salesforce, or niche software, we have the technical depth to integrate it." },
      { title: "Sales Alignment", description: "Our automations are designed specifically to feed highly-qualified, booked appointments to your closers." }
    ],
    faqData: [
      { q: "What CRM software do you recommend?", a: "We frequently work with HubSpot for B2B enterprises, Klaviyo for E-commerce, and GoHighLevel for agencies and local service businesses." },
      { q: "Will automated emails end up in spam?", a: "We configure DMARC, DKIM, and SPF records and implement domain warm-up protocols to ensure 95%+ inbox deliverability." },
      { q: "Can marketing automation help if my sales cycle is very long?", a: "Yes. For 6-12 month B2B sales cycles, we build long-term drip campaigns that keep your brand top-of-mind." },
      { q: "Do you provide copywriting for automated emails?", a: "Yes, our direct-response copywriters craft all email, SMS, and WhatsApp scripts." },
      { q: "How do you track the ROI of automation?", a: "We implement closed-loop reporting attributing CRM closed-won revenue directly back to automation sequences." }
    ]
  },
  "social-media-marketing": {
    hero: {
      badge: "SOCIAL DOMINANCE",
      title: <>Build Unbreakable Loyalty With <span className="text-primary underline decoration-accent/60 decoration-4">Strategic Social Media</span></>,
      description: "Move beyond vanity metrics. We engineer full-funnel social media architectures that combine viral organic content with high-converting paid social to build communities, drive deep brand loyalty, and generate measurable revenue."
    },
    about: {
      title: "Architecting Digital Communities for Scaling Brands",
      paragraphs: [
        "In the modern attention economy, posting generic graphics three times a week is a waste of resources. Social media algorithms reward high-retention video, contrarian thought leadership, and deep community engagement. Adyantra Digital builds highly aggressive, culturally relevant social media strategies that command attention.",
        "We approach social media as a dual-engine system: The 'Organic Engine' builds trust, authority, and massive top-of-funnel reach through short-form video and authoritative writing. The 'Paid Engine' captures that attention, retargets engaged users, and forcefully drives them into your conversion funnels.",
        "Our in-house production team handles everything from scriptwriting and creative direction to video editing and community management. We utilize advanced sentiment analysis to gauge audience reception and pivot our content strategy dynamically based on algorithmic trends."
      ],
      pillars: [
        "High-Retention Short-Form Video Production (Reels/TikTok)",
        "Executive B2B Thought Leadership (LinkedIn Ghostwriting)",
        "Proactive Community Cultivation & DM Lead Capture",
        "Algorithmic Trend & Retention Graph Analytics",
        "Social Commerce Integration (Instagram/TikTok Shop)",
        "Omni-Channel Content Calendar Architecture",
        "Paid Social Retargeting Funnel Alignment"
      ]
    },
    intro: {
      tagline: "Omni-Channel Presence",
      headline: "Command Attention in a Noisy World",
      description: "We transform your social channels from stagnant digital brochures into dynamic, highly engaged communities that act as your most powerful customer acquisition asset."
    },
    subServices: [
      { title: "Short-Form Video (Reels/TikTok)", desc: "High-retention, fast-paced video content engineered specifically for algorithmic virality.", href: "/contact", img: "/assets/img/service/ai-3d.png" },
      { title: "B2B LinkedIn Authority", desc: "Ghostwriting and executive brand building to position your leadership as industry titans.", href: "/contact", img: "/assets/img/service/seo-3d.png" },
      { title: "Community Management", desc: "Proactive engagement, comment moderation, and DM management to foster extreme loyalty.", href: "/contact", img: "/assets/img/service/webdev-3d.png" },
      { title: "Social Commerce Integration", desc: "Setting up Instagram/Facebook Shops and TikTok Shop for frictionless in-app purchasing.", href: "/contact", img: "/assets/img/service/seo-3d.png" }
    ],
    processSteps: [
      { title: "Brand Identity & Trend Analysis", description: "Deep dive into your brand archetype, competitor positioning, and current platform algorithms.", timeline: "Weeks 1-2" },
      { title: "Content Matrix Architecture", description: "Developing a 30-day content calendar spanning educational, entertaining, and promotional pillars.", timeline: "Weeks 2-3" },
      { title: "In-House Production", description: "Our studio team shoots, edits, and produces high-quality video and static assets.", timeline: "Continuous" },
      { title: "Analytics & Algorithmic Pivot", description: "Weekly review of retention graphs and engagement rates to double down on winning formats.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "Video-First Strategy", description: "We prioritize short-form video (TikTok, Reels, Shorts) which drives 80% of modern social engagement." },
      { title: "B2B & B2C Expertise", description: "Whether you need aggressive TikTok trends or professional LinkedIn thought leadership, we have specialized teams." },
      { title: "Data-Backed Creative", description: "We don't guess. We analyze video retention graphs to optimize hook rates and watch times." },
      { title: "Full-Stack Production", description: "No outsourced editing. Our in-house team ensures rapid turnaround times and brand consistency." }
    ],
    faqData: [
      { q: "Which social platforms should my business be on?", a: "B2B companies target LinkedIn and X; E-commerce brands dominate TikTok, Instagram, and Pinterest." },
      { q: "How many times a week do you post?", a: "We recommend 3-5 high-quality posts per week including 2-3 short-form videos." },
      { q: "Do you handle answering comments and messages?", a: "Yes, community management and DM lead capture are fully included." },
      { q: "How do we measure success on social media?", a: "Primary KPIs are profile visits, link clicks, lead capture, and attributable revenue." },
      { q: "Do I have to record videos myself?", a: "We provide scripts if you want to be on camera, or use UGC creators/motion graphics if you prefer hands-off." }
    ]
  },
  "seo": {
    hero: {
      badge: "SEARCH DOMINANCE",
      title: <>Capture High-Intent Traffic With <span className="text-primary underline decoration-accent/60 decoration-4">Technical SEO</span></>,
      description: "Dominate Google's top rankings. We deploy advanced technical architecture, programmatic content strategies, and high-authority link acquisition to secure sustainable organic traffic that converts."
    },
    about: {
      title: "Algorithmic Engineering for Organic Growth",
      paragraphs: [
        "Search Engine Optimization is no longer about keyword stuffing or buying spammy backlinks. It is a highly technical discipline requiring perfect website architecture, rapid load times, and exceptionally structured content. Adyantra Digital approaches SEO as an engineering problem.",
        "We start with a granular technical audit, resolving JavaScript rendering issues, optimizing Core Web Vitals, and restructuring your URL hierarchy for optimal crawlability. By ensuring search engines can perfectly parse and index your site, we lay the foundation for explosive growth.",
        "On the content side, we utilize entity-based SEO and semantic topic clustering. Instead of targeting single keywords, we build massive topical authority maps, positioning your brand as the definitive industry resource. Coupled with our digital PR campaigns to secure high-DR backlinks, we push your site to the top of competitive SERPs."
      ],
      pillars: [
        "Developer-Led Technical SEO Architecture",
        "Core Web Vitals Speed & Hydration Optimization",
        "Semantic Topic Clustering & Entity Mapping",
        "Programmatic Long-Tail Keyword Generation",
        "High-DR Editorial Link Acquisition & Digital PR",
        "Structured Schema Markup (JSON-LD) Deployment",
        "Google Helpful Content & E-E-A-T Alignment"
      ]
    },
    intro: {
      tagline: "Organic Revenue",
      headline: "Stop Paying for Every Click",
      description: "Paid ads stop working the moment you stop paying. A well-engineered SEO strategy builds a compounding digital asset that drives highly qualified, free traffic to your business for years to come."
    },
    subServices: [
      { title: "Technical SEO Audits", desc: "Deep crawl analysis, resolving canonical conflicts, schema markup, and JavaScript rendering issues.", href: "/contact", img: "/assets/img/service/ai-3d.png" },
      { title: "Content Silos & Topical Authority", desc: "Architecting structured content hubs to completely dominate specific industry niches.", href: "/contact", img: "/assets/img/service/seo-3d.png" },
      { title: "Digital PR & Link Building", desc: "Acquiring editorial backlinks from high Domain Rating (DR) publications in your industry.", href: "/contact", img: "/assets/img/service/webdev-3d.png" },
      { title: "Local SEO & Map Pack", desc: "Aggressive optimization for local businesses to dominate the 'Near Me' Google search results.", href: "/contact", img: "/assets/img/service/seo-3d.png" }
    ],
    processSteps: [
      { title: "Comprehensive Technical Audit", description: "We run deep crawls using tools like Screaming Frog to identify and fix every indexability issue on your site.", timeline: "Weeks 1-3" },
      { title: "Keyword & Entity Mapping", description: "Mapping high-intent keywords to specific URLs and planning out semantic content clusters.", timeline: "Weeks 3-4" },
      { title: "On-Page & Content Deployment", description: "Optimizing existing pages and deploying new, highly structured content assets.", timeline: "Months 2-3" },
      { title: "Off-Page Authority Building", description: "Continuous outreach to secure high-quality, relevant backlinks to push rankings higher.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "Developer-Led SEO", description: "Our SEOs work side-by-side with Next.js developers to implement complex technical fixes immediately." },
      { title: "White-Hat Only", description: "We strictly adhere to Google's guidelines, ensuring your site is protected from algorithmic penalties." },
      { title: "Entity-Based Strategy", description: "We optimize for semantic search and entities, not just outdated keyword density metrics." },
      { title: "Transparent ROI Reporting", description: "We tie organic traffic directly to revenue and lead generation in our custom dashboards." }
    ],
    faqData: [
      { q: "How long does it take for SEO to show results?", a: "Significant organic growth typically takes 3 to 6 months of technical fixes, content deployment, and link acquisition." },
      { q: "Is SEO better than Google Ads (PPC)?", a: "PPC offers instant testing; SEO builds compounding long-term ROI. We recommend running both in tandem." },
      { q: "Do you guarantee page 1 rankings?", a: "We guarantee executing a mathematically sound, proven framework that consistently yields top SERP positions." },
      { q: "What happens if Google updates its algorithm?", a: "Our focus on technical excellence and E-E-A-T content insulates clients from negative core update hits." },
      { q: "Do you buy backlinks?", a: "No. We acquire high-DR links strictly through manual editorial outreach and digital PR." }
    ]
  },
  "ecommerce-marketing": {
    hero: {
      badge: "E-COMMERCE GROWTH",
      title: <>Scale Your D2C Brand With <span className="text-primary underline decoration-accent/60 decoration-4">Precision E-Commerce Marketing</span></>,
      description: "Drive explosive revenue growth. We architect high-ROAS ad campaigns, optimize conversion rates, and build aggressive retention systems to maximize profitability for modern E-Commerce brands."
    },
    about: {
      title: "Data-Driven Scaling for Direct-to-Consumer Brands",
      paragraphs: [
        "Scaling an E-Commerce brand requires a delicate balance of Customer Acquisition Cost (CAC) and Lifetime Value (LTV). Adyantra Digital provides the mathematical rigor needed to scale your ad spend without sacrificing profitability.",
        "We dominate top-of-funnel acquisition using dynamic, AI-optimized creatives across Meta, TikTok, and Google Shopping. Our media buying approach is highly structured, testing dozens of variables weekly to identify the exact combinations that drive the cheapest, highest-converting traffic.",
        "Simultaneously, we plug revenue leaks at the bottom of the funnel. We deploy complex Klaviyo email flows, SMS cart recovery, and on-site Conversion Rate Optimization (CRO) to ensure that every visitor you pay for has the highest possible probability of purchasing."
      ],
      pillars: [
        "Omni-Channel Customer Acquisition (Meta/TikTok/PMax)",
        "Klaviyo Advanced Email & SMS Lifecycle Retention",
        "Shopify Product Page Conversion Rate Optimization (CRO)",
        "AOV Expansion (Automated Upsells & Cross-Sells)",
        "Dynamic Product Data Feed Optimization",
        "Customer Lifetime Value (LTV) Cohort Analysis",
        "Profit-on-Ad-Spend (POAS) Financial Modeling"
      ]
    },
    intro: {
      tagline: "Profitable Scaling",
      headline: "Stop Guessing. Start Scaling Profitably.",
      description: "We handle the entire growth ecosystem for your store—from high-converting ad creatives to advanced backend email retention flows—turning your Shopify store into a highly efficient revenue engine."
    },
    subServices: [
      { title: "Meta & TikTok Performance Ads", desc: "Aggressive creative testing and algorithmic scaling on social platforms.", href: "/contact", img: "/assets/img/service/ai-3d.png" },
      { title: "Google Performance Max", desc: "Data-feed optimization and advanced machine learning deployment on Google.", href: "/contact", img: "/assets/img/service/seo-3d.png" },
      { title: "Klaviyo Email & SMS Retention", desc: "Advanced flows (Welcome, Abandoned Cart, Post-Purchase) to drive 30%+ of total revenue.", href: "/contact", img: "/assets/img/service/webdev-3d.png" },
      { title: "Shopify CRO", desc: "Heatmap analysis and A/B testing on product pages to increase overall conversion rate.", href: "/contact", img: "/assets/img/service/seo-3d.png" }
    ],
    processSteps: [
      { title: "Unit Economics Audit", description: "We analyze your margins, AOV, and historical CAC to establish strict profitability targets.", timeline: "Week 1" },
      { title: "Tracking & Feed Optimization", description: "Setting up server-side tracking (CAPI) and optimizing your Google/Meta product catalogs.", timeline: "Week 2" },
      { title: "Creative Production & Launch", description: "Designing high-converting UGC and static assets for initial testing.", timeline: "Week 3" },
      { title: "Scale & Retention Phase", description: "Scaling winning ad sets vertically while deploying advanced email retention flows.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "Profit-Focused Scaling", description: "We optimize for POAS (Profit on Ad Spend) and Contribution Margin, not just top-line revenue." },
      { title: "Creative Powerhouse", description: "We produce dozens of high-performing ad creatives monthly to prevent ad fatigue." },
      { title: "Deep Shopify Integration", description: "Our technical team builds custom Shopify apps and liquid scripts for complex tracking needs." },
      { title: "Holistic Funnel Approach", description: "We don't just buy ads; we actively optimize your website and email marketing to improve ROI." }
    ],
    faqData: [
      { q: "What is your target ROAS?", a: "We establish Break-Even ROAS during discovery and set aggressive targets based on your specific margins." },
      { q: "Do you produce video ads?", a: "Yes, we source UGC creators, write direct-response scripts, and edit custom videos for TikTok and Meta." },
      { q: "Can you help fix a store with a low conversion rate?", a: "If your store converts below 2%, we focus on CRO, site speed, and checkout flow before scaling ad spend." },
      { q: "How much of my revenue should come from Email/SMS?", a: "We target 25% to 40% of total revenue driven via automated Klaviyo email flows and SMS." },
      { q: "Do you manage Amazon stores?", a: "Our primary expertise is scaling D2C Shopify stores, though we partner with Amazon specialists when requested." }
    ]
  },
  "web-design-development": {
    hero: {
      badge: "WEB ENGINEERING",
      title: <>Build High-Performance Digital Experiences With <span className="text-primary underline decoration-accent/60 decoration-4">Custom Web Development</span></>,
      description: "Your website is your ultimate sales asset. We engineer blazing-fast, technically superior web applications and marketing sites designed to dominate search rankings and maximize conversion rates."
    },
    about: {
      title: "Technical Excellence Meets Conversion Psychology",
      paragraphs: [
        "In a digital ecosystem where a 1-second delay reduces conversions by 7%, outdated WordPress templates and bloated page builders are actively losing you money. Adyantra Digital builds bespoke, high-performance web solutions using modern tech stacks like Next.js, React, and Node.js.",
        "We bridge the gap between stunning aesthetic design and aggressive performance marketing. Our UI/UX designers utilize psychological principles and heatmapping data to design frictionless user journeys, while our engineers ensure the code is lightweight, secure, and infinitely scalable.",
        "Every platform we build is engineered with a 'SEO-First' architecture. We guarantee near-perfect Core Web Vitals scores out of the box, ensuring Google ranks your site effortlessly while users enjoy a snappy, app-like experience on both desktop and mobile."
      ],
      pillars: [
        "Modern Enterprise Tech Stack (Next.js 16, React, Tailwind CSS)",
        "Sub-Second Core Web Vitals & Hydration Performance",
        "Conversion-Centered UI/UX Wireframing & Design",
        "Headless CMS Integration (Sanity, Strapi, Contentful)",
        "Mobile-First Responsive Interface Engineering",
        "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
        "Robust Security & Zero Technical Debt Architecture"
      ]
    },
    intro: {
      tagline: "High-Performance Web",
      headline: "Stop Losing Customers to Slow, Ugly Websites",
      description: "We don't just build websites; we build digital growth engines. Our technical infrastructure provides the ultimate foundation for your paid ads and organic SEO to thrive."
    },
    subServices: [
      { title: "Custom Corporate Websites", desc: "High-end, bespoke websites engineered for B2B lead generation and brand authority.", href: "/contact", img: "/assets/img/service/webdev-3d.png" },
      { title: "High-Converting Landing Pages", desc: "Hyper-optimized, blazing-fast single pages designed specifically to maximize paid ad ROI.", href: "/contact", img: "/assets/img/service/seo-3d.png" },
      { title: "Web Application Development", desc: "Complex, scalable SaaS platforms and custom portals built on React and Node.js.", href: "/contact", img: "/assets/img/service/ai-3d.png" },
      { title: "Headless E-Commerce", desc: "Decoupled Shopify architectures using Next.js for sub-second page loads and custom buying experiences.", href: "/contact", img: "/assets/img/service/webdev-3d.png" }
    ],
    processSteps: [
      { title: "Discovery & Architecture", description: "We map user journeys, create wireframes, and define the technical stack required for your goals.", timeline: "Weeks 1-2" },
      { title: "UI/UX Design", description: "Our designers craft high-fidelity, pixel-perfect Figma prototypes for your approval.", timeline: "Weeks 3-4" },
      { title: "Frontend & Backend Engineering", description: "Our developers write clean, scalable code, integrating necessary CMS and API connections.", timeline: "Weeks 5-8" },
      { title: "QA & High-Speed Launch", description: "Rigorous cross-browser testing, SEO optimization, and a seamless deployment to production servers.", timeline: "Week 9" }
    ],
    whyChooseUs: [
      { title: "Next.js & React Specialists", description: "We utilize enterprise-grade frameworks to deliver secure, lightning-fast performance." },
      { title: "Conversion-Centric Design", description: "Every button, layout, and color choice is driven by data to maximize user action." },
      { title: "Perfect Core Web Vitals", description: "Our sites consistently score 95+ on Google Lighthouse, boosting your SEO automatically." },
      { title: "Zero Technical Debt", description: "We write clean, modular, and extensively documented code that is easy to scale in the future." }
    ],
    faqData: [
      { q: "Do you use WordPress or custom code?", a: "We specialize in Next.js and React for superior speed and security, but can build custom, lightweight WordPress themes if required." },
      { q: "How long does a custom website take to build?", a: "A standard corporate site takes 6-8 weeks; complex web applications or Headless E-Commerce take 12-16 weeks." },
      { q: "Will I be able to update the website myself?", a: "Yes, we integrate modern Headless CMS tools (Sanity/Strapi) so your marketing team can easily update content." },
      { q: "Do you provide hosting and maintenance?", a: "We deploy on Vercel or AWS and offer ongoing maintenance retainers." },
      { q: "Are your websites mobile-friendly?", a: "Every site is built 'Mobile-First' for flawless performance across all device screens." }
    ]
  },
  "analytics-reporting": {
    hero: {
      badge: "DATA & ANALYTICS",
      title: <>Make Profitable Decisions With <span className="text-primary underline decoration-accent/60 decoration-4">Advanced Analytics</span></>,
      description: "Stop guessing which marketing channels are working. We engineer complex data architectures and real-time dashboards to provide absolute clarity on your Customer Acquisition Cost (CAC) and Lifetime Value (LTV)."
    },
    about: {
      title: "Absolute Clarity in a Privacy-First World",
      paragraphs: [
        "In the era of iOS14, ad blockers, and strict privacy regulations, relying on standard browser-based tracking is a recipe for disaster. Adyantra Digital builds resilient, server-side data infrastructure that ensures you capture every critical user interaction accurately.",
        "We implement advanced multi-touch attribution models to uncover the true customer journey. Instead of simply crediting the last click, we reveal how your organic social, paid search, and email marketing work together to generate revenue, allowing you to allocate budget with surgical precision.",
        "Finally, we visualize this complex data in beautiful, real-time Looker Studio dashboards. No more waiting for end-of-month PDF reports. You get instant access to live, actionable metrics that dictate executive decision-making."
      ],
      pillars: [
        "Server-Side Tagging Infrastructure (sGTM)",
        "Meta & Google Conversions API (CAPI) Deployment",
        "GA4 Advanced Configuration & Event Customization",
        "Multi-Touch Custom Attribution Modeling",
        "Real-Time Executive Looker Studio & PowerBI Dashboards",
        "UX Heatmap & Session Recording Analytics (Hotjar)",
        "GDPR/CCPA Consent Mode Compliance Setup"
      ]
    },
    intro: {
      tagline: "Data Architecture",
      headline: "Turn Raw Data into Revenue-Generating Insights",
      description: "We bridge the gap between fragmented marketing platforms, centralizing your data into a single source of truth so you can scale your business with absolute mathematical confidence."
    },
    subServices: [
      { title: "Server-Side Tracking (CAPI)", desc: "Implementation of Meta CAPI and Google sGTM to bypass ad blockers and recover lost data.", href: "/contact", img: "/assets/img/service/ai-3d.png" },
      { title: "GA4 Configuration & Migration", desc: "Expert setup of Google Analytics 4, including custom event tracking and funnel reports.", href: "/contact", img: "/assets/img/service/seo-3d.png" },
      { title: "Custom BI Dashboards", desc: "Building beautiful, real-time Looker Studio or PowerBI dashboards tailored to your KPIs.", href: "/contact", img: "/assets/img/service/webdev-3d.png" },
      { title: "Conversion Rate Optimization (CRO)", desc: "Utilizing heatmap and session recording data (Hotjar/Clarity) to remove UX friction.", href: "/contact", img: "/assets/img/service/seo-3d.png" }
    ],
    processSteps: [
      { title: "Data Integrity Audit", description: "We analyze your current tracking setup to identify duplicate events, missing data, and attribution errors.", timeline: "Week 1" },
      { title: "Infrastructure Deployment", description: "Setting up Google Tag Manager, GA4, and establishing server-side tracking environments.", timeline: "Weeks 2-3" },
      { title: "Custom Event Mapping", description: "Configuring complex tracking for specific button clicks, form submissions, and video views.", timeline: "Week 3" },
      { title: "Dashboard Visualization", description: "Building and training your team on custom real-time reporting dashboards.", timeline: "Week 4" }
    ],
    whyChooseUs: [
      { title: "Deep Technical Expertise", description: "We don't just use standard plugins; we write custom JavaScript for complex tracking scenarios." },
      { title: "Privacy Compliance", description: "We ensure your tracking setup is fully compliant with GDPR, CCPA, and modern consent modes." },
      { title: "Business-Centric Metrics", description: "We focus on visualizing profit margins and LTV, not just vanity metrics like clicks and impressions." },
      { title: "Cross-Platform Integration", description: "We centralize data from Shopify, Salesforce, Meta, and Google into a unified data warehouse." }
    ],
    faqData: [
      { q: "Why is my Facebook ad data different from my Google Analytics data?", a: "Different platforms use different attribution windows. We deploy server-side tracking to create a unified single source of truth." },
      { q: "What is Server-Side Tracking and do I need it?", a: "Yes. Server-Side tracking sends data directly from your server, recovering 20-30% of data lost to ad blockers." },
      { q: "Can you build dashboards for my executive team?", a: "We build high-level, profit-focused dashboards for C-suite and granular reports for marketing managers." },
      { q: "Do you provide Conversion Rate Optimization (CRO) services?", a: "Yes, using heatmaps and GA4 data to run targeted A/B tests that improve conversion rates." },
      { q: "How long does a full analytics setup take?", a: "A standard setup takes 2-3 weeks; enterprise data warehouse setups take 4-6 weeks." }
    ]
  },
  "influencer-marketing": {
    hero: {
      badge: "CREATOR PARTNERSHIPS",
      title: <>Scale Authentic Trust With <span className="text-primary underline decoration-accent/60 decoration-4">Influencer Marketing</span></>,
      description: "Leverage the power of human connection. We architect data-driven influencer campaigns and UGC pipelines that turn trusted creators into highly profitable customer acquisition channels for your brand."
    },
    about: {
      title: "Data-Backed Creator Integration",
      paragraphs: [
        "Modern consumers are blind to traditional advertising; they buy based on trust and authentic recommendations. Adyantra Digital transforms influencer marketing from a vanity PR exercise into a measurable, high-ROI performance channel.",
        "We bypass the outdated model of paying for 'shoutouts.' Instead, we utilize advanced audience overlap analysis to identify micro and macro-creators whose followers perfectly match your ideal customer profile. We negotiate strict performance deliverables, ensuring you get usable assets and trackable conversions.",
        "Furthermore, we secure the rights to 'whitelist' or 'spark' creator content. This allows us to run highly targeted paid ads directly through the influencer's social media handles, combining the authenticity of the creator with the algorithmic precision of our media buying team."
      ],
      pillars: [
        "Audience Demographic & Bot-Audit Vetting",
        "Performance Contract & Usage Rights Negotiation",
        "Direct-Response UGC Content Asset Pipeline",
        "Creator Whitelisting & Paid Social Spark Ads",
        "Affiliate & Coupon Tracking System Setup",
        "Product Seeding & Logistics Management",
        "Attributable ROAS & Customer Acquisition Cost Analytics"
      ]
    },
    intro: {
      tagline: "Authentic Acquisition",
      headline: "Turn Creators Into High-Converting Sales Engines",
      description: "We handle the entire lifecycle of influencer marketing—from discovery and contract negotiation to campaign execution and paid amplification—delivering massive brand awareness and measurable sales."
    },
    subServices: [
      { title: "Creator Discovery & Vetting", desc: "Using advanced tools to audit engagement rates, fake followers, and audience demographics.", href: "/contact", img: "/assets/img/service/ai-3d.png" },
      { title: "UGC Content Generation", desc: "Sourcing high-quality, direct-response User Generated Content for use in your own paid ads.", href: "/contact", img: "/assets/img/service/seo-3d.png" },
      { title: "Influencer Whitelisting", desc: "Running targeted Meta and TikTok ads through the creator's handle for massive ROI.", href: "/contact", img: "/assets/img/service/webdev-3d.png" },
      { title: "Ambassador Programs", desc: "Building long-term, affiliate-based relationships with creators for sustained organic growth.", href: "/contact", img: "/assets/img/service/seo-3d.png" }
    ],
    processSteps: [
      { title: "Audience Profiling", description: "We define your exact buyer persona and map it against influencer demographic databases.", timeline: "Week 1" },
      { title: "Outreach & Negotiation", description: "Handling all communication, contract negotiations, and usage rights securement.", timeline: "Weeks 2-3" },
      { title: "Creative Briefing & Execution", description: "Providing detailed creative briefs to ensure the content hits key selling propositions.", timeline: "Weeks 3-5" },
      { title: "Paid Amplification", description: "Whitelisting the best performing organic content and scaling it with paid ad budget.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "Performance-Focused", description: "We track every campaign using custom promo codes and UTM parameters to measure exact ROI." },
      { title: "Rigorous Vetting", description: "We heavily audit creators to ensure they have authentic engagement, not bot farms." },
      { title: "End-to-End Management", description: "We handle product shipping, contracts, payments, and reporting so you don't have to." },
      { title: "UGC Integration", description: "We bridge the gap between influencer marketing and performance ads by securing full content usage rights." }
    ],
    faqData: [
      { q: "How do you measure the ROI of an influencer?", a: "We use unique discount codes, UTM links, and post-purchase surveys to track direct revenue." },
      { q: "Micro-influencers vs. Macro-influencers?", a: "Micro-influencers drive higher conversion rates; macro-influencers drive massive top-of-funnel reach." },
      { q: "What is 'Whitelisting'?", a: "Whitelisting allows us to run targeted ads directly through the creator's social handle for higher trust and lower CPA." },
      { q: "Do you handle paying the influencers?", a: "Yes, we handle all negotiations, product seeding, and payouts." },
      { q: "Who owns the content the influencer creates?", a: "We negotiate full usage rights for your brand to repurpose UGC across your ads and site." }
    ]
  },
  "ai-video-marketing": {
    hero: {
      badge: "AI VIDEO PRODUCTION",
      title: <>Dominate Attention With <span className="text-primary underline decoration-accent/60 decoration-4">AI Video Automation</span></>,
      description: "Produce high-retention video content at impossible speeds. We leverage generative AI, synthetic avatars, and automated editing pipelines to scale your video marketing efforts without the massive costs of traditional production."
    },
    about: {
      title: "Algorithmic Video Production at Scale",
      paragraphs: [
        "Video is the undisputed king of digital engagement, but traditional production is expensive, slow, and hard to scale. Adyantra Digital disrupts this model by deploying advanced AI video pipelines that generate, edit, and iterate content at exponential rates.",
        "We utilize state-of-the-art generative models (like Sora, Runway, and ElevenLabs) to create hyper-realistic voiceovers, dynamic b-roll, and synthetic avatars. This allows us to produce hundreds of localized, personalized video variations for A/B testing on Meta and TikTok in a matter of hours.",
        "Beyond generation, our AI editing workflows automatically identify high-retention hooks, apply dynamic captions, and format content for every social platform perfectly. The result is a massive volume of highly engaging video content that dominates algorithmic feeds and slashes your Cost Per Acquisition."
      ],
      pillars: [
        "Generative AI B-Roll & Visual Synthesis (Runway/Sora)",
        "Synthetic Avatar & Voiceover Cloning (ElevenLabs)",
        "Automated High-Retention Hook Clipping & Editing",
        "Multivariate Video Ad Variant Generation",
        "Dynamic Multi-Language Dubbing & Lip Sync",
        "Automated Animated Caption & Subtitle Generation",
        "Direct API Platform Format Optimization (Vertical 9:16)"
      ]
    },
    intro: {
      tagline: "Next-Gen Content",
      headline: "Infinite Video Output. Fractional Cost.",
      description: "From hyper-personalized sales outreach videos to massive organic TikTok campaigns, our AI video automation ensures your brand is omnipresent across all visual mediums."
    },
    subServices: [
      { title: "AI Avatar Video Generation", desc: "Lifelike, brand-consistent synthetic avatars for corporate training, ads, and explainer videos.", href: "/contact", img: "/assets/img/service/ai-3d.png" },
      { title: "Automated Short-Form Editing", desc: "AI-driven clipping of long-form podcasts into viral TikToks and Reels with dynamic captions.", href: "/contact", img: "/assets/img/service/seo-3d.png" },
      { title: "Generative Voice & Audio", desc: "Studio-quality synthetic voiceovers and audio generation mimicking specific brand tones.", href: "/contact", img: "/assets/img/service/webdev-3d.png" },
      { title: "Programmatic Video Ads", desc: "Generating hundreds of ad variations automatically to test hooks and find the ultimate winning creative.", href: "/contact", img: "/assets/img/service/seo-3d.png" }
    ],
    processSteps: [
      { title: "Script & Strategy Engineering", description: "We utilize LLMs to write high-converting, direct-response video scripts tailored to your audience.", timeline: "Week 1" },
      { title: "Asset Generation & Synthesis", description: "Deploying AI models to generate visuals, avatars, and hyper-realistic voiceovers.", timeline: "Week 2" },
      { title: "Automated Assembly & Editing", description: "Compiling assets, adding dynamic captions, and formatting for specific platform algorithms.", timeline: "Week 3" },
      { title: "Multivariate Ad Testing", description: "Deploying variations into ad accounts to algorithmically discover the highest ROI creative.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "Cutting-Edge AI Stack", description: "We leverage the absolute latest models from OpenAI, Runway, Midjourney, and ElevenLabs." },
      { title: "Rapid Creative Iteration", description: "We can swap out video hooks, voiceovers, or visuals in minutes, not days, for aggressive ad testing." },
      { title: "Massive Cost Efficiency", description: "Eliminate the need for expensive studios, actors, and weeks of manual editing." },
      { title: "Hyper-Personalization", description: "We can programmatically generate personalized videos addressing prospects by name for elite cold outreach." }
    ],
    faqData: [
      { q: "Do AI avatars look fake or creepy?", a: "We use premium synthetic models that are indistinguishable from real actors." },
      { q: "Can we clone our CEO's voice and likeness?", a: "Yes, with proper authorization we train custom models to replicate your leadership's voice." },
      { q: "Will social media algorithms penalize AI video?", a: "Algorithms optimize for watch time; engaging AI video is pushed heavily." },
      { q: "How fast can you produce videos?", a: "We can generate dozens of finished video variations in a single day." },
      { q: "Can AI videos be used for B2B marketing?", a: "Yes, ideal for software demos, explainer videos, and personalized LinkedIn outreach." }
    ]
  },
  "affiliate-marketing": {
    hero: {
      badge: "PARTNER NETWORKS",
      title: <>Drive Risk-Free Revenue With <span className="text-primary underline decoration-accent/60 decoration-4">Affiliate Marketing</span></>,
      description: "Pay only for performance. We build, manage, and scale high-volume affiliate programs that recruit top-tier publishers to aggressively market your products on a Cost-Per-Acquisition (CPA) basis."
    },
    about: {
      title: "Building Armies of Performance Marketers",
      paragraphs: [
        "Why shoulder all the risk of ad spend when you can have thousands of experienced marketers selling your product for a commission? Adyantra Digital architects elite affiliate programs that turn third-party publishers into your most aggressive sales force.",
        "We handle the complex infrastructure required to scale: selecting the right tracking networks (Impact, ShareASale, CJ), defining competitive commission structures, and generating the creative assets publishers need to succeed. But technology is only half the battle.",
        "Our true value lies in recruitment and relationship management. We proactively headhunt super-affiliates, high-traffic media buyers, and niche bloggers, negotiating exclusive payouts and providing them with continuous strategic support to ensure they drive massive, high-quality volume to your business."
      ],
      pillars: [
        "Enterprise Tracking Network Setup (Impact/ShareASale/CJ)",
        "Outbound Super-Affiliate & Media Buyer Recruitment",
        "Commission Tiering & Payout Structure Modeling",
        "Automated Coupon Hijacking & Trademark Bidding Protection",
        "Converting Promotional Banners & Copy Swipes Resource Hub",
        "API Integration & Real-Time Sale Reconciliation",
        "Compliance Auditing & Partner Relationship Management"
      ]
    },
    intro: {
      tagline: "Performance Partnerships",
      headline: "Scale Revenue with Zero Upfront Ad Spend",
      description: "We handle the end-to-end management of your affiliate program, ensuring you only pay for actual sales while protecting your brand from low-quality traffic and fraud."
    },
    subServices: [
      { title: "Program Strategy & Launch", desc: "Defining commission structures, cookie durations, and selecting the optimal tracking network.", href: "/contact", img: "/assets/img/service/ai-3d.png" },
      { title: "Aggressive Partner Recruitment", desc: "Outbound headhunting of high-volume media buyers, review sites, and niche influencers.", href: "/contact", img: "/assets/img/service/seo-3d.png" },
      { title: "Affiliate Activation & Support", desc: "Creating converting banners, landing pages, and email swipes for affiliates to use.", href: "/contact", img: "/assets/img/service/webdev-3d.png" },
      { title: "Compliance & Fraud Monitoring", desc: "Strict auditing of traffic sources to prevent trademark bidding and fraudulent conversions.", href: "/contact", img: "/assets/img/service/seo-3d.png" }
    ],
    processSteps: [
      { title: "Infrastructure Setup", description: "Integration of tracking platforms with your e-commerce or SaaS backend.", timeline: "Weeks 1-2" },
      { title: "Asset Creation", description: "Developing a comprehensive resource hub with high-converting creatives for affiliates.", timeline: "Week 3" },
      { title: "Launch & Initial Recruitment", description: "Publishing the program and running targeted outbound campaigns to recruit initial partners.", timeline: "Weeks 4-6" },
      { title: "Optimization & VIP Management", description: "Identifying top performers and negotiating tiered payouts to incentivize maximum volume.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "Extensive Network Contacts", description: "We leverage our existing relationships with super-affiliates to jumpstart your program's growth." },
      { title: "Strict Brand Protection", description: "We actively monitor for coupon-hijacking and unauthorized PPC trademark bidding." },
      { title: "Technical Integration Expertise", description: "Flawless API integrations to ensure tracking is 100% accurate across all devices." },
      { title: "Proactive Management", description: "We don't just 'launch and leave'. We actively coach affiliates on how to sell your product better." }
    ],
    faqData: [
      { q: "What is a good commission rate to offer?", a: "SaaS offers 20-30% recurring; e-commerce ranges 10-20%. We run competitive analysis for your niche." },
      { q: "Which affiliate network should I use?", a: "Impact Radius/ShareASale for E-Commerce; PartnerStack for SaaS." },
      { q: "How do you prevent brand bidding?", a: "We enforce strict terms and run automated SERP monitoring to withhold commissions on trademark violations." },
      { q: "How long does an affiliate program take to gain traction?", a: "3-4 months of aggressive recruitment creates a consistent snowball revenue stream." },
      { q: "Do I have to pay affiliates for returns?", a: "No, a 30-day locking period ensures commissions are paid only after return windows close." }
    ]
  }
};
