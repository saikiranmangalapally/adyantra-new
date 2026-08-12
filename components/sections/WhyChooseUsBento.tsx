"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  BarChart3,
  Users,
  Award,
  Lock,
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import Link from "next/link";

const whyUsFeatures = [
  {
    id: "inhouse",
    title: "100% In-House Engineering",
    subtitle: "Zero External Templates or Outsourcing",
    description:
      "We build every system, campaign, and application in-house using modern React, Next.js, and custom AI models. No generic templates, no middlemen.",
    icon: Cpu,
    colSpan: "lg:col-span-2",
    badge: "Engineering First",
    highlightText: "Zero Outsourcing",
    badgeBg: "bg-blue-50 text-primary border-primary/20",
  },
  {
    id: "retention",
    title: "98% Client Retention Rate",
    subtitle: "Long-Term Strategic Partnerships",
    description:
      "Our clients stay with us year after year because we focus on real revenue metrics—not vanity metrics.",
    icon: Award,
    colSpan: "lg:col-span-1",
    badge: "Industry Benchmark",
    highlightText: "98% Retention",
    badgeBg: "bg-amber-50 text-amber-600 border-amber-200",
  },
  {
    id: "data",
    title: "Precision Data & AI Workflows",
    subtitle: "Automated Lead & Growth Intelligence",
    description:
      "Combining predictive analytics with autonomous AI pipelines to track every attribution touchpoint from click to customer.",
    icon: BarChart3,
    colSpan: "lg:col-span-1",
    badge: "AI Powered",
    highlightText: "Predictive ROI",
    badgeBg: "bg-purple-50 text-purple-600 border-purple-200",
  },
  {
    id: "no-contract",
    title: "Zero Long-Term Lock-in",
    subtitle: "Freedom Driven by Results",
    description:
      "We earn your partnership every single month. Flexible month-to-month terms backed by transparent deliverables.",
    icon: Lock,
    colSpan: "lg:col-span-1",
    badge: "Risk-Free",
    highlightText: "Month-to-Month",
    badgeBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
  {
    id: "dedicated",
    title: "Dedicated Executive Lead",
    subtitle: "Direct Access to Senior Strategists",
    description:
      "You communicate directly with senior growth directors and engineers responsible for executing your vision.",
    icon: Users,
    colSpan: "lg:col-span-1",
    badge: "Direct Comms",
    highlightText: "Senior Strategists",
    badgeBg: "bg-cyan-50 text-cyan-600 border-cyan-200",
  },
];

export default function WhyChooseUsBento() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="section-padding relative overflow-hidden bg-white text-secondary" id="why-us">
      {/* ── Light Theme Background Pattern ── */}
      <div className="absolute inset-0 bg-[radial-gradient(#E2E4EB_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-border text-primary font-bold text-xs uppercase tracking-widest mb-4 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span>Why Choose Adyantra</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-secondary mb-6"
          >
            We don&apos;t do average. <br />
            We engineer <span className="text-primary underline decoration-accent/60 decoration-4">growth dominance.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed"
          >
            Most agencies recycle generic playbooks. We architect high-performance digital ecosystems combining precision data science with world-class engineering.
          </motion.p>
        </div>

        {/* ── Light Theme Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsFeatures.map((feat, index) => {
            const Icon = feat.icon;

            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                onHoverStart={() => setHoveredCard(feat.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`relative group rounded-3xl p-8 bg-white border border-border/80 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 ${feat.colSpan} flex flex-col justify-between`}
              >
                <div>
                  {/* Top Badge & Icon Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-surface border border-border flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${feat.badgeBg}`}>
                      {feat.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm font-semibold text-primary/90 mb-4">
                    {feat.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {feat.description}
                  </p>
                </div>

                {/* Bottom Highlight Indicator */}
                <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs font-medium text-muted-foreground">
                  <div className="flex items-center gap-2 text-secondary font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{feat.highlightText}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom Callout Bar (Light Theme) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 rounded-3xl p-8 bg-surface border border-border flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-secondary">Ready to experience measurable ROI?</h4>
              <p className="text-sm text-muted-foreground">Schedule a 30-minute growth consultation with our senior strategy team.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="shadcn-input-button-solid whitespace-nowrap"
          >
            <span>Book Growth Call</span>
            <span className="badge-icon">
              <ArrowUpRight className="size-4" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
