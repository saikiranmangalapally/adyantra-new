"use client";

import React from "react";
import Link from "next/link";

export interface ScrollingServiceItem {
  id: string;
  title: string;
  tag: string;
  tagType: "emerald" | "coral" | "violet" | "amber" | "sky";
  href: string;
  iconType: "search" | "social" | "bot" | "ppc" | "web" | "email" | "crm" | "cart" | "pr" | "leads" | "affiliate" | "analytics";
}

const scrollingServices: ScrollingServiceItem[] = [
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    tag: "★ Organic #1",
    tagType: "emerald",
    href: "/digital-marketing-growth#seo",
    iconType: "search",
  },
  {
    id: "meta-ads",
    title: "Meta & Social Paid Ads",
    tag: "4.8x ROAS",
    tagType: "coral",
    href: "/digital-marketing-growth#meta-ads",
    iconType: "social",
  },
  {
    id: "ai-chatbots",
    title: "AI Workflows & Chatbot Systems",
    tag: "< 1.8s Response",
    tagType: "violet",
    href: "/ai-automation#chatbots",
    iconType: "bot",
  },
  {
    id: "google-ppc",
    title: "Google Ads & PPC Performance",
    tag: "+410% Target ROAS",
    tagType: "coral",
    href: "/digital-marketing-growth#google-ads",
    iconType: "ppc",
  },
  {
    id: "web-dev",
    title: "Web Software & App Development",
    tag: "100/100 Lighthouse",
    tagType: "emerald",
    href: "/web-software-development",
    iconType: "web",
  },
  {
    id: "email-nurture",
    title: "Email & Lead Nurturing Flows",
    tag: "68% Open Rate",
    tagType: "amber",
    href: "/ai-automation#workflows",
    iconType: "email",
  },
  {
    id: "crm-auto",
    title: "CRM & Pipeline Automation",
    tag: "0s Webhook Sync",
    tagType: "violet",
    href: "/crm-automation",
    iconType: "crm",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Growth & Storefronts",
    tag: "+38.5% Recovery",
    tagType: "coral",
    href: "/digital-marketing-growth#ecommerce",
    iconType: "cart",
  },
  {
    id: "pr-reputation",
    title: "PR & Online Reputation Management",
    tag: "Tier-1 Forbes / Bloomberg",
    tagType: "violet",
    href: "/digital-marketing-growth#influencer",
    iconType: "pr",
  },
  {
    id: "lead-gen",
    title: "Autonomous Lead Generation",
    tag: "< 5s Contact",
    tagType: "emerald",
    href: "/lead-generation",
    iconType: "leads",
  },
  {
    id: "affiliate",
    title: "Affiliate & Partner Marketing",
    tag: "+180% Referral",
    tagType: "amber",
    href: "/affiliate-marketing",
    iconType: "affiliate",
  },
  {
    id: "analytics",
    title: "Server-Side Tracking & Meta CAPI",
    tag: "99.4% Attribution",
    tagType: "sky",
    href: "/analytics-reporting",
    iconType: "analytics",
  },
];

function ServiceIcon({ type }: { type: ScrollingServiceItem["iconType"] }) {
  switch (type) {
    case "search":
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7b4bf7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      );
    case "social":
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case "bot":
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7b4bf7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8V4H8" />
          <rect width="16" height="12" x="4" y="8" rx="2" />
          <path d="M2 14h2" />
          <path d="M20 14h2" />
          <path d="M15 13v2" />
          <path d="M9 13v2" />
        </svg>
      );
    case "ppc":
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
          <path d="m13 13 6 6" />
        </svg>
      );
    case "web":
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "email":
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case "crm":
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7b4bf7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case "cart":
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      );
    case "pr":
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7b4bf7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "leads":
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "affiliate":
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "analytics":
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      );
  }
}

export default function ServicesScrollingBar({ className = "" }: { className?: string }) {
  const iconBgStyles: Record<ScrollingServiceItem["tagType"], string> = {
    emerald: "bg-emerald-50",
    coral: "bg-rose-50",
    violet: "bg-purple-50",
    amber: "bg-amber-50",
    sky: "bg-sky-50",
  };

  return (
    <section 
      className={`ady-services-scroll-bar relative z-20 bg-white border-y border-slate-200/80 py-3.5 sm:py-4 overflow-hidden ${className}`}
      aria-label="Services Scrolling Ticker"
    >
      {/* Subtle edge fades for modern aesthetic */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

      <div className="ady-services-ticker-track flex items-center">
        {/* Set 1 */}
        <div className="flex items-center gap-3 shrink-0 ady-services-marquee-anim">
          {scrollingServices.map((service, idx) => (
            <Link
              key={`s1-${idx}-${service.id}`}
              href={service.href}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200/90 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_6px_16px_-4px_rgba(123,75,247,0.15)] hover:border-[#7b4bf7]/50 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${iconBgStyles[service.tagType]}`}>
                <ServiceIcon type={service.iconType} />
              </span>
              <span className="font-semibold text-xs sm:text-[13.5px] text-slate-800 tracking-tight whitespace-nowrap font-sans group-hover:text-[#7b4bf7] transition-colors pr-1">
                {service.title}
              </span>
            </Link>
          ))}
        </div>

        {/* Set 2 (Duplicate for smooth infinite seamless loop) */}
        <div className="flex items-center gap-3 shrink-0 ady-services-marquee-anim" aria-hidden="true">
          {scrollingServices.map((service, idx) => (
            <Link
              key={`s2-${idx}-${service.id}`}
              href={service.href}
              tabIndex={-1}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200/90 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_6px_16px_-4px_rgba(123,75,247,0.15)] hover:border-[#7b4bf7]/50 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${iconBgStyles[service.tagType]}`}>
                <ServiceIcon type={service.iconType} />
              </span>
              <span className="font-semibold text-xs sm:text-[13.5px] text-slate-800 tracking-tight whitespace-nowrap font-sans group-hover:text-[#7b4bf7] transition-colors pr-1">
                {service.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
