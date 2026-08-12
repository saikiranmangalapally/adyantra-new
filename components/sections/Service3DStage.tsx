"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Award, TrendingUp, Zap, Star } from "lucide-react";

interface Service3DStageProps {
  imageSrc?: string;
  images?: string[];
  imageAlt: string;
  badge1Title: string;
  badge1Sub: string;
  badge2Title: string;
  badge2Sub: string;
  badge3Title: string;
  badge3Sub: string;
}

export default function Service3DStage({
  imageSrc,
  images,
  imageAlt,
  badge1Title,
  badge1Sub,
  badge2Title,
  badge2Sub,
  badge3Title,
  badge3Sub,
}: Service3DStageProps) {
  const finalImages = images || (imageSrc ? [imageSrc] : []);

  return (
    <div className="relative w-full max-w-[520px] aspect-square flex items-center justify-center mx-auto">
      {/* ── Ambient Background Glow ── */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-primary/20 via-cyan-400/20 to-purple-500/20 blur-3xl animate-pulse pointer-events-none" />

      {/* ── Center Floating 3D Artwork (Primary) ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        animate={{ y: [0, -12, 0] }}
        className="relative z-10 w-[70%] h-[70%] flex items-center justify-center drop-shadow-[0_20px_40px_rgba(106,71,237,0.25)]"
      >
        <Image
          src={finalImages[0] || ""}
          alt={imageAlt}
          width={600}
          height={600}
          className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(106,71,237,0.25)]"
          priority
        />
      </motion.div>

      {/* ── Floating Secondary Image (Bottom Left) ── */}
      {finalImages[1] && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          animate={{ y: [0, 8, 0] }}
          className="absolute bottom-[5%] left-[-10%] z-20 w-[45%] h-[45%] flex items-center justify-center drop-shadow-xl"
        >
          <Image
            src={finalImages[1]}
            alt={imageAlt + " 2"}
            width={300}
            height={300}
            className="w-full h-auto object-contain mix-blend-multiply"
          />
        </motion.div>
      )}

      {/* ── Floating Tertiary Image (Top Right) ── */}
      {finalImages[2] && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          animate={{ y: [0, -8, 0] }}
          className="absolute top-[2%] right-[-8%] z-0 w-[40%] h-[40%] flex items-center justify-center drop-shadow-xl"
        >
          <Image
            src={finalImages[2]}
            alt={imageAlt + " 3"}
            width={300}
            height={300}
            className="w-full h-auto object-contain mix-blend-multiply"
          />
        </motion.div>
      )}

      {/* ── Floating Glass Badge 1 (Top Left) ── */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        className="absolute top-[8%] left-[-2%] z-20 bg-white/95 backdrop-blur-md border border-white/80 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 cursor-pointer"
      >
        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-extrabold text-secondary leading-tight">{badge1Title}</p>
          <p className="text-[11px] text-muted-foreground font-semibold">{badge1Sub}</p>
        </div>
      </motion.div>

      {/* ── Floating Glass Badge 2 (Top Right) ── */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        className="absolute top-[16%] right-[-4%] z-20 bg-white/95 backdrop-blur-md border border-white/80 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 cursor-pointer"
      >
        <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
          <Award className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-0.5 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-current" />
            ))}
          </div>
          <p className="text-xs font-extrabold text-secondary leading-tight mt-0.5">{badge2Title}</p>
          <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">{badge2Sub}</p>
        </div>
      </motion.div>

      {/* ── Floating Glass Badge 3 (Bottom Right) ── */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        className="absolute bottom-[10%] right-[2%] z-20 bg-white/95 backdrop-blur-md border border-white/80 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 cursor-pointer"
      >
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-extrabold text-secondary leading-tight">{badge3Title}</p>
          <p className="text-[11px] text-muted-foreground font-semibold">{badge3Sub}</p>
        </div>
      </motion.div>
    </div>
  );
}
