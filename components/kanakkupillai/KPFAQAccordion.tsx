"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, X, ArrowRight } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

export interface KPFAQAccordionProps {
  customFaqs?: FAQItem[];
  tagline?: string;
  headlinePrefix?: string;
  headlineHighlight?: string;
  description?: string;
}

const defaultFaqs: FAQItem[] = [
  {
    q: "How quickly can we expect measurable results from your digital campaigns?",
    a: "Timelines depend on your market and starting point. Paid acquisition can yield early signals within weeks, while SEO and conversion work compound over the following months.",
  },
  {
    q: "Which specific services are best suited for my business goals?",
    a: "We recommend a focused mix after auditing your current funnel, opportunity size, audience cohorts, and technical readiness. For rapid lead volume, we combine Meta/Google Ads with WhatsApp CRM agents. For long-term organic pipeline, we deploy technical SEO and Next.js web applications.",
  },
  {
    q: "How does Adyantra track and measure campaign ROI?",
    a: "We deploy server-side tracking (sGTM & Meta CAPI) to ensure 100% data durability and eliminate signal loss from browser ad-blockers. You receive 24/7 access to live Looker Studio executive dashboards tracking blended ROAS, net customer acquisition cost (CAC), and verified revenue.",
  },
  {
    q: "Can we start with a focused budget and scale as results improve?",
    a: "Absolutely. We typically launch with a focused 30-day proof-of-concept sprint to validate unit economics and conversion velocity, then scale ad spend and infrastructure systematically as positive ROAS is confirmed.",
  },
  {
    q: "What differentiates Adyantra from conventional marketing agencies?",
    a: "We eliminate non-technical account managers and junior handoffs. You work directly with senior full-stack developers, performance marketers, and AI architects who take complete technical accountability for your digital revenue performance.",
  },
];

export default function KPFAQAccordion({
  customFaqs,
  tagline = "CLEAR ANSWERS",
  headlinePrefix = "Frequently Asked",
  headlineHighlight = "Questions",
  description = "Everything you need to know about our growth frameworks, technical execution, timelines, and reporting.",
}: KPFAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = customFaqs && customFaqs.length > 0 ? customFaqs : defaultFaqs;

  return (
    <section className="w-full py-12 sm:py-14 lg:py-16 bg-[#FAFBFC] border-b border-[#DCE3EB] font-sans" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ── Left Column: Tagline, Headline & Subtext ── */}
          <div className="lg:col-span-5 space-y-4">

            {/* Tagline */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs sm:text-[13px] font-medium uppercase tracking-widest text-[#12304A] font-sans">
                {tagline}
              </span>
              <span className="w-14 h-[2px] bg-[#FFC400] rounded-full inline-block" />
            </div>

            {/* Headline with Navy & Golden Yellow */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-medium text-[#12304A] tracking-tight leading-[1.12] font-sans">
              {headlinePrefix} <br />
              <span className="text-[#FFC400]">
                {headlineHighlight}
              </span>
            </h2>

            {/* Description in Slate Gray #64748B */}
            <p className="text-base sm:text-[17px] text-[#64748B] leading-relaxed pt-2 max-w-md font-normal font-sans">
              {description}
            </p>

            {/* Pill CTA Button in Deep Navy */}
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#12304A] hover:bg-[#1a4469] text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-md hover:-translate-y-0.5 group font-sans"
              >
                <span>Ask A Question</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ── Right Column: Seamless FAQ Accordion (No Card Background, Divided by Light Gray #DCE3EB) ── */}
          <div className="lg:col-span-7 divide-y divide-[#DCE3EB]">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="py-5 bg-transparent transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left gap-6 group cursor-pointer"
                  >
                    <span className={`text-[17px] sm:text-xl font-medium leading-snug font-sans transition-colors ${isOpen ? "text-[#12304A] font-medium" : "text-[#12304A] group-hover:text-[#0077c8]"
                      }`}>
                      {faq.q}
                    </span>

                    {/* Round +/- circular icon button */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${isOpen
                        ? "bg-[#12304A] border-[#12304A] text-[#12304A] shadow-sm"
                        : "bg-[#EEF1F5] border-[#DCE3EB] text-[#12304A] group-hover:bg-[#12304A] group-hover:border-[#12304A] group-hover:text-[#12304A]"
                        }`}
                    >
                      {isOpen ? (
                        <X className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {/* Clean Answer Paragraph */}
                  {isOpen && (
                    <div className="pt-3.5 pb-1 text-[#64748B] text-sm sm:text-base leading-relaxed font-sans font-normal animate-in fade-in duration-200 pr-10">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
