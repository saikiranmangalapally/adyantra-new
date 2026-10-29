"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck, FileText, Lock, Scale, Clock, Mail, Phone, Sparkles } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      id: "acceptance",
      num: "01",
      title: "Acceptance of Terms & SOW Binding",
      content: [
        "By accessing, engaging, or retaining Adyantra Digital Technologies Pvt. Ltd. (\"Adyantra\", \"we\", \"us\", or \"our\") for digital marketing, performance advertising, custom web software development, or autonomous AI automation consulting, you (\"Client\", \"you\", or \"your\") agree to be legally bound by these Terms and Conditions.",
        "These Terms apply in conjunction with any signed Statement of Work (SOW), Service Agreement, or Retainer Order. In the event of a direct conflict between an active SOW and these general Terms, the terms of the specific SOW shall prevail for that engagement."
      ]
    },
    {
      id: "scope",
      num: "02",
      title: "Scope of Services & Execution Standards",
      content: [
        "Adyantra delivers strategic digital services across performance marketing (Meta Ads, Google Ads Search & PMax), search engine optimization (SEO), custom Next.js web application engineering, and conversational AI workflow automation.",
        "All services are executed 100% in-house by our certified engineering squads and media buyers without unauthorized third-party subcontracting. Deliverables, sprint milestones, and KPIs are defined in the relevant SOW."
      ]
    },
    {
      id: "client-obligations",
      num: "03",
      title: "Client Cooperation & Access Rights",
      content: [
        "To ensure timely execution and milestone completion, the Client agrees to provide timely access to necessary advertising accounts, domain DNS records, CRM pipelines, brand collateral, and API credentials.",
        "Delays caused by failure to provide necessary access credentials, approvals, or feedback within 5 business days will automatically extend delivery timelines accordingly."
      ]
    },
    {
      id: "payment",
      num: "04",
      title: "Commercial Terms, Invoicing & Taxes",
      content: [
        "All fees for retainers, engineering sprints, and consulting services are quoted exclusive of applicable statutory taxes (including GST at 18%), which will be charged on all invoices.",
        "Monthly retainer fees are invoiced in advance at the start of each billing cycle. Fixed-price development projects follow milestone-based payments (e.g., 40% initial commitment, 30% staging milestone, 30% final go-live sign-off).",
        "Third-party ad platform costs (paid directly to Meta, Google, or TikTok) are the direct financial responsibility of the Client and are independent of Adyantra's professional management fees."
      ]
    },
    {
      id: "ip-ownership",
      num: "05",
      title: "Intellectual Property Rights & 100% IP Transfer",
      content: [
        "Upon full settlement of all associated invoices, all custom software code, bespoke landing page designs, brand assets, ad creative copy, and automation scripts engineered specifically for the Client become the exclusive property of the Client.",
        "Adyantra retains zero proprietary lock-in. We facilitate full administrative transfer of GitHub repositories, domain records, ad accounts, and cloud server infrastructure upon project handover."
      ]
    },
    {
      id: "confidentiality",
      num: "06",
      title: "Confidentiality & Mutual Non-Disclosure",
      content: [
        "Both parties agree to treat all business information, source code, ad performance metrics, CAC/ROAS telemetry, customer databases, and commercial discussions with strict confidentiality.",
        "Neither party shall disclose confidential materials to third parties without prior written consent, except where required by applicable legal process or regulatory authority."
      ]
    },
    {
      id: "sla-warranties",
      num: "07",
      title: "Service Level Commitments & Warranties",
      content: [
        "Adyantra warrants that all web software code will be engineered in accordance with modern industry standards (TypeScript, Next.js, WCAG accessibility, and sub-second Core Web Vitals). We provide a 30-day post-launch warranty covering any functional bugs or regressions at no additional cost.",
        "While we deploy battle-tested optimization methodologies, digital advertising and search rankings are inherently influenced by market dynamics, competitor bids, and algorithmic changes by third-party platforms (Google, Meta); therefore, specific ROAS or revenue figures are commercial targets rather than guaranteed warranties."
      ]
    },
    {
      id: "termination",
      num: "08",
      title: "Termination & Exit Transition",
      content: [
        "Either party may terminate an ongoing monthly retainer agreement by providing a 30-day prior written notice via registered email.",
        "Upon termination, Adyantra will conduct an orderly transition, providing all account administrative privileges, database dumps, and active campaign documentation within 10 business days."
      ]
    },
    {
      id: "governing-law",
      num: "09",
      title: "Governing Law & Jurisdiction",
      content: [
        "These Terms and all commercial engagements shall be governed by and construed in accordance with the laws of India.",
        "Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts located in Hyderabad, Telangana, India."
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
            <span className="text-[#FFC400] font-medium">Terms and Conditions</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FFC400] bg-white/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3 border border-white/15">
              <Scale className="w-3.5 h-3.5 text-[#FFC400]" />
              Commercial & Legal Framework
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Terms & <span className="text-[#FFC400]">Conditions</span>
            </h1>
            <p className="text-sm sm:text-base text-[#DCE3EB] mt-3 leading-relaxed">
              Transparent terms governing digital marketing retainers, web engineering sprints, and autonomous AI automation consulting engagements.
            </p>
          </div>

          {/* Key Assurance Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#FFC400]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#DCE3EB]">IP Rights</p>
                <p className="text-xs font-bold text-white">100% Client Ownership</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#149347]">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#DCE3EB]">Confidentiality</p>
                <p className="text-xs font-bold text-[#149347]">Strict Mutual NDA</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#FFC400]">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#DCE3EB]">Agreements</p>
                <p className="text-xs font-bold text-white">Milestone SOWs</p>
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
              <FileText className="w-5 h-5 text-[#156bb2] flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-[#12304A] leading-relaxed">
                <strong>Legal Notice:</strong> These Terms and Conditions constitute a legally binding agreement between Adyantra Digital Technologies Pvt. Ltd. and the Client. For inquiries regarding Master Services Agreements (MSAs) or customized enterprise terms, please contact our legal desk at <a href="mailto:info@adyantra.in" className="text-[#156bb2] font-semibold hover:underline">info@adyantra.in</a>.
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

            {/* Direct Contact for Legal Queries */}
            <div className="pt-8 border-t border-[#DCE3EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#F8FAFC] p-6 rounded-xl border border-[#DCE3EB]">
              <div>
                <h3 className="text-sm font-bold text-[#12304A]">Have questions regarding our terms?</h3>
                <p className="text-xs text-[#64748B] mt-0.5">Our legal counsel and compliance officers are available for clarifications.</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:info@adyantra.in"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#12304A] hover:bg-[#1e3238] text-white text-xs font-semibold transition"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Legal Desk</span>
                </a>
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#DCE3EB] bg-white text-[#12304A] hover:bg-slate-50 text-xs font-semibold transition"
                >
                  <span>Privacy Policy</span>
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
