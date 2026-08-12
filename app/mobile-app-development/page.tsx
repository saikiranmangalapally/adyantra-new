"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Smartphone,
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

const mobileCategories = [
  {
    category: "Mobile App Engineering",
    tagline: "High-Performance iOS & Android Solutions",
    items: [
      { title: "iOS Native App Development", desc: "Craft fluid, native iOS applications written in Swift and SwiftUI for iPhone and iPad.", href: "/contact" },
      { title: "Android Native App Development", desc: "Build robust Android applications leveraging Kotlin and Jetpack Compose for maximum performance.", href: "/contact" },
      { title: "Cross-Platform React Native", desc: "Deploy unified iOS & Android mobile applications from a single, high-performance codebase.", href: "/contact" },
    ],
  },
  {
    category: "App Store Scale & Growth",
    tagline: "App Store Optimization & User Acquisition",
    items: [
      { title: "App Store Optimization (ASO)", desc: "Rank #1 on Apple App Store & Google Play Store for commercial app keywords.", href: "/contact" },
      { title: "App Install Performance Ads", desc: "Drive low-CPI app installs via Meta Advantage+ App Campaigns and Apple Search Ads.", href: "/contact" },
      { title: "Push Notification & Retention", desc: "Automate user onboarding, cart recovery push alerts, and in-app engagement flows.", href: "/contact" },
    ],
  },
];

const faqs = [
  {
    q: "Should I choose Native iOS/Android or React Native for my mobile app?",
    a: "React Native allows launching on both iOS and Android simultaneously with up to 40% lower development costs while maintaining 60fps native UI performance. We recommend Native Swift/Kotlin primarily for apps requiring hardware-level graphics, AR, or Bluetooth peripherals.",
  },
  {
    q: "Do you handle Apple App Store and Google Play Store submissions?",
    a: "Yes. We manage the entire submission, app privacy disclosure, review guideline compliance, and store approval process from start to finish.",
  },
];

export default function MobileAppDevelopmentPage() {
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
                  Mobile App Engineering & ASO
                </div>
              </BlurIn>

              <BlurIn delay={0.2}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary tracking-tight leading-[1.15] mb-6">
                  Cross-Platform iOS & <span className="text-primary">Android App Scale</span>
                </h1>
              </BlurIn>

              <BlurIn delay={0.3}>
                <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed mb-8 max-w-2xl">
                  We design and build 60fps mobile applications using React Native, Swift, and Kotlin — paired with App Store Optimization (ASO) for scale.
                </p>
              </BlurIn>

              {/* Trust Badges */}
              <BlurIn delay={0.4}>
                <div className="flex flex-wrap items-center gap-6 mb-10 text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-1.5 bg-surface px-3 py-1.5 rounded-lg border border-border">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    100% App Store & Play Store Approval
                  </span>
                  <span className="flex items-center gap-1.5 bg-surface px-3 py-1.5 rounded-lg border border-border">
                    <Zap className="w-4 h-4 text-emerald-600" />
                    60fps Smooth UI Performance
                  </span>
                </div>
              </BlurIn>

              <BlurIn delay={0.5}>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="shadcn-input-button-solid">
                    <span>Scope Mobile App</span>
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
                imageSrc="/assets/img/service/smm-3d.png"
                imageAlt="Mobile App Development 3D Stage"
                badge1Title="60 FPS Native"
                badge1Sub="Fluid Motion"
                badge2Title="1M+ Installs"
                badge2Sub="Store Performance"
                badge3Title="React Native"
                badge3Sub="iOS & Android"
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
            { v: "60 FPS", l: "Native UI Frame Rate" },
            { v: "1M+", l: "Total App Installs Driven" },
            { v: "4.8★", l: "Average Store Rating" },
            { v: "100%", l: "App Store Approval Rate" },
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
          <span className="sub-title bg-color-2 mb-4">MOBILE CAPABILITIES</span>
          <SectionHeading>Native & Cross-Platform Solutions</SectionHeading>
        </div>

        <div className="space-y-12">
          {mobileCategories.map((cat, i) => (
            <ScrollReveal key={cat.category} delay={i * 0.1}>
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-border shadow-xs">
                <div className="mb-6 pb-4 border-b border-border">
                  <span className="text-xs font-extrabold text-primary uppercase tracking-widest">{cat.category}</span>
                  <h3 className="text-2xl font-bold text-secondary mt-1">{cat.tagline}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {cat.items.map((item) => (
                    <div
                      key={item.title}
                      className="group p-6 rounded-2xl bg-surface border border-border/80 hover:border-primary/40 transition-all hover:-translate-y-1 block"
                    >
                      <h4 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors flex items-center justify-between mb-2">
                        <span>{item.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
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
                  <div className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center shrink-0 text-primary">
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
