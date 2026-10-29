"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Code2,
  TrendingUp,
  Bot,
  Search,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function KPTeamExpertise() {


  const squads = [
    {
      id: "media",
      number: "01",
      title: "Paid Media Buying",
      icon: TrendingUp,
      summary:
        "Dedicated performance marketers and media buyers scaling high-ROAS paid campaigns with continuous budget tuning and daily creative testing.",
      deliverables: [
        "Meta Ads CAPI & Server-Side sGTM",
        "Google Ads Search & Performance Max",
        "Weekly High-Tempo Creative Sprints",
        "Live Blended CAC & ROAS Telemetry",
      ],
      stack: "Meta CAPI • Google Ads • Looker Studio • GA4",
    },
    {
      id: "engineering",
      number: "02",
      title: "Web Engineering",
      icon: Code2,
      summary:
        "Senior full-stack software engineers deploying ultra-fast Next.js web applications, headless storefronts, and conversion-engineered checkouts.",
      deliverables: [
        "Headless Next.js 15 & React 19 Architectures",
        "Sub-Second TTFB & 100 Core Web Vitals",
        "Custom Checkout & CRM Pipeline Handlers",
        "End-to-End Enterprise Speed & SEO Audits",
      ],
      stack: "Next.js • TypeScript • Tailwind • Node.js",
    },
    {
      id: "ai",
      number: "03",
      title: "Autonomous AI CRM",
      icon: Bot,
      summary:
        "AI workflow architects deploying 24/7 WhatsApp Cloud API agents that qualify prospects instantly and synchronize directly with your CRM.",
      deliverables: [
        "WhatsApp Cloud API 24/7 Smart Bots",
        "Automated AI Lead Scoring & Routing",
        "Instant Meeting Booking & Calendar Sync",
        "HubSpot, Zoho & Salesforce Bi-Directional Sync",
      ],
      stack: "OpenAI • WhatsApp API • n8n • Make",
    },
    {
      id: "seo",
      number: "04",
      title: "Technical SEO",
      icon: Search,
      summary:
        "Organic search architects building programmatic topic clusters and schema graphs that compound high-intent inbound pipeline perpetually.",
      deliverables: [
        "Programmatic Topic Cluster Silos",
        "JSON-LD Schema Graph Injection",
        "Core Web Vitals SERP Optimization",
        "High-Authority Editorial Link Acquisition",
      ],
      stack: "Search Console • Ahrefs • Screaming Frog",
    },
  ];

  return (
    <section
      className="w-full py-12 sm:py-14 lg:py-16 bg-[#FAFBFC] border-b border-[#DCE3EB] font-sans relative overflow-hidden"
      id="team"
      aria-label="Our Team & Expertise"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header (Exact Image Style: Split Header with Yellow Line & Golden Highlight) ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            {/* Tagline Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs sm:text-[13px] font-medium uppercase tracking-widest text-[#12304A] font-sans">
                OUR TEAM &amp; EXPERTISE
              </span>
              <span className="w-14 h-[2px] bg-[#FFC400] rounded-full inline-block" />
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#12304A] tracking-tight leading-[1.15] font-sans">
              Direct Senior Execution Squads. <br />
              <span className="text-[#FFC400]">Zero Middle Management.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <p className="text-base sm:text-[17px] text-[#64748B] leading-relaxed font-normal font-sans max-w-sm">
              Direct collaboration with senior engineers, performance marketers, and AI architects. Zero junior agency layers.
            </p>

            {/* Quick Header CTA: Deep Navy Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-[#12304A] hover:bg-[#1a4469] text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-md hover:-translate-y-0.5 group cursor-pointer shrink-0 font-sans"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ── 4 Dedicated Execution Squads in Cloud White & Soft Blue-White ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {squads.map((squad, idx) => {
            const Icon = squad.icon;

            return (
              <div
                key={squad.id}
                className="relative rounded-3xl p-6 sm:p-7 border border-[#DCE3EB] bg-[#FFFFFF] transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_24px_rgba(18,48,74,0.04)] hover:shadow-xl hover:border-[#FFC400] hover:-translate-y-1.5"
              >
                <div>
                  {/* Integrated Header: Icon beside Title (Decreased & Balanced) */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF2F9] border border-[#DCE3EB] text-[#12304A] group-hover:bg-[#12304A] group-hover:text-[#FFC400] flex items-center justify-center shrink-0 shadow-xs transition-all duration-300">
                      <Icon className="w-4.5 h-4.5 stroke-[2.2]" />
                    </div>
                    <h3 className="text-[17px] font-medium text-[#12304A] leading-tight font-sans flex-1 min-w-0">
                      {squad.title}
                    </h3>
                  </div>

                  {/* Overview Summary */}
                  <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed font-normal font-sans mb-4 min-h-[48px]">
                    {squad.summary}
                  </p>

                  {/* Core Deliverables with Emerald Green Checkmarks */}
                  <div className="space-y-2.5 pt-3 border-t border-[#DCE3EB]">
                    {squad.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-[12.5px] font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#1AB26E]" />
                        <span className="leading-snug text-[#12304A]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Footer in Silver White */}
                <div className="pt-4 mt-5 border-t border-[#DCE3EB]">
                  <span className="inline-block px-3 py-1 rounded-lg text-[10.5px] font-medium font-sans border border-[#DCE3EB] bg-[#FAFBFC] text-[#64748B]">
                    {squad.stack}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
