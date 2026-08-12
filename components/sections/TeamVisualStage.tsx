"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Activity, ShieldCheck, Sparkles, CheckCircle2, Headphones } from "lucide-react";

export default function TeamVisualStage() {
  return (
    <div className="relative w-full max-w-[550px] aspect-square flex items-center justify-center mx-auto">
      {/* ── Background Stage Glow ── */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-400/20 via-primary/20 to-purple-500/20 blur-3xl animate-pulse pointer-events-none" />

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
          src="/assets/img/team/team-3d.png"
          alt="Our Expert Team Collaboration"
          width={600}
          height={600}
          className="w-full h-auto object-contain rounded-2xl"
          priority
        />
      </motion.div>

      {/* ── Floating Badge 1: Direct Comms (Top Left) ── */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        className="absolute top-[8%] left-[-4%] z-20 bg-white/95 backdrop-blur-md border border-white/80 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 cursor-pointer"
      >
        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center shrink-0">
          <Users className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-bold text-secondary leading-tight">Direct Access</p>
          <p className="text-[11px] text-muted-foreground">Senior Strategists & Devs</p>
        </div>
      </motion.div>

      {/* ── Floating Badge 2: 24/7 System Monitoring (Top Right) ── */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        className="absolute top-[16%] right-[-6%] z-20 bg-white/95 backdrop-blur-md border border-white/80 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 cursor-pointer"
      >
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
          <Activity className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-bold text-secondary leading-tight">24/7 Monitoring</p>
          <p className="text-[11px] text-emerald-600 font-semibold">Active & Live</p>
        </div>
      </motion.div>

      {/* ── Floating Badge 3: 30-Day Guarantee (Bottom Left) ── */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.2 }}
        whileHover={{ scale: 1.05 }}
        className="absolute bottom-[18%] left-[-6%] z-20 bg-white/95 backdrop-blur-md border border-white/80 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 cursor-pointer"
      >
        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Risk-Free</p>
          <p className="text-sm font-extrabold text-secondary">30-Day Guarantee</p>
        </div>
      </motion.div>

      {/* ── Floating Badge 4: Full-Stack Talent (Bottom Right) ── */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 1.6 }}
        whileHover={{ scale: 1.05 }}
        className="absolute bottom-[10%] right-[-2%] z-20 bg-slate-900/90 backdrop-blur-md border border-white/10 p-3.5 rounded-2xl shadow-2xl flex items-center gap-3 text-white cursor-pointer"
      >
        <div className="w-9 h-9 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0">
          <Sparkles className="w-4 h-4 text-purple-300 animate-pulse" />
        </div>
        <div>
          <p className="text-xs font-bold text-white leading-tight">In-House Talent</p>
          <p className="text-[11px] text-slate-300">Designers, Devs & Ads</p>
        </div>
      </motion.div>
    </div>
  );
}
