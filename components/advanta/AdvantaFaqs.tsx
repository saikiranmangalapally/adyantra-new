"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AdvantaFaqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Exact FAQ content from adyantra.in
  const faqItems = [
    {
      q: "How quickly can we expect measurable results from your digital campaigns?",
      a: "Timelines depend on your market and starting point. Paid acquisition can yield early signals within weeks, while SEO and conversion work compound over the following months.",
    },
    {
      q: "Which specific services are best suited for my business goals?",
      a: "We recommend a focused mix after auditing your current funnel, opportunity size, audience, and technical readiness.",
    },
    {
      q: "How does Adyantra track and measure campaign ROI?",
      a: "Clear attribution, conversion tracking, and performance reports keep both lead quality and revenue outcomes visible.",
    },
    {
      q: "Can we start with a focused budget and scale as results improve?",
      a: "Yes. We build a practical initial roadmap, validate what works, and increase investment where it produces meaningful outcomes.",
    },
    {
      q: "What differentiates Adyantra from conventional marketing agencies?",
      a: "Senior in-house execution combines engineering, performance media, and AI automation in one accountable team.",
    },
  ];

  // Domain items replacing the client company logos as requested by the user
  const domainLogos = [
    {
      name: "NGOs & Non-Profits",
      tagline: "Social Impact & Aid",
      icon: (
        <svg className="w-7 h-7 text-[#111216]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      name: "Other Enterprises & Businesses",
      tagline: "Enterprise Systems",
      icon: (
        <svg className="w-7 h-7 text-[#111216]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: "IT & Software Enterprises",
      tagline: "Tech & Cloud Solutions",
      icon: (
        <svg className="w-7 h-7 text-[#111216]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      name: "Real Estate & Housing",
      tagline: "Commercial & Living",
      icon: (
        <svg className="w-7 h-7 text-[#111216]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      name: "Healthcare & Clinics",
      tagline: "Medical & Patient Care",
      icon: (
        <svg className="w-7 h-7 text-[#111216]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
    {
      name: "E-Commerce & Retail Brands",
      tagline: "D2C Stores & Merch",
      icon: (
        <svg className="w-7 h-7 text-[#111216]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      name: "Education & Academies",
      tagline: "Institutes & EdTech",
      icon: (
        <svg className="w-7 h-7 text-[#111216]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      name: "Fashion & D2C Apparel",
      tagline: "Lifestyle & Luxury",
      icon: (
        <svg className="w-7 h-7 text-[#111216]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
  ];

  // Repeating array for infinite seamless marquee loop
  const marqueeItems = [...domainLogos, ...domainLogos];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Marquee Animation Styles */}
      <style>{`
        @keyframes domainMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-domain-marquee {
          display: flex;
          width: max-content;
          animation: domainMarquee 35s linear infinite;
        }
        .domain-marquee-container:hover .animate-domain-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Subtitle with line + Title */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center gap-3 mb-2.5">
            <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#f5a623] font-heading">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <span className="w-12 h-[2.5px] bg-[#f5a623]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#111216] tracking-tight leading-[1.18] font-heading">
            Frequently Asked <span className="text-[#f5a623]">Questions</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our growth frameworks, technical execution, timelines, and reporting.
          </p>
        </div>

        {/* 3-Column Section Layout matching Digiplus Home Layout 11 */}
        <div className="mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Column 1: Woman Portrait + Overlapping 06+ Years Experience */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
            <div className="relative max-w-[310px] sm:max-w-[330px] w-full flex flex-col items-center">
              {/* Photo of smiling woman */}
              <div className="relative w-full flex justify-center">
                <img
                  src="/assets/digiplus/slgirl.png"
                  alt="06+ Years of Proven Growth"
                  className="w-[270px] sm:w-[300px] h-auto object-contain select-none"
                  loading="lazy"
                />
              </div>

              {/* Overlapping 06+ Outline Number and Years of Growth matching Adyantra.in */}
              <div className="relative -mt-10 sm:-mt-14 z-10 flex flex-col items-center w-full">
                <div
                  className="text-[76px] sm:text-[90px] font-black leading-none font-heading select-none text-white tracking-tight"
                  style={{
                    WebkitTextStroke: "3px #f5a623",
                    filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.05))",
                  }}
                >
                  06+
                </div>
                <h3 className="mt-1 text-xl sm:text-2xl font-black text-[#111216] font-heading tracking-tight">
                  Years of Proven Growth
                </h3>
              </div>
            </div>
          </div>

          {/* Column 2: 3 Key Offerings with Circular Orange Arrow Buttons */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-7 sm:space-y-9 px-2 sm:px-4">
            {/* Item 1: Highest Quality Services */}
            <div className="group flex items-start gap-4 sm:gap-5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#f5a623] text-[#111216] flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-[#111216] group-hover:text-white transition-colors duration-300 mt-0.5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg sm:text-[19px] font-black text-[#111216] font-heading group-hover:text-[#f5a623] transition-colors duration-300">
                  Highest Quality Services
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed mt-1">
                  We engineer enterprise-grade web applications, performance marketing funnels, and autonomous AI workflows built to scale revenue.
                </p>
              </div>
            </div>

            {/* Item 2: Perfect Business Solution */}
            <div className="group flex items-start gap-4 sm:gap-5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#f5a623] text-[#111216] flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-[#111216] group-hover:text-white transition-colors duration-300 mt-0.5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg sm:text-[19px] font-black text-[#111216] font-heading group-hover:text-[#f5a623] transition-colors duration-300">
                  Perfect Business Solution
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed mt-1">
                  Bespoke Next.js software, WhatsApp CRM pipelines, and server-side tracking custom-mapped to your exact customer journey.
                </p>
              </div>
            </div>

            {/* Item 3: Commitment to Deliver */}
            <div className="group flex items-start gap-4 sm:gap-5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#f5a623] text-[#111216] flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-[#111216] group-hover:text-white transition-colors duration-300 mt-0.5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg sm:text-[19px] font-black text-[#111216] font-heading group-hover:text-[#f5a623] transition-colors duration-300">
                  Commitment to Deliver
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed mt-1">
                  Dedicated senior technical leads, transparent real-time attribution, and SLA-backed execution with zero outsourcing.
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Accordion with 4 IT Solutions Questions */}
          <div className="md:col-span-2 lg:col-span-4 space-y-3.5">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-lg transition-all duration-300 border ${
                    isOpen
                      ? "bg-white border-[#f5a623] shadow-md shadow-[#f5a623]/5"
                      : "bg-[#f8f9fa] border-gray-200/70 hover:bg-white hover:border-[#f5a623]/50"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 py-4 sm:py-4.5 flex items-center justify-between text-left gap-3 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] sm:text-base font-bold text-[#111216] font-heading pr-2">
                      {item.q}
                    </span>
                    <div
                      className={`w-6 h-6 flex-shrink-0 flex items-center justify-center transition-transform duration-300 text-gray-700 ${
                        isOpen ? "rotate-180 text-[#f5a623]" : ""
                      }`}
                    >
                      <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Centered Pill Button matching Leadership Style */}
        <div className="mt-14 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#111216] hover:bg-[#222530] text-white font-semibold text-sm sm:text-base shadow-[0_12px_28px_rgba(17,18,22,0.25)] hover:shadow-[0_16px_32px_rgba(17,18,22,0.35)] transition-all duration-300 group cursor-pointer whitespace-nowrap"
          >
            <span>Have Questions? Talk To Us</span>
            <span className="text-base group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </Link>
        </div>

        {/* Bottom Section: Company Logo Section replaced with requested Domains */}
        <div className="mt-20 pt-10 border-t border-gray-200/90 relative">
          <div className="domain-marquee-container relative overflow-hidden py-4">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Continuous sliding marquee with requested domains */}
            <div className="animate-domain-marquee items-center gap-10 sm:gap-14">
              {marqueeItems.map((domain, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3.5 px-6 py-3 rounded-xl bg-transparent hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all duration-300 group cursor-default select-none"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-[#f5a623]/20 flex items-center justify-center text-gray-700 group-hover:text-[#f5a623] transition-colors duration-300 flex-shrink-0">
                    {domain.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm sm:text-[15px] font-black text-[#111216] font-heading tracking-wide uppercase group-hover:text-[#f5a623] transition-colors duration-300 whitespace-nowrap">
                      {domain.name}
                    </span>
                    <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider whitespace-nowrap">
                      {domain.tagline}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
