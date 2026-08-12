"use client";

import { motion } from "framer-motion";
import { slideUp } from "@/lib/variants";
import Image from "next/image";

export type ProcessStepData = {
  title: string;
  description: string;
  timeline?: string;
};

export default function ServiceProcessVisual({ steps }: { steps: ProcessStepData[] }) {
  return (
    <section className="section-padding bg-slate-50/50 relative border-t border-border/60" id="process">
      <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <motion.div className="lg:w-[45%] lg:sticky lg:top-32 h-fit" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp}>
            <div className="sub-title bg-color-2 mb-3">OUR METHODOLOGY</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
              A Proven Framework For <br />
              <span className="text-primary">Predictable Growth.</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-8 leading-relaxed max-w-lg">
              We leave nothing to chance. Our entire execution strategy is mapped out in phases to ensure maximum transparency, rapid deployment, and measurable return on investment.
            </p>
            <div className="relative rounded-2xl overflow-hidden aspect-video max-w-lg shadow-xl hidden md:block bg-gradient-to-tr from-primary/10 via-cyan-400/10 to-accent/10">
              <Image src="/assets/img/about/about-3d.png" alt="Our Process" fill className="object-contain p-4 drop-shadow-[0_20px_40px_rgba(15,115,188,0.2)]" />
            </div>
          </motion.div>

          <div className="lg:w-[55%]">
            <div className="border-t border-border/80">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="py-6 border-b border-border/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-8 group hover:bg-surface/50 px-4 rounded-xl transition-colors"
                >
                  <div className="flex flex-col gap-1 md:w-[45%] shrink-0">
                    <div className="flex items-center gap-4">
                      <span className="text-primary font-bold text-base md:text-lg">0{i + 1}</span>
                      <h3 className="text-lg md:text-xl font-bold text-secondary group-hover:text-primary transition-colors">{step.title}</h3>
                    </div>
                    {step.timeline && (
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 ml-9">{step.timeline}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed md:w-[55%]">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
