"use client";

import React from "react";
import Link from "next/link";
import KPAboutSection from "@/components/kanakkupillai/KPAboutSection";
import KPTechnicalPillars from "@/components/kanakkupillai/KPTechnicalPillars";
import KPTeamExpertise from "@/components/kanakkupillai/KPTeamExpertise";
import KPTestimonials from "@/components/kanakkupillai/KPTestimonials";
import KPFAQAccordion from "@/components/kanakkupillai/KPFAQAccordion";
import { ChevronRight, ArrowRight, Sparkles, ShieldCheck, Users, Trophy } from "lucide-react";

export default function AboutPage() {
  const aboutFaqs = [
    {
      q: "What makes Adyantra Digital different from typical marketing agencies?",
      a: "Unlike traditional agencies that rely on outsourced contractors or non-technical account managers, Adyantra unites senior software engineers, paid media strategists, and AI architects under one roof. Every campaign and system is built and maintained 100% in-house with direct technical access and radical commercial transparency.",
    },
    {
      q: "What is your core technology and growth stack?",
      a: "Our tech foundation leverages Next.js, React, Node.js, and high-converting modern web architectures. On the acquisition side, we build full-funnel systems with Google Ads (Search & PMax), Meta Ads (CAPI integration), and programmatic SEO. For automation, we architect custom AI agents, n8n, Make, Zapier, and WhatsApp Cloud API pipelines.",
    },
    {
      q: "How long has Adyantra been operating and who do you work with?",
      a: "We have been operating for over 6+ years and have partnered with 50+ high-growth brands across Education, Fashion & D2C, Healthcare, Real Estate, and IT Software Enterprises. We specialize in scaling businesses looking for predictable, measurable unit economics.",
    },
    {
      q: "Do you offer full-funnel execution or individual services?",
      a: "Both. Many clients begin with a targeted performance sprint (such as Meta & Google Ads optimization, a custom Next.js web application, or WhatsApp AI automation) and subsequently expand into our unified digital growth engine.",
    },
    {
      q: "How do we get started working with Adyantra?",
      a: "You can request a Free Growth Audit using our contact form or book a 30-minute discovery call. Our technical strategy leads will audit your current acquisition funnel, technology stack, and automation opportunities to deliver a tailored expansion roadmap.",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden font-sans bg-[#FFFFFF] text-[#12304A]">
      {/* ── Breadcrumb & Clean Page Header ── */}
      <section className="bg-[#12304A] text-white py-12 lg:py-16 border-b border-[#DCE3EB]/20 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#156bb2]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-[#DCE3EB] mb-4">
            <Link href="/" className="hover:text-[#FFC400] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-[#DCE3EB]/60" />
            <span className="text-[#FFC400] font-medium">About Us</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FFC400] bg-white/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-[#FFC400]" />
              Senior In-House Engineering & Growth Squads
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Engineering Commercial Advantage <span className="text-[#FFC400]">For Growing Businesses</span>
            </h1>
            <p className="text-sm sm:text-base text-[#DCE3EB] mt-3 leading-relaxed">
              We combine senior software engineers, paid performance media buyers, and autonomous AI architects into accountable, high-velocity growth squads.
            </p>
          </div>

          {/* Core Credentials Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#FFC400]">
                <Trophy className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#DCE3EB]">Experience</p>
                <p className="text-xs font-bold text-white">06+ Years Active</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#FFC400]">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#DCE3EB]">Brands Scaled</p>
                <p className="text-xs font-bold text-white">50+ Partnerships</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#149347]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#DCE3EB]">Delivery Guarantee</p>
                <p className="text-xs font-bold text-[#149347]">100% In-House</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#FFC400]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#DCE3EB]">Integrity</p>
                <p className="text-xs font-bold text-white">Zero Outsourcing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 1. Flagship About Story ── */}
      <KPAboutSection />

      {/* ── 2. Senior Execution Squads ── */}
      <KPTeamExpertise />

      {/* ── 3. Core Technical Pillars ── */}
      <KPTechnicalPillars />

      {/* ── 4. Client Reviews & Social Proof ── */}
      <KPTestimonials />

      {/* ── 5. Frequently Asked Questions (About Us) ── */}
      <KPFAQAccordion customFaqs={aboutFaqs} />

      {/* ── 6. High-Conversion Focused CTA Banner (Replaces redundant contact form block) ── */}
      <section className="py-14 bg-gradient-to-r from-[#12304A] via-[#10385C] to-[#12304A] text-white font-sans border-t border-[#DCE3EB]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FFC400] bg-white/10 px-3.5 py-1.5 rounded-full inline-block">
            Start Your Engagement
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Ready to Engineer a Measurable Digital Advantage?
          </h2>
          <p className="text-sm sm:text-base text-[#DCE3EB] max-w-xl mx-auto">
            Speak directly with our senior growth strategists. We analyze your bottlenecks and deliver a concrete 90-day execution roadmap.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FFC400] text-[#12304A] font-bold text-xs uppercase tracking-wider hover:bg-[#e6b000] shadow-md transition transform hover:-translate-y-0.5"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+918309275093"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition"
            >
              <span>📞 +91 83092 75093</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
