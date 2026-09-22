"use client";

import Link from "next/link";
import { useState } from "react";

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
      icon: "https://img.icons8.com/?size=96&id=852&format=png&color=2563eb",
    },
    {
      title: "Annual Learning & AI Budget",
      desc: "₹1,00,000+ per year for courses, LLM subscriptions, technical books, API testing credits, and developer tools.",
      icon: "https://img.icons8.com/?size=96&id=4052&format=png&color=0284c7",
    },
    {
      title: "Top-Tier Hardware",
      desc: "Latest Apple MacBook Pro M3/M4 or custom Linux dev workstation with dual 4K external monitors.",
      icon: "https://img.icons8.com/?size=96&id=16412&format=png&color=2563eb",
    },
    {
      title: "Flexible Hybrid Autonomy",
      desc: "Work from our modern HITEC City collaborative studio or from home. We measure outcomes, not clocked seat time.",
      icon: "https://img.icons8.com/?size=96&id=2854&format=png&color=0284c7",
    },
  ];

  const filteredJobs =
    activeDept === "all" ? jobs : jobs.filter((j) => j.dept === activeDept);

  return (
    <main className="ady-main-content bg-white">
      {/* ═══════════════════ SECTION 1: FLAGSHIP HERO ═══════════════════ */}
      <section className="ady-hero-section relative overflow-hidden" id="home">
        <div className="ady-tunnel-container" id="adyTunnel">
          <div className="ady-tunnel-layer ady-tunnel-1" />
          <div className="ady-tunnel-layer ady-tunnel-2" />
          <div className="ady-tunnel-layer ady-tunnel-3" />
        </div>

        <div className="shell text-center relative z-10 pt-16 pb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eff6ff] border border-[#bfdbfe]/60 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2563eb]">
              Join Our Core Team
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#0f172a] max-w-4xl mx-auto leading-tight mb-6 font-heading">
            Build The Future Of Autonomous Growth &amp;{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#0284c7] bg-clip-text text-transparent">
              Digital Engineering
            </span>
          </h1>

          <p className="text-base md:text-lg text-[#64748b] max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Work with a high-density team of senior software engineers, AI architects, and growth practitioners in HITEC City, Hyderabad.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href="#open-roles"
              className="px-6 py-3.5 rounded-full bg-[#0f172a] text-white font-medium text-sm hover:bg-[#1e293b] shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>View Open Roles</span>
              <span className="text-xs">&darr;</span>
            </a>
            <a
              href="#culture"
              className="px-6 py-3.5 rounded-full bg-white text-[#0f172a] border border-[#e2e8f0] font-medium text-sm hover:bg-[#f8fafc] hover:border-[#cbd5e1] transition-all inline-flex items-center gap-2 shadow-sm"
            >
              <span>Our Culture &amp; Perks</span>
              <span className="text-xs">&rarr;</span>
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
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eff6ff] text-[#2563eb] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#bfdbfe]/60">
              Career Opportunities
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] mb-4 font-heading">
              Open Positions Across Engineering &amp; Growth
            </h2>
            <p className="text-base text-[#64748b]">
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
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeDept === d.id
                    ? "bg-[#0f172a] text-white shadow-md -translate-y-0.5"
                    : "bg-[#f8fafc] text-[#64748b] hover:text-[#0f172a] hover:bg-slate-100 border border-[#e2e8f0]"
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
                    <span className="text-[10px] font-bold text-[#2563eb] px-2.5 py-0.5 rounded-full bg-[#eff6ff] border border-[#bfdbfe]/60 uppercase tracking-wide">
                      {job.deptLabel}
                    </span>
                    <span className="text-xs text-[#64748b]">&bull;</span>
                    <span className="text-xs font-medium text-[#64748b]">{job.location}</span>
                    <span className="text-xs text-[#64748b]">&bull;</span>
                    <span className="text-xs font-medium text-[#64748b]">{job.type}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#0f172a] mb-2 font-heading">{job.title}</h3>
                  <p className="text-xs text-[#64748b] leading-relaxed mb-4">{job.desc}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {job.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium text-[#0f172a] px-2.5 py-0.5 rounded-full bg-white border border-[#e2e8f0]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0">
                  <Link
                    href="/contact"
                    className="px-6 py-2.5 rounded-full bg-[#0f172a] text-white font-medium text-xs hover:bg-[#1e293b] shadow-sm inline-block text-center transition-colors"
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
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eff6ff] text-[#2563eb] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#bfdbfe]/60">
              Life At Adyantra
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] mb-4 font-heading">
              Invested In Your Long-Term Mastery
            </h2>
            <p className="text-base text-[#64748b]">
              We believe elite talent does its best work when equipped with the best tools, complete autonomy, and competitive incentives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm flex flex-col justify-between hover:border-[#cbd5e1] hover:shadow-md transition-all">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center mb-5">
                    <img src={p.icon} width="26" height="26" alt={p.title} />
                  </div>
                  <h3 className="text-base font-semibold text-[#0f172a] mb-2 font-heading">{p.title}</h3>
                  <p className="text-xs text-[#64748b] leading-relaxed">{p.desc}</p>
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
              <span className="growth-banner__kicker text-[#60a5fa]">DON&apos;T SEE YOUR ROLE?</span>
              <h2 id="growth-title" className="text-2xl md:text-3xl font-semibold text-white mt-2 mb-3 font-heading">
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
