"use client";

import { motion } from "framer-motion";
import { slideUp } from "@/lib/variants";
import { GraduationCap, Plane, HeartPulse, ShoppingCart, Laptop, Building2, Utensils, Hotel, Pill, Factory, Store, Briefcase, Music, Church } from "lucide-react";

const industries = [
  { name: "Education", icon: GraduationCap },
  { name: "Travel / Tour", icon: Plane },
  { name: "Healthcare", icon: HeartPulse },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Technology", icon: Laptop },
  { name: "Real Estate", icon: Building2 },
  { name: "Restaurant", icon: Utensils },
  { name: "Hospitality", icon: Hotel },
  { name: "Pharma / Medic", icon: Pill },
  { name: "Industrial", icon: Factory },
  { name: "Retail/Entertainment", icon: Store },
  { name: "Corporate", icon: Briefcase },
  { name: "Music / Band", icon: Music },
  { name: "Religious Institutions", icon: Church },
];

export default function IndustriesGrid() {
  return (
    <section className="relative py-20 bg-slate-50/50 border-y border-border/60 overflow-hidden" id="industries">
      {/* Organic Glass Ambient Lighting */}
      <div className="absolute top-1/4 -left-20 w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#E2E4EB_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10">
        <div className="text-center mb-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="sub-title bg-color-2 mb-3">
            TARGET DOMAIN EXPERTISE
          </motion.div>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-secondary">
            Domains We Serve
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-muted-foreground mt-3 text-sm sm:text-base max-w-xl mx-auto">
            Custom digital marketing strategies and AI automation solutions tailored for high-growth business sectors.
          </motion.p>
        </div>

        {/* Auto-Scrolling Infinite Marquee Row (Enlarged Glass Pills, No Indicators) */}
        <div className="relative flex overflow-hidden py-3 group">
          <div className="flex shrink-0 gap-5 animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="shrink-0 group/pill relative bg-white/85 backdrop-blur-xl border border-white/90 shadow-md hover:shadow-lg hover:border-primary/50 hover:scale-105 transition-all duration-300 rounded-full px-6 py-3.5 flex items-center gap-3.5"
              >
                <span className="font-bold text-secondary text-sm sm:text-base group-hover/pill:text-primary transition-colors whitespace-nowrap">
                  {ind.name}
                </span>

                <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover/pill:scale-110 transition-transform">
                  <ind.icon className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
              </div>
            ))}
          </div>

          {/* Duplicated for Seamless Infinite Loop */}
          <div className="flex shrink-0 gap-5 animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]" aria-hidden="true">
            {industries.map((ind, i) => (
              <div
                key={`dup-${i}`}
                className="shrink-0 group/pill relative bg-white/85 backdrop-blur-xl border border-white/90 shadow-md hover:shadow-lg hover:border-primary/50 hover:scale-105 transition-all duration-300 rounded-full px-6 py-3.5 flex items-center gap-3.5"
              >
                <span className="font-bold text-secondary text-sm sm:text-base group-hover/pill:text-primary transition-colors whitespace-nowrap">
                  {ind.name}
                </span>

                <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover/pill:scale-110 transition-transform">
                  <ind.icon className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
