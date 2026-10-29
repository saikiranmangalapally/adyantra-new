"use client";

import React from "react";
import { Target, Code2, Server, TrendingUp, Sparkles, Bot, ArrowRight } from "lucide-react";

export default function ExactPillars() {
  const pillars = [
    {
      number: "01",
      title: "Performance Media Engine",
      subtitle: "Paid Acquisition",
      metric: "4.8x Avg ROAS",
      desc: "Algorithmic bidding on Meta Advantage+, Google Performance Max, and LinkedIn B2B matched with high-velocity creative testing.",
      tags: ["Meta Ads", "Google Ads PMax", "Creative Testing", "Audience Segmentation"],
      icon: <Target className="w-6 h-6 text-[#FF5B26]" />,
    },
    {
      number: "02",
      title: "Next.js Web Architecture",
      subtitle: "Full-Stack Engineering",
      metric: "<0.8s LCP Speed",
      desc: "Sub-second load times using Next.js App Router, Tailwind CSS, and edge caching for unbeatable SEO and high checkout conversion.",
      tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Shopify Hydrogen"],
      icon: <Code2 className="w-6 h-6 text-[#1E40AF]" />,
    },
    {
      number: "03",
      title: "Server-Side CAPI Tracking",
      subtitle: "1st-Party Data",
      metric: "99.2% Attribution",
      desc: "First-party data infrastructure via Google Cloud sGTM and Meta Conversions API bypassing ad-blockers and iOS restrictions.",
      tags: ["Cloud sGTM", "Meta CAPI", "Google GA4", "Stape / AWS"],
      icon: <Server className="w-6 h-6 text-emerald-600" />,
    },
    {
      number: "04",
      title: "CRO & Funnel Engineering",
      subtitle: "Conversion Optimization",
      metric: "+42% Lift",
      desc: "Systematic A/B experimentation, heatmapping, friction audit, and psychological offer crafting to double visitor-to-lead ratios.",
      tags: ["Multivariate Tests", "Clarity Heatmaps", "Frictionless Forms", "Offer Stacking"],
      icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
    },
    {
      number: "05",
      title: "Creative & Visual Production",
      subtitle: "Content Strategy",
      metric: "120+ Assets/mo",
      desc: "Direct-response video hooks, 3D motion renders, and high-impact design suites engineered to halt the scroll and inspire action.",
      tags: ["Direct-Response Video", "3D Product CGI", "Motion Design", "Design Systems"],
      icon: <Sparkles className="w-6 h-6 text-purple-600" />,
    },
    {
      number: "06",
      title: "AI Workflows & Automations",
      subtitle: "Agentic Systems",
      metric: "-65% Overhead",
      desc: "Custom RAG knowledge copilots, WhatsApp conversational checkout bots, and autonomous CRM routing that work 24/7.",
      tags: ["RAG Copilots", "WhatsApp API", "Make / n8n Pipelines", "Automated Lead Scoring"],
      icon: <Bot className="w-6 h-6 text-rose-600" />,
    },
  ];

  return (
    <section id="pillars" className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#FF5B26]">
            OUR TECHNICAL PILLARS
          </span>
          <span className="w-16 h-[2px] bg-[#FF5B26]"></span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
            Engineering Precision Behind <br />
            Every Growth Campaign
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item) => (
            <div
              key={item.number}
              className="bg-[#F8FAFC] rounded-[28px] p-8 border border-slate-200/80 hover:border-[#FF5B26]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-300 group-hover:text-[#FF5B26] transition-colors">
                    {item.number}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-[#0D3B66] transition">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-xs font-black text-[#FF5B26]">{item.metric}</span>
                <a
                  href="#contact"
                  className="text-xs font-bold text-slate-700 hover:text-[#FF5B26] flex items-center gap-1 transition"
                >
                  <span>Explore Stack</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
