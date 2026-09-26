"use client";

import Link from "next/link";
import Image from "next/image";
import ServicesScrollingBar from "@/components/sections/ServicesScrollingBar";
import { AIGuideAvatar } from "@/components/icons/AIGuideAvatar";
import HeroWaveformStage from "@/components/hero/HeroWaveformStage";
import OurTeamExpertiseSection from "@/components/sections/OurTeamExpertiseSection";

export default function AboutPage() {
  const faqs = [
    {
      q: "What makes Adyantra Digital different from typical marketing agencies?",
      a: "Unlike traditional agencies that rely on outsourced contractors or non-technical account managers, Adyantra unites senior software engineers, paid media strategists, and AI architects under one roof. Every campaign and system is built and maintained 100% in-house with direct technical access and radical commercial transparency.",
    },
    {
      q: "What is your core technology and growth stack?",
      a: "Our tech foundation leverages Next.js, React, Node.js, and high-converting modern web architectures. On the acquisition side, we build full-funnel systems with Google Ads (Search & PMax), Meta Ads (CAPI integration), and programmatic SEO. For automation, we architect custom AI agents, n8n, Make, Zapier, and WhatsApp Cloud API pipelines.",
    },
    {
      q: "How long has Adyantra been operating and who do you work with?",
      a: "We have been operating for over 6+ years and have partnered with 50+ high-growth brands across Education, Fashion & D2C, Healthcare, Real Estate, and IT Software Enterprises. We specialize in scaling businesses looking for predictable, measurable unit economics.",
    },
    {
      q: "Do you offer full-funnel execution or individual services?",
      a: "Both. Many clients begin with a targeted performance sprint (such as Meta & Google Ads optimization, a custom Next.js web application, or WhatsApp AI automation) and subsequently expand into our unified digital growth engine.",
    },
    {
      q: "How do we get started working with Adyantra?",
      a: "You can request a Free Growth Audit using the contact form below or book a 30-minute discovery call. Our technical strategy leads will audit your current acquisition funnel, technology stack, and automation opportunities to deliver a tailored expansion roadmap.",
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
                About Adyantra Digital • In-House Engineering &amp; Growth
              </div>

              <h1 className="ady-main-title">
                <span className="ady-title-line1">Engineering Digital Advantage &amp;</span>
                <span className="ady-title-line2">Autonomous Systems That</span>
                <span className="ady-title-line3">Drive Commercial Scale.</span>
              </h1>
              <p className="ady-subtitle">
                Over 6+ years, we have partnered with 50+ growth-focused brands to eliminate digital inefficiencies, scale high-ROAS acquisition, and deploy resilient AI automation.
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
                <a href="#about" className="ady-btn-ghost">
                  <span>Our Architecture</span>
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

      {/* ═══════════════════ SECTION 3: ABOUT US / CORE TECHNICAL PILLARS (CURRENT THEME) ═══════════════════ */}
      <section className="section about" id="about" aria-labelledby="about-title">
        <div className="shell split-layout split-layout--about">
          <div className="copy-block about-copy">
            <span className="ref-pill-kicker">ABOUT ADYANTRA DIGITAL</span>
            <h2 id="about-title" className="about-headline">
              Engineering Measurable Digital Advantage <br />
              <span className="ady-gradient-text">For Scaling Businesses.</span>
            </h2>
            <p>
              Adyantra Digital is a premier technology-first digital marketing and AI automation agency. Over 6+ years, we have partnered with 50+ growth-focused companies to turn their online footprint into a reliable customer engine.
            </p>
            <p>
              By uniting modern web application engineering, performance marketing analytics, and custom AI workflow automation, we eliminate digital inefficiencies and deliver transparent, high-ROAS returns.
            </p>
            <Link className="text-link" href="/contact">
              Connect with our leadership <b>&rarr;</b>
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

      {/* ═══════════════════ SECTION 4: OUR OPERATING MODEL (MINIMAL & EFFECTIVE) ═══════════════════ */}
      <section className="section expert-showcase-section bg-white" id="ecosystem" aria-labelledby="expert-showcase-heading">
        <div className="shell">
          {/* Section Heading */}
          <div className="services-ref-header services-ref-header--centered mb-10">
            <span className="ref-pill-kicker">OUR OPERATING MODEL</span>
            <h2 id="expert-showcase-heading" className="services-ref-heading mt-2 font-semibold">
              Transforming Fragmented Marketing <br />
              <span className="ady-gradient-text font-semibold">Into Compounding Growth</span>
            </h2>
            <p className="services-ref-subtitle max-w-2xl mx-auto">
              We combine in-house technical engineering with disciplined growth marketing so your business scales with predictable unit economics and zero operational friction.
            </p>
          </div>

          {/* Minimal & Effective 4-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <article className="group p-6 rounded-2xl bg-white border border-slate-200/70 hover:border-slate-300 hover:shadow-sm transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#ef5b52]/10 text-[#ef5b52] flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border bg-[#ef5b52]/8 text-[#ef5b52] border-[#ef5b52]/15">
                    100% In-House
                  </span>
                </div>
                <h3 className="text-base font-semibold text-slate-900 tracking-tight mb-2">
                  Technical Guild
                </h3>
                <p className="text-[13.5px] text-slate-500 leading-relaxed">
                  Direct collaboration with senior developers, growth architects, and designers with zero middle management.
                </p>
              </div>
            </article>

            <article className="group p-6 rounded-2xl bg-white border border-slate-200/70 hover:border-slate-300 hover:shadow-sm transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#7b4bf7]/10 text-[#7b4bf7] flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border bg-[#7b4bf7]/8 text-[#7b4bf7] border-[#7b4bf7]/15">
                    Verified CAPI
                  </span>
                </div>
                <h3 className="text-base font-semibold text-slate-900 tracking-tight mb-2">
                  Server-Side Tracking
                </h3>
                <p className="text-[13.5px] text-slate-500 leading-relaxed">
                  First-party server attribution bypassing ad blockers to feed clean conversion signals to Google and Meta.
                </p>
              </div>
            </article>

            <article className="group p-6 rounded-2xl bg-white border border-slate-200/70 hover:border-slate-300 hover:shadow-sm transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#3b82f6]/10 text-[#3b82f6] flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border bg-[#3b82f6]/8 text-[#3b82f6] border-[#3b82f6]/15">
                    Continuous Sprints
                  </span>
                </div>
                <h3 className="text-base font-semibold text-slate-900 tracking-tight mb-2">
                  Rapid Iteration
                </h3>
                <p className="text-[13.5px] text-slate-500 leading-relaxed">
                  Weekly creative testing, copy variations, and bid tuning to prevent ad fatigue and keep acquisition costs low.
                </p>
              </div>
            </article>

            <article className="group p-6 rounded-2xl bg-white border border-slate-200/70 hover:border-slate-300 hover:shadow-sm transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#10b981]/10 text-[#10b981] flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border bg-[#10b981]/8 text-[#10b981] border-[#10b981]/15">
                    Zero Markups
                  </span>
                </div>
                <h3 className="text-base font-semibold text-slate-900 tracking-tight mb-2">
                  Commercial Clarity
                </h3>
                <p className="text-[13.5px] text-slate-500 leading-relaxed">
                  Transparent milestone pricing, live Looker Studio executive dashboards, and full client ownership of all assets.
                </p>
              </div>
            </article>
          </div>

          {/* Minimal Centered Action */}
          <div className="mt-10 text-center">
            <Link href="/contact" className="ady-btn-dark">
              <span>Partner With Our Team</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 5: TARGET DOMAIN EXPERTISE (CURRENT THEME MARQUEE) ═══════════════════ */}
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

      {/* ═══════════════════ SECTION 6: ACCELERATE YOUR REVENUE BANNER ═══════════════════ */}
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

      {/* ═══════════════════ SECTION 7: OUR PROVEN PROCESS (CURRENT THEME 4-STEP GRID) ═══════════════════ */}
      <section className="section process" aria-labelledby="process-title">
        <div className="shell">
          <div className="section-heading section-heading--center">
            <span className="ref-pill-kicker">OUR PROVEN PROCESS</span>
            <h2 id="process-title">
              A Transparent <span className="ady-gradient-text">6-Step Growth Methodology</span>
            </h2>
            <p>Our structured framework ensures rapid deployment, continuous optimization, and predictable commercial scale.</p>
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

      {/* ═══════════════════ SECTION 8: THE ADYANTRA ADVANTAGE (OUR TEAM & EXPERTISE) ═══════════════════ */}
      <OurTeamExpertiseSection />

      {/* ═══════════════════ SECTION 9: CLIENT REVIEWS (CURRENT THEME MARQUEE) ═══════════════════ */}
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
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 10: FAQ SECTION (CURRENT THEME ACCORDIONS) ═══════════════════ */}
      <section className="section faq" id="faq" aria-labelledby="faq-title">
        <div className="shell faq-layout">
          <div className="section-heading">
            <span className="ref-pill-kicker">CLEAR ANSWERS</span>
            <h2 id="faq-title">
              Frequently Asked <br />
              <span className="ady-gradient-text">Questions</span>
            </h2>
            <p>Everything you need to know about our company, in-house team, technology stack, and partnership models.</p>
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

      {/* ═══════════════════ SECTION 11: CONTACT SECTION (CURRENT THEME FORM) ═══════════════════ */}
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
