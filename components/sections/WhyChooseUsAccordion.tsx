"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { slideUp, staggerContainer } from "@/lib/variants";
import WhyUsVisualStage from "@/components/sections/WhyUsVisualStage";

export interface Reason {
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  reasons: Reason[];
}

export default function WhyChooseUs({ reasons = [] }: WhyChooseUsProps) {
  if (!reasons || reasons.length === 0) return null;

  return (
    <section className="section-padding bg-cover bg-center relative" id="why-us" style={{ backgroundImage: "url('/assets/img/team/team-bg.jpg')" }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div className="lg:w-1/2 flex justify-center" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <WhyUsVisualStage />
          </motion.div>
          <motion.div className="lg:w-1/2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={slideUp} className="sub-title bg-color-2 mb-3">THE ADYANTRA ADVANTAGE</motion.div>
            <motion.h2 variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
              Engineered for High ROAS & <br />
              <span className="text-primary">Sustainable Market Dominance.</span>
            </motion.h2>
            <motion.p variants={slideUp} className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
              While traditional agencies rely on outdated templates and guesswork, we build custom growth engines—combining high-performance tech, AI workflows, and precision audience targeting.
            </motion.p>
            <motion.div variants={slideUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {reasons.map((item, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="text-primary w-4.5 h-4.5 shrink-0" />
                    <span className="font-semibold text-xs sm:text-sm text-secondary">{item.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground pl-7">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
