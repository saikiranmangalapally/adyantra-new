"use client";

import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "@/lib/variants";

export interface ProcessStep {
  title: string;
  description: string;
  timeline?: string;
}

interface ExecutionMethodologyProps {
  steps: ProcessStep[];
}

export default function ExecutionMethodology({ steps = [] }: ExecutionMethodologyProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="section-padding relative overflow-hidden bg-white border-y border-border/80">
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="sub-title bg-color-2 mb-3 inline-block">
            EXECUTION METHODOLOGY
          </motion.div>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-secondary">
            Our Growth Process
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-muted-foreground mt-4 text-sm sm:text-base">
            A systematic, data-driven approach to scaling your business predictably.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={slideUp}
              className="relative bg-white p-8 rounded-3xl border border-border/80 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-5xl font-black text-slate-100 mb-6 group-hover:text-primary/10 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {step.description}
              </p>
              {step.timeline && (
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-surface text-secondary text-xs font-bold border border-border">
                  {step.timeline}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
