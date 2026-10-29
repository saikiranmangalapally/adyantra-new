"use client";

import React from "react";
import Link from "next/link";
import KPContactSection from "@/components/kanakkupillai/KPContactSection";
import KPFAQAccordion from "@/components/kanakkupillai/KPFAQAccordion";
import { Phone, Mail, Clock, MessageSquare, ChevronRight, Sparkles } from "lucide-react";

export default function ContactPage() {
  const contactFaqs = [
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
    <main className="min-h-screen overflow-x-hidden font-sans bg-[#FFFFFF] text-[#12304A]">
      {/* ── Breadcrumb & Clean Header ── */}
      <section className="bg-[#12304A] text-white py-12 lg:py-16 border-b border-[#DCE3EB]/20 relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#156bb2]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-[#DCE3EB] mb-4">
            <Link href="/" className="hover:text-[#FFC400] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-[#DCE3EB]/60" />
            <span className="text-[#FFC400] font-medium">Contact Us</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FFC400] bg-white/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-[#FFC400]" />
              Start a Direct Strategy Conversation
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Get in Touch with Our <span className="text-[#FFC400]">Senior Growth Team</span>
            </h1>
            <p className="text-sm sm:text-base text-[#DCE3EB] mt-3 leading-relaxed">
              Have a project in mind or need a technical audit? Fill out the consultation request below, or connect directly through phone, email, or WhatsApp.
            </p>
          </div>

          {/* Quick Contact Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#FFC400]">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#DCE3EB]">Response Time</p>
                <p className="text-xs font-bold text-white">&lt; 2 Hours SLA</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#FFC400]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#DCE3EB]">Direct Phone</p>
                <p className="text-xs font-bold text-white">+91 83092 75093</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#FFC400]">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#DCE3EB]">Official Email</p>
                <p className="text-xs font-bold text-white">info@adyantra.in</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#149347]">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#DCE3EB]">WhatsApp Desk</p>
                <p className="text-xs font-bold text-[#149347]">24/7 Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 1. The Core Contact Section (Form, Office Address & Direct Channels) ── */}
      <KPContactSection />

      {/* ── 2. Frequently Asked Questions (Contact Specific) ── */}
      <KPFAQAccordion customFaqs={contactFaqs} />
    </main>
  );
}
