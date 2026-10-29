"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AdvantaFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111216] text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f5a623]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f5a623]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Column 1: Brand */}
          <div className="lg:col-span-4">
            <Link href="#hero" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-[#17181d] border border-[#f5a623]/30 flex items-center justify-center text-[#f5a623] shadow-md group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13H5.5L12 6.5z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl tracking-tight text-white leading-none">
                  ADYANTRA<span className="text-[#f5a623]">.</span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mt-0.5">
                  DIGITAL
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-6">
              Technology-first digital marketing and enterprise AI automation agency engineering high-ROAS returns, high-velocity acquisition funnels, and autonomous systems.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#about"
                className="text-xs font-semibold text-gray-300 hover:text-[#f5a623] transition-colors"
              >
                About Us
              </a>
              <span className="text-gray-600">&bull;</span>
              <a
                href="#services"
                className="text-xs font-semibold text-gray-300 hover:text-[#f5a623] transition-colors"
              >
                Our Services
              </a>
              <span className="text-gray-600">&bull;</span>
              <a
                href="#contact"
                className="text-xs font-semibold text-gray-300 hover:text-[#f5a623] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold font-heading text-white mb-6 uppercase tracking-wider text-xs">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#hero" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Features", href: "#features" },
                { name: "How It Works", href: "#process" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#f5a623] transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services from adyantra.in */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold font-heading text-white mb-6 uppercase tracking-wider text-xs">
              Growth Services
            </h4>
            <ul className="space-y-3">
              {[
                "Technical SEO",
                "Meta & Google Ads",
                "Next.js Engineering",
                "WhatsApp AI Bots",
                "CRM State Sync",
                "Analytics & GA4",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 hover:text-[#f5a623] transition-colors flex items-center gap-1.5"
                  >
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-base font-bold font-heading text-white mb-3 uppercase tracking-wider text-xs">
              INSIGHTS FOR SMARTER GROWTH
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              Receive practical ideas on digital marketing, AI automation, analytics, and business technology.
            </p>

            {/* Newsletter Form */}
            {subscribed ? (
              <div className="p-3 rounded-xl bg-white/10 text-xs text-[#f5a623] font-semibold mb-6">
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 mb-6">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#f5a623]"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f5a623] hover:bg-amber-400 text-[#111216] font-bold text-xs uppercase tracking-wider shadow-md hover:scale-[1.02] transition-all flex-shrink-0 cursor-pointer group"
                >
                  <span>Subscribe</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </form>
            )}

            {/* Contact details */}
            <div className="space-y-1.5 text-xs text-gray-400">
              <p>
                <span className="font-semibold text-gray-300">Email:</span>{" "}
                <a href="mailto:info@adyantra.in" className="hover:text-[#f5a623]">
                  info@adyantra.in
                </a>
              </p>
              <p>
                <span className="font-semibold text-gray-300">Phone:</span>{" "}
                <a href="tel:+918309275093" className="hover:text-[#f5a623]">
                  +91 83092 75093
                </a>
              </p>
              <p>
                <span className="font-semibold text-gray-300">Location:</span> HITEC City, Hyderabad, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; 2026 Adyantra Digital. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#f5a623] text-gray-400 hover:text-[#111216] flex items-center justify-center transition-colors ml-2 cursor-pointer"
              aria-label="Scroll to top"
            >
              ^
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
