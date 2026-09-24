"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { DomainIcon } from "@/components/icons/DomainIcons";
import { AIGuideAvatar } from "@/components/icons/AIGuideAvatar";
import ServicesScrollingBar from "@/components/sections/ServicesScrollingBar";
import HeroWaveformStage from "@/components/hero/HeroWaveformStage";
import OurTeamExpertiseSection from "@/components/sections/OurTeamExpertiseSection";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 5000);
  };

  const articles = [
    {
      slug: "future-of-ai-in-digital-marketing",
      title: "The Future of Autonomous AI in Performance Marketing: Beyond Simple Prompting",
      excerpt: "How modern growth teams are deploying multi-agent reasoning, dynamic creative generation, and closed-loop ROAS optimization to outperform manual media buyers.",
      category: "ai",
      categoryLabel: "AI Automation",
      readTime: "7 min read",
      date: "September 18, 2026",
      author: "Adyantra Strategy Core",
      img: "/assets/img/service/vectors/service-ai-systems.svg?v=3",
      featured: true,
    },
    {
      slug: "maximize-roi-google-ads",
      title: "Maximizing ROI on Google Ads in 2026: The New PMax and First-Party Data Playbook",
      excerpt: "Why relying solely on platform algorithms burns budget. How to feed offline conversion value adjustments and enhanced conversion tracking into your bid strategies.",
      category: "marketing",
      categoryLabel: "Paid Growth",
      readTime: "5 min read",
      date: "September 12, 2026",
      author: "PPC Engineering Team",
      img: "/assets/img/service/vectors/service-google-ppc.svg?v=3",
      featured: false,
    },
    {
      slug: "design-systems-scale",
      title: "Architecting Next.js 15 Applications for 100/100 Core Web Vitals at Scale",
      excerpt: "A deep dive into React Server Components, partial pre-rendering, edge streaming, and eliminating layout shift in content-heavy enterprise applications.",
      category: "software",
      categoryLabel: "Web Architecture",
      readTime: "9 min read",
      date: "September 04, 2026",
      author: "Web Systems Lead",
      img: "/assets/img/service/vectors/service-web-development.svg?v=3",
      featured: false,
    },
    {
      slug: "crm-sync-automation-guide",
      title: "The Zero-Leakage Lead Pipeline: Integrating WhatsApp Cloud API with Enterprise CRM",
      excerpt: "Step-by-step architectural breakdown of bidirectional webhook synchronization between Meta ad leads, WhatsApp chatbots, and HubSpot deal stages.",
      category: "ai",
      categoryLabel: "AI Automation",
      readTime: "6 min read",
      date: "August 28, 2026",
      author: "Automation Engineering",
      img: "/assets/img/service/vectors/service-crm-automation.svg?v=3",
      featured: false,
    },
    {
      slug: "ecommerce-cart-recovery-systems",
      title: "Beyond Basic Email Reminders: Intelligent Dynamic E-Commerce Cart Recovery",
      excerpt: "How personalized predictive discount thresholds and multi-channel timing triggers recover 22% more abandoned revenue than traditional drip sequences.",
      category: "marketing",
      categoryLabel: "E-Commerce",
      readTime: "6 min read",
      date: "August 20, 2026",
      author: "E-Commerce Growth Team",
      img: "/assets/img/service/vectors/service-ecommerce.svg?v=3",
      featured: false,
    },
    {
      slug: "technical-seo-audit-checklist",
      title: "The 2026 Technical SEO Architecture: JavaScript Rendering & Semantic Entities",
      excerpt: "Why traditional keyword stuffing is obsolete. How search engines evaluate knowledge graphs, entity relationships, and sub-second TTFB rendering.",
      category: "marketing",
      categoryLabel: "SEO Strategy",
      readTime: "8 min read",
      date: "August 14, 2026",
      author: "SEO Strategy Core",
      img: "/assets/img/service/vectors/service-seo.svg?v=3",
      featured: false,
    },
  ];

  const filtered =
    activeCategory === "all"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const featuredArticle = articles.find((a) => a.featured) || articles[0];

  const blogFaqs = [
    {
      q: "How frequently does Adyantra publish research and dispatches?",
      a: "Our core engineering and growth teams release deep-dive architectural breakdowns, case studies, and playbooks on a weekly basis, focusing on tested production systems rather than speculative theories.",
    },
    {
      q: "Can we hire Adyantra to implement the workflows outlined in these articles?",
      a: "Yes. Every playbook and architecture published in our blog represents an in-house capability. You can request a discovery consultation to implement these custom pipelines for your enterprise.",
    },
    {
      q: "Are the code repositories and automation templates open-source?",
      a: "We frequently share sanitised n8n JSON templates, Next.js components, and webhook boilerplates with our newsletter subscribers and client partners.",
    },
    {
      q: "How do I subscribe to the weekly engineering newsletter?",
      a: "Simply enter your work email in the dispatch box on this page to receive our teardowns directly in your inbox with zero spam.",
    },
  ];

  return (
    <main className="services-page-root min-h-screen overflow-x-hidden">
      {/* ═══════════════════ SECTION 1: HERO (CURRENT THEME 3D TUNNEL & WAVEFORM) ═══════════════════ */}
      <section className="ady-hero-section relative overflow-hidden" id="home">
        <div className="ady-canvas-container">
          <div className="ady-hero-card">
            {/* 3D Concentric Oval Tunnel */}
            <div className="ady-tunnel-container" id="adyTunnel">
              <div className="ady-tunnel-ring ady-ring-outermost" />
              <div className="ady-tunnel-ring ady-ring-7" />
              <div className="ady-tunnel-ring ady-ring-6" />
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
                Growth Insights • Engineering Blueprints • Teardowns
              </div>

              <h1 className="ady-main-title">
                <span className="ady-title-line1">Perspectives on AI, Growth Systems &amp;</span>
                <span className="ady-title-line2">Modern Web Engineering</span>
                <span className="ady-title-line3">That Scale.</span>
              </h1>
              <p className="ady-subtitle">
                Practical teardowns, architectural blueprints, and unit-economic strategies from senior practitioners scaling modern digital operations.
              </p>

              {/* Action Buttons */}
              <div className="ady-cta-group">
                <a href="#articles" className="ady-btn-dark">
                  <span>Explore Articles</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <a href="#newsletter" className="ady-btn-ghost">
                  <span>Subscribe to Dispatches</span>
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

      {/* ═══════════════════ SECTION 2: SERVICES SCROLLING SECTION ═══════════════════ */}
      <ServicesScrollingBar />

      {/* ═══════════════════ SECTION 3: FEATURED LEAD ARTICLE ═══════════════════ */}
      <section className="section py-16" id="featured">
        <div className="shell">
          <div className="services-ref-header services-ref-header--centered mb-8">
            <span className="ref-pill-kicker">FEATURED DEEP DIVE</span>
            <h2 className="services-ref-heading">
              Editor&apos;s <span className="ady-gradient-text">Pick</span>
            </h2>
          </div>

          <div className="service-ref-card p-6 md:p-10 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#eaedf5] shadow-sm">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="ref-pill-kicker" style={{ marginBottom: 0, padding: "4px 12px", fontSize: "11px" }}>
                  {featuredArticle.categoryLabel}
                </span>
                <span className="text-xs text-[#586882]">&bull;</span>
                <span className="text-xs text-[#586882]">{featuredArticle.readTime}</span>
                <span className="text-xs text-[#586882]">&bull;</span>
                <span className="text-xs text-[#586882]">{featuredArticle.date}</span>
              </div>

              <h3 className="service-ref-card__title text-2xl md:text-3xl mb-4">
                <Link href={`/blog/${featuredArticle.slug}`} className="hover:text-[#ef5b52] transition-colors">
                  {featuredArticle.title}
                </Link>
              </h3>

              <p className="service-ref-card__desc text-base mb-6">
                {featuredArticle.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#f1f5f9]">
                <span className="text-xs font-semibold text-[#11142e]">
                  By {featuredArticle.author}
                </span>
                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="service-ref-explore-btn"
                >
                  Read Full Article <span className="explore-btn-icon">»</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="p-6 rounded-2xl bg-[#f8faff] border border-[#eaedf5] max-w-sm w-full flex items-center justify-center">
                <img
                  src={featuredArticle.img}
                  alt={featuredArticle.title}
                  className="max-h-56 w-auto object-contain drop-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 4: ARTICLES GRID WITH CATEGORY FILTER ═══════════════════ */}
      <section className="section services-ref-section" id="articles">
        <div className="shell">
          <div className="services-ref-header services-ref-header--centered">
            <span className="ref-pill-kicker">ENGINEERING &amp; GROWTH DISPATCHES</span>
            <h2 className="services-ref-heading">
              Browse Articles by <span className="ady-gradient-text">Technical Domain</span>
            </h2>
            <p className="services-ref-subtitle">
              Filter our research by technical domain or growth discipline to find production blueprints for your stack.
            </p>
          </div>

          {/* Filter Tabs matching current theme */}
          <div className="services-filter-tabs">
            {[
              { id: "all", label: "ALL TOPICS" },
              { id: "ai", label: "AI AUTOMATION" },
              { id: "marketing", label: "PAID & ORGANIC GROWTH" },
              { id: "software", label: "WEB SOFTWARE" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`services-tab ${activeCategory === tab.id ? "services-tab--active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid matching service-ref-card current theme */}
          <div className="services-ref-grid services-ref-grid--9">
            {filtered.map((art) => (
              <article key={art.slug} className="service-ref-card flex flex-col justify-between">
                <div>
                  <div className="service-ref-card__visual">
                    <Link href={`/blog/${art.slug}`} className="block">
                      <img src={art.img} alt={art.title} loading="lazy" />
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="ref-pill-kicker" style={{ marginBottom: 0, padding: "2px 10px", fontSize: "10px" }}>
                      {art.categoryLabel}
                    </span>
                    <span className="text-xs text-[#586882]">&bull; {art.readTime}</span>
                  </div>
                  <h3 className="service-ref-card__title">
                    <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                  </h3>
                  <p className="service-ref-card__desc">{art.excerpt}</p>
                </div>
                <div className="service-ref-card__action pt-4 border-t border-[#f1f5f9] flex items-center justify-between">
                  <span className="text-xs text-[#586882]">{art.date}</span>
                  <Link href={`/blog/${art.slug}`} className="service-ref-explore-btn">
                    Read Article <span className="explore-btn-icon">»</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 5: NEWSLETTER SUBSCRIPTION BOX ═══════════════════ */}
      <section className="section py-16" id="newsletter">
        <div className="shell max-w-3xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl bg-[#0f172a] text-white shadow-xl text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
              Direct Engineering Dispatch
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-white">
              Join 12,000+ Founders &amp; Operators
            </h2>
            <p className="text-sm text-slate-300 max-w-lg mx-auto mb-8 leading-relaxed">
              Receive our weekly analysis on AI agent workflows, paid acquisition algorithm changes, and high-performance web architecture.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-400 text-emerald-200 text-sm font-medium">
                ✓ You are subscribed! Check your inbox for our latest research release.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email..."
                  className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm placeholder-slate-400 focus:outline-none focus:border-[#ef5b52] flex-1"
                />
                <button
                  type="submit"
                  className="button button--coral shrink-0"
                  style={{ borderRadius: "12px", padding: "12px 24px" }}
                >
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-[11px] text-slate-400 mt-4">
              Zero spam. Unsubscribe anytime with one click.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 6: CORE TECHNICAL PILLARS (CURRENT THEME) ═══════════════════ */}
      <section className="section about" id="pillars" aria-labelledby="about-title">
        <div className="shell split-layout split-layout--about">
          <div className="copy-block about-copy">
            <span className="ref-pill-kicker">RESEARCH IN PRODUCTION</span>
            <h2 id="about-title" className="about-headline">
              Translating Engineering Research <br />
              <span className="ady-gradient-text">Into Commercial Results.</span>
            </h2>
            <p>
              We don&apos;t just write about modern growth technologies; we deploy them daily across 50+ enterprise client accounts. Every insight published here is derived from actual live campaign spend, conversion optimizations, and custom workflow architectures.
            </p>
            <p>
              By uniting modern web application engineering, performance marketing analytics, and custom AI workflow automation, we eliminate digital inefficiencies and deliver transparent, high-ROAS returns.
            </p>
            <Link className="text-link" href="/contact">
              Deploy our playbooks for your brand <b>&rarr;</b>
            </Link>
          </div>
          <div className="pillar-panel">
            <span className="ref-pill-kicker">CORE TECHNICAL PILLARS</span>
            <h3>Our core competencies driving sustained growth for clients.</h3>
            <ol>
              <li><span>Technical SEO &amp; Organic Keyword Ranking</span><b>01</b></li>
              <li><span>High-ROAS Meta &amp; Google Performance Ads</span><b>02</b></li>
              <li><span>Custom Next.js &amp; React Web Application Dev</span><b>03</b></li>
              <li><span>Scalable E-Commerce &amp; Checkout Optimization</span><b>04</b></li>
              <li><span>Brand Identity, UI/UX &amp; Strategic PR</span><b>05</b></li>
              <li><span>WhatsApp AI Chatbots &amp; Workflow Automation</span><b>06</b></li>
            </ol>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 7: SYSTEM VISUALIZATION / EXPERTISE SHOWCASE ═══════════════════ */}
      <section className="section expert-showcase-section" id="ecosystem" aria-labelledby="expert-showcase-heading">
        <div className="shell">
          <div className="expert-top-grid">
            <div className="expert-header-left">
              <span className="expert-kicker-pill">
                <span className="expert-kicker-dot" />
                Live Strategic Performance
              </span>
              <h2 id="expert-showcase-heading" className="expert-main-heading">
                Tested Architectures Built for <br />
                <span className="ady-gradient-text">Enterprise Reliability</span>
              </h2>
              <p className="expert-main-desc">
                From real-time CAPI attribution tracking to multi-step autonomous AI workflows, our published teardowns reflect the highest standards in digital growth execution.
              </p>
            </div>

            <div className="expert-tablet-card">
              <Image
                src="/assets/img/service/service-header-tablet.svg"
                alt="Adyantra Strategic Performance Dashboard"
                width={800}
                height={500}
                className="expert-tablet-img"
                priority
              />
            </div>
          </div>

          <div className="expert-split-grid">
            <div className="expert-content-col">
              <div className="expert-overview-block">
                <h3 className="expert-section-title">Tested in Production</h3>
                <p className="expert-overview-text">
                  Our articles are written by senior practitioners actively writing code, managing media spend, and monitoring pipeline health. When you read our dispatches, you are reviewing verified systems designed to survive real-world algorithm updates and conversion friction.
                </p>
              </div>

              <div className="expert-dual-images">
                <div className="expert-dual-img-card">
                  <Image
                    src="/assets/img/service/service-collab-team.svg"
                    alt="Adyantra Engineering Collaboration"
                    width={600}
                    height={400}
                    className="expert-photo"
                  />
                </div>
                <div className="expert-dual-img-card">
                  <Image
                    src="/assets/img/service/service-analytics-review.svg"
                    alt="Adyantra Growth Analytics Teardowns"
                    width={600}
                    height={400}
                    className="expert-photo"
                  />
                </div>
              </div>

              <div className="expert-included-card">
                <h4 className="expert-included-title">What&apos;s Included In Every Blueprint</h4>
                <div className="expert-accent-line" />
                <p className="expert-included-desc">
                  We provide end-to-end transparency: architectural diagrams, stack recommendations, and unit-economic benchmarks.
                </p>

                <div className="expert-check-grid">
                  <div className="expert-check-item">
                    <span className="expert-check-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.08)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Actionable Implementation Steps</span>
                  </div>

                  <div className="expert-check-item">
                    <span className="expert-check-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.08)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Real-World Benchmark Metrics</span>
                  </div>

                  <div className="expert-check-item">
                    <span className="expert-check-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.08)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Production Architecture Diagrams</span>
                  </div>

                  <div className="expert-check-item">
                    <span className="expert-check-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.08)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Full-Funnel Automation Schemas</span>
                  </div>
                </div>
              </div>
            </div>

            <aside className="expert-sidebar-col">
              <div className="expert-recent-services-card">
                <h4 className="expert-recent-title">Trending Categories</h4>
                <div className="expert-accent-line" style={{ width: "45px" }} />
                <ul className="expert-recent-list">
                  <li className="expert-recent-item">
                    <span className="expert-check-icon">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.2)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Autonomous AI Agents</span>
                  </li>
                  <li className="expert-recent-item">
                    <span className="expert-check-icon">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.2)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>PMax &amp; CAPI Optimization</span>
                  </li>
                  <li className="expert-recent-item">
                    <span className="expert-check-icon">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.2)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Next.js 15 Server Performance</span>
                  </li>
                  <li className="expert-recent-item">
                    <span className="expert-check-icon">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#7b4bf7" strokeWidth="2" fill="rgba(123, 75, 247, 0.2)" />
                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>WhatsApp CRM Bots</span>
                  </li>
                </ul>
              </div>

              <div className="expert-cta-card">
                <Image
                  src="/assets/img/service/service-cta-transform.svg"
                  alt="Transform Your Business with Adyantra"
                  fill
                  className="expert-cta-bg-img"
                />
                <div className="expert-cta-overlay" />
                <div className="expert-cta-content">
                  <h4 className="expert-cta-heading">
                    Transform <br />
                    Your Business <br />
                    with <span className="ady-gradient-text">Adyantra!</span>
                  </h4>
                  <p className="expert-cta-desc">
                    Need help deploying these systems? Connect with our senior engineering team for a dedicated implementation roadmap.
                  </p>
                  <a
                    href="#contact"
                    className="shadcn-input-button-solid"
                    style={{ marginTop: "10px", width: "100%", justifyContent: "space-between" }}
                  >
                    <span>Request System Audit</span>
                    <span className="badge-icon">→</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 8: TARGET DOMAIN EXPERTISE (CURRENT THEME MARQUEE) ═══════════════════ */}
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
              <span className="domain-pill-icon"><DomainIcon name="education" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">Fashion &amp; D2C Apparel</span>
              <span className="domain-pill-icon"><DomainIcon name="fashion" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">NGOs &amp; Non-Profits</span>
              <span className="domain-pill-icon"><DomainIcon name="ngo" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">Other Enterprises &amp; Businesses</span>
              <span className="domain-pill-icon"><DomainIcon name="enterprise" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">IT &amp; Software Enterprises</span>
              <span className="domain-pill-icon"><DomainIcon name="software" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">Real Estate &amp; Housing</span>
              <span className="domain-pill-icon"><DomainIcon name="realestate" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">Healthcare &amp; Clinics</span>
              <span className="domain-pill-icon"><DomainIcon name="healthcare" /></span>
            </div>
            <div className="domain-pill-card">
              <span className="domain-pill-text">E-Commerce &amp; Retail Brands</span>
              <span className="domain-pill-icon"><DomainIcon name="ecommerce" /></span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 9: ACCELERATE YOUR REVENUE BANNER ═══════════════════ */}
      <section className="growth-banner" id="growth-banner" aria-labelledby="growth-title">
        <div className="shell">
          <div>
            <p className="kicker">Accelerate your revenue</p>
            <h2 id="growth-title">
              Ready to scale your business with <em>performance ads &amp; AI automation?</em>
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
          <div className="section-heading section-heading--center">
            <span className="ref-pill-kicker">OUR PROVEN PROCESS</span>
            <h2 id="process-title">
              A Transparent <span className="ady-gradient-text">6-Step Growth Methodology</span>
            </h2>
            <p>Our structured framework ensures rapid deployment, data-driven optimization, and predictable scaling.</p>
          </div>
          <div className="process-grid">
            <article>
              <span>01</span>
              <h3>Discovery &amp; Funnel Audit</h3>
              <p>We audit your digital presence, advertising accounts, search rankings, tech stack, and competitor positioning.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Strategize &amp; Roadmap</h3>
              <p>Channel allocation, audience strategy, growth roadmap, and automation architecture.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Build &amp; Execute</h3>
              <p>Campaigns, creative assets, Next.js web build, tracking setup, and AI workflow integration.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Launch &amp; Deploy</h3>
              <p>Deploy campaigns, launch automations, and activate real-time conversion tracking.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 11: THE ADYANTRA ADVANTAGE (OUR TEAM & EXPERTISE) ═══════════════════ */}
      <OurTeamExpertiseSection />

      {/* ═══════════════════ SECTION 12: CLIENT REVIEWS (CURRENT THEME MARQUEE) ═══════════════════ */}
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
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 13: FAQ SECTION (CURRENT THEME ACCORDIONS) ═══════════════════ */}
      <section className="section faq" id="faq" aria-labelledby="faq-title">
        <div className="shell faq-layout">
          <div className="section-heading">
            <span className="ref-pill-kicker">CLEAR ANSWERS</span>
            <h2 id="faq-title">
              Frequently Asked <br />
              <span className="ady-gradient-text">Questions</span>
            </h2>
            <p>Everything you need to know about our research, publishing cadence, and implementation assistance.</p>
          </div>
          <div className="faq-list">
            {blogFaqs.map((faq, idx) => (
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

      {/* ═══════════════════ SECTION 14: CONTACT SECTION (CURRENT THEME FORM) ═══════════════════ */}
      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="shell contact__grid">
          <div className="contact__copy">
            <span className="ref-pill-kicker">CONNECT WITH OUR TEAM</span>
            <h2 id="contact-title">
              Ready to build your <span className="ady-gradient-text">growth engine?</span>
            </h2>
            <p>Connect your marketing, technology, and automation into one scalable system.</p>
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
            <h3>Request a Free Growth Audit</h3>
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
                  <option>Performance Marketing &amp; Ads</option>
                  <option>AI Marketing &amp; Automation</option>
                  <option>Web Design &amp; Development</option>
                  <option>SEO &amp; Organic Growth</option>
                  <option>E-commerce Growth</option>
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
