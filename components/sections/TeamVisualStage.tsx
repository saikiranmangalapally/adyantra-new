"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Activity, Code2, Rocket, CheckCircle2 } from "lucide-react";

export default function TeamVisualStage() {
  return (
    <div className="relative w-full max-w-[520px] aspect-square flex items-center justify-center mx-auto select-none">
      {/* ── Soft Ambient Glow ── */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-primary/15 via-indigo-500/10 to-cyan-400/15 blur-3xl pointer-events-none" />

      {/* ── Center 3D Artwork ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        animate={{ y: [0, -10, 0] }}
        className="relative z-10 w-[80%] h-[80%] flex items-center justify-center drop-shadow-[0_20px_40px_rgba(106,71,237,0.18)]"
      >
        <Image
          src="/assets/img/team/team-3d.png"
          alt="Our Expert Team Collaboration"
          width={600}
          height={600}
          className="w-full h-auto object-contain rounded-2xl"
          priority
        />
      </motion.div>

      {/* ── Floating Badge 1: Direct Technical Access (Top Left) ── */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        className="absolute top-[2%] sm:top-[8%] left-1 sm:left-[-4%] z-20 bg-white/95 backdrop-blur-md border border-border/80 p-2.5 sm:p-3 rounded-2xl shadow-lg flex items-center gap-2.5 sm:gap-3 cursor-pointer scale-90 sm:scale-100 origin-left"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
          <Code2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        </div>
        <div>
          <p className="text-[11px] sm:text-xs font-bold text-secondary leading-tight">Direct Access</p>
          <p className="text-[10px] sm:text-[11px] text-muted-foreground">Senior Tech Leads</p>
        </div>
      </motion.div>

      {/* ── Floating Badge 2: Continuous Optimization (Top Right) ── */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className="absolute top-[6%] sm:top-[12%] right-1 sm:right-[-4%] z-20 bg-white/95 backdrop-blur-md border border-border/80 p-2.5 sm:p-3 rounded-2xl shadow-lg flex items-center gap-2.5 sm:gap-3 cursor-pointer scale-90 sm:scale-100 origin-right"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
          <Activity className="w-4 h-4 sm:w-4.5 sm:h-4.5 animate-pulse" />
        </div>
        <div>
          <p className="text-[11px] sm:text-xs font-bold text-secondary leading-tight">24/7 Tuning</p>
          <p className="text-[10px] sm:text-[11px] text-emerald-600 font-semibold">Live Attribution</p>
        </div>
      </motion.div>

      {/* ── Floating Badge 3: 100% In-House (Bottom Left) ── */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        whileHover={{ scale: 1.05 }}
        className="absolute bottom-[8%] sm:bottom-[14%] left-1 sm:left-[-5%] z-20 bg-white/95 backdrop-blur-md border border-border/80 p-2.5 sm:p-3 rounded-2xl shadow-lg flex items-center gap-2.5 sm:gap-3 cursor-pointer scale-90 sm:scale-100 origin-left"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
          <Users className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        </div>
        <div>
          <p className="text-[11px] sm:text-xs font-bold text-secondary leading-tight">100% In-House</p>
          <p className="text-[10px] sm:text-[11px] text-purple-600 font-semibold">Zero Outsourcing</p>
        </div>
      </motion.div>

      {/* ── Floating Badge 4: Tailored Growth (Bottom Right) ── */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 1.4 }}
        whileHover={{ scale: 1.05 }}
        className="absolute bottom-[4%] sm:bottom-[10%] right-1 sm:right-[-3%] z-20 bg-secondary/95 backdrop-blur-md border border-white/10 p-2.5 sm:p-3 rounded-2xl shadow-xl flex items-center gap-2.5 sm:gap-3 text-white cursor-pointer scale-90 sm:scale-100 origin-right"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-primary/20 text-accent flex items-center justify-center shrink-0">
          <Rocket className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        </div>
        <div>
          <p className="text-[11px] sm:text-xs font-bold text-white leading-tight">Tailored Growth</p>
          <p className="text-[9px] sm:text-[11px] text-slate-300">+340% Avg ROAS</p>
        </div>
      </motion.div>
    </div>
  );
}
