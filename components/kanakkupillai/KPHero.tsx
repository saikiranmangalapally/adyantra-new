"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Star,
  Search,
  ArrowRight,
  Gift,
  Bot,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";

export default function KPHero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Complete 23 Services & Blueprints from adyantra.in
  const allServices = [
    { title: "Performance Marketing", category: "Performance & Search", href: "/performance-marketing" },
    { title: "SEO & Search Visibility", category: "Performance & Search", href: "/seo" },
    { title: "Meta & Social Ads", category: "Performance & Search", href: "/social-media-marketing" },
    { title: "AI Content & Automation", category: "Performance & Search", href: "/ai-content-automation" },
    { title: "Marketing Automation", category: "Performance & Search", href: "/marketing-automation" },
    { title: "Web Design & Development", category: "Development & Channels", href: "/web-design-development" },
    { title: "E-commerce Marketing", category: "Development & Channels", href: "/ecommerce-marketing" },
    { title: "AI Video Marketing", category: "Development & Channels", href: "/ai-video-marketing" },
    { title: "Influencer & Affiliate", category: "Development & Channels", href: "/influencer-marketing" },
    { title: "Analytics & Reporting", category: "Development & Channels", href: "/analytics-reporting" },
    { title: "Lead Generation", category: "AI Automation Systems", href: "/lead-generation" },
    { title: "Sales Follow-up", category: "AI Automation Systems", href: "/sales-follow-up" },
    { title: "CRM Automation", category: "AI Automation Systems", href: "/crm-automation" },
    { title: "Content Automation", category: "AI Automation Systems", href: "/content-automation" },
    { title: "Ad Creative Automation", category: "AI Automation Systems", href: "/ad-creative-automation" },
    { title: "Customer Support", category: "AI Automation Systems", href: "/customer-support" },
    { title: "WhatsApp + CRM Bots", category: "AI Automation Systems", href: "/whatsapp-crm" },
    { title: "AI System Design", category: "AI Architecture & Consulting", href: "/ai-system-design" },
    { title: "Workflow Architecture", category: "AI Architecture & Consulting", href: "/workflow-architecture" },
    { title: "Autonomous AI Agents", category: "AI Architecture & Consulting", href: "/ai-agent-development" },
    { title: "AI Stack & API Integration", category: "AI Architecture & Consulting", href: "/ai-stack-integration" },
    { title: "Zapier / Make / n8n Pipelines", category: "AI Architecture & Consulting", href: "/zapier-make-n8n" },
    { title: "AI Audit & Strategy Roadmap", category: "AI Architecture & Consulting", href: "/ai-audit-strategy" },
  ];

  const quickPills = [
    { label: "Performance Marketing", href: "/performance-marketing" },
    { label: "SEO & Visibility", href: "/seo" },
    { label: "Web Design & Dev", href: "/web-design-development" },
    { label: "WhatsApp + CRM Bots", href: "/whatsapp-crm" },
    { label: "Autonomous AI Agents", href: "/ai-agent-development" },
  ];

  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return allServices.filter(
      (s) =>
        s.title.toLowerCase().includes(q) || s.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <>
      {/* ── Main Hero Section with Exact Recommended Gradient #062D51 → #0A3D6A → #0D4775 ── */}
      <section
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(34, 116, 184, 0.18), transparent 55%), linear-gradient(135deg, #062D51 0%, #0A3D6A 55%, #0D4775 100%)",
        }}
        className="relative w-full text-[#FFFFFF] pt-12 pb-14 lg:pt-14 lg:pb-16 overflow-hidden border-b border-[#315E80]"
      >
        {/* Subtle Decorative Background 3D Elements */}
        <div className="hidden lg:block absolute left-4 xl:left-12 top-1/3 -translate-y-1/2 w-48 h-48 pointer-events-none select-none opacity-25">
          <svg viewBox="0 0 160 160" className="w-full h-full fill-[#0D416D] stroke-[#315E80]" strokeWidth="1.5">
            <polygon points="80,20 140,55 80,90 20,55" fill="#124E7E" opacity="0.6" />
            <polygon points="20,55 80,90 80,140 20,105" fill="#0D416D" opacity="0.8" />
            <polygon points="140,55 80,90 80,140 140,105" fill="#062D51" opacity="0.9" />
            <circle cx="80" cy="55" r="14" fill="none" stroke="#A9C7E4" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="hidden lg:block absolute right-4 xl:right-12 bottom-1/4 w-52 h-52 pointer-events-none select-none opacity-25">
          <svg viewBox="0 0 160 160" className="w-full h-full fill-[#0D416D] stroke-[#315E80]" strokeWidth="1.5">
            <polygon points="80,20 140,55 80,90 20,55" fill="#124E7E" opacity="0.6" />
            <polygon points="20,55 80,90 80,140 20,105" fill="#0D416D" opacity="0.8" />
            <polygon points="140,55 80,90 80,140 140,105" fill="#062D51" opacity="0.9" />
            <polygon points="80,42 92,68 80,60 68,68" fill="#FFC400" opacity="0.8" stroke="none" />
          </svg>
        </div>

        {/* Floating Digital Marketing & AI Automation Badges in #0D416D & #315E80 */}
        <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D416D]/90 border border-[#315E80] text-white backdrop-blur-md shadow-xl absolute left-8 xl:left-14 top-16 pointer-events-none select-none z-10 animate-pulse">
          <div className="w-6 h-6 rounded-full bg-[#173F62] text-[#FFC400] flex items-center justify-center">
            <Bot className="w-3.5 h-3.5 stroke-[2.4]" />
          </div>
          <span className="text-xs font-medium font-sans tracking-wide text-white">AI Automation</span>
        </div>

        <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D416D]/90 border border-[#315E80] text-white backdrop-blur-md shadow-xl absolute right-8 xl:right-16 top-20 pointer-events-none select-none z-10">
          <div className="w-6 h-6 rounded-full bg-[#FFC400] text-[#0B0F19] flex items-center justify-center">
            <TrendingUp className="w-3.5 h-3.5 stroke-[2.4]" />
          </div>
          <span className="text-xs font-medium font-sans tracking-wide text-white">High-ROAS Media</span>
        </div>

        <div className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D416D]/90 border border-[#315E80] text-white backdrop-blur-md shadow-xl absolute left-6 2xl:left-12 top-1/2 pointer-events-none select-none z-10">
          <div className="w-6 h-6 rounded-full bg-[#173F62] text-[#A9C7E4] flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 stroke-[2.4]" />
          </div>
          <span className="text-xs font-medium font-sans tracking-wide text-white">Technical SEO</span>
        </div>

        <div className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D416D]/90 border border-[#315E80] text-white backdrop-blur-md shadow-xl absolute right-6 2xl:right-12 top-1/2 pointer-events-none select-none z-10 animate-pulse">
          <div className="w-6 h-6 rounded-full bg-[#1AB26E] text-white flex items-center justify-center">
            <Workflow className="w-3.5 h-3.5 stroke-[2.4]" />
          </div>
          <span className="text-xs font-medium font-sans tracking-wide text-white">WhatsApp Cloud CRM</span>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">

          {/* ── Brand Trust & Authority Header Badge ── */}
          <div className="inline-flex items-center gap-2.5 sm:gap-3.5 mb-7 px-4.5 sm:px-6 py-2 rounded-full bg-[#0D416D]/90 border border-[#315E80] backdrop-blur-md shadow-lg group hover:border-[#FFC400] transition-all">
            <span className="flex h-2.5 w-2.5 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1AB26E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1AB26E]"></span>
            </span>
            <span className="text-xs sm:text-[13.5px] font-medium text-white font-sans tracking-wide">
              <span className="text-[#FFC400] font-semibold">India&apos;s Trusted Digital Growth &amp; AI Partner</span>
              <span className="mx-2 text-[#315E80]">•</span>
              <span className="text-[#A9C7E4]">Delivering Proven Scale &amp; Automation for 500+ Businesses</span>
            </span>
          </div>

          {/* ── Main Headline: Pure White #FFFFFF with Golden Yellow #FFC400 Accent ── */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-medium !text-white leading-[1.12] tracking-tight font-sans max-w-4xl mx-auto" style={{ color: "#FFFFFF" }}>
            Accelerate Your Brand with <br className="hidden sm:inline" />
            Performance–Driven AI-Automations &amp;{" "}
            <span className="text-[#FFC400]">Digital Marketing Services.</span>
          </h1>

          {/* Subtitle in Soft Ice Blue #A9C7E4 */}
          <p className="mt-5 text-base sm:text-lg lg:text-[19px] text-[#A9C7E4] leading-relaxed max-w-2xl mx-auto font-normal font-sans">
            We engineer high-performance digital marketing ecosystems and AI automations to scale brands profitably. Backed by senior developers and growth architects.
          </p>

          {/* ── Large Centered Search Bar: Pure White #FFFFFF Background & #0B0F19 Text ── */}
          <div className="mt-9 max-w-3xl mx-auto relative z-20">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 250)}
                placeholder="Search services: Meta Ads, SEO, AI Chatbots, Next.js..."
                className="w-full bg-[#FFFFFF] text-[#0B0F19] placeholder-[#0B0F19]/50 border-none rounded-full py-4 sm:py-5 pl-7 pr-16 text-sm sm:text-base font-normal shadow-[0_12px_35px_rgba(0,0,0,0.25)] focus:outline-none focus:ring-2 focus:ring-[#FFC400] transition-all font-sans"
              />

              <button
                type="button"
                aria-label="Search"
                className="absolute right-2 sm:right-2.5 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0B0F19] hover:bg-[#FFC400] text-white hover:text-[#0B0F19] flex items-center justify-center transition-all duration-200 shadow-md cursor-pointer shrink-0"
              >
                <Search className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Interactive Search Results Dropdown in Card Palette #0D416D */}
            {isSearchFocused && searchQuery.trim() && (
              <div className="absolute top-full left-0 right-0 mt-3 bg-[#0D416D] border border-[#315E80] rounded-2xl p-3 shadow-2xl text-left z-30 overflow-hidden font-sans">
                <div className="px-3 py-1.5 text-[11px] font-semibold text-[#FFC400] uppercase tracking-wider font-sans">
                  Matching Solutions ({filteredServices.length})
                </div>
                {filteredServices.length > 0 ? (
                  <div className="space-y-1 mt-1">
                    {filteredServices.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-[#124E7E] text-white transition text-sm group"
                      >
                        <div>
                          <p className="font-medium text-white group-hover:text-[#FFC400] transition-colors font-sans">
                            {item.title}
                          </p>
                          <p className="text-xs text-[#A9C7E4]">
                            Category: {item.category}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#A9C7E4] group-hover:text-[#FFC400] group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-3 text-sm text-[#A9C7E4] font-sans">
                    No exact match found. Connect with our architects for custom AI solutions.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ── Quick Filter Pill Badges: #0D416D with #315E80 Border ── */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 relative z-10">
            {quickPills.map((pill, idx) => (
              <Link
                key={idx}
                href={pill.href}
                className="px-4 sm:px-5 py-2 rounded-full border border-[#315E80] bg-[#0D416D]/80 hover:bg-[#FFC400] hover:text-[#0B0F19] hover:border-[#FFC400] text-xs sm:text-[13px] font-medium text-white transition-all duration-200 backdrop-blur-sm shadow-sm font-sans"
              >
                {pill.label}
              </Link>
            ))}
          </div>

          {/* ── Action Buttons ── */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0B0F19] hover:bg-[#FFC400] text-white hover:text-[#0B0F19] font-medium text-sm sm:text-base tracking-wide transition-all shadow-lg hover:-translate-y-0.5 group cursor-pointer font-sans"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            <Link
              href="/#services"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#174D78] hover:bg-[#1e5887] text-[#FFFFFF] font-medium text-sm sm:text-base tracking-wide transition-all shadow-md group cursor-pointer border border-[#477397] font-sans"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

        </div>

      </section>
    </>
  );
}
