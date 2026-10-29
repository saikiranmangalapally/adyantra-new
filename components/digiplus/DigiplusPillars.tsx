"use client";

import React from "react";

export default function DigiplusPillars() {
  const pillars = [
    {
      number: "01",
      title: "Performance Media Engine",
      subtitle: "Paid Acquisition",
      icon: "fa-bullseye",
      metric: "4.8x Avg ROAS",
      desc: "Algorithmic bidding on Meta Advantage+, Google Performance Max, and LinkedIn B2B matched with high-velocity creative testing.",
      tags: ["Meta Ads", "Google Ads PMax", "Creative Testing", "Audience Segmentation"],
    },
    {
      number: "02",
      title: "Next.js Web Architecture",
      subtitle: "Full-Stack Engineering",
      icon: "fa-laptop-code",
      metric: "<0.8s LCP Speed",
      desc: "Sub-second load times using Next.js App Router, Tailwind CSS, and edge caching for unbeatable SEO and high checkout conversion.",
      tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Shopify Hydrogen"],
    },
    {
      number: "03",
      title: "Server-Side CAPI Tracking",
      subtitle: "1st-Party Data",
      icon: "fa-server",
      metric: "99.2% Attribution",
      desc: "First-party data infrastructure via Google Cloud sGTM and Meta Conversions API bypassing ad-blockers and iOS restrictions.",
      tags: ["Cloud sGTM", "Meta CAPI", "Google GA4", "Stape / AWS"],
    },
    {
      number: "04",
      title: "CRO & Funnel Engineering",
      subtitle: "Conversion Optimization",
      icon: "fa-filter-circle-dollar",
      metric: "+42% Conversion Lift",
      desc: "Systematic A/B experimentation, heatmapping, friction audit, and psychological offer crafting to double visitor-to-lead ratios.",
      tags: ["Multivariate Tests", "Clarity Heatmaps", "Frictionless Forms", "Offer Stacking"],
    },
    {
      number: "05",
      title: "Creative & Visual Production",
      subtitle: "Content Strategy",
      icon: "fa-wand-magic-sparkles",
      metric: "120+ Assets/mo",
      desc: "Direct-response video hooks, 3D motion renders, and high-impact design suites engineered to halt the scroll and inspire action.",
      tags: ["Direct-Response Video", "3D Product CGI", "Motion Design", "Design Systems"],
    },
    {
      number: "06",
      title: "AI Workflows & Automations",
      subtitle: "Agentic Systems",
      icon: "fa-microchip",
      metric: "-65% Ops Overhead",
      desc: "Custom RAG knowledge copilots, WhatsApp conversational checkout bots, and autonomous CRM routing that work 24/7.",
      tags: ["RAG Copilots", "WhatsApp API", "Make / n8n Pipelines", "Automated Lead Scoring"],
    },
  ];

  return (
    <section id="pillars" className="py-20 md:py-28 bg-[#faf7f2] relative">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="dp-sub-title justify-center">Core Technical Pillars</span>
          <h2 className="dp-section-title">
            Six Pillars That Drive <br />
            <span className="text-[#f5a623]">Predictable, Scalable Growth</span>
          </h2>
          <p className="text-sm md:text-base text-[#666c77] mt-4 leading-relaxed">
            We don’t believe in fragmented efforts. These six core capabilities interlock to form an impenetrable digital growth engine for your brand.
          </p>
        </div>

        {/* 6-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="dp-service-card p-8 group relative bg-white flex flex-col justify-between"
            >
              {/* Digiplus Cutout Icon Badge */}
              <div className="dp-card-cutout-icon">
                <i className={`fa-solid ${pillar.icon}`}></i>
              </div>

              <div>
                {/* Top Number & Metric */}
                <div className="flex items-center justify-between pl-16 mb-6">
                  <span className="text-xs uppercase font-bold tracking-widest font-mono text-[#f5a623] bg-[#faf7f2] px-3 py-1 rounded-full">
                    {pillar.subtitle}
                  </span>
                  <span className="text-2xl font-black font-heading text-black/20 group-hover:text-[#f5a623] transition-colors">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="text-xl font-black font-heading text-[#121316] mb-3 group-hover:text-[#f5a623] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#555a64] leading-relaxed mb-6">
                  {pillar.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {pillar.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-semibold bg-[#faf7f2] border border-black/5 text-[#555] px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Metric Pill */}
              <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                <span className="text-xs text-[#888] font-medium">Impact Target</span>
                <span className="text-xs font-bold text-[#0e0f14] bg-[#f5a623]/20 px-3 py-1 rounded-full">
                  {pillar.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
