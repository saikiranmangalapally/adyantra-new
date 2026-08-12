"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Code2,
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

const webDevCategories = [
  {
    category: "Modern Web Engineering",
    tagline: "Ultra-Fast Full-Stack Frameworks",
    items: [
      { title: "Custom Next.js 15 & React", desc: "Build lightning-fast server-side rendered (SSR) web applications with 100/100 Core Web Vitals.", href: "/contact" },
      { title: "Enterprise Web Portals", desc: "Scalable web architectures with role-based access control, SSO authentication, and multi-region deployment.", href: "/contact" },
      { title: "Headless CMS & Jamstack", desc: "Combine Sanity or Contentful with Next.js for unconstrained creative freedom and speed.", href: "/contact" },
    ],
  },
  {
    category: "Backend & System Integration",
    tagline: "Robust APIs & Enterprise Databases",
    items: [
      { title: "PHP & Laravel Solutions", desc: "Enterprise PHP development, custom web portals, and legacy system modernization.", href: "/contact" },
      { title: "REST & GraphQL APIs", desc: "Secure microservices, third-party payment gateway integrations, and real-time WebSockets.", href: "/contact" },
      { title: "Cloud Infrastructure (AWS/GCP)", desc: "Dockerized containerization, Kubernetes orchestration, and automated CI/CD pipelines.", href: "/contact" },
    ],
  },
];

const faqs = [
  {
    q: "Why do you recommend Next.js for enterprise web applications?",
    a: "Next.js 15 provides server-side rendering (SSR), static site generation (SSG), and automatic image optimization out of the box. This delivers sub-second page loads, exceptional SEO performance, and seamless scaling.",
  },
  {
    q: "How long does a custom web application take to develop?",
    a: "A standard marketing site or custom web platform takes 4–6 weeks. Complex enterprise web applications with custom API integrations and portals take 8–12 weeks from Figma wireframing to production deployment.",
  },
  {
    q: "Do you provide ongoing technical support and maintenance?",
    a: "Yes. All our web engineering projects include 30 days of post-launch warranty support, followed by optional SLA maintenance packages covering security patches, server backups, and feature iterations.",
  },
];

export default function WebSoftwareDevelopmentPage() {
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
                  Web & Software Engineering
                </div>
              </BlurIn>

              <BlurIn delay={0.2}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary tracking-tight leading-[1.15] mb-6">
                  Enterprise Web Systems & <span className="text-primary">Next.js Development</span>
                </h1>
              </BlurIn>

              <BlurIn delay={0.3}>
                <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed mb-8 max-w-2xl">
                  We engineer ultra-fast, secure, and SEO-optimized web applications built with Next.js 15, TypeScript, Node.js, and cloud microservices.
                </p>
              </BlurIn>

              {/* Trust Badges */}
              <BlurIn delay={0.4}>
                <div className="flex flex-wrap items-center gap-6 mb-10 text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-1.5 bg-surface px-3 py-1.5 rounded-lg border border-border">
                    <Zap className="w-4 h-4 text-cyan-600" />
                    100/100 Core Web Vitals Guaranteed
                  </span>
                  <span className="flex items-center gap-1.5 bg-surface px-3 py-1.5 rounded-lg border border-border">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    SOC2 & ISO Compliant Code Standards
                  </span>
                </div>
              </BlurIn>

              <BlurIn delay={0.5}>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="shadcn-input-button-solid">
                    <span>Start Architecture Review</span>
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
                imageSrc="/assets/img/service/webdev-3d.png"
                imageAlt="Web Software Development 3D Stage"
                badge1Title="100/100 Speed"
                badge1Sub="Core Web Vitals"
                badge2Title="Next.js 15"
                badge2Sub="React 19 Engine"
                badge3Title="SOC2 Security"
                badge3Sub="Enterprise Grade"
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
            { v: "< 0.8s", l: "Average Page Load Time" },
            { v: "100%", l: "Mobile Responsive & Accessible" },
            { v: "80+", l: "Enterprise Systems Shipped" },
            { v: "99.9%", l: "Server Uptime Guarantee" },
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
          <span className="sub-title bg-color-2 mb-4">ENGINEERING CAPABILITIES</span>
          <SectionHeading>Full-Stack Web Architecture</SectionHeading>
          <SectionSubheading>
            Built for extreme scalability, security, and effortless content management.
          </SectionSubheading>
        </div>

        <div className="space-y-12">
          {webDevCategories.map((cat, i) => (
            <ScrollReveal key={cat.category} delay={i * 0.1}>
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-border shadow-xs">
                <div className="mb-6 pb-4 border-b border-border">
                  <span className="text-xs font-extrabold text-cyan-600 uppercase tracking-widest">{cat.category}</span>
                  <h3 className="text-2xl font-bold text-secondary mt-1">{cat.tagline}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {cat.items.map((item) => (
                    <div
                      key={item.title}
                      className="group p-6 rounded-2xl bg-surface border border-border/80 hover:border-cyan-500/40 transition-all hover:-translate-y-1 block"
                    >
                      <h4 className="text-lg font-bold text-secondary group-hover:text-cyan-600 transition-colors flex items-center justify-between mb-2">
                        <span>{item.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                  <div className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center shrink-0 text-cyan-600">
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
