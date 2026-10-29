"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ArrowRight } from "lucide-react";

export default function AdvantaHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Digital Marketing", href: "/digital-marketing-growth" },
    { name: "AI Automations", href: "/ai-automation" },
    { name: "About Us", href: "/about" },
    { name: "Blogs", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
          isScrolled
            ? "shadow-[0_4px_25px_rgba(0,0,0,0.08)] py-3"
            : "py-4 sm:py-5 border-b border-gray-100"
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo matching Screenshot 104408 */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#f5a623] flex items-center justify-center text-[#111216] font-black text-xl shadow-sm">
              <span className="font-heading">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-2xl tracking-tight text-[#111216] leading-none">
                Adyantra<span className="text-[#f5a623]">.</span>
              </span>
              <span className="text-[9px] font-extrabold tracking-[0.25em] text-[#111216]/70 uppercase mt-0.5">
                AI &amp; DIGITAL AGENCY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation: ONLY Home, Digital Marketing, AI Automations, About Us, Blogs, Contact Us */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] font-extrabold text-[#111216] hover:text-[#f5a623] uppercase tracking-wider transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#f5a623] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action: Call CTA Block matching Screenshot 104408 */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+919154457790"
              className="hidden sm:flex items-center gap-3 group text-left"
            >
              <div className="w-10 h-10 rounded-full bg-[#f5a623] text-[#111216] flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                <Phone className="w-4 h-4 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                  Call Anytime
                </span>
                <span className="text-sm font-extrabold text-[#111216] group-hover:text-[#f5a623] transition-colors">
                  +91 91544 57790
                </span>
              </div>
            </a>

            {/* Book A Call Button */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#111216] hover:bg-black text-white text-xs font-black uppercase tracking-wider shadow-md hover:scale-105 transition-all"
            >
              <span>Book A Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-[#111216] hover:bg-black/5 transition-colors xl:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm xl:hidden flex justify-end">
          <div className="w-[300px] h-full bg-[#111216] text-white p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <span className="font-heading font-extrabold text-xl text-white">
                  Adyantra<span className="text-[#f5a623]">.</span>
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-gray-400 hover:text-white"
                  aria-label="Close Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-extrabold uppercase tracking-wider text-white hover:text-[#f5a623] transition-colors py-1.5 border-b border-white/5"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <a
                href="tel:+919154457790"
                className="flex items-center gap-3 text-xs font-bold text-gray-300"
              >
                <div className="w-8 h-8 rounded-full bg-[#f5a623] text-[#111216] flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 fill-current" />
                </div>
                <span>+91 91544 57790</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center py-3 rounded-full bg-[#f5a623] text-[#111216] font-black text-xs uppercase tracking-wider"
              >
                Book A Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
