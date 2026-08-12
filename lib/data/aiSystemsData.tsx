import React from "react";
import { ServicePageData } from "@/components/templates/ServicePageTemplate";

export const aiSystemsData: Record<string, ServicePageData> = {
  "lead-generation": {
    hero: {
      badge: "AI LEAD SYSTEMS",
      title: <>Fill Your Pipeline With <span className="text-primary underline decoration-accent/60 decoration-4">Automated Lead Generation</span></>,
      description: "Stop relying on cold calling and manual prospecting. We engineer sophisticated AI-driven lead generation engines that scrape intent data, capture high-intent prospects, and qualify them 24/7 without human fatigue."
    },
    about: {
      title: "Predictable Revenue Engineering",
      paragraphs: [
        "Inconsistent lead flow is the leading cause of stalled business growth. Relying on sales reps to manually source and cold-call prospects is an expensive, low-yield strategy in the modern era. Adyantra Digital solves this by architecting intelligent, autonomous lead generation systems.",
        "We leverage advanced web scraping APIs and AI-driven data enrichment to identify 'In-Market' buyers. Our systems cross-reference job titles, company funding rounds, and recent hiring data to build a hyper-targeted list of decision-makers who actually need your product right now.",
        "Once the list is generated, our AI engines launch dynamic, multi-channel outreach sequences across Email, LinkedIn, and SMS. By using natural language processing (NLP), the AI personalizes each message based on the prospect's recent company news or posts, resulting in open rates and booking rates that shatter industry averages."
      ],
      pillars: [
        "3rd-Party Intent Data Scraping & Mining",
        "AI-Driven Spintax Copywriting & Personalization",
        "Omnichannel Email, LinkedIn & SMS Sequencing",
        "Bulletproof Deliverability & Domain Infrastructure",
        "Behavioral Lead Scoring & Intent Signal Triggers",
        "Automated Sales Handoff & Slack Notification Sync",
        "Closed-Loop Pipeline Velocity & Reply Analytics"
      ]
    },
    intro: {
      tagline: "Autonomous Prospecting",
      headline: "Never Make a Cold Call Again",
      description: "Our AI systems act as an army of tireless SDRs. They handle the grueling work of prospecting, initial outreach, and follow-up, delivering only pre-qualified, warm appointments directly to your calendar."
    },
    subServices: [
      { title: "B2B Outreach Automation", desc: "Complex, branching LinkedIn and Email sequences that feel completely 1-on-1.", href: "/contact", img: "/assets/img/service/ai-3d.png" },
      { title: "Intent Data Mining", desc: "Identifying companies actively searching for your specific solution via 3rd-party data providers.", href: "/contact", img: "/assets/img/service/seo-3d.png" },
      { title: "Inbound Funnel Engineering", desc: "High-converting, extremely fast landing pages integrated with automated qualification chatbots.", href: "/contact", img: "/assets/img/service/webdev-3d.png" },
      { title: "Database Reactivation", desc: "AI-driven SMS and Email campaigns to wake up dead leads sitting dormant in your CRM.", href: "/contact", img: "/assets/img/service/seo-3d.png" }
    ],
    processSteps: [
      { title: "Ideal Customer Profile (ICP) Modeling", description: "We define the exact mathematical parameters (revenue, headcount, tech stack) of your most profitable clients.", timeline: "Week 1" },
      { title: "Data Sourcing & Infrastructure", description: "Setting up dedicated sending domains, warming them up, and scraping verified contact data.", timeline: "Weeks 2-3" },
      { title: "AI Copywriting & Sequence Setup", description: "Crafting highly personalized Spintax email and LinkedIn sequences utilizing LLMs.", timeline: "Week 3" },
      { title: "Launch, Monitor & Scale", description: "Deploying campaigns, monitoring deliverability, and A/B testing subject lines for maximum meeting bookings.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "Bulletproof Deliverability", description: "We configure strict DMARC, DKIM, and SPF records and use dedicated IPs to ensure you never hit the spam folder." },
      { title: "True AI Personalization", description: "We don't just insert 'First Name'. Our AI reads the prospect's recent company news and weaves it into the hook." },
      { title: "End-to-End Automation", description: "From the initial data scrape to the calendar booking, absolutely no human intervention is required." },
      { title: "Infinite Scalability", description: "Want 100 leads a month? 1,000? Once the system is built, we simply turn up the volume and add more sending domains." }
    ],
    faqData: [
      { q: "Is automated cold email considered spam?", a: "Not if it is executed correctly. Spam is irrelevant, mass-blasted email. We use intent data and AI personalization to send highly relevant, targeted messages to people who demonstrably need your service." },
      { q: "Will this get my main domain blacklisted?", a: "No. We never send cold outreach from your primary domain. We purchase and configure dedicated domains specifically for outreach." },
      { q: "Do you guarantee a certain number of leads per month?", a: "We guarantee the execution of a mathematically sound system that predictably yields meetings based on total outreach volume." },
      { q: "Can this system integrate with my current CRM?", a: "Yes. We push all positive replies, meeting bookings, and enriched firmographic data directly into Salesforce, HubSpot, or GoHighLevel." },
      { q: "What happens when a prospect replies?", a: "The automation immediately pauses for that prospect, and they are pushed to Slack or your CRM for human sales closing." }
    ]
  },
  "ad-creative-automation": {
    hero: {
      badge: "AI AD SYSTEMS",
      title: <>Generate Winning Ads At Scale With <span className="text-primary underline decoration-accent/60 decoration-4">Ad Creative Automation</span></>,
      description: "Eliminate ad fatigue. We deploy AI-powered generative design pipelines that automatically produce hundreds of high-converting static, UGC, and video ad variations for Meta, TikTok, and Google Ads in seconds."
    },
    about: {
      title: "Algorithmic Creative Engine for Paid Acquisition",
      paragraphs: [
        "In modern media buying, creative is the ultimate targeting lever. However, manual ad design creates massive bottlenecking—designers take days to produce a single variant, leading to rapid ad fatigue and soaring Cost Per Acquisition (CPA). Adyantra Digital eliminates this bottleneck with automated AI ad pipelines.",
        "We build workflows that combine generative AI visual models (Midjourney, Stable Diffusion), direct-response copywriting LLMs, and dynamic image assembly engines. This allows us to take a single winning concept and instantly generate 50+ variations of hooks, headlines, colors, and layouts.",
        "Our automated pipelines push these creatives directly into your Meta Ads Manager or TikTok Ads Manager via API, tagging them for automated multivariate testing. The algorithm quickly identifies winners, while lower-performing variants are automatically paused, ensuring your budget is spent strictly on high-ROAS assets."
      ],
      pillars: [
        "Batch Generative AI Ad Image Synthesis",
        "Direct-Response Headline & Copy Prompting Engine",
        "Automated Meta & TikTok Marketing API Uploads",
        "Dynamic Product Image & Badge Overlay Assembly",
        "Synthetic UGC Scripting & Voiceover Generation",
        "Creative Fatigue & Click-Through Rate Monitoring",
        "Multivariate Variant Tagging & Scale Logic"
      ]
    },
    intro: {
      tagline: "Scalable Ad Production",
      headline: "Never Run Out of High-Performing Ad Creatives",
      description: "We provide your media buyers with an infinite supply of data-backed, high-converting ad assets designed to beat ad fatigue and drive down customer acquisition costs."
    },
    subServices: [
      { title: "Dynamic Static Ad Generation", desc: "Automated batch processing of product image variations, badges, and headline overlays.", href: "/contact", img: "/assets/img/service/ai-3d.png" },
      { title: "AI UGC Scripting & Video Rendering", desc: "Generative AI scripts paired with synthetic voiceovers and dynamic captions for short-form video ads.", href: "/contact", img: "/assets/img/service/seo-3d.png" },
      { title: "Automated Meta/TikTok Ad Pushes", desc: "Direct API connections to upload new creative variations directly into campaign draft queues.", href: "/contact", img: "/assets/img/service/webdev-3d.png" },
      { title: "Creative Fatigue Monitoring", desc: "Algorithmic tracking that automatically flags declining click-through rates (CTR) and triggers new variant launches.", href: "/contact", img: "/assets/img/service/seo-3d.png" }
    ],
    processSteps: [
      { title: "Brand Kit & Guidelines Integration", description: "Ingesting your fonts, brand colors, product assets, and past top-performing ads into our design pipeline.", timeline: "Week 1" },
      { title: "AI Prompt & Template Architecture", description: "Building custom Figma and AI generation templates configured for high-converting direct response layouts.", timeline: "Weeks 2-3" },
      { title: "Batch Generation & Quality Assurance", description: "Generating initial batches of 100+ creative variants and putting them through human-in-the-loop QA.", timeline: "Week 4" },
      { title: "Algorithmic Testing & Auto-Scaling", description: "Connecting the pipeline to your ad accounts to automatically test and rotate creatives continuously.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "10x Production Speed", description: "We generate in 1 hour what a traditional design agency produces in 2 weeks." },
      { title: "Direct-Response Optimized", description: "Our designs are engineered strictly for high CTR and conversion rates, not just aesthetic awards." },
      { title: "API-Driven Operations", description: "Direct integration with Meta, TikTok, and Google Ads APIs for seamless asset deployment." },
      { title: "Proven ROAS Multiplier", description: "By enabling relentless creative testing, our clients consistently lower CPAs by 20% to 40%." }
    ],
    faqData: [
      { q: "Does AI ad creative look cheap or generic?", a: "We combine state-of-the-art AI image generation with professional design templates and human review." },
      { q: "How many creative variations can you generate per month?", a: "Our pipelines can generate anywhere from 50 to 500+ unique static and video ad variations monthly." },
      { q: "Do you integrate directly with Meta Ads Manager?", a: "Yes, via Meta's Marketing API to upload drafts directly into your campaigns." },
      { q: "Can this work for physical E-Commerce products?", a: "Yes, combining studio product shots with dynamic lifestyle backgrounds and promo badges." },
      { q: "What role do humans play in this process?", a: "Senior creative directors oversee prompt engineering, design templates, and final brand QA." }
    ]
  },
  "content-automation": {
    hero: {
      badge: "CONTENT PIPELINES",
      title: <>Automate Your Omni-Channel Publishing With <span className="text-primary underline decoration-accent/60 decoration-4">Content Automation</span></>,
      description: "Scale content output exponentially without adding headcount. We engineer automated content creation, formatting, and cross-platform publishing pipelines powered by fine-tuned AI models."
    },
    about: {
      title: "Enterprise Content Architecture",
      paragraphs: [
        "Publishing consistent, high-quality content across blogs, newsletters, LinkedIn, Twitter, and YouTube is exhausting for lean marketing teams. Content Automation turns single core ideas into complete, multi-channel media campaigns automatically.",
        "We build automated workflows that take one input asset—such as a podcast transcript, YouTube link, or blog article—and run it through custom LLM processing chains. The system automatically extracts key insights, writes platform-specific social posts, generates newsletter copy, and creates graphic snippets.",
        "Integrated directly with your CMS and social schedulers (WordPress, Webflow, Buffer, Hypefury), the system automatically formats and queues all assets for publication, ensuring 24/7 brand visibility with minimal human effort."
      ],
      pillars: [
        "Single-Asset Multi-Channel Repurposing Chains",
        "Automated WordPress/Webflow API Publishing",
        "Platform-Specific Formatting (LinkedIn/Twitter/Medium)",
        "RAG-Powered Brand Tone & Vocabulary Fine-Tuning",
        "Automated Graphic Banner Overlay Generation",
        "Human-in-the-Loop Approval & Staging Dashboards",
        "SEO Metadata & Structured Data Auto-Generation"
      ]
    },
    intro: {
      tagline: "Omni-Channel Scale",
      headline: "One Core Asset. Infinite Platform Distribution.",
      description: "Multiply your content reach by 10x. Our automated pipelines transform single blog posts or videos into dozens of tailored assets distributed across your entire digital presence."
    },
    subServices: [
      { title: "Podcast & Video Repurposing", desc: "Automatically converting video links into SEO blog posts, Twitter threads, and LinkedIn carousels.", href: "/contact", img: "/assets/img/service/ai-3d.png" },
      { title: "Programmatic Blog Publishing", desc: "Automated keyword research to published WordPress/Webflow article pipelines.", href: "/contact", img: "/assets/img/service/seo-3d.png" },
      { title: "Newsletter Automation", desc: "Weekly content curation and email dispatch compiled automatically from your RSS feeds.", href: "/contact", img: "/assets/img/service/webdev-3d.png" },
      { title: "Social Scheduling Sync", desc: "Hands-off social media distribution pipelines connecting your CMS directly to social channels.", href: "/contact", img: "/assets/img/service/seo-3d.png" }
    ],
    processSteps: [
      { title: "Content Input & Model Fine-Tuning", description: "Training AI models on your brand's unique tone of voice and industry terminology.", timeline: "Weeks 1-2" },
      { title: "Pipeline Integration & Webhooks", description: "Connecting your audio/video feeds and CMS platforms via n8n or Make.com workflows.", timeline: "Weeks 2-3" },
      { title: "Output Formatting & Styling", description: "Configuring automated graphic overlays, markdown styling, and meta tag generation.", timeline: "Week 4" },
      { title: "Full Automated Publishing", description: "Activating the pipeline to automatically process and queue assets upon new uploads.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "True Tone Consistency", description: "Our custom system prompts ensure the AI output sounds exactly like your brand's senior writers." },
      { title: "Massive Efficiency Gains", description: "Turn 1 hour of video creation into 30+ pieces of polished written and social content automatically." },
      { title: "Zero Manual Copy-Pasting", description: "Direct API connections distribute content to WordPress, LinkedIn, Twitter, and email tools seamlessly." },
      { title: "SEO & E-E-A-T Optimized", description: "Every generated article adheres strictly to search engine quality guidelines." }
    ],
    faqData: [
      { q: "How does the pipeline handle brand voice?", a: "We fine-tune system prompts using your existing content, style guides, and vocabulary parameters." },
      { q: "Can we review content before it gets published?", a: "Yes, via 1-click human-in-the-loop approval dashboards in Notion or Airtable." },
      { q: "What platforms can this publish to automatically?", a: "WordPress, Webflow, Shopify, LinkedIn, Twitter/X, Facebook, Instagram, and major email platforms." },
      { q: "Does this require technical knowledge from our team?", a: "No, your team simply drops a video/audio file into Google Drive and the pipeline handles the rest." },
      { q: "Is duplicate content an issue for SEO?", a: "No, fresh platform-tailored copy is written for each unique distribution channel." }
    ]
  },
  "appointment-booking": {
    hero: {
      badge: "AI SCHEDULING",
      title: <>Convert Visitors Into Calls With <span className="text-primary underline decoration-accent/60 decoration-4">AI Appointment Booking</span></>,
      description: "Stop losing leads to slow email tag. We build 24/7 AI conversational scheduling agents that qualify prospects and book meetings directly into your calendar in real time."
    },
    about: {
      title: "Frictionless Sales Conversions",
      paragraphs: [
        "In inbound sales, response time is everything. Reaching out to a lead within 5 minutes increases your chances of qualifying them by 21x compared to waiting 30 minutes. Traditional contact forms destroy momentum. Adyantra Digital solves this with instant AI Appointment Booking.",
        "We deploy conversational AI agents on your website, WhatsApp, and SMS that instantly engage inbound leads the second they express interest. The AI asks qualifying questions (Budget, Timeline, Authority), recommends the perfect service, and presents live calendar slots directly inside the chat.",
        "Deeply integrated with Calendly, Google Calendar, and your CRM (Salesforce/HubSpot), our booking agents eliminate back-and-forth scheduling, dramatically reducing lead drop-off and filling your sales team's pipeline automatically."
      ],
      pillars: [
        "Real-Time Conversational Qualification (AI)",
        "Instant Calendly & Google Calendar API Booking",
        "WhatsApp & SMS Direct-to-Phone Scheduling",
        "Smart Sales Rep Round-Robin Routing",
        "Automated Multi-Channel No-Show Prevention",
        "CRM Deal Stage & Contact Property Sync",
        "Time Zone Auto-Detection & Local Slot Presentation"
      ]
    },
    intro: {
      tagline: "Instant Qualification",
      headline: "Turn Inbound Clicks Into Confirmed Calendar Meetings",
      description: "Capture prospect intent at peak moment. Our AI agents qualify leads conversationally 24/7/365, eliminating phone tag and filling your sales calendars autonomously."
    },
    subServices: [
      { title: "Website Conversational Booking Bots", desc: "Interactive AI widgets that qualify site visitors and lock in calendar slots instantly.", href: "/contact", img: "/assets/img/service/ai-3d.png" },
      { title: "WhatsApp & SMS Booking Agents", desc: "Direct-to-phone conversational scheduling with 98% open rates and instant response times.", href: "/contact", img: "/assets/img/service/seo-3d.png" },
      { title: "Round-Robin Sales Routing", desc: "Intelligent distribution of booked meetings to appropriate sales reps based on region or availability.", href: "/contact", img: "/assets/img/service/webdev-3d.png" },
      { title: "Automated No-Show Prevention", desc: "Multi-channel reminder sequences (Email/SMS) with 1-click reschedule links to maximize show rates.", href: "/contact", img: "/assets/img/service/seo-3d.png" }
    ],
    processSteps: [
      { title: "Qualification Logic Mapping", description: "Defining the exact criteria required for a prospect to be deemed qualified for a sales call.", timeline: "Week 1" },
      { title: "Calendar & CRM API Binding", description: "Connecting the AI bot to Calendly, Google Workspace, and your CRM infrastructure.", timeline: "Week 2" },
      { title: "Conversational Scripting & AI Prompting", description: "Engineering friendly, highly persuasive conversational scripts to maximize booking rate.", timeline: "Week 3" },
      { title: "Deployment & Optimization", description: "Launching on website and messaging channels, monitoring qualification accuracy, and scaling.", timeline: "Ongoing" }
    ],
    whyChooseUs: [
      { title: "Sub-Second Response Times", description: "Leads are engaged within seconds of landing on your page or sending a text." },
      { title: "Custom Qualification Rules", description: "Unqualified leads are politely redirected to self-serve resources, saving your reps time." },
      { title: "Seamless Calendar Integration", description: "Syncs natively with Google Calendar, Outlook, Calendly, and HubSpot Meetings." },
      { title: "Proven Show-Up Boost", description: "Our automated reminder and confirmation flows boost actual meeting attendance by up to 35%." }
    ],
    faqData: [
      { q: "How does the AI qualify leads before booking?", a: "We program custom rules into the bot (e.g. Budget, Timeline). Qualified leads unlock calendar slots." },
      { q: "Does it sync with Calendly or Google Calendar?", a: "Yes, native API integration with Calendly, Google Calendar, Outlook, and HubSpot Meetings." },
      { q: "Can the AI handle time zones correctly?", a: "Yes, automatically detects and converts available slots to the user's local time zone." },
      { q: "What happens if a prospect needs to reschedule?", a: "The AI sends an instant 1-click reschedule link, updating calendar and CRM automatically." },
      { q: "Is this suitable for high-ticket service businesses?", a: "Ideal for high-ticket consultative sales requiring instant pre-qualification." }
    ]
  },
  "sales-follow-up": {
    hero: {
      badge: "AI SALES SYSTEMS",
      title: <>Close More Deals With <span className="text-primary underline decoration-accent/60 decoration-4">Automated Follow-ups</span></>,
      description: "It takes an average of 8 touchpoints to close a B2B deal. Stop relying on forgetful sales reps. We build AI-driven follow-up sequences that relentlessly pursue leads until they buy or opt out."
    },
    about: {
      title: "Relentless Follow-Up Engineering",
      paragraphs: [
        "The vast majority of marketing ROI is lost simply because sales teams fail to follow up consistently. Reps are busy, leads get buried in the CRM, and potential revenue evaporates. Adyantra Digital solves this by architecting aggressive, intelligent, and highly personalized automated follow-up systems.",
        "We utilize AI to monitor prospect behavior. Did they open the proposal? Did they visit the pricing page? Our systems trigger instantaneous, context-aware emails, SMS messages, or WhatsApp notifications based on these exact actions, striking while the iron is hot.",
        "Our systems don't just blast generic 'checking in' emails. We use generative AI to reference previous conversation points, provide relevant case studies, and handle common objections automatically, acting as a highly competent digital assistant for your sales team."
      ],
      pillars: [
        "Behavioral Prospect Activity Triggers",
        "Multi-Channel Automated Pursuit (Email/SMS/WhatsApp)",
        "Document & Proposal Open Tracking Webhooks",
        "AI Objection Handling & Personalization",
        "No-Show Meeting Automated Rebooking Loops",
        "Long-Term 12-Month Educational Nurture Sequences",
        "Seamless Inbox & CRM Rep-Handoff Logic"
      ]
    },
    intro: {
      tagline: "Conversion Optimization",
      headline: "The Fortune is in the Follow-Up",
      description: "We completely eliminate human error from your sales cycle. Our AI systems ensure that every single lead you generate receives the exact right follow-up message at the exact right time, drastically increasing your close rate."
    },
    subServices: [
      { title: "Post-Demo Automation", desc: "Automated sequences providing case studies and answering objections immediately after a sales call.", href: "/contact", img: "/assets/img/service/ai-3d.png" },
      { title: "Proposal Tracking Sequences", desc: "Triggers that fire the moment a prospect opens a PDF proposal or visits a checkout link.", href: "/contact", img: "/assets/img/service/seo-3d.png" },
      { title: "No-Show Reactivation", desc: "Aggressive SMS and Email sequences designed specifically to rebook prospects who missed their meetings.", href: "/contact", img: "/assets/img/service/webdev-3d.png" },
      { title: "Long-Term Nurture Flows", desc: "12-month educational sequences for prospects who aren't ready to buy today, but will be tomorrow.", href: "/contact", img: "/assets/img/service/seo-3d.png" }
    ],
    processSteps: [
      { title: "Sales Cycle Audit", description: "We analyze your current sales process to identify exactly where leads are dropping off.", timeline: "Week 1" },
      { title: "Logic & Branching Architecture", description: "Mapping out complex 'If/Then' logic trees based on potential prospect actions and objections.", timeline: "Week 2" },
      { title: "Copywriting & AI Prompting", description: "Writing the base templates and engineering the AI prompts to handle dynamic personalization.", timeline: "Week 3" },
      { title: "CRM Integration & Launch", description: "Tying the logic into HubSpot or Salesforce and flipping the switch to begin automated pursuit.", timeline: "Week 4" }
    ],
    whyChooseUs: [
      { title: "Context-Aware AI", description: "Our follow-ups reference the exact actions a user took, avoiding the 'generic spam' feeling." },
      { title: "Omnichannel Execution", description: "We hit prospects where they actually look: combining Email, SMS, and WhatsApp seamlessly." },
      { title: "Seamless Sales Handoff", description: "The system knows exactly when to stop and alert a human rep (e.g., when a complex question is asked)." },
      { title: "Massive Increase in Close Rate", description: "By ensuring zero leads slip through the cracks, our clients typically see a 20-30% bump in closed deals." }
    ],
    faqData: [
      { q: "Will automated follow-ups annoy my prospects?", a: "Not if they provide value. We engineer sequences that provide case studies and answer objections." },
      { q: "How does the system know when to stop following up?", a: "If a prospect replies or moves to 'Closed' in the CRM, the sequence instantly aborts." },
      { q: "Can we track if they opened the proposal?", a: "Yes, via PandaDoc/DocSend webhooks integrated directly into your CRM." },
      { q: "Do you handle SMS and WhatsApp follow-ups?", a: "Crucial for modern conversion rates! SMS and WhatsApp boast 95%+ open rates." },
      { q: "Is this only for B2B companies?", a: "High-ticket B2C (Real Estate, Solar, Education) benefits immensely from structured automated follow-ups." }
    ]
  },
  "crm-automation": {
    hero: {
      badge: "INFRASTRUCTURE",
      title: <>Eliminate Busywork With <span className="text-primary underline decoration-accent/60 decoration-4">CRM Automation</span></>,
      description: "Your CRM shouldn't be a glorified spreadsheet. We engineer custom API integrations and automated workflows within HubSpot, Salesforce, and GoHighLevel to eliminate manual data entry and enforce sales processes."
    },
    about: {
      title: "Data Integrity Meets Operational Speed",
      paragraphs: [
        "A poorly configured CRM is a massive liability. When sales reps have to manually enter data, log calls, and move deal stages, data integrity plumatters, and your reporting becomes useless. Adyantra Digital architects 'invisible' CRM infrastructures that update themselves autonomously.",
        "We connect your advertising platforms, website forms, calendar apps, and billing software directly into your CRM. When a lead enters, they are automatically enriched with firmographic data, scored based on intent, and assigned to the correct rep via round-robin logic.",
        "Furthermore, we enforce sales SOPs through automation. If a deal sits in 'Negotiation' for more than 7 days, the system automatically alerts management. If a contract is signed, the system automatically generates an invoice and triggers the onboarding sequence."
      ],
      pillars: [
        "Enterprise CRM Architecture (HubSpot/Salesforce/GoHighLevel)",
        "API & Webhook Custom Middleware Integration",
        "Automated Contact Data Enrichment (Clearbit/Apollo)",
        "Dynamic Territory & Round-Robin Lead Routing",
        "Enforced Sales SOP & Aging Deal Stage Alerts",
        "Quote-to-Cash Billing Automation (Stripe/QuickBooks)",
        "Executive Pipeline & Sales Velocity Dashboards"
      ]
    },
    intro: {
      tagline: "Operational Efficiency",
      headline: "Make Your CRM Work For You, Not Against You",
      description: "We transform your CRM from a manual data repository into a dynamic, automated command center that drives your sales team's daily actions and provides flawless data to management."
    },
    subServices: [
      { title: "HubSpot & Salesforce Architecture", desc: "Complete ground-up builds or complex overhauls of enterprise CRM environments.", href: "/contact", img: "/assets/img/service/ai-3d.png" },
      { title: "Automated Data Enrichment", desc: "Using Clearbit or Apollo APIs to automatically fill in missing lead data (Revenue, Headcount, etc.).", href: "/contact", img: "/assets/img/service/seo-3d.png" },
      { title: "Smart Lead Routing", desc: "Round-robin assignment logic based on territory, deal size, or rep availability.", href: "/contact", img: "/assets/img/service/webdev-3d.png" },
      { title: "Custom Dashboard Creation", desc: "Building executive-level reports tracking Sales Velocity, Pipeline Value, and Close Rates.", href: "/contact", img: "/assets/img/service/seo-3d.png" }
    ],
    processSteps: [
      { title: "Process Audit & Mapping", description: "We document your exact ideal sales process and identify all manual bottlenecks.", timeline: "Weeks 1-2" },
      { title: "Data Migration & Cleanup", description: "Cleaning up duplicate records, standardizing naming conventions, and migrating legacy data.", timeline: "Weeks 2-3" },
      { title: "Workflow Automation Build", description: "Engineering the API connections, Zapier/Make webhooks, and internal CRM workflows.", timeline: "Weeks 3-5" },
      { title: "Team Training & Handoff", description: "Providing comprehensive documentation and training sessions for your sales reps.", timeline: "Week 6" }
    ],
    whyChooseUs: [
      { title: "Deep API Expertise", description: "We don't just rely on native integrations. We write custom scripts and webhooks to connect any software stack." },
      { title: "Sales-Centric Design", description: "Our automations are designed to reduce rep friction, making it impossible for them *not* to use the CRM." },
      { title: "Data Governance", description: "We implement strict validation rules ensuring dirty or incomplete data never enters your system." },
      { title: "Platform Agnostic", description: "We are certified experts in HubSpot, Salesforce, GoHighLevel, ActiveCampaign, and Pipedrive." }
    ],
    faqData: [
      { q: "Which CRM is best for my business?", a: "For enterprise B2B, we recommend Salesforce or HubSpot. For agencies, GoHighLevel offers supreme value." },
      { q: "My current CRM is a mess. Can you fix it without losing data?", a: "Yes, data deduplication and pipeline restructuring are core specialties of ours." },
      { q: "How do you automate lead assignment?", a: "We build round-robin or territory-based logic triggered instantly upon lead creation." },
      { q: "Can you automate our contract and billing process?", a: "Moving deals to 'Closed-Won' can trigger webhooks to Stripe, QuickBooks, or PandaDoc automatically." },
      { q: "Do you train our team on how to use the new CRM?", a: "We provide comprehensive SOPs, video libraries, and live onboarding sessions for your staff." }
    ]
  },
  "customer-support": {
    hero: {
      badge: "AI SUPPORT AGENTS",
      title: <>Scale Support Effortlessly With <span className="text-primary underline decoration-accent/60 decoration-4">AI Chatbots & Agents</span></>,
      description: "Deliver instant, 24/7 customer service in 50+ languages. We engineer intelligent AI support agents trained on your entire knowledge base to resolve up to 80% of customer inquiries without human intervention."
    },
    about: {
      title: "Next-Generation Customer Experience",
      paragraphs: [
        "Modern customers expect instant answers. Traditional support desks relying on human agents are slow, expensive, and impossible to scale during peak periods. Adyantra Digital solves this by deploying highly advanced AI Support Agents customized for your brand.",
        "We don't build dumb 'decision-tree' chatbots. We utilize Retrieval-Augmented Generation (RAG) to train Large Language Models on your website, PDFs, past Zendesk tickets, and internal wikis. The AI understands context, nuance, and company policy, providing highly accurate, conversational answers.",
        "Our AI agents seamlessly integrate with your existing infrastructure (Zendesk, Intercom, Shopify). They can check order statuses, process refunds, and troubleshoot technical issues autonomously. When they encounter a complex edge-case, they intelligently route the conversation to a human agent along with a summary."
      ],
      pillars: [
        "RAG Knowledge Base & Wiki Ingestion (Vector Database)",
        "Autonomous API Function Calling (Order Lookup/Refunds)",
        "Native Multi-Lingual Support (50+ Languages)",
        "Zero-Hallucination Guardrails & System Prompting",
        "Helpdesk Triage & Smart Ticket Escalation",
        "Omnichannel Deployment (Web Chat, WhatsApp, Email, SMS)",
        "Real-Time CSAT & Resolution Rate Performance Dashboards"
      ]
    },
    intro: {
      tagline: "Intelligent Support",
      headline: "Resolve Tickets in Seconds, Not Hours",
      description: "Drastically reduce your support costs while simultaneously improving customer satisfaction scores (CSAT). Our AI agents provide flawless, instant support around the clock."
    },
    subServices: [
      { title: "RAG-Powered Chatbots", desc: "AI bots that dynamically read your documentation to answer complex questions conversationally.", href: "/contact", img: "/assets/img/service/ai-3d.png" },
      { title: "Helpdesk Ticket Triage", desc: "AI systems that automatically categorize, tag, and route incoming email tickets to the correct department.", href: "/contact", img: "/assets/img/service/seo-3d.png" },
      { title: "E-Commerce Order Management", desc: "Bots integrated with Shopify APIs to instantly provide tracking info and process returns.", href: "/contact", img: "/assets/img/service/webdev-3d.png" },
      { title: "Multi-Lingual Support", desc: "Native translation capabilities allowing one bot to support customers globally in 50+ languages.", href: "/contact", img: "/assets/img/service/seo-3d.png" }
    ],
    processSteps: [
      { title: "Knowledge Base Ingestion", description: "We scrape and structure all your FAQs, PDFs, and historical support tickets into a vector database.", timeline: "Weeks 1-2" },
      { title: "Prompt Engineering & Guardrails", description: "Setting strict rules to ensure the AI maintains brand tone and never hallucinates incorrect policies.", timeline: "Week 2" },
      { title: "API Integrations", description: "Connecting the AI agent to your backend systems (Shopify, Stripe, Zendesk) so it can take actual actions.", timeline: "Weeks 3-4" },
      { title: "Beta Testing & Deployment", description: "Rigorous testing with edge-cases before pushing the bot live to customers.", timeline: "Week 5" }
    ],
    whyChooseUs: [
      { title: "Zero Hallucinations", description: "Our strict RAG architecture ensures the AI only answers using data from your approved documents." },
      { title: "Action-Oriented Bots", description: "Our agents don't just answer questions; they execute API calls to actually solve user problems." },
      { title: "Omnichannel Deployment", description: "Deploy the exact same AI brain across your Website Chat, WhatsApp, SMS, and Email." },
      { title: "Data Privacy Compliant", description: "We use secure, enterprise-grade LLM endpoints (SOC2 compliant) to protect user data." }
    ],
    faqData: [
      { q: "Will the AI make up incorrect answers?", a: "No, strict RAG constraints prevent general web hallucination." },
      { q: "What happens if the AI doesn't know the answer?", a: "It seamlessly transfers the chat to a live human agent with a context summary." },
      { q: "Can the AI perform actions like checking an order status?", a: "Yes, through custom API integrations with Shopify, Stripe, or backend databases." },
      { q: "How long does it take to train the AI?", a: "Initial knowledge base ingestion and bot setup takes 7 to 14 days." },
      { q: "What languages does the AI support?", a: "Over 50+ languages natively supported out of the box." }
    ]
  },
  "ecommerce-automation": {
    hero: {
      badge: "E-COMMERCE INFRASTRUCTURE",
      title: <>Scale Operations With <span className="text-primary underline decoration-accent/60 decoration-4">E-Commerce Automation</span></>,
      description: "Stop drowning in manual admin work. We engineer custom API integrations and automated workflows for Shopify and WooCommerce that sync inventory, automate fulfillment, and manage accounting autonomously."
    },
    about: {
      title: "Flawless Operational Logistics",
      paragraphs: [
        "As an e-commerce brand scales, the operational complexity grows exponentially. Manually updating inventory across multiple channels, routing orders to 3PLs, and reconciling accounting data introduces massive human error. Adyantra Digital architects custom automation infrastructure to eliminate this friction.",
        "We utilize enterprise middleware (like n8n, Make.com, or custom Node.js scripts) to connect your storefront to your ERP, accounting software, and fulfillment centers. Data flows instantaneously and flawlessly across your entire tech stack.",
        "Additionally, we automate critical marketing and customer service touchpoints—from dynamic inventory alerts to automated post-purchase review requests and VIP customer tagging."
      ],
      pillars: [
        "Multi-Store & Channel Inventory Synchronization",
        "Automated 3PL & Warehouse Order Dispatch",
        "ERP & Accounting Auto-Reconciliation (QuickBooks/Xero)",
        "Shopify Liquid Script & Flow Logic Customization",
        "Automated Post-Purchase Review & UGC Collection",
        "VIP Customer Dynamic Tagging & Loyalty Triggers",
        "Fail-Safe API Webhook & Error-Retrying Architecture"
      ]
    },
    intro: {
      tagline: "Operational Scaling",
      headline: "Handle 10x The Orders Without Hiring More Staff",
      description: "We build the digital infrastructure that allows high-growth D2C brands to process thousands of orders daily without inventory errors or logistical bottlenecks."
    },
    subServices: [
      { title: "ERP & Accounting Integration", desc: "Automated syncing of Shopify orders, taxes, and fees directly into QuickBooks or Xero.", href: "/contact", img: "/assets/img/service/ai-3d.png" },
      { title: "Multi-Channel Inventory Sync", desc: "Real-time stock level synchronization across Shopify, Amazon, and physical retail POS systems.", href: "/contact", img: "/assets/img/service/seo-3d.png" },
      { title: "Automated Order Routing", desc: "Complex logic to route specific SKUs to different 3PLs or dropship vendors instantly.", href: "/contact", img: "/assets/img/service/webdev-3d.png" },
      { title: "Dynamic Product Tagging", desc: "Automated Shopify scripts to tag VIP customers, hide out-of-stock items, or apply tiered discounts.", href: "/contact", img: "/assets/img/service/seo-3d.png" }
    ],
    processSteps: [
      { title: "Logistical Audit", description: "We map out your current order flow, identifying bottlenecks and manual entry points.", timeline: "Weeks 1-2" },
      { title: "Middleware Architecture", description: "Designing the API connections between Shopify, your ERP, and your fulfillment networks.", timeline: "Weeks 2-3" },
      { title: "Script & Webhook Development", description: "Writing custom Shopify Liquid scripts and setting up webhooks in Make.com or n8n.", timeline: "Weeks 4-6" },
      { title: "Sandbox Testing & Deployment", description: "Running test orders through the system before pushing the automation to production.", timeline: "Weeks 7-8" }
    ],
    whyChooseUs: [
      { title: "Deep Shopify API Knowledge", description: "We go beyond basic Zapier setups, utilizing GraphQL and Shopify Flow for highly complex logic." },
      { title: "Error-Resilient Infrastructure", description: "We build in auto-retry logic and error alerts so a dropped API call never results in a lost order." },
      { title: "Financial Accuracy", description: "We ensure discounts, taxes, and shipping fees sync perfectly into accounting tools." },
      { title: "Custom Development", description: "Our Node.js engineers can build custom private apps tailored specifically to your store." }
    ],
    faqData: [
      { q: "Can you connect Shopify to our legacy ERP system?", a: "Yes, via REST/SOAP APIs, direct SQL connections, or automated FTP file drops." },
      { q: "Is Zapier robust enough for high-volume e-commerce?", a: "We prefer Make.com, n8n, or AWS Lambda for high-volume stores for superior reliability." },
      { q: "How do you handle inventory sync across multiple Shopify stores?", a: "We create a single centralized source-of-truth database that decrements stock across all regions." },
      { q: "Can you automate our dropshipping process?", a: "Yes, we build logic that automatically splits orders and dispatches line items to different 3PLs." },
      { q: "What happens if an automation fails?", a: "Our middleware catches errors, queues data, auto-retries every 15 minutes, and alerts your team on Slack." }
    ]
  }
};
