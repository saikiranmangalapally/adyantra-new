"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ShoppingCart,
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

const ecomCategories = [
  {
    category: "Storefront Engineering",
    tagline: "High-Converting Custom Digital Storefronts",
    items: [
      { title: "Shopify & Shopify Plus", desc: "Custom Liquid theme design, app development, and high-volume Shopify Plus migration.", href: "/contact" },
      { title: "Headless E-Commerce (Next.js)", desc: "Combine Shopify Storefront API or Medusa with Next.js for sub-second checkout speeds.", href: "/contact" },
      { title: "WooCommerce Engineering", desc: "Custom WordPress E-Commerce development optimized for high catalog complexity.", href: "/contact" },
    ],
  },
  {
    category: "Revenue & Cart Optimization",
    tagline: "Maximize Average Order Value (AOV)",
    items: [
      { title: "Payment & API Integrations", desc: "Seamless Razorpay, Stripe, Cashfree, and COD verification flows.", href: "/contact" },
      { title: "Klaviyo Email & Cart Recovery", desc: "Automated abandoned cart flows, win-back campaigns, and VIP SMS loyalty sequences.", href: "/contact" },
      { title: "Conversion Rate Optimization", desc: "A/B testing product detail pages (PDPs) to boost add-to-cart and checkout conversion.", href: "/contact" },
    ],
  },
];

const faqs = [
  {
    q: "Why should we consider Headless E-Commerce over standard Shopify?",
    a: "Headless E-Commerce separates your frontend Next.js application from your Shopify backend. This achieves 100/100 Google PageSpeed scores, complete design freedom, and higher conversion rates while maintaining Shopify's secure checkout.",
  },
];

export default function EcommerceSolutionsPage() {
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
                  E-Commerce Engineering & Growth
                </div>
              </BlurIn>

              <BlurIn delay={0.2}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary tracking-tight leading-[1.15] mb-6">
                  Shopify Plus & <span className="text-primary">Headless E-Commerce Scale</span>
                </h1>
              </BlurIn>

              <BlurIn delay={0.3}>
                <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed mb-8 max-w-2xl">
                  We engineer high-converting digital storefronts on Shopify Plus and Next.js Headless — designed to maximize Average Order Value (AOV) and conversion rate.
                </p>
              </BlurIn>

              {/* Trust Badges */}
              <BlurIn delay={0.4}>
                <div className="flex flex-wrap items-center gap-6 mb-10 text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-1.5 bg-surface px-3 py-1.5 rounded-lg border border-border">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Shopify Partner & Headless Certified
                  </span>
                  <span className="flex items-center gap-1.5 bg-surface px-3 py-1.5 rounded-lg border border-border">
                    <Zap className="w-4 h-4 text-amber-500" />
                    Sub-Second Product Page Speed
                  </span>
                </div>
              </BlurIn>

              <BlurIn delay={0.5}>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="shadcn-input-button-solid">
                    <span>Build Storefront</span>
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
                imageSrc="/assets/img/service/ecommerce-3d.png"
                imageAlt="E-Commerce Solutions 3D Stage"
                badge1Title="Shopify Plus"
                badge1Sub="Certified Partner"
                badge2Title="₹50 Cr+ Scaled"
                badge2Sub="Store Revenue"
                badge3Title="3.4% Avg CVR"
                badge3Sub="Checkout Optimized"
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
            { v: "3.4%", l: "Average Storefront Conversion Rate" },
            { v: "₹50 Cr+", l: "E-Commerce Revenue Scaled" },
            { v: "+42%", l: "AOV Uplift via Custom Bundles" },
            { v: "100%", l: "PCI-DSS Compliant Security" },
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
          <span className="sub-title bg-color-2 mb-4">STOREFRONT CAPABILITIES</span>
          <SectionHeading>Digital Storefront Solutions</SectionHeading>
        </div>

        <div className="space-y-12">
          {ecomCategories.map((cat, i) => (
            <ScrollReveal key={cat.category} delay={i * 0.1}>
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-border shadow-xs">
                <div className="mb-6 pb-4 border-b border-border">
                  <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest">{cat.category}</span>
                  <h3 className="text-2xl font-bold text-secondary mt-1">{cat.tagline}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {cat.items.map((item) => (
                    <div
                      key={item.title}
                      className="group p-6 rounded-2xl bg-surface border border-border/80 hover:border-emerald-500/40 transition-all hover:-translate-y-1 block"
                    >
                      <h4 className="text-lg font-bold text-secondary group-hover:text-emerald-600 transition-colors flex items-center justify-between mb-2">
                        <span>{item.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                  <div className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center shrink-0 text-emerald-600">
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
