"use client";

import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "@/lib/variants";
import { CheckCircle2 } from "lucide-react";
import WhyUsVisualStage, { WhyChooseUsPoint } from "./WhyUsVisualStage";

export default function WhyChooseUsVisual({ reasons }: { reasons: WhyChooseUsPoint[] }) {
  return (
    <section className="section-padding bg-cover bg-center relative" id="why-us" style={{ backgroundImage: "url('/assets/img/team/team-bg.jpg')" }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div className="lg:w-1/2 flex justify-center" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <WhyUsVisualStage reasons={reasons} />
          </motion.div>
          <motion.div className="lg:w-1/2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={slideUp} className="sub-title bg-color-2 mb-3">THE ADYANTRA ADVANTAGE</motion.div>
            <motion.h2 variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 text-secondary">
              Engineered for High Performance & <br />
              <span className="text-primary">Sustainable Market Dominance.</span>
            </motion.h2>
            <motion.p variants={slideUp} className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
              While traditional agencies rely on outdated templates and guesswork, Adyantra builds custom growth engines—combining high-performance frontend tech, AI workflow automation, and precision audience targeting.
            </motion.p>
            <motion.div variants={slideUp} className="grid grid-cols-1 gap-4 mb-8">
              {reasons.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-secondary text-base">{item.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
