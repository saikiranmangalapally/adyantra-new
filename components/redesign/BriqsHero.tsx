"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function BriqsHero() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "Full-Funnel Growth" });

  const benefits = [
    "+340% Average ROAS Benchmark",
    "100% In-House Senior Tech Team",
    "Server-Side GA4 & Meta CAPI Tracking",
    "Guaranteed < 2-Hour SLA Support",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="briqs-hero-wrapper" id="home">
      <div className="briqs-hero-bg-overlay" />
      
      <div className="briqs-shell">
        <div className="briqs-hero-grid">
          {/* Left Column: Heading, Subtitle & Benefit Pills (Matching Image 1) */}
          <div className="briqs-hero-left">
            <div className="briqs-hero-badge">
              <span className="briqs-hero-badge-dot" />
              <span>Technology-First Growth &amp; AI Agency</span>
            </div>

            <h1 className="briqs-hero-title">
              Accelerate Your Brand with <br />
              <span className="briqs-hero-gradient-text">Performance–Driven</span> <br />
              AI Automations &amp; Marketing.
            </h1>

            <p className="briqs-hero-desc">
              We engineer high-performance advertising ecosystems, custom Next.js web applications, and autonomous AI workflows to scale revenue profitably.
            </p>

            {/* Benefit Checkmark Pills (Exact Style of Image 1) */}
            <div className="briqs-hero-benefits-grid">
              {benefits.map((b, idx) => (
                <div key={idx} className="briqs-benefit-pill">
                  <CheckCircle2 size={18} className="briqs-benefit-icon" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* Direct CTA Buttons */}
            <div className="briqs-hero-actions">
              <Link href="/contact" className="briqs-btn-primary">
                <span>Book 30-Min Strategy Call</span>
                <ArrowRight size={16} />
              </Link>
              <a href="#services" className="briqs-btn-secondary">
                <span>Explore 12+ Services</span>
              </a>
            </div>
          </div>

          {/* Right Column: Floating Fast-Track Audit Card (Matching Image 1 Layout) */}
          <div className="briqs-hero-right">
            <div className="briqs-card-container">
              <div className="briqs-card-header">
                <div>
                  <h3 className="briqs-card-title">Get Growth Audit</h3>
                  <p className="briqs-card-sub">Fast-Track 24–48 Hour Strategy Blueprint</p>
                </div>
                <span className="briqs-badge-allin">100% FREE</span>
              </div>

              {submitted ? (
                <div className="briqs-card-success">
                  <ShieldCheck size={48} className="text-[#6C3BFF] mx-auto mb-3" />
                  <h4>Audit Request Received!</h4>
                  <p>Our senior growth lead will reach out to <strong>{formData.name || "you"}</strong> within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="briqs-hero-form">
                  <div className="briqs-form-field">
                    <label>Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="briqs-form-field">
                    <label>Mobile / WhatsApp (Required)</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="briqs-form-field">
                    <label>Primary Scaling Focus</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option>Performance Paid Ads (Meta &amp; Google)</option>
                      <option>AI Automation &amp; WhatsApp Bots</option>
                      <option>Next.js Web &amp; E-Commerce Development</option>
                      <option>Technical SEO &amp; Organic Authority</option>
                      <option>Full-Funnel Growth Partnership</option>
                    </select>
                  </div>

                  <button type="submit" className="briqs-card-btn">
                    <span>Apply for Growth Audit Now</span>
                    <ArrowRight size={16} />
                  </button>

                  <div className="briqs-card-footer-tags">
                    <span>
                      <ShieldCheck size={14} className="text-[#6C3BFF]" />
                      100% In-House Code
                    </span>
                    <span>
                      <Zap size={14} className="text-[#6C3BFF]" />
                      Direct Senior Access
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
