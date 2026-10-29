"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, ArrowRight } from "lucide-react";

export default function ExactHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Digital Marketing", href: "/digital-marketing-growth" },
    { name: "AI Automations", href: "/ai-automation" },
    { name: "About Us", href: "/about" },
    { name: "Blogs", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e4e4e4] shadow-sm font-sans">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
        
        {/* Adyantra Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#FFC400] flex items-center justify-center text-[#062B4D] font-black text-xl shadow-sm">
            <span>A</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl tracking-tight text-[#062B4D] leading-none">
              Adyantra<span className="text-[#FFC400]">.</span>
            </span>
            <span className="text-[9px] font-extrabold tracking-[0.25em] text-[#062B4D]/70 uppercase mt-0.5">
              AI &amp; DIGITAL AGENCY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links: ONLY Home, Digital Marketing, AI Automations, About Us, Blogs, Contact Us */}
        <nav className="hidden xl:flex items-center space-x-7 text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-[#062B4D]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#FFC400] transition py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FFC400] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Action: Call Anytime + Book A Call Button */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+919154457790"
            className="hidden sm:flex items-center gap-3.5 group text-left"
          >
            <div className="w-11 h-11 rounded-full bg-[#FFC400] text-[#062B4D] flex items-center justify-center shadow-md group-hover:scale-105 transition-all">
              <Phone className="w-4 h-4 fill-current" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                Call Anytime
              </span>
              <span className="block text-sm sm:text-base font-extrabold text-[#062B4D] group-hover:text-[#FFC400] transition tracking-tight">
                +91 91544 57790
              </span>
            </div>
          </a>

          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#062B4D] hover:bg-black text-white text-xs font-black uppercase tracking-wider shadow-md hover:scale-105 transition-all"
          >
            <span>Book A Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 text-[#062B4D] rounded-lg"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm xl:hidden flex justify-end">
          <div className="w-[300px] h-full bg-[#062B4D] text-white p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <span className="font-extrabold text-xl text-white">
                  Adyantra<span className="text-[#FFC400]">.</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
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
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-extrabold uppercase tracking-wider text-white hover:text-[#FFC400] transition py-1.5 border-b border-white/5"
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
                <div className="w-8 h-8 rounded-full bg-[#FFC400] text-[#062B4D] flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 fill-current" />
                </div>
                <span>+91 91544 57790</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center py-3 rounded-full bg-[#FFC400] text-[#062B4D] font-black text-xs uppercase tracking-wider"
              >
                Book A Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
