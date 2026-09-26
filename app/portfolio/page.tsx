"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ServicesScrollingBar from "@/components/sections/ServicesScrollingBar";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const caseStudies = [
    {
      id: 1,
      title: "UrbanStyle Luxury Fashion",
      category: "marketing",
      categoryLabel: "Performance Marketing",
      client: "D2C E-Commerce Brand",
      highlightMetric: "+340% ROAS Scaled",
      statValue: "$1.4M ARR",
      statDesc: "Scaled monthly revenue from $25k to $140k in 7 months",
      desc: "Architected a full-funnel acquisition engine combining Meta Advantage+ shopping campaigns, Google PMax retargeting, and automated post-purchase Klaviyo retention flows.",
      tags: ["Meta Ads", "Google PMax", "Shopify Plus", "Klaviyo"],
      img: "/assets/img/portfolio/case-study-ecommerce-scaling.svg",
    },
    {
      id: 2,
      title: "NovaTech B2B Enterprise",
      category: "ai",
      categoryLabel: "AI Automation Systems",
      client: "Enterprise SaaS & Cloud Infra",
      highlightMetric: "10x Lead Velocity",
      statValue: "< 5s Response",
      statDesc: "Autonomous qualification and CRM sync for 1,200+ monthly enterprise leads",
      desc: "Engineered an autonomous lead ingestion engine using LLM classifiers, instant HubSpot contact enrichment, and bidirectional Slack notifications for immediate executive booking.",
      tags: ["AI Agents", "HubSpot CRM", "FastAPI", "Slack Webhooks"],
      img: "/assets/img/portfolio/case-study-fintech-ai.svg",
    },
    {
      id: 3,
      title: "Apex Healthcare Network",
      category: "software",
      categoryLabel: "Web & Software Architecture",
      client: "Multi-Location Clinic Group",
      highlightMetric: "4,500+ Bookings / Mo",
      statValue: "100/100 Vitals",
      statDesc: "Sub-second Next.js web application with real-time slot calendar synchronization",
      desc: "Re-engineered a legacy appointment portal into a high-performance Next.js 15 web application with automated WhatsApp appointment reminders and local search optimization.",
      tags: ["Next.js 15", "PostgreSQL", "WhatsApp Cloud API", "Tailwind CSS"],
      img: "/assets/img/portfolio/case-study-booking-automation.svg",
    },
    {
      id: 4,
      title: "Global Scholars EdTech",
      category: "ai",
      categoryLabel: "AI Automation Systems",
      client: "Online Learning Academy",
      highlightMetric: "-52% Cost Per Lead",
      statValue: "85% Auto Resolution",
      statDesc: "RAG knowledge assistant handling 40,000+ monthly admission inquiries",
      desc: "Deployed a 24/7 conversational counseling bot integrated into WhatsApp and web chat that evaluates student eligibility, recommends curricula, and collects enrollment fees.",
      tags: ["RAG Vectors", "OpenAI API", "Stripe Connect", "Make.com"],
      img: "/assets/img/portfolio/case-study-whatsapp-crm.svg",
    },
    {
      id: 5,
      title: "Skyline Luxury Real Estate",
      category: "marketing",
      categoryLabel: "Performance Marketing",
      client: "Premium Property Developers",
      highlightMetric: "85% Units Sold in 60 Days",
      statValue: "₹180 Cr Pipeline",
      statDesc: "Hyper-targeted HNI acquisition via Google Search & Meta lead pipelines",
      desc: "Built a private investor acquisition funnel leveraging geo-fenced high-intent search terms, interactive 3D virtual floorplans, and instant CRM call scheduling.",
      tags: ["Google Search", "Meta Ads", "Salesforce Sync", "Interactive 3D"],
      img: "/assets/img/portfolio/case-study-saas-seo.svg",
    },
    {
      id: 6,
      title: "FinMatrix Global Payments",
      category: "software",
      categoryLabel: "Web & Software Architecture",
      client: "FinTech Compliance Platform",
      highlightMetric: "99.99% Cloud Uptime",
      statValue: "< 35ms TTFB",
      statDesc: "Multi-tenant regulatory portal processing high-volume transactions",
      desc: "Engineered an audit-ready compliance dashboard with strict role-based access control, cryptographic verification, and distributed microservices deployed to AWS ECS.",
      tags: ["React", "TypeScript", "AWS ECS", "Docker"],
      img: "/assets/img/portfolio/case-study-mobile-web-app.svg",
    },
  ];

  const filtered =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeFilter);

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
              Proven Client Impact
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[650] tracking-tight text-[#0f172a] max-w-4xl mx-auto leading-tight mb-6">
            Measured Outcomes &amp;{" "}
            <span className="ady-gradient-text font-[650]">Scalable Case Studies</span>
          </h1>

          <p className="text-lg md:text-xl text-[#586882] max-w-2xl mx-auto mb-8 font-normal">
            Explore how we combine aggressive performance marketing, modern web software, and autonomous AI automation to scale pipeline value for ambitious enterprises.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a href="#case-studies" className="shadcn-input-button-solid">
              <span>View Case Studies</span>
              <span className="badge-icon">&darr;</span>
            </a>
            <Link href="/contact" className="shadcn-input-button">
              <span>Request Growth Audit</span>
              <span className="badge-icon">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES SCROLLING SECTION ═══════════════════ */}
      <ServicesScrollingBar />

      {/* ═══════════════════ SECTION 2: CASE STUDIES GRID WITH FILTER ═══════════════════ */}
      <section className="section py-20 bg-white border-t border-[#e2e8f0]" id="case-studies">
        <div className="shell">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7b4bf7]/10 text-[#7b4bf7] text-xs font-semibold uppercase tracking-wider mb-3">
              Selected Engagements
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] mb-4">
              Real Work Delivering Predictable Results
            </h2>
            <p className="text-base text-[#586882]">
              Filter our verified deliverables across paid marketing campaigns, autonomous AI systems, and modern software architectures.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {[
              { id: "all", label: "All Engagements (6)" },
              { id: "marketing", label: "Performance Marketing (2)" },
              { id: "ai", label: "AI Automation Systems (2)" },
              { id: "software", label: "Web Software (2)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === tab.id
                    ? "bg-[#0f172a] text-white shadow-md -translate-y-0.5"
                    : "bg-[#f8fafc] text-[#586882] hover:bg-[#f1f5f9] border border-[#e2e8f0]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl bg-[#f8fafc] border border-[#e2e8f0] overflow-hidden hover:border-[#cbd5e1] hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Visual Header */}
                  <div className="p-6 bg-gradient-to-b from-[#f1f5f9] to-[#f8fafc] border-b border-[#e2e8f0] flex items-center justify-center h-56">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="max-h-44 w-auto object-contain drop-shadow"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-semibold text-[#7b4bf7] uppercase tracking-wide">
                        {item.categoryLabel}
                      </span>
                      <span className="text-xs font-bold text-[#ef5b52] px-2.5 py-0.5 rounded-full bg-[#ef5b52]/10">
                        {item.highlightMetric}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-[#0f172a] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-[#586882] mb-4">
                      {item.client}
                    </p>

                    <p className="text-xs text-[#586882] leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    {/* Stat Highlight Box */}
                    <div className="p-4 rounded-xl bg-white border border-[#e2e8f0] mb-5">
                      <div className="text-lg font-bold text-[#0f172a] font-mono">
                        {item.statValue}
                      </div>
                      <div className="text-[11px] text-[#586882] mt-0.5 leading-snug">
                        {item.statDesc}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {item.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium text-[#586882] px-2 py-0.5 rounded bg-white border border-[#e2e8f0]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-[#f1f5f9]">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#ef5b52] hover:text-[#d9483f]"
                  >
                    <span>Request Similar Growth Plan</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 3: CALL TO ACTION BANNER ═══════════════════ */}
      <section className="growth-banner" id="growth-banner">
        <div className="shell">
          <div className="growth-banner__inner">
            <div className="growth-banner__content">
              <span className="growth-banner__kicker">READY FOR MEASURABLE RESULTS?</span>
              <h2 id="growth-title" className="text-2xl md:text-3xl font-semibold text-white mt-2 mb-3">
                Let&apos;s Build Your Next Flagship Case Study.
              </h2>
              <p className="text-sm text-white/80 max-w-xl">
                Partner with senior practitioners to evaluate your current bottlenecks, scale ad performance, and engineer automated conversion pipelines.
              </p>
            </div>
            <div className="growth-banner__action">
              <Link href="/contact" className="btn btn--white btn--shadow">
                <span>Book Strategy Call</span>
                <span className="btn__arrow">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
