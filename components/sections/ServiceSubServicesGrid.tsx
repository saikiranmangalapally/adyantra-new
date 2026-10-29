"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface SubServiceItem {
  title: string;
  desc: string;
  href: string;
  img: string;
}

export interface ServiceSubServicesGridProps {
  intro?: {
    tagline?: string;
    headline?: string;
    description?: string;
  };
  subServices: SubServiceItem[];
  fallbackDescription?: string;
}

const photoMap: Record<string, string> = {
  // Ads & Performance
  "meta & google ads scaling": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80",
  "conversion rate optimization": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80",
  "multi-touch attribution": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
  "lifecycle email & sms": "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=700&q=80",

  // SEO
  "technical site health audits": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
  "rankwise editorial content": "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=80",
  "enterprise schema markup": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=80",
  "digital pr & authority outreach": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=700&q=80",

  // Social & Creatives
  "meta advantage+ campaigns": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=700&q=80",
  "dynamic creative optimization": "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=700&q=80",
  "direct-response reels & video": "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=700&q=80",
  "b2b linkedin marketing": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80",

  // Content
  "technical content audits": "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=80",
  "programmatic topic clusters": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
  "direct-response copywriting": "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=700&q=80",
  "omnichannel repurposing": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=700&q=80",

  // Web & Dev
  "custom next.js web apps": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80",
  "design systems & ui/ux": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=700&q=80",
  "cross-platform mobile apps": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=700&q=80",
  "api & backend integrations": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80",

  // WhatsApp & CRM
  "official whatsapp cloud api": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80",
  "interactive product catalogs": "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=700&q=80",
  "two-way crm synchronization": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=700&q=80",
  "targeted retargeting broadcasts": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=700&q=80",

  // AI Systems & Agents
  "autonomous sdr agents": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80",
  "custom tool execution": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
  "rag & vector memory": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=700&q=80",
  "multi-agent collaboration": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=700&q=80",
  "24/7 resolution agent": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80",
  "rag knowledge base sync": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=700&q=80",
  "sentiment & escalation triage": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80",
  "whatsapp support desk": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80",

  // Lead Gen & Sales
  "lead capture & verification": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80",
  "predictive intent scoring": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
  "instant crm routing": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=700&q=80",
  "automated warming sequences": "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=700&q=80",
  "behavioral follow-up sequences": "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=700&q=80",
  "whatsapp direct nurturing": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80",
  "pipeline deal scoring": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
  "objection resolution bots": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80",
};

function getSubServicePhoto(title: string): string {
  const key = title.toLowerCase().trim();
  if (photoMap[key]) return photoMap[key];

  // Keyword-based fallback images
  if (key.includes("seo") || key.includes("search") || key.includes("audit")) {
    return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80";
  }
  if (key.includes("ad") || key.includes("meta") || key.includes("google") || key.includes("ppc") || key.includes("roas")) {
    return "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80";
  }
  if (key.includes("web") || key.includes("app") || key.includes("software") || key.includes("dev")) {
    return "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80";
  }
  if (key.includes("crm") || key.includes("pipeline") || key.includes("sync")) {
    return "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=700&q=80";
  }
  if (key.includes("whatsapp") || key.includes("bot") || key.includes("chat")) {
    return "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80";
  }
  if (key.includes("lead") || key.includes("sales") || key.includes("follow")) {
    return "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80";
  }
  if (key.includes("ai") || key.includes("agent") || key.includes("model") || key.includes("architecture")) {
    return "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80";
  }
  if (key.includes("video") || key.includes("creative") || key.includes("content")) {
    return "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=700&q=80";
  }
  if (key.includes("analytics") || key.includes("attribution") || key.includes("reporting")) {
    return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80";
  }
  return "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80";
}

function renderTwoToneHeadline(headline: string) {
  const words = headline.trim().split(" ");
  if (words.length <= 2) {
    return (
      <>
        {words[0]} <br />
        <span className="text-[#FFC400]">{words.slice(1).join(" ")}</span>
      </>
    );
  }
  const mid = Math.ceil(words.length / 2);
  const line1 = words.slice(0, mid).join(" ");
  const line2 = words.slice(mid).join(" ");
  return (
    <>
      {line1} <br />
      <span className="text-[#FFC400]">{line2}</span>
    </>
  );
}

export default function ServiceSubServicesGrid({
  intro,
  subServices = [],
  fallbackDescription,
}: ServiceSubServicesGridProps) {
  if (!subServices || subServices.length === 0) return null;

  const tagline = intro?.tagline || "GROWTH ARCHITECTURE";
  const headline = intro?.headline || "Predictable Scaling Through Mathematical Marketing";
  const description = intro?.description || fallbackDescription || "We eliminate guesswork from digital expansion by pairing first-party customer telemetry with machine-learning bidding models.";

  const gridColsClass = subServices.length === 3 
    ? "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" 
    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6";

  return (
    <section className="py-12 sm:py-14 lg:py-16 bg-[#FAFBFC] border-b border-[#DCE3EB] font-sans relative overflow-hidden" id="capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Section Header (Exact Image Style: Split Header with Yellow Line & Golden Highlight) ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            {/* Tagline Badge with Line */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs sm:text-[13px] font-medium uppercase tracking-widest text-[#12304A] font-sans">
                {tagline}
              </span>
              <span className="w-14 h-[2px] bg-[#FFC400] rounded-full inline-block" />
            </div>

            {/* Headline with Two-Line Navy & Golden Yellow */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium text-[#12304A] tracking-tight leading-[1.12] font-sans">
              {renderTwoToneHeadline(headline)}
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base sm:text-[17px] text-[#64748B] font-normal leading-relaxed font-sans">
              {description}
            </p>
          </div>
        </div>

        {/* ── Subservices Cards Grid (Photos Replacing Icons in All Blocks) ── */}
        <div className={gridColsClass}>
          {subServices.map((sub, index) => {
            const photoSrc = getSubServicePhoto(sub.title);

            return (
              <article 
                key={index}
                className="bg-[#FFFFFF] rounded-[28px] border border-[#DCE3EB] shadow-[0_4px_20px_rgba(18,48,74,0.04)] hover:shadow-[0_16px_36px_rgba(18,48,74,0.1)] hover:border-[#FFC400] hover:bg-[#FFFFFF] transition-all duration-300 flex flex-col justify-between overflow-hidden group p-6 sm:p-7 hover:-translate-y-1.5"
              >
                <div>
                  {/* Photo Image Box (Photos Replacing Icons) */}
                  <div className="h-44 sm:h-48 rounded-2xl overflow-hidden relative shadow-sm mb-5 bg-[#FAFBFC]">
                    <img
                      src={photoSrc}
                      alt={sub.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Card Title in Deep Navy #12304A */}
                  <h3 className="text-lg sm:text-xl font-medium text-[#12304A] leading-snug group-hover:text-[#12304A] transition-colors font-sans mb-2.5">
                    <Link href={sub.href || "/contact"}>
                      {sub.title}
                    </Link>
                  </h3>

                  {/* Card Description in Slate Gray #64748B */}
                  <p className="text-xs sm:text-[13.5px] text-[#64748B] font-normal leading-relaxed mb-6 font-sans">
                    {sub.desc}
                  </p>
                </div>

                {/* Bottom Action: Home Page Pill Button */}
                <div className="pt-4 border-t border-[#DCE3EB]">
                  <Link 
                    href={sub.href || "/contact"}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#12304A] hover:bg-[#1a4469] text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-md group/btn w-full font-sans"
                  >
                    <span>Explore Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
