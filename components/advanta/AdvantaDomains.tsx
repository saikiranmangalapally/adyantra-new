"use client";

import React, { useState } from "react";

export default function AdvantaDomains() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  const row1Domains = [
    {
      id: "education",
      title: "Education & Academies",
      desc: "Student lead-generation campaigns, course landing pages, and counselling appointment workflows.",
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      id: "fashion",
      title: "Fashion & D2C Apparel",
      desc: "Meta performance marketing, product collection funnels, and automated cart-recovery workflows.",
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      id: "ngo",
      title: "NGOs & Non-Profits",
      desc: "Donation landing pages, volunteer enquiry workflows, and donor communication automation.",
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      id: "enterprise",
      title: "Other Enterprises & Businesses",
      desc: "Custom business web portals, lead-management pipelines, and executive dashboards.",
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: "software",
      title: "IT & Software Enterprises",
      desc: "SaaS product landing pages, demo-request funnels, and marketing attribution.",
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      id: "realestate",
      title: "Real Estate & Housing",
      desc: "High-intent lead generation, automated enquiry distribution, and site-visit workflows.",
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
  ];

  const row2Domains = [
    {
      id: "healthcare",
      title: "Healthcare & Clinics",
      desc: "Patient appointment booking funnels, 24/7 WhatsApp AI receptionist, and HIPAA-aware CRM sync.",
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
    {
      id: "ecommerce",
      title: "E-Commerce & Retail Brands",
      desc: "Conversion rate optimization, high-converting checkout flows, and automated inventory sync.",
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: "finance",
      title: "Financial Services & Fintech",
      desc: "Secure customer onboarding workflows, automated compliance reminders, and KYC verification funnels.",
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      id: "hospitality",
      title: "Hospitality & Tourism",
      desc: "Direct reservation systems, guest check-in automation, and targeted seasonal travel campaigns.",
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
        </svg>
      ),
    },
    {
      id: "logistics",
      title: "Automobile & Logistics",
      desc: "Fleet tracking notifications, service booking bots, and commercial transport enquiry management.",
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      id: "food",
      title: "Food & Beverage (F&B)",
      desc: "Digital menu integrations, online ordering workflows, and loyalty rewards follow-up systems.",
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="domains" className="py-24 bg-[#fafafd] relative overflow-hidden">
      {/* Continuous Marquee CSS Styles */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-continuous-left {
          display: flex;
          width: max-content;
          animation: marqueeLeft 32s linear infinite;
        }
        .animate-continuous-right {
          display: flex;
          width: max-content;
          animation: marqueeRight 32s linear infinite;
        }
        .marquee-container:hover .animate-continuous-left,
        .marquee-container:hover .animate-continuous-right {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching Image 3 with Digiplus theme */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#fef3c7] border border-[#f5a623]/30 text-[#d97706] text-xs font-black tracking-widest uppercase mb-4 shadow-xs">
            TARGET DOMAIN EXPERTISE
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#111216] font-heading leading-tight tracking-tight mb-4">
            Domains <span className="text-[#f5a623]">We Serve</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Custom digital marketing strategies and AI automation solutions tailored for high-growth business sectors.
          </p>
        </div>
      </div>

      {/* Full-bleed Marquee Rows Container */}
      <div className="w-full space-y-5 marquee-container overflow-hidden py-4">
        {/* Row 1: Continuous movement to the left */}
        <div className="animate-continuous-left flex gap-5">
          {[...row1Domains, ...row1Domains, ...row1Domains, ...row1Domains].map((domain, index) => (
            <div
              key={`row1-${domain.id}-${index}`}
              onClick={() => setSelectedDomain(selectedDomain === domain.id ? null : domain.id)}
              className={`rounded-full bg-white border px-6 py-3.5 shadow-sm hover:shadow-md transition-all flex items-center gap-4 flex-shrink-0 cursor-pointer group ${
                selectedDomain === domain.id
                  ? "border-[#f5a623] ring-2 ring-[#f5a623]/30"
                  : "border-gray-200/80 hover:border-[#f5a623]"
              }`}
            >
              <span className="font-bold text-sm sm:text-[15px] text-[#111216] group-hover:text-[#f5a623] transition-colors whitespace-nowrap">
                {domain.title}
              </span>
              <div className="w-9 h-9 rounded-full bg-[#fef3c7] text-[#d97706] group-hover:bg-[#f5a623] group-hover:text-[#111216] transition-colors flex items-center justify-center flex-shrink-0">
                {domain.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Continuous movement to the right */}
        <div className="animate-continuous-right flex gap-5">
          {[...row2Domains, ...row2Domains, ...row2Domains, ...row2Domains].map((domain, index) => (
            <div
              key={`row2-${domain.id}-${index}`}
              onClick={() => setSelectedDomain(selectedDomain === domain.id ? null : domain.id)}
              className={`rounded-full bg-white border px-6 py-3.5 shadow-sm hover:shadow-md transition-all flex items-center gap-4 flex-shrink-0 cursor-pointer group ${
                selectedDomain === domain.id
                  ? "border-[#f5a623] ring-2 ring-[#f5a623]/30"
                  : "border-gray-200/80 hover:border-[#f5a623]"
              }`}
            >
              <span className="font-bold text-sm sm:text-[15px] text-[#111216] group-hover:text-[#f5a623] transition-colors whitespace-nowrap">
                {domain.title}
              </span>
              <div className="w-9 h-9 rounded-full bg-[#fef3c7] text-[#d97706] group-hover:bg-[#f5a623] group-hover:text-[#111216] transition-colors flex items-center justify-center flex-shrink-0">
                {domain.icon}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Active Domain Card Preview */}
      {selectedDomain && (
        <div className="max-w-2xl mx-auto mt-10 px-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          {[...row1Domains, ...row2Domains]
            .filter((d) => d.id === selectedDomain)
            .map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#f5a623] shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 rounded-full bg-[#f5a623] text-[#111216] flex items-center justify-center">
                      {item.icon}
                    </span>
                    <h4 className="text-lg font-black font-heading text-[#111216]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full bg-[#111216] hover:bg-[#f5a623] text-white hover:text-[#111216] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm flex-shrink-0"
                >
                  Consult for This Domain →
                </a>
              </div>
            ))}
        </div>
      )}
    </section>
  );
}

