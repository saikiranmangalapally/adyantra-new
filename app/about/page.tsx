"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
  const [activeStep, setActiveStep] = useState(0);

  const evolutionSteps = [
    {
      phase: "01",
      title: "Build",
      tagline: "High-Performance Digital Foundations",
      desc: "Engineered modern websites, custom web apps, and digital infrastructure built for speed, responsiveness, and zero friction.",
      icon: "https://img.icons8.com/?size=96&id=16412&format=png&color=2563eb",
    },
    {
      phase: "02",
      title: "Acquire",
      tagline: "Predictable Paid & Organic Inbound",
      desc: "Architected multi-channel acquisition engines across Google Ads, Meta Ads, Technical SEO, and content distribution to drive high-intent traffic.",
      icon: "https://img.icons8.com/?size=96&id=90&format=png&color=0284c7",
    },
    {
      phase: "03",
      title: "Engage",
      tagline: "Brand Resonance & Audience Retention",
      desc: "Crafted compelling visual narratives, social authority, content ecosystems, and automated email nurturing that turn visitors into loyal advocates.",
      icon: "https://img.icons8.com/?size=96&id=87&format=png&color=2563eb",
    },
    {
      phase: "04",
      title: "Sell",
      tagline: "Conversion Rate & E-Commerce Scale",
      desc: "Optimized checkout flows, conversion funnels, personalized product recommendations, and frictionless transaction loops to maximize LTV.",
      icon: "https://img.icons8.com/?size=96&id=9671&format=png&color=0284c7",
    },
    {
      phase: "05",
      title: "Automate",
      tagline: "Autonomous AI Workflows & Systems",
      desc: "Integrated bespoke AI agents, event-driven webhooks, RAG knowledge bots, and CRM sync to run operational execution on autopilot.",
      icon: "https://img.icons8.com/?size=96&id=37410&format=png&color=2563eb",
    },
  ];

  const coreValues = [
    {
      title: "Radical Engineering Transparency",
      desc: "No vanity metrics, hidden markups, or vague reports. Every dollar spent and every line of code deployed is tracked directly against business growth.",
      icon: "https://img.icons8.com/?size=96&id=852&format=png&color=2563eb",
    },
    {
      title: "First-Principles Problem Solving",
      desc: "We don't copy cookie-cutter playbooks. We break down your unit economics, acquisition bottlenecks, and workflow friction from the ground up.",
      icon: "https://img.icons8.com/?size=96&id=4052&format=png&color=0284c7",
    },
    {
      title: "100% In-House Craftsmanship",
      desc: "We never outsource critical engineering or strategic campaign management. Your systems are built and optimized by dedicated senior practitioners.",
      icon: "https://img.icons8.com/?size=96&id=53373&format=png&color=2563eb",
    },
    {
      title: "Velocity with Reliability",
      desc: "Ship fast without breaking things. Automated CI/CD, rigorous quality assurance, and real-time monitoring ensure high uptime and continuous progress.",
      icon: "https://img.icons8.com/?size=96&id=2854&format=png&color=0284c7",
    },
  ];

  const reviews = [
    {
      quote: "Adyantra scaled our D2C brand from $40k to over $180k monthly revenue with their combined Meta ads and automated email flows. True partners in every dimension.",
      author: "Aditya Verma",
      role: "Founder, Kensho Living",
      location: "Bengaluru, India",
    },
    {
      quote: "The Next.js web portal they engineered is blisteringly fast. Our organic SEO rankings shot up within 60 days, driving 300% more inbound queries.",
      author: "Sneha Reddy",
      role: "VP Marketing, NovaTech Labs",
      location: "Hyderabad, India",
    },
    {
      quote: "Their AI WhatsApp bot handles 85% of our patient inquiries instantly. Bookings are up 4x and our support team is finally freed from repetitive chats.",
      author: "Dr. K. Raman",
      role: "Director, Apex Healthcare",
      location: "Chennai, India",
    },
    {
      quote: "No agency has understood our unit economics better. They don't just run ads; they fix your funnel, improve margins, and automate the pipeline.",
      author: "Rohan Mehta",
      role: "Co-Founder, UrbanCraft",
      location: "Mumbai, India",
    },
  ];

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
              About Adyantra Digital
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#0f172a] max-w-4xl mx-auto leading-tight mb-6 font-heading">
            Architecting Predictable Growth &amp;{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#0284c7] bg-clip-text text-transparent">
              Autonomous Systems
            </span>
          </h1>

          <p className="text-base md:text-lg text-[#64748b] max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            From modern web applications and multi-channel acquisition to autonomous AI systems — we engineer resilient digital engines that drive commercial velocity.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-full bg-[#0f172a] text-white font-medium text-sm hover:bg-[#1e293b] shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Work With Us</span>
              <span className="text-xs">&rarr;</span>
            </Link>
            <a
              href="#evolution"
              className="px-6 py-3.5 rounded-full bg-white text-[#0f172a] border border-[#e2e8f0] font-medium text-sm hover:bg-[#f8fafc] hover:border-[#cbd5e1] transition-all inline-flex items-center gap-2 shadow-sm"
            >
              <span>Our Framework</span>
              <span className="text-xs">&darr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════ STATS BRIDGE BAR (FLAGSHIP PATTERN) ═══════════════════ */}
      <div className="ady-stats-bridge-bar relative z-20">
        <div className="ady-stats-container">
          <div className="ady-stat-item">
            <p className="ady-stat-value">2018</p>
            <p className="ady-stat-label">Year Established</p>
          </div>
          <div className="ady-stat-item">
            <p className="ady-stat-value">50+</p>
            <p className="ady-stat-label">Brands Scaled</p>
          </div>
          <div className="ady-stat-item">
            <p className="ady-stat-value">100%</p>
            <p className="ady-stat-label">In-House Engineering</p>
          </div>
          <div className="ady-stat-item">
            <p className="ady-stat-value">Zero</p>
            <p className="ady-stat-label">Outsourced Work</p>
          </div>
        </div>
      </div>

      {/* ═══════════════════ SECTION 2: EXECUTIVE VISION & PURPOSE ═══════════════════ */}
      <section className="section py-20 bg-white border-t border-[#e2e8f0]" id="mission">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 3D Visual Asset */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-6 rounded-3xl bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] border border-[#e2e8f0] shadow-sm max-w-md w-full">
                <Image
                  src="/assets/img/about/about-3d.png"
                  alt="Adyantra Digital Architecture & Growth"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain drop-shadow-md"
                  priority
                />
              </div>
            </div>

            {/* Right Strategic Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eff6ff] text-[#2563eb] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#bfdbfe]/60">
                Our Strategic Purpose
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] mb-6 leading-snug font-heading">
                Engineering Measurable Competitive Advantages For Ambitious Brands
              </h2>
              <p className="text-base text-[#64748b] mb-5 leading-relaxed">
                Most agencies focus strictly on vanity outputs — impressions, clicks, or isolated design templates. At Adyantra, we believe digital presence without commercial velocity is dead weight.
              </p>
              <p className="text-base text-[#64748b] mb-8 leading-relaxed">
                We bridge the gap between high-performance software engineering, aggressive paid performance marketing, and cutting-edge autonomous AI workflows to build end-to-end engines where every component drives measurable return on investment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <h4 className="font-semibold text-[#0f172a] mb-1.5 text-base">Commercial Rigor</h4>
                  <p className="text-xs text-[#64748b] leading-relaxed">Every initiative is mapped directly to CAC, ROAS, pipeline velocity, and customer lifetime value.</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <h4 className="font-semibold text-[#0f172a] mb-1.5 text-base">Autonomous Systems</h4>
                  <p className="text-xs text-[#64748b] leading-relaxed">Automating repetitive manual handoffs so your human talent focuses strictly on strategic innovation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 3: THE ADYANTRA EVOLUTION ═══════════════════ */}
      <section className="section py-20 bg-[#f8fafc] border-t border-[#e2e8f0]" id="evolution">
        <div className="shell">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eff6ff] text-[#2563eb] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#bfdbfe]/60">
              The Adyantra Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] mb-4 font-heading">
              From Digital Foundations To Intelligent Businesses
            </h2>
            <p className="text-base text-[#64748b]">
              A deliberate progression designed to eliminate operational friction and scale conversions without multiplying overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {evolutionSteps.map((step, idx) => (
              <div
                key={step.phase}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 border ${
                  activeStep === idx
                    ? "bg-white border-[#2563eb] shadow-md -translate-y-1"
                    : "bg-white/80 border-[#e2e8f0] hover:bg-white hover:border-[#cbd5e1]"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-[#2563eb] px-2.5 py-0.5 rounded-full bg-[#eff6ff] border border-[#bfdbfe]/60">
                    PHASE {step.phase}
                  </span>
                  <img src={step.icon} width="28" height="28" alt={step.title} />
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-1.5 font-heading">{step.title}</h3>
                <h4 className="text-xs font-semibold text-[#0284c7] mb-3">{step.tagline}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 4: CORE ENGINEERING VALUES ═══════════════════ */}
      <section className="section py-20 bg-white border-t border-[#e2e8f0]" id="values">
        <div className="shell">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eff6ff] text-[#2563eb] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#bfdbfe]/60">
              Our Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] mb-4 font-heading">
              Core Principles That Guide Every Engagement
            </h2>
            <p className="text-base text-[#64748b]">
              We operate with uncompromising standards to deliver durable competitive advantages for our client partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((v, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] flex gap-5 items-start hover:border-[#cbd5e1] hover:shadow-sm transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#e2e8f0] flex items-center justify-center shrink-0 shadow-sm">
                  <img src={v.icon} width="32" height="32" alt={v.title} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-2 font-heading">{v.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 5: LEADERSHIP PREVIEW ═══════════════════ */}
      <section className="section py-20 bg-[#f8fafc] border-t border-[#e2e8f0]" id="team">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eff6ff] text-[#2563eb] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#bfdbfe]/60">
                Senior Practitioners
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] mb-6 font-heading leading-snug">
                Hands-On Leadership Working Directly On Your Accounts
              </h2>
              <p className="text-base text-[#64748b] mb-6 leading-relaxed">
                We intentionally run a high-density, senior-led organization. When you partner with Adyantra, you don&apos;t get pitched by senior founders only to be handed off to junior interns.
              </p>
              <p className="text-base text-[#64748b] mb-8 leading-relaxed">
                Our founders and technical architects personally design your growth architectures, review ad deployments, and optimize data pipelines to ensure zero compromise in execution quality.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/careers"
                  className="px-6 py-3.5 rounded-full bg-[#0f172a] text-white font-medium text-sm hover:bg-[#1e293b] shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2"
                >
                  <span>Join Our Team</span>
                  <span className="text-xs">&rarr;</span>
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-full bg-white text-[#0f172a] border border-[#e2e8f0] font-medium text-sm hover:bg-[#f8fafc] hover:border-[#cbd5e1] transition-all inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Speak With Leadership</span>
                  <span className="text-xs">&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden border border-[#e2e8f0] shadow-md max-w-md w-full bg-white">
                <Image
                  src="/assets/img/about/about-leader.jpg"
                  alt="Adyantra Leadership"
                  width={600}
                  height={500}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0f172a] font-heading">Senior Engineering &amp; Strategy Core</h3>
                  <p className="text-xs text-[#2563eb] font-semibold mt-1">Hyderabad &bull; Bengaluru &bull; Remote</p>
                  <p className="text-xs text-[#64748b] mt-3 leading-relaxed">
                    Bringing together over a decade of cross-functional experience in full-stack architecture, performance growth, and enterprise AI workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 6: CLIENT REVIEWS ═══════════════════ */}
      <section className="section py-20 bg-white border-t border-[#e2e8f0]" id="testimonials">
        <div className="shell">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eff6ff] text-[#2563eb] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#bfdbfe]/60">
              Client Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] mb-4 font-heading">
              What Founders &amp; Operators Say About Adyantra
            </h2>
            <p className="text-base text-[#64748b]">
              Real feedback from the leaders whose growth pipelines and digital platforms we empower.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] flex flex-col justify-between shadow-sm hover:border-[#cbd5e1] hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center gap-1 text-[#2563eb] text-sm mb-4">
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                  </div>
                  <p className="text-sm md:text-base text-[#0f172a] italic mb-6 leading-relaxed">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-[#e2e8f0]">
                  <div className="font-semibold text-[#0f172a] text-sm font-heading">{r.author}</div>
                  <div className="text-xs text-[#2563eb] font-medium">{r.role}</div>
                  <div className="text-xs text-[#64748b] mt-0.5">{r.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 7: CALL TO ACTION BANNER ═══════════════════ */}
      <section className="growth-banner" id="growth-banner">
        <div className="shell">
          <div className="growth-banner__inner">
            <div className="growth-banner__content">
              <span className="growth-banner__kicker text-[#60a5fa]">READY TO SCALE?</span>
              <h2 id="growth-title" className="text-2xl md:text-3xl font-semibold text-white mt-2 mb-3 font-heading">
                Let&apos;s Build Your Growth Architecture Together.
              </h2>
              <p className="text-sm text-white/80 max-w-xl">
                Schedule a confidential 30-minute growth audit with our senior strategists. We will evaluate your current acquisition funnels, software performance, and automation bottlenecks.
              </p>
            </div>
            <div className="growth-banner__action">
              <Link href="/contact" className="btn btn--white btn--shadow">
                <span>Request Growth Audit</span>
                <span className="btn__arrow">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
