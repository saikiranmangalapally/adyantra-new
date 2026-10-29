"use client";

import React, { useState } from "react";

export default function DigiplusAiAutomation() {
  const [activeTab, setActiveTab] = useState(0);

  const aiModules = [
    {
      id: "whatsapp",
      title: "WhatsApp AI Commerce Agent",
      badge: "CONVERSATIONAL COMMERCE",
      icon: "fa-whatsapp",
      desc: "Instant catalog browsing, personalized product recommendations, automated checkout links, and order tracking via WhatsApp Business Cloud API.",
      metrics: ["<2s Response Time", "38% Abandoned Cart Recovery", "24/7 Zero Human Overhead"],
      codePreview: `// WhatsApp AI Commerce Trigger
POST /api/v1/whatsapp/webhook
{
  "event": "customer_inquiry",
  "intent": "catalog_recommendation",
  "ai_agent": "sales_copilot_v4",
  "status": "checkout_link_generated"
}`,
    },
    {
      id: "rag-support",
      title: "Enterprise RAG Support Copilot",
      badge: "KNOWLEDGE VECTOR RETRIEVAL",
      icon: "fa-comments",
      desc: "Trained on your private documentation, PDF knowledge base, and CRM ticket history to resolve 70%+ of customer queries accurately with zero hallucinations.",
      metrics: ["72% Direct Ticket Deflection", "99.4% Factual Accuracy", "Instant Multilingual Support"],
      codePreview: `// Hybrid Vector Search & RAG Generation
const queryEmbedding = await generateEmbedding(userQuery);
const context = await pinecone.query({
  vector: queryEmbedding,
  topK: 5,
  includeMetadata: true
});
return await geminiPro.generate(context);`,
    },
    {
      id: "lead-routing",
      title: "Autonomous Lead Qualifier & CRM Sync",
      badge: "PIPELINE VELOCITY",
      icon: "fa-bolt-lightning",
      desc: "Instantly scores incoming leads from Meta/Google ads, enriches them with LinkedIn/Apollo company data, and syncs high-value prospects directly to your sales reps' calendar.",
      metrics: ["Instant 10-Second Qualification", "HubSpot / Salesforce Sync", "+210% Booking Rate"],
      codePreview: `// Autonomous Lead Router
const lead = await enrichLeadData(incomingFormPayload);
if (lead.revenue > 1000000 && lead.intentScore >= 85) {
  await calendarSync.bookSlot(lead.assignedRepId);
  await slackNotifier.alertVIPTeam(lead);
}`,
    },
  ];

  return (
    <section id="ai-automation" className="py-20 md:py-28 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="dp-sub-title">AI Automation Services</span>
          <h2 className="dp-section-title">
            Autonomous AI Workflows <br />
            <span className="text-[#f5a623]">& Intelligent Agents</span>
          </h2>
          <p className="text-sm md:text-base text-[#666c77] mt-4 leading-relaxed">
            Replace manual repetitive human labor with custom AI agent pipelines that qualify leads, close sales, and support customers around the clock.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {aiModules.map((module, idx) => (
            <button
              key={module.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-3 px-6 py-3.5 rounded-full text-xs font-bold font-heading uppercase tracking-wider transition-all duration-300 ${
                activeTab === idx
                  ? "bg-[#0e0f14] text-white shadow-lg"
                  : "bg-white text-[#121316] hover:bg-[#f5a623]/20 border border-black/5"
              }`}
            >
              <i className={`fa-brands ${module.icon} text-base text-[#f5a623]`}></i>
              {module.title}
            </button>
          ))}
        </div>

        {/* Active Tab Showcase Box */}
        <div className="rounded-[32px] bg-white border border-black/5 p-8 md:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Details */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#f5a623] bg-[#f5a623]/10 px-3 py-1 rounded-full">
              {aiModules[activeTab].badge}
            </span>

            <h3 className="text-2xl sm:text-3xl font-black font-heading text-[#121316] mt-4 mb-4">
              {aiModules[activeTab].title}
            </h3>

            <p className="text-sm md:text-base text-[#555a64] leading-relaxed mb-8">
              {aiModules[activeTab].desc}
            </p>

            {/* Metrics List */}
            <div className="space-y-3 mb-8">
              {aiModules[activeTab].metrics.map((m, mIdx) => (
                <div key={mIdx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f5a623] text-[#0e0f14] flex items-center justify-center text-xs font-bold">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="text-sm font-bold text-[#121316]">{m}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="dp-btn">
              <span>Deploy This AI Workflow</span>
              <div className="dp-btn-arrow">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </a>
          </div>

          {/* Right Column: Interactive Code & Architecture Visual */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0e0f14] border border-white/10 p-5 shadow-2xl text-left">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-[11px] font-mono text-gray-400">
                  agent_runtime_engine.ts
                </span>
              </div>

              <pre className="text-xs font-mono text-[#f5a623] overflow-x-auto p-2 bg-[#15161e] rounded-xl leading-relaxed">
                <code>{aiModules[activeTab].codePreview}</code>
              </pre>

              <div className="mt-4 flex items-center justify-between text-[11px] text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  Webhook Active
                </span>
                <span className="text-gray-500">Latency: 42ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
