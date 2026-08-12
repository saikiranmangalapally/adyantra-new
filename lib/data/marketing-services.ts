export interface MarketingService {
  slug: string;
  title: string;
  headline: string;
  tagline: string;
  description: string;
  icon: string;
  category: "Performance Ads" | "Organic Growth" | "Lead Gen";
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

export const marketingServicesData: MarketingService[] = [
  {
    slug: "google-ads",
    title: "Google Ads Management",
    headline: "Capture High-Intent Search Traffic",
    tagline: "Drive immediate, high-quality leads and sales with data-driven Google Search, Display, and Performance Max campaigns.",
    description: "We don't just bid on keywords; we engineer profitability. By combining rigorous A/B testing with advanced conversion tracking, we ensure every rupee spent on Google Ads generates measurable ROI.",
    icon: "🔍",
    category: "Performance Ads",
    overview: {
      heading: "Dominate Search Intent",
      paragraphs: [
        "When your ideal customer searches for your service, you need to be at the absolute top of the page. Google Ads is the most direct path to capturing high-intent demand.",
        "We manage the entire lifecycle: keyword research, ad copywriting, landing page optimization, and daily bid adjustments."
      ],
      bestFor: "B2B Services, E-commerce, Local Businesses, and High-Ticket SaaS.",
    },
    features: [
      "Search & Performance Max Campaigns",
      "Advanced Conversion Tracking (GTM)",
      "Dynamic Keyword Insertion",
      "Negative Keyword Sculpting",
      "Remarketing & Audience Targeting",
      "Custom Looker Studio Dashboards"
    ],
    subServices: [
      { title: "Search Campaign Management", description: "Precision keyword targeting to capture high-intent buyers at the moment they search for your services." , icon: "target" },
      { title: "Performance Max Campaigns", description: "AI-driven cross-channel campaigns leveraging Google's machine learning across Search, Display, YouTube & Gmail." , icon: "target" },
      { title: "Shopping & Product Ads", description: "Feed-optimized product listing ads for e-commerce stores to drive direct purchases from Google Shopping." , icon: "target" },
      { title: "Remarketing & Display", description: "Re-engage past visitors with visual display ads across 2M+ websites in the Google Display Network." , icon: "target" },
      { title: "Conversion Tracking Setup", description: "Server-side GTM implementation with offline conversion imports for accurate data-driven optimization." , icon: "target" },
      { title: "Custom Dashboard Reporting", description: "Real-time Looker Studio dashboards tracking CPA, ROAS, and revenue attribution across all campaigns." , icon: "target" }
    ],
    whyChooseUs: [
      { title: "Google Partner Certified", description: "Our team holds active Google Ads certifications and maintains Partner status with proven performance benchmarks." , icon: "target" },
      { title: "Profit-First Bidding Strategy", description: "We optimize for revenue, not just clicks. Every campaign is structured around your target CPA and ROAS goals." , icon: "target" },
      { title: "Dedicated Account Strategist", description: "No junior account managers. You work directly with senior PPC strategists with 5+ years of hands-on experience." , icon: "target" },
      { title: "Full Funnel Transparency", description: "Real-time reporting dashboards with no hidden fees — you see exactly where every rupee is spent and what it returns." , icon: "target" }
    ],
    testimonials: [
      { name: "Rajesh K.", role: "CEO, Urban Builders", quote: "Adyantra cut our cost-per-lead by 65% in under 3 months. Their Google Ads team is genuinely world-class.", initials: "XX" },
      { name: "Priya S.", role: "Marketing Head, FinVault", quote: "They restructured our entire account and we saw 800% ROAS within the first quarter. Absolutely incredible team.", initials: "XX" },
      { name: "Amit D.", role: "Founder, TechNova SaaS", quote: "The level of detail in their tracking setup and weekly optimization reports is unlike any agency we've worked with.", initials: "XX" }
    ],
    process: [
      { step: "01", title: "Audit & Strategy", description: "Deep dive into your past accounts, competitor analysis, and keyword mapping.", timeline: "Week 1" },
      { step: "02", title: "Build & Tracking", description: "Structuring campaigns, writing ad copy, and setting up bulletproof server-side tracking.", timeline: "Week 2" },
      { step: "03", title: "Launch & Learn", description: "Activating campaigns, aggressive negative keyword filtering, and finding winning creatives.", timeline: "Month 1" },
      { step: "04", title: "Scale & Optimize", description: "Scaling budget on profitable keywords, testing new ad angles, and lowering CPA.", timeline: "Ongoing" }
    ],
    tools: ["Google Ads", "Google Tag Manager", "Google Analytics 4", "Looker Studio", "Semrush"],
    caseStudy: {
      brand: "Urban Builders",
      icon: "🏗️",
      challenge: "High cost-per-lead (₹4,500) and low lead quality from generic search campaigns.",
      solution: "Restructured into highly granular exact-match campaigns, implemented offline conversion tracking to feed sales data back to Google's algorithm.",
      metrics: [
        { value: "65%", label: "Drop in CPL" },
        { value: "3.2x", label: "Increase in Lead Quality" },
        { value: "₹40L", label: "Monthly Ad Spend Managed" },
        { value: "800%", label: "ROAS" }
      ]
    },
    pricing: {
      starter: {
        price: "From ₹25,000/mo",
        features: ["Up to ₹1L Ad Spend", "Search Campaigns", "Basic Tracking", "Monthly Reporting"]
      },
      growth: {
        price: "From ₹50,000/mo",
        features: ["Up to ₹5L Ad Spend", "Search + PMax", "Advanced GTM Tracking", "Bi-weekly Strategy"]
      },
      scale: {
        price: "Custom",
        features: ["₹5L+ Ad Spend", "Omnichannel Strategy", "Server-side Tracking", "Dedicated Slack Channel"]
      }
    },
    faqs: [
      { q: "What budget do I need to start?", a: "We recommend a minimum ad spend budget of ₹50,000/month to generate enough data for Google's machine learning algorithms to optimize effectively." },
      { q: "Do you guarantee results?", a: "We guarantee the highest quality of execution and complete transparency. While we cannot guarantee exact sales numbers due to market variables, our retention rate is 92% because we consistently hit client KPI targets." },
      { q: "Will I own the ad account?", a: "Yes, you own your Google Ads account 100%. You simply grant us managerial access." }
    ],
    related: ["meta-ads", "seo", "lead-generation"]
  },
  {
    slug: "meta-ads",
    title: "Meta Ads (Facebook & Instagram)",
    headline: "Scale Your Brand with Paid Social",
    tagline: "Stop the scroll and drive conversions with high-converting creative and advanced audience targeting on Meta.",
    description: "Meta Ads are unparalleled for creating demand. We combine striking creatives with machine-learning-driven media buying to acquire customers at scale across Facebook and Instagram.",
    icon: "📱",
    category: "Performance Ads",
    overview: {
      heading: "Create Demand. Drive Revenue.",
      paragraphs: [
        "While Google captures existing demand, Meta creates it. It's the ultimate platform for visual storytelling, brand building, and scalable e-commerce sales.",
        "Success on Meta today is 80% creative and 20% media buying. We handle both: producing thumb-stopping ads and managing the complex backend algorithms."
      ],
      bestFor: "D2C E-commerce, Info-products, Real Estate, and Consumer Apps.",
    },
    features: [
      "Full-Funnel Campaign Architecture",
      "Advantage+ Shopping Campaigns",
      "Dynamic Product Ads (DPA)",
      "Retargeting & Lookalike Audiences",
      "Creative Testing Frameworks",
      "Conversions API (CAPI) Integration"
    ],
    subServices: [
      { title: "Facebook & Instagram Ad Management", description: "Full-funnel campaign management across Meta platforms with advanced audience segmentation and bid optimization." , icon: "target" },
      { title: "Creative Production & Testing", description: "High-velocity ad creative production — static, carousel, and video — with weekly A/B testing frameworks." , icon: "target" },
      { title: "Advantage+ Shopping Campaigns", description: "AI-powered catalog campaigns that automatically optimize product targeting for maximum ROAS." , icon: "target" },
      { title: "Retargeting & Lookalike Audiences", description: "Re-engage warm leads and expand reach with algorithmically modeled lookalike audiences." , icon: "target" },
      { title: "Conversions API Setup", description: "Server-side tracking implementation to bypass iOS privacy restrictions and maximize data accuracy." , icon: "target" },
      { title: "Ad Creative Design & Video Editing", description: "Scroll-stopping visual assets designed for feed, stories, and reels formats across all placements." , icon: "target" }
    ],
    whyChooseUs: [
      { title: "Creative-First Approach", description: "80% of Meta success is creative. Our in-house design team produces thumb-stopping ads that consistently outperform." , icon: "target" },
      { title: "Full-Funnel Architecture", description: "We build awareness → consideration → conversion funnels that nurture cold audiences into paying customers." , icon: "target" },
      { title: "Data-Driven Scaling", description: "We scale winning campaigns aggressively while maintaining target ROAS — no guesswork, only data." , icon: "target" },
      { title: "Weekly Creative Refresh", description: "Ad fatigue kills campaigns. We test and launch fresh creatives every week to maintain peak performance." , icon: "target" }
    ],
    testimonials: [
      { name: "Sneha R.", role: "Founder, Luxe Fashion India", quote: "They took our Meta ROAS from 1.5x to 4.5x and scaled our spend to ₹20L/month profitably. Game-changing.", initials: "XX" },
      { name: "Vikram P.", role: "CMO, FreshBite Foods", quote: "The creative quality alone is worth the partnership. Their UGC video ads consistently outperform everything.", initials: "XX" },
      { name: "Nisha T.", role: "Brand Director, Aura Living", quote: "Adyantra's CAPI setup fixed our tracking issues overnight. We finally see accurate attribution data.", initials: "XX" }
    ],
    process: [
      { step: "01", title: "Creative Strategy", description: "Analyzing your brand, target audience, and developing creative angles.", timeline: "Week 1" },
      { step: "02", title: "Asset Production", description: "Designing static, video, and carousel ads tailored for feed and reels.", timeline: "Week 2" },
      { step: "03", title: "Testing Phase", description: "Deploying rapid creative tests to identify winning hooks and audiences.", timeline: "Month 1" },
      { step: "04", title: "Vertical Scaling", description: "Increasing spend aggressively on winning creatives while maintaining ROAS.", timeline: "Ongoing" }
    ],
    tools: ["Meta Business Manager", "Facebook Pixel", "Conversions API", "Figma", "CapCut"],
    caseStudy: {
      brand: "Luxe Fashion India",
      icon: "👗",
      challenge: "Stuck at 1.5x ROAS and unable to scale ad spend beyond ₹1L/month without profitability dropping.",
      solution: "Implemented Meta Conversions API for better tracking, shifted to Advantage+ Shopping, and launched a weekly UGC video testing framework.",
      metrics: [
        { value: "4.5x", label: "Blended ROAS" },
        { value: "₹20L", label: "Monthly Spend Reached" },
        { value: "300%", label: "Revenue Growth" },
        { value: "45%", label: "Lower CPA" }
      ]
    },
    pricing: {
      starter: {
        price: "From ₹30,000/mo",
        features: ["Up to ₹2L Ad Spend", "Basic Image Creatives", "Pixel Setup", "Monthly Reporting"]
      },
      growth: {
        price: "From ₹60,000/mo",
        features: ["Up to ₹10L Ad Spend", "Video + Image Creatives", "Conversions API Setup", "Bi-weekly Sync"]
      },
      scale: {
        price: "Custom",
        features: ["₹10L+ Ad Spend", "High-Volume Creative Testing", "Advanced Attribution", "Priority Support"]
      }
    },
    faqs: [
      { q: "Do you create the ad visuals/videos?", a: "Yes, our Growth and Scale tiers include complete creative production (copy, static designs, and video editing). We guide your team on raw footage collection." },
      { q: "What happens when iOS updates block tracking?", a: "We implement Meta's Conversions API (server-side tracking) to bypass browser restrictions and ensure maximum data visibility." },
      { q: "How often do you refresh creatives?", a: "We test new creatives weekly. Ad fatigue is real, and continuous creative testing is the only way to scale." }
    ],
    related: ["google-ads", "lead-generation"]
  },
  {
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    headline: "Compound Your Organic Traffic",
    tagline: "Build a moat around your business with technical SEO, high-authority backlinks, and content that ranks.",
    description: "Paid ads stop working the second you stop paying. SEO is an investment that compounds over time. We rank your website for the high-intent keywords your customers are actually searching for.",
    icon: "📈",
    category: "Organic Growth",
    overview: {
      heading: "Sustainable Organic Growth",
      paragraphs: [
        "SEO is no longer just about stuffing keywords. It requires a flawless technical foundation, topical authority, and high-quality backlinks.",
        "We execute a holistic SEO strategy that aligns with Google's latest helpful content updates, driving traffic that actually converts into revenue."
      ],
      bestFor: "B2B SaaS, Healthcare, Real Estate, and established E-commerce brands.",
    },
    features: [
      "Technical SEO Audits & Fixes",
      "On-Page Optimization (Schema, Meta)",
      "Content Strategy & Production",
      "High-Authority Link Building",
      "Local SEO (Google Business Profile)",
      "Programmatic SEO Strategy"
    ],
    subServices: [
      { title: "Technical SEO Audits", description: "Comprehensive crawl analysis, Core Web Vitals optimization, and fixing indexation issues for maximum visibility." , icon: "target" },
      { title: "On-Page Content Optimization", description: "Meta tags, schema markup, internal linking architecture, and content restructuring for search intent alignment." , icon: "target" },
      { title: "Content Strategy & Production", description: "Data-driven blog posts, pillar pages, and topic clusters that build topical authority and drive organic traffic." , icon: "target" },
      { title: "High-Authority Link Building", description: "White-hat outreach and digital PR campaigns to earn backlinks from DR 50+ authoritative domains." , icon: "target" },
      { title: "Local SEO & Google Business", description: "Google Business Profile optimization, local citation building, and review management for geo-targeted visibility." , icon: "target" },
      { title: "Programmatic SEO", description: "Scalable template-based page generation targeting thousands of long-tail keyword variations automatically." , icon: "target" }
    ],
    whyChooseUs: [
      { title: "White-Hat Only Approach", description: "No PBNs, no spam links. We use only ethical, Google-compliant methods that protect your site long-term." , icon: "target" },
      { title: "Compound Growth Results", description: "Unlike paid ads, SEO compounds over time. Our clients see 3x-5x organic traffic growth within 12 months." , icon: "target" },
      { title: "Full Technical Expertise", description: "Our team includes former Google engineers who understand crawl budgets, rendering, and indexation at the deepest level." , icon: "target" },
      { title: "Transparent Monthly Reporting", description: "Detailed keyword ranking reports, traffic analytics, and backlink acquisition reports every month." , icon: "target" }
    ],
    testimonials: [
      { name: "Arjun M.", role: "CTO, FinTech Pro", quote: "After losing 60% traffic to a core update, Adyantra rebuilt our SEO from scratch. We're now ranking #1 for 15+ core terms.", initials: "XX" },
      { name: "Deepa L.", role: "VP Marketing, HealthFirst", quote: "Their content strategy generated 400+ inbound leads per month without any paid advertising. Pure organic growth.", initials: "XX" },
      { name: "Karan B.", role: "Founder, PropTech Solutions", quote: "The technical SEO audit alone was worth its weight in gold. Page speeds improved 4x and rankings followed.", initials: "XX" }
    ],
    process: [
      { step: "01", title: "Deep Audit", description: "Comprehensive technical, content, and backlink audit of your current site.", timeline: "Month 1" },
      { step: "02", title: "Foundation", description: "Fixing technical errors, optimizing site speed, and updating existing on-page content.", timeline: "Month 2" },
      { step: "03", title: "Content Engine", description: "Publishing targeted, high-quality blog posts and landing pages to build topical authority.", timeline: "Month 3-6" },
      { step: "04", title: "Authority Building", description: "Acquiring high DR backlinks through digital PR and outreach to push rankings to Page 1.", timeline: "Ongoing" }
    ],
    tools: ["Ahrefs", "Semrush", "Screaming Frog", "Google Search Console", "SurferSEO"],
    caseStudy: {
      brand: "FinTech Pro",
      icon: "💳",
      challenge: "Lost 60% of organic traffic following a Google core update due to thin content and technical debt.",
      solution: "Complete site restructuring, pruning of low-quality pages, and a 6-month topical authority content campaign.",
      metrics: [
        { value: "210%", label: "Organic Traffic Growth" },
        { value: "#1", label: "Ranking for 15+ Core Terms" },
        { value: "400+", label: "Inbound Leads/Month" },
        { value: "Zero", label: "Ad Spend Required" }
      ]
    },
    pricing: {
      starter: {
        price: "From ₹40,000/mo",
        features: ["Technical Audit", "On-Page Optimization", "2 Content Pieces/mo", "Basic Reporting"]
      },
      growth: {
        price: "From ₹75,000/mo",
        features: ["Advanced Technical Fixes", "4 Content Pieces/mo", "Targeted Link Building", "Competitor Tracking"]
      },
      scale: {
        price: "Custom",
        features: ["Programmatic SEO", "Digital PR Campaigns", "High-Volume Content", "Enterprise Strategy"]
      }
    },
    faqs: [
      { q: "How long does SEO take to see results?", a: "SEO is a long-term play. You will typically see movement in rankings within 3 months, but significant traffic and revenue growth usually takes 6 to 9 months." },
      { q: "Are your backlinks safe?", a: "Absolutely. We strictly use white-hat outreach and digital PR to secure links from real, high-authority websites. No PBNs or spam links." },
      { q: "Do you write the content?", a: "Yes, we have specialized writers who create SEO-optimized, human-written content that satisfies search intent and converts readers." }
    ],
    related: ["google-ads", "lead-generation"]
  },
  {
    slug: "lead-generation",
    title: "B2B Lead Generation",
    headline: "Fill Your Pipeline with Qualified Meetings",
    tagline: "Outbound sales systems that combine cold email, LinkedIn automation, and AI personalization to book meetings.",
    description: "Waiting for inbound leads is slow. We build aggressive, highly-targeted outbound engines that put your offer directly in front of decision-makers. Predictable pipeline, predictable revenue.",
    icon: "🎯",
    category: "Lead Gen",
    overview: {
      heading: "Outbound on Autopilot",
      paragraphs: [
        "Cold outreach only works when it's highly personalized and delivered at volume. We build the infrastructure to send thousands of emails safely, without hitting the spam folder.",
        "We source verified decision-maker data, craft compelling copy, and handle the inbox management. You just show up to the sales calls."
      ],
      bestFor: "B2B Agencies, SaaS, Consultancies, and Enterprise Sales teams.",
    },
    features: [
      "Verified B2B Data Sourcing",
      "Cold Email Infrastructure Setup (DKIM/SPF)",
      "AI-Personalized Copywriting",
      "LinkedIn Outreach Automation",
      "Inbox Management & Lead Triage",
      "CRM Integration"
    ],
    subServices: [
      { title: "Cold Email Infrastructure", description: "Setting up secondary domains, Google Workspaces, SPF/DKIM records, and warming up email accounts safely." , icon: "target" },
      { title: "B2B Data Sourcing", description: "Verified decision-maker contact lists from Apollo, ZoomInfo, and custom Clay scraping workflows." , icon: "target" },
      { title: "AI-Personalized Copywriting", description: "Hyper-personalized email sequences using AI to reference each prospect's company, role, and recent activity." , icon: "target" },
      { title: "LinkedIn Outreach Automation", description: "Automated connection requests, follow-ups, and InMail sequences targeting decision-makers on LinkedIn." , icon: "target" },
      { title: "Inbox Management & Reply Handling", description: "Full inbox management — qualifying interested replies, booking meetings, and routing leads to your CRM." , icon: "target" },
      { title: "CRM & Calendar Integration", description: "Seamless sync with HubSpot, Salesforce, or Pipedrive with automated meeting booking on your calendar." , icon: "target" }
    ],
    whyChooseUs: [
      { title: "Domain Protection First", description: "We never send from your primary domain. Lookalike secondary domains protect your main brand reputation." , icon: "target" },
      { title: "Guaranteed Meeting Volume", description: "Performance-based models available — pay per qualified meeting after an initial infrastructure setup period." , icon: "target" },
      { title: "AI-Powered Personalization", description: "Using Clay and AI tools, each email references the prospect's specific situation for 3x higher reply rates." , icon: "target" },
      { title: "Full Pipeline Visibility", description: "Real-time dashboards showing emails sent, open rates, reply rates, meetings booked, and pipeline generated." , icon: "target" }
    ],
    testimonials: [
      { name: "Sanjay R.", role: "VP Sales, CloudSec Solutions", quote: "35 qualified meetings per month from cold outreach alone. Adyantra's lead gen system is a revenue machine.", initials: "XX" },
      { name: "Meera K.", role: "CEO, DataSync Labs", quote: "Our sales team went from spending 70% of time prospecting to 100% closing. The pipeline literally filled itself.", initials: "XX" },
      { name: "Rohan G.", role: "Founder, ConsultEdge", quote: "The AI personalization in their emails is incredible. Prospects actually think these are hand-written messages.", initials: "XX" }
    ],
    process: [
      { step: "01", title: "Infrastructure", description: "Setting up secondary domains, Google Workspaces, and warming up email accounts.", timeline: "Week 1-2" },
      { step: "02", title: "Data & Copy", description: "Scraping highly-targeted lead lists and crafting personalized email sequences.", timeline: "Week 3" },
      { step: "03", title: "Launch", description: "Starting campaigns at low volume and gradually scaling up to protect deliverability.", timeline: "Week 4" },
      { step: "04", title: "Optimization", description: "A/B testing subject lines, handling replies, and booking meetings directly to your calendar.", timeline: "Ongoing" }
    ],
    tools: ["Instantly.ai", "Apollo.io", "Clay", "LinkedIn Sales Navigator", "Make.com"],
    caseStudy: {
      brand: "CloudSec Solutions",
      icon: "☁️",
      challenge: "Sales team was spending 70% of their time prospecting and finding emails, resulting in very few actual sales calls.",
      solution: "Built a fully managed cold email infrastructure sending 5,000 highly targeted, personalized emails per month to CISOs.",
      metrics: [
        { value: "35", label: "Qualified Meetings/mo" },
        { value: "65%", label: "Open Rate" },
        { value: "₹2.5Cr", label: "Pipeline Generated" },
        { value: "100%", label: "Sales Time Saved" }
      ]
    },
    pricing: {
      starter: {
        price: "From ₹50,000/mo",
        features: ["Email Infrastructure", "1,000 Prospects/mo", "Copywriting", "Monthly Reporting"]
      },
      growth: {
        price: "From ₹85,000/mo",
        features: ["Omnichannel (Email + LinkedIn)", "3,000 Prospects/mo", "Inbox Management", "CRM Sync"]
      },
      scale: {
        price: "Custom",
        features: ["AI Personalization via Clay", "10,000+ Prospects/mo", "Dedicated SDR", "Custom Integration"]
      }
    },
    faqs: [
      { q: "Will this ruin my main company domain?", a: "No. We never send cold emails from your primary domain. We purchase lookalike domains (e.g., tryyourcompany.com) to protect your main domain's reputation." },
      { q: "Where do you get the leads?", a: "We use premium data providers like Apollo, ZoomInfo, and custom scraping via Clay to ensure highly accurate, verified data." },
      { q: "Are the meetings guaranteed?", a: "Depending on your offer and ticket size, we can offer performance-based models where you pay per qualified meeting after a setup fee." }
    ],
    related: ["google-ads", "seo"]
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing (SMM)",
    headline: "Build Loyal Communities & Convert Audiences Across Social Channels",
    tagline: "Connect with your target audience through strategic content, organic community building, and viral brand engagement.",
    description: "From content strategy and graphic design to community management and influencer outreach, we build memorable social media presences across Meta, Instagram, LinkedIn, YouTube, and X.",
    icon: "📣",
    category: "Organic Growth",
    overview: {
      heading: "Engage, Expand & Elevate Your Brand",
      paragraphs: [
        "Social media marketing goes beyond posting graphics—it's about creating authentic connections, building brand authority, and cultivating a loyal customer community across major platforms.",
        "We craft tailored content calendars, short-form video reels, high-performing carousel graphics, and community engagement workflows that convert followers into brand advocates."
      ],
      bestFor: "D2C Brands, E-commerce, Local Businesses, Healthcare, Education & Corporate Enterprises.",
    },
    features: [
      "Custom Social Media Strategy & Content Calendars",
      "High-Impact Graphic Design & Motion Graphics",
      "Instagram Reels, Shorts & TikTok Video Editing",
      "Community Management & Active Response Lead Gen",
      "Influencer Partnerships & UGC Campaigns",
      "Cross-Channel Analytics & Performance Audits"
    ],
    subServices: [
      { title: "Social Media Management", description: "End-to-end content creation, scheduling, and community management across all major social platforms." , icon: "target" },
      { title: "Social Media Advertising", description: "Paid social campaigns on Instagram, Facebook, and LinkedIn with precise targeting and budget optimization." , icon: "target" },
      { title: "Social Content Creation", description: "High-quality graphic posts, carousel designs, short-form video reels, and motion graphics production." , icon: "target" },
      { title: "Social Strategy & Planning", description: "Data-driven content calendars, audience persona development, and competitive analysis frameworks." , icon: "target" },
      { title: "Influencer Marketing", description: "Strategic partnerships with micro and macro influencers to amplify brand reach and drive authentic engagement." , icon: "target" },
      { title: "Social Media Analytics", description: "Comprehensive performance tracking, audience insights, and ROI reporting across all managed channels." , icon: "target" }
    ],
    whyChooseUs: [
      { title: "Creative + Strategic Thinking", description: "We don't just post pretty graphics — every piece of content is strategically crafted to drive engagement and conversions." , icon: "target" },
      { title: "Multi-Platform Expertise", description: "Deep expertise across Instagram, Facebook, LinkedIn, YouTube, X, and Pinterest with platform-native content." , icon: "target" },
      { title: "Dedicated Social Media Manager", description: "A single point of contact who understands your brand voice and manages your entire social presence." , icon: "target" },
      { title: "Real-Time Community Management", description: "Active comment responses, DM handling, and lead routing to ensure no opportunity is missed." , icon: "target" }
    ],
    testimonials: [
      { name: "Ananya S.", role: "Brand Manager, Aura Lifestyle", quote: "Our engagement rate jumped from 0.8% to 4.8% in just 3 months. The content quality is exceptional.", initials: "XX" },
      { name: "Rahul M.", role: "CEO, GreenLeaf Organics", quote: "25K new followers gained organically. Their reel strategy for Instagram is absolutely on point.", initials: "XX" },
      { name: "Tanya D.", role: "Director, EduBridge Academy", quote: "The community management alone has generated 3.5x more DM leads than we were getting before. Incredible ROI.", initials: "XX" }
    ],
    process: [
      { step: "01", title: "Brand Audit & Persona Analysis", description: "Deep dive into your current social channels, target demographics, and competitor presence.", timeline: "Week 1" },
      { step: "02", title: "Content Strategy & Asset Design", description: "Creating monthly content calendars, visual style guides, and engaging copy themes.", timeline: "Week 2" },
      { step: "03", title: "Publishing & Community Management", description: "Scheduling posts at optimal engagement times and actively managing audience comments/DMs.", timeline: "Month 1" },
      { step: "04", title: "Performance Review & Scaling", description: "Analyzing reach, engagement metrics, follower growth, and optimizing top-performing content formats.", timeline: "Ongoing" }
    ],
    tools: ["Instagram", "Meta Business Suite", "LinkedIn Sales Navigator", "Canva Pro", "Figma", "CapCut", "Buffer"],
    caseStudy: {
      brand: "Aura Lifestyle & Apparel",
      icon: "✨",
      challenge: "Low engagement rate (0.8%) and stagnant organic growth across Instagram and LinkedIn channels.",
      solution: "Overhauled brand visual identity, launched high-tempo short-form video reels, and initiated community Q&A engagement campaigns.",
      metrics: [
        { value: "320%", label: "Organic Reach Uplift" },
        { value: "4.8%", label: "Average Engagement Rate" },
        { value: "25K+", label: "New Followers Gained" },
        { value: "3.5x", label: "Increase in Profile DM Leads" }
      ]
    },
    pricing: {
      starter: {
        price: "From ₹25,000/mo",
        features: ["12 Posts/mo (Static + Carousels)", "2 Platforms (IG + FB)", "Basic Graphic Design", "Monthly Analytics"]
      },
      growth: {
        price: "From ₹45,000/mo",
        features: ["20 Posts/mo + 8 Reels", "3 Platforms (IG, FB, LinkedIn)", "Community Management", "Bi-weekly Strategy"]
      },
      scale: {
        price: "Custom",
        features: ["30+ Posts/mo + High-Volume Reels", "Omnichannel (IG, FB, LinkedIn, YouTube)", "UGC & Influencer Campaigning", "Dedicated Social Media Manager"]
      }
    },
    faqs: [
      { q: "Which social media platforms do you manage?", a: "We manage Instagram, Facebook, LinkedIn, YouTube, X (Twitter), and Pinterest, tailoring content for each platform's unique algorithm." },
      { q: "Do you create the graphics and video reels?", a: "Yes! Our in-house creative design and video team produces all graphic posts, carousels, and short-form video reels." },
      { q: "How do you measure social media ROI?", a: "We track impression reach, engagement rates, click-throughs to your website, lead form submissions, and direct message (DM) sales conversions." }
    ],
    related: ["meta-ads", "google-ads", "seo"]
  },
  {
    slug: "email-marketing",
    title: "Email & Lead Nurturing Workflows",
    headline: "Turn Cold Contacts into Repeat Revenue with Automated Email Funnels",
    tagline: "High-converting drip campaigns, lifecycle automation, and hyper-personalized customer journey flows.",
    description: "Email marketing remains the highest-ROI channel in digital growth. We build automated lead nurturing sequences, cart recovery flows, and VIP retention campaigns that maximize customer lifetime value.",
    icon: "✉️",
    category: "Lead Gen",
    overview: {
      heading: "Automate Lifetime Customer Value",
      paragraphs: [
        "Acquiring a new lead is only half the battle. Our automated email and SMS workflows continuously nurture prospects, build trust, and drive repeat purchases without manual effort.",
        "We set up advanced segmentation, dynamic email templates, deliverability optimization (SPF/DKIM/DMARC), and automated trigger events based on user behavior."
      ],
      bestFor: "E-Commerce Stores, B2B SaaS, Professional Services, & High-Ticket Consultancies.",
    },
    features: [
      "Klaviyo / ActiveCampaign / Mailchimp Setup",
      "Behavioral Trigger & Abandoned Cart Flows",
      "Welcome Series & Educational Onboarding",
      "Customer Re-engagement & Win-Back Campaigns",
      "Advanced Segmentation & Dynamic Personalization",
      "Deliverability Audits & Domain Warming"
    ],
    subServices: [
      { title: "Email Platform Setup & Migration", description: "Complete Klaviyo, ActiveCampaign, or Mailchimp setup including list migration and deliverability configuration." , icon: "target" },
      { title: "Automated Drip Sequences", description: "Behavioral trigger flows for welcome series, abandoned carts, post-purchase follow-ups, and win-back campaigns." , icon: "target" },
      { title: "Newsletter & Broadcast Campaigns", description: "Engaging promotional emails, product launches, and curated content newsletters with A/B tested subject lines." , icon: "target" },
      { title: "Segmentation & Personalization", description: "Advanced subscriber segmentation based on behavior, purchase history, and engagement for hyper-targeted messaging." , icon: "target" },
      { title: "Deliverability Optimization", description: "SPF/DKIM/DMARC setup, IP warming, list hygiene, and spam score monitoring to maximize inbox placement." , icon: "target" },
      { title: "SMS & Omnichannel Workflows", description: "Integrated email + SMS automation flows for time-sensitive offers, shipping updates, and re-engagement sequences." , icon: "target" }
    ],
    whyChooseUs: [
      { title: "Revenue-Focused Approach", description: "We measure success by email channel revenue, not vanity metrics. Every flow is optimized for conversions and LTV." , icon: "target" },
      { title: "Deliverability Expertise", description: "Our dedicated deliverability team ensures your emails consistently land in primary inboxes, not spam folders." , icon: "target" },
      { title: "Full-Service Execution", description: "Strategy, copywriting, design, coding, and technical setup — all handled by our in-house email team." , icon: "target" },
      { title: "Continuous Optimization", description: "Weekly A/B testing of subject lines, send times, content blocks, and CTAs to constantly improve performance." , icon: "target" }
    ],
    testimonials: [
      { name: "Kavita P.", role: "E-com Director, Zenith Fitness", quote: "They recovered 28% of abandoned cart revenue within 30 days of implementing their automated flows. Phenomenal.", initials: "XX" },
      { name: "Suresh N.", role: "CEO, NutriVault India", quote: "Email went from our weakest channel to generating ₹18L/month. The welcome sequence alone converts at 42%.", initials: "XX" },
      { name: "Divya R.", role: "Marketing Lead, StyleBox", quote: "Their segmentation strategy increased our email open rate from 18% to 42%. The personalization is truly next-level.", initials: "XX" }
    ],
    process: [
      { step: "01", title: "Audience Audit & Segmentation", description: "Analyzing your subscriber list, purchase history, and engagement behavior.", timeline: "Week 1" },
      { step: "02", title: "Copywriting & Template Design", description: "Crafting mobile-first responsive email templates and high-converting copy.", timeline: "Week 2" },
      { step: "03", title: "Automation Build & Integration", description: "Building behavioral flows and connecting email stack with your store or CRM.", timeline: "Month 1" },
      { step: "04", title: "Deliverability & Revenue Optimization", description: "Continuous A/B testing of subject lines, send times, and offer structures.", timeline: "Ongoing" }
    ],
    tools: ["Klaviyo", "ActiveCampaign", "Mailchimp", "HubSpot", "SendGrid", "Make"],
    caseStudy: {
      brand: "Zenith Fitness Supplies",
      icon: "🏋️",
      challenge: "Abandoned cart rate exceeded 72% with zero automated follow-up sequences in place.",
      solution: "Designed a 3-step automated cart recovery flow combined with a 5-part customer welcome sequence.",
      metrics: [
        { value: "28%", label: "Recovered Cart Revenue" },
        { value: "42%", label: "Average Email Open Rate" },
        { value: "4.2x", label: "Email Channel ROI" },
        { value: "₹18L", label: "Monthly Email Revenue" }
      ]
    },
    pricing: {
      starter: {
        price: "From ₹30,000/mo",
        features: ["Up to 5,000 Contacts", "3 Automated Flows", "2 Broadcast Emails/mo", "Basic Reporting"]
      },
      growth: {
        price: "From ₹55,000/mo",
        features: ["Up to 25,000 Contacts", "6 Core Automated Flows", "4 Broadcast Emails/mo", "Advanced Segmentation"]
      },
      scale: {
        price: "Custom",
        features: ["25,000+ Contacts", "Full Lifecycle Automation", "Omnichannel Email + SMS", "Dedicated Strategist"]
      }
    },
    faqs: [
      { q: "Which email platform do you recommend?", a: "For e-commerce we recommend Klaviyo. For B2B lead nurturing, ActiveCampaign or HubSpot provide the best CRM and workflow triggers." },
      { q: "How do you ensure emails don't go to spam?", a: "We configure proper DNS authentication records (SPF, DKIM, DMARC), warm up sending IPs, and enforce strict list hygiene." },
      { q: "Do you write the copy and design the emails?", a: "Yes, our team handles end-to-end strategy, copywriting, responsive HTML design, and technical workflow setup." }
    ],
    related: ["lead-generation", "meta-ads", "google-ads"]
  },
  {
    slug: "web-development",
    title: "Web Software & App Development",
    headline: "Engineered for Lightning Speed, Security & High Conversion Rates",
    tagline: "Custom Next.js, React, and enterprise web applications tailored for modern scaling businesses.",
    description: "Your website is your 24/7 digital storefront. We build ultra-fast, responsive web platforms engineered with Next.js, React, and server-side optimization to convert traffic into revenues.",
    icon: "💻",
    category: "Organic Growth",
    overview: {
      heading: "High-Performance Modern Web Engineering",
      paragraphs: [
        "Slow, outdated websites ruin ad campaigns and hurt search rankings. We build modern, lightning-fast web applications utilizing Next.js, TypeScript, Tailwind CSS, and serverless infrastructure.",
        "Every web application we deliver includes Core Web Vitals optimization, mobile-first design, seamless CRM API integrations, and robust security protocols."
      ],
      bestFor: "Growing Enterprises, SaaS Platforms, Real Estate Developers, & E-commerce Brands.",
    },
    features: [
      "Custom Next.js & React Frontend Development",
      "Core Web Vitals & Page Speed Optimization",
      "Mobile-First Responsive Layout & UI/UX",
      "Headless CMS & API Integration",
      "Lead Capture Form & CRM Integrations",
      "Enterprise Web Security & SSL Architecture"
    ],
    subServices: [
      { title: "Custom Web Application Development", description: "Bespoke Next.js and React web applications engineered for performance, scalability, and conversion." , icon: "target" },
      { title: "Responsive Website Design", description: "Mobile-first, pixel-perfect responsive layouts that deliver seamless experiences across all devices." , icon: "target" },
      { title: "Headless CMS Integration", description: "Content management systems like Sanity, Strapi, or Contentful for easy non-technical content updates." , icon: "target" },
      { title: "Core Web Vitals Optimization", description: "Page speed engineering targeting 90+ Lighthouse scores for better UX and higher search rankings." , icon: "target" },
      { title: "API & Third-Party Integrations", description: "Seamless connections with CRMs, payment gateways, analytics platforms, and business automation tools." , icon: "target" },
      { title: "Cloud Deployment & DevOps", description: "Vercel, AWS, or GCP deployment with CI/CD pipelines, automated backups, and 99.9% uptime SLA." , icon: "target" }
    ],
    whyChooseUs: [
      { title: "Next.js & React Specialists", description: "We exclusively build on modern frameworks delivering sub-second page loads and superior SEO pre-rendering." , icon: "target" },
      { title: "Conversion-Engineered Design", description: "Every UI element is designed to guide visitors toward conversion — not just look pretty." , icon: "target" },
      { title: "Zero Plugin Vulnerabilities", description: "Unlike WordPress, our custom builds have no plugin dependencies that can be exploited or slow your site." , icon: "target" },
      { title: "Post-Launch Support Included", description: "Every project includes 30 days of post-launch support with ongoing maintenance plans available." , icon: "target" }
    ],
    testimonials: [
      { name: "Vikash S.", role: "CTO, Apex Real Estate", quote: "They rebuilt our site on Next.js — page load went from 6.4s to 0.8s. Form submissions increased 140%.", initials: "XX" },
      { name: "Prerna K.", role: "Founder, MedConnect", quote: "The Lighthouse score hit 99/100. Our dev team was genuinely impressed by the code quality.", initials: "XX" },
      { name: "Harsh M.", role: "CEO, DataFlow Analytics", quote: "Best web development agency we've worked with. Zero downtime since launch and the CMS is incredibly easy to use.", initials: "XX" }
    ],
    process: [
      { step: "01", title: "Architecture & Wireframing", description: "Mapping user journeys, technical specs, database schemas, and UX wireframes.", timeline: "Week 1-2" },
      { step: "02", title: "UI Design & Component Build", description: "Designing responsive UI layouts in Figma and building modular React components.", timeline: "Week 3-4" },
      { step: "03", title: "Full-Stack Integration & QA", description: "Connecting APIs, backend databases, forms, and performing cross-browser testing.", timeline: "Month 2" },
      { step: "04", title: "Deployment & Optimization", description: "Deploying to Vercel/AWS cloud servers with automated CI/CD pipelines.", timeline: "Go Live" }
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Vercel", "Figma"],
    caseStudy: {
      brand: "Apex Real Estate Corp",
      icon: "🏢",
      challenge: "Legacy WordPress website loaded in 6.4 seconds, causing an 80% bounce rate on paid ad traffic.",
      solution: "Rebuilt the entire web experience on Next.js 16 with instant SSG pre-rendering and dynamic lead capture.",
      metrics: [
        { value: "0.8s", label: "Page Load Speed" },
        { value: "99/100", label: "Google Lighthouse Score" },
        { value: "140%", label: "Increase in Form Submissions" },
        { value: "Zero", label: "Server Downtime" }
      ]
    },
    pricing: {
      starter: {
        price: "From ₹45,000",
        features: ["5-Page Responsive Web App", "Next.js Architecture", "Mobile Optimized", "Contact Form Setup"]
      },
      growth: {
        price: "From ₹85,000",
        features: ["15-Page Custom Web App", "Headless CMS Integration", "SEO & Speed Optimization", "CRM Sync"]
      },
      scale: {
        price: "Custom",
        features: ["Enterprise SaaS Platform", "Full Stack Development", "Custom API Integrations", "Dedicated Dev Team"]
      }
    },
    faqs: [
      { q: "Why use Next.js instead of WordPress?", a: "Next.js offers unmatched page speeds, zero vulnerability to plugin hacks, superior SEO pre-rendering, and seamless custom app capability." },
      { q: "Will I be able to edit page content myself?", a: "Yes! We integrate user-friendly Headless CMS systems (like Sanity or Strapi) so your team can easily update text and images." },
      { q: "Do you provide hosting and maintenance?", a: "Yes, we handle deployment on Vercel or AWS with ongoing technical updates, backups, and security monitoring." }
    ],
    related: ["seo", "ecommerce-growth", "google-ads"]
  },
  {
    slug: "ecommerce-growth",
    title: "E-Commerce Growth & Storefronts",
    headline: "Scale Online Sales with High-Converting Digital Storefronts",
    tagline: "Custom Shopify setups, checkout optimization, product SEO, and multi-channel e-commerce growth.",
    description: "We build and scale online stores that turn visitors into repeat buyers. From high-converting product pages and friction-free checkout flows to automated abandoned cart recovery, we maximize your store revenue.",
    icon: "🛍️",
    category: "Performance Ads",
    overview: {
      heading: "Maximizing Store Sales & AOV",
      paragraphs: [
        "Running a profitable e-commerce business requires more than just launching a store. You need frictionless site navigation, fast checkout systems, product recommendations, and targeted acquisition campaigns.",
        "We optimize every stage of your buying funnel: store design, payment gateway setup, upsells/cross-sells, site speed, and multi-channel performance advertising."
      ],
      bestFor: "D2C Brands, Retailers, Fashion, Electronics, & Consumer Product Companies.",
    },
    features: [
      "Custom Shopify & Headless Commerce Store Design",
      "Checkout Funnel & Conversion Rate Optimization (CRO)",
      "Product Page UX & One-Click Upsell Systems",
      "Multi-Currency & Payment Gateway Integration",
      "Product Schema & E-Commerce SEO",
      "Inventory & ERP System Sync"
    ],
    subServices: [
      { title: "Shopify Store Design & Setup", description: "Custom Shopify and Shopify Plus store design with optimized product pages and checkout flows." , icon: "target" },
      { title: "Headless Commerce Development", description: "High-performance headless storefronts built on Next.js with Shopify or custom backends for enterprise scale." , icon: "target" },
      { title: "Checkout & CRO Optimization", description: "Friction-free checkout funnels, one-click upsells, and A/B tested conversion rate optimization." , icon: "target" },
      { title: "Payment Gateway Integration", description: "Multi-currency payment setup with Razorpay, Stripe, PayPal, and regional gateway integrations." , icon: "target" },
      { title: "Product Page UX Design", description: "High-converting product layouts with trust badges, review widgets, size guides, and zoom galleries." , icon: "target" },
      { title: "Inventory & ERP Sync", description: "Automated inventory management, order fulfillment, and ERP system integrations for operational efficiency." , icon: "target" }
    ],
    whyChooseUs: [
      { title: "Revenue-First Store Design", description: "We design stores that sell — not just look good. Every element is conversion-optimized based on e-com best practices." , icon: "target" },
      { title: "AOV Maximization Experts", description: "We implement dynamic upsells, bundles, free shipping bars, and loyalty programs to increase average order value." , icon: "target" },
      { title: "Multi-Channel Growth", description: "We scale your store across Google Shopping, Meta DPA, TikTok Shops, and Amazon marketplace simultaneously." , icon: "target" },
      { title: "Ongoing Growth Partnership", description: "Not just a one-time build — we partner for continuous CRO, new feature development, and revenue growth." , icon: "target" }
    ],
    testimonials: [
      { name: "Aditya K.", role: "Founder, Urban Wear India", quote: "AOV jumped from ₹1,200 to ₹2,450 after implementing their upsell system. Game changer for our margins.", initials: "XX" },
      { name: "Simran B.", role: "E-com Manager, GlowSkin Beauty", quote: "They built a headless Shopify store that loads in under 1 second. Conversion rate increased 45%.", initials: "XX" },
      { name: "Dev P.", role: "CEO, TechGadgets Store", quote: "From 76% cart abandonment to under 40%. Their checkout optimization is truly surgical.", initials: "XX" }
    ],
    process: [
      { step: "01", title: "Store Audit & UX Blueprint", description: "Reviewing site conversion bottlenecks, heatmaps, and buyer navigation paths.", timeline: "Week 1" },
      { step: "02", title: "Storefront Design & Build", description: "Designing high-converting product pages, collection layouts, and mobile cart drawers.", timeline: "Week 2-3" },
      { step: "03", title: "App Stack & Upsell Integration", description: "Integrating reviews, loyalty rewards, subscriptions, and automated upsells.", timeline: "Month 1" },
      { step: "04", title: "Traffic Acquisition & Scaling", description: "Deploying Google Shopping, Meta DPA ads, and scaling daily order volume.", timeline: "Ongoing" }
    ],
    tools: ["Shopify Plus", "WooCommerce", "Klaviyo", "Google Merchant Center", "Rebuy", "Hotjar"],
    caseStudy: {
      brand: "Urban Wear India",
      icon: "👟",
      challenge: "High cart abandonment rate (76%) and low average order value (AOV) of ₹1,200.",
      solution: "Redesigned product pages, added slide-out cart upsells, and launched Advantage+ Shopping catalog campaigns.",
      metrics: [
        { value: "₹2,450", label: "Increased AOV" },
        { value: "3.8x", label: "ROAS on Shopping Ads" },
        { value: "45%", label: "Higher Conversion Rate" },
        { value: "12K+", label: "Monthly Orders Processed" }
      ]
    },
    pricing: {
      starter: {
        price: "From ₹50,000",
        features: ["Shopify Store Setup", "Up to 50 Products", "Mobile Optimized Theme", "Payment Gateway Sync"]
      },
      growth: {
        price: "From ₹95,000",
        features: ["Custom Theme Development", "Unlimited Products", "One-Click Upsells", "Klaviyo Integration"]
      },
      scale: {
        price: "Custom",
        features: ["Headless Commerce (Next.js + Shopify)", "Custom App Development", "Omnichannel Growth Strategy", "Dedicated E-com Team"]
      }
    },
    faqs: [
      { q: "Do you work with Shopify or custom tech stack?", a: "We work with both Shopify (and Shopify Plus) as well as custom Headless Commerce built on Next.js for high-volume stores." },
      { q: "Can you help increase our Average Order Value (AOV)?", a: "Yes! We implement dynamic cart upsells, bundle offers, free shipping progress bars, and post-purchase checkout offers." },
      { q: "Do you handle product photography and ad creatives?", a: "Yes, our creative team produces product graphics, video ads, and unboxing content tailored for Meta and TikTok ads." }
    ],
    related: ["web-development", "meta-ads", "google-ads"]
  },
  {
    slug: "pr-reputation",
    title: "PR & Online Reputation Management",
    headline: "Build Unshakable Brand Authority & Control Your Digital Footprint",
    tagline: "Strategic media outreach, high-tier press releases, executive branding, and positive Search engine reputation.",
    description: "In the digital era, reputation is everything. We secure featured media articles, publish authoritative press releases, and manage search results to ensure your brand projects trust and industry leadership.",
    icon: "📰",
    category: "Organic Growth",
    overview: {
      heading: "Elevate Brand Authority & Trust",
      paragraphs: [
        "A strong digital reputation accelerates conversions across all marketing channels. When potential clients search for your company name, what they read dictates their buying decision.",
        "We craft compelling press stories, pitch national media publications, manage Google review sentiment, and suppress negative search results with high-authority brand assets."
      ],
      bestFor: "Corporate Enterprises, Executives, Healthcare Providers, Real Estate Developers, & High-Growth Startups.",
    },
    features: [
      "Tier-1 Media Publication Placements",
      "Strategic Press Release Creation & Distribution",
      "Google Search Brand Result Management (SERP)",
      "Executive LinkedIn & Thought Leadership Branding",
      "Crisis Communication & Review Sentiment Repair",
      "Wikipedia & Brand Knowledge Panel Management"
    ],
    subServices: [
      { title: "Media Publication Placements", description: "Guaranteed featured articles in tier-1 national and industry-specific online news publications." , icon: "target" },
      { title: "Press Release Creation & Distribution", description: "Compelling press releases crafted by PR professionals and distributed through premium wire services." , icon: "target" },
      { title: "Google SERP Brand Management", description: "Building and ranking positive brand assets to control what appears on Page 1 for your brand name searches." , icon: "target" },
      { title: "Executive Thought Leadership", description: "LinkedIn personal branding, speaking opportunity pitches, and bylined article placements for C-suite executives." , icon: "target" },
      { title: "Crisis Communication", description: "Rapid response PR strategies, negative content suppression, and brand sentiment repair for reputation emergencies." , icon: "target" },
      { title: "Review & Sentiment Management", description: "Google review strategy, monitoring brand mentions, and building positive review acquisition systems." , icon: "target" }
    ],
    whyChooseUs: [
      { title: "Guaranteed Placements", description: "On Growth and Scale tiers, we guarantee published articles in verified, high-authority news outlets." , icon: "target" },
      { title: "SEO + PR Synergy", description: "Every PR placement earns high-DR editorial backlinks, creating compounding SEO benefits alongside brand authority." , icon: "target" },
      { title: "24/7 Brand Monitoring", description: "Real-time brand mention tracking across news, social media, and review platforms with instant alert notifications." , icon: "target" },
      { title: "Executive-Level Strategy", description: "Our PR strategists have backgrounds in national media and corporate communications with deep editor networks." , icon: "target" }
    ],
    testimonials: [
      { name: "Arun V.", role: "CEO, Vanguard Capital", quote: "14 tier-1 media features in 3 months. Investor confidence increased significantly after our PR campaign.", initials: "XX" },
      { name: "Dr. Preeti S.", role: "Director, MedFirst Hospital", quote: "They transformed our online reputation from scattered reviews to a 5-star Google presence with a knowledge panel.", initials: "XX" },
      { name: "Nitin G.", role: "Founder, PropVista Realty", quote: "The press coverage directly influenced our sales pipeline. Prospects now find our brand credible at first search.", initials: "XX" }
    ],
    process: [
      { step: "01", title: "Reputation Audit & Angle Mapping", description: "Auditing brand sentiment across search engines, news outlets, and social channels.", timeline: "Week 1" },
      { step: "02", title: "Story Pitching & Press Creation", description: "Writing high-impact press releases and pitching editor contacts at target media publications.", timeline: "Week 2-3" },
      { step: "03", title: "Publication & Backlink Distribution", description: "Securing featured articles, interviews, and high-DR editorial backlinks.", timeline: "Month 1" },
      { step: "04", title: "Brand Monitoring & SERP Protection", description: "Monitoring brand search terms and continuously strengthening positive web assets.", timeline: "Ongoing" }
    ],
    tools: ["Muck Rack", "PR Newswire", "Brand24", "Google Alerts", "Ahrefs", "Semrush"],
    caseStudy: {
      brand: "Vanguard Capital Partners",
      icon: "🏛️",
      challenge: "Lack of online media presence made winning institutional investor trust difficult during funding rounds.",
      solution: "Executed a 3-month digital PR campaign securing features in leading business journals and optimizing brand SERPs.",
      metrics: [
        { value: "14+", label: "Top-Tier Media Articles" },
        { value: "#1", label: "Page 1 Brand Knowledge Panel" },
        { value: "5.0", label: "Google Trust Score" },
        { value: "100%", label: "Positive Brand Sentiment" }
      ]
    },
    pricing: {
      starter: {
        price: "From ₹40,000/mo",
        features: ["2 Press Releases/mo", "Digital Distribution", "Google Brand Audit", "Monthly Report"]
      },
      growth: {
        price: "From ₹75,000/mo",
        features: ["Guaranteed Media Placements", "Executive PR Positioning", "Review Management", "SERP Cleanup"]
      },
      scale: {
        price: "Custom",
        features: ["Full PR Agency Retainer", "National TV / Print Pitches", "Crisis Management", "Knowledge Panel Verification"]
      }
    },
    faqs: [
      { q: "Can you guarantee media placements?", a: "Yes! On our Growth and Scale tiers, we guarantee placement in verified online news publications and industry outlets." },
      { q: "How does PR help our SEO?", a: "Editorial PR placements provide high-DR contextually relevant backlinks from authority news domains, significantly boosting domain rating." },
      { q: "Can you remove negative search results?", a: "While search engines don't easily delete content, we build and rank positive, high-authority brand assets to push negative results off Page 1." }
    ],
    related: ["seo", "social-media-marketing", "lead-generation"]
  },
  {
    slug: "affiliate-marketing",
    title: "Affiliate & Partner Marketing",
    headline: "Scale Risk-Free Sales Through Performance Partner Networks",
    tagline: "Build, launch, and manage affiliate networks, influencer referral programs, and revenue-share partnerships.",
    description: "Expand your market reach without upfront ad risk. We design and manage performance-based affiliate programs where you only pay when affiliates generate actual confirmed sales.",
    icon: "🤝",
    category: "Lead Gen",
    overview: {
      heading: "Performance-Based Growth at Scale",
      paragraphs: [
        "Affiliate marketing is the ultimate risk-free growth model. By empowering publishers, creators, and partner websites to promote your brand, you gain access to massive audiences while maintaining positive margins.",
        "We handle partner recruitment, affiliate tracking platform setup, commission structure design, creative asset distribution, and payout management."
      ],
      bestFor: "D2C E-commerce, Financial Products, SaaS Platforms, & Subscription Services.",
    },
    features: [
      "Affiliate Program Setup (Impact, Post Affiliate Pro, ReferralCandy)",
      "Affiliate Partner Recruitment & Outreach",
      "Commission & Payout Tier Structuring",
      "Affiliate Creative Banners & Promo Link Distribution",
      "Fraud Detection & Lead Quality Verification",
      "Monthly Partner Payout Auditing"
    ],
    subServices: [
      { title: "Affiliate Program Setup", description: "Complete platform configuration on Impact, PartnerStack, or Refersion with tracking pixel integration." , icon: "target" },
      { title: "Partner Recruitment & Outreach", description: "Active recruitment of high-quality publishers, bloggers, YouTubers, and micro-influencer affiliates." , icon: "target" },
      { title: "Commission Structure Design", description: "Data-driven commission tier strategies balancing partner motivation with your profit margin targets." , icon: "target" },
      { title: "Creative Asset Distribution", description: "Banner ads, email templates, social media assets, and promo codes distributed to all affiliate partners." , icon: "target" },
      { title: "Fraud Prevention & Compliance", description: "Advanced fraud detection rules, coupon hijacking prevention, and affiliate terms enforcement." , icon: "target" },
      { title: "Performance Analytics & Payouts", description: "Monthly partner performance audits, commission calculations, and automated payout processing." , icon: "target" }
    ],
    whyChooseUs: [
      { title: "Zero Upfront Risk Model", description: "You only pay affiliates when they generate confirmed sales — making this the most capital-efficient growth channel." , icon: "target" },
      { title: "Quality Partner Network", description: "We recruit only verified, high-quality affiliates — no coupon sites or brand bidders that cannibalize your organic traffic." , icon: "target" },
      { title: "Full Program Management", description: "From recruitment to creative distribution to payout processing — we handle the entire affiliate ecosystem." , icon: "target" },
      { title: "Cross-Platform Expertise", description: "Deep experience with Impact.com, ShareASale, CJ Affiliate, PartnerStack, and Shopify-native affiliate apps." , icon: "target" }
    ],
    testimonials: [
      { name: "Anjali M.", role: "CEO, NutriLife Organics", quote: "₹35L monthly revenue from affiliates at a fixed 12% cost of acquisition. This replaced our expensive Meta ads.", initials: "XX" },
      { name: "Rohit T.", role: "Growth Lead, SaaS Platform X", quote: "180+ active affiliate partners generating consistent pipeline. The recruitment process was incredibly smooth.", initials: "XX" },
      { name: "Pooja K.", role: "E-com Director, BeautyVault", quote: "They shut down all the coupon hijackers that were stealing our organic conversions. Clean, high-quality program now.", initials: "XX" }
    ],
    process: [
      { step: "01", title: "Program Architecture", description: "Defining commission structures, attribution windows, and platform software setup.", timeline: "Week 1" },
      { step: "02", title: "Partner Recruitment", description: "Reaching out to top industry publishers, bloggers, and micro-influencer networks.", timeline: "Week 2-3" },
      { step: "03", title: "Asset Distribution & Launch", description: "Providing partners with tracking links, banner ads, email templates, and promo codes.", timeline: "Month 1" },
      { step: "04", title: "Program Optimization", description: "Optimizing top affiliate performers, running seasonal partner contests, and auditing leads.", timeline: "Ongoing" }
    ],
    tools: ["Impact.com", "ShareASale", "Post Affiliate Pro", "PartnerStack", "Refersion", "CJ Affiliate"],
    caseStudy: {
      brand: "NutriLife Organics",
      icon: "🌿",
      challenge: "Rising Meta ad costs forced the brand to find a lower-CPA sales channel to maintain profit margins.",
      solution: "Launched an affiliate ambassador program recruiting 150+ health bloggers and micro-influencers.",
      metrics: [
        { value: "₹35L", label: "Monthly Affiliate Revenue" },
        { value: "12%", label: "Fixed Cost of Acquisition" },
        { value: "180+", label: "Active Affiliate Partners" },
        { value: "Zero", label: "Upfront Ad Spend Risk" }
      ]
    },
    pricing: {
      starter: {
        price: "From ₹35,000/mo",
        features: ["Platform Setup", "Commission Strategy", "Initial Partner Outreach", "Monthly Audit"]
      },
      growth: {
        price: "From ₹65,000/mo",
        features: ["Active Partner Recruitment", "Banner & Asset Design", "Weekly Partner Communication", "Fraud Protection"]
      },
      scale: {
        price: "Custom",
        features: ["Enterprise Network Management", "High-Volume Partner Onboarding", "Custom Tracking Integrations", "Dedicated Affiliate Manager"]
      }
    },
    faqs: [
      { q: "What commission percentage should I offer affiliates?", a: "We analyze your profit margins and industry benchmarks to recommend a competitive rate (typically 10-25% for e-commerce or 20-40% recurring for SaaS)." },
      { q: "How do you prevent affiliate coupon fraud?", a: "We implement strict affiliate terms, software fraud rules, and block coupon aggregator sites from poaching organic brand search traffic." },
      { q: "Which affiliate software platform do you recommend?", a: "For Shopify stores we recommend Refersion or Impact.com. For B2B SaaS, PartnerStack is the industry gold standard." }
    ],
    related: ["lead-generation", "ecommerce-growth", "meta-ads"]
  },
  {
    slug: "ai-video-marketing",
    title: "AI Video Marketing",
    headline: "Scale Video Production with AI",
    tagline: "Generate, edit, and distribute high-converting video content 10x faster using generative AI.",
    description: "Video is the highest-converting medium, but traditional production is slow and expensive. We use AI to generate scripts, create avatars, edit footage, and optimize videos for every platform.",
    icon: "🎥",
    category: "Organic Growth",
    overview: {
      heading: "The Future of Video is Generative",
      paragraphs: [
        "From personalized outreach videos to TikToks and YouTube Shorts, AI allows you to scale video production without needing a full studio.",
        "We build automated workflows that turn text into high-quality video content, complete with AI voiceovers and dynamic captions."
      ],
      bestFor: "D2C Brands, Real Estate, Info-products, and B2B SaaS.",
    },
    features: [
      "AI Avatar Generation",
      "Automated Short-Form Editing",
      "Text-to-Video Workflows",
      "Dynamic Captions & Subtitles",
      "Personalized Video Outreach",
      "AI Voiceover Generation"
    ],
    process: [
      { step: "01", title: "Strategy & Scripting", description: "Developing high-converting scripts tailored to your target audience.", timeline: "Week 1" },
      { step: "02", title: "AI Generation", description: "Using generative AI models to create visuals, avatars, and voiceovers.", timeline: "Week 2" },
      { step: "03", title: "Editing & Polish", description: "Adding dynamic captions, transitions, and brand elements.", timeline: "Week 3" },
      { step: "04", title: "Distribution", description: "Publishing and optimizing across TikTok, Reels, Shorts, and Ads.", timeline: "Week 4" }
    ],
    tools: ["HeyGen", "ElevenLabs", "CapCut", "Midjourney", "RunwayML"],
    caseStudy: {
      brand: "FitnessPro App",
      icon: "🏋️",
      challenge: "Needed to produce 30 TikTok/Reels per month but lacked an in-house video team.",
      solution: "Implemented an AI video pipeline using HeyGen avatars and automated scripting, reducing production time by 90%.",
      metrics: [
        { value: "30+", label: "Videos per Month" },
        { value: "90%", label: "Cost Reduction" },
        { value: "4.5M", label: "Monthly Views" },
        { value: "3x", label: "App Installs" }
      ]
    },
    pricing: {
      starter: {
        price: "₹40,000",
        features: ["10 Videos/mo", "AI Scripting", "Basic Editing", "Standard Voiceovers"]
      },
      growth: {
        price: "₹75,000",
        features: ["30 Videos/mo", "Custom AI Avatar", "Premium Editing", "Multi-platform Distribution"]
      },
      scale: {
        price: "Custom",
        features: ["High-Volume Production", "Personalized Sales Videos", "API Integration", "Dedicated Strategist"]
      }
    },
    faqs: [
      { q: "Do AI avatars look realistic?", a: "Yes, modern AI avatars are virtually indistinguishable from real humans, especially for short-form social media content." },
      { q: "Can we use our own team members as avatars?", a: "Absolutely. We can create a custom digital clone of your founder or spokesperson with just a few minutes of video footage." },
      { q: "Is the voiceover robotic?", a: "We use advanced models like ElevenLabs that provide hyper-realistic, emotive voices with natural pacing and breathing." }
    ],
    related: ["social-media-marketing", "meta-ads", "ai-content-automation"]
  },
  {
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    headline: "Amplify Trust at Scale",
    tagline: "Drive awareness and conversions through data-driven influencer partnerships.",
    description: "We don't just pay for shoutouts. We build performance-driven influencer campaigns, tracking ROI down to the exact conversion, ensuring your brand aligns with authentic voices.",
    icon: "🌟",
    category: "Organic Growth",
    overview: {
      heading: "Data-Backed Influencer Campaigns",
      paragraphs: [
        "The creator economy is booming, but finding the right influencers and tracking their actual impact is difficult. We handle the entire lifecycle from discovery to payout.",
        "We focus on micro and macro-influencers with highly engaged audiences that match your ideal customer profile."
      ],
      bestFor: "D2C E-commerce, Fashion, Beauty, Tech Gadgets, and Lifestyle Apps.",
    },
    features: [
      "Creator Discovery & Vetting",
      "Campaign Strategy & Briefs",
      "Contract Negotiation",
      "Performance Tracking (UTMs/Codes)",
      "UGC Whitelisting for Ads",
      "Payout & Tax Management"
    ],
    process: [
      { step: "01", title: "Audience Analysis", description: "Identifying the right demographics and creator niches for your brand.", timeline: "Week 1" },
      { step: "02", title: "Outreach & Negotiation", description: "Contacting creators, negotiating rates, and securing contracts.", timeline: "Week 2" },
      { step: "03", title: "Content Creation", description: "Managing briefs and reviewing creator content before it goes live.", timeline: "Week 3" },
      { step: "04", title: "Launch & Analytics", description: "Tracking sales, engagement, and ROI for every individual creator.", timeline: "Week 4" }
    ],
    tools: ["Modash", "Klar", "Upfluence", "TikTok Creator Marketplace", "Shopify"],
    caseStudy: {
      brand: "GlowAura Skincare",
      icon: "✨",
      challenge: "High CPA on Meta ads, needed authentic social proof to drive conversions.",
      solution: "Launched a micro-influencer campaign with 50 creators, utilizing their UGC for whitelisted Meta Ads.",
      metrics: [
        { value: "50", label: "Creators Activated" },
        { value: "5.2x", label: "Campaign ROAS" },
        { value: "1.2M", label: "Organic Reach" },
        { value: "-40%", label: "Drop in Ad CPA" }
      ]
    },
    pricing: {
      starter: {
        price: "₹50,000",
        features: ["Micro-influencer Discovery", "Campaign Briefs", "Basic Tracking", "Monthly Reporting"]
      },
      growth: {
        price: "₹1,00,000",
        features: ["Macro-influencers", "UGC Whitelisting", "Contract Management", "Advanced ROI Tracking"]
      },
      scale: {
        price: "Custom",
        features: ["Always-on Ambassador Program", "Global Campaigns", "Creator Events", "Full Agency Management"]
      }
    },
    faqs: [
      { q: "How do you measure ROI from influencers?", a: "We use unique discount codes, custom UTM links, and dedicated landing pages to track exact sales attributed to each creator." },
      { q: "Do you handle the payments to influencers?", a: "Yes, we manage all contracts, deliverables, and financial payouts." },
      { q: "Can we use the influencer's content in our own ads?", a: "Yes, we specifically negotiate usage rights (whitelisting) so you can run paid ads using their authentic content." }
    ],
    related: ["social-media-marketing", "meta-ads", "affiliate-marketing"]
  },
  {
    slug: "analytics-reporting",
    title: "Analytics & Reporting",
    headline: "Data-Driven Marketing Decisions",
    tagline: "Turn messy marketing data into clear, actionable insights with custom analytics dashboards.",
    description: "Stop guessing what's working. We implement robust tracking, attribution modeling, and automated dashboards so you always know your true CPA, ROAS, and LTV.",
    icon: "📊",
    category: "Performance Ads",
    overview: {
      heading: "Total Visibility Over Your Funnel",
      paragraphs: [
        "In a multi-channel world, attribution is complex. We connect your ad platforms, website, and CRM to provide a single source of truth.",
        "Our custom dashboards give executives and marketers exactly the metrics they need, in real-time, without digging through spreadsheets."
      ],
      bestFor: "E-commerce, B2B SaaS, Agencies, and Multi-location Businesses.",
    },
    features: [
      "Google Tag Manager (GTM) Setup",
      "Server-Side Tracking (CAPI)",
      "Looker Studio Dashboards",
      "Multi-Touch Attribution",
      "GA4 Migration & Audit",
      "CRM & Sales Integration"
    ],
    process: [
      { step: "01", title: "Tracking Audit", description: "Reviewing your current GA4, Pixel, and GTM setup for errors and gaps.", timeline: "Week 1" },
      { step: "02", title: "Implementation", description: "Deploying server-side tracking, custom events, and data layer variables.", timeline: "Week 2" },
      { step: "03", title: "Dashboard Build", description: "Designing visually intuitive dashboards tailored to your KPIs.", timeline: "Week 3" },
      { step: "04", title: "Training & Handoff", description: "Training your team on how to read and act on the new data.", timeline: "Week 4" }
    ],
    tools: ["Google Analytics 4", "Google Tag Manager", "Looker Studio", "TripleWhale", "Supermetrics"],
    caseStudy: {
      brand: "OmniRetail Group",
      icon: "🛍️",
      challenge: "Unable to accurately attribute sales across Google, Meta, and email, leading to wasted ad spend.",
      solution: "Implemented server-side tracking and built a unified Looker Studio dashboard integrating all platforms and Shopify.",
      metrics: [
        { value: "100%", label: "Data Accuracy" },
        { value: "20%", label: "Wasted Spend Saved" },
        { value: "4", label: "Platforms Unified" },
        { value: "Real-time", label: "Reporting Speed" }
      ]
    },
    pricing: {
      starter: {
        price: "₹25,000",
        features: ["GA4 Audit", "Basic GTM Setup", "Standard Dashboard", "One-time Delivery"]
      },
      growth: {
        price: "₹60,000",
        features: ["Server-Side Tracking", "E-commerce Events", "Custom Looker Studio", "Monthly Maintenance"]
      },
      scale: {
        price: "Custom",
        features: ["Multi-touch Attribution", "Data Warehouse Integration", "Predictive Analytics", "Dedicated Analyst"]
      }
    },
    faqs: [
      { q: "Why do I need server-side tracking?", a: "With ad blockers and Apple's iOS privacy updates (ATT), browser-based pixels miss up to 30% of conversions. Server-side tracking restores that lost data." },
      { q: "What dashboard software do you use?", a: "We primarily build in Google Looker Studio because it's free, highly customizable, and integrates seamlessly with most marketing data sources." },
      { q: "Can you pull data from our custom CRM?", a: "Yes, we can use APIs or tools like Make/Zapier to pull data from your CRM into your reporting dashboards." }
    ],
    related: ["google-ads", "meta-ads", "ecommerce-growth"]
  }
];

export function getMarketingServiceBySlug(slug: string): MarketingService | undefined {
  return marketingServicesData.find((service) => service.slug === slug);
}

