"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Performance Marketing",
  ]);
  const [budget, setBudget] = useState("$2,500 - $5,000 / mo");

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

  const budgetTiers = [
    "< $2,500 / mo",
    "$2,500 - $5,000 / mo",
    "$5,000 - $15,000 / mo",
    "$15,000+ / mo",
  ];

  const faqs = [
    {
      q: "What happens after I submit this request?",
      a: "A senior growth strategist or technical architect will review your website and requirements within 24 hours. We will prepare an initial competitive teardown and invite you to a confidential 30-minute discovery call.",
    },
    {
      q: "Do you sign Mutual Non-Disclosure Agreements (NDAs)?",
      a: "Yes. Before reviewing sensitive proprietary code, CRM data, or financial metrics, we are glad to execute our mutual NDA or review your company's standard agreement.",
    },
    {
      q: "What is your typical project onboarding timeline?",
      a: "For performance marketing campaigns and AI workflow integrations, onboarding typically takes 5 to 7 business days. For full-scale custom web software builds, we conduct a 2-week architectural sprint followed by bi-weekly releases.",
    },
    {
      q: "Do you work with international clients outside India?",
      a: "Yes. Over 60% of our client partners are headquartered across the United States, United Kingdom, UAE, and Singapore, with overlapping operational hours and dedicated communications channels on Slack or WhatsApp.",
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eff6ff] border border-[#bfdbfe]/60 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2563eb]">
              Start A Conversation
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#0f172a] max-w-4xl mx-auto leading-tight mb-6 font-heading">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#0284c7] bg-clip-text text-transparent">Measurable Together</span>
          </h1>

          <p className="text-base md:text-lg text-[#64748b] max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Whether you are looking to scale paid acquisition, engineer high-performance web software, or deploy autonomous AI agents — our senior strategists are ready.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href="#audit-form"
              className="px-6 py-3.5 rounded-full bg-[#0f172a] text-white font-medium text-sm hover:bg-[#1e293b] shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Request Growth Audit</span>
              <span className="text-xs">&darr;</span>
            </a>
            <a
              href="tel:+918309275093"
              className="px-6 py-3.5 rounded-full bg-white text-[#0f172a] border border-[#e2e8f0] font-medium text-sm hover:bg-[#f8fafc] hover:border-[#cbd5e1] transition-all inline-flex items-center gap-2 shadow-sm"
            >
              <span>Direct Phone Call</span>
              <span className="text-xs">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════ STATS BRIDGE BAR (FLAGSHIP PATTERN) ═══════════════════ */}
      <div className="ady-stats-bridge-bar relative z-20">
        <div className="ady-stats-container">
          <div className="ady-stat-item">
            <p className="ady-stat-value">&lt; 24h</p>
            <p className="ady-stat-label">Response Time</p>
          </div>
          <div className="ady-stat-item">
            <p className="ady-stat-value">100%</p>
            <p className="ady-stat-label">In-House Consultation</p>
          </div>
          <div className="ady-stat-item">
            <p className="ady-stat-value">Zero</p>
            <p className="ady-stat-label">Obligation Audit</p>
          </div>
          <div className="ady-stat-item">
            <p className="ady-stat-value">Direct</p>
            <p className="ady-stat-label">Senior Partner Access</p>
          </div>
        </div>
      </div>

      {/* ═══════════════════ SECTION 2: 3 DIRECT CONTACT CHANNELS ═══════════════════ */}
      <section className="section py-20 bg-white border-t border-[#e2e8f0]" id="channels">
        <div className="shell">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Phone Card */}
            <div className="p-8 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] text-center hover:bg-white hover:border-[#cbd5e1] hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#e2e8f0] flex items-center justify-center mx-auto mb-5 shadow-sm">
                <img
                  src="https://img.icons8.com/?size=96&id=9659&format=png&color=2563eb"
                  width="30"
                  height="30"
                  alt="Direct Phone"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2 font-heading">Direct Phone</h3>
              <p className="mb-2">
                <a
                  href="tel:+918309275093"
                  className="text-base font-bold text-[#2563eb] hover:text-[#1d4ed8]"
                >
                  +91 83092 75093
                </a>
              </p>
              <p className="text-xs text-[#64748b]">Mon - Fri, 9:00 AM - 6:30 PM IST</p>
            </div>

            {/* Email Card */}
            <div className="p-8 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] text-center hover:bg-white hover:border-[#cbd5e1] hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#e2e8f0] flex items-center justify-center mx-auto mb-5 shadow-sm">
                <img
                  src="https://img.icons8.com/?size=96&id=63598&format=png&color=0284c7"
                  width="30"
                  height="30"
                  alt="Email Address"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2 font-heading">Email Inquiries</h3>
              <p className="mb-2">
                <a
                  href="mailto:info@adyantra.in"
                  className="text-base font-bold text-[#2563eb] hover:text-[#1d4ed8]"
                >
                  info@adyantra.in
                </a>
              </p>
              <p className="text-xs text-[#64748b]">Replies within 24 hours guaranteed</p>
            </div>

            {/* Headquarters Card */}
            <div className="p-8 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] text-center hover:bg-white hover:border-[#cbd5e1] hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#e2e8f0] flex items-center justify-center mx-auto mb-5 shadow-sm">
                <img
                  src="https://img.icons8.com/?size=96&id=3723&format=png&color=2563eb"
                  width="30"
                  height="30"
                  alt="Office Location"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2 font-heading">Headquarters</h3>
              <p className="text-base font-semibold text-[#0f172a] mb-1">
                HITEC City, Hyderabad
              </p>
              <p className="text-xs text-[#64748b]">Telangana 500081, India</p>
            </div>
          </div>

          {/* Interactive Proposal Form Card */}
          <div
            className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-[#f8fafc] border border-[#e2e8f0] shadow-lg"
            id="audit-form"
          >
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eff6ff] text-[#2563eb] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#bfdbfe]/60">
                Book Your Audit
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0f172a] mb-3 font-heading">
                Request A Confidential Growth Proposal
              </h2>
              <p className="text-sm text-[#64748b]">
                Tell us about your objectives. We will review your digital footprint and propose actionable recommendations.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-semibold text-emerald-900 mb-2 font-heading">
                  Growth Audit Request Received!
                </h3>
                <p className="text-sm text-emerald-700 max-w-md mx-auto">
                  Thank you for reaching out. A senior Adyantra partner will review your project and email you within 24 hours to schedule our discovery session.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Services Checkbox Pills */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0f172a] mb-3 font-heading">
                    1. Select Areas of Interest
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {servicesList.map((svc) => (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => toggleService(svc)}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                          selectedServices.includes(svc)
                            ? "bg-[#0f172a] text-white shadow-sm"
                            : "bg-white text-[#64748b] hover:bg-slate-100 border border-[#e2e8f0]"
                        }`}
                      >
                        {selectedServices.includes(svc) ? "✓ " : "+ "}
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Selection Pills */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0f172a] mb-3 font-heading">
                    2. Approximate Monthly Budget
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {budgetTiers.map((tier) => (
                      <button
                        type="button"
                        key={tier}
                        onClick={() => setBudget(tier)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-center transition-all duration-200 ${
                          budget === tier
                            ? "bg-[#2563eb] text-white shadow-sm"
                            : "bg-white text-[#64748b] hover:bg-slate-100 border border-[#e2e8f0]"
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#0f172a] mb-2 font-heading">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#e2e8f0] text-sm text-[#0f172a] focus:outline-none focus:border-[#2563eb]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0f172a] mb-2 font-heading">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#e2e8f0] text-sm text-[#0f172a] focus:outline-none focus:border-[#2563eb]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0f172a] mb-2 font-heading">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#e2e8f0] text-sm text-[#0f172a] focus:outline-none focus:border-[#2563eb]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0f172a] mb-2 font-heading">
                      Company Website / URL
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. https://yourcompany.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#e2e8f0] text-sm text-[#0f172a] focus:outline-none focus:border-[#2563eb]"
                    />
                  </div>
                </div>

                {/* Textarea */}
                <div>
                  <label className="block text-xs font-semibold text-[#0f172a] mb-2 font-heading">
                    Project Details &amp; Key Bottlenecks
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your current acquisition channels, software stack, or workflow challenges..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#e2e8f0] text-sm text-[#0f172a] focus:outline-none focus:border-[#2563eb]"
                  />
                </div>

                {/* Submit Action */}
                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-[#0f172a] text-white text-sm font-semibold hover:bg-[#1e293b] transition-all shadow-md inline-flex items-center gap-2"
                  >
                    <span>Submit Audit Request</span>
                    <span>&rarr;</span>
                  </button>
                  <p className="text-[11px] text-[#64748b] mt-3">
                    Strict confidentiality guaranteed. We never sell or share your contact data.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 3: FREQUENTLY ASKED QUESTIONS ═══════════════════ */}
      <section className="section py-20 bg-[#f8fafc] border-t border-[#e2e8f0]" id="faq">
        <div className="shell max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7b4bf7]/10 text-[#7b4bf7] text-xs font-semibold uppercase tracking-wider mb-3">
              Helpful Information
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-[#586882]">
              What to expect before and during our preliminary growth consultations.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm">
                <h3 className="text-base font-semibold text-[#0f172a] mb-2">{f.q}</h3>
                <p className="text-sm text-[#586882] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
