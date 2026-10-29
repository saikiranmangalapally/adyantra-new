"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function DigiplusHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "HOME", href: "#hero" },
    { label: "SERVICES", href: "#services" },
    { label: "ABOUT", href: "#about" },
    { label: "PILLARS", href: "#pillars" },
    { label: "PROCESS", href: "#process" },
    { label: "REVIEWS", href: "#reviews" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#faf6f0]/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 grid grid-cols-2 gap-1 p-1.5 rounded-lg bg-[#f5a623]">
              <span className="bg-[#0e0f14] rounded-sm"></span>
              <span className="bg-white rounded-sm"></span>
              <span className="bg-white rounded-sm"></span>
              <span className="bg-[#0e0f14] rounded-sm"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-[#111216] font-heading leading-none">
                Adyantra<span className="text-[#f5a623]">.</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest font-bold text-[#666c77] mt-0.5">
                Digital Agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-xs font-black uppercase tracking-wider text-[#111216] hover:text-[#f5a623] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Call Anytime & Hamburger */}
          <div className="flex items-center gap-6">
            <a
              href="tel:+918309275093"
              className="flex items-center gap-3.5 group text-left"
            >
              <div className="w-12 h-12 rounded-full bg-[#f5a623] text-[#0e0f14] flex items-center justify-center group-hover:scale-105 transition-transform shadow-md flex-shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-[#666c77] font-bold">
                  Call Anytime
                </span>
                <span className="text-sm font-black text-[#111216] font-heading group-hover:text-[#f5a623] transition-colors whitespace-nowrap">
                  +91 83092 75093
                </span>
              </div>
            </a>

            {/* Hamburger Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 cursor-pointer text-[#111216]"
              aria-label="Toggle Navigation Menu"
            >
              <span className="w-7 h-[2.5px] bg-[#111216] rounded-full"></span>
              <span className="w-7 h-[2.5px] bg-[#111216] rounded-full"></span>
              <span className="w-5 h-[2.5px] bg-[#111216] rounded-full self-start"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="w-[300px] h-full bg-[#f7d693] p-8 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-black/10">
                <span className="text-xl font-black font-heading text-[#0e0f14]">
                  Adyantra<span className="text-[#f5a623]">.</span>
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#121316]"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-extrabold uppercase tracking-wider text-[#121316] hover:text-white py-2 border-b border-black/5"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-black/10 flex flex-col gap-4">
              <a
                href="tel:+918309275093"
                className="flex items-center gap-3 text-sm font-bold text-[#0e0f14]"
              >
                +91 83092 75093
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="dp-btn justify-center text-center"
              >
                <span>Get Free Audit</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
