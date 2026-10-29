"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export interface UnifiedPageHeroProps {
  badge?: string;
  ratingText?: string;
  headlinePrefix?: string;
  highlightedText: string;
  headlineSuffix?: string;
  description: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  checklist?: string[];
  stats?: { val: string; label: string }[];
  serviceTitle: string;
  onAuditSubmit?: (data: { name: string; email: string; phone: string; service: string }) => void;
}

export default function UnifiedPageHero({
  badge = "4.9 / 5 RATED ACROSS 500+ VERIFIED ENTERPRISES",
  ratingText,
  headlinePrefix = "Accelerate Your Brand with",
  highlightedText,
  headlineSuffix = "& Digital Marketing Services.",
  description,
  primaryCtaText = "BOOK A STRATEGY CALL",
  primaryCtaHref = "/contact",
  secondaryCtaText = "EXPLORE SERVICES",
  secondaryCtaHref = "#services-grid",
  checklist = [
    "100% In-House Senior Delivery",
    "Zero Outsourcing",
    "Live Data Attribution",
  ],
  stats = [
    { val: "50+", label: "High-Growth Brands" },
    { val: "99.4%", label: "Execution Accuracy" },
    { val: "< 15s", label: "Lead Response Latency" },
    { val: "24 / 7", label: "AI Agents Active" },
  ],
  serviceTitle,
  onAuditSubmit,
}: UnifiedPageHeroProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: serviceTitle,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onAuditSubmit) {
      onAuditSubmit(form);
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", service: serviceTitle });
    }, 5000);
  };

  return (
    <section
      style={{ background: "radial-gradient(circle at 50% 40%, rgba(34, 116, 184, 0.18), transparent 55%), linear-gradient(135deg, #062D51 0%, #0A3D6A 55%, #0D4775 100%)" }} className="relative w-full text-white pt-12 pb-14 lg:pt-14 lg:pb-16 overflow-hidden border-b border-[#315E80] font-sans"
      id="hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ── Left Column: Value Proposition & Social Proof (Matches Image 2) ── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* 5-Star Rating Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D416D]/90 border border-[#315E80] text-xs font-medium tracking-wider text-white mb-6 shadow-sm w-fit backdrop-blur-md">
              <span className="text-[#FFC400] text-sm">★★★★★</span>
              <span className="text-[#315E80]">|</span>
              <span className="text-white font-medium">{ratingText || "4.9 / 5 RATED"}</span>
              <span className="text-[#A9C7E4]">ACROSS 500+ VERIFIED ENTERPRISES</span>
            </div>

            {/* Main Headline with Signature Golden Yellow Underline Accent */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-medium !text-white tracking-tight leading-[1.14] mb-5 font-sans" style={{ color: "#FFFFFF" }}>
              {headlinePrefix && <span style={{ color: "#FFFFFF" }}>{headlinePrefix} </span>}
              <span className="text-[#FFC400] underline decoration-[#FFC400] decoration-3 underline-offset-8">
                {highlightedText}
              </span>{" "}
              {headlineSuffix && <span style={{ color: "#FFFFFF" }}>{headlineSuffix}</span>}
            </h1>

            {/* Subtitle in Soft Ice Blue #A9C7E4 */}
            <p className="text-base sm:text-[17px] !text-[#A9C7E4] leading-relaxed max-w-xl mb-7 font-normal font-sans" style={{ color: "#A9C7E4" }}>
              {description}
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-7">
              <Link
                href={primaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FFC400] hover:bg-[#FFD54F] text-[#0B0F19] font-medium text-sm sm:text-[15px] tracking-wide transition-all shadow-lg hover:-translate-y-0.5 group cursor-pointer font-sans"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#174D78] hover:bg-[#1e5887] text-white font-medium text-sm sm:text-[15px] tracking-wide transition-all border border-[#477397] group cursor-pointer font-sans"
              >
                <span>{secondaryCtaText}</span>
              </a>
            </div>

            {/* Trust Points with Golden Checkmarks */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-[13px] font-medium text-white mb-8 font-sans">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC400] shrink-0" />
                  <span className="!text-white" style={{ color: "#FFFFFF" }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Live Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-5 border-t border-[#315E80]/60 max-w-2xl">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-xl sm:text-2xl font-medium !text-white font-sans" style={{ color: "#FFFFFF" }}>{stat.val}</div>
                  <div className="text-xs !text-[#A9C7E4] font-normal font-sans mt-0.5" style={{ color: "#A9C7E4" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Growth Audit Card (Matches Image 2 Exactly) ── */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
            <div className="bg-[#0A3D6A]/90 border border-[#315E80] rounded-[24px] p-6 sm:p-7 shadow-2xl backdrop-blur-md relative overflow-hidden">
              
              {/* Golden Yellow Badge on Top Right */}
              <div className="absolute top-0 right-0 bg-[#FFC400] text-[#0B0F19] text-[11px] font-medium uppercase tracking-wider px-3.5 py-1 rounded-bl-xl font-sans shadow-xs">
                GROWTH AUDIT
              </div>

              {/* Card Title & Description */}
              <div className="mb-5 pr-14">
                <h3 className="text-lg sm:text-[20px] font-medium !text-white font-sans leading-snug" style={{ color: "#FFFFFF" }}>
                  Request A Growth &amp; AI Audit
                </h3>
                <p className="text-xs sm:text-[13px] !text-[#A9C7E4] mt-1 font-normal font-sans" style={{ color: "#A9C7E4" }}>
                  Get a custom acquisition blueprint &amp; automation plan tailored for your business.
                </p>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#1AB26E]/20 text-[#1AB26E] flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-medium text-white font-sans">Audit Request Received!</h4>
                  <p className="text-xs text-[#A9C7E4] max-w-xs mx-auto font-sans">
                    Our technical strategists will review your systems and share a custom growth blueprint within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 font-sans">
                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider !text-white mb-1 font-sans" style={{ color: "#FFFFFF" }}>
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#062D51]/90 border border-[#315E80] text-white placeholder-[#A9C7E4]/70 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#FFC400] transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider !text-white mb-1 font-sans" style={{ color: "#FFFFFF" }}>
                      BUSINESS EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#062D51]/90 border border-[#315E80] text-white placeholder-[#A9C7E4]/70 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#FFC400] transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider !text-white mb-1 font-sans" style={{ color: "#FFFFFF" }}>
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#062D51]/90 border border-[#315E80] text-white placeholder-[#A9C7E4]/70 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#FFC400] transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider !text-white mb-1 font-sans" style={{ color: "#FFFFFF" }}>
                      PRIMARY SERVICE FOCUS
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-[#062D51] border border-[#315E80] text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#FFC400] transition-all font-sans cursor-pointer"
                    >
                      <option value={serviceTitle}>{serviceTitle}</option>
                      <option value="Performance Marketing (Meta/Google Ads)">Performance Marketing (Meta/Google Ads)</option>
                      <option value="Next.js Web Systems & Funnels">Next.js Web Systems & Funnels</option>
                      <option value="WhatsApp Cloud CRM & Automation">WhatsApp Cloud CRM & Automation</option>
                      <option value="Autonomous AI Agents">Autonomous AI Agents</option>
                      <option value="Technical SEO & Authority">Technical SEO & Authority</option>
                      <option value="E-Commerce Scaling & Catalog Ads">E-Commerce Scaling & Catalog Ads</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#FFC400] hover:bg-[#FFD54F] text-[#0B0F19] font-medium text-sm tracking-wide transition-all shadow-md group cursor-pointer font-sans"
                  >
                    <span>GET GROWTH BLUEPRINT</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="pt-1.5 flex items-center justify-center gap-1.5 text-[11px] text-[#A9C7E4] font-sans text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FFC400] shrink-0" />
                    <span>Strict confidentiality. NDA compliant. No spam guaranteed.</span>
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

