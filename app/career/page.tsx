"use client";

import Link from "next/link";
import { useState } from "react";
import ServicesScrollingBar from "@/components/sections/ServicesScrollingBar";
import HeroWaveformStage from "@/components/hero/HeroWaveformStage";
import OurTeamExpertiseSection from "@/components/sections/OurTeamExpertiseSection";
import { DomainIcon } from "@/components/icons/DomainIcons";

export default function CareerPage() {
  const [activeDept, setActiveDept] = useState("all");

  const jobs = [
    {
      id: "ai-engineer",
      dept: "ai",
      deptLabel: "AI Systems",
      title: "Senior AI Automation Architect",
      location: "HITEC City, Hyderabad (Hybrid)",
      type: "Full-Time",
      desc: "Architect production agentic workflows, multi-tool LLM routing (LangChain / LlamaIndex), WhatsApp Cloud API integrations, and vector search systems.",
      tech: ["Python", "FastAPI", "OpenAI / Claude APIs", "n8n / Make", "PostgreSQL"],
    },
    {
      id: "fullstack-engineer",
      dept: "engineering",
      deptLabel: "Engineering",
      title: "Full-Stack Web Engineer (Next.js / TypeScript)",
      location: "HITEC City, Hyderabad (Hybrid)",
      type: "Full-Time",
      desc: "Build ultra-fast Next.js 15 web applications, high-converting CRO landing experiences, and headless CMS integrations with 100/100 Core Web Vitals.",
      tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Server Actions", "Vercel"],
    },
    {
      id: "performance-marketer",
      dept: "growth",
      deptLabel: "Growth & Media",
      title: "Performance Marketing Lead (Meta & Google Ads)",
      location: "HITEC City, Hyderabad (Hybrid)",
      type: "Full-Time",
      desc: "Manage high-volume ad spend ($50k+/mo) across Meta Ads Manager, Google Ads (Search, PMax), and TikTok Ads with server-side CAPI tracking.",
      tech: ["Google Ads", "Meta Ads Manager", "GA4 / GTM", "Triple Whale", "Looker Studio"],
    },
    {
      id: "seo-strategist",
      dept: "growth",
      deptLabel: "Growth & Media",
      title: "Senior Technical SEO Strategist",
      location: "Remote / Hybrid",
      type: "Full-Time",
      desc: "Lead deep technical crawl audits, programmatic SEO architectures, content topical authority clusters, and high-tier digital PR outreach.",
      tech: ["Ahrefs", "Screaming Frog", "Semrush", "Schema.org", "BigQuery"],
    },
    {
      id: "product-designer",
      dept: "design",
      deptLabel: "Design",
      title: "Senior UI/UX & Motion Designer",
      location: "HITEC City, Hyderabad (Hybrid)",
      type: "Full-Time",
      desc: "Design premium, conversion-obsessed web interfaces, design systems in Figma, 3D web assets, and micro-interactions with smooth UX fidelity.",
      tech: ["Figma", "Framer", "Spline / Blender", "CSS Animation", "Design Systems"],
    },
  ];

  const perks = [
    {
      title: "Competitive Compensation & ESOPs",
      desc: "Top-tier base salary benchmarked against top product agencies, with equity options for core engineering contributors.",
      icon: "https://img.icons8.com/?size=96&id=852&format=png&color=ef5b52",
    },
    {
      title: "Annual Learning & AI Budget",
      desc: "₹1,00,000+ per year for courses, LLM subscriptions, technical books, API testing credits, and developer tools.",
      icon: "https://img.icons8.com/?size=96&id=4052&format=png&color=0284c7",
    },
    {
      title: "Top-Tier Hardware",
      desc: "Latest Apple MacBook Pro M3/M4 or custom Linux dev workstation with dual 4K external monitors.",
      icon: "https://img.icons8.com/?size=96&id=16412&format=png&color=ef5b52",
    },
    {
      title: "Flexible Hybrid Autonomy",
      desc: "Work from our modern HITEC City collaborative studio or from home. We measure outcomes, not clocked seat time.",
      icon: "https://img.icons8.com/?size=96&id=2854&format=png&color=7b4bf7",
    },
  ];

  const filteredJobs =
    activeDept === "all" ? jobs : jobs.filter((j) => j.dept === activeDept);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* ═══════════════════ SECTION 1: FLAGSHIP HERO (HOME PAGE THEME) ═══════════════════ */}
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
                JOIN OUR CORE TEAM
              </div>

              <h1 className="ady-main-title">
                <span className="ady-title-line1">Build The Future Of</span>
                <span className="ady-title-line2">Autonomous Growth &amp;</span>
                <span className="ady-title-line3">Digital Engineering.</span>
              </h1>
              <p className="ady-subtitle">
                Work with a high-density team of senior software engineers, AI architects, and performance marketers in HITEC City, Hyderabad.
              </p>

              {/* Action Buttons */}
              <div className="ady-cta-group">
                <a href="#open-roles" className="ady-btn-dark">
                  <span>View Open Roles</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <a href="#culture" className="ady-btn-ghost">
                  <span>Culture &amp; Perks</span>
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

      {/* ═══════════════════ SERVICES SCROLLING SECTION ═══════════════════ */}
      <ServicesScrollingBar />

      {/* ═══════════════════ SECTION 2: OPEN ROLES BOARD (HOME PAGE CARD STYLE) ═══════════════════ */}
      <section className="section services-ref-section" id="open-roles" aria-labelledby="roles-title">
        <div className="shell max-w-5xl mx-auto">
          <div className="services-ref-header services-ref-header--centered">
            <span className="ref-pill-kicker">CAREER OPPORTUNITIES</span>
            <h2 id="roles-title" className="services-ref-heading">
              Open Positions Across <span className="ady-gradient-text">Engineering &amp; Growth</span>
            </h2>
            <p className="services-ref-subtitle">
              Explore active openings and apply directly to work on high-impact projects.
            </p>
          </div>

          {/* Department Filter Tabs */}
          <div className="services-filter-tabs mb-10">
            {[
              { id: "all", label: `ALL ROLES (${jobs.length})` },
              { id: "ai", label: "AI SYSTEMS" },
              { id: "engineering", label: "ENGINEERING" },
              { id: "growth", label: "GROWTH & MEDIA" },
              { id: "design", label: "DESIGN" },
            ].map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveDept(d.id)}
                className={`services-tab ${activeDept === d.id ? "services-tab--active" : ""}`}
              >
                {d.label}
              </button>
            ))}
          </div>

          {/* Job Cards in Home Page Ref Card Style */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="service-ref-card p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
                style={{ textAlign: "left", alignItems: "flex-start" }}
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold text-[#ef5b52] px-2.5 py-0.5 rounded-full bg-coral-500/10 border border-[#ef5b52]/20 uppercase tracking-wide">
                      {job.deptLabel}
                    </span>
                    <span className="text-xs text-slate-400">&bull;</span>
                    <span className="text-xs font-medium text-slate-500">{job.location}</span>
                    <span className="text-xs text-slate-400">&bull;</span>
                    <span className="text-xs font-medium text-slate-500">{job.type}</span>
                  </div>

                  <h3 className="service-ref-card__title mb-2">{job.title}</h3>
                  <p className="service-ref-card__desc mb-4" style={{ WebkitLineClamp: "none" }}>{job.desc}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {job.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium text-slate-700 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 self-start md:self-center">
                  <Link
                    href="/contact"
                    className="service-ref-readmore-btn"
                  >
                    <span>Apply Now</span>
                    <span className="readmore-btn-arrow">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 3: CULTURE & PERKS ═══════════════════ */}
      <section className="section py-20 bg-slate-50/50 border-t border-slate-100" id="culture">
        <div className="shell">
          <div className="section-heading section-heading--center">
            <span className="ref-pill-kicker">LIFE AT ADYANTRA</span>
            <h2>
              Invested In Your <span className="ady-gradient-text">Long-Term Mastery</span>
            </h2>
            <p>
              We believe elite talent does its best work when equipped with the best tools, complete autonomy, and competitive incentives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p, i) => (
              <div key={i} className="service-ref-card p-6 flex flex-col justify-between" style={{ textAlign: "left" }}>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-5">
                    <img src={p.icon} width="24" height="24" alt={p.title} />
                  </div>
                  <h3 className="service-ref-card__title mb-2 text-base">{p.title}</h3>
                  <p className="service-ref-card__desc text-xs" style={{ WebkitLineClamp: "none" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 4: TARGET DOMAIN EXPERTISE MARQUEE ═══════════════════ */}
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

            {/* Duplicate Set for Seamless Loop */}
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

      {/* ═══════════════════ SECTION 5: ACCELERATE YOUR REVENUE BANNER ═══════════════════ */}
      <section className="growth-banner" id="growth-banner">
        <div className="shell">
          <div>
            <p className="kicker">Accelerate your career</p>
            <h2 id="growth-title">
              Don&apos;t see your specific role? <em>Pitch us your superpower.</em>
            </h2>
          </div>
          <div className="growth-banner__action">
            <p>We are always excited to meet exceptional engineers, designers, and growth practitioners. Send us your GitHub, portfolio, or proof of work.</p>
            <a className="button button--coral" href="mailto:careers@adyantra.in">
              Send Open Application <b>&rarr;</b>
            </a>
          </div>
          <div className="stat-row" aria-label="Adyantra culture metrics">
            <div><b>100%</b><span>Autonomy &amp; Ownership</span></div>
            <div><b>₹1.0L+</b><span>Annual Learning Budget</span></div>
            <div><b>Hybrid</b><span>HITEC City Studio</span></div>
            <div><b>Top 1%</b><span>Engineering Standards</span></div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 6: OUR TEAM & EXPERTISE ═══════════════════ */}
      <OurTeamExpertiseSection />
    </main>
  );
}
