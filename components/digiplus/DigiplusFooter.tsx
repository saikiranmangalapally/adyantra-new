"use client";

import React from "react";
import Link from "next/link";

export default function DigiplusFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const partnerLogos = [
    { name: "MAXTON design", label: "MAXTON" },
    { name: "Turbologo", label: "TURBOLOGO" },
    { name: "mondi", label: "MONDI" },
    { name: "logotype", label: "LOGOTYPE" },
    { name: "duragas", label: "DURAGAS" },
    { name: "nextcloud", label: "NEXTCLOUD" },
  ];

  return (
    <footer className="bg-[#0b0c10] text-white pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Brand Partners Row matching Digiplus */}
        <div className="pb-16 mb-16 border-b border-white/10">
          <p className="text-center text-xs font-mono tracking-widest text-[#f5a623] uppercase mb-8">
            TRUSTED BY INDUSTRY LEADERS WORLDWIDE
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity">
            {partnerLogos.map((brand, idx) => (
              <div
                key={idx}
                className="text-lg md:text-xl font-heading font-black tracking-widest uppercase text-white/50 hover:text-[#f5a623] transition-colors cursor-pointer select-none"
              >
                {brand.label}
              </div>
            ))}
          </div>
        </div>

        {/* Top 4-Column Grid matching Digiplus */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Newsletter (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 grid grid-cols-2 gap-1 p-1.5 rounded-lg bg-[#f5a623]">
                  <span className="bg-[#0e0f14] rounded-sm"></span>
                  <span className="bg-white rounded-sm"></span>
                  <span className="bg-white rounded-sm"></span>
                  <span className="bg-[#0e0f14] rounded-sm"></span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black tracking-tight text-white font-heading leading-none">
                    Adyantra<span className="text-[#f5a623]">.</span>
                  </span>
                  <span className="text-[9px] uppercase tracking-widest font-bold text-gray-400 mt-0.5">
                    Digital Agency
                  </span>
                </div>
              </Link>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-8">
                Adyantra Digital engineers high-velocity digital experiences, performance ad media, and autonomous AI systems that drive revenue at scale.
              </p>
            </div>

            {/* Newsletter Input matching Digiplus */}
            <div className="relative max-w-sm">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-5 py-3.5 pr-14 rounded-full bg-white/5 border border-white/10 focus:border-[#f5a623] text-sm text-white placeholder-gray-500 outline-none transition-all"
              />
              <button
                type="button"
                className="absolute right-1.5 top-1.5 bottom-1.5 w-11 h-11 rounded-full bg-[#f5a623] text-[#0e0f14] flex items-center justify-center text-sm font-bold hover:scale-105 transition-transform"
                aria-label="Subscribe"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold font-heading text-white mb-6 uppercase tracking-wider">
              Quick Link
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-[#f5a623] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-[#f5a623] transition-colors">
                  Core Pillars
                </a>
              </li>
              <li>
                <a href="#operating-model" className="hover:text-[#f5a623] transition-colors">
                  Fun Facts
                </a>
              </li>
              <li>
                <a href="#ai-automation" className="hover:text-[#f5a623] transition-colors">
                  AI Automation
                </a>
              </li>
              <li>
                <a href="#domains" className="hover:text-[#f5a623] transition-colors">
                  Domains
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-bold font-heading text-white mb-6 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-[#f5a623] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#f5a623] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#f5a623] transition-colors">
                  Team Members
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#f5a623] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#f5a623] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-bold font-heading text-white mb-6 uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-5 text-xs sm:text-sm text-gray-400">
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 fill-[#f5a623] flex-shrink-0 mt-0.5" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>HITEC City, Madhapur, Hyderabad, Telangana 500081</span>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 fill-[#f5a623] flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:hello@adyantra.in" className="hover:text-[#f5a623] transition-colors">
                  hello@adyantra.in
                </a>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 fill-[#f5a623] flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <a href="tel:+918309275093" className="hover:text-[#f5a623] transition-colors">
                  +91 83092 75093
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Adyantra Digital. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-gray-300 transition-colors">Services</a>
            <a href="#pillars" className="hover:text-gray-300 transition-colors">Pillars</a>
            <a href="#ai-automation" className="hover:text-gray-300 transition-colors">AI Systems</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Book Audit</a>
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-Top Button */}
      <button
        onClick={scrollToTop}
        className="dp-back-to-top"
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
        </svg>
      </button>
    </footer>
  );
}
