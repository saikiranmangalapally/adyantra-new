"use client";

import React, { useState } from "react";
import { Plus, Minus, Send, CheckCircle2, ShieldCheck, Clock, Award, HelpCircle, MessageSquare } from "lucide-react";

export default function BriqsFAQAndConnect() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Full-Funnel Growth Partnership",
    message: "",
  });

  const faqs = [
    {
      q: "How quickly can we expect measurable ROI from digital campaigns?",
      a: "Early tracking signals and lead flow typically activate within 2–3 weeks of account setup. Because we integrate server-side Meta Conversions API (CAPI) and Google GA4 attribution upfront, you get verified CAC and ROAS metrics from day one rather than waiting months for basic reporting.",
    },
    {
      q: "Which specific growth services are best suited for my business?",
      a: "We never push one-size-fits-all packages. After auditing your current customer funnel, ticket size, and market dynamics, we prescribe the highest-leverage mix—whether that is Meta performance ads for rapid volume, high-speed Next.js web funnels for higher checkout rates, or 24/7 WhatsApp AI automation for lead qualification.",
    },
    {
      q: "How does Adyantra track and attribute conversions accurately?",
      a: "We eliminate attribution blindspots by configuring server-side tracking pipelines that bypass iOS privacy filters and ad-blockers. Every lead and order syncs directly into a live, transparent Looker Studio dashboard that connects ad spend directly to closed bank revenue.",
    },
    {
      q: "Can we start with a focused budget and scale as pipeline expands?",
      a: "Yes, absolutely. We validate message-market fit and funnel unit economics on disciplined testing budgets before scaling ad spend. Once your customer acquisition cost (CAC) meets benchmark thresholds, we systematically increase spend while preserving profitability.",
    },
    {
      q: "What differentiates Adyantra from traditional marketing agencies?",
      a: "We replace non-technical account managers with senior developers, performance media buyers, and AI architects. There is zero outsourcing—all web development, automated CRM workflows, and campaign management are executed 100% in-house with guaranteed < 2-hour SLA response times.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="briqs-faq-clean-section bg-[#FAFBFC]" id="faq-contact">
      <div className="briqs-shell">
        {/* ── Symmetrical Section Header ── */}
        <div className="briqs-faq-section-head">
          <div className="briqs-kicker-pill">
            <Award size={13} className="text-[#6C3BFF]" />
            <span>FAQ &amp; CONSULTATION</span>
          </div>

          <h2 className="briqs-faq-main-heading">
            Digital Marketing Solutions That Increase Productivity &amp; Revenue
          </h2>

          <p className="briqs-faq-lead-desc">
            Explore clear answers on timelines, tracking pipelines, and deliverables—or connect directly with our senior growth engineers for a customized 24–48 hour blueprint.
          </p>
        </div>

        {/* ── Balanced Two-Column Grid: Left FAQ + Right Consultation Form ── */}
        <div className="briqs-faq-clean-grid">
          {/* ── Left Column: Clean Accordion Card ── */}
          <div className="briqs-card-white briqs-faq-card">
            <div className="briqs-box-head-block">
              <div className="briqs-card-tag">
                <HelpCircle size={14} className="text-[#6C3BFF]" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h3 className="briqs-card-title">Common Questions &amp; Answers</h3>
              <p className="briqs-card-subtitle">
                Clear answers regarding our attribution pipelines, in-house team SLAs, and performance accountability.
              </p>
            </div>

            <div className="briqs-accordion-list">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className={`briqs-accordion-row ${isOpen ? "is-open" : ""}`}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="briqs-accordion-btn"
                      aria-expanded={isOpen}
                    >
                      <span className="briqs-accordion-q-text">{faq.q}</span>
                      <span className="briqs-accordion-icon-circle">
                        {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="briqs-accordion-answer-box">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Right Column: Consultation Form Card ── */}
          <div className="briqs-card-white briqs-consultation-card" id="contact">
            <div className="briqs-box-head-block">
              <div className="briqs-card-tag">
                <MessageSquare size={14} className="text-[#6C3BFF]" />
                <span>DIRECT STRATEGY DESK</span>
              </div>
              <h3 className="briqs-card-title">Looking for a Growth Partner?</h3>
              <p className="briqs-card-subtitle">
                Request a free 30-minute growth funnel audit &amp; performance roadmap. Zero fluff, 100% technical transparency.
              </p>
            </div>

            {submitted ? (
              <div className="briqs-form-success-box">
                <CheckCircle2 size={52} className="text-[#6C3BFF] mx-auto mb-3" />
                <h4 className="text-xl font-bold text-[#17151F] mb-2">Message Received Successfully!</h4>
                <p className="text-[#6F6B7A] text-sm max-w-sm mx-auto mb-6">
                  Our senior strategy lead will review your requirements and follow up at <strong>{formData.email}</strong> within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="briqs-btn-secondary text-sm py-2 px-6"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="briqs-clean-form">
                {/* 2-Column Row for Name & Email for balanced height */}
                <div className="briqs-form-row-2col">
                  <div className="briqs-input-group">
                    <label className="briqs-clean-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="briqs-clean-input"
                    />
                  </div>

                  <div className="briqs-input-group">
                    <label className="briqs-clean-label">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="briqs-clean-input"
                    />
                  </div>
                </div>

                <div className="briqs-input-group">
                  <label className="briqs-clean-label">WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="briqs-clean-input"
                  />
                </div>

                <div className="briqs-input-group">
                  <label className="briqs-clean-label">Primary Objective</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="briqs-clean-select"
                  >
                    <option>Full-Funnel Growth Partnership</option>
                    <option>Performance Paid Ads (Meta &amp; Google)</option>
                    <option>AI Automation &amp; WhatsApp Bot Systems</option>
                    <option>High-Speed Next.js Web Development</option>
                    <option>Technical SEO &amp; Organic Pipeline</option>
                  </select>
                </div>

                <div className="briqs-input-group">
                  <label className="briqs-clean-label">Project Details / Goals</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Briefly describe your current revenue stage, challenges, or target goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="briqs-clean-textarea"
                  />
                </div>

                <button type="submit" className="briqs-clean-submit-btn">
                  <span>Send Message &amp; Request Blueprint</span>
                  <Send size={15} />
                </button>

                <div className="briqs-clean-form-badges">
                  <span>
                    <ShieldCheck size={14} className="text-[#6C3BFF]" />
                    100% Confidential
                  </span>
                  <span>
                    <Clock size={14} className="text-[#6C3BFF]" />
                    &lt; 2-Hour SLA
                  </span>
                  <span>
                    <Award size={14} className="text-[#6C3BFF]" />
                    Zero Fluff
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

