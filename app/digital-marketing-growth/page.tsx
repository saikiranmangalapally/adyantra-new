"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ServicesScrollingBar from "@/components/sections/ServicesScrollingBar";
import { DomainIcon } from "@/components/icons/DomainIcons";
import { AIGuideAvatar } from "@/components/icons/AIGuideAvatar";
import HeroWaveformStage from "@/components/hero/HeroWaveformStage";
import OurTeamExpertiseSection from "@/components/sections/OurTeamExpertiseSection";
import ExecutiveTabletMockup from "@/components/sections/ExecutiveTabletMockup";
import { ExecutionRoadmapVisual, DataAttributionVisual } from "@/components/sections/ExecutionAndAttributionVisuals";
import TransformCtaBannerVisual from "@/components/sections/TransformCtaBannerVisual";

export default function DigitalMarketingGrowthPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeEcoCategory, setActiveEcoCategory] = useState<string>("PERFORMANCE");

  // All 12 requested service categories formatted cleanly with Home page card structure
  const allServices = [
    {
      id: 1,
      category: "marketing",
      img: "/assets/img/service/illustrations/service-google-ppc.svg",
      title: "Performance Marketing",
      desc: "Design and manage measurable paid acquisition systems across major advertising platforms (Google, Meta, LinkedIn, PMax, Retargeting).",
      href: "/performance-marketing",
    },
    {
      id: 2,
      category: "marketing",
      img: "/assets/img/service/illustrations/service-seo.svg",
      title: "SEO & Organic Growth",
      desc: "Technical SEO, On-Page, Off-Page, Local Map Packs, E-commerce SEO, and authority building for high-intent organic search.",
      href: "/seo",
    },
    {
      id: 3,
      category: "marketing",
      img: "/assets/img/service/illustrations/service-social-meta.svg",
      title: "Social Media & Meta Ads",
      desc: "Scale brand visibility across Instagram, Facebook, and LinkedIn with viral Reels, Shorts, Paid Social, and Community Growth.",
      href: "/social-media-marketing",
    },
    {
      id: 4,
      category: "marketing",
      img: "/assets/img/service/illustrations/service-content-automation.svg",
      title: "Content Marketing",
      desc: "Position content as an acquisition and conversion asset: SEO Content, Blog Assets, Copywriting, and AI-assisted repurposing.",
      href: "/ai-content-automation",
    },
    {
      id: 5,
      category: "marketing",
      img: "/assets/img/service/illustrations/service-email-workflows.svg",
      title: "Email & Lead Nurturing",
      desc: "Automate the complete customer lifecycle with Drip Campaigns, Welcome Sequences, Onboarding, and Retention workflows.",
      href: "/marketing-automation",
    },
    {
      id: 6,
      category: "automation",
      img: "/assets/img/service/illustrations/service-ai-agents.svg",
      title: "AI Marketing & Automation",
      desc: "Turn repetitive operations into automated systems: AI Lead Gen, Sales Automation, Content Pipelines, Chatbots, n8n, Make & Zapier.",
      href: "/ai-automation",
    },
    {
      id: 7,
      category: "design",
      img: "/assets/img/service/illustrations/service-ai-video.svg",
      title: "Video & Creative Marketing",
      desc: "Transform 1 core creative asset into Instagram Reels, Meta Ads, YouTube Shorts, and Motion Graphics for maximum reach.",
      href: "/ai-video-marketing",
    },
    {
      id: 8,
      category: "design",
      img: "/assets/img/service/illustrations/service-web-development.svg",
      title: "Web Design & Development",
      desc: "We build digital experiences that turn traffic into action. Custom Next.js, React, Landing Pages, and CRO engineering.",
      href: "/web-design-development",
    },
    {
      id: 9,
      category: "marketing",
      img: "/assets/img/service/illustrations/service-ecommerce.svg",
      title: "E-Commerce Growth",
      desc: "Amazon PPC, Flipkart Marketing, Shopify Custom Storefronts, Google Shopping, D2C Marketing, and Cart Recovery.",
      href: "/ecommerce-marketing",
    },
    {
      id: 10,
      category: "marketing",
      img: "/assets/img/service/illustrations/service-influencer-marketing.svg",
      title: "Influencer & Affiliate Growth",
      desc: "Creator discovery, Instagram & YouTube campaigns, partner recruitment, referral tracking, and performance commission models.",
      href: "/influencer-marketing",
    },
    {
      id: 11,
      category: "marketing",
      img: "/assets/img/service/illustrations/service-branding-creative.svg",
      title: "PR & Digital Reputation",
      desc: "Build visibility, build authority, and protect brand reputation through press releases, media outreach, and search control.",
      href: "/branding-creative-services",
    },
    {
      id: 12,
      category: "automation",
      img: "/assets/img/service/illustrations/service-analytics.svg",
      title: "Analytics & Marketing Intelligence",
      desc: "GA4, Google Tag Manager, Meta CAPI, Server Attribution, Looker Studio Dashboards, and Live Marketing Command Centers.",
      href: "/analytics-reporting",
    },
    {
      id: 13,
      category: "marketing",
      img: "/assets/img/service/illustrations/service-lead-generation.svg",
      title: "Lead Generation Systems",
      desc: "Capture, verify, and route high-intent leads automatically with scoring models and instant qualification.",
      href: "/lead-generation",
    },
    {
      id: 14,
      category: "automation",
      img: "/assets/img/service/illustrations/service-crm-automation.svg",
      title: "CRM Automation",
      desc: "Eliminate manual data entry and auto-sync records across HubSpot, Zoho, and Salesforce pipelines.",
      href: "/crm-automation",
    },
    {
      id: 15,
      category: "automation",
      img: "/assets/img/service/illustrations/service-ai-agents.svg",
      title: "AI Agent Development",
      desc: "Build autonomous multi-agent systems for tool use, API calling, long-term memory, and task execution.",
      href: "/ai-agent-development",
    },
    {
      id: 16,
      category: "automation",
      img: "/assets/img/service/illustrations/service-whatsapp-crm.svg",
      title: "WhatsApp & Sales Follow-Up",
      desc: "Official WhatsApp Cloud API sequences for automated appointments, cart recovery, and deal closings.",
      href: "/whatsapp-crm",
    },
  ];

  const filteredServices =
    activeFilter === "all"
      ? allServices
      : allServices.filter((s) => s.category === activeFilter);

  // Ecosystem nodes definition for interactive node explorer
  const ecoNodes = [
    {
      id: "PERFORMANCE",
      label: "PERFORMANCE",
      color: "#ef5b52",
      img: "/assets/img/service/illustrations/service-google-ppc.svg",
      badge: "Paid Acquisition & High-ROAS",
      desc: "Design and scale predictive paid acquisition across Google Ads, Meta Ads, and LinkedIn B2B with multi-touch server attribution.",
      sub: ["Google Ads (Search & PMax)", "Meta & Instagram Retargeting", "LinkedIn B2B Conversion Funnels", "Conversion API (CAPI) Tracking"],
      meterScore: "96%",
      meterDash: "8.54",
      meterLabel1: "Target ROAS",
      meterLabel2: "Scaling Velocity",
      statVal: "4.8x",
      statLabel: "Average Blended ROAS"
    },
    {
      id: "SEO",
      label: "SEO & ORGANIC",
      color: "#7b4bf7",
      img: "/assets/img/service/illustrations/service-seo.svg",
      badge: "Search Authority & Organic Traffic",
      desc: "Dominate Google search with technical site architecture audits, programmatic keyword ranking, and authoritative backlink distribution.",
      sub: ["Technical Crawl & Speed Audits", "High-Intent Keyword Clusters", "E-commerce & Local Map Pack SEO", "High-Authority Digital PR Links"],
      meterScore: "94%",
      meterDash: "12.82",
      meterLabel1: "Search Authority",
      meterLabel2: "Top 3 Rankings",
      statVal: "+310%",
      statLabel: "Organic Traffic Lift"
    },
    {
      id: "SOCIAL",
      label: "SOCIAL & CREATIVE",
      color: "#de358d",
      img: "/assets/img/service/illustrations/service-social-meta.svg",
      badge: "Viral Reach & Brand Engagement",
      desc: "Capture high-velocity attention with platform-native Instagram Reels, YouTube Shorts, viral paid social ads, and community engagement.",
      sub: ["Viral Reels & Shorts Strategy", "Performance Ad Creative Testing", "Community Management & DMs", "Creator & Influencer Seeding"],
      meterScore: "92%",
      meterDash: "17.09",
      meterLabel1: "Engagement Rate",
      meterLabel2: "Audience Retention",
      statVal: "3.4M+",
      statLabel: "Monthly Impressions"
    },
    {
      id: "CONTENT",
      label: "CONTENT ENGINE",
      color: "#3b82f6",
      img: "/assets/img/service/illustrations/service-content-automation.svg",
      badge: "Acquisition & Conversion Storytelling",
      desc: "Position high-value content as an inbound revenue engine: thought leadership articles, case studies, conversion copy, and multi-format repurposing.",
      sub: ["SEO Pillar Content Assets", "Direct-Response Conversion Copy", "Multi-Format Video Repurposing", "AI-Assisted Editorial Workflows"],
      meterScore: "90%",
      meterDash: "21.36",
      meterLabel1: "Content Output",
      meterLabel2: "Editorial Efficiency",
      statVal: "10x",
      statLabel: "Asset Multiplier"
    },
    {
      id: "AI",
      label: "AI & AUTOMATION",
      color: "#10b981",
      img: "/assets/img/service/illustrations/service-ai-agents.svg",
      badge: "Autonomous Agents & System Sync",
      desc: "Turn repetitive customer touchpoints into automated revenue engines: custom WhatsApp AI chatbots, automated lead qualification, and CRM synchronization.",
      sub: ["24/7 WhatsApp AI Chatbots", "Instant CRM Enrichment & Sync", "n8n, Make & Zapier Workflows", "Autonomous SDR Appointment Bots"],
      meterScore: "99%",
      meterDash: "2.14",
      meterLabel1: "Automation Accuracy",
      meterLabel2: "Pipeline Sync",
      statVal: "<10s",
      statLabel: "Lead Response Time"
    },
    {
      id: "CREATIVE",
      label: "BRAND & CREATIVE",
      color: "#f59e0b",
      img: "/assets/img/service/illustrations/service-ai-video.svg",
      badge: "High-Converting Design Assets",
      desc: "Engineered visual identities, motion graphics, 3D assets, and high-CTR advertising collateral built specifically to drive user action.",
      sub: ["High-CTR Ad Creative Packs", "3D Modeling & Motion Graphics", "Brand Identity Guidelines", "Landing Page Visual Design"],
      meterScore: "95%",
      meterDash: "10.68",
      meterLabel1: "Hook Retention",
      meterLabel2: "Click-Through Lift",
      statVal: "+65%",
      statLabel: "Ad Click-Through Rate"
    },
    {
      id: "WEB",
      label: "WEB & APPS",
      color: "#6366f1",
      img: "/assets/img/service/illustrations/service-web-development.svg",
      badge: "Modern Next.js & React Engineering",
      desc: "Fast, responsive web applications engineered with Next.js, React, and server-side optimization to convert traffic into paying customers.",
      sub: ["Custom Next.js Web Platforms", "Conversion Rate Optimization (CRO)", "Interactive Calculators & Portals", "Sub-Second Global Page Speed"],
      meterScore: "98%",
      meterDash: "4.27",
      meterLabel1: "Core Web Vitals",
      meterLabel2: "Speed Performance",
      statVal: "99/100",
      statLabel: "Lighthouse Performance"
    },
    {
      id: "ECOMMERCE",
      label: "E-COMMERCE",
      color: "#ec4899",
      img: "/assets/img/service/illustrations/service-ecommerce.svg",
      badge: "Storefront CRO & Marketplace Scale",
      desc: "Scale direct-to-consumer and marketplace sales with custom Shopify storefronts, Amazon & Flipkart PPC, and abandoned checkout recovery.",
      sub: ["Custom Shopify Storefronts", "Amazon & Marketplace PPC", "Automated Cart Abandonment Drips", "1-Click Frictionless Checkout"],
      meterScore: "93%",
      meterDash: "14.95",
      meterLabel1: "Cart Completion",
      meterLabel2: "Storefront Velocity",
      statVal: "+42%",
      statLabel: "Checkout Conversion Lift"
    },
    {
      id: "ANALYTICS",
      label: "ANALYTICS & INTEL",
      color: "#06b6d4",
      img: "/assets/img/service/illustrations/service-crm-automation.svg",
      badge: "Full-Funnel Data Attribution",
      desc: "Eliminate blind spots with Google Analytics 4, Tag Manager, Meta CAPI server events, Looker Studio dashboards, and executive reporting.",
      sub: ["GA4 & Server Tag Manager", "Meta & Google CAPI Integration", "Multi-Touch Attribution Models", "Real-Time Executive Dashboards"],
      meterScore: "100%",
      meterDash: "0",
      meterLabel1: "Data Accuracy",
      meterLabel2: "Attribution Fidelity",
      statVal: "100%",
      statLabel: "Tracking Completeness"
    },
    {
      id: "PR",
      label: "PR & REPUTATION",
      color: "#8b5cf6",
      img: "/assets/img/service/illustrations/service-branding-creative.svg",
      badge: "Media Distribution & Digital Authority",
      desc: "Build credibility and digital market leadership through targeted tier-1 media placements, press releases, and executive reputation management.",
      sub: ["Tier-1 Media Distribution", "Executive Thought Leadership", "Brand Reputation Monitoring", "SEO-Driven Digital PR Assets"],
      meterScore: "89%",
      meterDash: "23.50",
      meterLabel1: "Media Placements",
      meterLabel2: "Brand Authority",
      statVal: "50+",
      statLabel: "Featured Publications"
    }
  ];

  // 6-Stage continuous growth pipeline
  const pipelineStages = [
    { step: "01", name: "ATTRACT", tag: "Paid & Organic", desc: "Google Ads, Meta Ads & Technical SEO", nodeRef: "PERFORMANCE" },
    { step: "02", name: "ENGAGE", tag: "Creative & Media", desc: "Platform-Native Reels & Motion Creative", nodeRef: "SOCIAL" },
    { step: "03", name: "CONVERT", tag: "Speed & UX", desc: "Next.js Web Applications & Landing CRO", nodeRef: "WEB" },
    { step: "04", name: "TRANSACT", tag: "Stores & Cart", desc: "Shopify Storefronts & 1-Click Checkout", nodeRef: "ECOMMERCE" },
    { step: "05", name: "NURTURE", tag: "Autonomous AI", desc: "24/7 WhatsApp Chatbots & CRM Sequences", nodeRef: "AI" },
    { step: "06", name: "SCALE", tag: "Attribution & LTV", desc: "Meta CAPI, GA4 & Multi-Touch Attribution", nodeRef: "ANALYTICS" },
  ];

  const currentEco = ecoNodes.find((n) => n.id === activeEcoCategory) || ecoNodes[0];

  // FAQ List
  const faqs = [
    { q: "What digital marketing services does Adyantra provide?", a: "Adyantra provides an end-to-end digital growth system encompassing Performance Marketing (Google, Meta, LinkedIn Ads), Technical SEO, AI Automation & Chatbots, Web & App Development, Content Strategy, E-commerce Growth, PR, and Marketing Analytics." },
    { q: "Does Adyantra manage Google Ads and Meta Ads?", a: "Yes. We design, execute, and continuously optimize Performance Max, Search, Display, Meta (Instagram/Facebook) Retargeting, and LinkedIn campaigns centered on CPL, ROAS, and qualified revenue." },
    { q: "What SEO services does Adyantra provide?", a: "We cover Technical SEO audits, Programmatic SEO, On-page Optimization, High-authority Backlink Acquisition, Local Map Pack SEO, and E-commerce Search Engine Optimization." },
    { q: "Does Adyantra provide AI marketing automation?", a: "Yes. We build custom AI Agents, n8n/Make/Zapier pipeline integrations, automated CRM lead scoring, WhatsApp AI sales bots, and AI-assisted content repurposing workflows." },
    { q: "Can Adyantra integrate WhatsApp with CRM?", a: "Absolutely. We build two-way WhatsApp API integrations that sync directly with HubSpot, Salesforce, Zoho, or custom databases for real-time lead notification and automated chat conversations." },
    { q: "Does Adyantra build websites and web applications?", a: "Yes. We build custom Next.js, React, and Shopify web applications engineered strictly for high speed, security, and conversion rate optimization." },
    { q: "Can I start with one service or combine them?", a: "You can start with a targeted single service (e.g. Meta Ads or AI Chatbot) or leverage our full connected digital growth ecosystem tailored to your revenue goals." },
    { q: "How does Adyantra measure marketing performance?", a: "We track verified bottom-line KPIs including Cost Per Lead (CPL), Return On Ad Spend (ROAS), Customer Acquisition Cost (CAC), and pipeline revenue using GA4, Meta CAPI, and custom analytics dashboards." }
  ];

  return (
    <main className="services-page-root min-h-screen overflow-x-hidden">
      {/* ═══════════════════ SECTION 1: HERO (HOME PAGE 3D TUNNEL & WAVEFORM) ═══════════════════ */}
      <section className="ady-hero-section relative overflow-hidden" id="home">
        <div className="ady-canvas-container">
          <div className="ady-hero-card">
            {/* 3D Concentric Oval Tunnel */}
            <div className="ady-tunnel-container" id="adyTunnel">
              <div className="ady-tunnel-ring ady-ring-outermost" />
              <div className="ady-tunnel-ring ady-ring-7" />
              <div className="ady-tunnel-ring ady-ring-6" />
              <div className="ady-tunnel-ring ady-ring-5" />
              <div className="ady-tunnel-ring ady-ring-4" />
              <div className="ady-tunnel-ring ady-ring-3" />
              <div className="ady-tunnel-ring ady-ring-2" />
              <div className="ady-tunnel-ring ady-ring-1" />
              <div className="ady-tunnel-ring ady-center-well" />
            </div>

            {/* Typography */}
            <div className="ady-hero-content">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-xs font-semibold tracking-wider text-[#ef5b52] mb-4 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#ef5b52] animate-pulse" />
                Digital Marketing • AI • Automation
              </div>

              <h1 className="ady-main-title">
                <span className="ady-title-line1">Digital Growth Engineered with AI</span>
                <span className="ady-title-line2">Build a Digital Growth System</span>
                <span className="ady-title-line3">That Scales.</span>
              </h1>
              <p className="ady-subtitle">
                Performance marketing, SEO, social, content, creative, web, e-commerce and AI automation — connected into one measurable growth engine.
              </p>

              {/* Action Buttons */}
              <div className="ady-cta-group">
                <Link href="/contact" className="ady-btn-dark">
                  <span>Start Your Project</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
                <a href="#services-grid" className="ady-btn-ghost">
                  <span>Explore Services</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Waveform Stage with Unbroken Luminous Curve, Floating Squircles & AI Assistant */}
            <HeroWaveformStage />
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 2: SERVICES SCROLLING RIBBON ═══════════════════ */}
      <ServicesScrollingBar />

      {/* ═══════════════════ SECTION 3: SERVICES GRID WITH TABS (HOME PAGE CARDS) ═══════════════════ */}
      <section className="section services-ref-section" id="services-grid" aria-labelledby="services-ref-title">
        <div className="shell">
          <div className="services-ref-header services-ref-header--centered">
            <span className="ref-pill-kicker">EVERYTHING YOUR DIGITAL GROWTH NEEDS. IN ONE SYSTEM.</span>
            <h2 id="services-ref-title" className="services-ref-heading">
              12 Integrated Growth Modules &amp;
              <br />
              <span className="ady-gradient-text">AI Automation Services</span>
            </h2>
            <p className="services-ref-subtitle">
              From customer acquisition to automation and retention, Adyantra brings the key digital growth functions together under one strategic framework.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="services-filter-tabs">
            <button
              className={`services-tab ${activeFilter === "all" ? "services-tab--active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              ALL 12 SERVICES
            </button>
            <button
              className={`services-tab ${activeFilter === "marketing" ? "services-tab--active" : ""}`}
              onClick={() => setActiveFilter("marketing")}
            >
              PERFORMANCE &amp; MARKETING
            </button>
            <button
              className={`services-tab ${activeFilter === "design" ? "services-tab--active" : ""}`}
              onClick={() => setActiveFilter("design")}
            >
              WEB, CREATIVE &amp; D2C
            </button>
            <button
              className={`services-tab ${activeFilter === "automation" ? "services-tab--active" : ""}`}
              onClick={() => setActiveFilter("automation")}
            >
              AI &amp; AUTOMATION
            </button>
          </div>

          {/* 12 Service Cards Grid in Home Page Card Style */}
          <div className="services-ref-grid services-ref-grid--9">
            {filteredServices.map((item) => {
              // Map anchor IDs for navbar dropdown compatibility
              const anchorMap: Record<number, string> = {
                1: "google-ads",
                2: "seo",
                3: "meta-ads",
                4: "content",
                5: "email",
                6: "automation",
                7: "video",
                8: "web",
                9: "ecommerce",
                10: "influencer",
                11: "pr",
                12: "analytics",
                13: "leads",
                14: "crm",
                15: "ai-agents",
                16: "whatsapp",
              };
              const cardId = anchorMap[item.id] || `service-card-${item.id}`;

              return (
                <article key={item.id} id={cardId} className="service-ref-card scroll-mt-28" data-category={item.category}>
                  {/* 1. Image (First - Large Visual Stage) */}
                  <div className="service-ref-card__visual">
                    <Link href={item.href} className="block">
                      <img src={item.img} alt={item.title} loading="lazy" />
                    </Link>
                  </div>

                  {/* 2. Title (Second) */}
                  <h3 className="service-ref-card__title">
                    <Link href={item.href}>{item.title}</Link>
                  </h3>

                  {/* 3. Subtitle / Content (Third) */}
                  <p className="service-ref-card__desc">{item.desc}</p>

                  {/* 4. Button (Fourth - Read more pill button) */}
                  <div className="service-ref-card__action">
                    <Link href={item.href} className="service-ref-readmore-btn">
                      <span>Read more</span>
                      <span className="readmore-btn-arrow">&rarr;</span>
                    </Link>
                  </div>
                </article>
              );
          })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 4: SYSTEM VISUALIZATION / EXPERTISE SHOWCASE (REFERENCE DESIGN) ═══════════════════ */}
      <section className="section expert-showcase-section" id="ecosystem" aria-labelledby="expert-showcase-heading">
        <div className="shell">
          {/* Top Header Grid: Left Headline & Right Tablet Preview */}
          <div className="expert-top-grid">
            <div className="expert-header-left">
              <span className="expert-kicker-pill">
                <span className="expert-kicker-dot" />
                Our Expertise
              </span>
              <h2 id="expert-showcase-heading" className="expert-main-heading">
                Boost Your Brand with Strategic <br />
                <span className="ady-gradient-text">Social Media &amp; Digital Marketing</span>
              </h2>
              <p className="expert-main-desc">
                Maximize engagement, build loyal customer communities, and drive predictable conversions across all major platforms with custom-engineered data, creative performance, and autonomous intelligence.
              </p>
            </div>

            <div className="expert-tablet-card w-full">
              <ExecutiveTabletMockup title="Integrated Growth Engine Architecture" />
            </div>
          </div>

          {/* Main Content Split Grid: Left Content (65%) & Right Sidebar (35%) */}
          <div className="expert-split-grid">
            {/* Left Column: Overview + Dual Photos + What's Included */}
            <div className="expert-content-col">
              {/* Overview Block */}
              <div className="expert-overview-block">
                <h3 className="expert-section-title">Overview</h3>
                <p className="expert-overview-text">
                  At Adyantra, we help brands grow through custom-tailored marketing and automation strategies that connect deeply with your audience. From content creation to multi-channel campaign optimization, we make sure your presence on platforms like Instagram, Facebook, LinkedIn, Google, and TikTok stands out. Whether you’re launching a new brand or scaling an existing enterprise, our experts turn fragmented marketing into a powerful, compounding growth engine.
                </p>
              </div>

              {/* Two Side-by-Side Images */}
              <div className="expert-dual-images grid grid-cols-1 md:grid-cols-2 gap-4">
                <ExecutionRoadmapVisual />
                <DataAttributionVisual />
              </div>
            </div>

            {/* Right Column: Recent Services + Transform Banner */}
            <aside className="expert-sidebar-col">
              {/* Card 1: Recent Services */}
              <div className="expert-recent-services-card">
                <h4 className="expert-recent-title">Recent Services</h4>
                <div className="expert-accent-line" style={{ width: "45px" }} />
                <ul className="expert-recent-list">
                  <li className="expert-recent-item">
                    <span className="expert-check-icon">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.2)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Social Media Marketing</span>
                  </li>
                  <li className="expert-recent-item">
                    <span className="expert-check-icon">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.2)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Content Marketing</span>
                  </li>
                  <li className="expert-recent-item">
                    <span className="expert-check-icon">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.2)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>PPC Advertising</span>
                  </li>
                  <li className="expert-recent-item">
                    <span className="expert-check-icon">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.2)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Email Marketing</span>
                  </li>
                  <li className="expert-recent-item">
                    <span className="expert-check-icon">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.2)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Branding &amp; Design</span>
                  </li>
                  <li className="expert-recent-item">
                    <span className="expert-check-icon">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.2)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Web Development</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: Transform CTA Card */}
              <div className="expert-cta-card">
                <TransformCtaBannerVisual />
                <div className="expert-cta-overlay" />
                <div className="expert-cta-content">
                  <h4 className="expert-cta-heading">
                    Transform <br />
                    Your Business <br />
                    with <span className="ady-gradient-text">Adyantra!</span>
                  </h4>
                  <p className="expert-cta-desc">
                    Take your digital marketing to the next level with data-driven strategies and innovative solutions. Let’s create something amazing together!
                  </p>
                  <a
                    href="#contact"
                    className="shadcn-input-button-solid"
                    style={{ marginTop: "10px", width: "100%", justifyContent: "space-between" }}
                  >
                    <span>Book A Discovery Call</span>
                    <span className="badge-icon">→</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 5: ABOUT US / CORE TECHNICAL PILLARS (HOME PAGE SECTION) ═══════════════════ */}
      <section className="section about" id="about" aria-labelledby="about-title">
        <div className="shell split-layout split-layout--about">
          <div className="copy-block about-copy">
            <span className="ref-pill-kicker">ABOUT ADYANTRA DIGITAL</span>
            <h2 id="about-title" className="about-headline">
              Engineering Measurable Digital Advantage <br />
              <span className="ady-gradient-text">For Scaling Businesses.</span>
            </h2>
            <p>
              Adyantra Digital is a premier technology-first digital marketing and AI automation agency. Over 6+ years, we have partnered with 50+ growth-focused companies to turn their online footprint into a reliable customer engine.
            </p>
            <p>
              By uniting modern web application engineering, performance marketing analytics, and custom AI workflow automation, we eliminate digital inefficiencies and deliver transparent, high-ROAS returns.
            </p>
            <Link className="text-link" href="/about">
              Read our full story <b>&rarr;</b>
            </Link>
          </div>
          <div className="pillar-panel">
            <span className="ref-pill-kicker">CORE TECHNICAL PILLARS</span>
            <h3>Our core competencies driving sustained growth for clients.</h3>
            <ol>
              <li><span>Technical SEO &amp; Organic Keyword Ranking</span><b>01</b></li>
              <li><span>High-ROAS Meta &amp; Google Performance Ads</span><b>02</b></li>
              <li><span>Custom Next.js &amp; React Web Application Dev</span><b>03</b></li>
              <li><span>Scalable E-Commerce &amp; Checkout Optimization</span><b>04</b></li>
              <li><span>Brand Identity, UI/UX &amp; Strategic PR</span><b>05</b></li>
              <li><span>WhatsApp AI Chatbots &amp; Workflow Automation</span><b>06</b></li>
            </ol>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 8: TARGET DOMAIN EXPERTISE (HOME PAGE MARQUEE) ═══════════════════ */}
      <section className="section industries-ref-section" id="industries" aria-labelledby="industries-ref-title">
        <div className="industries-ref-glow" />
        <div className="shell">
          <div className="section-heading section-heading--center">
            <span className="ref-pill-kicker">TARGET DOMAIN EXPERTISE</span>
            <h2 id="industries-ref-title" className="industries-ref-heading">
              Domains <span className="ady-gradient-text">We Serve</span>
            </h2>
            <p className="industries-ref-subtitle">
              Custom digital marketing strategies and AI automation solutions tailored for high-growth business sectors.
            </p>
          </div>
        </div>

        <div className="domains-marquee-wrap">
          <div className="domains-marquee-track">
            <div className="domain-pill-card">
              <span className="domain-pill-text">Education &amp; Academies</span>
              <span className="domain-pill-icon"><DomainIcon name="education" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">Fashion &amp; D2C Apparel</span>
              <span className="domain-pill-icon"><DomainIcon name="fashion" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">NGOs &amp; Non-Profits</span>
              <span className="domain-pill-icon"><DomainIcon name="ngo" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">Other Enterprises &amp; Businesses</span>
              <span className="domain-pill-icon"><DomainIcon name="enterprise" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">IT &amp; Software Enterprises</span>
              <span className="domain-pill-icon"><DomainIcon name="software" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">Real Estate &amp; Housing</span>
              <span className="domain-pill-icon"><DomainIcon name="realestate" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">Healthcare &amp; Clinics</span>
              <span className="domain-pill-icon"><DomainIcon name="healthcare" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">E-Commerce &amp; Retail Brands</span>
              <span className="domain-pill-icon"><DomainIcon name="ecommerce" /></span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 9: ACCELERATE YOUR REVENUE BANNER (HOME PAGE) ═══════════════════ */}
      <section className="growth-banner" id="growth-banner" aria-labelledby="growth-title">
        <div className="shell">
          <div>
            <p className="kicker">Accelerate your revenue</p>
            <h2 id="growth-title">
              Ready to scale your business with <em>performance ads &amp; AI automation?</em>
            </h2>
          </div>
          <div className="growth-banner__action">
            <p>Book a 30-minute discovery call with our technical strategy team to audit your current sales funnel and receive a custom digital expansion plan.</p>
            <Link className="button button--coral" href="/contact">
              Book strategy call <b>&rarr;</b>
            </Link>
          </div>
          <div className="stat-row" aria-label="Adyantra results">
            <div><b>06+</b><span>Years of Industry Expertise</span></div>
            <div><b>50+</b><span>High-Growth Brands Scaled</span></div>
            <div><b>100%</b><span>In-House Engineering</span></div>
            <div><b>Zero</b><span>Outsourced Work</span></div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 10: OUR PROVEN PROCESS (HOME PAGE 4-STEP GRID) ═══════════════════ */}
      <section className="section process" aria-labelledby="process-title">
        <div className="shell">
          <div className="section-heading section-heading--center">
            <span className="ref-pill-kicker">OUR PROVEN PROCESS</span>
            <h2 id="process-title">
              A Transparent <span className="ady-gradient-text">6-Step Growth Methodology</span>
            </h2>
            <p>Our structured 6-phase framework ensures rapid deployment, data-driven optimization, and predictable scaling.</p>
          </div>
          <div className="process-grid">
            <article>
              <span>01</span>
              <h3>Discovery &amp; Funnel Audit</h3>
              <p>We audit your digital presence, advertising accounts, search rankings, tech stack, and competitor positioning.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Strategize &amp; Roadmap</h3>
              <p>Channel allocation, audience strategy, growth roadmap, and automation architecture.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Build &amp; Execute</h3>
              <p>Campaigns, creative assets, Next.js web build, tracking setup, and AI workflow integration.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Launch &amp; Deploy</h3>
              <p>Deploy campaigns, launch automations, and activate real-time conversion tracking.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════════════════ THE ADYANTRA ADVANTAGE (OUR TEAM & EXPERTISE) ═══════════════════ */}
      <OurTeamExpertiseSection />

      {/* ═══════════════════ SECTION 11: CLIENT REVIEWS (HOME PAGE MARQUEE) ═══════════════════ */}
      <section className="section reviews-ref-section" id="testimonials" aria-labelledby="reviews-ref-title">
        <div className="shell">
          <div className="section-heading section-heading--center">
            <span className="ref-pill-kicker">CLIENT REVIEWS</span>
            <h2 id="reviews-ref-title" className="reviews-ref-heading">
              What Our <span className="ady-gradient-text">Clients Say</span>
            </h2>
            <p className="reviews-ref-subtitle">
              Real feedback from 50+ scaling brands and business owners we partner with.
            </p>
          </div>
        </div>

        <div className="reviews-marquee-wrap">
          <div className="reviews-marquee-track">
            {/* Review Cards */}
            <article className="review-ref-card review-card--scroll">
              <div className="review-ref-card__top">
                <div className="review-ref-client">
                  <div className="review-ref-avatar avatar--purple">PJ</div>
                  <div className="review-ref-meta">
                    <h3 className="review-ref-name">Pravalika J.</h3>
                    <span className="review-ref-role-pill">Education Institution &bull; Leadership</span>
                  </div>
                </div>
                <div className="review-ref-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
              </div>
              <blockquote className="review-ref-quote">
                &ldquo;Adyantra solved our inconsistent student enrolment numbers. Their team redesigned our course landing pages and automated our lead follow-up workflows, doubling our overall enquiry conversion rate.&rdquo;
              </blockquote>
            </article>

            <article className="review-ref-card review-card--scroll">
              <div className="review-ref-card__top">
                <div className="review-ref-client">
                  <div className="review-ref-avatar avatar--indigo">PK</div>
                  <div className="review-ref-meta">
                    <h3 className="review-ref-name">Pramode K.</h3>
                    <span className="review-ref-role-pill">Enterprise Business &bull; Owner</span>
                  </div>
                </div>
                <div className="review-ref-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
              </div>
              <blockquote className="review-ref-quote">
                &ldquo;A pragmatic and performance-focused team. Adyantra prioritizes actual revenue and customer acquisition over vanity metrics. Their hands-on technical guidance makes them a key growth partner.&rdquo;
              </blockquote>
            </article>

            <article className="review-ref-card review-card--scroll">
              <div className="review-ref-card__top">
                <div className="review-ref-client">
                  <div className="review-ref-avatar avatar--violet">MD</div>
                  <div className="review-ref-meta">
                    <h3 className="review-ref-name">Mani Deep M.</h3>
                    <span className="review-ref-role-pill">Real Estate &bull; Executive</span>
                  </div>
                </div>
                <div className="review-ref-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
              </div>
              <blockquote className="review-ref-quote">
                &ldquo;Adyantra streamlined our lead capture and WhatsApp CRM follow-ups for premium housing projects. The real estate market demands fast communication, and their automated systems gave our sales team a major edge.&rdquo;
              </blockquote>
            </article>

            <article className="review-ref-card review-card--scroll">
              <div className="review-ref-card__top">
                <div className="review-ref-client">
                  <div className="review-ref-avatar avatar--rose">SK</div>
                  <div className="review-ref-meta">
                    <h3 className="review-ref-name">Shiva Kumar M.</h3>
                    <span className="review-ref-role-pill">Real Estate Developer</span>
                  </div>
                </div>
                <div className="review-ref-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
              </div>
              <blockquote className="review-ref-quote">
                &ldquo;Adyantra completely transformed our property lead pipeline. Their targeted campaigns produced genuine site visit enquiries rather than junk leads, scaling our closed transaction value significantly.&rdquo;
              </blockquote>
            </article>

            <article className="review-ref-card review-card--scroll">
              <div className="review-ref-card__top">
                <div className="review-ref-client">
                  <div className="review-ref-avatar avatar--cyan">ST</div>
                  <div className="review-ref-meta">
                    <h3 className="review-ref-name">Sai Teja M.</h3>
                    <span className="review-ref-role-pill">Healthcare &bull; Clinic Director</span>
                  </div>
                </div>
                <div className="review-ref-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
              </div>
              <blockquote className="review-ref-quote">
                &ldquo;Our goal was building digital credibility and increasing patient consultations. The campaign was transparent, compliant, and highly professional, resulting in a 4x increase in patient bookings.&rdquo;
              </blockquote>
            </article>

            <article className="review-ref-card review-card--scroll">
              <div className="review-ref-card__top">
                <div className="review-ref-client">
                  <div className="review-ref-avatar avatar--purple">VK</div>
                  <div className="review-ref-meta">
                    <h3 className="review-ref-name">Vamshi Krishna</h3>
                    <span className="review-ref-role-pill">Enterprise Business Owner</span>
                  </div>
                </div>
                <div className="review-ref-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
              </div>
              <blockquote className="review-ref-quote">
                &ldquo;Their strategic execution is grounded in bottom-line profitability, technical expertise, and dedicated support. They helped us scale organic pipeline while drastically reducing customer acquisition costs.&rdquo;
              </blockquote>
            </article>

            {/* Duplicate Set for Loop */}
            <article className="review-ref-card review-card--scroll">
              <div className="review-ref-card__top">
                <div className="review-ref-client">
                  <div className="review-ref-avatar avatar--purple">PJ</div>
                  <div className="review-ref-meta">
                    <h3 className="review-ref-name">Pravalika J.</h3>
                    <span className="review-ref-role-pill">Education Institution &bull; Leadership</span>
                  </div>
                </div>
                <div className="review-ref-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
              </div>
              <blockquote className="review-ref-quote">
                &ldquo;Adyantra solved our inconsistent student enrolment numbers. Their team redesigned our course landing pages and automated our lead follow-up workflows, doubling our overall enquiry conversion rate.&rdquo;
              </blockquote>
            </article>

            <article className="review-ref-card review-card--scroll">
              <div className="review-ref-card__top">
                <div className="review-ref-client">
                  <div className="review-ref-avatar avatar--indigo">PK</div>
                  <div className="review-ref-meta">
                    <h3 className="review-ref-name">Pramode K.</h3>
                    <span className="review-ref-role-pill">Enterprise Business &bull; Owner</span>
                  </div>
                </div>
                <div className="review-ref-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
              </div>
              <blockquote className="review-ref-quote">
                &ldquo;A pragmatic and performance-focused team. Adyantra prioritizes actual revenue and customer acquisition over vanity metrics. Their hands-on technical guidance makes them a key growth partner.&rdquo;
              </blockquote>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 12: FAQ SECTION (HOME PAGE ACCORDION) ═══════════════════ */}
      <section className="section faq" id="faq" aria-labelledby="faq-title">
        <div className="shell faq-layout">
          <div className="section-heading">
            <span className="ref-pill-kicker">CLEAR ANSWERS</span>
            <h2 id="faq-title">
              Frequently Asked <br />
              <span className="ady-gradient-text">Questions</span>
            </h2>
            <p>Everything you need to know about our growth frameworks, technical execution, timelines, and reporting.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <details key={idx} open={idx === 0}>
                <summary>
                  {faq.q}<b>+</b>
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 13: CONTACT SECTION (HOME PAGE FORM) ═══════════════════ */}
      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="shell contact__grid">
          <div className="contact__copy">
            <span className="ref-pill-kicker">CONNECT WITH OUR TEAM</span>
            <h2 id="contact-title">
              Ready to build your <span className="ady-gradient-text">growth engine?</span>
            </h2>
            <p>Connect your marketing, technology and automation into one scalable system.</p>
            <div className="contact-method">
              <span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef5b52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: "middle" }}>
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <div>
                <b>Email support</b>
                <a href="mailto:info@adyantra.in">info@adyantra.in</a>
              </div>
            </div>
            <div className="contact-method">
              <span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef5b52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: "middle" }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <b>Direct phone</b>
                <a href="tel:+918309275093">+91 83092 75093</a>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <h3>Request a Free Growth Audit</h3>
            <p>Fill out the form below and our strategy lead will connect with you within 24 hours.</p>
            <div className="field-row">
              <label>
                Your name
                <input required name="name" placeholder="John Doe" />
              </label>
              <label>
                Email address
                <input required type="email" name="email" placeholder="john@company.com" />
              </label>
            </div>
            <div className="field-row">
              <label>
                Phone number
                <input name="phone" placeholder="+91 83092 75093" />
              </label>
              <label>
                Services interested in
                <select name="service">
                  <option>Performance Marketing &amp; Ads</option>
                  <option>AI Marketing &amp; Automation</option>
                  <option>Web Design &amp; Development</option>
                  <option>SEO &amp; Organic Growth</option>
                  <option>E-commerce Growth</option>
                </select>
              </label>
            </div>
            <label>
              Project details
              <textarea name="details" rows={4} placeholder="Tell us a little about your goals" />
            </label>
            <button className="button button--primary" type="submit">
              Start Your Project <b>&rarr;</b>
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
