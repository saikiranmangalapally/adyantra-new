"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Search,
  Mail,
  Megaphone,
  Sparkles,
  Users,
  Route,
  TrendingUp,
  Star,
  Bot,
} from "lucide-react";
import { slideUp, staggerContainer } from "@/lib/variants";

/* ── INPUT / OUTPUT NODE DATA ── */

const inputNodes = [
  {
    icon: Search,
    title: "SEO & Organic",
    subtitle: "Rank & Attract",
    color: "#6A47ED",
    bgColor: "rgba(106, 71, 237, 0.1)",
  },
  {
    icon: Megaphone,
    title: "Paid Ads",
    subtitle: "Meta & Google",
    color: "#06B6D4",
    bgColor: "rgba(6, 182, 212, 0.1)",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    subtitle: "Automate & Engage",
    color: "#10B981",
    bgColor: "rgba(16, 185, 129, 0.1)",
  },
];

const outputNodes = [
  {
    icon: Users,
    title: "Qualified Leads",
    subtitle: "Score & Segment",
    color: "#6A47ED",
    bgColor: "rgba(106, 71, 237, 0.1)",
  },
  {
    icon: Route,
    title: "Personalized Journeys",
    subtitle: "Nurture & Engage",
    color: "#06B6D4",
    bgColor: "rgba(6, 182, 212, 0.1)",
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    subtitle: "Analyze & Scale",
    color: "#10B981",
    bgColor: "rgba(16, 185, 129, 0.1)",
  },
];

/* ── MAIN COMPONENT ── */

export default function HeroMarketaStyle() {
  return (
    <section className="hero-marketa relative pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden">
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f6ff] via-white to-white pointer-events-none" />
      {/* Soft purple glow top-left */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#6A47ED]/[0.06] rounded-full blur-[120px] pointer-events-none -translate-x-1/3 -translate-y-1/3" />
      {/* Soft cyan glow top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400/[0.05] rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/4" />

      <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10">
        {/* ── TOP CONTENT (CENTERED) ── */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Badge Pill */}
          <motion.div variants={slideUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F3F0FF] border border-[#E2DBFF] text-[#6A47ED] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-Powered Digital Marketing Agency</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={slideUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-6 text-[#17012C] tracking-tight"
          >
            Automate Marketing.
            <br />
            Accelerate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#059669]">
              Growth.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={slideUp}
            className="text-base sm:text-lg text-[#504E4E] leading-relaxed mb-8 max-w-xl mx-auto"
          >
            Engineer AI-driven marketing ecosystems that scale brands,
            nurture leads, and maximize ROAS — on autopilot.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={slideUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8"
          >
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#6A47ED] hover:bg-[#5835D4] text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-[#6A47ED]/25 hover:shadow-xl hover:shadow-[#6A47ED]/30 hover:-translate-y-0.5"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-[#DDE0E9] bg-white hover:border-[#6A47ED]/40 text-[#17012C] font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="w-6 h-6 rounded-full bg-[#F3F0FF] flex items-center justify-center">
                <Play className="w-3 h-3 text-[#6A47ED] fill-[#6A47ED]" />
              </span>
              <span>See Our Work</span>
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={slideUp}
            className="flex items-center justify-center gap-3 text-sm text-[#504E4E]"
          >
            {/* Avatar Stack */}
            <div className="flex -space-x-2.5">
              {["SK", "PK", "ST"].map((initials, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white shadow-sm"
                  style={{
                    background: ["#6A47ED", "#06B6D4", "#10B981"][i],
                  }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <span className="font-extrabold text-[#17012C]">4.9/5</span>
              <span className="text-[#504E4E]">from</span>
              <span className="font-extrabold text-[#17012C]">50+</span>
              <span className="text-[#504E4E]">brands</span>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── AI WORKFLOW DIAGRAM CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-[960px] mx-auto"
        >
          {/* Outer glow */}
          <div className="absolute -inset-4 bg-gradient-to-b from-[#6A47ED]/[0.08] via-transparent to-[#06B6D4]/[0.06] rounded-[32px] blur-xl pointer-events-none" />

          {/* Main Card */}
          <div className="relative rounded-[24px] bg-white border border-[#E5E5E5]/80 shadow-[0_8px_40px_rgba(106,71,237,0.08)] p-6 sm:p-8 lg:p-10 overflow-hidden">
            {/* Subtle inner grain */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(#6A47ED 0.8px, transparent 0.8px)", backgroundSize: "20px 20px" }} />

            {/* AUTOMATE Label */}
            <div className="text-center mb-6 relative z-10">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#6A47ED]">
                Automate
              </span>
            </div>

            {/* Workflow Grid */}
            <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-4 items-center z-10">
              {/* LEFT: Input Nodes */}
              <div className="flex flex-col gap-3.5">
                {inputNodes.map((node, i) => (
                  <motion.div
                    key={node.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#E5E5E5] shadow-sm hover:shadow-md hover:border-[#6A47ED]/30 transition-all duration-300 cursor-default group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: node.bgColor }}
                    >
                      <node.icon className="w-5 h-5" style={{ color: node.color }} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#17012C] leading-tight">
                        {node.title}
                      </p>
                      <p className="text-[11px] text-[#504E4E]">
                        {node.subtitle}
                      </p>
                    </div>
                    {/* Connection dot (desktop only) */}
                    <div className="hidden lg:block ml-auto w-2.5 h-2.5 rounded-full border-2 border-[#6A47ED]/40 bg-white shrink-0" />
                  </motion.div>
                ))}
              </div>

              {/* CENTER: AI Engine Orb + Connecting Lines */}
              <div className="relative flex items-center justify-center py-4 lg:py-0">
                {/* Connection Lines — Left Side (desktop only) */}
                <svg
                  className="absolute left-0 top-0 w-full h-full pointer-events-none hidden lg:block"
                  viewBox="0 0 200 240"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Input lines (left to center) */}
                  <path d="M 10 40 Q 50 40, 60 80 Q 70 120, 100 120" stroke="#6A47ED" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.35" className="hero-flow-line" />
                  <path d="M 10 120 L 100 120" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.35" className="hero-flow-line" />
                  <path d="M 10 200 Q 50 200, 60 160 Q 70 120, 100 120" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.35" className="hero-flow-line" />

                  {/* Output lines (center to right) */}
                  <path d="M 100 120 Q 130 120, 140 80 Q 150 40, 190 40" stroke="#6A47ED" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.35" className="hero-flow-line" />
                  <path d="M 100 120 L 190 120" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.35" className="hero-flow-line" />
                  <path d="M 100 120 Q 130 120, 140 160 Q 150 200, 190 200" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.35" className="hero-flow-line" />

                  {/* Animated flow dots */}
                  <circle r="3" fill="#6A47ED" opacity="0.7">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M 10 40 Q 50 40, 60 80 Q 70 120, 100 120" />
                  </circle>
                  <circle r="3" fill="#06B6D4" opacity="0.7">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M 10 120 L 100 120" />
                  </circle>
                  <circle r="3" fill="#10B981" opacity="0.7">
                    <animateMotion dur="3.2s" repeatCount="indefinite" path="M 10 200 Q 50 200, 60 160 Q 70 120, 100 120" />
                  </circle>
                  <circle r="3" fill="#6A47ED" opacity="0.7">
                    <animateMotion dur="2.8s" repeatCount="indefinite" path="M 100 120 Q 130 120, 140 80 Q 150 40, 190 40" />
                  </circle>
                  <circle r="3" fill="#06B6D4" opacity="0.7">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M 100 120 L 190 120" />
                  </circle>
                  <circle r="3" fill="#10B981" opacity="0.7">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M 100 120 Q 130 120, 140 160 Q 150 200, 190 200" />
                  </circle>
                </svg>

                {/* AI Engine Orb */}
                <motion.div
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full flex flex-col items-center justify-center"
                >
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6A47ED]/20 via-[#818CF8]/15 to-[#06B6D4]/20 animate-pulse" />
                  {/* Inner gradient sphere */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#6A47ED] via-[#818CF8] to-[#60A5FA] shadow-[0_0_50px_rgba(106,71,237,0.35)]" />
                  {/* Content */}
                  <div className="relative z-10 text-center text-white">
                    <Sparkles className="w-5 h-5 mx-auto mb-1 opacity-90" />
                    <p className="text-sm sm:text-base font-extrabold leading-none">AI</p>
                    <p className="text-sm sm:text-base font-extrabold leading-none">Engine</p>
                  </div>
                </motion.div>
              </div>

              {/* RIGHT: Output Nodes */}
              <div className="flex flex-col gap-3.5">
                {outputNodes.map((node, i) => (
                  <motion.div
                    key={node.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#E5E5E5] shadow-sm hover:shadow-md hover:border-[#06B6D4]/30 transition-all duration-300 cursor-default group"
                  >
                    {/* Connection dot (desktop only) */}
                    <div className="hidden lg:block w-2.5 h-2.5 rounded-full border-2 border-[#06B6D4]/40 bg-white shrink-0" />
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: node.bgColor }}
                    >
                      <node.icon className="w-5 h-5" style={{ color: node.color }} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#17012C] leading-tight">
                        {node.title}
                      </p>
                      <p className="text-[11px] text-[#504E4E]">
                        {node.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* OPTIMIZE Label */}
            <div className="text-center mt-6 relative z-10">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#06B6D4]">
                Optimize
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
