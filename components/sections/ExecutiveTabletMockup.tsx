"use client";

import React, { useState } from "react";

export interface ExecutiveTabletMockupProps {
  title?: string;
  variant?: "marketing" | "automation";
}

export default function ExecutiveTabletMockup({
  title,
  variant = "marketing",
}: ExecutiveTabletMockupProps) {
  const [activeAutomationMode, setActiveAutomationMode] = useState<"mesh" | "rag" | "crm">("mesh");

  const automationModes = {
    mesh: {
      label: "Autonomous Event Mesh",
      status: "Active • Sub-Second Routing",
      kpis: [
        { label: "Tracked Payloads", val: "1.42M+", trend: "Zero Dropped Events", color: "text-slate-900", trendColor: "text-emerald-700" },
        { label: "Ingest Latency", val: "< 3.8ms", trend: "Sub-Second Routing", color: "text-[#ef5b52]", trendColor: "text-slate-500" },
        { label: "Active Nodes", val: "48 Agents", trend: "100% In-House", color: "text-slate-900", trendColor: "text-emerald-700" },
        { label: "Mesh Reliability", val: "99.99%", trend: "Zero Fallback Drops", color: "text-[#0284c7]", trendColor: "text-emerald-700" },
      ],
      eventLog: [
        { time: "Just now", event: "Webhook Inbound: Meta Lead Form (Qualified)", code: "200 OK", ms: "4ms" },
        { time: "2s ago", event: "Multi-Agent Routing: WhatsApp Booking Locked", code: "PROCESSED", ms: "18ms" },
        { time: "5s ago", event: "CRM Sync: HubSpot Deal Stage Updated to Won", code: "SYNCED", ms: "12ms" },
      ],
    },
    rag: {
      label: "Zero-Hallucination Vector RAG",
      status: "Grounding • Private Embeddings",
      kpis: [
        { label: "Vector Grounding", val: "99.8%", trend: "Deterministic RAG", color: "text-slate-900", trendColor: "text-emerald-700" },
        { label: "Avg Inference", val: "420ms", trend: "Sub-Second LLM", color: "text-[#ef5b52]", trendColor: "text-slate-500" },
        { label: "Knowledge Chunks", val: "128,400", trend: "Continuous Embeddings", color: "text-slate-900", trendColor: "text-emerald-700" },
        { label: "Hallucination Benchmark", val: "0.00%", trend: "Strict Policy Rules", color: "text-[#0284c7]", trendColor: "text-emerald-700" },
      ],
      eventLog: [
        { time: "Just now", event: "Vector Query: Policy Document match score 0.98", code: "VALIDATED", ms: "14ms" },
        { time: "3s ago", event: "Prompt Guardrail: Strict compliance filter passed", code: "CLEARED", ms: "8ms" },
        { time: "8s ago", event: "Semantic Cache Hit: Instant sub-50ms response", code: "CACHE 100%", ms: "2ms" },
      ],
    },
    crm: {
      label: "Bi-Directional CRM State Machine",
      status: "Live Sync • HubSpot & Salesforce",
      kpis: [
        { label: "Synced Records", val: "84,320", trend: "Two-Way Active", color: "text-slate-900", trendColor: "text-emerald-700" },
        { label: "Sync Velocity", val: "0 Delay", trend: "Real-Time Webhooks", color: "text-[#ef5b52]", trendColor: "text-slate-500" },
        { label: "Deduplication Rate", val: "100%", trend: "Clean Data Pipeline", color: "text-slate-900", trendColor: "text-emerald-700" },
        { label: "API Health SLA", val: "100%", trend: "Idempotent Retries", color: "text-[#0284c7]", trendColor: "text-emerald-700" },
      ],
      eventLog: [
        { time: "Just now", event: "CRM Webhook: Contact enriched with company revenue", code: "ENRICHED", ms: "22ms" },
        { time: "4s ago", event: "WhatsApp Trigger: Discovery follow-up dispatched", code: "SENT", ms: "16ms" },
        { time: "9s ago", event: "Database Sync: Row state committed with HMAC key", code: "SECURE 256", ms: "5ms" },
      ],
    },
  };

  const currentAuto = automationModes[activeAutomationMode];

  const displayTitle = title || (variant === "automation"
    ? "Adyantra Autonomous System Orchestrator"
    : "Adyantra Performance & Growth Console");

  return (
    <div className="w-full relative rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-xl p-4 sm:p-6 overflow-hidden text-slate-800 transition-all duration-300">
      {/* Subtle light ambient glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-coral-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Console Frame Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-slate-100 mb-4 sm:mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ef5b52]" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 text-xs font-mono text-slate-800 font-bold tracking-wide">
            {displayTitle}
          </span>
        </div>

        {variant === "automation" ? (
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200/70 text-[11px] font-mono">
            <button
              type="button"
              onClick={() => setActiveAutomationMode("mesh")}
              className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 font-bold cursor-pointer ${
                activeAutomationMode === "mesh"
                  ? "bg-gradient-to-r from-[#ef5b52] to-[#f97316] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              <span>⚡</span>
              <span className="hidden sm:inline">Event</span> Mesh
            </button>
            <button
              type="button"
              onClick={() => setActiveAutomationMode("rag")}
              className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 font-bold cursor-pointer ${
                activeAutomationMode === "rag"
                  ? "bg-gradient-to-r from-[#ef5b52] to-[#f97316] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              <span>🤖</span>
              RAG <span className="hidden sm:inline">Guardrails</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveAutomationMode("crm")}
              className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 font-bold cursor-pointer ${
                activeAutomationMode === "crm"
                  ? "bg-gradient-to-r from-[#ef5b52] to-[#f97316] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              <span>🔄</span>
              CRM <span className="hidden sm:inline">Sync</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-[11px] font-mono font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Attribution Sync
            </span>
          </div>
        )}
      </div>

      {/* KPI Cards Row */}
      {variant === "automation" ? (
        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
          {currentAuto.kpis.map((kpi, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all duration-300"
            >
              <span className="text-[10.5px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                {kpi.label}
              </span>
              <div className={`text-xl sm:text-2xl font-extrabold tracking-tight ${kpi.color}`}>
                {kpi.val}
              </div>
              <span className={`text-[10.5px] font-bold ${kpi.trendColor} mt-1 inline-block`}>
                {kpi.trend}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Tracked Revenue
            </span>
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              $428,950
            </div>
            <span className="text-[11px] font-bold text-emerald-700 mt-1 inline-block">
              ↑ +42.6% MoM
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Blended ROAS
            </span>
            <div className="text-xl sm:text-2xl font-extrabold text-[#ef5b52] tracking-tight">
              4.82x
            </div>
            <span className="text-[11px] font-medium text-slate-500 mt-1 inline-block">
              Target: 3.50x
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Qualified Leads
            </span>
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              3,840
            </div>
            <span className="text-[11px] font-bold text-emerald-700 mt-1 inline-block">
              Sub-second Dispatch
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Automation Uptime
            </span>
            <div className="text-xl sm:text-2xl font-extrabold text-[#0284c7] tracking-tight">
              99.98%
            </div>
            <span className="text-[11px] font-bold text-emerald-700 mt-1 inline-block">
              Zero Fallback Drops
            </span>
          </div>
        </div>
      )}

      {/* Main Interactive SVG Chart Display */}
      <div className="w-full rounded-2xl bg-slate-50/70 border border-slate-200/90 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              {variant === "automation"
                ? `Autonomous Event Telemetry & Attribution (${currentAuto.label})`
                : "Full-Funnel Conversion & Ad Attribution"}
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              {variant === "automation"
                ? "Deterministic sub-second latency across Webhooks, Vector RAG & CRM State Machines"
                : "Real-time telemetry across Meta Ads, Google PPC & AI Chatbot Drips"}
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef5b52]" />
              {variant === "automation" ? "Event Mesh" : "Meta Ads"}
            </span>
            <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0284c7]" />
              {variant === "automation" ? "Vector RAG" : "Google PPC"}
            </span>
            <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
              {variant === "automation" ? "CRM Sync" : "AI Automations"}
            </span>
          </div>
        </div>

        {/* SVG Curve Chart */}
        <div className="w-full aspect-[21/9] min-h-[140px] max-h-[190px]">
          <svg viewBox="0 0 600 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <linearGradient id="chartGlowCoralLight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ef5b52" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#ef5b52" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid lines */}
            <line x1="0" y1="40" x2="600" y2="40" stroke="#e2e8f0" strokeWidth="0.8" />
            <line x1="0" y1="80" x2="600" y2="80" stroke="#e2e8f0" strokeWidth="0.8" />
            <line x1="0" y1="120" x2="600" y2="120" stroke="#e2e8f0" strokeWidth="0.8" />

            {/* Area Fill */}
            <path
              d="M0 130 Q100 100 200 80 T400 45 T600 20 V160 H0 Z"
              fill="url(#chartGlowCoralLight)"
            />

            {/* Line 1: Primary Coral Growth Curve */}
            <path
              d="M0 130 Q100 100 200 80 T400 45 T600 20"
              stroke="#ef5b52"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Line 2: Cyan Secondary Line */}
            <path
              d="M0 145 Q120 120 220 95 T420 65 T600 38"
              stroke="#0284c7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 4"
            />
            {/* Line 3: Emerald Base Line */}
            <path
              d="M0 152 Q150 140 250 125 T450 90 T600 60"
              stroke="#10b981"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Active Data Points */}
            <circle cx="200" cy="80" r="5" fill="#ffffff" stroke="#ef5b52" strokeWidth="2.5" />
            <circle cx="400" cy="45" r="5" fill="#ffffff" stroke="#ef5b52" strokeWidth="2.5" />
            <circle cx="600" cy="20" r="5" fill="#ffffff" stroke="#ef5b52" strokeWidth="2.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

