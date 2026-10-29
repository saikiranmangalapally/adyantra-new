"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, Loader2, Sparkles, ShieldCheck } from "lucide-react";

export default function KPContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Digital Marketing & SEO",
    details: "",
  });

  const trustHighlights = [
    { text: "100% In-House Senior Technical Execution", dot: "bg-emerald-500" },
    { text: "24-Hour Custom Growth Audit Turnaround", dot: "bg-[#FFC400]" },
    { text: "Zero Long-Term Lock-In Contracts", dot: "bg-emerald-500" },
    { text: "Server-Side 1st-Party CAPI Attribution", dot: "bg-[#FFC400]" },
    { text: "Official Meta & Google Marketing Partners", dot: "bg-emerald-500" },
    { text: "Dedicated AI Architect On Every Account", dot: "bg-[#FFC400]" },
    { text: "Sub-Second Next.js Web Engineering", dot: "bg-emerald-500" },
    { text: "Enterprise SLA & Strict NDA Protected", dot: "bg-[#FFC400]" },
  ];

  const repeatedHighlights = [
    ...trustHighlights,
    ...trustHighlights,
    ...trustHighlights,
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) {
      alert("Please fill in your Name, Email, and Project Details.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 750);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Adyantra"
      className="py-12 sm:py-14 lg:py-16 bg-[#FFFFFF] font-sans border-b border-[#DCE3EB] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* ── Left Column: Value Proposition & Seamless Contact Channels (No Background Box) ── */}
          <div className="lg:col-span-5 space-y-6">
            {/* Tagline Badge with Line */}
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-[13px] font-medium uppercase tracking-widest text-[#12304A] font-sans">
                CONNECT WITH OUR TEAM
              </span>
              <span className="w-14 h-[2px] bg-[#FFC400] rounded-full inline-block" />
            </div>

            {/* Main Headline with Navy & Golden Yellow */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#12304A] tracking-tight leading-[1.15] font-sans">
              Ready to Accelerate Your <br />
              <span className="text-[#FFC400]">
                Digital Advantage?
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-[17px] text-[#64748B] leading-relaxed font-normal font-sans">
              Partner with Adyantra Digital to elevate search rankings, capture high-intent leads, and automate revenue operations.
            </p>

            {/* Contact Details List: Decreased, Elegant Icons */}
            <div className="space-y-3 pt-2 font-sans">
              {/* Channel 1: Email Support */}
              <div className="flex items-start gap-3.5 py-1.5 bg-transparent transition-all group">
                <div className="w-8 h-8 rounded-lg bg-[#EAF2F9] border border-[#DCE3EB] text-[#12304A] group-hover:bg-[#FFC400] group-hover:text-[#12304A] flex items-center justify-center shrink-0 shadow-xs transition-all duration-300">
                  <Mail className="w-3.5 h-3.5 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-[11px] font-medium uppercase tracking-wider text-[#12304A] font-sans mb-0.5">
                    EMAIL SUPPORT
                  </h4>
                  <p className="text-sm font-normal text-[#12304A] leading-relaxed font-sans">
                    <a href="mailto:info@adyantra.in" className="hover:text-[#12304A] transition-colors block font-medium">
                      info@adyantra.in
                    </a>
                    <a href="mailto:adyantradigital@gmail.com" className="hover:text-[#12304A] transition-colors block text-xs text-[#64748B]">
                      adyantradigital@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Channel 2: Direct Phone */}
              <div className="flex items-start gap-3.5 py-1.5 bg-transparent transition-all group">
                <div className="w-8 h-8 rounded-lg bg-[#EAF2F9] border border-[#DCE3EB] text-[#12304A] group-hover:bg-[#FFC400] group-hover:text-[#12304A] flex items-center justify-center shrink-0 shadow-xs transition-all duration-300">
                  <Phone className="w-3.5 h-3.5 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-[11px] font-medium uppercase tracking-wider text-[#12304A] font-sans mb-0.5">
                    DIRECT PHONE
                  </h4>
                  <a
                    href="tel:+918309275093"
                    className="text-sm sm:text-base font-medium text-[#12304A] hover:text-[#12304A] transition-colors block font-sans"
                  >
                    +91 83092 75093
                  </a>
                  <p className="text-xs text-[#64748B] font-sans">Mon–Sat • 9:00 AM – 7:00 PM IST</p>
                </div>
              </div>

              {/* Channel 3: Headquarters */}
              <div className="flex items-start gap-3.5 py-1.5 bg-transparent transition-all group">
                <div className="w-8 h-8 rounded-lg bg-[#EAF2F9] border border-[#DCE3EB] text-[#12304A] group-hover:bg-[#FFC400] group-hover:text-[#12304A] flex items-center justify-center shrink-0 shadow-xs transition-all duration-300">
                  <MapPin className="w-3.5 h-3.5 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-[11px] font-medium uppercase tracking-wider text-[#12304A] font-sans mb-0.5">
                    HEADQUARTERS
                  </h4>
                  <p className="text-xs sm:text-sm font-normal text-[#64748B] leading-relaxed font-sans">
                    HITEC City, Hyderabad, Telangana 500081, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Request a Free Growth Audit Form Card in Cloud White #F5F7FA ── */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] rounded-[32px] border border-[#DCE3EB] p-7 sm:p-10 shadow-[0_12px_40px_rgba(18,48,74,0.05)] relative overflow-hidden">

              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-medium text-[#12304A] font-sans">
                    Request a Growth Strategy Audit
                  </h3>
                  <p className="text-sm sm:text-base text-[#64748B] mt-1 font-normal font-sans">
                    Fill out the form below and our strategy lead will connect with you within 24 hours.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#DCE3EB] text-[#12304A] text-xs font-medium self-start sm:self-center shrink-0 font-sans">
                  <Sparkles className="w-3.5 h-3.5 text-[#12304A]" />
                  <span>Confidential Strategy</span>
                </span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 font-sans">
                  <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                  </div>
                  <h4 className="text-2xl font-medium text-[#12304A] font-sans">
                    Growth Audit Request Received!
                  </h4>
                  <p className="text-sm text-[#64748B] max-w-sm mx-auto">
                    A Senior Growth Architect will analyze your domain and send your tailored acquisition blueprint within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  {/* Name & Email (2-Column Grid) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12.5px] sm:text-xs font-medium uppercase tracking-wider text-[#12304A] mb-1.5 font-sans">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#DCE3EB] bg-[#FFFFFF] text-[#12304A] placeholder-[#64748B]/60 text-base focus:bg-white focus:outline-none focus:border-[#12304A] focus:ring-2 focus:ring-[#12304A]/10 transition-all font-sans font-normal"
                      />
                    </div>

                    <div>
                      <label className="block text-[12.5px] sm:text-xs font-medium uppercase tracking-wider text-[#12304A] mb-1.5 font-sans">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#DCE3EB] bg-[#FFFFFF] text-[#12304A] placeholder-[#64748B]/60 text-base focus:bg-white focus:outline-none focus:border-[#12304A] focus:ring-2 focus:ring-[#12304A]/10 transition-all font-sans font-normal"
                      />
                    </div>
                  </div>

                  {/* Phone & Service Dropdown (2-Column Grid) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12.5px] sm:text-xs font-medium uppercase tracking-wider text-[#12304A] mb-1.5 font-sans">
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 83092 75093"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#DCE3EB] bg-[#FFFFFF] text-[#12304A] placeholder-[#64748B]/60 text-base focus:bg-white focus:outline-none focus:border-[#12304A] focus:ring-2 focus:ring-[#12304A]/10 transition-all font-sans font-normal"
                      />
                    </div>

                    <div>
                      <label className="block text-[12.5px] sm:text-xs font-medium uppercase tracking-wider text-[#12304A] mb-1.5 font-sans">
                        PRIMARY SERVICE FOCUS
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#DCE3EB] bg-[#FFFFFF] text-[#12304A] text-base focus:bg-white focus:outline-none focus:border-[#12304A] focus:ring-2 focus:ring-[#12304A]/10 transition-all font-sans font-normal"
                      >
                        <option value="Digital Marketing & SEO">Digital Marketing &amp; SEO</option>
                        <option value="Performance Marketing (Meta/Google Ads)">Performance Marketing (Meta/Google Ads)</option>
                        <option value="AI Lead Generation & WhatsApp CRM">AI Lead Generation &amp; WhatsApp CRM</option>
                        <option value="Next.js Web Applications & Funnels">Next.js Web Applications &amp; Funnels</option>
                        <option value="Enterprise AI Architecture Consulting">Enterprise AI Architecture Consulting</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details (Textarea in Silver White #EEF1F5) */}
                  <div>
                    <label className="block text-[12.5px] sm:text-xs font-medium uppercase tracking-wider text-[#12304A] mb-1.5 font-sans">
                      PROJECT GOALS &amp; DETAILS *
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us a little about your brand, current challenges, and growth targets"
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#DCE3EB] bg-[#FFFFFF] text-[#12304A] placeholder-[#64748B]/60 text-base focus:bg-white focus:outline-none focus:border-[#12304A] focus:ring-2 focus:ring-[#12304A]/10 transition-all resize-y font-sans font-normal"
                    />
                  </div>

                  {/* Submit Button in Deep Navy #12304A */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2.5 px-9 py-3.5 rounded-full bg-[#12304A] hover:bg-[#1a4469] text-white font-medium text-sm sm:text-base tracking-wide transition-all shadow-md hover:-translate-y-0.5 group cursor-pointer font-sans"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Preparing Blueprint...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-2 text-xs text-[#64748B] font-sans">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Strict NDA &amp; confidentiality protected</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ── Continuous Horizontal Scrolling Trust & Execution Guarantees Strip ── */}
        <div className="mt-16 pt-8 border-t border-[#DCE3EB] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent z-20" />

          <div className="flex overflow-hidden w-full">
            <div className="flex items-center gap-4 sm:gap-6 whitespace-nowrap marquee-track hover:[animation-play-state:paused] py-2 cursor-pointer">
              {repeatedHighlights.map((item, idx) => (
                <div
                  key={`trust-${idx}`}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-[#DCE3EB] text-sm sm:text-[14.5px] font-medium text-[#12304A] shadow-xs group shrink-0 select-none hover:border-[#FFC400] transition-colors font-sans"
                >
                  <span className={`w-2 h-2 rounded-full ${item.dot} shrink-0`} />
                  <span className="font-sans">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
