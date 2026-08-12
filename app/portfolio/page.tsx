"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  TrendingUp,
  Award,
  CheckCircle2,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { BlurIn, ScrollReveal } from "@/components/animations";
import { SectionLabel, SectionHeading, SectionSubheading } from "@/components/ui/SectionHeadings";

const portfolioItems = [
  {
    title: "Apex Healthcare Network",
    category: "Healthcare & Local SEO",
    metrics: "4,500+ Appointments Booked",
    impact: "+320% Patient Acquisition",
    desc: "Scaled local medical search visibility across 12 clinic branches with HIPAA-compliant appointment booking funnels.",
    img: "/assets/img/service/seo-3d.png",
  },
  {
    title: "UrbanStyle Fashion Brand",
    category: "E-Commerce & Meta Ads",
    metrics: "₹1.2 Cr Monthly Revenue",
    impact: "6.2x Meta Ads ROAS",
    desc: "Scaled Shopify storefront revenue from ₹15L to ₹1.2 Cr in 8 months using Meta Advantage+ and Klaviyo cart recovery.",
    img: "/assets/img/service/ecommerce-3d.png",
  },
  {
    title: "Global Scholars EdTech",
    category: "EdTech & Lead Generation",
    metrics: "210% Enrollment Surge",
    impact: "-52% Cost Per Lead",
    desc: "Deployed 24/7 AI Counselor Chatbots integrated with Meta Lead Ads to capture and nurture high-intent student inquiries.",
    img: "/assets/img/service/ai-3d.png",
  },
  {
    title: "Skyline Luxury Builders",
    category: "Real Estate & Google Ads",
    metrics: "85% Sold Out in 60 Days",
    impact: "₹150 Cr Pipeline Value",
    desc: "Targeted high-net-worth real estate buyers via geo-fenced Google Search ads and WhatsApp price sheet automation.",
    img: "/assets/img/about/about-3d.png",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* ── Hero Section ── */}
      <section className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-[1320px] text-center">
          <div className="max-w-3xl mx-auto">
            <BlurIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-6 border border-primary/20">
                <Award className="w-4 h-4" />
                <span>Verified Client Case Studies</span>
              </div>
            </BlurIn>

            <BlurIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary tracking-tight leading-[1.15] mb-6">
                Our Work Speaks In Measured <span className="text-primary">Revenue</span>
              </h1>
            </BlurIn>

            <BlurIn delay={0.3}>
              <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed mb-8">
                Explore how we engineer performance marketing campaigns, Next.js web applications, and AI automation systems for high-growth brands.
              </p>
            </BlurIn>
          </div>
        </div>
      </section>

      {/* ── Key Results Bar ── */}
      <SectionWrapper className="bg-slate-900 text-white border-y border-slate-800 my-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { v: "₹50 Cr+", l: "Client Revenue Generated" },
            { v: "5.2x", l: "Average Portfolio ROAS" },
            { v: "50+", l: "Brand Partners Scaled" },
            { v: "100%", l: "Data Transparency" },
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

      {/* ── Portfolio Grid ── */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel>PROVEN CASE STUDIES</SectionLabel>
          <SectionHeading>Transforming Brands Across Industries</SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="bg-white p-8 rounded-3xl border border-border hover:border-primary/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full group">
                <div>
                  <div className="relative w-full aspect-[16/9] rounded-2xl bg-surface mb-6 overflow-hidden flex items-center justify-center">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={450}
                      height={250}
                      className="w-auto h-44 object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>

                  <h3 className="text-2xl font-bold text-secondary mt-3 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-border/60 flex items-center justify-between">
                  <div className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    {item.impact}
                  </div>
                  <Link href="/contact" className="shadcn-input-button-solid min-w-0 !h-10 !pl-4 !pr-10 text-xs">
                    <span>Audit Case</span>
                    <span className="badge-icon !size-7">
                      <ArrowUpRight className="size-3.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner />
    </div>
  );
}
