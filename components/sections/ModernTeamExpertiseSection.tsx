"use client";

import React, { useState } from "react";
import Link from "next/link";
import TeamAdvantageVisual from "./TeamAdvantageVisual";

export interface SquadDiscipline {
  id: string;
  tabLabel: string;
  icon: string;
  roleTitle: string;
  highlightText: string;
  description: string;
  directAccessCallout: string;
  deliverables: Array<{
    title: string;
    desc: string;
    iconColor: "purple" | "indigo" | "sky" | "emerald";
    icon: React.ReactNode;
  }>;
  proofChips: {
    chipTL: { title: string; sub: string };
    chipTR: { title: string; sub: string };
    chipBL: { title: string; sub: string };
    chipBR: { title: string; sub: string };
  };
}

const DISCIPLINES: SquadDiscipline[] = [
  {
    id: "ai-architects",
    tabLabel: "AI Architects & Agents",
    icon: "🤖",
    roleTitle: "Work Directly with Senior",
    highlightText: "AI Architects & LLM Engineers",
    description:
      "We replace non-technical account managers with senior developers, AI architects, and systems engineers who take complete end-to-end accountability for your automation infrastructure.",
    directAccessCallout:
      "Direct Slack channel with your dedicated Senior AI Architect — zero account managers or junior buffers.",
    deliverables: [
      {
        title: "Deterministic Vector RAG",
        desc: "Embedding private knowledge bases and internal SOPs into sub-second pgvector indices.",
        iconColor: "purple",
        icon: (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        ),
      },
      {
        title: "Zero-Hallucination Guardrails",
        desc: "Rigorous input sanitization, policy boundaries, and deterministic state validation rules.",
        iconColor: "indigo",
        icon: (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        ),
      },
      {
        title: "Autonomous Tool-Calling Agents",
        desc: "Multi-step agentic reasoning executing actions across CRMs, ERPs, and billing systems.",
        iconColor: "sky",
        icon: (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        ),
      },
      {
        title: "Continuous Telemetry & SLA Support",
        desc: "Real-time prompt latency tuning, drift monitoring, and guaranteed sub-5s response SLAs.",
        iconColor: "emerald",
        icon: (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        ),
      },
    ],
    proofChips: {
      chipTL: { title: "Direct Access", sub: "Senior AI Leads" },
      chipTR: { title: "24/7 Tuning", sub: "Live Telemetry" },
      chipBL: { title: "100% In-House", sub: "Zero Outsourcing" },
      chipBR: { title: "Autonomous SLA", sub: "99.99% Uptime" },
    },
  },
  {
    id: "systems-engineers",
    tabLabel: "Systems & Event Mesh",
    icon: "⚡",
    roleTitle: "Work Directly with Senior",
    highlightText: "Systems & Pipeline Engineers",
    description:
      "Our backend systems architects construct high-throughput asynchronous event meshes and webhook routing capable of processing tens of thousands of payloads without dropping a single event.",
    directAccessCallout:
      "Direct technical pairing with senior pipeline engineers who have architected 100+ mission-critical integrations.",
    deliverables: [
      {
        title: "Sub-50ms Event Mesh Ingestion",
        desc: "High-concurrency webhook listeners with automated exponential backoff and dead-letter queues.",
        iconColor: "sky",
        icon: (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        ),
      },
      {
        title: "Idempotent CRM State Sync",
        desc: "Bi-directional synchronization between HubSpot, Salesforce, PostgreSQL, and custom internal APIs.",
        iconColor: "indigo",
        icon: (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        ),
      },
      {
        title: "Self-Healing Circuit Breakers",
        desc: "Automated retry engines and fallback logic ensuring uninterrupted 99.99% operational uptime.",
        iconColor: "emerald",
        icon: (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        ),
      },
      {
        title: "Enterprise SOC2 & Data Security",
        desc: "End-to-end data encryption in transit and at rest, scoped API key rotation, and isolated container execution.",
        iconColor: "purple",
        icon: (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        ),
      },
    ],
    proofChips: {
      chipTL: { title: "Sub-50ms Mesh", sub: "Zero Data Drop" },
      chipTR: { title: "50k+ Payloads", sub: "High Concurrency" },
      chipBL: { title: "100% In-House", sub: "Dedicated Leads" },
      chipBR: { title: "Enterprise SLA", sub: "99.99% Uptime" },
    },
  },
  {
    id: "growth-technologists",
    tabLabel: "Revenue Ops & Growth",
    icon: "📈",
    roleTitle: "Work Directly with Senior",
    highlightText: "Revenue Ops & Growth Technologists",
    description:
      "We connect deep backend automations straight to top-line business velocity: instant sub-5-second lead follow-up, closed-loop attribution, and multi-channel booking engines.",
    directAccessCallout:
      "Dedicated growth engineering leads accountable for conversion rate benchmarks and pipeline velocity.",
    deliverables: [
      {
        title: "Sub-5s Inbound Response SLA",
        desc: "Instantly qualifying and routing incoming leads via AI voice, WhatsApp, and SMS before intent decays.",
        iconColor: "emerald",
        icon: (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 14 14" />
          </svg>
        ),
      },
      {
        title: "Server-Side CAPI & Attribution",
        desc: "Zero-data-loss server-side tracking bypassing browser ad-blockers and iOS privacy restrictions.",
        iconColor: "purple",
        icon: (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
        ),
      },
      {
        title: "Automated Dynamic Routing",
        desc: "Instant calendar and rep routing based on buyer firmographics, geography, and deal scoring.",
        iconColor: "sky",
        icon: (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        ),
      },
      {
        title: "Executive Revenue Dashboards",
        desc: "Real-time executive visibility into automation throughput, pipeline velocity, and saved operational labor.",
        iconColor: "indigo",
        icon: (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        ),
      },
    ],
    proofChips: {
      chipTL: { title: "< 5s Response", sub: "Sub-Second Ingest" },
      chipTR: { title: "+340% Conversions", sub: "Revenue Velocity" },
      chipBL: { title: "100% In-House", sub: "Attribution Leads" },
      chipBR: { title: "Full-Funnel Sync", sub: "HubSpot & Salesforce" },
    },
  },
];

export default function ModernTeamExpertiseSection() {
  const [activeTab, setActiveTab] = useState<string>("ai-architects");
  const current = DISCIPLINES.find((d) => d.id === activeTab) || DISCIPLINES[0];

  return (
    <section className="section expertise" id="advantage" aria-labelledby="expertise-title">
      <div className="shell">
        {/* Centered Pill & Headline Header */}
        <div className="services-ref-header services-ref-header--centered mb-8">
          <span className="ref-pill-kicker">OUR TEAM &amp; EXPERTISE</span>
          <h2 id="expertise-title" className="advantage-exact-heading mt-2">
            {current.roleTitle} <br />
            <span className="team-growth-highlight">{current.highlightText}</span>
          </h2>
          <p className="advantage-exact-desc mx-auto" style={{ maxWidth: "680px" }}>
            {current.description}
          </p>

          {/* Interactive Squad Discipline Switcher */}
          <div className="inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200 shadow-sm mt-5 max-w-full overflow-x-auto">
            {DISCIPLINES.map((d) => {
              const isSelected = activeTab === d.id;
              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setActiveTab(d.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold font-['Poppins'] transition-all duration-200 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? "bg-[#0f172a] text-white shadow-md"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                  }`}
                >
                  <span>{d.icon}</span>
                  <span>{d.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Split: Custom Handcrafted Engineering Console on Left, Capabilities Grid on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Handcrafted SVG Workstation & Live Proof Chips */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <TeamAdvantageVisual />
          </div>

          {/* Right Column: Direct Technical Access & 2x2 Feature Matrix */}
          <div className="lg:col-span-6 copy-block advantage-copy-block w-full">
            {/* Direct Senior Access Banner */}
            <div className="w-full p-4 rounded-2xl bg-gradient-to-r from-purple-50/90 to-indigo-50/90 border border-purple-100/90 mb-6 flex items-start gap-3.5 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#7b4bf7] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <strong className="text-xs font-bold text-purple-950 font-['Poppins'] uppercase tracking-wider block">
                  Direct Senior Technical Access
                </strong>
                <p className="text-xs text-purple-900/80 font-['Poppins'] leading-relaxed mt-0.5">
                  {current.directAccessCallout}
                </p>
              </div>
            </div>

            {/* 2x2 Advantage Capabilities Grid */}
            <div className="advantage-features-grid mb-6">
              {current.deliverables.map((feat, idx) => (
                <div key={idx} className="advantage-feature-item items-start">
                  <div className={`advantage-feature-icon advantage-feature-icon--${feat.iconColor} mt-0.5`}>
                    {feat.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="advantage-feature-text leading-snug">{feat.title}</span>
                    <span className="text-xs text-slate-500 font-['Poppins'] leading-relaxed mt-1">
                      {feat.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons & Availability Status */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link className="ady-btn-dark" href="/contact">
                <span>Meet Our Leadership</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-600 bg-emerald-50 px-3.5 py-2 rounded-full border border-emerald-200/80">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-emerald-800">Senior AI Leads Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Security, SLA & Trust Ribbon */}
        <div className="mt-12 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-[#ef5b52] font-bold">100% IN-HOUSE CODEBASE</span>
            <span>•</span>
            <span>Zero Third-Party Outsourcing</span>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              SOC2 Type II Security
            </span>
            <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              End-to-End Encryption
            </span>
            <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7b4bf7" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 14 14" />
              </svg>
              99.99% Autonomous SLA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
