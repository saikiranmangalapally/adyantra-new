"use client";

import React from "react";
import { ArrowRight, Clock } from "lucide-react";

export default function ExactNews() {
  const articles = [
    {
      title: "Web Development Essentials Every Business Needs in 2026",
      desc: "Discover key principles for speed, accessibility, and high conversion on modern web platforms.",
      date: "Oct 24, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "How AI is Revolutionizing Web Development & Conversion",
      desc: "From autonomous agents to dynamic personalization, see how AI boosts sales velocity.",
      date: "Oct 18, 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Effective Paid Ads & Performance Marketing Strategies",
      desc: "A breakdown of high-ROAS creative testing frameworks on Meta Advantage+ and Google PMax.",
      date: "Oct 12, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
    },
  ];

  return (
    <section id="blog" className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#FF5B26]">
              NEWS & ARTICLES
            </span>
            <span className="w-16 h-[2px] bg-[#FF5B26]"></span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
            Latest Digital Insights & <br />
            <span className="text-[#0D3B66]">Growth Playbooks</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[28px] overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="h-52 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-bold mb-3">
                    <span>{item.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {item.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-[#FF5B26] transition leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                <a
                  href="#contact"
                  className="text-xs font-bold text-[#FF5B26] hover:underline flex items-center gap-1.5"
                >
                  <span>Read Full Article</span>
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
