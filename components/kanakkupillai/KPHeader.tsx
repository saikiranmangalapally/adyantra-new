"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

export default function KPHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full relative z-50 font-sans" id="siteHeader">
      {/* ── 1. Top Utility Bar in Deep Navy #12304A ── */}
      <div className="bg-[#12304A] text-white text-[14px] border-b border-[#DCE3EB]/20 py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Phone & Email */}
          <div className="flex items-center space-x-6 text-[#DCE3EB]">
            <a
              href="tel:+918309275093"
              className="flex items-center gap-1.5 hover:text-[#FFC400] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFC400]" />
              <span className="font-medium text-white font-sans">+91 83092 75093</span>
            </a>
            <a
              href="mailto:info@adyantra.in"
              className="flex items-center gap-1.5 hover:text-[#FFC400] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#FFC400]" />
              <span className="font-sans font-normal text-[#DCE3EB] hover:text-white">info@adyantra.in</span>
            </a>
          </div>

          {/* Right: WhatsApp Direct Link */}
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/918309275093?text=Hi%20Adyantra%20Team%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-medium text-[#FFC400] hover:underline font-sans flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-[#FFC400] animate-pulse" />
              <span>WhatsApp: +91 83092 75093</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── 2. Main Navigation Bar with Pure White #FFFFFF and Light Gray Border #DCE3EB ── */}
      <nav
        className={`w-full transition-all duration-300 relative ${
          scrolled
            ? "bg-[#FFFFFF]/95 backdrop-blur-md shadow-md py-3"
            : "bg-[#FFFFFF] py-3.5 sm:py-4 border-b border-[#DCE3EB]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="inline-flex items-center gap-2 group shrink-0" aria-label="Adyantra Digital Home">
            <img
              src="/assets/img/logo.svg"
              alt="Adyantra Digital"
              className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links in Deep Navy #12304A */}
          <div className="hidden lg:flex items-center space-x-7 font-sans">
            <Link
              href="/"
              className="text-[15.5px] font-medium text-[#12304A] hover:text-[#12304A] transition-colors font-sans"
            >
              Home
            </Link>

            {/* ── Mega Menu 1: Digital Marketing (Sharp corners, border mixes into header) ── */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("marketing")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 text-[15.5px] font-medium transition-colors py-2 cursor-pointer font-sans ${
                  activeDropdown === "marketing" ? "text-[#12304A] font-medium" : "text-[#12304A] hover:text-[#12304A]"
                }`}
              >
                <span>Digital Marketing</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "marketing" ? "rotate-180 text-[#12304A]" : "text-[#64748B]"}`} />
              </button>

              {activeDropdown === "marketing" && (
                <div className="absolute top-full left-0 w-[600px] -mt-px bg-[#FFFFFF] border border-[#DCE3EB] border-t-0 rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-7 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Column 1: Performance & Search */}
                    <div>
                      <h4 className="text-[14.5px] font-medium text-[#12304A] font-sans mb-3.5 pb-2 border-b border-[#DCE3EB]">
                        Performance &amp; Search
                      </h4>
                      <ul className="space-y-2.5 text-[13.5px]">
                        <li>
                          <Link href="/performance-marketing" className="text-[#64748B] hover:text-[#12304A] font-normal hover:font-medium transition-colors block py-0.5 font-sans">
                            Performance Marketing
                          </Link>
                        </li>
                        <li>
                          <Link href="/seo" className="text-[#64748B] hover:text-[#12304A] font-normal hover:font-medium transition-colors block py-0.5 font-sans">
                            SEO &amp; Search Visibility
                          </Link>
                        </li>
                        <li>
                          <Link href="/social-media-marketing" className="text-[#64748B] hover:text-[#12304A] font-normal hover:font-medium transition-colors block py-0.5 font-sans">
                            Meta &amp; Social Ads
                          </Link>
                        </li>
                        <li>
                          <Link href="/ai-content-automation" className="text-[#64748B] hover:text-[#12304A] font-normal hover:font-medium transition-colors block py-0.5 font-sans">
                            AI Content &amp; Automation
                          </Link>
                        </li>
                        <li>
                          <Link href="/marketing-automation" className="text-[#64748B] hover:text-[#12304A] font-normal hover:font-medium transition-colors block py-0.5 font-sans">
                            Marketing Automation
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2: Development & Channels */}
                    <div>
                      <h4 className="text-[14.5px] font-medium text-[#12304A] font-sans mb-3.5 pb-2 border-b border-[#DCE3EB]">
                        Development &amp; Channels
                      </h4>
                      <ul className="space-y-2.5 text-[13.5px]">
                        <li>
                          <Link href="/web-design-development" className="text-[#64748B] hover:text-[#12304A] font-normal hover:font-medium transition-colors block py-0.5 font-sans">
                            Web Design &amp; Development
                          </Link>
                        </li>
                        <li>
                          <Link href="/ecommerce-marketing" className="text-[#64748B] hover:text-[#12304A] font-normal hover:font-medium transition-colors block py-0.5 font-sans">
                            E-commerce Marketing
                          </Link>
                        </li>
                        <li>
                          <Link href="/ai-video-marketing" className="text-[#64748B] hover:text-[#12304A] font-normal hover:font-medium transition-colors block py-0.5 font-sans">
                            AI Video Marketing
                          </Link>
                        </li>
                        <li>
                          <Link href="/influencer-marketing" className="text-[#64748B] hover:text-[#12304A] font-normal hover:font-medium transition-colors block py-0.5 font-sans">
                            Influencer &amp; Affiliate
                          </Link>
                        </li>
                        <li>
                          <Link href="/analytics-reporting" className="text-[#64748B] hover:text-[#12304A] font-normal hover:font-medium transition-colors block py-0.5 font-sans">
                            Analytics &amp; Reporting
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ── Mega Menu 2: AI Automation (Sharp corners, border mixes into header) ── */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("ai")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 text-[15.5px] font-medium transition-colors py-2 cursor-pointer font-sans ${
                  activeDropdown === "ai" ? "text-[#12304A] font-medium" : "text-[#12304A] hover:text-[#12304A]"
                }`}
              >
                <span>AI &amp; Automation</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "ai" ? "rotate-180 text-[#12304A]" : "text-[#64748B]"}`} />
              </button>

              {activeDropdown === "ai" && (
                <div className="absolute top-full left-0 w-[600px] -mt-px bg-[#FFFFFF] border border-[#DCE3EB] border-t-0 rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-7 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Column 1: AI Automation Systems */}
                    <div>
                      <h4 className="text-[14.5px] font-medium text-[#12304A] font-sans mb-3.5 pb-2 border-b border-[#DCE3EB]">
                        AI Automation Systems
                      </h4>
                      <ul className="space-y-2.5 text-[13.5px]">
                        <li>
                          <Link href="/lead-generation" className="text-[#64748B] hover:text-[#12304A] font-normal hover:font-medium transition-colors block py-0.5 font-sans">
                            Lead Generation
                          </Link>
                        </li>
                        <li>
                          <Link href="/sales-follow-up" className="text-[#64748B] hover:text-[#12304A] font-normal hover:font-medium transition-colors block py-0.5 font-sans">
                            Sales Follow-up
                          </Link>
                        </li>
                        <li>
                          <Link href="/crm-automation" className="text-[#64748B] hover:text-[#12304A] font-normal hover:font-medium transition-colors block py-0.5 font-sans">
                            CRM Automation
                          </Link>
                        </li>
                        <li>
                          <Link href="/content-automation" className="text-[#64748B] hover:text-[#12304A] font-normal hover:font-medium transition-colors block py-0.5 font-sans">
                            Content Automation
                          </Link>
                        </li>
                        <li>
                          <Link href="/ad-creative-automation" className="text-[#64748B] hover:text-[#12304A] font-normal hover:font-medium transition-colors block py-0.5 font-sans">
                            Ad Creative Automation
                          </Link>
                        </li>
                        <li>
                          <Link href="/customer-support" className="text-[#64748B] hover:text-[#12304A] font-normal hover:font-medium transition-colors block py-0.5 font-sans">
                            Customer Support
                          </Link>
                        </li>
                        <li>
                          <Link href="/whatsapp-crm" className="text-[#64748B] hover:text-[#12304A] font-normal hover:font-medium transition-colors block py-0.5 font-sans">
                            WhatsApp + CRM Bots
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2: AI Architecture & Consulting */}
                    <div>
                      <h4 className="text-[14.5px] font-medium text-[#12304A] font-sans mb-3.5 pb-2 border-b border-[#DCE3EB]">
                        AI Architecture &amp; Consulting
                      </h4>
                      <ul className="space-y-2.5 text-[13.5px]">
                        <li>
                          <Link href="/ai-system-design" className="text-[#64748B] hover:text-[#12304A] font-normal hover:font-medium transition-colors block py-0.5 font-sans">
                            AI System Design
                          </Link>
                        </li>
                        <li>
                          <Link href="/workflow-architecture" className="text-[#64748B] hover:text-[#12304A] font-normal hover:font-medium transition-colors block py-0.5 font-sans">
                            Workflow Architecture
                          </Link>
                        </li>
                        <li>
                          <Link href="/ai-agent-development" className="text-[#64748B] hover:text-[#12304A] font-normal hover:font-medium transition-colors block py-0.5 font-sans">
                            Autonomous AI Agents
                          </Link>
                        </li>
                        <li>
                          <Link href="/ai-stack-integration" className="text-[#64748B] hover:text-[#12304A] font-normal hover:font-medium transition-colors block py-0.5 font-sans">
                            AI Stack &amp; API Integration
                          </Link>
                        </li>
                        <li>
                          <Link href="/zapier-make-n8n" className="text-[#64748B] hover:text-[#12304A] font-normal hover:font-medium transition-colors block py-0.5 font-sans">
                            Zapier / Make / n8n Pipelines
                          </Link>
                        </li>
                        <li>
                          <Link href="/ai-audit-strategy" className="text-[#64748B] hover:text-[#12304A] font-normal hover:font-medium transition-colors block py-0.5 font-sans">
                            AI Audit &amp; Strategy Roadmap
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about"
              className="text-[15.5px] font-medium text-[#12304A] hover:text-[#12304A] transition-colors font-sans"
            >
              About
            </Link>

            <Link
              href="/blog"
              className="text-[15.5px] font-medium text-[#12304A] hover:text-[#12304A] transition-colors font-sans"
            >
              Blog
            </Link>
          </div>

          {/* ── Right CTAs: Distinct Shape Bordered Pill Buttons ── */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Shape Button 1: Deep Navy #12304A */}
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#12304A] hover:bg-[#1a4469] text-white font-medium text-sm tracking-wide transition-all shadow-sm hover:shadow group cursor-pointer font-sans border border-[#12304A]"><Phone className="w-3.5 h-3.5 text-[#FFC400]" /><span className="font-medium">Contact Us</span></Link>

            
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <Link href="/contact" className="inline-flex items-center justify-center gap-1 px-3.5 py-1.5 rounded-full bg-[#12304A] text-white font-medium text-xs shadow-sm font-sans"><span className="font-medium">Contact Us</span></Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              type="button"
              className="p-2 text-[#12304A] rounded-lg hover:bg-[#F5F7FA]"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#FFFFFF] border-b border-[#DCE3EB] px-6 py-6 space-y-4 shadow-xl max-h-[80vh] overflow-y-auto">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block text-base font-medium text-[#12304A] font-sans"
            >
              Home
            </Link>

            {/* 1. Performance & Search */}
            <div className="space-y-1.5 pl-2 border-l-2 border-[#12304A]">
              <p className="text-xs font-medium uppercase text-[#12304A] font-sans tracking-wider">
                Performance &amp; Search
              </p>
              <Link href="/performance-marketing" onClick={() => setMobileOpen(false)} className="block text-sm text-[#64748B] py-0.5">
                Performance Marketing
              </Link>
              <Link href="/seo" onClick={() => setMobileOpen(false)} className="block text-sm text-[#64748B] py-0.5">
                SEO &amp; Search Visibility
              </Link>
              <Link href="/social-media-marketing" onClick={() => setMobileOpen(false)} className="block text-sm text-[#64748B] py-0.5">
                Meta &amp; Social Ads
              </Link>
              <Link href="/ai-content-automation" onClick={() => setMobileOpen(false)} className="block text-sm text-[#64748B] py-0.5">
                AI Content &amp; Automation
              </Link>
              <Link href="/marketing-automation" onClick={() => setMobileOpen(false)} className="block text-sm text-[#64748B] py-0.5">
                Marketing Automation
              </Link>
            </div>

            {/* 2. Development & Channels */}
            <div className="space-y-1.5 pl-2 border-l-2 border-[#12304A]">
              <p className="text-xs font-medium uppercase text-[#12304A] font-sans tracking-wider">
                Development &amp; Channels
              </p>
              <Link href="/web-design-development" onClick={() => setMobileOpen(false)} className="block text-sm text-[#64748B] py-0.5">
                Web Design &amp; Development
              </Link>
              <Link href="/ecommerce-marketing" onClick={() => setMobileOpen(false)} className="block text-sm text-[#64748B] py-0.5">
                E-commerce Marketing
              </Link>
              <Link href="/ai-video-marketing" onClick={() => setMobileOpen(false)} className="block text-sm text-[#64748B] py-0.5">
                AI Video Marketing
              </Link>
              <Link href="/influencer-marketing" onClick={() => setMobileOpen(false)} className="block text-sm text-[#64748B] py-0.5">
                Influencer &amp; Affiliate
              </Link>
              <Link href="/analytics-reporting" onClick={() => setMobileOpen(false)} className="block text-sm text-[#64748B] py-0.5">
                Analytics &amp; Reporting
              </Link>
            </div>

            {/* 3. AI Automation Systems */}
            <div className="space-y-1.5 pl-2 border-l-2 border-[#12304A]">
              <p className="text-xs font-medium uppercase text-[#12304A] font-sans tracking-wider">
                AI Automation Systems
              </p>
              <Link href="/lead-generation" onClick={() => setMobileOpen(false)} className="block text-sm text-[#64748B] py-0.5">
                Lead Generation
              </Link>
              <Link href="/sales-follow-up" onClick={() => setMobileOpen(false)} className="block text-sm text-[#64748B] py-0.5">
                Sales Follow-up
              </Link>
              <Link href="/crm-automation" onClick={() => setMobileOpen(false)} className="block text-sm text-[#64748B] py-0.5">
                CRM Automation
              </Link>
              <Link href="/content-automation" onClick={() => setMobileOpen(false)} className="block text-sm text-[#64748B] py-0.5">
                Content Automation
              </Link>
              <Link href="/ad-creative-automation" onClick={() => setMobileOpen(false)} className="block text-sm text-[#64748B] py-0.5">
                Ad Creative Automation
              </Link>
              <Link href="/customer-support" onClick={() => setMobileOpen(false)} className="block text-sm text-[#64748B] py-0.5">
                Customer Support
              </Link>
              <Link href="/whatsapp-crm" onClick={() => setMobileOpen(false)} className="block text-sm text-[#64748B] py-0.5">
                WhatsApp + CRM Bots
              </Link>
            </div>

            {/* 4. AI Architecture & Consulting */}
            <div className="space-y-1.5 pl-2 border-l-2 border-[#12304A]">
              <p className="text-xs font-medium uppercase text-[#12304A] font-sans tracking-wider">
                AI Architecture &amp; Consulting
              </p>
              <Link href="/ai-system-design" onClick={() => setMobileOpen(false)} className="block text-sm text-[#64748B] py-0.5">
                AI System Design
              </Link>
              <Link href="/workflow-architecture" onClick={() => setMobileOpen(false)} className="block text-sm text-[#64748B] py-0.5">
                Workflow Architecture
              </Link>
              <Link href="/ai-agent-development" onClick={() => setMobileOpen(false)} className="block text-sm text-[#64748B] py-0.5">
                Autonomous AI Agents
              </Link>
              <Link href="/ai-stack-integration" onClick={() => setMobileOpen(false)} className="block text-sm text-[#64748B] py-0.5">
                AI Stack &amp; API Integration
              </Link>
              <Link href="/zapier-make-n8n" onClick={() => setMobileOpen(false)} className="block text-sm text-[#64748B] py-0.5">
                Zapier / Make / n8n Pipelines
              </Link>
              <Link href="/ai-audit-strategy" onClick={() => setMobileOpen(false)} className="block text-sm text-[#64748B] py-0.5">
                AI Audit &amp; Strategy Roadmap
              </Link>
            </div>

            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block text-base font-medium text-[#12304A] font-sans"
            >
              About
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="block text-base font-medium text-[#12304A] font-sans"
            >
              Blog
            </Link>
            
            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#12304A] text-white font-medium text-sm shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#FFC400]" />
                <span className="font-medium">Contact Us</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
