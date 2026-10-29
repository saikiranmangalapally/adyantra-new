"use client";

import React from "react";
import Link from "next/link";

export default function AdvantaBlog() {
  const posts = [
    {
      id: "ai-lead-followups",
      image: "/assets/digiplus/slider5-672x448.jpg",
      date: "Oct 24, 2026",
      author: "Sanjay Kumar",
      category: "AI & Automation",
      title: "How Autonomous AI Agents Are Revolutionizing Lead Follow-Ups",
      excerpt:
        "Discover how machine learning workflows and WhatsApp CRM bots eliminate response delays, qualify prospects, and double conversion rates.",
      link: "/blog/future-of-ai-in-digital-marketing",
    },
    {
      id: "web-dev-essentials",
      image: "/assets/digiplus/project5-672x448.jpg",
      date: "Oct 18, 2026",
      author: "Priya Sharma",
      category: "Web Software",
      title: "Web Development Essentials Every Modern Business Needs",
      excerpt:
        "Why monolithic websites bleed conversions and how Next.js server components deliver 100/100 Core Web Vitals and organic search dominance.",
      link: "/blog/design-systems-scale",
    },
    {
      id: "google-meta-roas",
      image: "/assets/digiplus/project4-672x448.jpg",
      date: "Oct 10, 2026",
      author: "Adyantra Growth Team",
      category: "Performance Ads",
      title: "Effective Strategies to Maximize ROI on Google & Meta Ads",
      excerpt:
        "Stop burning ad budget. Learn our battle-tested methods for server-side CAPI tracking, negative keyword mining, and high-ROAS scaling.",
      link: "/blog/maximize-roi-google-ads",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-[#fbfbfc] relative overflow-hidden border-t border-gray-100">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching Digiplus Layout 4 Section 17 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-4">
              <span>FROM THE BLOG</span>
              <span className="w-10 h-[2px] bg-[#f5a623]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#111216] font-heading leading-tight tracking-tight">
              News &amp; Articles
            </h2>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm lg:ml-auto">
              Insights, strategies, and engineering playbooks from our senior performance marketers and AI automation specialists.
            </p>
          </div>
        </div>

        {/* 3 Blog Cards Grid matching Digiplus layout4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-[28px] overflow-hidden border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Date Badge */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Date Pill in Top Left */}
                <div className="absolute top-4 left-4 bg-[#111216] text-white px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-md">
                  {post.date}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Meta: Author & Category */}
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-semibold mb-3">
                    <span className="text-[#f5a623]">{post.category}</span>
                    <span>•</span>
                    <span>By {post.author}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-black font-heading text-[#111216] mb-3 leading-snug group-hover:text-[#f5a623] transition-colors">
                    <Link href={post.link}>{post.title}</Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={post.link}
                    className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-black uppercase tracking-wider text-[#111216] group-hover:text-[#f5a623] transition-colors"
                  >
                    <span>Read More</span>
                    <span className="text-base font-bold transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>

                  <span className="text-xs text-gray-400 font-medium">5 min read</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
