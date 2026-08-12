"use client";

import { motion } from "framer-motion";
import { slideUp } from "@/lib/variants";

export interface ProcessRow {
  title: string;
  desc: string;
}

export interface ServiceProcessProps {
  subtitle?: string;
  title?: string;
  description?: string;
  steps: ProcessRow[];
}

export default function ServiceProcess({
  subtitle = "OUR PROVEN PROCESS",
  title = "A Transparent 4-Step Growth Methodology",
  description = "Our structured framework ensures rapid deployment, data-driven optimization, and predictable scaling.",
  steps
}: ServiceProcessProps) {
  return (
    <section className="section-padding relative bg-white overflow-hidden" id="service-process">
      <div className="container mx-auto px-4 md:px-8 max-w-[1100px] relative z-10">
        <div className="text-center mb-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="sub-title bg-color-2 mb-3 inline-block">
            {subtitle}
          </motion.div>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            {title}
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-muted-foreground mt-3 text-sm sm:text-base max-w-xl mx-auto">
            {description}
          </motion.p>
        </div>

        {/* Process Rows */}
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
              <div className="flex items-center gap-6 md:w-[40%] shrink-0">
                <span className="text-primary font-bold text-base md:text-lg">0{i + 1}</span>
                <h3 className="text-lg md:text-xl font-bold text-secondary group-hover:text-primary transition-colors">{step.title}</h3>
              </div>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed md:w-[55%]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
