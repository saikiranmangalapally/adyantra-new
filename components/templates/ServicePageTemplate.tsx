"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

export default function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const stats = getServiceStats(data.hero.badge, data.stats);

  const filteredSubServices =
    activeFilter === "all"
      ? data.subServices
      : data.subServices; // All services visible

  return (
    <main className="services-page-root min-h-screen overflow-x-hidden">
      
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

            {/* Waveform Stage */}
            <div className="ady-waveform-stage">
              <svg className="ady-wave-svg" viewBox="0 0 1200 300" preserveAspectRatio="none">
                <path
                  id="adyWaveformPath"
                  className="ady-wave-curve"
                  d="M 0,160 C 45,160 75,90 118,90 C 160,90 205,168 258,170 C 285,171 305,235 330,235 C 355,235 375,215 395,195 C 415,175 425,95 450,95 C 490,95 540,165 609,165 C 678,165 725,95 770,95 C 805,95 835,130 868,145 C 885,153 895,235 915,235 C 935,235 955,140 970,75 C 985,75 1030,115 1088,115 C 1125,115 1165,125 1200,125"
                />
                <circle className="ady-pulse-dot" r="4.5">
                  <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#adyWaveformPath" />
                  </animateMotion>
                </circle>
              </svg>

              {/* Badges */}
              <div className="ady-float-badge ady-badge-coral" style={{ left: "9.83%", top: "30.0%" }} title="Google & Meta Ads">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </div>

              <div className="ady-float-badge ady-badge-white" style={{ left: "21.5%", top: "56.7%" }} title="Web App & Software">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>

              <div className="ady-float-badge ady-badge-coral" style={{ left: "32.9%", top: "65.0%" }} title="ROAS & Performance">
                <span className="ady-badge-dollar">$</span>
              </div>

              <div className="ady-center-cta-wrap" style={{ left: "50.75%", top: "55.0%" }}>
                <Link href="#contact" className="ady-center-pill-btn">
                  <span>Contact Us</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="ady-float-badge ady-badge-white" style={{ left: "72.3%", top: "48.3%" }} title="AI & CRM Workflows">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>

              <div className="ady-wave-glow-dot" style={{ left: "80.8%", top: "25.0%" }} />

              <div className="ady-float-badge ady-badge-coral" style={{ left: "90.67%", top: "38.3%" }} title="Analytics & Revenue">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
            </div>

            {/* AI Agent Interactive Widget */}
            <aside className="ady-ai-widget">
              <div className="ady-widget-glow" />
              <div className="ady-widget-top">
                <div className="ady-widget-avatar">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Adyantra AI Guide" />
                </div>
                <p className="ady-widget-text">Ask our AI Agent to explore our approach in seconds</p>
              </div>
              <Link href="/about" className="ady-widget-link">
                <span>Learn Our Approach</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 2: STATS BRIDGE BAR ═══════════════════ */}
      <div className="ady-stats-bridge-bar relative z-20">
        <div className="ady-stats-container">
          {stats.map((item, idx) => (
            <div key={idx} className="ady-stat-item">
              <p className="ady-stat-value">{item.val}</p>
              <p className="ady-stat-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

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
                <div className="service-ref-card__visual">
                  <Link href={item.href || "#contact"} className="block">
                    <img src={item.img || "/assets/img/service/ai-3d.png"} alt={item.title} loading="lazy" />
                  </Link>
                </div>
                <h3 className="service-ref-card__title">
                  <Link href={item.href || "#contact"}>{item.title}</Link>
                </h3>
                <p className="service-ref-card__desc">{item.desc}</p>
                <div className="service-ref-card__action">
                  <Link href={item.href || "#contact"} className="service-ref-explore-btn">
                    Explore Service <span className="explore-btn-icon">»</span>
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
          {/* Top Header Grid: Left Headline & Right Tablet Preview */}
          <div className="expert-top-grid">
            <div className="expert-header-left">
              <span className="expert-kicker-pill">
                <span className="expert-kicker-dot" />
                Our Expertise
              </span>
              <h2 id="expert-showcase-heading" className="expert-main-heading">
                {data.about.title}
              </h2>
              <p className="expert-main-desc">
                {data.about.paragraphs[0]}
              </p>
            </div>

            <div className="expert-tablet-card">
              <Image
                src="/assets/img/service/service-header-tablet.jpg"
                alt="Adyantra Strategic Performance Dashboard"
                width={800}
                height={500}
                className="expert-tablet-img"
                priority
              />
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
                  {data.about.paragraphs.slice(1).join(" ") || data.about.paragraphs[0]}
                </p>
              </div>

              {/* Two Side-by-Side Images */}
              <div className="expert-dual-images">
                <div className="expert-dual-img-card">
                  <Image
                    src="/assets/img/service/service-collab-team.jpg"
                    alt="Adyantra Growth Strategy Collaboration"
                    width={600}
                    height={400}
                    className="expert-photo"
                  />
                </div>
                <div className="expert-dual-img-card">
                  <Image
                    src="/assets/img/service/service-analytics-review.jpg"
                    alt="Adyantra Data & Campaign Optimization"
                    width={600}
                    height={400}
                    className="expert-photo"
                  />
                </div>
              </div>

              {/* What's Included Box */}
              <div className="expert-included-card">
                <h4 className="expert-included-title">What&apos;s Included</h4>
                <div className="expert-accent-line" />
                <p className="expert-included-desc">
                  Our comprehensive full-funnel architecture covers everything from strategic inception to data-backed retention and cross-platform ROI maximization.
                </p>

                <div className="expert-check-grid">
                  {data.about.pillars.map((pillar, idx) => (
                    <div key={idx} className="expert-check-item">
                      <span className="expert-check-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.08)" />
                          <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Recent Services + Transform Banner */}
            <aside className="expert-sidebar-col">
              {/* Card 1: Recent Services */}
              <div className="expert-recent-services-card">
                <h4 className="expert-recent-title">Core Systems</h4>
                <div className="expert-accent-line" style={{ width: "45px" }} />
                <ul className="expert-recent-list">
                  {data.subServices.slice(0, 6).map((svc, idx) => (
                    <li key={idx} className="expert-recent-item">
                      <span className="expert-check-icon">
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.2)" />
                          <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{svc.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2: Transform CTA Card */}
              <div className="expert-cta-card">
                <Image
                  src="/assets/img/service/service-cta-transform.jpg"
                  alt="Transform Your Business with Adyantra"
                  fill
                  className="expert-cta-bg-img"
                />
                <div className="expert-cta-overlay" />
                <div className="expert-cta-content">
                  <h4 className="expert-cta-heading">
                    Transform <br />
                    Your Business <br />
                    with <span className="ady-gradient-text">Adyantra!</span>
                  </h4>
                  <p className="expert-cta-desc">
                    Take your digital marketing and automation to the next level with data-driven strategies and innovative solutions.
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
            <div><b>6+</b><span>Years industry experience</span></div>
            <div><b>200+</b><span>Successful projects executed</span></div>
            <div><b>50+</b><span>Happy client partners</span></div>
            <div><b>98%</b><span>Client retention rate</span></div>
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

      {/* ═══════════════════ THE ADYANTRA ADVANTAGE (EXACT MOCKUP MATCH) ═══════════════════ */}
      <section className="section expertise" id="advantage" aria-labelledby="expertise-title">
        <div className="shell split-layout">
          <div className="expertise-visual">
            <div className="expertise-visual__orb" />
            <img
              src="/assets/img/team/team-3d.png"
              alt="Work Directly with Senior Engineers & Growth Strategists"
              loading="lazy"
            />
            <div className="proof-chip proof-chip--one">
              <b>DIRECT ACCESS</b>
              <span>Senior tech leads</span>
            </div>
            <div className="proof-chip proof-chip--two">
              <b>24/7 TUNING</b>
              <span>Live attribution</span>
            </div>
            <div className="proof-chip proof-chip--three">
              <b>100% IN-HOUSE</b>
              <span>Zero outsourcing</span>
            </div>
            <div className="proof-chip proof-chip--four">
              <b>TAILORED GROWTH</b>
              <span>+340% Avg ROAS</span>
            </div>
          </div>
          <div className="copy-block">
            <p className="advantage-kicker">OUR TEAM &amp; EXPERTISE</p>
            <h2 id="expertise-title" className="advantage-exact-heading">
              Work Directly with Senior <br />
              Engineers <em>&amp; Growth <br />Strategists</em>
            </h2>
            <p className="advantage-exact-desc">
              We replace non-technical account managers with senior developers, performance marketers, and AI architects who take complete accountability for your digital performance.
            </p>
            <ul className="check-list-grid">
              <li>100% In-House Execution</li>
              <li>Tailored Growth Strategies</li>
              <li>Direct Senior Technical Access</li>
              <li>Continuous Campaign Optimization</li>
            </ul>
            <Link className="advantage-leadership-link" href="/about">
              Meet our leadership <b>&rarr;</b>
            </Link>
          </div>
        </div>
      </section>

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
                    <span className="review-ref-role-pill">Education Institu... &bull; Le...</span>
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
                    <span className="review-ref-role-pill">Real Estate Devel... &bull; Pr...</span>
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
                    <span className="review-ref-role-pill">D2C Fashion &bull; E-comme...</span>
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
                    <span className="review-ref-role-pill">B2B SaaS Founder &bull; Gro...</span>
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
