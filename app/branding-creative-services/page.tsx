"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Plus,
  Minus,
} from "lucide-react";
import { SectionHeading, SectionSubheading } from "@/components/ui/SectionHeadings";
import CTABanner from "@/components/ui/CTABanner";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Service3DStage from "@/components/sections/Service3DStage";
import ServiceMarqueeTicker from "@/components/sections/ServiceMarqueeTicker";
import { BlurIn, ScrollReveal } from "@/components/animations";

const brandingCategories = [
  {
    category: "Brand Strategy & Identity",
    tagline: "Unforgettable Brand Positioning",
    items: [
      { title: "Brand Identity & Guidelines", desc: "Complete visual identity kits, logo suites, color tokens, and typography systems.", href: "/contact" },
      { title: "High-CTR Social & Ad Creatives", desc: "Performance creative assets, 3D product renders, and ad banners designed to stop scrolling.", href: "/contact" },
      { title: "Digital PR & Reputation (ORM)", desc: "Earned press coverage in premium publications and online search sentiment management.", href: "/contact" },
    ],
  },
];

const faqs = [
  {
    q: "What is included in a complete Brand Identity project?",
    a: "You receive primary and secondary logo suites, typography hierarchy, custom brand color palettes, brand usage guidelines, social media assets, and vector source files (.AI, .SVG, .PNG).",
  },
];

export default function BrandingCreativeServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* ── Hero Section (Identical Homepage Architecture) ── */}
      <section className="relative py-12 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-[1320px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <BlurIn>
                <div className="inline-block px-5 py-2 rounded-md bg-[#F3F1FE] text-primary font-semibold uppercase text-sm tracking-wider mb-6">
                  Branding & Creative Services
                </div>
              </BlurIn>

              <BlurIn delay={0.2}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary tracking-tight leading-[1.15] mb-6">
                  Build An Unforgettable Brand & <span className="text-primary">Visual Identity</span>
                </h1>
              </BlurIn>

              <BlurIn delay={0.3}>
                <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed mb-8 max-w-2xl">
                  We blend creative design with strategic brand positioning to transform businesses into industry leaders that command premium value.
                </p>
              </BlurIn>

              {/* Trust Badges */}
              <BlurIn delay={0.4}>
                <div className="flex flex-wrap items-center gap-6 mb-10 text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-1.5 bg-surface px-3 py-1.5 rounded-lg border border-border">
                    <ShieldCheck className="w-4 h-4 text-pink-600" />
                    Vector Logo & Brand Kit Delivery
                  </span>
                  <span className="flex items-center gap-1.5 bg-surface px-3 py-1.5 rounded-lg border border-border">
                    <Zap className="w-4 h-4 text-amber-500" />
                    3.2x Average Creative CTR Boost
                  </span>
                </div>
              </BlurIn>

              <BlurIn delay={0.5}>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="shadcn-input-button-solid">
                    <span>Elevate Your Brand</span>
                    <span className="badge-icon">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </Link>
                </div>
              </BlurIn>
            </div>

            {/* 3D Floating Glass Badge Stage (Homepage Engine) */}
            <div className="lg:col-span-5 flex justify-center">
              <Service3DStage
                imageSrc="/assets/img/service/pr-3d.png"
                imageAlt="Branding Creative Services 3D Stage"
                badge1Title="Vector Assets"
                badge1Sub="Full Brand Kit"
                badge2Title="3.2x Higher CTR"
                badge2Sub="Ad Creatives"
                badge3Title="Digital PR"
                badge3Sub="Earned Media"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Homepage Infinite Marquee Ticker ── */}
      <ServiceMarqueeTicker />

      {/* ── Key Performance Metrics Bar ── */}
      <SectionWrapper className="bg-slate-900 text-white border-y border-slate-800 my-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { v: "3.2x", l: "Average Ad CTR Boost" },
            { v: "100%", l: "Vector Brand Assets Delivered" },
            { v: "50+", l: "Brand Identities Created" },
            { v: "10M+", l: "Creative Impressions Served" },
          ].map((s, i) => (
            <ScrollReveal key={s.l} delay={i * 0.1}>
              <div>
                <div className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-2">{s.v}</div>
                <div className="text-xs md:text-sm font-semibold text-slate-300 uppercase tracking-widest">{s.l}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Multi-Column Capabilities ── */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="sub-title bg-color-2 mb-4">BRANDING CAPABILITIES</span>
          <SectionHeading>Strategic Creative & PR</SectionHeading>
        </div>

        <div className="space-y-12">
          {brandingCategories.map((cat, i) => (
            <ScrollReveal key={cat.category} delay={i * 0.1}>
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-border shadow-xs">
                <div className="mb-6 pb-4 border-b border-border">
                  <span className="text-xs font-extrabold text-pink-600 uppercase tracking-widest">{cat.category}</span>
                  <h3 className="text-2xl font-bold text-secondary mt-1">{cat.tagline}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {cat.items.map((item) => (
                    <div
                      key={item.title}
                      className="group p-6 rounded-2xl bg-surface border border-border/80 hover:border-pink-500/40 transition-all hover:-translate-y-1 block"
                    >
                      <h4 className="text-lg font-bold text-secondary group-hover:text-pink-600 transition-colors flex items-center justify-between mb-2">
                        <span>{item.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ── FAQ Section (Homepage Accordion with Plus/Minus) ── */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="sub-title bg-color-2 mb-4">QUESTIONS & ANSWERS</span>
          <SectionHeading>Frequently Asked Questions</SectionHeading>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={faq.q} className="bg-white border border-border rounded-2xl overflow-hidden shadow-xs">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-6 text-left font-bold text-secondary text-base md:text-lg flex items-center justify-between gap-4"
                >
                  <span>{faq.q}</span>
                  <div className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center shrink-0 text-pink-600">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-muted-foreground font-medium text-sm leading-relaxed border-t border-border/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <CTABanner />
    </div>
  );
}
