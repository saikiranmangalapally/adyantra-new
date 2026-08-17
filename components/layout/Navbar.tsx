"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  ArrowRight,
  Phone,
  Mail,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const digitalMarketingMega = {
  col1: [
    { name: "AI Content & Automation", href: "/ai-content-automation" },
    { name: "Marketing Automation", href: "/marketing-automation" },
    { name: "Social Media Marketing", href: "/social-media-marketing" },
    { name: "SEO", href: "/seo" },
    { name: "AI Video Marketing", href: "/ai-video-marketing" },
  ],
  col2: [
    { name: "Influencer Marketing", href: "/influencer-marketing" },
    { name: "Affiliate Marketing", href: "/affiliate-marketing" },
    { name: "Analytics & Reporting", href: "/analytics-reporting" },
    { name: "Web Design & Development", href: "/web-design-development" },
    { name: "E-commerce Marketing", href: "/ecommerce-marketing" },
  ],
};

const aiAutomationMega = {
  systemsTitle: "AI Automation Systems",
  systems: [
    { name: "Lead Generation", href: "/lead-generation" },
    { name: "Sales Follow-up", href: "/sales-follow-up" },
    { name: "CRM Automation", href: "/crm-automation" },
    { name: "Content Automation", href: "/content-automation" },
    { name: "Ad Creative Automation", href: "/ad-creative-automation" },
    { name: "Customer Support", href: "/customer-support" },
    { name: "Appointment Booking", href: "/appointment-booking" },
    { name: "E-commerce Automation", href: "/ecommerce-automation" },
  ],
  architectureTitle: "AI Architecture & Consulting",
  architecture: [
    { name: "AI System Design", href: "/ai-system-design" },
    { name: "Workflow Architecture", href: "/workflow-architecture" },
    { name: "AI Agent Development", href: "/ai-agent-development" },
    { name: "AI Stack Integration", href: "/ai-stack-integration" },
    { name: "WhatsApp + CRM", href: "/whatsapp-crm" },
    { name: "Zapier / Make / n8n", href: "/zapier-make-n8n" },
    { name: "AI Audit & Strategy", href: "/ai-audit-strategy" },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"marketing" | "ai" | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<"marketing" | "ai" | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleMobileSubmenu = (menu: "marketing" | "ai") => {
    setMobileExpanded(mobileExpanded === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileExpanded(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* ── Top Contact Utility Bar ── */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800 hidden md:block">
        <div className="container mx-auto px-4 md:px-8 max-w-[1320px] flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+918309275093" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 font-medium">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>+91 83092 75093</span>
            </a>
            <a href="mailto:info@adyantra.in" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 font-medium hidden sm:flex">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>info@adyantra.in</span>
            </a>
          </div>

          <a
            href="https://wa.me/918309275093"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1.5 transition-colors"
          >
            <svg className="w-3.5 h-3.5 fill-current text-emerald-400" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>WhatsApp: +91 83092 75093</span>
          </a>
        </div>
      </div>

      {/* ── Main Navigation Bar ── */}
      <div
        className={`transition-all duration-500 relative z-40 ${
          scrolled || mobileMenuOpen
            ? "bg-white/95 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] py-3 border-b border-slate-100" 
            : "bg-white/60 backdrop-blur-md py-3.5 sm:py-4 border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-[1320px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0" onClick={closeMobileMenu}>
            <Image
              src="/assets/img/logo.svg"
              alt="Adyantra Brand Logo"
              width={110}
              height={28}
              className="w-24 sm:w-28 h-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-10 h-full">
            <Link href="/" className="text-[13px] font-extrabold text-secondary hover:text-primary transition-colors tracking-widest uppercase">
              Home
            </Link>

            {/* Digital Marketing Dropdown */}
            <div
              className="h-full flex items-center"
              onMouseEnter={() => setActiveDropdown("marketing")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/digital-marketing-growth"
                className={`flex items-center gap-1.5 text-[13px] font-extrabold tracking-widest uppercase transition-colors py-2 ${
                  activeDropdown === "marketing" ? "text-primary" : "text-secondary hover:text-primary"
                }`}
              >
                <span>Digital Marketing</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "marketing" ? "-rotate-180" : ""}`} />
              </Link>

              {/* Full-Width Mega Menu Panel */}
              <AnimatePresence>
                {activeDropdown === "marketing" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-3xl border-t border-slate-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] z-50"
                  >
                    <div className="container mx-auto px-4 md:px-8 max-w-[1320px] py-6">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                        {/* Title Section */}
                        <div className="col-span-1 border-r border-slate-100 pr-6">
                          <h3 className="text-base font-extrabold text-secondary mb-2 uppercase tracking-widest flex items-center gap-2">
                            <Zap className="w-4 h-4 text-primary" />
                            Digital Marketing
                          </h3>
                          <p className="text-xs text-slate-500 font-medium leading-relaxed mb-3">
                            Data-driven digital growth solutions to dominate search rankings, scale ad spend, and maximize ROI.
                          </p>
                          <Link 
                            href="/digital-marketing-growth" 
                            className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span>Overview Page</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                        
                        {/* Links Section (3 Columns to make it compact!) */}
                        <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-1">
                          <ul className="space-y-0.5">
                            {digitalMarketingMega.col1.slice(0, 3).map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="group flex items-center justify-between py-1.5 px-2.5 rounded-md hover:bg-primary/5 transition-colors"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="text-[13px] font-semibold text-slate-700 group-hover:text-primary transition-colors">{item.name}</span>
                                  <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </Link>
                              </li>
                            ))}
                          </ul>

                          <ul className="space-y-0.5">
                            {digitalMarketingMega.col1.slice(3).concat(digitalMarketingMega.col2.slice(0, 1)).map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="group flex items-center justify-between py-1.5 px-2.5 rounded-md hover:bg-primary/5 transition-colors"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="text-[13px] font-semibold text-slate-700 group-hover:text-primary transition-colors">{item.name}</span>
                                  <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </Link>
                              </li>
                            ))}
                          </ul>

                          <ul className="space-y-0.5">
                            {digitalMarketingMega.col2.slice(1).map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="group flex items-center justify-between py-1.5 px-2.5 rounded-md hover:bg-primary/5 transition-colors"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="text-[13px] font-semibold text-slate-700 group-hover:text-primary transition-colors">{item.name}</span>
                                  <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* AI Automation Dropdown */}
            <div
              className="h-full flex items-center"
              onMouseEnter={() => setActiveDropdown("ai")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/ai-automation"
                className={`flex items-center gap-1.5 text-[13px] font-extrabold tracking-widest uppercase transition-colors py-2 ${
                  activeDropdown === "ai" ? "text-cyan-600" : "text-secondary hover:text-cyan-600"
                }`}
              >
                <span>AI Automation</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "ai" ? "-rotate-180" : ""}`} />
              </Link>

              {/* Full-Width Mega Menu Panel */}
              <AnimatePresence>
                {activeDropdown === "ai" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-3xl border-t border-slate-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] z-50"
                  >
                    <div className="container mx-auto px-4 md:px-8 max-w-[1320px] py-6">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                        {/* Title Section */}
                        <div className="col-span-1 border-r border-slate-100 pr-6">
                          <h3 className="text-base font-extrabold text-secondary mb-2 uppercase tracking-widest flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-cyan-500" />
                            AI Automation
                          </h3>
                          <p className="text-xs text-slate-500 font-medium leading-relaxed mb-3">
                            Supercharge operations with intelligent AI workflows, agents, CRM sync, and automated support.
                          </p>
                          <Link 
                            href="/ai-automation" 
                            className="inline-flex items-center gap-1 text-xs font-bold text-cyan-600 hover:underline"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span>Overview Page</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                        
                        {/* Links Section */}
                        <div className="col-span-3 grid grid-cols-2 gap-x-8 gap-y-2">
                          {/* COLUMN 1: SYSTEMS */}
                          <div>
                            <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1.5 pl-2.5">
                              {aiAutomationMega.systemsTitle}
                            </h4>
                            <ul className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                              {aiAutomationMega.systems.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className="group flex items-center justify-between py-1 px-2 rounded-md hover:bg-cyan-50 transition-colors"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <span className="text-[12.5px] font-semibold text-slate-700 group-hover:text-cyan-600 transition-colors truncate">{item.name}</span>
                                    <ArrowRight className="w-3 h-3 text-cyan-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* COLUMN 2: ARCHITECTURE */}
                          <div>
                            <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1.5 pl-2.5">
                              {aiAutomationMega.architectureTitle}
                            </h4>
                            <ul className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                              {aiAutomationMega.architecture.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className="group flex items-center justify-between py-1 px-2 rounded-md hover:bg-cyan-50 transition-colors"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <span className="text-[12.5px] font-semibold text-slate-700 group-hover:text-cyan-600 transition-colors truncate">{item.name}</span>
                                    <ArrowRight className="w-3 h-3 text-cyan-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="text-[13px] font-extrabold text-secondary hover:text-primary transition-colors tracking-widest uppercase">
              About
            </Link>

            <Link href="/blog" className="text-[13px] font-extrabold text-secondary hover:text-primary transition-colors tracking-widest uppercase">
              Blog
            </Link>
          </nav>

          {/* Contact Action Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="shadcn-input-button-solid !min-w-0 !h-[46px] !pl-6 !pr-13 !text-xs"
            >
              <span>Get Started</span>
              <span className="badge-icon !size-8 !right-1">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-slate-100/90 text-secondary hover:bg-primary hover:text-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Enhanced Full-Screen Mobile Drawer ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="lg:hidden fixed inset-0 top-[60px] bg-slate-950/60 backdrop-blur-sm z-30"
            />

            {/* Mobile Drawer Panel */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="lg:hidden fixed inset-x-0 top-[60px] max-h-[calc(100vh-60px)] bg-white border-b border-slate-200 shadow-2xl overflow-y-auto z-40 flex flex-col"
            >
              <div className="p-5 space-y-3 flex-1">
                {/* Home */}
                <Link
                  href="/"
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl text-base font-bold text-secondary hover:bg-slate-50 transition-colors"
                  onClick={closeMobileMenu}
                >
                  <span>Home</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                {/* Digital Marketing Collapsible Menu */}
                <div className="rounded-2xl border border-slate-100 bg-slate-50/60 overflow-hidden">
                  <div className="flex items-center justify-between p-3">
                    <Link
                      href="/digital-marketing-growth"
                      className="text-base font-bold text-primary flex items-center gap-2"
                      onClick={closeMobileMenu}
                    >
                      <Zap className="w-4 h-4 text-primary" />
                      <span>Digital Marketing</span>
                    </Link>
                    <button
                      onClick={() => toggleMobileSubmenu("marketing")}
                      className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-primary transition-colors"
                      aria-label="Toggle Digital Marketing sub-services"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileExpanded === "marketing" ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence>
                    {mobileExpanded === "marketing" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-slate-200/70 bg-white px-3 py-2 space-y-1"
                      >
                        {[...digitalMarketingMega.col1, ...digitalMarketingMega.col2].map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-between py-2 px-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-primary hover:bg-primary/5 transition-colors"
                            onClick={closeMobileMenu}
                          >
                            <span>{item.name}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-primary/70" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* AI Automation Collapsible Menu */}
                <div className="rounded-2xl border border-cyan-100 bg-cyan-50/40 overflow-hidden">
                  <div className="flex items-center justify-between p-3">
                    <Link
                      href="/ai-automation"
                      className="text-base font-bold text-cyan-700 flex items-center gap-2"
                      onClick={closeMobileMenu}
                    >
                      <Sparkles className="w-4 h-4 text-cyan-600" />
                      <span>AI Automation</span>
                    </Link>
                    <button
                      onClick={() => toggleMobileSubmenu("ai")}
                      className="p-1.5 rounded-lg bg-white border border-cyan-200 text-slate-700 hover:text-cyan-600 transition-colors"
                      aria-label="Toggle AI Automation sub-services"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileExpanded === "ai" ? "rotate-180 text-cyan-600" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence>
                    {mobileExpanded === "ai" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-cyan-100 bg-white px-3 py-2 space-y-2"
                      >
                        <div>
                          <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider px-2 py-1">
                            {aiAutomationMega.systemsTitle}
                          </p>
                          {aiAutomationMega.systems.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-center justify-between py-1.5 px-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-cyan-600 hover:bg-cyan-50/60 transition-colors"
                              onClick={closeMobileMenu}
                            >
                              <span>{item.name}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-cyan-600/70" />
                            </Link>
                          ))}
                        </div>

                        <div className="pt-2 border-t border-slate-100">
                          <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider px-2 py-1">
                            {aiAutomationMega.architectureTitle}
                          </p>
                          {aiAutomationMega.architecture.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-center justify-between py-1.5 px-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-cyan-600 hover:bg-cyan-50/60 transition-colors"
                              onClick={closeMobileMenu}
                            >
                              <span>{item.name}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-cyan-600/70" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* About Us */}
                <Link
                  href="/about"
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl text-base font-bold text-secondary hover:bg-slate-50 transition-colors"
                  onClick={closeMobileMenu}
                >
                  <span>About Us</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                {/* Blog */}
                <Link
                  href="/blog"
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl text-base font-bold text-secondary hover:bg-slate-50 transition-colors"
                  onClick={closeMobileMenu}
                >
                  <span>Blog</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                {/* Quick Contact & Action Bar */}
                <div className="pt-4 border-t border-slate-100 space-y-2.5">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-between px-5 py-3.5 text-sm font-bold text-white bg-primary hover:bg-secondary rounded-2xl shadow-md transition-colors"
                    onClick={closeMobileMenu}
                  >
                    <span>Request Free Audit</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href="tel:+918309275093"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-primary" />
                      <span>Call Now</span>
                    </a>
                    <a
                      href="https://wa.me/918309275093"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 hover:bg-emerald-100 transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 fill-current text-emerald-600" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
