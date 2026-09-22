"use client";

import Link from "next/link";
import { useState } from "react";

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState("all");

  const jobs = [
    {
      id: 1,
      title: "Senior AI Automation Architect",
      dept: "ai",
      deptLabel: "AI Systems",
      location: "Hyderabad (HITEC City) / Hybrid",
      type: "Full-Time",
      experience: "3+ years",
      tech: ["Python", "FastAPI", "RAG / Vector DBs", "n8n / Make", "LLM APIs"],
      desc: "Architect autonomous multi-agent pipelines, private knowledge base agents, and bidirectional CRM syncing for high-growth enterprise accounts.",
    },
    {
      id: 2,
      title: "Senior Full-Stack Next.js / React Engineer",
      dept: "engineering",
      deptLabel: "Engineering",
      location: "Hyderabad / Remote (India)",
      type: "Full-Time",
      experience: "4+ years",
      tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      desc: "Build blisteringly fast web applications, enterprise portals, and headless e-commerce storefronts optimized for 100/100 Core Web Vitals.",
    },
    {
      id: 3,
      title: "Performance Marketing Growth Lead",
      dept: "growth",
      deptLabel: "Growth & Media",
      location: "Hyderabad (On-site)",
      type: "Full-Time",
      experience: "4+ years",
      tech: ["Meta Advantage+", "Google PMax", "GA4", "Klaviyo", "First-Party CAPI"],
      desc: "Direct and scale paid acquisition systems across major advertising channels for funded D2C brands and global B2B SaaS companies.",
    },
    {
      id: 4,
      title: "Technical SEO & Inbound Strategist",
      dept: "growth",
      deptLabel: "Growth & Media",
      location: "Hyderabad / Hybrid",
      type: "Full-Time",
      experience: "3+ years",
      tech: ["Schema Markup", "Core Web Vitals", "Ahrefs", "Content Clusters", "Next.js SEO"],
      desc: "Spearhead programmatic SEO, semantic knowledge graphs, and high-intent keyword strategies that scale high-margin organic pipeline.",
    },
    {
      id: 5,
      title: "Senior UI/UX & Design Systems Lead",
      dept: "design",
      deptLabel: "Design & Product",
      location: "Hyderabad / Hybrid",
      type: "Full-Time",
      experience: "4+ years",
      tech: ["Figma", "Design Systems", "Prototyping", "Conversion UX", "Micro-animations"],
      desc: "Craft state-of-the-art interactive user interfaces, conversion-optimized landing page systems, and digital product designs for modern software platforms.",
    },
  ];

  const perks = [
    {
      title: "Top-Tier Hardware Stipend",
      desc: "M-series MacBook Pro or custom high-end workstation plus external 4K monitors to ensure zero developer latency.",
      icon: "https://img.icons8.com/?size=96&id=16412&format=png&color=ef5b52",
    },
    {
      title: "Comprehensive Health Insurance",
      desc: "Full family health coverage with cashless hospitalization across top medical networks in India.",
      icon: "https://img.icons8.com/?size=96&id=852&format=png&color=7b4bf7",
    },
    {
      title: "Generous Learning Budget",
      desc: "₹1,00,000 annual allowance for books, specialized AI engineering courses, conferences, and technical certifications.",
      icon: "https://img.icons8.com/?size=96&id=11173&format=png&color=ef5b52",
    },
    {
      title: "Hybrid & High-Autonomy Culture",
      desc: "Work in our modern HITEC City studio with flexible hybrid days, zero micro-management, and high ownership.",
      icon: "https://img.icons8.com/?size=96&id=53373&format=png&color=7b4bf7",
    },
  ];

  const filteredJobs =
    activeDept === "all"
      ? jobs
      : jobs.filter((j) => j.dept === activeDept);

  return (
    <main className="ady-main-content">
      {/* ═══════════════════ SECTION 1: FLAGSHIP HERO ═══════════════════ */}
      <section className="ady-hero-section relative overflow-hidden" id="home">
        <div className="ady-tunnel-container" id="adyTunnel">
          <div className="ady-tunnel-layer ady-tunnel-1" />
          <div className="ady-tunnel-layer ady-tunnel-2" />
          <div className="ady-tunnel-layer ady-tunnel-3" />
        </div>

        <div className="shell text-center relative z-10 pt-16 pb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#ef5b52]/20 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ef5b52] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ef5b52]">
              Join Our Core Team
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0f172a] max-w-4xl mx-auto leading-tight mb-6">
            Build The Future Of Autonomous Growth &amp;{" "}
            <span className="ady-gradient-text">Digital Engineering</span>
          </h1>

          <p className="text-lg md:text-xl text-[#586882] max-w-2xl mx-auto mb-8 font-normal">
            Work with a high-density team of senior software engineers, AI architects, and growth practitioners in HITEC City, Hyderabad.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a href="#open-roles" className="shadcn-input-button-solid">
              <span>View Open Roles</span>
              <span className="badge-icon">&darr;</span>
            </a>
            <a href="#culture" className="shadcn-input-button">
              <span>Our Culture &amp; Perks</span>
              <span className="badge-icon">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════ STATS BRIDGE BAR (FLAGSHIP PATTERN) ═══════════════════ */}
      <div className="ady-stats-bridge-bar relative z-20">
        <div className="ady-stats-container">
          <div className="ady-stat-item">
            <p className="ady-stat-value">100%</p>
            <p className="ady-stat-label">In-House Craftsmanship</p>
          </div>
          <div className="ady-stat-item">
            <p className="ady-stat-value">Top 1%</p>
            <p className="ady-stat-label">Engineering Density</p>
          </div>
          <div className="ady-stat-item">
            <p className="ady-stat-value">₹1L+</p>
            <p className="ady-stat-label">Annual Learning Budget</p>
          </div>
          <div className="ady-stat-item">
            <p className="ady-stat-value">Hybrid</p>
            <p className="ady-stat-label">Autonomy &amp; Flexibility</p>
          </div>
        </div>
      </div>

      {/* ═══════════════════ SECTION 2: OPEN ROLES BOARD ═══════════════════ */}
      <section className="section py-20 bg-white border-t border-[#e2e8f0]" id="open-roles">
        <div className="shell max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ef5b52]/10 text-[#ef5b52] text-xs font-semibold uppercase tracking-wider mb-3">
              Career Opportunities
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] mb-4">
              Open Positions Across Engineering &amp; Growth
            </h2>
            <p className="text-base text-[#586882]">
              Explore active openings and apply directly to work on high-impact projects.
            </p>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {[
              { id: "all", label: "All Roles (5)" },
              { id: "ai", label: "AI Systems (1)" },
              { id: "engineering", label: "Engineering (1)" },
              { id: "growth", label: "Growth & Media (2)" },
              { id: "design", label: "Design (1)" },
            ].map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveDept(d.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeDept === d.id
                    ? "bg-[#0f172a] text-white shadow-md -translate-y-0.5"
                    : "bg-[#f8fafc] text-[#586882] hover:bg-slate-100 border border-[#e2e8f0]"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>

          {/* Job List */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-6 md:p-8 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#cbd5e1] hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold text-[#7b4bf7] px-2 py-0.5 rounded bg-[#7b4bf7]/10 uppercase tracking-wide">
                      {job.deptLabel}
                    </span>
                    <span className="text-xs text-[#586882]">&bull;</span>
                    <span className="text-xs font-medium text-[#586882]">{job.location}</span>
                    <span className="text-xs text-[#586882]">&bull;</span>
                    <span className="text-xs font-medium text-[#586882]">{job.type}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#0f172a] mb-2">{job.title}</h3>
                  <p className="text-xs text-[#586882] leading-relaxed mb-4">{job.desc}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {job.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium text-[#0f172a] px-2 py-0.5 rounded bg-white border border-[#e2e8f0]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0">
                  <Link
                    href="/contact"
                    className="shadcn-input-button-solid text-xs font-semibold px-6 py-2.5 inline-block text-center"
                  >
                    <span>Apply Now &rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 3: CULTURE & PERKS ═══════════════════ */}
      <section className="section py-20 bg-[#f8fafc] border-t border-[#e2e8f0]" id="culture">
        <div className="shell">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7b4bf7]/10 text-[#7b4bf7] text-xs font-semibold uppercase tracking-wider mb-3">
              Life At Adyantra
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] mb-4">
              Invested In Your Long-Term Mastery
            </h2>
            <p className="text-base text-[#586882]">
              We believe elite talent does its best work when equipped with the best tools, complete autonomy, and competitive incentives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center mb-5">
                    <img src={p.icon} width="26" height="26" alt={p.title} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0f172a] mb-2">{p.title}</h3>
                  <p className="text-xs text-[#586882] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 4: CALL TO ACTION BANNER ═══════════════════ */}
      <section className="growth-banner" id="growth-banner">
        <div className="shell">
          <div className="growth-banner__inner">
            <div className="growth-banner__content">
              <span className="growth-banner__kicker">DON&apos;T SEE YOUR ROLE?</span>
              <h2 id="growth-title" className="text-2xl md:text-3xl font-semibold text-white mt-2 mb-3">
                Pitch Us Your Superpower.
              </h2>
              <p className="text-sm text-white/80 max-w-xl">
                We are always excited to meet exceptional engineers, designers, and growth hackers. Send us your GitHub, portfolio, or proof of work.
              </p>
            </div>
            <div className="growth-banner__action">
              <Link href="mailto:careers@adyantra.in" className="btn btn--white btn--shadow">
                <span>Send Open Application</span>
                <span className="btn__arrow">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
