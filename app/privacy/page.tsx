"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Lock, FileText, Clock, Mail, Scale } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      id: "collection",
      num: "01",
      title: "Information We Collect",
      content: [
        "Adyantra Digital Technologies Pvt. Ltd. (\"we\", \"our\", or \"us\") collects corporate contact details and diagnostic business data submitted through our inquiry forms, strategy booking requests, and growth audit tools.",
        "Collected information includes your name, corporate email address, direct telephone number, company URL, current marketing channels, and project growth objectives. We do not collect sensitive personal financial information such as credit card numbers directly on our site."
      ]
    },
    {
      id: "usage",
      num: "02",
      title: "How We Use Collected Information",
      content: [
        "We use collected information strictly to evaluate your project scope, prepare confidential diagnostic audits, schedule strategy consultations, and execute agreed-upon digital marketing and software engineering deliverables.",
        "We also use performance telemetry to provide weekly and monthly attribution reports. We do not sell, rent, monetize, or lease your corporate data to third-party brokers, advertisers, or data aggregators under any circumstances."
      ]
    },
    {
      id: "security",
      num: "03",
      title: "Data Security, Vaults & Encryption",
      content: [
        "Adyantra implements rigorous technical and organizational security controls to protect your data against unauthorized access, loss, alteration, or disclosure.",
        "All data transfers are encrypted in-transit using industry-standard TLS 1.3 protocol. Client credentials, API tokens (Meta, Google, CRM integrations), and database backups are stored in hardware-secured cryptographic vaults with strict role-based access control (RBAC)."
      ]
    },
    {
      id: "tracking",
      num: "04",
      title: "Cookies, Telemetry & Server-Side Attribution",
      content: [
        "Our website utilizes essential technical cookies and anonymized performance analytics to assess user experience and optimize site speed.",
        "When engineering performance marketing funnels for our clients, we deploy privacy-compliant, first-party server-side tracking (e.g., Meta CAPI, Google Consent Mode v2) adhering strictly to GDPR, CCPA, and Indian digital personal data protection frameworks."
      ]
    },
    {
      id: "retention",
      num: "05",
      title: "Data Retention & Your Rights",
      content: [
        "We retain business inquiry data only as long as necessary to fulfill project objectives or comply with statutory accounting and tax regulations in India.",
        "You have the right to request access to, correction of, or complete deletion of your corporate contact data from our active CRM systems at any time by contacting our privacy compliance desk."
      ]
    },
    {
      id: "officer",
      num: "06",
      title: "Contact Our Data Protection Officer",
      content: [
        "If you have any questions, concerns, or requests regarding this Privacy Policy or our data protection protocols, please reach out directly to our Data Protection Officer at info@adyantra.in or call +91 83092 75093."
      ]
    }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden font-sans bg-[#FFFFFF] text-[#12304A]">
      {/* ── Breadcrumb & Clean Header in Deep Navy #12304A ── */}
      <section className="bg-[#12304A] text-white py-12 lg:py-16 border-b border-[#DCE3EB]/20 relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#156bb2]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-[#DCE3EB] mb-4">
            <Link href="/" className="hover:text-[#FFC400] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-[#DCE3EB]/60" />
            <span className="text-[#FFC400] font-medium">Privacy Policy</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FFC400] bg-white/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3 border border-white/15">
              <Lock className="w-3.5 h-3.5 text-[#FFC400]" />
              Data Protection & Compliance
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Privacy <span className="text-[#FFC400]">Policy</span>
            </h1>
            <p className="text-sm sm:text-base text-[#DCE3EB] mt-3 leading-relaxed">
              How Adyantra Digital Technologies Pvt. Ltd. protects, encrypts, and respects your corporate data, lead intelligence, and confidential information.
            </p>
          </div>

          {/* Key Assurance Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#149347]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#DCE3EB]">Protocol</p>
                <p className="text-xs font-bold text-white">TLS 1.3 In-Transit</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#FFC400]">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#DCE3EB]">Data Sale</p>
                <p className="text-xs font-bold text-white">Zero Third-Party Sale</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#FFC400]">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#DCE3EB]">Protection</p>
                <p className="text-xs font-bold text-white">Mutual NDA Protected</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#FFC400]">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#DCE3EB]">Last Revised</p>
                <p className="text-xs font-bold text-white">January 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Legal Body Section ── */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-[#DCE3EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#FFFFFF] p-6 sm:p-10 lg:p-12 rounded-2xl border border-[#DCE3EB] shadow-sm space-y-10 font-sans">
            
            {/* Introductory Callout */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#EAF2F9]/50 border border-[#DCE3EB] flex items-start gap-3.5">
              <ShieldCheck className="w-5 h-5 text-[#149347] flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-[#12304A] leading-relaxed">
                <strong>Privacy Commitment:</strong> Adyantra is dedicated to enterprise-grade confidentiality. We adhere strictly to applicable Indian and international digital data protection standards. For privacy inquiries, please contact <a href="mailto:info@adyantra.in" className="text-[#156bb2] font-semibold hover:underline">info@adyantra.in</a>.
              </div>
            </div>

            {/* Structured Legal Sections */}
            <div className="space-y-10 divide-y divide-[#DCE3EB]/60">
              {sections.map((sec) => (
                <div key={sec.id} id={sec.id} className="pt-8 first:pt-0 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-[#EAF2F9] text-[#12304A] font-bold text-xs flex items-center justify-center">
                      {sec.num}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold font-heading text-[#12304A]">
                      {sec.title}
                    </h2>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm text-[#64748B] leading-relaxed pl-10">
                    {sec.content.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Contact for Privacy Queries */}
            <div className="pt-8 border-t border-[#DCE3EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#F8FAFC] p-6 rounded-xl border border-[#DCE3EB]">
              <div>
                <h3 className="text-sm font-bold text-[#12304A]">Need a copy of your stored data or have questions?</h3>
                <p className="text-xs text-[#64748B] mt-0.5">Our Data Protection Officer handles all requests within 48 hours.</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:info@adyantra.in"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#12304A] hover:bg-[#1e3238] text-white text-xs font-semibold transition"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Contact DPO</span>
                </a>
                <Link
                  href="/terms"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#DCE3EB] bg-white text-[#12304A] hover:bg-slate-50 text-xs font-semibold transition"
                >
                  <span>Terms of Service</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
