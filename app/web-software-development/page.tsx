"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ServicesScrollingBar from "@/components/sections/ServicesScrollingBar";

export default function WebSoftwareDevelopmentPage() {
  const [activeTab, setActiveTab] = useState("frontend");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const coreModules = [
    {
      id: "nextjs",
      title: "Next.js 15 & React Modern Web",
      desc: "Server-side rendering (SSR), static site generation (SSG), and sub-second page transitions optimized for high Google organic ranking and zero layout shift.",
      icon: "https://img.icons8.com/?size=96&id=16412&format=png&color=ef5b52",
      badge: "Flagship Frontend",
    },
    {
      id: "portals",
      title: "Enterprise Web Portals & RBAC",
      desc: "Secure customer and vendor portals featuring role-based access control, multi-tenant schemas, authentication guardrails, and real-time team dashboards.",
      icon: "https://img.icons8.com/?size=96&id=53373&format=png&color=ef5b52",
      badge: "Security & Governance",
    },
    {
      id: "apis",
      title: "API Mesh & Cloud Microservices",
      desc: "Idempotent REST & GraphQL endpoints, distributed webhooks, rate limiting, and seamless third-party ERP, CRM, and payment gateway connectors.",
      icon: "https://img.icons8.com/?size=96&id=4052&format=png&color=ef5b52",
      badge: "High Throughput",
    },
    {
      id: "pwas",
      title: "Progressive Web Apps (PWAs)",
      desc: "Offline-first architectures, service worker caching, instant app-like navigation, and mobile home-screen installability without app store friction.",
      icon: "https://img.icons8.com/?size=96&id=ZwGNoFXGbt9n&format=png&color=ef5b52",
      badge: "Mobile Speed",
    },
    {
      id: "ecommerce",
      title: "High-Velocity Headless E-Commerce",
      desc: "Composable commerce platforms built on Shopify Storefront API, Medusa, or custom Node backends with sub-second checkout conversion flows.",
      icon: "https://img.icons8.com/?size=96&id=9671&format=png&color=ef5b52",
      badge: "Max Conversion",
    },
    {
      id: "security",
      title: "Performance & Security Hardening",
      desc: "Penetration-tested infrastructure, strict CSP headers, DDoS protection, edge caching via Cloudflare/Vercel, and automated vulnerability scanning.",
      icon: "https://img.icons8.com/?size=96&id=852&format=png&color=ef5b52",
      badge: "Enterprise Grade",
    },
  ];

  const stackCategories = {
    frontend: [
      { name: "Next.js 15", desc: "React Server Components, App Router & Turbopack for instantaneous build & page speeds." },
      { name: "React 19", desc: "Component-driven modular architectures with fine-grained reactive state management." },
      { name: "TypeScript", desc: "100% strict type safety eliminating runtime bugs across complex application flows." },
      { name: "Tailwind CSS & CSS Modules", desc: "Zero-runtime CSS frameworks delivering pristine responsive design and microscopic bundle sizes." },
    ],
    backend: [
      { name: "Node.js / Express", desc: "Event-driven asynchronous microservices processing thousands of concurrent requests." },
      { name: "Python / FastAPI", desc: "High-throughput asynchronous APIs powering AI inference, RAG vectors, and data pipelines." },
      { name: "GraphQL & REST", desc: "Clean schema contracts with automated documentation, validation, and type generation." },
      { name: "Go (Golang)", desc: "Blisteringly fast background worker daemons for heavy cryptographic and telemetry processing." },
    ],
    cloud: [
      { name: "AWS & GCP", desc: "Elastic compute, auto-scaling ECS/Cloud Run containers, and multi-region serverless infrastructure." },
      { name: "Vercel Enterprise", desc: "Global Edge Network deployment with sub-50ms TTFB across worldwide client locations." },
      { name: "Docker & Kubernetes", desc: "Containerized reproducible deployment pipelines with zero-downtime rolling releases." },
      { name: "Cloudflare & WAF", desc: "Edge routing, DDoS mitigation, SSL encryption, and strict Content Security Policies." },
    ],
    databases: [
      { name: "PostgreSQL", desc: "ACID-compliant relational database with connection pooling and automated replication." },
      { name: "Redis", desc: "Sub-millisecond in-memory cache for session tokens, rate limiting, and pub/sub messaging." },
      { name: "Supabase / Firebase", desc: "Real-time subscriptions, secure row-level security (RLS), and unified cloud auth." },
      { name: "Vector Databases (Pinecone/pgvector)", desc: "High-dimensional vector indexing powering semantic search and AI agent memories." },
    ],
  };

  const deliverySteps = [
    {
      num: "01",
      title: "Discovery & System Architecture",
      desc: "We analyze technical constraints, user stories, data schemas, and security boundaries to engineer an unambiguous technical blueprint.",
    },
    {
      num: "02",
      title: "Interactive Prototypes & UX Wireframes",
      desc: "Design accessible, conversion-focused user interfaces with design systems, clickable components, and rigorous usability testing.",
    },
    {
      num: "03",
      title: "Agile Sprints & Automated CI/CD",
      desc: "Bi-weekly sprint demos with automated linting, test suites, and staging environments where you test live features before release.",
    },
    {
      num: "04",
      title: "Production Launch & Live Telemetry",
      desc: "Zero-downtime DNS cutover, automated cloud monitoring, performance telemetry, and SLA-backed ongoing engineering maintenance.",
    },
  ];

  const faqs = [
    {
      q: "Why choose Next.js for our web application?",
      a: "Next.js provides hybrid rendering (SSR, SSG, ISR) which ensures lightning-fast initial load times, top-tier SEO rankings, and seamless user experiences. Combined with React Server Components, it delivers unmatched performance for modern business software.",
    },
    {
      q: "Can you modernize or rebuild our legacy application?",
      a: "Yes. We frequently architect incremental migration paths (the Strangler Fig pattern) that allow you to migrate legacy PHP, WordPress, or monolithic apps to modern Next.js/React architectures without shutting down ongoing operations.",
    },
    {
      q: "How do you guarantee security and data protection?",
      a: "All code follows OWASP Top 10 security standards. We enforce strict HTTPS/TLS, automated dependency vulnerability patching, role-based authorization, encrypted databases at rest and in transit, and thorough input sanitization.",
    },
    {
      q: "Do we own 100% of the codebase and intellectual property?",
      a: "Absolutely. Upon project completion, all source code, git repositories, architectural documentation, and cloud assets are transferred completely to your organization with zero proprietary vendor lock-in.",
    },
  ];

  return (
    <main className="ady-main-content">
      {/* ═══════════════════ SECTION 1: FLAGSHIP HERO ═══════════════════ */}
      <section className="ady-hero-section relative overflow-hidden" id="home">
        <div className="ady-tunnel-container" id="adyTunnel">
          <div className="ady-tunnel-layer ady-tunnel-1" />
          <div className="ady-tunnel-layer ady-tunnel-2" />
          <div className="ady-tunnel-layer ady-tunnel-3" />
        </div>

        <div className="shell text-center relative z-10 pt-16 pb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#ef5b52]/20 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ef5b52] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ef5b52]">
              Performance Engineering &amp; Web Architecture
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0f172a] max-w-4xl mx-auto leading-tight mb-6">
            Modern Web Software, Cloud Platforms &amp;{" "}
            <span className="ady-gradient-text">Scalable Applications</span>
          </h1>

          <p className="text-lg md:text-xl text-[#586882] max-w-2xl mx-auto mb-8 font-normal">
            We engineer sub-second web applications, internal tools, and high-velocity digital products built on Next.js 15, React, and cloud APIs designed for 100/100 Core Web Vitals.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link href="/contact" className="shadcn-input-button-solid">
              <span>Start Your Project</span>
              <span className="badge-icon">&rarr;</span>
            </Link>
            <a href="#architecture" className="shadcn-input-button">
              <span>Explore Tech Stack</span>
              <span className="badge-icon">&darr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES SCROLLING SECTION ═══════════════════ */}
      <ServicesScrollingBar />

      {/* ═══════════════════ SECTION 2: 6 CORE ENGINEERING MODULES ═══════════════════ */}
      <section className="section py-20 bg-white border-t border-[#e2e8f0]" id="services">
        <div className="shell">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ef5b52]/10 text-[#ef5b52] text-xs font-semibold uppercase tracking-wider mb-3">
              Full-Lifecycle Engineering
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] mb-4">
              Comprehensive Web Software &amp; Platform Capabilities
            </h2>
            <p className="text-base text-[#586882]">
              From customer-facing digital flagships to complex enterprise management portals — our codebases are crafted for scale, security, and velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreModules.map((m) => (
              <div key={m.id} className="p-8 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#cbd5e1] hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center shadow-sm">
                      <img src={m.icon} width="26" height="26" alt={m.title} />
                    </div>
                    <span className="text-[11px] font-semibold text-[#7b4bf7] px-2.5 py-1 rounded-full bg-[#7b4bf7]/10 uppercase tracking-wide">
                      {m.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-3 leading-snug">{m.title}</h3>
                  <p className="text-sm text-[#586882] leading-relaxed mb-6">{m.desc}</p>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-semibold text-[#ef5b52] hover:text-[#d9483f]">
                  <span>Discuss Specifications</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 3: ARCHITECTURE VISUAL & PILLARS ═══════════════════ */}
      <section className="section py-20 bg-[#f8fafc] border-t border-[#e2e8f0]" id="architecture">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 3D Asset */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-6 rounded-3xl bg-white border border-[#e2e8f0] shadow-md max-w-md w-full">
                <Image
                  src="/assets/img/service/webdev-3d.png"
                  alt="Modern Web Software Architecture"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain drop-shadow"
                  priority
                />
              </div>
            </div>

            {/* Right Interactive Stack Tabs */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7b4bf7]/10 text-[#7b4bf7] text-xs font-semibold uppercase tracking-wider mb-4">
                Technical Stack &amp; Standards
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] mb-6">
                Built With The Modern Cloud Ecosystem
              </h2>
              <p className="text-base text-[#586882] mb-8 leading-relaxed">
                We select best-in-class technologies that offer long-term stability, massive community support, and industry-standard security.
              </p>

              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-[#e2e8f0] pb-2">
                {(["frontend", "backend", "cloud", "databases"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                      activeTab === tab
                        ? "bg-[#0f172a] text-white shadow-sm"
                        : "bg-white text-[#586882] hover:text-[#0f172a] border border-[#e2e8f0]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stackCategories[activeTab as keyof typeof stackCategories].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white border border-[#e2e8f0] shadow-sm">
                    <h4 className="font-semibold text-[#0f172a] text-sm mb-1">{item.name}</h4>
                    <p className="text-xs text-[#586882] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 4: AGILE DELIVERY LIFECYCLE ═══════════════════ */}
      <section className="section py-20 bg-white border-t border-[#e2e8f0]" id="delivery">
        <div className="shell">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ef5b52]/10 text-[#ef5b52] text-xs font-semibold uppercase tracking-wider mb-3">
              Delivery Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] mb-4">
              Predictable 4-Step Engineering Lifecycle
            </h2>
            <p className="text-base text-[#586882]">
              Transparent milestones, continuous testing, and direct communication with lead architects from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverySteps.map((step) => (
              <div key={step.num} className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] relative flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-bold text-[#ef5b52] opacity-80 block mb-3 font-mono">
                    {step.num}
                  </span>
                  <h3 className="text-lg font-semibold text-[#0f172a] mb-2">{step.title}</h3>
                  <p className="text-xs text-[#586882] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 5: FREQUENTLY ASKED QUESTIONS ═══════════════════ */}
      <section className="section py-20 bg-[#f8fafc] border-t border-[#e2e8f0]" id="faq">
        <div className="shell max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7b4bf7]/10 text-[#7b4bf7] text-xs font-semibold uppercase tracking-wider mb-3">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] mb-4">
              Answers To Technical &amp; Commercial Questions
            </h2>
            <p className="text-base text-[#586882]">
              Everything you need to know about our web engineering partnerships and standards.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl bg-white border border-[#e2e8f0] overflow-hidden transition-all duration-200">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-[#0f172a] text-base"
                >
                  <span>{f.q}</span>
                  <span className={`text-[#ef5b52] text-xl transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-sm text-[#586882] leading-relaxed border-t border-[#f1f5f9] pt-4">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 6: CALL TO ACTION BANNER ═══════════════════ */}
      <section className="growth-banner" id="growth-banner">
        <div className="shell">
          <div className="growth-banner__inner">
            <div className="growth-banner__content">
              <span className="growth-banner__kicker">HAVE A PROJECT IN MIND?</span>
              <h2 id="growth-title" className="text-2xl md:text-3xl font-semibold text-white mt-2 mb-3">
                Let&apos;s Build Your High-Performance Web Software.
              </h2>
              <p className="text-sm text-white/80 max-w-xl">
                Discuss your technical specifications, architecture diagrams, and delivery timelines with a senior Adyantra engineering partner.
              </p>
            </div>
            <div className="growth-banner__action">
              <Link href="/contact" className="btn btn--white btn--shadow">
                <span>Book Architecture Call</span>
                <span className="btn__arrow">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
