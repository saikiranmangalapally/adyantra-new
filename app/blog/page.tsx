"use client";

import React, { useState } from "react";
import UnifiedPageHero from "@/components/hero/UnifiedPageHero";
import KPFAQAccordion from "@/components/kanakkupillai/KPFAQAccordion";
import KPContactSection from "@/components/kanakkupillai/KPContactSection";
import { BookOpen, Sparkles, ArrowRight, CheckCircle2, Bell } from "lucide-react";

export default function BlogPage() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 5000);
  };

  const blogFaqs = [
    {
      q: "How frequently does Adyantra publish research and dispatches?",
      a: "Our core engineering and growth teams release deep-dive architectural breakdowns, case studies, and playbooks on a regular basis, focusing on tested production systems rather than speculative theories.",
    },
    {
      q: "Can we hire Adyantra to implement the workflows outlined in your playbooks?",
      a: "Yes. Every playbook and architecture published in our blog represents an in-house capability. You can request a discovery consultation to implement these custom pipelines for your enterprise.",
    },
    {
      q: "Are the code repositories and automation templates open-source?",
      a: "We frequently share sanitised n8n JSON templates, Next.js components, and webhook boilerplates with our newsletter subscribers and client partners.",
    },
    {
      q: "How do I subscribe to the weekly engineering newsletter?",
      a: "Simply enter your work email in the dispatch box on this page to receive our teardowns directly in your inbox with zero spam.",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden font-sans bg-[#FFFFFF] text-[#12304A]">
      {/* ═══════════════════ HERO ═══════════════════ */}
      <UnifiedPageHero
        badge="GROWTH INSIGHTS • ARCHITECTURAL TEARDOWNS • DISPATCHES"
        ratingText="4.9 / 5 RATING"
        headlinePrefix="Engineering Insights &"
        highlightedText="Architectural Dispatches"
        headlineSuffix="For High-Growth Brands."
        description="Practical teardowns, architectural blueprints, and unit-economic strategies from senior practitioners scaling modern digital operations."
        primaryCtaText="EXPLORE DISPATCHES"
        primaryCtaHref="#dispatches"
        secondaryCtaText="REQUEST STRATEGY AUDIT"
        secondaryCtaHref="/contact"
        serviceTitle="Technical SEO & Content Strategy"
        stats={[
          { val: "Weekly", label: "Research Sprints" },
          { val: "100%", label: "Practitioner Authored" },
          { val: "Zero", label: "AI Generated Fluff" },
          { val: "100%", label: "Verified Data Attribution" },
        ]}
      />

      {/* ═══════════════════ DISPATCHES SECTION (EMPTY STATE) ═══════════════════ */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#FAFBFC] border-b border-[#DCE3EB] font-sans relative overflow-hidden" id="dispatches">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header: Matching Exact Image Style (Golden Yellow Line & Two-Line Heading) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
            <div>
              {/* Tagline Badge with Golden Yellow Line */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs sm:text-[13px] font-medium uppercase tracking-widest text-[#12304A] font-sans">
                  ENGINEERING DISPATCHES
                </span>
                <span className="w-14 h-[2px] bg-[#FFC400] rounded-full inline-block" />
              </div>

              {/* Two-Line Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight leading-[1.12] font-sans text-[#12304A]">
                Architectural Playbooks <br />
                <span className="text-[#FFC400]">&amp; Case Studies</span>
              </h2>
            </div>

            {/* Right-Aligned Subheading Paragraph */}
            <div className="max-w-md">
              <p className="text-base sm:text-[17px] font-normal leading-relaxed font-sans text-[#64748B]">
                Practical teardowns, system architectures, and growth playbooks. Sign up below to be notified as soon as new dispatches go live.
              </p>
            </div>
          </div>

          {/* ── Polished Empty State Container ── */}
          <div className="bg-[#FFFFFF] rounded-[32px] border border-[#DCE3EB] p-8 sm:p-14 text-center max-w-3xl mx-auto shadow-[0_4px_24px_rgba(18,48,74,0.04)]">
            {/* Decreased & Balanced Icon Container */}
            <div className="w-12 h-12 rounded-xl bg-[#EAF2F9] border border-[#DCE3EB] text-[#12304A] flex items-center justify-center mx-auto mb-5 shadow-xs">
              <BookOpen className="w-5 h-5 stroke-[2.2] text-[#12304A]" />
            </div>

            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF2F9] border border-[#DCE3EB] text-[#12304A] text-xs font-medium mb-4 font-sans">
              <Sparkles className="w-3.5 h-3.5 text-[#12304A]" />
              <span>Dispatches In Production</span>
            </div>

            {/* Empty State Title */}
            <h3 className="text-2xl sm:text-3xl font-medium text-[#12304A] tracking-tight font-sans mb-3">
              No Dispatches Published Yet
            </h3>

            {/* Empty State Description */}
            <p className="text-sm sm:text-base text-[#64748B] font-normal leading-relaxed max-w-lg mx-auto font-sans mb-8">
              Our technical growth and software engineering teams are currently documenting our proprietary growth frameworks, server-side tracking teardowns, and autonomous AI automation playbooks. Be the first to receive new dispatches when they launch.
            </p>

            {/* Early Notification Subscription Form */}
            {subscribed ? (
              <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium font-sans">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                <span>Thank you! You are on the early dispatch list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-3 rounded-full border border-[#DCE3EB] bg-[#FFFFFF] text-[#12304A] placeholder-[#64748B]/60 text-sm focus:outline-none focus:border-[#12304A] focus:ring-2 focus:ring-[#12304A]/10 font-sans transition-all"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#12304A] hover:bg-[#1a4469] text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-md hover:-translate-y-0.5 group shrink-0 font-sans cursor-pointer"
                >
                  <Bell className="w-3.5 h-3.5" />
                  <span>Notify Me</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* ═══════════════════ FREQUENTLY ASKED QUESTIONS ═══════════════════ */}
      <KPFAQAccordion customFaqs={blogFaqs} />

      {/* ═══════════════════ DIRECT CONTACT & AUDIT FORM ═══════════════════ */}
      <KPContactSection />
    </main>
  );
}
