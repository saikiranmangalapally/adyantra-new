"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, TrendingUp, Star, Award, Lock } from "lucide-react";

export type WhyChooseUsPoint = {
  title: string;
  description: string;
};

export default function WhyUsVisualStage({ reasons }: { reasons?: WhyChooseUsPoint[] }) {
  return (
    <div className="relative w-full max-w-[550px] aspect-square flex items-center justify-center mx-auto">
      {/* ── Background Stage Glow ── */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-primary/20 via-cyan-400/20 to-accent/20 blur-3xl animate-pulse pointer-events-none" />

      {/* ── Center 3D Artwork ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        animate={{ y: [0, -12, 0] }}
        className="relative z-10 w-[82%] h-[82%] flex items-center justify-center drop-shadow-[0_20px_40px_rgba(15,115,188,0.2)]"
      >
        <Image
          src="/assets/img/about/about-3d.png"
          alt="Why Choose Us Engineering Dominance"
          width={600}
          height={600}
          className="w-full h-auto object-contain rounded-2xl"
          priority
        />
      </motion.div>

      {/* ── Floating Badge 1: 100% In-House Team (Top Left) ── */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        className="absolute top-[2%] sm:top-[8%] left-1 sm:left-[-4%] z-20 bg-white/95 backdrop-blur-md border border-white/80 p-2.5 sm:p-3.5 rounded-2xl shadow-xl flex items-center gap-2.5 sm:gap-3 cursor-pointer scale-90 sm:scale-100 origin-left"
      >
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
          <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div>
          <p className="text-[11px] sm:text-xs font-bold text-secondary leading-tight">{reasons?.[0]?.title || "100% In-House"}</p>
          <p className="text-[10px] sm:text-[11px] text-muted-foreground">Premium Quality</p>
        </div>
      </motion.div>

      {/* ── Floating Badge 2: 98% Client Retention (Top Right) ── */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        className="absolute top-[8%] sm:top-[16%] right-1 sm:right-[-6%] z-20 bg-white/95 backdrop-blur-md border border-white/80 p-2.5 sm:p-3.5 rounded-2xl shadow-xl flex items-center gap-2.5 sm:gap-3 cursor-pointer scale-90 sm:scale-100 origin-right"
      >
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
          <Award className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div>
          <div className="flex items-center gap-0.5 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-yellow-400" />
            ))}
          </div>
          <p className="text-[11px] sm:text-xs font-bold text-secondary mt-0.5">{reasons?.[1]?.title || "98% Retention"}</p>
        </div>
      </motion.div>

      {/* ── Floating Badge 3: Data-Driven ROI (Bottom Left) ── */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.2 }}
        whileHover={{ scale: 1.05 }}
        className="absolute bottom-[10%] sm:bottom-[18%] left-1 sm:left-[-6%] z-20 bg-white/95 backdrop-blur-md border border-white/80 p-2.5 sm:p-3.5 rounded-2xl shadow-xl flex items-center gap-2.5 sm:gap-3 cursor-pointer scale-90 sm:scale-100 origin-left"
      >
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div>
          <p className="text-[9px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">Growth Focus</p>
          <p className="text-xs sm:text-sm font-extrabold text-secondary">{reasons?.[2]?.title || "Data-Driven ROI"}</p>
        </div>
      </motion.div>

      {/* ── Floating Badge 4: No Lock-in Terms (Bottom Right) ── */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 1.6 }}
        whileHover={{ scale: 1.05 }}
        className="absolute bottom-[4%] sm:bottom-[10%] right-1 sm:right-[-2%] z-20 bg-slate-900/90 backdrop-blur-md border border-white/10 p-2.5 sm:p-3.5 rounded-2xl shadow-2xl flex items-center gap-2.5 sm:gap-3 text-white cursor-pointer scale-90 sm:scale-100 origin-right"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
          <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
        <div>
          <p className="text-[11px] sm:text-xs font-bold text-white leading-tight">{reasons?.[3]?.title || "No Lock-in Terms"}</p>
          <p className="text-[9px] sm:text-[11px] text-slate-300">Total Flexibility</p>
        </div>
      </motion.div>
    </div>
  );
}
