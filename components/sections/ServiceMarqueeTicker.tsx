"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface ServiceMarqueeTickerProps {
  items?: string[];
}

const defaultTickerItems = [
  "Performance Marketing",
  "Google Ads PMax",
  "Meta Advantage+",
  "Generative Engine Optimization (GEO)",
  "Next.js 15 Web Systems",
  "Autonomous AI Agents",
  "Shopify Plus Storefronts",
  "App Store Optimization (ASO)",
  "Figma Design Systems",
];

export default function ServiceMarqueeTicker({ items = defaultTickerItems }: ServiceMarqueeTickerProps) {
  const tickerContent = [...items, ...items, ...items];

  return (
    <div className="w-full bg-slate-900 border-y border-slate-800 py-3.5 overflow-hidden my-8 relative">
      <div className="flex w-full whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex items-center gap-8 shrink-0"
        >
          {tickerContent.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 shrink-0">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-slate-200">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
