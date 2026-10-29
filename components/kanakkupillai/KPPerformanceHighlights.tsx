"use client";

import React from "react";
import Link from "next/link";
import {
  TrendingUp,
  Search,
  Code2,
  MessageSquare,
  Bot,
  ArrowRight,
  Sparkles,
  Zap
} from "lucide-react";

export default function KPPerformanceHighlights() {
  const highlights = [
    {
      icon: TrendingUp,
      title: "Meta Ads & Social Media",
      tag: "High ROAS",
      color: "#156bb2",
      bgColor: "#eaf3fa",
      desc: "Dynamic creative optimization, first-party audience cohorts, and server-side CAPI tracking to scale customer acquisition.",
      stat: "Proven ROAS Lift",
      href: "/social-media-marketing",
    },
    {
      icon: Search,
      title: "Google Ads & PMax",
      tag: "High Intent",
      color: "#7ebe47",
      bgColor: "#edf7e4",
      desc: "Intent-driven Search and Performance Max campaigns with precision negative keyword filters and smart value bidding.",
      stat: "62% Lower CAC",
      href: "/performance-marketing",
    },
    {
      icon: Code2,
      title: "Next.js Web Applications",
      tag: "Sub-Second Load",
      color: "#1e3238",
      bgColor: "#eceff1",
      desc: "Modern headless React and Next.js engineering built for speed, SEO authority, and zero-friction conversion checkout.",
      stat: "99+ Lighthouse",
      href: "/web-software-development",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp & CRM Systems",
      tag: "Sub-15s Latency",
      color: "#fd961e",
      bgColor: "#fef3e7",
      desc: "Official WhatsApp Cloud API connected to HubSpot, Zoho, or Salesforce with instant 24/7 lead qualification and booking.",
      stat: "3.5x Booked Calls",
      href: "/whatsapp-crm",
    },
  ];

  return (
    <section className="w-full py-16 bg-white border-b border-[#e4e4e4] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-medium uppercase tracking-wider text-[#156bb2] bg-[#eaf3fa] px-3.5 py-1.5 rounded-full inline-block mb-3">
            Core Performance Engines
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1e3238] tracking-tight">
            Engineered Systems For Predictable Revenue Growth
          </h2>
          <p className="text-sm sm:text-base text-[#555b6d] mt-3">
            We don’t rely on superficial metrics. Every channel we build is connected directly to your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-xl border border-[#e4e4e4] p-6 hover:shadow-[0_12px_30px_rgba(21,107,178,0.12)] hover:border-[#156bb2] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-200"
                      style={{ backgroundColor: item.bgColor, color: item.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: item.bgColor, color: item.color }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-medium text-[#1e3238] group-hover:text-[#156bb2] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555b6d] mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#eceff1] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#1e3238] bg-[#f4f7f9] px-2.5 py-1 rounded">
                    {item.stat}
                  </span>
                  <Link
                    href={item.href}
                    className="text-xs font-medium text-[#156bb2] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
