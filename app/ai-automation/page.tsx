"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ServicesScrollingBar from "@/components/sections/ServicesScrollingBar";
import { AIGuideAvatar } from "@/components/icons/AIGuideAvatar";
import HeroWaveformStage from "@/components/hero/HeroWaveformStage";
import OurTeamExpertiseSection from "@/components/sections/OurTeamExpertiseSection";
import ExecutiveTabletMockup from "@/components/sections/ExecutiveTabletMockup";
import { ExecutionRoadmapVisual, DataAttributionVisual } from "@/components/sections/ExecutionAndAttributionVisuals";

export default function AIAutomationPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeEcoCategory, setActiveEcoCategory] = useState<string>("SYSTEMS");

  // All 15 requested AI Automation services formatted cleanly with Home/Services page card structure
  const allServices = [
    {
      id: 1,
      category: "systems",
      img: "/assets/img/service/illustrations/service-lead-generation.svg",
      title: "Lead Generation",
      desc: "Capture, verify, and enrich high-intent leads across search, paid campaigns, and web forms with automated scoring and instant routing.",
      href: "/lead-generation",
    },
    {
      id: 2,
      category: "systems",
      img: "/assets/img/service/illustrations/service-sales-followup.svg",
      title: "Sales Follow-up",
      desc: "Never drop a qualified prospect. AI-timed multi-touch sequences across email, SMS, and WhatsApp triggered by real-time customer intent signals.",
      href: "/sales-follow-up",
    },
    {
      id: 3,
      category: "systems",
      img: "/assets/img/service/illustrations/service-crm-automation.svg",
      title: "CRM Automation",
      desc: "Eliminate manual data entry. Auto-sync lead sources, enrich customer records, and automate deal progression across HubSpot, Salesforce, and Zoho.",
      href: "/crm-automation",
    },
    {
      id: 4,
      category: "systems",
      img: "/assets/img/service/illustrations/service-content-automation.svg",
      title: "Content Automation",
      desc: "Turn 1 core brand brief into high-ranking articles, social posts, newsletters, and email drips with custom LLM pipelines and brand voice guardrails.",
      href: "/content-automation",
    },
    {
      id: 5,
      category: "systems",
      img: "/assets/img/service/illustrations/service-ad-creative.svg",
      title: "Ad Creative Automation",
      desc: "Generate hundreds of high-converting creative variations, hooks, and localized copy sets programmatically tested against live ad ROAS.",
      href: "/ad-creative-automation",
    },
    {
      id: 6,
      category: "systems",
      img: "/assets/img/service/illustrations/service-customer-support.svg",
      title: "Customer Support",
      desc: "Deliver sub-second resolution for 85%+ of inbound tickets with RAG-powered knowledge base agents and instant escalations to human specialists.",
      href: "/customer-support",
    },
    {
      id: 7,
      category: "systems",
      img: "/assets/img/service/illustrations/service-appointment-booking.svg",
      title: "Appointment Booking",
      desc: "Self-scheduling conversational agents that qualify prospects in chat, check calendar availability in real time, and lock appointments into your CRM.",
      href: "/appointment-booking",
    },
    {
      id: 8,
      category: "systems",
      img: "/assets/img/service/illustrations/service-ecommerce.svg",
      title: "E-commerce Automation",
      desc: "Dynamic cart abandonment triggers, smart inventory reorder alerts, automated invoice generation, and post-purchase review collection workflows.",
      href: "/ecommerce-automation",
    },
    {
      id: 9,
      category: "architecture",
      img: "/assets/img/service/illustrations/service-ai-architecture.svg",
      title: "AI System Design",
      desc: "Comprehensive enterprise architectural blueprints mapping data flow, security boundaries, model selection, and scalable cloud infrastructure.",
      href: "/ai-system-design",
    },
    {
      id: 10,
      category: "architecture",
      img: "/assets/img/service/illustrations/service-workflow-integrations.svg",
      title: "Workflow Architecture",
      desc: "Robust event-driven architectures with idempotent execution, fallback retries, error handling, and distributed queuing for zero data loss.",
      href: "/workflow-architecture",
    },
    {
      id: 11,
      category: "architecture",
      img: "/assets/img/service/illustrations/service-ai-chatbots.svg",
      title: "AI Agent Development",
      desc: "Build autonomous multi-agent frameworks capable of tool use, API calling, long-term memory retrieval, and autonomous multi-step reasoning.",
      href: "/ai-agent-development",
    },
    {
      id: 12,
      category: "architecture",
      img: "/assets/img/service/illustrations/service-web-development.svg",
      title: "AI Stack Integration",
      desc: "Seamlessly integrate cutting-edge LLMs (OpenAI, Claude, Gemini, DeepSeek) into your proprietary databases, ERPs, and legacy software stacks.",
      href: "/ai-stack-integration",
    },
    {
      id: 13,
      category: "architecture",
      img: "/assets/img/service/illustrations/service-ai-chatbots.svg",
      title: "WhatsApp + CRM",
      desc: "Official Meta WhatsApp Cloud API integrations with bidirectional webhook routing to sync conversations, tags, and contacts directly into your CRM.",
      href: "/whatsapp-crm",
    },
    {
      id: 14,
      category: "architecture",
      img: "/assets/img/service/illustrations/service-affiliate-partners.svg",
      title: "Zapier / Make / n8n",
      desc: "Production-grade enterprise automation setups on Make.com, n8n (self-hosted or cloud), and Zapier with modular microservices and health monitors.",
      href: "/zapier-make-n8n",
    },
    {
      id: 15,
      category: "architecture",
      img: "/assets/img/service/illustrations/service-seo.svg",
      title: "AI Audit & Strategy",
      desc: "Evaluate your company's operational bottlenecks, uncover high-ROI automation opportunities, and receive a phased 90-day execution roadmap.",
      href: "/ai-audit-strategy",
    },
    {
      id: 16,
      category: "systems",
      img: "/assets/img/service/illustrations/service-analytics.svg",
      title: "Predictive Analytics & ML",
      desc: "Deploy custom machine learning models, churn forecasting, and automated data pipelines integrated with executive Looker dashboards.",
      href: "/analytics-reporting",
    },
  ];

  const filteredServices =
    activeFilter === "all"
      ? allServices
      : allServices.filter((s) => s.category === activeFilter);

  // Ecosystem nodes definition for interactive node explorer
  const ecoNodes = [
    {
      id: "SYSTEMS",
      label: "AI SYSTEMS",
      color: "#ef5b52",
      img: "/assets/img/service/illustrations/service-ai-agents.svg",
      badge: "Autonomous Inbound & Execution",
      desc: "Deploy autonomous systems for lead generation, multi-touch sales follow-ups, and automated customer support that scale your capacity 24/7.",
      sub: ["Automated Lead Scraping & Verification", "Multi-Touch Sales Follow-up Drips", "RAG Customer Support Bots", "Automated Booking & CRM Locking"],
      meterScore: "99%",
      meterDash: "2.14",
      meterLabel1: "System Reliability",
      meterLabel2: "Task Execution",
      statVal: "< 5s",
      statLabel: "Average First Response"
    },
    {
      id: "ARCHITECTURE",
      label: "ARCHITECTURE",
      color: "#7b4bf7",
      img: "/assets/img/service/illustrations/service-workflow-integrations.svg",
      badge: "Enterprise Workflow Infrastructure",
      desc: "Resilient event-driven architectures connecting CRMs, payment gateways, and databases with idempotent execution and zero data loss.",
      sub: ["Zapier / Make / n8n Enterprise Pipelines", "Custom Autonomous Agent Development", "Official WhatsApp Cloud API Sync", "AI Audit & Feasibility Roadmaps"],
      meterScore: "100%",
      meterDash: "0",
      meterLabel1: "Data Completeness",
      meterLabel2: "Fault Tolerance",
      statVal: "99.99%",
      statLabel: "Pipeline Uptime"
    },
    {
      id: "CRM",
      label: "CRM SYNC",
      color: "#3b82f6",
      img: "/assets/img/service/illustrations/service-crm-automation.svg",
      badge: "Two-Way Pipeline Synchronization",
      desc: "Real-time synchronization between incoming ad leads, conversation transcripts, deal stages, and enterprise CRMs (HubSpot, Salesforce, Zoho).",
      sub: ["Instant Contact Enrichment", "Multi-Channel Source Attribution", "Automated Stage Progression", "Deduplication & Clean Data"],
      meterScore: "98%",
      meterDash: "4.27",
      meterLabel1: "Sync Completeness",
      meterLabel2: "Speed Velocity",
      statVal: "0 Delay",
      statLabel: "Real-Time Webhooks"
    },
    {
      id: "AGENTS",
      label: "AI AGENTS",
      color: "#10b981",
      img: "/assets/img/service/illustrations/service-customer-support.svg",
      badge: "Multi-Step Autonomous Reasoning",
      desc: "Autonomous LLM agents capable of dynamic decision making, tool-calling, external database querying, and self-correcting execution loops.",
      sub: ["Dynamic Tool & API Calling", "Private RAG Vector Grounding", "Semantic Memory Retrieval", "Deterministic Fallbacks"],
      meterScore: "97%",
      meterDash: "6.41",
      meterLabel1: "Decision Accuracy",
      meterLabel2: "Context Precision",
      statVal: "0%",
      statLabel: "Hallucination Benchmark"
    }
  ];

  // 6-Stage continuous growth pipeline
  const pipelineStages = [
    { step: "01", name: "INGEST", tag: "Inbound Channels", desc: "Webhooks, Ad Forms, Chats & APIs", nodeRef: "SYSTEMS" },
    { step: "02", name: "RETRIEVE", tag: "Context & RAG", desc: "Vector Memory & Knowledge Base", nodeRef: "AGENTS" },
    { step: "03", name: "REASON", tag: "Agentic Logic", desc: "Intent Analysis & Policy Guardrails", nodeRef: "AGENTS" },
    { step: "04", name: "EXECUTE", tag: "Tool Calling", desc: "CRM Updates, Calendar & DB Writes", nodeRef: "CRM" },
    { step: "05", name: "DISPATCH", tag: "Omnichannel Send", desc: "WhatsApp, Email, SMS & Alerts", nodeRef: "ARCHITECTURE" },
    { step: "06", name: "AUDIT", tag: "Telemetry & Logs", desc: "Latency Tracking, Uptime & Uptime", nodeRef: "ARCHITECTURE" },
  ];

  const currentEco = ecoNodes.find((n) => n.id === activeEcoCategory) || ecoNodes[0];

  // FAQ List
  const faqs = [
    {
      q: "What is AI Automation and how does it help my business?",
      a: "AI Automation replaces repetitive manual tasks with intelligent workflows. From qualifying and following up with incoming leads in under 5 seconds to syncing CRM databases and resolving customer support tickets, AI automation allows your company to scale output without increasing headcount."
    },
    {
      q: "How do you ensure AI agents do not hallucinate false information?",
      a: "We implement strict Retrieval-Augmented Generation (RAG) architectures with private vector databases and deterministic guardrails. Models are strictly restricted to your approved documentation, product catalogs, and SOPs, with automatic human-in-the-loop fallback for edge cases."
    },
    {
      q: "Can Adyantra integrate with our existing CRM, ERP, and software stack?",
      a: "Yes. We connect directly with HubSpot, Salesforce, Zoho, Pipedrive, PostgreSQL, Supabase, Google Sheets, custom REST APIs, and legacy software using enterprise middleware like Make.com, n8n, and custom webhook microservices."
    },
    {
      q: "How fast can we deploy an autonomous AI system?",
      a: "Standard automated pipelines (such as WhatsApp lead qualification bots or CRM synchronization workflows) are typically built, sandbox-tested, and deployed into production within 7 to 14 business days."
    },
    {
      q: "Is our proprietary customer and company data safe?",
      a: "Security is engineered into our core architecture. We utilize zero-data-retention enterprise API endpoints where inputs are never used to train public foundation models. All data in transit is encrypted with TLS 1.3, sensitive PII is sanitized, and data at rest is encrypted with AES-256."
    },
    {
      q: "Do you offer ongoing monitoring, optimization, and workflow maintenance?",
      a: "Yes. Every production deployment includes automated telemetry, webhook failure monitors, API quota tracking, and monthly SLA support to ensure 99.9%+ uptime as your business scales."
    }
  ];

  return (
    <main className="services-page-root min-h-screen overflow-x-hidden">
      {/* ═══════════════════ SECTION 1: HERO (HOME PAGE 3D TUNNEL & WAVEFORM) ═══════════════════ */}
      <section className="ady-hero-section relative overflow-hidden" id="home">
        {/* Ambient background glows */}
        <div className="ady-ambient-glow ady-glow-top-left" />
        <div className="ady-ambient-glow ady-glow-bottom-right" />

        <div className="ady-hero-container">
          <div className="ady-hero-core-stage">
            {/* 3D Concentric Oval Tunnel */}
            <div className="ady-tunnel-stage">
              <div className="ady-tunnel-ring ady-ring-5" />
              <div className="ady-tunnel-ring ady-ring-4" />
              <div className="ady-tunnel-ring ady-ring-3" />
              <div className="ady-tunnel-ring ady-ring-2" />
              <div className="ady-tunnel-ring ady-ring-1" />
              <div className="ady-tunnel-ring ady-center-well" />
            </div>

            {/* Typography */}
            <div className="ady-hero-content">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-xs font-semibold tracking-wider text-[#ef5b52] mb-4 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#ef5b52] animate-pulse" />
                AI Automation Systems • Architecture &amp; Workflows
              </div>

              <h1 className="ady-main-title">
                <span className="ady-title-line1">Supercharge Operations with Intelligent AI</span>
                <span className="ady-title-line2">Workflows, Agents &amp; CRM Sync</span>
                <span className="ady-title-line3">That Scale.</span>
              </h1>
              <p className="ady-subtitle">
                Supercharge operations with intelligent AI workflows, agents, CRM sync, and automated support — engineered into an autonomous operational engine.
              </p>

              {/* Action Buttons */}
              <div className="ady-cta-group">
                <Link href="/contact" className="ady-btn-dark">
                  <span>Start Your Project</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
                <a href="#services-grid" className="ady-btn-ghost">
                  <span>Explore Automations</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Waveform Stage with Unbroken Luminous Curve, Floating Squircles & AI Assistant */}
            <HeroWaveformStage />
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 2: SERVICES SCROLLING RIBBON ═══════════════════ */}
      <ServicesScrollingBar />

      {/* ═══════════════════ SECTION 3: SERVICES GRID WITH TABS (HOME PAGE CARDS) ═══════════════════ */}
      <section className="section services-ref-section" id="services-grid" aria-labelledby="services-ref-title">
        <div className="shell">
          <div className="services-ref-header services-ref-header--centered">
            <span className="ref-pill-kicker">AUTONOMOUS ENTERPRISE INFRASTRUCTURE</span>
            <h2 id="services-ref-title" className="services-ref-heading">
              15 Production AI Systems &amp;
              <br />
              <span className="ady-gradient-text">Architecture Services</span>
            </h2>
            <p className="services-ref-subtitle">
              From inbound lead capture and multi-touch follow-up to enterprise workflow orchestration and bespoke multi-agent frameworks.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="services-filter-tabs">
            <button
              className={`services-tab ${activeFilter === "all" ? "services-tab--active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              ALL 15 SERVICES
            </button>
            <button
              className={`services-tab ${activeFilter === "systems" ? "services-tab--active" : ""}`}
              onClick={() => setActiveFilter("systems")}
            >
              AI AUTOMATION SYSTEMS (8)
            </button>
            <button
              className={`services-tab ${activeFilter === "architecture" ? "services-tab--active" : ""}`}
              onClick={() => setActiveFilter("architecture")}
            >
              AI ARCHITECTURE &amp; CONSULTING (7)
            </button>
          </div>

          {/* 15 Service Cards Grid in Home Page Card Style */}
          <div className="services-ref-grid services-ref-grid--9">
            {filteredServices.map((item) => {
              const anchorMap: Record<number, string> = {
                1: "leads",
                2: "follow-up",
                3: "crm",
                4: "content",
                5: "ad-creative",
                6: "support",
                7: "booking",
                8: "ecommerce",
                9: "design",
                10: "workflow",
                11: "agents",
                12: "stack",
                13: "chatbots",
                14: "workflows",
                15: "audit",
              };
              const cardId = anchorMap[item.id] || `ai-service-${item.id}`;

              return (
                <article key={item.id} id={cardId} className="service-ref-card scroll-mt-28" data-category={item.category}>
                  {/* 1. Image (First - Large Visual Stage) */}
                  <div className="service-ref-card__visual">
                    <Link href={item.href} className="block">
                      <img src={item.img} alt={item.title} loading="lazy" />
                    </Link>
                  </div>

                  {/* 2. Title (Second) */}
                  <h3 className="service-ref-card__title">
                    <Link href={item.href}>{item.title}</Link>
                  </h3>

                  {/* 3. Subtitle / Content (Third) */}
                  <p className="service-ref-card__desc">{item.desc}</p>

                  {/* 4. Button (Fourth - Read more pill button) */}
                  <div className="service-ref-card__action">
                    <Link href={item.href} className="service-ref-readmore-btn">
                      <span>Read more</span>
                      <span className="readmore-btn-arrow">&rarr;</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 4: SYSTEM VISUALIZATION / EXPERTISE SHOWCASE ═══════════════════ */}
      <section className="section expert-showcase-section" id="ecosystem" aria-labelledby="expert-showcase-heading">
        <div className="shell">
          {/* Centered Section Header */}
          <div className="services-ref-header services-ref-header--centered" style={{ marginBottom: "26px" }}>
            <span className="ref-pill-kicker">OUR AUTOMATION ARCHITECTURE</span>
            <h2 id="expert-showcase-heading" className="services-ref-heading">
              Scale Your Operations with Autonomous <br />
              <span className="ady-gradient-text">AI Systems &amp; Workflow Pipelines</span>
            </h2>
            <p className="services-ref-subtitle" style={{ maxWidth: "780px", marginBottom: "0" }}>
              Maximize execution velocity, eliminate manual data bottlenecks, and drive predictable conversions across every customer channel with custom-engineered autonomous event meshes.
            </p>
          </div>

          {/* Unified Balanced 2-Column Grid (Zero Spacings and Gaps) */}
          <div className="expert-unified-grid">
            {/* Left Column: Interactive Tablet + Dual Visuals + Strategic Overview */}
            <div className="expert-left-pane">
              {/* 1. Executive Tablet Stage */}
              <div className="expert-tablet-card">
                <ExecutiveTabletMockup title="Autonomous System Orchestrator" />
              </div>

              {/* 2. Dual Side-by-Side Visuals */}
              <div className="expert-dual-images">
                <ExecutionRoadmapVisual />
                <DataAttributionVisual />
              </div>

              {/* 3. Strategic Overview Card */}
              <div className="expert-overview-box">
                <h3 className="expert-box-title">Technical Overview &amp; Execution Framework</h3>
                <p className="expert-box-text">
                  At Adyantra, we engineer bespoke AI systems and automation architectures that eliminate repetitive operational bottlenecks. From capturing incoming leads in under 5 seconds to multi-agent reasoning, bi-directional CRM syncing, and automated customer support, we construct resilient operational engines that scale your capacity without compounding headcount.
                </p>
              </div>
            </div>

            {/* Right Column: What's Included / Recent Services + Transform CTA */}
            <div className="expert-right-pane">
              {/* Card 1: What's Included Card */}
              <div className="expert-included-card">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="expert-included-title">What&apos;s Included</h4>
                  <span className="text-[10.5px] font-bold text-[#ef5b52] px-2.5 py-0.5 rounded-full bg-coral-500/10 border border-[#ef5b52]/20 uppercase tracking-wide">
                    FULL-STACK
                  </span>
                </div>
                <div className="expert-accent-line" />
                <p className="expert-included-desc">
                  Full-stack autonomous systems covering intelligent multi-channel routing, event-driven webhooks, RAG knowledge bases, and continuous pipeline monitoring.
                </p>
                <div className="expert-check-grid">
                  {[
                    "Multi-Channel Inbound Webhooks & Routing",
                    "Deterministic RAG & Vector Memory Guardrails",
                    "Bi-directional CRM & Database State Sync",
                    "Autonomous Multi-Step Agentic Reasoning Loops",
                    "Idempotent Queues & Automated Retry Handlers",
                    "Enterprise SOC2 & GDPR Data Privacy Protocols"
                  ].map((pillar, idx) => (
                    <div key={idx} className="expert-check-item">
                      <span className="expert-check-icon">
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.08)" />
                          <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Core Systems Modules */}
              <div className="expert-recent-services-card">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="expert-recent-title">Core Systems</h4>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    6 DISCIPLINES
                  </span>
                </div>
                <div className="expert-accent-line" style={{ width: "40px" }} />
                <ul className="expert-recent-list">
                  {[
                    { name: "Lead Generation & Inbound Capture", href: "/lead-generation" },
                    { name: "Sales Follow-up & Multichannel Drips", href: "/sales-follow-up" },
                    { name: "CRM Automation & State Sync", href: "/crm-automation" },
                    { name: "AI Agent Development & Tool Use", href: "/ai-agent-development" },
                    { name: "Zapier / Make / n8n Enterprise Pipelines", href: "/zapier-make-n8n" },
                    { name: "AI Audit, Feasibility & Architecture", href: "/ai-audit-strategy" }
                  ].map((svc, idx) => (
                    <li key={idx} className="expert-recent-item">
                      <span className="expert-check-icon">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="9" stroke="#ef5b52" strokeWidth="2" fill="rgba(239, 91, 82, 0.15)" />
                          <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <Link href={svc.href}>{svc.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 3: Compact Transform CTA Card */}
              <div className="expert-compact-cta-card">
                <h4 className="text-xl font-extrabold text-white mb-1.5 leading-snug">
                  Transform Your Business with <span className="ady-gradient-text">Adyantra AI!</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Take your operations to the next level with autonomous workflows and intelligent AI solutions. Let&apos;s build your automated engine together!
                </p>
                <Link
                  href="/contact"
                  className="ady-btn-dark w-full justify-center text-xs py-2.5"
                  style={{ width: "100%" }}
                >
                  <span>Book A Discovery Call</span>
                  <span className="readmore-btn-arrow">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 5: ABOUT US / CORE TECHNICAL PILLARS (HOME PAGE SECTION) ═══════════════════ */}
      <section className="section about" id="about" aria-labelledby="about-title">
        <div className="shell split-layout split-layout--about">
          <div className="copy-block about-copy">
            <span className="ref-pill-kicker">ABOUT ADYANTRA DIGITAL</span>
            <h2 id="about-title" className="about-headline">
              Engineering Measurable Operational Leverage <br />
              <span className="ady-gradient-text">Through Intelligent Automation.</span>
            </h2>
            <p>
              Adyantra Digital is an enterprise-grade AI automation and workflow architecture studio. Over 6+ years, we have partnered with 50+ growth-focused companies to turn repetitive operational bottlenecks into reliable autonomous systems.
            </p>
            <p>
              By uniting modern web application engineering, performance analytics, and custom AI workflow automation, we eliminate manual inefficiencies and deliver transparent, compounding ROI.
            </p>
            <Link className="text-link" href="/about">
              Read our full story <b>&rarr;</b>
            </Link>
          </div>
          <div className="pillar-panel">
            <span className="ref-pill-kicker">CORE TECHNICAL PILLARS</span>
            <h3>Our core competencies driving sustained growth for clients.</h3>
            <ol>
              <li><span>Sub-5-Second Multi-Channel Inbound Routing</span><b>01</b></li>
              <li><span>Enterprise Guardrails &amp; Zero-Hallucination RAG</span><b>02</b></li>
              <li><span>Resilient Event-Driven Webhooks &amp; Retries</span><b>03</b></li>
              <li><span>Bi-directional CRM &amp; Database State Sync</span><b>04</b></li>
              <li><span>End-to-End SOC2 &amp; GDPR Data Privacy Protection</span><b>05</b></li>
              <li><span>Scalable Multi-Agent Autonomous Decision Loops</span><b>06</b></li>
            </ol>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 8: TARGET DOMAIN EXPERTISE (HOME PAGE MARQUEE) ═══════════════════ */}
      <section className="section industries-ref-section" id="industries" aria-labelledby="industries-ref-title">
        <div className="industries-ref-glow" />
        <div className="shell">
          <div className="section-heading section-heading--center">
            <span className="ref-pill-kicker">TARGET DOMAIN EXPERTISE</span>
            <h2 id="industries-ref-title" className="industries-ref-heading">
              Domains <span className="ady-gradient-text">We Serve</span>
            </h2>
            <p className="industries-ref-subtitle">
              Custom digital marketing strategies and AI automation solutions tailored for high-growth business sectors.
            </p>
          </div>
        </div>

        <div className="domains-marquee-wrap">
          <div className="domains-marquee-track">
            <div className="domain-pill-card">
              <span className="domain-pill-text">Education &amp; Academies</span>
              <span className="domain-pill-icon"><img src="https://img.icons8.com/?size=48&id=11173&format=png&color=7b4bf7" width="20" height="20" alt="Education" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">Fashion &amp; D2C Apparel</span>
              <span className="domain-pill-icon"><img src="https://img.icons8.com/?size=48&id=21815&format=png&color=7b4bf7" width="20" height="20" alt="Fashion" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">NGOs &amp; Non-Profits</span>
              <span className="domain-pill-icon"><img src="https://img.icons8.com/?size=48&id=87&format=png&color=7b4bf7" width="20" height="20" alt="NGOs" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">Other Enterprises &amp; Businesses</span>
              <span className="domain-pill-icon"><img src="https://img.icons8.com/?size=48&id=53373&format=png&color=7b4bf7" width="20" height="20" alt="Enterprises" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">IT &amp; Software Enterprises</span>
              <span className="domain-pill-icon"><img src="https://img.icons8.com/?size=48&id=2778&format=png&color=7b4bf7" width="20" height="20" alt="Software" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">Real Estate &amp; Housing</span>
              <span className="domain-pill-icon"><img src="https://img.icons8.com/?size=48&id=73&format=png&color=7b4bf7" width="20" height="20" alt="Real Estate" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">Healthcare &amp; Clinics</span>
              <span className="domain-pill-icon"><img src="https://img.icons8.com/?size=48&id=14094&format=png&color=7b4bf7" width="20" height="20" alt="Healthcare" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">E-Commerce &amp; Retail Brands</span>
              <span className="domain-pill-icon"><img src="https://img.icons8.com/?size=48&id=9671&format=png&color=7b4bf7" width="20" height="20" alt="E-Commerce" /></span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 9: ACCELERATE YOUR REVENUE BANNER (HOME PAGE) ═══════════════════ */}
      <section className="growth-banner" id="growth-banner" aria-labelledby="growth-title">
        <div className="shell">
          <div>
            <p className="kicker">Accelerate your operations</p>
            <h2 id="growth-title">
              Ready to scale your business with <em>intelligent AI workflows &amp; agents?</em>
            </h2>
          </div>
          <div className="growth-banner__action">
            <p>Book a 30-minute discovery call with our technical strategy team to audit your current sales funnel and receive a custom digital expansion plan.</p>
            <Link className="button button--coral" href="/contact">
              Book strategy call <b>&rarr;</b>
            </Link>
          </div>
          <div className="stat-row" aria-label="Adyantra results">
            <div><b>06+</b><span>Years of Industry Expertise</span></div>
            <div><b>50+</b><span>High-Growth Brands Scaled</span></div>
            <div><b>100%</b><span>In-House Engineering</span></div>
            <div><b>Zero</b><span>Outsourced Work</span></div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 10: OUR PROVEN PROCESS (CURRENT THEME 4-STEP GRID) ═══════════════════ */}
      <section className="section process" aria-labelledby="process-title">
        <div className="shell">
          <div className="services-ref-header services-ref-header--centered">
            <span className="ref-pill-kicker">OUR PROVEN PROCESS</span>
            <h2 id="process-title" className="services-ref-heading">
              A Transparent <span className="ady-gradient-text">4-Phase Automation Methodology</span>
            </h2>
            <p className="services-ref-subtitle">
              Our structured framework ensures rapid deployment, data-driven optimization, and predictable scaling.
            </p>
          </div>
          <div className="process-grid">
            <article>
              <span>01</span>
              <h3>Discovery &amp; Process Audit</h3>
              <p>We audit your manual workflows, communication channels, data silos, CRM architecture, and operational bottlenecks.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Strategize &amp; Architecture</h3>
              <p>Event-driven webhook routing, agent logic trees, data validation guardrails, and enterprise integration roadmap.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Build &amp; Sandbox Simulation</h3>
              <p>Develop custom agent workflows, private vector RAG retrieval, idempotent database syncs, and edge-case stress testing.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Launch &amp; Live Telemetry</h3>
              <p>Deploy automations into production with zero downtime, real-time error alerts, latency monitors, and proactive SLA support.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════════════════ THE ADYANTRA ADVANTAGE (OUR TEAM & EXPERTISE) ═══════════════════ */}
      <OurTeamExpertiseSection
        kicker="OUR TEAM & EXPERTISE"
        heading={
          <>
            Work Directly with Senior <br />
            AI Architects &amp; <span className="team-growth-highlight">Workflow Engineers</span>
          </>
        }
        description="We replace non-technical account managers with senior developers, AI architects, and systems engineers who take complete end-to-end accountability for your automation infrastructure."
        features={[
          {
            iconColor: "purple",
            text: "100% In-House Engineering",
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            ),
          },
          {
            iconColor: "indigo",
            text: "Direct Senior Architect Access",
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            ),
          },
          {
            iconColor: "sky",
            text: "Bespoke Automation Engines",
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <line x1="9" y1="12" x2="15" y2="18" />
              </svg>
            ),
          },
          {
            iconColor: "emerald",
            text: "Continuous Telemetry & SLA Support",
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            ),
          },
        ]}
        chipProps={{
          chipTL: { title: "Direct Access", sub: "Senior AI Leads" },
          chipTR: { title: "24/7 Tuning", sub: "Live Telemetry" },
          chipBL: { title: "100% In-House", sub: "Zero Outsourcing" },
          chipBR: { title: "Autonomous SLA", sub: "99.99% Uptime" },
        }}
      />

      {/* ═══════════════════ SECTION 11: CLIENT REVIEWS (HOME PAGE MARQUEE) ═══════════════════ */}
      <section className="section reviews-ref-section" id="testimonials" aria-labelledby="reviews-ref-title">
        <div className="shell">
          <div className="section-heading section-heading--center">
            <span className="ref-pill-kicker">CLIENT REVIEWS</span>
            <h2 id="reviews-ref-title" className="reviews-ref-heading">
              What Our <span className="ady-gradient-text">Clients Say</span>
            </h2>
            <p className="reviews-ref-subtitle">
              Real feedback from 50+ scaling brands and business owners we partner with.
            </p>
          </div>
        </div>

        <div className="reviews-marquee-wrap">
          <div className="reviews-marquee-track">
            {/* Review Cards */}
            <article className="review-ref-card review-card--scroll">
              <div className="review-ref-card__top">
                <div className="review-ref-client">
                  <div className="review-ref-avatar avatar--purple">PJ</div>
                  <div className="review-ref-meta">
                    <h3 className="review-ref-name">Pravalika J.</h3>
                    <span className="review-ref-role-pill">Education Institution &bull; Leadership</span>
                  </div>
                </div>
                <div className="review-ref-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
              </div>
              <blockquote className="review-ref-quote">
                &ldquo;Adyantra solved our inconsistent student enrolment numbers. Their team redesigned our course landing pages and automated our lead follow-up workflows, doubling our overall enquiry conversion rate.&rdquo;
              </blockquote>
            </article>

            <article className="review-ref-card review-card--scroll">
              <div className="review-ref-card__top">
                <div className="review-ref-client">
                  <div className="review-ref-avatar avatar--indigo">PK</div>
                  <div className="review-ref-meta">
                    <h3 className="review-ref-name">Pramode K.</h3>
                    <span className="review-ref-role-pill">Enterprise Business &bull; Owner</span>
                  </div>
                </div>
                <div className="review-ref-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
              </div>
              <blockquote className="review-ref-quote">
                &ldquo;A pragmatic and performance-focused team. Adyantra prioritizes actual revenue and customer acquisition over vanity metrics. Their hands-on technical guidance makes them a key growth partner.&rdquo;
              </blockquote>
            </article>

            <article className="review-ref-card review-card--scroll">
              <div className="review-ref-card__top">
                <div className="review-ref-client">
                  <div className="review-ref-avatar avatar--violet">MD</div>
                  <div className="review-ref-meta">
                    <h3 className="review-ref-name">Mani Deep M.</h3>
                    <span className="review-ref-role-pill">Real Estate &bull; Executive</span>
                  </div>
                </div>
                <div className="review-ref-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
              </div>
              <blockquote className="review-ref-quote">
                &ldquo;Adyantra streamlined our lead capture and WhatsApp CRM follow-ups for premium housing projects. The real estate market demands fast communication, and their automated systems gave our sales team a major edge.&rdquo;
              </blockquote>
            </article>

            <article className="review-ref-card review-card--scroll">
              <div className="review-ref-card__top">
                <div className="review-ref-client">
                  <div className="review-ref-avatar avatar--rose">SK</div>
                  <div className="review-ref-meta">
                    <h3 className="review-ref-name">Shiva Kumar M.</h3>
                    <span className="review-ref-role-pill">Real Estate Developer</span>
                  </div>
                </div>
                <div className="review-ref-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
              </div>
              <blockquote className="review-ref-quote">
                &ldquo;Adyantra completely transformed our property lead pipeline. Their targeted campaigns produced genuine site visit enquiries rather than junk leads, scaling our closed transaction value significantly.&rdquo;
              </blockquote>
            </article>

            <article className="review-ref-card review-card--scroll">
              <div className="review-ref-card__top">
                <div className="review-ref-client">
                  <div className="review-ref-avatar avatar--cyan">ST</div>
                  <div className="review-ref-meta">
                    <h3 className="review-ref-name">Sai Teja M.</h3>
                    <span className="review-ref-role-pill">Healthcare &bull; Clinic Director</span>
                  </div>
                </div>
                <div className="review-ref-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
              </div>
              <blockquote className="review-ref-quote">
                &ldquo;Our goal was building digital credibility and increasing patient consultations. The campaign was transparent, compliant, and highly professional, resulting in a 4x increase in patient bookings.&rdquo;
              </blockquote>
            </article>

            <article className="review-ref-card review-card--scroll">
              <div className="review-ref-card__top">
                <div className="review-ref-client">
                  <div className="review-ref-avatar avatar--purple">VK</div>
                  <div className="review-ref-meta">
                    <h3 className="review-ref-name">Vamshi Krishna</h3>
                    <span className="review-ref-role-pill">Enterprise Business Owner</span>
                  </div>
                </div>
                <div className="review-ref-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
              </div>
              <blockquote className="review-ref-quote">
                &ldquo;Their strategic execution is grounded in bottom-line profitability, technical expertise, and dedicated support. They helped us scale organic pipeline while drastically reducing customer acquisition costs.&rdquo;
              </blockquote>
            </article>

            {/* Duplicate Set for Loop */}
            <article className="review-ref-card review-card--scroll">
              <div className="review-ref-card__top">
                <div className="review-ref-client">
                  <div className="review-ref-avatar avatar--purple">PJ</div>
                  <div className="review-ref-meta">
                    <h3 className="review-ref-name">Pravalika J.</h3>
                    <span className="review-ref-role-pill">Education Institution &bull; Leadership</span>
                  </div>
                </div>
                <div className="review-ref-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
              </div>
              <blockquote className="review-ref-quote">
                &ldquo;Adyantra solved our inconsistent student enrolment numbers. Their team redesigned our course landing pages and automated our lead follow-up workflows, doubling our overall enquiry conversion rate.&rdquo;
              </blockquote>
            </article>

            <article className="review-ref-card review-card--scroll">
              <div className="review-ref-card__top">
                <div className="review-ref-client">
                  <div className="review-ref-avatar avatar--indigo">PK</div>
                  <div className="review-ref-meta">
                    <h3 className="review-ref-name">Pramode K.</h3>
                    <span className="review-ref-role-pill">Enterprise Business &bull; Owner</span>
                  </div>
                </div>
                <div className="review-ref-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
              </div>
              <blockquote className="review-ref-quote">
                &ldquo;A pragmatic and performance-focused team. Adyantra prioritizes actual revenue and customer acquisition over vanity metrics. Their hands-on technical guidance makes them a key growth partner.&rdquo;
              </blockquote>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 12: FAQ SECTION (HOME PAGE ACCORDION) ═══════════════════ */}
      <section className="section faq" id="faq" aria-labelledby="faq-title">
        <div className="shell faq-layout">
          <div className="section-heading">
            <span className="ref-pill-kicker">CLEAR ANSWERS</span>
            <h2 id="faq-title">
              Frequently Asked <br />
              <span className="ady-gradient-text">Questions</span>
            </h2>
            <p>Everything you need to know about our growth frameworks, technical execution, timelines, and reporting.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <details key={idx} open={idx === 0}>
                <summary>
                  {faq.q}<b>+</b>
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 13: CONTACT SECTION (HOME PAGE FORM) ═══════════════════ */}
      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="shell contact__grid">
          <div className="contact__copy">
            <span className="ref-pill-kicker">CONNECT WITH OUR TEAM</span>
            <h2 id="contact-title">
              Ready to build your <span className="ady-gradient-text">growth engine?</span>
            </h2>
            <p>Connect your marketing, technology and automation into one scalable system.</p>
            <div className="contact-method">
              <span>
                <img src="https://img.icons8.com/?size=48&id=63598&format=png&color=ef5b52" width="22" height="22" alt="Email" style={{ verticalAlign: "middle" }} />
              </span>
              <div>
                <b>Email support</b>
                <a href="mailto:info@adyantra.in">info@adyantra.in</a>
              </div>
            </div>
            <div className="contact-method">
              <span>
                <img src="https://img.icons8.com/?size=48&id=9659&format=png&color=ef5b52" width="22" height="22" alt="Phone" style={{ verticalAlign: "middle" }} />
              </span>
              <div>
                <b>Direct phone</b>
                <a href="tel:+918309275093">+91 83092 75093</a>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <h3>Request an AI Automation Audit</h3>
            <p>Fill out the form below and our strategy lead will connect with you within 24 hours.</p>
            <div className="field-row">
              <label>
                Your name
                <input required name="name" placeholder="John Doe" />
              </label>
              <label>
                Email address
                <input required type="email" name="email" placeholder="john@company.com" />
              </label>
            </div>
            <div className="field-row">
              <label>
                Phone number
                <input name="phone" placeholder="+91 83092 75093" />
              </label>
              <label>
                Services interested in
                <select name="service">
                  <option>Lead Generation &amp; Sales Follow-up</option>
                  <option>CRM &amp; Pipeline Automation</option>
                  <option>WhatsApp Conversational AI</option>
                  <option>Zapier / Make / n8n Pipelines</option>
                  <option>Autonomous AI Agent Development</option>
                  <option>Full AI Audit &amp; Strategy</option>
                </select>
              </label>
            </div>
            <label>
              Project details
              <textarea name="details" rows={4} placeholder="Tell us a little about your goals" />
            </label>
            <button className="button button--primary" type="submit">
              Start Your Project <b>&rarr;</b>
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
