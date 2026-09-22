"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");

  const services = [
    {
      id: 1,
      category: "marketing",
      img: "/assets/img/service/seo-3d.png",
      title: "Search Engine Optimization (SEO)",
      desc: "Dominate Google rankings with technical audits, keyword strategies, and high-authority link building for qualified organic traffic.",
      href: "/digital-marketing-growth#seo",
    },
    {
      id: 2,
      category: "marketing",
      img: "/assets/img/service/ppc-3d.png",
      title: "Social Media & Meta Ads",
      desc: "Scale brand visibility across Instagram, Facebook, and LinkedIn with platform-native creatives and precise demographic targeting.",
      href: "/digital-marketing-growth#meta-ads",
    },
    {
      id: 3,
      category: "marketing",
      img: "/assets/img/service/pr-3d.png",
      title: "Email & Lead Nurturing Workflows",
      desc: "Transform leads into loyal customers with hyper-personalized email drip sequences, onboarding series, and re-engagement workflows.",
      href: "/ai-automation#workflows",
    },
    {
      id: 4,
      category: "design",
      img: "/assets/img/service/webdev-3d.png",
      title: "Web Software & App Development",
      desc: "Engineered for speed, security, and conversions using Next.js, React, and modern cloud architectures tailored to your needs.",
      href: "/web-software-development",
    },
    {
      id: 5,
      category: "marketing",
      img: "/assets/img/service/ppc-3d.png",
      title: "Google Ads & PPC Performance",
      desc: "Capture high-intent buyers with Google Search, Display, and Performance Max campaigns optimized for lower Cost Per Lead.",
      href: "/digital-marketing-growth#google-ads",
    },
    {
      id: 6,
      category: "design",
      img: "/assets/img/service/ecommerce-3d.png",
      title: "E-Commerce Growth & Storefronts",
      desc: "Build scalable online stores with custom Shopify setups, payment integration, and automated abandoned cart recovery.",
      href: "/digital-marketing-growth#ecommerce",
    },
    {
      id: 7,
      category: "marketing",
      img: "/assets/img/service/pr-3d.png",
      title: "PR & Online Reputation Management",
      desc: "Establish brand authority with strategic press releases, featured media placements, and digital reputation management.",
      href: "/digital-marketing-growth#influencer",
    },
    {
      id: 8,
      category: "automation",
      img: "/assets/img/service/ai-3d.png",
      title: "AI Workflows & Chatbot Systems",
      desc: "Automate customer support and sales with custom WhatsApp AI chatbots, CRM sync, and lead qualification workflows.",
      href: "/ai-automation#chatbots",
    },
    {
      id: 9,
      category: "marketing",
      img: "/assets/img/service/ecommerce-3d.png",
      title: "Affiliate & Partner Marketing",
      desc: "Expand brand distribution through performance-based affiliate networks, referral systems, and strategic influencer partnerships.",
      href: "/digital-marketing-growth#influencer",
    },
  ];

  const filteredServices =
    activeFilter === "all"
      ? services
      : services.filter((s) => s.category === activeFilter);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* ═══════════════════ NEW ADYANTRA HERO SECTION ═══════════════════ */}
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
              <h1 className="ady-main-title">
                <span className="ady-title-line1">Accelerate Your Brand with</span>
                <span className="ady-title-line2">Performance–Driven AI-Automations</span>
                <span className="ady-title-line3">&amp; Digital Marketing Services.</span>
              </h1>
              <p className="ady-subtitle">
                We engineer high-performance digital marketing ecosystems and AI automations to scale brands profitably.
              </p>

              {/* Action Buttons */}
              <div className="ady-cta-group">
                <Link href="/contact" className="ady-btn-dark">
                  <span>Get Started</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
                <a href="#services" className="ady-btn-ghost">
                  <span>Our Services</span>
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
              <div className="ady-float-badge ady-badge-coral" style={{ left: "9.83%", top: "30.0%" }} title="Meta & Social Ads">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </div>

              <div className="ady-float-badge ady-badge-white" style={{ left: "21.5%", top: "56.7%" }} title="Web App Engineering">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>

              <div className="ady-float-badge ady-badge-coral" style={{ left: "32.9%", top: "65.0%" }} title="ROAS & PPC Growth">
                <span className="ady-badge-dollar">$</span>
              </div>

              <div className="ady-center-cta-wrap" style={{ left: "50.75%", top: "55.0%" }}>
                <Link href="/contact" className="ady-center-pill-btn">
                  <span>Contact Us</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="ady-float-badge ady-badge-white" style={{ left: "72.3%", top: "48.3%" }} title="Email & Lead Workflows">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>

              <div className="ady-wave-glow-dot" style={{ left: "80.8%", top: "25.0%" }} />

              <div className="ady-float-badge ady-badge-coral" style={{ left: "90.67%", top: "38.3%" }} title="Social Content & Influencer Growth">
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

      {/* Stats Bar */}
      <div className="ady-stats-bridge-bar relative z-20">
        <div className="ady-stats-container">
          <div className="ady-stat-item">
            <p className="ady-stat-value">06+</p>
            <p className="ady-stat-label">Years of Industry Expertise</p>
          </div>
          <div className="ady-stat-item">
            <p className="ady-stat-value">50+</p>
            <p className="ady-stat-label">High-Growth Brands Scaled</p>
          </div>
          <div className="ady-stat-item">
            <p className="ady-stat-value">100%</p>
            <p className="ady-stat-label">In-House Engineering</p>
          </div>
          <div className="ady-stat-item">
            <p className="ady-stat-value">Zero</p>
            <p className="ady-stat-label">Outsourced Work</p>
          </div>
        </div>
      </div>

      {/* ═══════════════════ SERVICES SECTION ═══════════════════ */}
      <section className="section services-ref-section" id="services" aria-labelledby="services-ref-title">
        <div className="shell">
          <div className="services-ref-header services-ref-header--centered">
            <span className="ref-pill-kicker">OUR SERVICES</span>
            <h2 id="services-ref-title" className="services-ref-heading">
              Integrated Digital Growth &amp;
              <br />
              <span className="ady-gradient-text">AI Automation Services</span>
            </h2>
            <p className="services-ref-subtitle">
              We provide full-spectrum digital marketing, web engineering, and AI automation solutions
              <br className="hidden sm:inline" /> engineered to generate qualified leads, boost conversions, and scale revenue.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="services-filter-tabs">
            <button
              className={`services-tab ${activeFilter === "all" ? "services-tab--active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              ALL SERVICES
            </button>
            <button
              className={`services-tab ${activeFilter === "marketing" ? "services-tab--active" : ""}`}
              onClick={() => setActiveFilter("marketing")}
            >
              MARKETING &amp; GROWTH
            </button>
            <button
              className={`services-tab ${activeFilter === "design" ? "services-tab--active" : ""}`}
              onClick={() => setActiveFilter("design")}
            >
              DESIGN &amp; DEV
            </button>
            <button
              className={`services-tab ${activeFilter === "automation" ? "services-tab--active" : ""}`}
              onClick={() => setActiveFilter("automation")}
            >
              AUTOMATION &amp; AI
            </button>
          </div>

          {/* 9 Service Cards Grid */}
          <div className="services-ref-grid services-ref-grid--9">
            {filteredServices.map((item) => (
              <article key={item.id} className="service-ref-card" data-category={item.category}>
                <div className="service-ref-card__visual">
                  <img src={item.img} alt={item.title} loading="lazy" />
                </div>
                <h3 className="service-ref-card__title">{item.title}</h3>
                <p className="service-ref-card__desc">{item.desc}</p>
                <div className="service-ref-card__action">
                  <Link href={item.href} className="service-ref-explore-btn">
                    Explore Service <span className="explore-btn-icon">»</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ ABOUT US SECTION ═══════════════════ */}
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

      {/* ═══════════════════ TARGET DOMAIN EXPERTISE SECTION ═══════════════════ */}
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

            {/* Duplicate Set for Seamless Infinite Loop */}
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

      {/* ═══════════════════ ACCELERATE YOUR REVENUE BANNER ═══════════════════ */}
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

      {/* ═══════════════════ PROCESS SECTION ═══════════════════ */}
      <section className="section process" aria-labelledby="process-title">
        <div className="shell">
          <div className="section-heading section-heading--center">
            <span className="ref-pill-kicker">OUR PROVEN PROCESS</span>
            <h2 id="process-title">
              A Transparent <span className="ady-gradient-text">4-Step Growth Methodology</span>
            </h2>
            <p>Our structured 4-phase framework ensures rapid deployment, data-driven optimization, and predictable scaling.</p>
          </div>
          <div className="process-grid">
            <article>
              <span>01</span>
              <h3>Discovery &amp; Funnel Audit</h3>
              <p>We audit your digital presence, advertising accounts, search rankings, tech stack, and competitor positioning to find untapped revenue opportunities.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Strategy &amp; Custom Roadmap</h3>
              <p>We build a precise plan for channel allocation, audiences, messaging, conversion goals, and technical milestones.</p>
            </article>
            <article>
              <span>03</span>
              <h3>In-House Execution &amp; Deployment</h3>
              <p>Senior developers, performance marketers, and AI engineers launch your campaigns, applications, and workflows with speed.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Data-Driven Optimization &amp; Scaling</h3>
              <p>We monitor performance daily, run focused tests, tune bids, and optimize conversion paths for scalable results.</p>
            </article>
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

      {/* ═══════════════════ CLIENT REVIEWS SECTION ═══════════════════ */}
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
                  <div className="review-ref-avatar avatar--indigo">PK</div>
                  <div className="review-ref-meta">
                    <h3 className="review-ref-name">Pramode K.</h3>
                    <span className="review-ref-role-pill">Enterprise Busi... &bull; Ow...</span>
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
                  <div className="review-ref-avatar avatar--indigo">PK</div>
                  <div className="review-ref-meta">
                    <h3 className="review-ref-name">Pramode K.</h3>
                    <span className="review-ref-role-pill">Enterprise Busi... &bull; Ow...</span>
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

      {/* ═══════════════════ FAQ SECTION ═══════════════════ */}
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
            <details open>
              <summary>
                How quickly can we expect measurable results from your digital campaigns?<b>+</b>
              </summary>
              <p>Timelines depend on your market and starting point. Paid acquisition can yield early signals within weeks, while SEO and conversion work compound over the following months.</p>
            </details>
            <details>
              <summary>
                Which specific services are best suited for my business goals?<b>+</b>
              </summary>
              <p>We recommend a focused mix after auditing your current funnel, opportunity size, audience, and technical readiness.</p>
            </details>
            <details>
              <summary>
                How does Adyantra track and measure campaign ROI?<b>+</b>
              </summary>
              <p>Clear attribution, conversion tracking, and performance reports keep both lead quality and revenue outcomes visible.</p>
            </details>
            <details>
              <summary>
                Can we start with a focused budget and scale as results improve?<b>+</b>
              </summary>
              <p>Yes. We build a practical initial roadmap, validate what works, and increase investment where it produces meaningful outcomes.</p>
            </details>
            <details>
              <summary>
                What differentiates Adyantra from conventional marketing agencies?<b>+</b>
              </summary>
              <p>Senior in-house execution combines engineering, performance media, and AI automation in one accountable team.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONTACT SECTION ═══════════════════ */}
      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="shell contact__grid">
          <div className="contact__copy">
            <span className="ref-pill-kicker">CONNECT WITH OUR TEAM</span>
            <h2 id="contact-title">
              Ready to accelerate your <span className="ady-gradient-text">digital market advantage?</span>
            </h2>
            <p>Partner with Adyantra Digital to elevate search rankings, capture high-intent leads, and automate revenue operations.</p>
            <div className="contact-method">
              <span>
                <img src="https://img.icons8.com/?size=48&id=63598&format=png&color=ef5b52" width="22" height="22" alt="Email" style={{ verticalAlign: "middle" }} />
              </span>
              <div>
                <b>Email support</b>
                <a href="mailto:info@adyantra.in">info@adyantra.in</a>
                <a href="mailto:adyantradigital@gmail.com">adyantradigital@gmail.com</a>
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
                <select name="service">
                  <option>Digital Marketing &amp; SEO</option>
                  <option>AI Automation &amp; Workflows</option>
                  <option>Web Design &amp; Development</option>
                  <option>PPC &amp; Meta Ads</option>
                  <option>E-commerce Solutions</option>
                </select>
              </label>
            </div>
            <label>
              Project details
              <textarea name="details" rows={4} placeholder="Tell us a little about your goals" />
            </label>
            <button className="button button--primary" type="submit">
              Send message <b>&rarr;</b>
            </button>
            <p className="form-note" aria-live="polite" />
          </form>
        </div>
      </section>
    </main>
  );
}
