"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AIAutomationPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeEcoCategory, setActiveEcoCategory] = useState<string>("SYSTEMS");

  // All 15 requested AI Automation services formatted cleanly with Home/Services page card structure
  const allServices = [
    {
      id: 1,
      category: "systems",
      img: "/assets/img/service/ai/lead-generation.jpg",
      title: "Lead Generation",
      desc: "Capture, verify, and enrich high-intent leads across search, paid campaigns, and web forms with automated scoring and instant routing.",
      href: "/lead-generation",
    },
    {
      id: 2,
      category: "systems",
      img: "/assets/img/service/ai/sales-followup.jpg",
      title: "Sales Follow-up",
      desc: "Never drop a qualified prospect. AI-timed multi-touch sequences across email, SMS, and WhatsApp triggered by real-time customer intent signals.",
      href: "/sales-follow-up",
    },
    {
      id: 3,
      category: "systems",
      img: "/assets/img/service/ai/crm-automation.jpg",
      title: "CRM Automation",
      desc: "Eliminate manual data entry. Auto-sync lead sources, enrich customer records, and automate deal progression across HubSpot, Salesforce, and Zoho.",
      href: "/crm-automation",
    },
    {
      id: 4,
      category: "systems",
      img: "/assets/img/service/ai/content-automation.jpg",
      title: "Content Automation",
      desc: "Turn 1 core brand brief into high-ranking articles, social posts, newsletters, and email drips with custom LLM pipelines and brand voice guardrails.",
      href: "/content-automation",
    },
    {
      id: 5,
      category: "systems",
      img: "/assets/img/service/ai/ad-creative-automation.jpg",
      title: "Ad Creative Automation",
      desc: "Generate hundreds of high-converting creative variations, hooks, and localized copy sets programmatically tested against live ad ROAS.",
      href: "/ad-creative-automation",
    },
    {
      id: 6,
      category: "systems",
      img: "/assets/img/service/ai/customer-support.jpg",
      title: "Customer Support",
      desc: "Deliver sub-second resolution for 85%+ of inbound tickets with RAG-powered knowledge base agents and instant escalations to human specialists.",
      href: "/customer-support",
    },
    {
      id: 7,
      category: "systems",
      img: "/assets/img/service/ai/appointment-booking.jpg",
      title: "Appointment Booking",
      desc: "Self-scheduling conversational agents that qualify prospects in chat, check calendar availability in real time, and lock appointments into your CRM.",
      href: "/appointment-booking",
    },
    {
      id: 8,
      category: "systems",
      img: "/assets/img/service/ai/ecommerce-automation.png",
      title: "E-commerce Automation",
      desc: "Dynamic cart abandonment triggers, smart inventory reorder alerts, automated invoice generation, and post-purchase review collection workflows.",
      href: "/ecommerce-automation",
    },
    {
      id: 9,
      category: "architecture",
      img: "/assets/img/service/ai_systems.png",
      title: "AI System Design",
      desc: "Comprehensive enterprise architectural blueprints mapping data flow, security boundaries, model selection, and scalable cloud infrastructure.",
      href: "/ai-system-design",
    },
    {
      id: 10,
      category: "architecture",
      img: "/assets/img/service/gen_workflow.png",
      title: "Workflow Architecture",
      desc: "Robust event-driven architectures with idempotent execution, fallback retries, error handling, and distributed queuing for zero data loss.",
      href: "/workflow-architecture",
    },
    {
      id: 11,
      category: "architecture",
      img: "/assets/img/service/ai-3d.png",
      title: "AI Agent Development",
      desc: "Build autonomous multi-agent frameworks capable of tool use, API calling, long-term memory retrieval, and autonomous multi-step reasoning.",
      href: "/ai-agent-development",
    },
    {
      id: 12,
      category: "architecture",
      img: "/assets/img/service/webdev-3d.png",
      title: "AI Stack Integration",
      desc: "Seamlessly integrate cutting-edge LLMs (OpenAI, Claude, Gemini, DeepSeek) into your proprietary databases, ERPs, and legacy software stacks.",
      href: "/ai-stack-integration",
    },
    {
      id: 13,
      category: "architecture",
      img: "/assets/img/service/gen_chatbot.png",
      title: "WhatsApp + CRM",
      desc: "Official Meta WhatsApp Cloud API integrations with bidirectional webhook routing to sync conversations, tags, and contacts directly into your CRM.",
      href: "/whatsapp-crm",
    },
    {
      id: 14,
      category: "architecture",
      img: "/assets/img/service/gen_b2b.png",
      title: "Zapier / Make / n8n",
      desc: "Production-grade enterprise automation setups on Make.com, n8n (self-hosted or cloud), and Zapier with modular microservices and health monitors.",
      href: "/zapier-make-n8n",
    },
    {
      id: 15,
      category: "architecture",
      img: "/assets/img/service/gen_dashboard.png",
      title: "AI Audit & Strategy",
      desc: "Evaluate your company's operational bottlenecks, uncover high-ROI automation opportunities, and receive a phased 90-day execution roadmap.",
      href: "/ai-audit-strategy",
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
      img: "/assets/img/service/ai_systems.png",
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
      img: "/assets/img/service/gen_workflow.png",
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
      img: "/assets/img/service/ai/crm-automation.jpg",
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
      img: "/assets/img/service/ai_systems.png",
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

            {/* Waveform Stage */}
            <div className="ady-waveform-stage">
              <svg className="ady-wave-svg" viewBox="0 0 1200 300" preserveAspectRatio="none">
                <path
                  id="adyWaveformPathAI"
                  className="ady-wave-curve"
                  d="M 0,160 C 45,160 75,90 118,90 C 160,90 205,168 258,170 C 285,171 305,235 330,235 C 355,235 375,215 395,195 C 415,175 425,95 450,95 C 490,95 540,165 609,165 C 678,165 725,95 770,95 C 805,95 835,130 868,145 C 885,153 895,235 915,235 C 935,235 955,140 970,75 C 985,75 1030,115 1088,115 C 1125,115 1165,125 1200,125"
                />
                <circle className="ady-pulse-dot" r="4.5">
                  <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#adyWaveformPathAI" />
                  </animateMotion>
                </circle>
              </svg>

              {/* Badges */}
              <div className="ady-float-badge ady-badge-coral" style={{ left: "9.83%", top: "30.0%" }} title="AI Lead Generation">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="19" y1="8" x2="19" y2="14" />
                  <line x1="22" y1="11" x2="16" y2="11" />
                </svg>
              </div>

              <div className="ady-float-badge ady-badge-white" style={{ left: "21.5%", top: "56.7%" }} title="CRM & Pipeline Sync">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
              </div>

              <div className="ady-float-badge ady-badge-coral" style={{ left: "32.9%", top: "65.0%" }} title="Autonomous AI Agents">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" y1="16" x2="8" y2="16.01" />
                  <line x1="16" y1="16" x2="16" y2="16.01" />
                </svg>
              </div>

              <div className="ady-center-cta-wrap" style={{ left: "50.75%", top: "55.0%" }}>
                <Link href="/contact" className="ady-center-pill-btn">
                  <span>Contact Us</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="ady-float-badge ady-badge-white" style={{ left: "72.3%", top: "48.3%" }} title="WhatsApp Automation">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>

              <div className="ady-wave-glow-dot" style={{ left: "80.8%", top: "25.0%" }} />

              <div className="ady-float-badge ady-badge-coral" style={{ left: "90.67%", top: "38.3%" }} title="Zapier & n8n Workflows">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
            </div>

            {/* AI Agent Interactive Widget */}
            <aside className="ady-ai-widget">
              <div className="ady-widget-glow" />
              <div className="ady-widget-top">
                <div className="ady-widget-avatar">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Adyantra AI Guide" />
                </div>
                <p className="ady-widget-text">Ask our AI Agent to explore our automation stack in seconds</p>
              </div>
              <Link href="/about" className="ady-widget-link">
                <span>Learn Our Approach</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 2: STATS BRIDGE BAR (HOME PAGE PATTERN) ═══════════════════ */}
      <div className="ady-stats-bridge-bar relative z-20">
        <div className="ady-stats-container">
          <div className="ady-stat-item">
            <p className="ady-stat-value">95%</p>
            <p className="ady-stat-label">Manual Tasks Automated</p>
          </div>
          <div className="ady-stat-item">
            <p className="ady-stat-value">&lt; 5s</p>
            <p className="ady-stat-label">Lead Response &amp; Dispatch</p>
          </div>
          <div className="ady-stat-item">
            <p className="ady-stat-value">24/7</p>
            <p className="ady-stat-label">Autonomous Operation</p>
          </div>
          <div className="ady-stat-item">
            <p className="ady-stat-value">10x</p>
            <p className="ady-stat-label">Operational Efficiency</p>
          </div>
        </div>
      </div>

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
                  <div className="service-ref-card__visual">
                    <img src={item.img} alt={item.title} loading="lazy" />
                  </div>
                  <h3 className="service-ref-card__title">{item.title}</h3>
                  <p className="service-ref-card__desc">{item.desc}</p>
                  <div className="service-ref-card__action">
                    <Link href={item.href} className="service-ref-explore-btn">
                      Explore Service <span className="explore-btn-icon">»</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 4: SYSTEM VISUALIZATION / EXPERTISE SHOWCASE (REFERENCE DESIGN) ═══════════════════ */}
      <section className="section expert-showcase-section" id="ecosystem" aria-labelledby="expert-showcase-heading">
        <div className="shell">
          {/* Top Header Grid: Left Headline & Right Tablet Preview */}
          <div className="expert-top-grid">
            <div className="expert-header-left">
              <span className="expert-kicker-pill">
                <span className="expert-kicker-dot" />
                Our Automation Architecture
              </span>
              <h2 id="expert-showcase-heading" className="expert-main-heading">
                Scale Your Operations with Autonomous <br />
                <span className="ady-gradient-text">AI Systems &amp; Workflow Pipelines</span>
              </h2>
              <p className="expert-main-desc">
                Maximize execution velocity, eliminate manual data bottlenecks, and drive predictable conversions across every customer channel with custom-engineered autonomous event meshes.
              </p>
            </div>

            <div className="expert-tablet-card">
              <Image
                src="/assets/img/service/service-header-tablet.jpg"
                alt="Adyantra AI Architecture Command Center"
                width={800}
                height={500}
                className="expert-tablet-img"
                priority
              />
            </div>
          </div>

          {/* Main Content Split Grid: Left Content (65%) & Right Sidebar (35%) */}
          <div className="expert-split-grid">
            {/* Left Column: Overview + Dual Photos + What's Included */}
            <div className="expert-content-col">
              {/* Overview Block */}
              <div className="expert-overview-block">
                <h3 className="expert-section-title">Overview</h3>
                <p className="expert-overview-text">
                  At Adyantra, we engineer bespoke AI systems and automation architectures that eliminate repetitive operational bottlenecks. From capturing incoming leads in under 5 seconds to multi-agent reasoning, bi-directional CRM syncing, and automated customer support, we construct resilient operational engines that scale your capacity without compounding headcount.
                </p>
              </div>

              {/* Two Side-by-Side Images */}
              <div className="expert-dual-images">
                <div className="expert-dual-img-card">
                  <Image
                    src="/assets/img/service/service-collab-team.jpg"
                    alt="Adyantra AI Architecture Strategy"
                    width={600}
                    height={400}
                    className="expert-photo"
                  />
                </div>
                <div className="expert-dual-img-card">
                  <Image
                    src="/assets/img/service/service-analytics-review.jpg"
                    alt="Adyantra Workflow Telemetry Monitoring"
                    width={600}
                    height={400}
                    className="expert-photo"
                  />
                </div>
              </div>

              {/* What's Included Box */}
              <div className="expert-included-card">
                <h4 className="expert-included-title">What&apos;s Included</h4>
                <div className="expert-accent-line" />
                <p className="expert-included-desc">
                  Our comprehensive full-funnel automation architecture covers everything from initial bottleneck audit to data-backed retention and multi-agent workflow execution.
                </p>

                <div className="expert-check-grid">
                  <div className="expert-check-item">
                    <span className="expert-check-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.08)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>AI Lead Generation &amp; Enrichment</span>
                  </div>

                  <div className="expert-check-item">
                    <span className="expert-check-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.08)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Sub-5-Second Multi-Channel Inbound Routing</span>
                  </div>

                  <div className="expert-check-item">
                    <span className="expert-check-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.08)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>24/7 WhatsApp Cloud Conversational AI</span>
                  </div>

                  <div className="expert-check-item">
                    <span className="expert-check-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.08)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Bi-Directional CRM &amp; Database State Sync</span>
                  </div>

                  <div className="expert-check-item">
                    <span className="expert-check-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.08)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Custom Autonomous Multi-Agent Workflows</span>
                  </div>

                  <div className="expert-check-item">
                    <span className="expert-check-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.08)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Zero-Hallucination RAG &amp; Vector Embeddings</span>
                  </div>

                  <div className="expert-check-item">
                    <span className="expert-check-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.08)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Fault-Tolerant Retries &amp; Idempotent Pipelines</span>
                  </div>

                  <div className="expert-check-item">
                    <span className="expert-check-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.08)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>24/7 Webhook Health &amp; Telemetry Monitoring</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Recent Services + Transform Banner */}
            <aside className="expert-sidebar-col">
              <div className="expert-recent-services-card">
                <h4 className="expert-recent-title">Recent Services</h4>
                <div className="expert-accent-line" style={{ width: "45px" }} />
                <ul className="expert-recent-list">
                  <li className="expert-recent-item">
                    <span className="expert-check-icon">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.2)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <Link href="/lead-generation">Lead Generation</Link>
                  </li>
                  <li className="expert-recent-item">
                    <span className="expert-check-icon">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.2)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <Link href="/crm-automation">CRM Automation</Link>
                  </li>
                  <li className="expert-recent-item">
                    <span className="expert-check-icon">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.2)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <Link href="/whatsapp-crm">WhatsApp + CRM</Link>
                  </li>
                  <li className="expert-recent-item">
                    <span className="expert-check-icon">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.2)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <Link href="/ai-agent-development">AI Agent Development</Link>
                  </li>
                  <li className="expert-recent-item">
                    <span className="expert-check-icon">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.2)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <Link href="/zapier-make-n8n">Zapier / Make / n8n</Link>
                  </li>
                  <li className="expert-recent-item">
                    <span className="expert-check-icon">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.2)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <Link href="/ai-audit-strategy">AI Audit &amp; Strategy</Link>
                  </li>
                </ul>
              </div>

              {/* Transform Banner */}
              <div className="expert-cta-card">
                <Image
                  src="/assets/img/service/service-cta-transform.jpg"
                  alt="Transform Your Business With AI"
                  fill
                  className="expert-cta-bg-img"
                />
                <div className="expert-cta-overlay" />
                <div className="expert-cta-content">
                  <h4 className="expert-cta-heading">
                    Transform <br />
                    Your Business <br />
                    with <span className="ady-gradient-text">Adyantra AI!</span>
                  </h4>
                  <p className="expert-cta-desc">
                    Take your operations to the next level with autonomous workflows and intelligent AI solutions. Let&apos;s build your automated engine together!
                  </p>
                  <a
                    href="#contact"
                    className="shadcn-input-button-solid"
                    style={{ marginTop: "10px", width: "100%", justifyContent: "space-between" }}
                  >
                    <span>Book A Discovery Call</span>
                    <span className="badge-icon">→</span>
                  </a>
                </div>
              </div>
            </aside>
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
            <div><b>95%</b><span>Tasks automated</span></div>
            <div><b>&lt; 5s</b><span>Lead response time</span></div>
            <div><b>50+</b><span>Pipelines deployed</span></div>
            <div><b>99.9%</b><span>System uptime</span></div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 10: OUR PROVEN PROCESS (HOME PAGE 4-STEP GRID) ═══════════════════ */}
      <section className="section process" aria-labelledby="process-title">
        <div className="shell">
          <div className="section-heading section-heading--center">
            <span className="ref-pill-kicker">OUR PROVEN PROCESS</span>
            <h2 id="process-title">
              A Transparent <span className="ady-gradient-text">4-Phase Automation Methodology</span>
            </h2>
            <p>Our structured framework ensures rapid deployment, data-driven optimization, and predictable scaling.</p>
          </div>
          <div className="process-grid">
            <article>
              <span>01</span>
              <h3>Discovery &amp; Process Audit</h3>
              <p>We audit your digital presence, advertising accounts, data flows, tech stack, and manual bottlenecks.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Strategize &amp; Architecture</h3>
              <p>System allocation, webhook endpoints, growth roadmap, and multi-agent workflow architecture.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Build &amp; Sandbox Test</h3>
              <p>Workflows, agent prompts, database syncs, error tracking setup, and edge-case simulation.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Launch &amp; Live Telemetry</h3>
              <p>Deploy automations into production, activate real-time health monitors, and provide SLA support.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════════════════ THE ADYANTRA ADVANTAGE (EXACT MOCKUP MATCH) ═══════════════════ */}
      <section className="section expertise" id="advantage" aria-labelledby="expertise-title">
        <div className="shell split-layout">
          <div className="expertise-visual">
            <div className="expertise-visual__orb" />
            <img
              src="/assets/img/team/team-3d.png"
              alt="Work Directly with Senior Engineers & Growth Strategists"
              loading="lazy"
            />
            <div className="proof-chip proof-chip--one">
              <b>DIRECT ACCESS</b>
              <span>Senior tech leads</span>
            </div>
            <div className="proof-chip proof-chip--two">
              <b>24/7 TUNING</b>
              <span>Live attribution</span>
            </div>
            <div className="proof-chip proof-chip--three">
              <b>100% IN-HOUSE</b>
              <span>Zero outsourcing</span>
            </div>
            <div className="proof-chip proof-chip--four">
              <b>TAILORED GROWTH</b>
              <span>+340% Avg ROAS</span>
            </div>
          </div>
          <div className="copy-block">
            <p className="advantage-kicker">OUR TEAM &amp; EXPERTISE</p>
            <h2 id="expertise-title" className="advantage-exact-heading">
              Work Directly with Senior <br />
              Engineers <em>&amp; Growth <br />Strategists</em>
            </h2>
            <p className="advantage-exact-desc">
              We replace non-technical account managers with senior developers, performance marketers, and AI architects who take complete accountability for your digital performance.
            </p>
            <ul className="check-list-grid">
              <li>100% In-House Execution</li>
              <li>Tailored Growth Strategies</li>
              <li>Direct Senior Technical Access</li>
              <li>Continuous Campaign Optimization</li>
            </ul>
            <Link className="advantage-leadership-link" href="/about">
              Meet our leadership <b>&rarr;</b>
            </Link>
          </div>
        </div>
      </section>

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
                    <span className="review-ref-role-pill">Education Institu... &bull; Le...</span>
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
                    <span className="review-ref-role-pill">Enterprise Busi... &bull; Ow...</span>
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
                    <span className="review-ref-role-pill">Education Institu... &bull; Le...</span>
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
                    <span className="review-ref-role-pill">Enterprise Busi... &bull; Ow...</span>
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
