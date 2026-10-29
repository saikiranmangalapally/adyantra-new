"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AvistaAiAutomation() {
  const [activeTab, setActiveTab] = useState<"agents" | "workflows" | "integrations">("agents");

  const aiSolutions = [
    {
      type: "agents",
      icon: "fa-comments-dollar",
      title: "WhatsApp AI & Conversational Agents",
      badge: "Meta Cloud API",
      desc: "Deploy intelligent 24/7 conversational agents on WhatsApp and web chat that qualify prospects, answer technical inquiries, and lock calendar appointments directly into your CRM.",
      features: ["Natural language understanding", "Instant calendar synchronization", "Real-time CRM contact creation", "Zero-latency responses"],
      link: "/whatsapp-crm",
    },
    {
      type: "agents",
      icon: "fa-headset",
      title: "RAG Knowledge Base Customer Support",
      badge: "Sub-Second Resolution",
      desc: "Deflect 85%+ of repetitive support tickets with AI agents trained on your product documentation, PDFs, and previous ticket resolutions with deterministic guardrails.",
      features: ["Private vector database indexing", "Zero hallucination guardrails", "Seamless human specialist handoff", "Multilingual customer support"],
      link: "/customer-support",
    },
    {
      type: "workflows",
      icon: "fa-bolt-auto",
      title: "Automated Lead Scoring & Routing",
      badge: "Zero Drop-off",
      desc: "Instantly capture, enrich (Clearbit/Apollo), and score incoming leads from forms and ads, routing hot enterprise leads to executive sales reps in under 60 seconds.",
      features: ["Instant data enrichment", "Algorithmic intent scoring", "Automated Slack & email alerts", "Round-robin team distribution"],
      link: "/lead-generation",
    },
    {
      type: "workflows",
      icon: "fa-envelopes-bulk",
      title: "Multichannel Sales Follow-Up Sequences",
      badge: "High Conversion",
      desc: "Trigger adaptive multi-touch sequences across email, SMS, and WhatsApp based on actual user engagement signals (email opens, link clicks, page visits).",
      features: ["Dynamic personalization tokens", "Engagement trigger conditions", "Spam-safe warm-up delivery", "Revenue attribution tracking"],
      link: "/sales-follow-up",
    },
    {
      type: "integrations",
      icon: "fa-network-wired",
      title: "CRM & ERP Deep Stack Integrations",
      badge: "HubSpot / Zoho / Salesforce",
      desc: "Connect your disparate tools with enterprise-grade Make.com, n8n, and custom webhook microservices for flawless bidirectional record synchronization.",
      features: ["Idempotent webhook pipelines", "Automatic retry fallbacks", "Custom data transformations", "Zero lost lead records"],
      link: "/crm-automation",
    },
    {
      type: "integrations",
      icon: "fa-wand-magic-sparkles",
      title: "Programmatic Ad Creative & Content Engines",
      badge: "LLM Pipelines",
      desc: "Generate and test hundreds of high-converting ad variations, hook angles, and localized copy sets programmatically synchronized with Meta and Google ad accounts.",
      features: ["Brand voice fine-tuning", "Batch image & copy synthesis", "A/B test performance sync", "Multi-platform export formats"],
      link: "/ad-creative-automation",
    },
  ];

  const filtered = aiSolutions.filter((item) => activeTab === item.type);

  return (
    <section className="as-ai-automation-section tx-section" id="ai-automation" style={{ padding: "100px 0 90px", background: "#fcfdfe", position: "relative" }}>
      <div className="container as-container-1">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 40px" }}>
          <h6 className="as-subtitle-1 tx-subTitle" style={{ justifyContent: "center", marginBottom: "12px" }}>
            <span className="icon">
              &#123;<i aria-hidden="true" className="fas fa-star" style={{ color: "#fd3f00", fontSize: "10px", margin: "0 4px" }}></i>&#125;
            </span>{" "}
            AI Automation Services
          </h6>
          <h2 className="tx-title as-sec-title-1 wa_title_spilt_1" style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "16px" }}>
            Autonomous AI Workflows, Agents <br />
            <span style={{ color: "#fd3f00" }}>&amp; Intelligent Integrations</span>
          </h2>
          <p className="as-p-1 sec-disc" style={{ color: "#64748b", fontSize: "16.5px", lineHeight: "1.6" }}>
            We engineer enterprise-grade automation pipelines that qualify prospects 24/7, eliminate manual operations, and accelerate sales velocity.
          </p>
        </div>

        {/* Tab Controls */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "45px" }}>
          {[
            { id: "agents", label: "AI Agents & Chatbots" },
            { id: "workflows", label: "Automated Workflows" },
            { id: "integrations", label: "CRM & Stack Integrations" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                padding: "10px 24px",
                borderRadius: "100px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.25s ease",
                border: activeTab === tab.id ? "1px solid #fd3f00" : "1px solid #e2e8f0",
                background: activeTab === tab.id ? "#fd3f00" : "#ffffff",
                color: activeTab === tab.id ? "#ffffff" : "#475569",
                boxShadow: activeTab === tab.id ? "0 8px 20px rgba(253,63,0,0.25)" : "none",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 2-Column High-Impact Solution Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "30px" }}>
          {filtered.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "24px",
                padding: "36px 32px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = "#fd3f00";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(253,63,0,0.09)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "#e2e8f0";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.03)";
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "22px" }}>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "16px",
                      background: "linear-gradient(135deg, #fff2ee 0%, #ffe6df 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fd3f00",
                      fontSize: "22px",
                    }}
                  >
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <span
                    style={{
                      background: "rgba(253, 63, 0, 0.08)",
                      color: "#fd3f00",
                      padding: "4px 12px",
                      borderRadius: "100px",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#181818", marginBottom: "14px", lineHeight: "1.3" }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: "14.5px", color: "#64748b", lineHeight: "1.65", marginBottom: "24px" }}>
                  {item.desc}
                </p>

                {/* Key feature checklist */}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 26px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {item.features.map((feat, fidx) => (
                    <li key={fidx} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13.5px", color: "#334155" }}>
                      <i className="fa-solid fa-circle-check" style={{ color: "#22c55e", fontSize: "14px" }}></i>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ paddingTop: "20px", borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Link
                  href={item.link}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#181818",
                    fontWeight: 700,
                    fontSize: "14px",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fd3f00";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#181818";
                  }}
                >
                  <span>Explore Workflow</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: "12px" }}></i>
                </Link>

                <a
                  href="/contact"
                  style={{
                    fontSize: "12px",
                    color: "#64748b",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  Request Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
