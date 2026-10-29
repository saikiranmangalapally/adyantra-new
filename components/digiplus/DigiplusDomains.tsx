"use client";

import React from "react";

export default function DigiplusDomains() {
  const domains = [
    {
      sector: "E-Commerce & D2C",
      icon: "fa-cart-shopping",
      desc: "Shopify Hydrogen architectures, Meta Advantage+ CAPI, and abandoned checkout recovery driving high repeat purchase rates.",
      kpi: "3.8x - 6.2x Blended ROAS",
    },
    {
      sector: "B2B SaaS & Enterprise",
      icon: "fa-cloud",
      desc: "Account-Based Marketing (ABM), LinkedIn algorithmic ad funnels, and automated product-qualified lead routing for sales teams.",
      kpi: "3.4x Pipeline Velocity",
    },
    {
      sector: "Real Estate & PropTech",
      icon: "fa-building",
      desc: "Hyper-local geo-fenced Meta campaigns, WhatsApp automated site visit bookings, and virtual tour lead funnels.",
      kpi: "₹240Cr+ Inventory Sold",
    },
    {
      sector: "Healthcare & Wellness",
      icon: "fa-heart-pulse",
      desc: "HIPAA-conscious lead acquisition, patient appointment booking bots, and local SEO dominance for premium clinics.",
      kpi: "+280% Qualified Appointments",
    },
    {
      sector: "Education & EdTech",
      icon: "fa-graduation-cap",
      desc: "Course enrollment funnels, webinar conversion automation, and personalized WhatsApp counselors boosting enrollment numbers.",
      kpi: "44% Lower Cost Per Enrolment",
    },
    {
      sector: "FinTech & Financial Services",
      icon: "fa-coins",
      desc: "High-trust conversion landing pages, KYC automation workflows, and compliance-first performance acquisition channels.",
      kpi: "99.8% Data Compliance Score",
    },
  ];

  return (
    <section id="domains" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="dp-sub-title justify-center">Domains We Serve</span>
          <h2 className="dp-section-title">
            Tailored Growth Engines For <br />
            <span className="text-[#f5a623]">High-Growth Industries</span>
          </h2>
          <p className="text-sm md:text-base text-[#666c77] mt-4 leading-relaxed">
            We don’t use generic templates. Every sector gets a bespoke growth playbook tailored to its unique buyer journey, compliance laws, and unit economics.
          </p>
        </div>

        {/* 6 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-[28px] bg-[#faf7f2] border border-black/5 hover:border-[#f5a623]/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#0e0f14] text-[#f5a623] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#f5a623] group-hover:text-[#0e0f14] transition-colors">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>

                <h3 className="text-xl font-black font-heading text-[#121316] mb-3 group-hover:text-[#f5a623] transition-colors">
                  {item.sector}
                </h3>

                <p className="text-xs sm:text-sm text-[#555a64] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#888]">Proven Benchmark:</span>
                <span className="text-xs font-bold text-[#0e0f14] bg-[#f5a623]/20 px-3 py-1 rounded-full">
                  {item.kpi}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
