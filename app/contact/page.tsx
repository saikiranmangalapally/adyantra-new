"use client";

import React, { useState } from "react";
import Link from "next/link";
import ServicesScrollingBar from "@/components/sections/ServicesScrollingBar";
import HeroWaveformStage from "@/components/hero/HeroWaveformStage";
import OurTeamExpertiseSection from "@/components/sections/OurTeamExpertiseSection";
import { DomainIcon } from "@/components/icons/DomainIcons";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Performance Marketing",
  ]);

  const toggleService = (svc: string) => {
    if (selectedServices.includes(svc)) {
      setSelectedServices(selectedServices.filter((s) => s !== svc));
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 6000);
  };

  const servicesList = [
    "Performance Marketing",
    "SEO & Organic Growth",
    "AI Automation Systems",
    "Web Software & Next.js",
    "CRM & Lead Pipeline",
    "E-Commerce Solutions",
  ];

  const faqs = [
    {
      q: "What happens after I submit this audit request?",
      a: "A senior growth strategist and technical architect will review your current website, traffic channels, and tech stack within 24 hours. We will prepare an initial teardown and invite you to a confidential 30-minute discovery consultation.",
    },
    {
      q: "Do you sign Mutual Non-Disclosure Agreements (NDAs)?",
      a: "Yes, absolutely. Before reviewing sensitive proprietary code, CRM pipelines, customer data, or financial metrics, we execute our standard mutual NDA or review your company's standard agreement.",
    },
    {
      q: "What is your typical project onboarding timeline?",
      a: "For performance marketing campaigns and AI workflow integrations, technical onboarding takes 5 to 7 business days. For full-scale custom web software builds, we conduct a 2-week architectural sprint followed by bi-weekly continuous releases.",
    },
    {
      q: "Do you work with international clients outside India?",
      a: "Yes. Over 60% of our client partners are headquartered across the United States, United Kingdom, UAE, and Singapore, with overlapping operational hours and dedicated communications channels on Slack or WhatsApp.",
    },
    {
      q: "Can we start with a focused audit before committing to long-term retainers?",
      a: "Yes. We offer zero-obligation 30-minute strategic audits where we diagnose your acquisition bottlenecks, highlight high-leverage growth levers, and present transparent execution options.",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* ═══════════════════ SECTION 1: FLAGSHIP HERO (MATCHING HOME PAGE THEME) ═══════════════════ */}
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
                START A DIRECT CONVERSATION
              </div>

              <h1 className="ady-main-title">
                <span className="ady-title-line1">Start A Direct Conversation</span>
                <span className="ady-title-line2">Engineering Measurable Digital</span>
                <span className="ady-title-line3">Advantage For Your Brand.</span>
              </h1>
              <p className="ady-subtitle">
                Whether you are looking to scale paid acquisition, engineer high-performance web software, or deploy autonomous AI agents — our senior technical strategists are ready.
              </p>

              {/* Action Buttons */}
              <div className="ady-cta-group">
                <a href="#audit-form" className="ady-btn-dark">
                  <span>Request Growth Audit</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <a href="tel:+918309275093" className="ady-btn-ghost">
                  <span>Direct Phone Call</span>
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

      {/* ═══════════════════ SERVICES SCROLLING RIBBON ═══════════════════ */}
      <ServicesScrollingBar />

      {/* ═══════════════════ SECTION 2: 3 DIRECT CHANNELS (HOME PAGE CARD STYLE) ═══════════════════ */}
      <section className="section services-ref-section" id="channels" aria-labelledby="channels-title">
        <div className="shell">
          <div className="services-ref-header services-ref-header--centered">
            <span className="ref-pill-kicker">DIRECT COMMUNICATION CHANNELS</span>
            <h2 id="channels-title" className="services-ref-heading">
              Connect With Our <span className="ady-gradient-text">Leadership Team</span>
            </h2>
            <p className="services-ref-subtitle">
              We prioritize direct engineer-to-client communication. Reach out via phone, encrypted email, or visit our Hyderabad headquarters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Phone Card */}
            <div className="service-ref-card text-center p-8 flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-coral-500/10 border border-[#ef5b52]/20 flex items-center justify-center mb-5 shadow-sm">
                <img
                  src="https://img.icons8.com/?size=96&id=9659&format=png&color=ef5b52"
                  width="28"
                  height="28"
                  alt="Direct Phone"
                />
              </div>
              <h3 className="service-ref-card__title mb-2">Direct Phone</h3>
              <p className="mb-2">
                <a
                  href="tel:+918309275093"
                  className="text-base font-bold text-[#ef5b52] hover:underline"
                >
                  +91 83092 75093
                </a>
              </p>
              <p className="service-ref-card__desc">Mon - Fri, 9:00 AM - 6:30 PM IST</p>
              <div className="service-ref-card__action mt-4">
                <a href="tel:+918309275093" className="service-ref-readmore-btn">
                  <span>Call Now</span>
                  <span className="readmore-btn-arrow">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="service-ref-card text-center p-8 flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-[#0284c7]/20 flex items-center justify-center mb-5 shadow-sm">
                <img
                  src="https://img.icons8.com/?size=96&id=63598&format=png&color=0284c7"
                  width="28"
                  height="28"
                  alt="Email Address"
                />
              </div>
              <h3 className="service-ref-card__title mb-2">Email Inquiries</h3>
              <p className="mb-2">
                <a
                  href="mailto:info@adyantra.in"
                  className="text-base font-bold text-[#3b82f6] hover:underline"
                >
                  info@adyantra.in
                </a>
              </p>
              <p className="service-ref-card__desc">Replies within 24 hours guaranteed</p>
              <div className="service-ref-card__action mt-4">
                <a href="mailto:info@adyantra.in" className="service-ref-readmore-btn">
                  <span>Send Email</span>
                  <span className="readmore-btn-arrow">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Headquarters Card */}
            <div className="service-ref-card text-center p-8 flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-[#7b4bf7]/20 flex items-center justify-center mb-5 shadow-sm">
                <img
                  src="https://img.icons8.com/?size=96&id=3723&format=png&color=7b4bf7"
                  width="28"
                  height="28"
                  alt="Office Location"
                />
              </div>
              <h3 className="service-ref-card__title mb-2">Headquarters</h3>
              <p className="text-base font-semibold text-slate-800 mb-1">
                HITEC City, Hyderabad
              </p>
              <p className="service-ref-card__desc">Telangana 500081, India</p>
              <div className="service-ref-card__action mt-4">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="service-ref-readmore-btn">
                  <span>View Map</span>
                  <span className="readmore-btn-arrow">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 3: INTERACTIVE PROPOSAL FORM & AUDIT REQUEST ═══════════════════ */}
      <section className="contact" id="audit-form" aria-labelledby="audit-title">
        <div className="shell contact__grid">
          <div className="contact__copy">
            <span className="ref-pill-kicker">CONFIDENTIAL GROWTH AUDIT</span>
            <h2 id="audit-title">
              Ready to engineer your <span className="ady-gradient-text">growth breakthrough?</span>
            </h2>
            <p>
              Partner with Adyantra Digital. Tell us about your objectives. We will review your digital footprint, paid traffic efficiency, and software architecture before our discovery call.
            </p>
            <div className="contact-method">
              <span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef5b52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: "middle" }}>
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <div>
                <b>Direct Inquiries</b>
                <a href="mailto:info@adyantra.in">info@adyantra.in</a>
                <a href="mailto:adyantradigital@gmail.com">adyantradigital@gmail.com</a>
              </div>
            </div>
            <div className="contact-method">
              <span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef5b52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: "middle" }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <b>Direct Strategy Hotline</b>
                <a href="tel:+918309275093">+91 83092 75093</a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-semibold text-emerald-900 mb-2 font-heading">
                  Growth Audit Request Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out. A senior Adyantra partner will review your project and email you within 24 hours to schedule our discovery session.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3>Request A Confidential Growth Proposal</h3>
                <p>Fill out the form below and our strategy lead will connect with you within 24 hours.</p>

                {/* Services Checkbox Pills */}
                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", marginBottom: "8px", fontSize: "10px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#59617d" }}>
                    Select Areas of Interest
                  </label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {servicesList.map((svc) => (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => toggleService(svc)}
                        style={{
                          padding: "6px 14px",
                          borderRadius: "9999px",
                          fontSize: "12px",
                          fontWeight: 600,
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          border: selectedServices.includes(svc) ? "1px solid #ef5b52" : "1px solid #dfe3ee",
                          background: selectedServices.includes(svc) ? "#ef5b52" : "rgba(255, 255, 255, 0.85)",
                          color: selectedServices.includes(svc) ? "#fff" : "#59617d",
                        }}
                      >
                        {selectedServices.includes(svc) ? "✓ " : "+ "}
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Field Rows */}
                <div className="field-row">
                  <label>
                    Full Name *
                    <input required type="text" name="name" placeholder="e.g. Rahul Sharma" />
                  </label>
                  <label>
                    Work Email *
                    <input required type="email" name="email" placeholder="e.g. rahul@company.com" />
                  </label>
                </div>
                <div className="field-row">
                  <label>
                    Phone Number *
                    <input required type="tel" name="phone" placeholder="e.g. +91 98765 43210" />
                  </label>
                  <label>
                    Company Website / URL
                    <input type="text" name="website" placeholder="e.g. https://yourcompany.com" />
                  </label>
                </div>
                <label>
                  Project Details &amp; Key Bottlenecks
                  <textarea rows={4} name="details" placeholder="Briefly describe your current acquisition channels, software stack, or workflow challenges..." />
                </label>

                <button className="button button--primary" type="submit" style={{ width: "100%", justifyContent: "center", marginTop: "12px" }}>
                  Submit Audit Request &rarr;
                </button>
                <p style={{ fontSize: "11px", color: "#8a50c9", textAlign: "center", marginTop: "12px" }}>
                  Strict confidentiality guaranteed. Mutual NDA available upon request.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 4: TARGET DOMAIN EXPERTISE MARQUEE ═══════════════════ */}
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

            {/* Duplicate Set for Seamless Infinite Loop */}
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

      {/* ═══════════════════ SECTION 5: ACCELERATE YOUR REVENUE BANNER ═══════════════════ */}
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
            <a className="button button--coral" href="#audit-form">
              Book strategy call <b>&rarr;</b>
            </a>
          </div>
          <div className="stat-row" aria-label="Adyantra results">
            <div><b>06+</b><span>Years of Industry Expertise</span></div>
            <div><b>50+</b><span>High-Growth Brands Scaled</span></div>
            <div><b>100%</b><span>In-House Engineering</span></div>
            <div><b>Zero</b><span>Outsourced Work</span></div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 6: OUR TEAM & EXPERTISE (HOME PAGE COMPONENT) ═══════════════════ */}
      <OurTeamExpertiseSection />

      {/* ═══════════════════ SECTION 7: CLIENT REVIEWS MARQUEE ═══════════════════ */}
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
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 8: FREQUENTLY ASKED QUESTIONS (HOME PAGE FAQ ACCORDION) ═══════════════════ */}
      <section className="section faq" id="faq" aria-labelledby="faq-title">
        <div className="shell faq-layout">
          <div className="section-heading">
            <span className="ref-pill-kicker">CLEAR ANSWERS</span>
            <h2 id="faq-title">
              Frequently Asked <br />
              <span className="ady-gradient-text">Questions</span>
            </h2>
            <p>Everything you need to know about our growth frameworks, confidential audits, timelines, and communications.</p>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <details key={i} open={i === 0}>
                <summary>
                  {f.q}<b>+</b>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
