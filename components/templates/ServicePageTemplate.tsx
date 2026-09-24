"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ServicesScrollingBar from "@/components/sections/ServicesScrollingBar";
import ExecutiveTabletMockup from "@/components/sections/ExecutiveTabletMockup";
import { ExecutionRoadmapVisual, DataAttributionVisual } from "@/components/sections/ExecutionAndAttributionVisuals";
import TransformCtaBannerVisual from "@/components/sections/TransformCtaBannerVisual";
import { AIGuideAvatar } from "@/components/icons/AIGuideAvatar";
import HeroWaveformStage from "@/components/hero/HeroWaveformStage";
import OurTeamExpertiseSection from "@/components/sections/OurTeamExpertiseSection";

export interface ServicePageData {
  hero: {
    badge: string;
    title: React.ReactNode;
    description: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    pillars: string[];
  };
  intro?: {
    tagline: string;
    headline: string;
    description: string;
  };
  subServices: {
    title: string;
    desc: string;
    href: string;
    img: string;
  }[];
  processSteps: {
    title: string;
    description: string;
    timeline: string;
  }[];
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  faqData: {
    q: string;
    a: string;
  }[];
  stats?: {
    val: string;
    label: string;
  }[];
}

interface ServicePageTemplateProps {
  data: ServicePageData;
}

// Tailored stats resolver
function getServiceStats(badge: string, customStats?: { val: string; label: string }[]) {
  if (customStats && customStats.length >= 4) return customStats;

  const b = badge.toLowerCase();
  if (b.includes("ai") || b.includes("system") || b.includes("agent") || b.includes("workflow") || b.includes("crm")) {
    return [
      { val: "99.4%", label: "Automation Execution Rate" },
      { val: "< 15s", label: "Lead Response Latency" },
      { val: "10x", label: "Operational Throughput" },
      { val: "24/7", label: "Autonomous Uptime" },
    ];
  }
  if (b.includes("architecture") || b.includes("stack") || b.includes("integration") || b.includes("web") || b.includes("dev")) {
    return [
      { val: "99.99%", label: "Guaranteed SLA Uptime" },
      { val: "120+", label: "APIs & Pipelines Deployed" },
      { val: "< 100ms", label: "Data Sync Latency" },
      { val: "100%", label: "Zero-Trust Security" },
    ];
  }
  return [
    { val: "06+", label: "Years of Industry Expertise" },
    { val: "50+", label: "High-Growth Brands Scaled" },
    { val: "100%", label: "In-House Engineering" },
    { val: "Zero", label: "Outsourced Work" },
  ];
}

function getServiceIllustration(img?: string): string {
  if (!img) return "/assets/img/service/illustrations/service-seo.svg";
  const filename = img.split("/").pop()?.split("?")[0] || "";
  const mapping: Record<string, string> = {
    // Search & PPC
    "service-seo.svg": "/assets/img/service/illustrations/service-seo.svg",
    "seo-3d.png": "/assets/img/service/illustrations/service-seo.svg",
    "service-google-ppc.svg": "/assets/img/service/illustrations/service-google-ppc.svg",
    "ppc-3d.png": "/assets/img/service/illustrations/service-google-ppc.svg",
    // Social & Meta
    "service-social-meta.svg": "/assets/img/service/illustrations/service-social-meta.svg",
    "smm-3d.png": "/assets/img/service/illustrations/service-social-meta.svg",
    // Email & Workflows
    "service-email-workflows.svg": "/assets/img/service/illustrations/service-email-workflows.svg",
    "email-3d.png": "/assets/img/service/illustrations/service-email-workflows.svg",
    // Web Dev & Software
    "service-web-development.svg": "/assets/img/service/illustrations/service-web-development.svg",
    "webdev-3d.png": "/assets/img/service/illustrations/service-web-development.svg",
    // E-Commerce
    "service-ecommerce.svg": "/assets/img/service/illustrations/service-ecommerce.svg",
    "ecommerce-3d.png": "/assets/img/service/illustrations/service-ecommerce.svg",
    "ecommerce-automation.png": "/assets/img/service/illustrations/service-ecommerce.svg",
    // PR & Reputation
    "service-pr-reputation.svg": "/assets/img/service/illustrations/service-pr-reputation.svg",
    "pr-3d.png": "/assets/img/service/illustrations/service-pr-reputation.svg",
    // AI Chatbots & Systems
    "service-ai-chatbots.svg": "/assets/img/service/illustrations/service-ai-chatbots.svg",
    "ai-3d.png": "/assets/img/service/illustrations/service-ai-chatbots.svg",
    // Affiliate & Partners
    "service-affiliate-partners.svg": "/assets/img/service/illustrations/service-affiliate-partners.svg",
    "affiliate-3d.png": "/assets/img/service/illustrations/service-affiliate-partners.svg",
    // Lead Gen & CRM
    "service-lead-generation.svg": "/assets/img/service/illustrations/service-lead-generation.svg",
    "lead-generation.jpg": "/assets/img/service/illustrations/service-lead-generation.svg",
    "ai_leadgen.png": "/assets/img/service/illustrations/service-lead-generation.svg",
    "service-crm-automation.svg": "/assets/img/service/illustrations/service-crm-automation.svg",
    "crm-automation.jpg": "/assets/img/service/illustrations/service-crm-automation.svg",
    // Analytics
    "service-analytics.svg": "/assets/img/service/illustrations/service-analytics.svg",
    "service-analytics-review.svg": "/assets/img/service/illustrations/service-analytics.svg",
    // Dedicated New Vector SVGs
    "service-content-automation.svg": "/assets/img/service/illustrations/service-content-automation.svg",
    "content-automation.jpg": "/assets/img/service/illustrations/service-content-automation.svg",
    "service-ad-creative.svg": "/assets/img/service/illustrations/service-ad-creative.svg",
    "ad-creative-automation.jpg": "/assets/img/service/illustrations/service-ad-creative.svg",
    "service-customer-support.svg": "/assets/img/service/illustrations/service-customer-support.svg",
    "customer-support.jpg": "/assets/img/service/illustrations/service-customer-support.svg",
    "service-appointment-booking.svg": "/assets/img/service/illustrations/service-appointment-booking.svg",
    "appointment-booking.jpg": "/assets/img/service/illustrations/service-appointment-booking.svg",
    "service-sales-followup.svg": "/assets/img/service/illustrations/service-sales-followup.svg",
    "sales-followup.jpg": "/assets/img/service/illustrations/service-sales-followup.svg",
    "ai_sales.png": "/assets/img/service/illustrations/service-sales-followup.svg",
    "service-ai-architecture.svg": "/assets/img/service/illustrations/service-ai-architecture.svg",
    "service-ai-agents.svg": "/assets/img/service/illustrations/service-ai-agents.svg",
    "service-ai-systems.svg": "/assets/img/service/illustrations/service-ai-agents.svg",
    "ai_systems.png": "/assets/img/service/illustrations/service-ai-agents.svg",
    "service-workflow-integrations.svg": "/assets/img/service/illustrations/service-workflow-integrations.svg",
    "service-whatsapp-crm.svg": "/assets/img/service/illustrations/service-whatsapp-crm.svg",
    "service-ui-ux-design.svg": "/assets/img/service/illustrations/service-ui-ux-design.svg",
    "about-3d.png": "/assets/img/service/illustrations/service-ui-ux-design.svg",
    "service-mobile-apps.svg": "/assets/img/service/illustrations/service-mobile-apps.svg",
    "service-branding-creative.svg": "/assets/img/service/illustrations/service-branding-creative.svg",
    "service-influencer-marketing.svg": "/assets/img/service/illustrations/service-influencer-marketing.svg",
    "service-ai-audit.svg": "/assets/img/service/illustrations/service-ai-audit.svg",
    "service-audit-strategy.svg": "/assets/img/service/illustrations/service-ai-audit.svg",
    "service-ai-video.svg": "/assets/img/service/illustrations/service-ai-video.svg",
    "service-video.svg": "/assets/img/service/illustrations/service-ai-video.svg",
  };
  if (mapping[filename]) return mapping[filename];
  if (img.startsWith("/assets/img/service/illustrations/")) return img;
  return "/assets/img/service/illustrations/service-seo.svg";
}

export default function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const stats = getServiceStats(data.hero.badge, data.stats);

  const filteredSubServices =
    activeFilter === "all"
      ? data.subServices
      : data.subServices; // All services visible

  // RankWise Structured JSON-LD Data for SEO Rich Snippets
  const extractTitleText = (node: any): string => {
    if (!node) return "";
    if (typeof node === "string") return node;
    if (Array.isArray(node)) return node.map(extractTitleText).join(" ");
    if (node && node.props && node.props.children) return extractTitleText(node.props.children);
    return "";
  };
  const pageTitle = extractTitleText(data.hero.title) || data.hero.badge;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": `${pageTitle} | Adyantra Digital`,
        "provider": {
          "@type": "Organization",
          "name": "Adyantra Digital",
          "url": "https://adyantra.in"
        },
        "description": data.hero.description,
        "areaServed": "Global",
        "serviceType": data.hero.badge
      },
      {
        "@type": "FAQPage",
        "mainEntity": data.faqData.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <main className="services-page-root min-h-screen overflow-x-hidden">
      {/* RankWise SEO Rich Snippets Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* ═══════════════════ SECTION 1: FLAGSHIP HERO WITH WAVEFORM & AI WIDGET ═══════════════════ */}
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
                {data.hero.badge}
              </div>

              <h1 className="ady-main-title">
                {(() => {
                  const extractString = (node: any): string => {
                    if (!node) return "";
                    if (typeof node === "string") return node;
                    if (Array.isArray(node)) return node.map(extractString).join(" ");
                    if (node && node.props && node.props.children) return extractString(node.props.children);
                    return "";
                  };
                  const fullText = extractString(data.hero.title) || "Digital Growth Engine";
                  const words = fullText.split(/\s+/).filter(Boolean);
                  const p1Count = Math.min(3, Math.max(2, Math.floor(words.length / 3)));
                  const part1 = words.slice(0, p1Count).join(" ");
                  const remaining = words.slice(p1Count);
                  const p2Count = Math.min(3, Math.max(2, Math.ceil(remaining.length / 2)));
                  const part2 = remaining.slice(0, p2Count).join(" ") || "Growth System";
                  const part3 = remaining.slice(p2Count).join(" ") || "That Scales.";
                  return (
                    <>
                      <span className="ady-title-line1">{part1}</span>
                      <span className="ady-title-line2">{part2}</span>
                      <span className="ady-title-line3">{part3}</span>
                    </>
                  );
                })()}
              </h1>
              <p className="ady-subtitle">
                {data.hero.description}
              </p>

              {/* Action Buttons */}
              <div className="ady-cta-group">
                <Link href="#contact" className="ady-btn-dark">
                  <span>Start Your Project</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
                <a href="#services-grid" className="ady-btn-ghost">
                  <span>Explore Capabilities</span>
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

      {/* ═══════════════════ SECTION 3: SERVICES GRID WITH TABS ═══════════════════ */}
      <section className="section services-ref-section" id="services-grid" aria-labelledby="services-ref-title">
        <div className="shell">
          <div className="services-ref-header services-ref-header--centered">
            <span className="ref-pill-kicker">SPECIALIZED CAPABILITIES &amp; MODULES</span>
            <h2 id="services-ref-title" className="services-ref-heading">
              {data.intro?.headline || "Performance Solutions & Modules"}
            </h2>
            <p className="services-ref-subtitle">
              {data.intro?.description || "High-precision components built for scale, automation, and measurable revenue generation."}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="services-filter-tabs">
            <button
              className={`services-tab ${activeFilter === "all" ? "services-tab--active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              ALL MODULES ({data.subServices.length})
            </button>
          </div>

          {/* Service Cards Grid in Home Page Card Style */}
          <div className="services-ref-grid services-ref-grid--9">
            {filteredSubServices.map((item, idx) => (
              <article key={idx} className="service-ref-card scroll-mt-28">
                {/* 1. Image (First - Large Visual Stage) */}
                <div className="service-ref-card__visual">
                  <Link href={item.href || "#contact"} className="block">
                    <img src={getServiceIllustration(item.img)} alt={item.title} loading="lazy" />
                  </Link>
                </div>

                {/* 2. Title (Second) */}
                <h3 className="service-ref-card__title">
                  <Link href={item.href || "#contact"}>{item.title}</Link>
                </h3>

                {/* 3. Subtitle / Content (Third) */}
                <p className="service-ref-card__desc">{item.desc}</p>

                {/* 4. Button (Fourth - Read more pill button) */}
                <div className="service-ref-card__action">
                  <Link href={item.href || "#contact"} className="service-ref-readmore-btn">
                    <span>Read more</span>
                    <span className="readmore-btn-arrow">&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 4: SYSTEM VISUALIZATION / EXPERTISE SHOWCASE ═══════════════════ */}
      <section className="section expert-showcase-section" id="ecosystem" aria-labelledby="expert-showcase-heading">
        <div className="shell">
          {/* Unified Section Header */}
          <div className="services-ref-header services-ref-header--centered" style={{ marginBottom: "26px" }}>
            <span className="ref-pill-kicker">OUR EXPERTISE</span>
            <h2 id="expert-showcase-heading" className="services-ref-heading">
              {data.about.title}
            </h2>
            <p className="services-ref-subtitle" style={{ maxWidth: "780px", marginBottom: "0" }}>
              {data.about.paragraphs[0]}
            </p>
          </div>

          {/* Unified Balanced 2-Column Grid (Zero Spacings and Gaps) */}
          <div className="expert-unified-grid">
            {/* Left Column: Interactive Tablet + Dual Visuals + Strategic Overview */}
            <div className="expert-left-pane">
              {/* 1. Executive Tablet Stage */}
              <div className="expert-tablet-card">
                <ExecutiveTabletMockup title={data.about.title} />
              </div>

              {/* 2. Dual Side-by-Side Visuals */}
              <div className="expert-dual-images">
                <ExecutionRoadmapVisual />
                <DataAttributionVisual />
              </div>

              {/* 3. Strategic Overview Card */}
              <div className="expert-overview-box">
                <h3 className="expert-box-title">Technical Overview &amp; Execution Framework</h3>
                <p className="expert-box-text">
                  {data.about.paragraphs.slice(1).join(" ") || data.about.paragraphs[0]}
                </p>
              </div>
            </div>

            {/* Right Column: What's Included Pillars + Core Systems + Transform CTA */}
            <div className="expert-right-pane">
              {/* What's Included & Core Capabilities Card */}
              <div className="expert-included-card">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="expert-included-title">What&apos;s Included</h4>
                  <span className="text-[10.5px] font-bold text-[#ef5b52] px-2.5 py-0.5 rounded-full bg-coral-500/10 border border-[#ef5b52]/20 uppercase tracking-wide">
                    FULL-STACK
                  </span>
                </div>
                <div className="expert-accent-line" />
                <p className="expert-included-desc">
                  Full-funnel technical deliverables covering strategic architecture, automated workflows, and continuous optimization.
                </p>

                <div className="expert-check-grid">
                  {data.about.pillars.map((pillar, idx) => (
                    <div key={idx} className="expert-check-item">
                      <span className="expert-check-icon">
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.08)" />
                          <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Systems Module List */}
              <div className="expert-recent-services-card">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="expert-recent-title">Core Systems</h4>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {data.subServices.length} SYSTEMS
                  </span>
                </div>
                <div className="expert-accent-line" style={{ width: "40px" }} />
                <ul className="expert-recent-list">
                  {data.subServices.slice(0, 5).map((svc, idx) => (
                    <li key={idx} className="expert-recent-item">
                      <span className="expert-check-icon">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="9" stroke="#ef5b52" strokeWidth="2" fill="rgba(239, 91, 82, 0.15)" />
                          <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{svc.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compact Transform CTA Card */}
              <div className="expert-compact-cta-card">
                <h4 className="text-xl font-extrabold text-white mb-1.5 leading-snug">
                  Transform Your Business with <span className="ady-gradient-text">Adyantra!</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Deploy data-backed acquisition systems and custom AI automations engineered for scalable revenue.
                </p>
                <Link
                  href="#contact"
                  className="ady-btn-dark w-full justify-center text-xs py-2.5"
                  style={{ width: "100%" }}
                >
                  <span>Book A Discovery Call</span>
                  <span className="readmore-btn-arrow">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 5: ABOUT US / CORE TECHNICAL PILLARS ═══════════════════ */}
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
              {data.about.pillars.slice(0, 6).map((pillar, idx) => (
                <li key={idx}>
                  <span>{pillar}</span>
                  <b>0{idx + 1}</b>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 7: TARGET DOMAIN EXPERTISE MARQUEE ═══════════════════ */}
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
              <span className="domain-pill-icon"><img src="https://img.icons8.com/?size=48&id=11173&format=png&color=7b4bf7" width="20" height="20" alt="Education" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">Fashion &amp; D2C Apparel</span>
              <span className="domain-pill-icon"><img src="https://img.icons8.com/?size=48&id=21815&format=png&color=7b4bf7" width="20" height="20" alt="Fashion" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">NGOs &amp; Non-Profits</span>
              <span className="domain-pill-icon"><img src="https://img.icons8.com/?size=48&id=87&format=png&color=7b4bf7" width="20" height="20" alt="NGOs" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">Other Enterprises &amp; Businesses</span>
              <span className="domain-pill-icon"><img src="https://img.icons8.com/?size=48&id=53373&format=png&color=7b4bf7" width="20" height="20" alt="Enterprises" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">IT &amp; Software Enterprises</span>
              <span className="domain-pill-icon"><img src="https://img.icons8.com/?size=48&id=2778&format=png&color=7b4bf7" width="20" height="20" alt="Software" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">Real Estate &amp; Housing</span>
              <span className="domain-pill-icon"><img src="https://img.icons8.com/?size=48&id=73&format=png&color=7b4bf7" width="20" height="20" alt="Real Estate" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">Healthcare &amp; Clinics</span>
              <span className="domain-pill-icon"><img src="https://img.icons8.com/?size=48&id=14094&format=png&color=7b4bf7" width="20" height="20" alt="Healthcare" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">E-Commerce &amp; Retail Brands</span>
              <span className="domain-pill-icon"><img src="https://img.icons8.com/?size=48&id=9671&format=png&color=7b4bf7" width="20" height="20" alt="E-Commerce" /></span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 8: ACCELERATE YOUR REVENUE BANNER ═══════════════════ */}
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

      {/* ═══════════════════ SECTION 9: OUR PROVEN PROCESS ═══════════════════ */}
      <section className="section process" aria-labelledby="process-title">
        <div className="shell">
          <div className="section-heading section-heading--center">
            <span className="ref-pill-kicker">OUR PROVEN PROCESS</span>
            <h2 id="process-title">
              A Transparent <span className="ady-gradient-text">Methodology</span>
            </h2>
            <p>Our structured framework ensures rapid deployment, data-driven optimization, and predictable scaling.</p>
          </div>
          <div className="process-grid">
            {data.processSteps.map((step, idx) => (
              <article key={idx}>
                <span>0{idx + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ THE ADYANTRA ADVANTAGE (OUR TEAM & EXPERTISE) ═══════════════════ */}
      <OurTeamExpertiseSection />

      {/* ═══════════════════ SECTION 11: CLIENT REVIEWS MARQUEE ═══════════════════ */}
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
                  <div className="review-ref-avatar avatar--coral">SK</div>
                  <div className="review-ref-meta">
                    <h3 className="review-ref-name">Suresh Kumar</h3>
                    <span className="review-ref-role-pill">Real Estate Developer &bull; Principal</span>
                  </div>
                </div>
                <div className="review-ref-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
              </div>
              <blockquote className="review-ref-quote">
                &ldquo;We struggled with poor lead quality from social media ads. Adyantra restructured our targeting and implemented an automated WhatsApp qualification flow. Our sales team now only speaks with verified buyers.&rdquo;
              </blockquote>
            </article>

            <article className="review-ref-card review-card--scroll">
              <div className="review-ref-card__top">
                <div className="review-ref-client">
                  <div className="review-ref-avatar avatar--blue">AR</div>
                  <div className="review-ref-meta">
                    <h3 className="review-ref-name">Ananya Rao</h3>
                    <span className="review-ref-role-pill">D2C Fashion &bull; E-commerce</span>
                  </div>
                </div>
                <div className="review-ref-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
              </div>
              <blockquote className="review-ref-quote">
                &ldquo;Our blended ROAS scaled from 2.1x to over 4.8x within three months. Their creative testing velocity and automated email flows unlocked profitable scale without increasing our internal team size.&rdquo;
              </blockquote>
            </article>

            <article className="review-ref-card review-card--scroll">
              <div className="review-ref-card__top">
                <div className="review-ref-client">
                  <div className="review-ref-avatar avatar--purple">VK</div>
                  <div className="review-ref-meta">
                    <h3 className="review-ref-name">Vikram K.</h3>
                    <span className="review-ref-role-pill">B2B SaaS Founder &bull; Growth Lead</span>
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

      {/* ═══════════════════ SECTION 12: FAQ SECTION ═══════════════════ */}
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
            {data.faqData.map((faq, idx) => (
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

      {/* ═══════════════════ SECTION 13: CONTACT SECTION ═══════════════════ */}
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
                <img src="https://img.icons8.com/?size=48&id=63598&format=png&color=ef5b52" width="22" height="22" alt="Email" style={{ verticalAlign: "middle" }} />
              </span>
              <div>
                <b>Email support</b>
                <a href="mailto:info@adyantra.in">info@adyantra.in</a>
              </div>
            </div>
            <div className="contact-method">
              <span>
                <img src="https://img.icons8.com/?size=48&id=9659&format=png&color=ef5b52" width="22" height="22" alt="Phone" style={{ verticalAlign: "middle" }} />
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
                <select name="service" defaultValue={data.hero.badge}>
                  <option value={data.hero.badge}>{data.hero.badge}</option>
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
