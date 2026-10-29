"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AdvantaServicesSlider() {
  const [startIndex, setStartIndex] = useState(0);

  const services = [
    {
      id: "seo",
      title: "Technical SEO &\nSearch Visibility",
      image: "/assets/digiplus/Project1-550x550.jpg",
      icon: (
        <svg className="w-5 h-5 text-[#111216]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M3 3v18h18" strokeLinecap="round" />
          <path d="M19 9l-5 5-4-4-3 3" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="7" y="14" width="2" height="4" fill="currentColor" />
          <rect x="12" y="11" width="2" height="7" fill="currentColor" />
          <rect x="17" y="8" width="2" height="10" fill="currentColor" />
        </svg>
      ),
      bullets: [
        "Rank #1 for High-Intent Keywords",
        "Technical SEO & Core Web Vitals",
        "High-Authority Backlink Building",
        "Topic Cluster Content Strategy",
      ],
    },
    {
      id: "ads",
      title: "Meta & Google\nPerformance Ads",
      image: "/assets/digiplus/project2-550x550.jpg",
      icon: (
        <svg className="w-5 h-5 text-[#111216]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" strokeLinecap="round" />
        </svg>
      ),
      bullets: [
        "4.8x+ Verified Campaign ROAS",
        "Google Search & Performance Max",
        "Server-Side Meta CAPI Tracking",
        "Conversion Funnel Optimization",
      ],
    },
    {
      id: "web",
      title: "Next.js Web Software\n& Application Dev",
      image: "/assets/digiplus/project4-550x550.jpg",
      icon: (
        <svg className="w-5 h-5 text-[#111216]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      bullets: [
        "Custom Next.js & React Web Apps",
        "100/100 Core Web Vitals Speed",
        "Bespoke High-Converting Pages",
        "Scalable Cloud & API Integrations",
      ],
    },
    {
      id: "automation",
      title: "AI Automation &\nWhatsApp CRM Bots",
      image: "/assets/digiplus/project5-672x448.jpg",
      icon: (
        <svg className="w-5 h-5 text-[#111216]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6.05 11a22.35 22.35 0 01-3.95 2z" />
          <circle cx="15.5" cy="8.5" r="1.5" fill="currentColor" />
        </svg>
      ),
      bullets: [
        "24/7 Autonomous Lead Ingestion",
        "WhatsApp Cloud API & CRM Sync",
        "Custom Zapier, Make & n8n Flows",
        "Automated Sales Follow-up SLA",
      ],
    },
    {
      id: "ecommerce",
      title: "E-Commerce Growth\n& Storefronts",
      image: "/assets/digiplus/Bg2-672x448.jpg",
      icon: (
        <svg className="w-5 h-5 text-[#111216]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
        </svg>
      ),
      bullets: [
        "Shopify & Headless Storefronts",
        "Dynamic Product Catalog Ads",
        "Cart Abandonment AI Recovery",
        "Average Order Value (AOV) Scaling",
      ],
    },
    {
      id: "analytics",
      title: "Server-Side Tracking\n& Meta CAPI Setup",
      image: "/assets/digiplus/slider5-672x448.jpg",
      icon: (
        <svg className="w-5 h-5 text-[#111216]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M21.21 15.89A10 10 0 118 2.83" />
          <path d="M22 12A10 10 0 0012 2v10z" />
        </svg>
      ),
      bullets: [
        "First-Party Server-Side CAPI",
        "GA4 & Google BigQuery Data Sync",
        "Looker Studio Real-Time Reports",
        "Zero-Loss Attribution Pipelines",
      ],
    },
  ];

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? services.length - 3 : Math.max(0, prev - 1)));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= services.length - 3 ? 0 : prev + 1));
  };

  // 1*3 layout: exactly 3 cards displayed in 1 row across desktop
  const visibleServices = services.slice(startIndex, startIndex + 3);

  return (
    <section id="services" aria-label="Services Section" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with 1*3 Navigation Controls matching Screenshot 2026-10-27 104408.png */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#f5a623] font-heading">
                SERVICES
              </span>
              <span className="w-12 h-[2.5px] bg-[#f5a623]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#111216] leading-tight tracking-tight font-heading">
              Empower Your Business With <br />
              Innovative Digital Services
            </h2>
          </div>

          {/* 1*3 Carousel Slider Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-[#111216] text-white hover:bg-[#f5a623] hover:text-[#111216] flex items-center justify-center font-bold text-lg transition-all duration-300 shadow-md cursor-pointer"
              aria-label="Previous 3 services"
            >
              ←
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-[#111216] text-white hover:bg-[#f5a623] hover:text-[#111216] flex items-center justify-center font-bold text-lg transition-all duration-300 shadow-md cursor-pointer"
              aria-label="Next 3 services"
            >
              →
            </button>
          </div>
        </div>

        {/* 1*3 Grid: Exactly 3 cards in 1 row matching Screenshot 2026-10-27 104408.png */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {visibleServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-[32px] border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between group relative overflow-visible"
            >
              <div>
                {/* 1. Card Title on TOP matching Screenshot 2026-10-27 104408.png */}
                <h3 className="text-xl sm:text-2xl font-black font-heading text-[#111216] leading-snug whitespace-pre-line mb-6 min-h-[60px] group-hover:text-[#f5a623] transition-colors">
                  {service.title}
                </h3>

                {/* 2. Rounded Photo Container with Overlapping Orange Circular Icon Badge */}
                <div className="relative mb-8">
                  <div className="w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-gray-100 shadow-sm">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Overlapping Orange Icon Badge at Bottom-Left of Photo */}
                  <div className="absolute -bottom-3.5 left-5 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#f5a623] flex items-center justify-center text-[#111216] shadow-lg group-hover:rotate-6 transition-transform z-10">
                    {service.icon}
                  </div>
                </div>

                {/* 3. Bulleted List with Gray Bullets matching Screenshot 2026-10-27 104408.png */}
                <ul className="space-y-3.5 mb-8 pt-2">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs sm:text-[13.5px] text-gray-500 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Bottom Row: Line + MORE on Left, Orange Circle + Action Button on Right */}
              <div className="pt-5 border-t border-gray-100 flex items-center justify-between gap-3 mt-auto">
                {/* Left Line + MORE */}
                <div className="flex items-center gap-2 flex-1">
                  <div className="h-[1px] flex-1 bg-gray-200" />
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400 group-hover:text-[#f5a623] transition-colors">
                    MORE
                  </span>
                </div>

                {/* Orange Circular + Action Button */}
                <Link
                  href="#contact"
                  className="w-12 h-12 rounded-full bg-[#f5a623] group-hover:bg-[#111216] text-[#111216] group-hover:text-white flex items-center justify-center text-xl font-bold transition-all shadow-md group-hover:scale-105 cursor-pointer flex-shrink-0"
                  aria-label={`Get started with ${service.title}`}
                >
                  +
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Pill Button matching Leadership Style */}
        <div className="mt-14 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#111216] hover:bg-[#222530] text-white font-semibold text-sm sm:text-base shadow-[0_12px_28px_rgba(17,18,22,0.25)] hover:shadow-[0_16px_32px_rgba(17,18,22,0.35)] transition-all duration-300 group cursor-pointer"
          >
            <span>Explore All Services</span>
            <span className="text-base group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
