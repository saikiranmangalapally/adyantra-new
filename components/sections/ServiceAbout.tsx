"use client";

import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "@/lib/variants";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface ServiceAboutProps {
  subtitle?: string;
  title: React.ReactNode;
  paragraphs: string[];
  pillarsTitle?: string;
  pillars: string[];
}

export default function ServiceAbout({
  subtitle = "ABOUT THIS SERVICE",
  title,
  paragraphs,
  pillarsTitle = "CORE CAPABILITIES",
  pillars
}: ServiceAboutProps) {
  return (
    <section className="section-padding bg-white relative overflow-hidden" id="about-service">
      <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          
          {/* Left Column: ABOUT */}
          <motion.div className="lg:w-1/2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={slideUp} className="sub-title bg-color-2 mb-3">
              {subtitle}
            </motion.div>
            <motion.h2 variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 text-secondary">
              {title}
            </motion.h2>
            
            {paragraphs.map((p, i) => (
              <motion.p key={i} variants={slideUp} className={`text-muted-foreground text-sm sm:text-base leading-relaxed ${i === paragraphs.length - 1 ? 'mb-6' : 'mb-3'}`}>
                {p}
              </motion.p>
            ))}

            <motion.div variants={slideUp}>
              <Link href="/contact" className="shadcn-input-button-solid">
                <span>Speak with an Expert</span>
                <span className="badge-icon">
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: CORE CAPABILITIES */}
          <motion.div className="lg:w-1/2 w-full" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-1.5">{pillarsTitle}</h3>
            <p className="text-xs text-muted-foreground mb-5">Our core competencies driving sustained growth.</p>
            
            <div className="border-t border-border/80">
              {pillars.map((cap, i) => (
                <div key={i} className="py-3.5 border-b border-border/80 flex items-center justify-between group hover:bg-surface/50 px-2 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-secondary text-sm sm:text-base md:text-lg group-hover:text-primary transition-colors">
                      {cap}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-primary group-hover:scale-110 transition-transform">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
