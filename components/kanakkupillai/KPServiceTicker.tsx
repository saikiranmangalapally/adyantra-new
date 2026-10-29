"use client";

import React from "react";
import Link from "next/link";
import {
  TrendingUp,
  Search,
  MessageSquare,
  Bot,
  Layers,
  Code2,
  Workflow,
  Sparkles
} from "lucide-react";

export default function KPServiceTicker() {
  const tickerItems = [
    { name: "Performance Marketing", href: "/performance-marketing" },
    { name: "Technical SEO", href: "/seo" },
    { name: "Autonomous AI Agents", href: "/ai-agent-development" },
    { name: "WhatsApp Cloud CRM", href: "/whatsapp-crm" },
    { name: "Next.js Web Applications", href: "/web-software-development" },
    { name: "Meta & Instagram Ads", href: "/social-media-marketing" },
    { name: "E-Commerce Growth", href: "/ecommerce-marketing" },
    { name: "AI Lead Qualification", href: "/lead-generation" },
    { name: "Zapier & n8n Workflows", href: "/zapier-make-n8n" },
    { name: "Server-Side Attribution", href: "/analytics-reporting" },
    { name: "AI Video Marketing", href: "/ai-video-marketing" },
    { name: "AI Stack Integration", href: "/ai-stack-integration" },
  ];

  return (
    <div className="w-full bg-white border-y border-[#e4e4e4] py-3.5 overflow-hidden font-sans">
      <div className="flex items-center space-x-6 whitespace-nowrap animate-marquee">
        {tickerItems.concat(tickerItems).map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4f7f9] border border-[#e4e4e4] text-xs font-medium text-[#1e3238] hover:text-[#156bb2] hover:border-[#156bb2] transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7ebe47]"></span>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
