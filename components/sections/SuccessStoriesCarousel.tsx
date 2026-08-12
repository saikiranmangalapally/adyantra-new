"use client";

import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "@/lib/variants";
import { ArrowRight, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    client: "TechFlow Enterprise",
    industry: "B2B SaaS",
    title: "Automated Email Series for a SaaS Platform",
    metric: "+45%",
    metricLabel: "Customer Retention",
    desc: "We created an automated email marketing workflow that boosted customer retention and increased upgrades through personalized onboarding.",
    color: "from-blue-500/10 to-blue-600/10",
  },
  {
    client: "Urban Estates",
    industry: "Real Estate",
    title: "High-Intent Lead Generation via Meta Ads",
    metric: "3.2x",
    metricLabel: "ROAS Increase",
    desc: "Implemented a dynamic retargeting strategy combined with WhatsApp AI chatbots to capture and qualify premium property buyers instantly.",
    color: "from-emerald-500/10 to-emerald-600/10",
  },
  {
    client: "Lumina Health",
    industry: "Healthcare",
    title: "Local SEO & Reputation Management",
    metric: "+120%",
    metricLabel: "Organic Traffic",
    desc: "Optimized Google Business Profiles and localized content to dominate search rankings for specialized clinic services.",
    color: "from-purple-500/10 to-purple-600/10",
  },
  {
    client: "Aura Commerce",
    industry: "E-Commerce",
    title: "Google Performance Max Scaling",
    metric: "-30%",
    metricLabel: "Cost Per Acquisition",
    desc: "Leveraged advanced feed optimization and AI-driven bidding to scale daily ad spend profitably during peak seasonal sales.",
    color: "from-orange-500/10 to-orange-600/10",
  }
];

export default function SuccessStoriesCarousel() {
  return (
    <section className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-[1320px]">
        
        {/* Header */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <motion.div variants={slideUp} className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-4">
              Success Stories
            </motion.div>
            <motion.h2 
              variants={slideUp} 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary tracking-tight"
            >
              Brands that grew faster through smart strategies.
            </motion.h2>
          </div>
          <motion.div variants={slideUp} className="hidden md:block">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors group">
              View All Cases
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Carousel / Scroll Area */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {stories.map((story, i) => (
            <motion.div 
              variants={slideUp}
              key={i} 
              className="snap-start shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] flex flex-col bg-white rounded-3xl border border-border/60 overflow-hidden group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500"
            >
              {/* Top Visual / Metric Area */}
              <div className={`h-48 bg-gradient-to-br ${story.color} p-8 flex flex-col justify-between relative overflow-hidden`}>
                <div className="absolute top-0 right-0 p-8 opacity-10 mix-blend-multiply">
                  <TrendingUp className="w-32 h-32" />
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary/70 bg-white/50 backdrop-blur-md px-3 py-1 rounded-full">
                    {story.industry}
                  </span>
                </div>
                
                <div className="z-10">
                  <div className="text-4xl lg:text-5xl font-black text-secondary tracking-tighter mb-1">
                    {story.metric}
                  </div>
                  <div className="text-sm font-semibold text-secondary/80">
                    {story.metricLabel}
                  </div>
                </div>
              </div>
              
              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {story.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {story.desc}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/50">
                  <div className="font-semibold text-secondary text-sm">
                    {story.client}
                  </div>
                  <Link href="#" className="w-10 h-10 rounded-full bg-surface border border-border/50 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All */}
        <div className="mt-6 md:hidden flex justify-center">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors group">
            View All Cases
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
