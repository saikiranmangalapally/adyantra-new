"use client";

import React from "react";
import Link from "next/link";

export default function InteractiveExpertiseShowcase() {
  const capabilities = [
    {
      title: "Autonomous AI Agents",
      desc: "Self-operating multi-step agents that qualify inbound leads, query databases, and execute tool calls 24/7 without manual intervention.",
      badge: "< 5s First Response",
      badgeStyle: "bg-[#ef5b52]/8 text-[#ef5b52] border-[#ef5b52]/15",
      iconBg: "bg-[#ef5b52]/10 text-[#ef5b52]",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      title: "Deterministic RAG",
      desc: "Private vector memory schemas grounded strictly in your enterprise SOPs, documentation, and product catalogs with zero hallucinations.",
      badge: "0.00% Hallucinations",
      badgeStyle: "bg-[#7b4bf7]/8 text-[#7b4bf7] border-[#7b4bf7]/15",
      iconBg: "bg-[#7b4bf7]/10 text-[#7b4bf7]",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Two-Way CRM Sync",
      desc: "Real-time state synchronization connecting WhatsApp, ad channels, and forms directly into HubSpot, Salesforce, and Zoho with zero duplicates.",
      badge: "0 Delay Webhooks",
      badgeStyle: "bg-[#3b82f6]/8 text-[#3b82f6] border-[#3b82f6]/15",
      iconBg: "bg-[#3b82f6]/10 text-[#3b82f6]",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
          <path d="M16 16h5v5" />
        </svg>
      ),
    },
    {
      title: "Resilient Workflows",
      desc: "Production-grade Make.com and n8n pipelines engineered with idempotent retry queues, dead-letter alerts, and 24/7 automated monitoring.",
      badge: "99.99% Uptime SLA",
      badgeStyle: "bg-[#10b981]/8 text-[#10b981] border-[#10b981]/15",
      iconBg: "bg-[#10b981]/10 text-[#10b981]",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section expert-showcase-section bg-white" id="ecosystem" aria-labelledby="expert-showcase-heading">
      <div className="shell">
        {/* Section Heading */}
        <div className="services-ref-header services-ref-header--centered mb-10">
          <span className="ref-pill-kicker">OUR EXPERTISE</span>
          <h2 id="expert-showcase-heading" className="services-ref-heading mt-2 font-semibold">
            Enterprise AI Architecture &amp; <br />
            <span className="ady-gradient-text font-semibold">Autonomous Systems</span>
          </h2>
          <p className="services-ref-subtitle max-w-2xl mx-auto">
            Scalable automation engineering designed for businesses that demand deterministic execution, clean data pipelines, and zero operational downtime.
          </p>
        </div>

        {/* Minimal & Effective 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((c, i) => (
            <article
              key={i}
              className="group p-6 rounded-2xl bg-white border border-slate-200/70 hover:border-slate-300 hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl ${c.iconBg} flex items-center justify-center transition-transform group-hover:scale-105 duration-300`}>
                    {c.icon}
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${c.badgeStyle}`}>
                    {c.badge}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-slate-900 tracking-tight mb-2">
                  {c.title}
                </h3>
                <p className="text-[13.5px] text-slate-500 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Minimal Centered Action */}
        <div className="mt-10 text-center">
          <Link href="/contact" className="ady-btn-dark">
            <span>Explore Custom AI Architecture</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
