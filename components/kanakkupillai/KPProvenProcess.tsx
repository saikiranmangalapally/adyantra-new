"use client";

import React from "react";
import Link from "next/link";
import {
  Search,
  Layers,
  Code2,
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function KPProvenProcess() {
  const steps = [
    {
      num: "01",
      timeline: "Days 1 – 7",
      title: "Discovery & Technical Audit",
      desc: "We analyze your historical ad spend, tracking integrity, customer acquisition bottlenecks, and tech stack to identify immediate revenue leaks.",
      points: ["Tracking & attribution health check", "Funnel conversion audit", "Competitor & cohort benchmark"],
    },
    {
      num: "02",
      timeline: "Days 8 – 14",
      title: "Architecture & Blueprint",
      desc: "Our senior architects design custom acquisition funnels, server-side CAPI pipelines, and conversational AI workflows tailored to your unit economics.",
      points: ["Full-funnel technical roadmap", "Target CAC & ROAS model", "Agent conversation trees"],
    },
    {
      num: "03",
      timeline: "Days 15 – 30",
      title: "In-House Execution & Launch",
      desc: "Our engineering and media guild produces direct-response creative, configures server tags, trains custom AI agents, and goes live.",
      points: ["Zero white-label outsourcing", "Direct-response creative sprints", "Staging & production validation"],
    },
    {
      num: "04",
      timeline: "Ongoing",
      title: "Scaling & Continuous Autonomy",
      desc: "Daily algorithmic bid management, landing page split testing, and agent performance monitoring ensure your margins stay healthy as budgets scale.",
      points: ["Daily ROAS velocity monitoring", "Continuous multivariate A/B tests", "Autonomous lead qualification"],
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#f4f7f9] border-b border-[#e4e4e4] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-medium uppercase tracking-wider text-[#156bb2] bg-[#eaf3fa] px-3.5 py-1.5 rounded-full inline-block mb-3">
            Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1e3238] tracking-tight">
            A Transparent 4-Step Growth Methodology
          </h2>
          <p className="text-sm sm:text-base text-[#555b6d] mt-3">
            Every engagement follows a structured, milestone-driven execution cycle with clear deliverables.
          </p>
        </div>

        {/* Process Steps Cards Grid (Kanakkupillai Numbered Sequence Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#e4e4e4] p-7 shadow-sm hover:shadow-[0_12px_30px_rgba(21,107,178,0.12)] hover:border-[#156bb2] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-medium text-[#156bb2]/20 font-sans">
                    {step.num}
                  </span>
                  <span className="text-[11px] font-medium text-[#156bb2] bg-[#eaf3fa] px-2.5 py-1 rounded-full">
                    {step.timeline}
                  </span>
                </div>

                <h3 className="text-lg font-medium text-[#1e3238] mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-[#555b6d] leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#eceff1] space-y-1.5">
                {step.points.map((pt, pi) => (
                  <div key={pi} className="flex items-center gap-2 text-xs text-[#1e3238] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7ebe47] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-white bg-[#156bb2] hover:bg-[#0f548c] shadow-[0_4px_16px_rgba(21,107,178,0.25)] transition-all"
          >
            <span>Start With Phase 1 Discovery Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
