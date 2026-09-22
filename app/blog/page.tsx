"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
      img: "/assets/img/service/ai-3d.png",
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
      img: "/assets/img/service/ai/ad-creative-automation.jpg",
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
      img: "/assets/img/service/webdev-3d.png",
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
      img: "/assets/img/service/ai/crm-automation.jpg",
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
      img: "/assets/img/service/ai/ecommerce-automation.png",
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
      img: "/assets/img/service/seo-3d.png",
      featured: false,
    },
  ];

  const filtered =
    activeCategory === "all"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const featuredArticle = articles.find((a) => a.featured) || articles[0];

  return (
    <main className="ady-main-content bg-white">
      {/* ═══════════════════ SECTION 1: FLAGSHIP HERO ═══════════════════ */}
      <section className="ady-hero-section relative overflow-hidden" id="home">
        <div className="ady-tunnel-container" id="adyTunnel">
          <div className="ady-tunnel-layer ady-tunnel-1" />
          <div className="ady-tunnel-layer ady-tunnel-2" />
          <div className="ady-tunnel-layer ady-tunnel-3" />
        </div>

        <div className="shell text-center relative z-10 pt-16 pb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eff6ff] border border-[#bfdbfe]/60 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2563eb]">
              Thought Leadership &amp; Engineering Insights
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#0f172a] max-w-4xl mx-auto leading-tight mb-6 font-heading">
            Perspectives on AI, Growth Systems &amp;{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#0284c7] bg-clip-text text-transparent">
              Modern Web Engineering
            </span>
          </h1>

          <p className="text-base md:text-lg text-[#64748b] max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Practical teardowns, architectural blueprints, and unit-economic strategies from senior practitioners scaling modern digital operations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href="#articles"
              className="px-6 py-3.5 rounded-full bg-[#0f172a] text-white font-medium text-sm hover:bg-[#1e293b] shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Explore All Articles</span>
              <span className="text-xs">&darr;</span>
            </a>
            <a
              href="#newsletter"
              className="px-6 py-3.5 rounded-full bg-white text-[#0f172a] border border-[#e2e8f0] font-medium text-sm hover:bg-[#f8fafc] hover:border-[#cbd5e1] transition-all inline-flex items-center gap-2 shadow-sm"
            >
              <span>Subscribe to Updates</span>
              <span className="text-xs">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════ STATS BRIDGE BAR (FLAGSHIP PATTERN) ═══════════════════ */}
      <div className="ady-stats-bridge-bar relative z-20">
        <div className="ady-stats-container">
          <div className="ady-stat-item">
            <p className="ady-stat-value">25+</p>
            <p className="ady-stat-label">Architectural Deconstructions</p>
          </div>
          <div className="ady-stat-item">
            <p className="ady-stat-value">100%</p>
            <p className="ady-stat-label">Practitioner Authored</p>
          </div>
          <div className="ady-stat-item">
            <p className="ady-stat-value">Weekly</p>
            <p className="ady-stat-label">Engineering Updates</p>
          </div>
          <div className="ady-stat-item">
            <p className="ady-stat-value">Zero</p>
            <p className="ady-stat-label">Generic Marketing Fluff</p>
          </div>
        </div>
      </div>

      {/* ═══════════════════ SECTION 2: FEATURED LEAD ARTICLE ═══════════════════ */}
      <section className="section py-16 bg-white border-t border-[#e2e8f0]" id="featured">
        <div className="shell">
          <div className="mb-6 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eff6ff] text-[#2563eb] text-xs font-semibold uppercase tracking-wider border border-[#bfdbfe]/60">
              Featured Deep Dive
            </span>
          </div>

          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] border border-[#e2e8f0] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#eff6ff] text-[#2563eb] border border-[#bfdbfe]/60">
                  {featuredArticle.categoryLabel}
                </span>
                <span className="text-xs text-[#64748b]">&bull;</span>
                <span className="text-xs text-[#64748b]">{featuredArticle.readTime}</span>
                <span className="text-xs text-[#64748b]">&bull;</span>
                <span className="text-xs text-[#64748b]">{featuredArticle.date}</span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0f172a] mb-4 leading-snug font-heading">
                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="hover:text-[#2563eb] transition-colors"
                >
                  {featuredArticle.title}
                </Link>
              </h2>

              <p className="text-base text-[#64748b] leading-relaxed mb-6">
                {featuredArticle.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#e2e8f0]">
                <span className="text-xs font-semibold text-[#0f172a] font-heading">
                  By {featuredArticle.author}
                </span>
                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8] transition-colors"
                >
                  <span>Read Full Article</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="p-6 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm max-w-sm w-full flex items-center justify-center">
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

      {/* ═══════════════════ SECTION 3: ARTICLES GRID WITH CATEGORY FILTER ═══════════════════ */}
      <section className="section py-20 bg-[#f8fafc] border-t border-[#e2e8f0]" id="articles">
        <div className="shell">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eff6ff] text-[#2563eb] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#bfdbfe]/60">
              Explore Insights
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] mb-4 font-heading">
              Latest Engineering &amp; Growth Dispatches
            </h2>
            <p className="text-base text-[#64748b]">
              Filter our research by technical domain or growth discipline.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-14">
            {[
              { id: "all", label: "All Topics" },
              { id: "ai", label: "AI Automation" },
              { id: "marketing", label: "Paid & Organic Growth" },
              { id: "software", label: "Web Software" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === tab.id
                    ? "bg-[#0f172a] text-white shadow-md -translate-y-0.5"
                    : "bg-white text-[#64748b] hover:text-[#0f172a] hover:bg-slate-50 border border-[#e2e8f0]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((art) => (
              <article
                key={art.slug}
                className="p-6 rounded-3xl bg-white border border-[#e2e8f0] shadow-sm hover:border-[#cbd5e1] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-4 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] border border-[#e2e8f0] flex items-center justify-center h-48 mb-6">
                    <img
                      src={art.img}
                      alt={art.title}
                      className="max-h-36 w-auto object-contain drop-shadow"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#64748b] mb-3">
                    <span className="font-semibold text-[#2563eb] uppercase tracking-wide text-[11px] px-2 py-0.5 rounded bg-[#eff6ff] border border-[#bfdbfe]/60">
                      {art.categoryLabel}
                    </span>
                    <span>&bull;</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#0f172a] mb-3 leading-snug font-heading">
                    <Link
                      href={`/blog/${art.slug}`}
                      className="hover:text-[#2563eb] transition-colors"
                    >
                      {art.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-[#64748b] leading-relaxed mb-6">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f1f5f9] flex items-center justify-between">
                  <span className="text-[11px] text-[#64748b]">{art.date}</span>
                  <Link
                    href={`/blog/${art.slug}`}
                    className="text-xs font-semibold text-[#2563eb] hover:text-[#1d4ed8] transition-colors"
                  >
                    Read Article &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 4: NEWSLETTER SUBSCRIPTION ═══════════════════ */}
      <section className="section py-20 bg-white border-t border-[#e2e8f0]" id="newsletter">
        <div className="shell max-w-3xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white shadow-xl text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
              Direct Engineering Dispatch
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 font-heading">
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
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your work email..."
                  className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm placeholder-slate-400 focus:outline-none focus:border-[#2563eb] flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#2563eb] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors shadow-md"
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

      {/* ═══════════════════ SECTION 5: CALL TO ACTION BANNER ═══════════════════ */}
      <section className="growth-banner" id="growth-banner">
        <div className="shell">
          <div className="growth-banner__inner">
            <div className="growth-banner__content">
              <span className="growth-banner__kicker text-[#60a5fa]">WANT CUSTOM STRATEGY?</span>
              <h2 id="growth-title" className="text-2xl md:text-3xl font-semibold text-white mt-2 mb-3 font-heading">
                Let&apos;s Review Your Growth &amp; Tech Stack.
              </h2>
              <p className="text-sm text-white/80 max-w-xl">
                Get a custom audit covering ad performance leaks, conversion optimization, and workflow automation opportunities.
              </p>
            </div>
            <div className="growth-banner__action">
              <Link href="/contact" className="btn btn--white btn--shadow">
                <span>Book Growth Consultation</span>
                <span className="btn__arrow">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
