"use client";

import Link from "next/link";
import { useState } from "react";
import UnifiedPageHero from "@/components/hero/UnifiedPageHero";
import KPTeamExpertise from "@/components/kanakkupillai/KPTeamExpertise";
import KPFAQAccordion from "@/components/kanakkupillai/KPFAQAccordion";
import KPContactSection from "@/components/kanakkupillai/KPContactSection";
import { ArrowRight, Sparkles, Laptop, Rocket, Zap, HeartHandshake } from "lucide-react";

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
      id: "cro-designer",
      dept: "design",
      deptLabel: "Design Systems",
      title: "UI/UX & Conversion Rate Designer",
      location: "HITEC City, Hyderabad (Hybrid)",
      type: "Full-Time",
      desc: "Design high-converting Figma design systems, direct-response ad creative bundles, and interactive landing pages backed by heatmaps.",
      tech: ["Figma", "Design Tokens", "Hotjar", "After Effects", "Tailwind CSS"],
    },
  ];

  const perks = [
    {
      icon: Laptop,
      title: "Top-Tier Workstations",
      desc: "Latest Apple Silicon M-series hardware, 4K displays, and your choice of paid developer tools & IDEs.",
    },
    {
      icon: Rocket,
      title: "High-Autonomy Culture",
      desc: "Zero bureaucracy or micro-management. Own your projects from architectural blueprinting to production deploy.",
    },
    {
      icon: Zap,
      title: "Generous Learning Stipend",
      desc: "Annual allowance for technical conferences, certifications, books, and frontier AI model subscriptions.",
    },
    {
      icon: HeartHandshake,
      title: "Comprehensive Wellness",
      desc: "Premium family health insurance, flexible hybrid schedules, and dedicated wellness breaks.",
    },
  ];

  const careerFaqs = [
    {
      q: "Where is the Adyantra engineering office located?",
      a: "Our core engineering studio is located in HITEC City, Hyderabad, Telangana. We support hybrid work models with in-person collaboration sprints.",
    },
    {
      q: "What is your interview and evaluation process?",
      a: "Our process consists of 3 stages: an initial 20-minute cultural alignment conversation, a practical take-home or live technical architecture session with senior peers, and a final leadership conversation.",
    },
    {
      q: "Do you hire remote team members?",
      a: "Yes. Certain roles, especially Technical SEO and specialized engineering, are open to remote candidates located across India and overlapping time zones.",
    },
  ];

  const filteredJobs =
    activeDept === "all"
      ? jobs
      : jobs.filter((j) => j.dept === activeDept);

  return (
    <main className="min-h-screen overflow-x-hidden font-sans bg-[#FFFFFF] text-[#12304A]">
      {/* ═══════════════════ HERO ═══════════════════ */}
      <UnifiedPageHero
        badge="JOIN OUR CORE TEAM • HITEC CITY, HYDERABAD"
        ratingText="4.9 / 5 RATING"
        headlinePrefix="Build The Future Of"
        highlightedText="Autonomous AI & Growth Systems"
        headlineSuffix="With Senior Engineers."
        description="Work with a high-density team of senior software engineers, AI architects, and performance marketers in HITEC City, Hyderabad. Zero red tape, high autonomy."
        primaryCtaText="VIEW OPEN ROLES"
        primaryCtaHref="#open-roles"
        secondaryCtaText="CULTURE & PERKS"
        secondaryCtaHref="#culture"
        serviceTitle="Full-Stack & AI Engineering"
        stats={[
          { val: "Top 1%", label: "Senior Engineering Density" },
          { val: "100%", label: "Direct In-House Culture" },
          { val: "HITEC City", label: "Hyderabad Tech Hub" },
          { val: "Flexible", label: "Hybrid Work Culture" },
        ]}
      />

      {/* ═══════════════════ OPEN ROLES SECTION ═══════════════════ */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#FAFBFC] border-b border-[#DCE3EB] font-sans relative overflow-hidden" id="open-roles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header: Matching Exact Image Style */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
            <div>
              {/* Tagline Badge with Golden Yellow Line */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs sm:text-[13px] font-medium uppercase tracking-widest text-[#12304A] font-sans">
                  CAREER OPPORTUNITIES
                </span>
                <span className="w-14 h-[2px] bg-[#FFC400] rounded-full inline-block" />
              </div>

              {/* Two-Line Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight leading-[1.12] font-sans text-[#12304A]">
                Open Positions Across <br />
                <span className="text-[#FFC400]">Engineering &amp; Growth</span>
              </h2>
            </div>

            {/* Right Subhead Paragraph */}
            <div className="max-w-md">
              <p className="text-base sm:text-[17px] font-normal leading-relaxed font-sans text-[#64748B]">
                Explore active openings and apply directly to work on high-impact projects alongside senior practitioners.
              </p>
            </div>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap gap-2.5 mb-10">
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
                className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wider transition-all duration-200 cursor-pointer font-sans ${
                  activeDept === d.id
                    ? "bg-[#12304A] text-white shadow-sm"
                    : "bg-[#FFFFFF] text-[#64748B] hover:text-[#12304A] border border-[#DCE3EB] hover:bg-[#F5F7FA]"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="rounded-[24px] bg-[#FFFFFF] border border-[#DCE3EB] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#FFC400] hover:shadow-lg transition-all duration-300 shadow-[0_4px_20px_rgba(18,48,74,0.04)]"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className="text-[11px] font-semibold text-[#12304A] px-2.5 py-0.5 rounded-full bg-[#EAF2F9] border border-[#DCE3EB] uppercase tracking-wide font-sans">
                      {job.deptLabel}
                    </span>
                    <span className="text-xs text-[#64748B]">&bull;</span>
                    <span className="text-xs font-normal text-[#64748B] font-sans">{job.location}</span>
                    <span className="text-xs text-[#64748B]">&bull;</span>
                    <span className="text-xs font-normal text-[#64748B] font-sans">{job.type}</span>
                  </div>

                  <h3 className="text-xl font-medium text-[#12304A] mb-2 font-sans">{job.title}</h3>
                  <p className="text-xs sm:text-[13.5px] text-[#64748B] font-normal leading-relaxed mb-4 font-sans">{job.desc}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {job.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-normal text-[#12304A] px-2.5 py-0.5 rounded-full bg-[#FAFBFC] border border-[#DCE3EB] font-sans"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 self-start md:self-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#12304A] hover:bg-[#1a4469] text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-md group cursor-pointer font-sans"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════ CULTURE & PERKS ═══════════════════ */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#FFFFFF] border-b border-[#DCE3EB] font-sans relative overflow-hidden" id="culture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs sm:text-[13px] font-medium uppercase tracking-widest text-[#12304A] font-sans">
                  LIFE AT ADYANTRA
                </span>
                <span className="w-14 h-[2px] bg-[#FFC400] rounded-full inline-block" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight leading-[1.12] font-sans text-[#12304A]">
                Invested In Your <br />
                <span className="text-[#FFC400]">Long-Term Mastery</span>
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-base sm:text-[17px] font-normal leading-relaxed font-sans text-[#64748B]">
                We believe elite talent does its best work when equipped with the best tools, complete autonomy, and competitive incentives.
              </p>
            </div>
          </div>

          {/* 4 Perk Cards with Decreased, Balanced Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[28px] bg-[#FFFFFF] border border-[#DCE3EB] p-6 sm:p-7 shadow-[0_4px_20px_rgba(18,48,74,0.04)] hover:border-[#FFC400] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#EAF2F9] border border-[#DCE3EB] text-[#12304A] group-hover:bg-[#12304A] group-hover:text-[#FFC400] flex items-center justify-center shrink-0 shadow-xs transition-all duration-300 mb-5">
                      <Icon className="w-4.5 h-4.5 stroke-[2.2]" />
                    </div>
                    <h3 className="text-lg font-medium text-[#12304A] mb-2 font-sans">{perk.title}</h3>
                    <p className="text-xs sm:text-[13.5px] text-[#64748B] font-normal leading-relaxed font-sans">{perk.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════ SENIOR EXECUTION SQUADS ═══════════════════ */}
      <KPTeamExpertise />

      {/* ═══════════════════ FREQUENTLY ASKED QUESTIONS ═══════════════════ */}
      <KPFAQAccordion customFaqs={careerFaqs} />

      {/* ═══════════════════ DIRECT CONTACT & AUDIT FORM ═══════════════════ */}
      <KPContactSection />
    </main>
  );
}
