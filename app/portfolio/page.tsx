"use client";

import Link from "next/link";
import { useState } from "react";
import UnifiedPageHero from "@/components/hero/UnifiedPageHero";
import KPDomainsWeServe from "@/components/kanakkupillai/KPDomainsWeServe";
import KPTeamExpertise from "@/components/kanakkupillai/KPTeamExpertise";
import KPTestimonials from "@/components/kanakkupillai/KPTestimonials";
import KPFAQAccordion from "@/components/kanakkupillai/KPFAQAccordion";
import KPContactSection from "@/components/kanakkupillai/KPContactSection";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

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
      img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
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
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
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
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
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
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
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
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
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
      img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const filtered =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeFilter);

  return (
    <main className="min-h-screen overflow-x-hidden font-sans bg-[#FFFFFF] text-[#12304A]">
      {/* ═══════════════════ HERO ═══════════════════ */}
      <UnifiedPageHero
        badge="PROVEN CLIENT IMPACT • MEASURED OUTCOMES"
        ratingText="4.9 / 5 RATING"
        headlinePrefix="Engineering Commercial Advantage with"
        highlightedText="Verified Case Studies & ROAS"
        headlineSuffix="Across 50+ Enterprises."
        description="Explore how we combine aggressive performance marketing, modern web software, and autonomous AI automation to scale pipeline value for ambitious enterprises."
        primaryCtaText="BOOK A STRATEGY CALL"
        primaryCtaHref="/contact"
        secondaryCtaText="VIEW CASE STUDIES"
        secondaryCtaHref="#case-studies"
        serviceTitle="Performance Marketing (Meta/Google Ads)"
        stats={[
          { val: "3.4x", label: "Average Blended ROAS" },
          { val: "$140k+", label: "Monthly Revenue Scaled" },
          { val: "85%", label: "Lead Resolution Auto" },
          { val: "100%", label: "In-House Delivery" },
        ]}
      />

      {/* ═══════════════════ CASE STUDIES GRID ═══════════════════ */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#FAFBFC] border-b border-[#DCE3EB] font-sans relative overflow-hidden" id="case-studies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header: Matching Exact Image Style */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
            <div>
              {/* Tagline Badge with Golden Yellow Line */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs sm:text-[13px] font-medium uppercase tracking-widest text-[#12304A] font-sans">
                  SELECTED ENGAGEMENTS
                </span>
                <span className="w-14 h-[2px] bg-[#FFC400] rounded-full inline-block" />
              </div>

              {/* Two-Line Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight leading-[1.12] font-sans text-[#12304A]">
                Verified Deliverables <br />
                <span className="text-[#FFC400]">&amp; Commercial Outcomes</span>
              </h2>
            </div>

            {/* Right Subhead Paragraph */}
            <div className="max-w-md">
              <p className="text-base sm:text-[17px] font-normal leading-relaxed font-sans text-[#64748B]">
                Filter our verified deliverables across paid marketing campaigns, autonomous AI systems, and modern software architectures.
              </p>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {[
              { id: "all", label: `All Engagements (${caseStudies.length})` },
              { id: "marketing", label: "Performance Marketing" },
              { id: "ai", label: "AI Automation Systems" },
              { id: "software", label: "Web Software" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wider transition-all duration-200 cursor-pointer font-sans ${
                  activeFilter === tab.id
                    ? "bg-[#12304A] text-white shadow-sm"
                    : "bg-[#FFFFFF] text-[#64748B] hover:text-[#12304A] border border-[#DCE3EB] hover:bg-[#F5F7FA]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Case Studies Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <article
                key={item.id}
                className="rounded-[28px] bg-[#FFFFFF] border border-[#DCE3EB] overflow-hidden hover:border-[#FFC400] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group p-6 sm:p-7 shadow-[0_4px_20px_rgba(18,48,74,0.04)]"
              >
                <div>
                  {/* Photo Container */}
                  <div className="h-48 sm:h-52 rounded-2xl overflow-hidden relative shadow-sm mb-5 bg-[#FAFBFC]">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#12304A]/90 text-[#FFC400] backdrop-blur-md shadow-sm font-sans">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{item.highlightMetric}</span>
                      </span>
                    </div>
                  </div>

                  {/* Category & Title */}
                  <div className="mb-2">
                    <span className="text-[11px] font-semibold text-[#12304A] uppercase tracking-wider font-sans">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium text-[#12304A] mb-1 leading-snug font-sans group-hover:text-[#12304A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-normal text-[#64748B] mb-3 font-sans">
                    {item.client}
                  </p>

                  <p className="text-xs sm:text-[13.5px] text-[#64748B] leading-relaxed mb-5 font-sans font-normal">
                    {item.desc}
                  </p>

                  {/* Stat Highlight Box */}
                  <div className="p-4 rounded-xl bg-[#FAFBFC] border border-[#DCE3EB] mb-5">
                    <div className="text-lg font-semibold text-[#12304A] font-sans">
                      {item.statValue}
                    </div>
                    <div className="text-[11.5px] text-[#64748B] mt-0.5 leading-snug font-sans font-normal">
                      {item.statDesc}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {item.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium text-[#12304A] px-2.5 py-0.5 rounded-full bg-[#EAF2F9] border border-[#DCE3EB] font-sans"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-[#DCE3EB]">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#12304A] hover:bg-[#1a4469] text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-md group/btn w-full font-sans"
                  >
                    <span>Request Similar Growth Plan</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════ TARGET DOMAINS WE SERVE ═══════════════════ */}
      <KPDomainsWeServe />

      {/* ═══════════════════ SENIOR EXECUTION SQUADS ═══════════════════ */}
      <KPTeamExpertise />

      {/* ═══════════════════ CLIENT REVIEWS ═══════════════════ */}
      <KPTestimonials />

      {/* ═══════════════════ FREQUENTLY ASKED QUESTIONS ═══════════════════ */}
      <KPFAQAccordion />

      {/* ═══════════════════ DIRECT CONTACT & AUDIT FORM ═══════════════════ */}
      <KPContactSection />
    </main>
  );
}
