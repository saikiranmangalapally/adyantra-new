"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, TrendingUp, Bot, Activity, ShieldCheck } from "lucide-react";

// Depth bokeh particle configs
const BOKEH = [
  { size: 90, top: "10%", left: "10%", opacity: 0.2, duration: 7, delay: 0, color: "bg-cyan-400" },
  { size: 60, top: "60%", left: "80%", opacity: 0.18, duration: 9, delay: 1.2, color: "bg-purple-500" },
  { size: 40, top: "25%", left: "85%", opacity: 0.25, duration: 6, delay: 0.5, color: "bg-indigo-400" },
  { size: 70, top: "75%", left: "15%", opacity: 0.15, duration: 8, delay: 2, color: "bg-cyan-500" },
  { size: 30, top: "45%", left: "65%", opacity: 0.3, duration: 5.5, delay: 0.8, color: "bg-white" },
];

export default function Hero3DParallax() {
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["9deg", "-9deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-9deg", "9deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-square max-w-[580px] mx-auto flex items-center justify-center [perspective:1200px] select-none"
    >
      {/* ─── CYBER STUDIO BACKDROP (Matches 4K Commercial Video) ─── */}
      <div className="absolute inset-[-10%] rounded-full overflow-hidden pointer-events-none">
        {/* Deep Dark Nebula Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, rgba(123, 97, 255, 0.3) 0%, rgba(0, 229, 255, 0.18) 40%, rgba(10, 6, 24, 0.85) 70%, transparent 100%)",
          }}
        />

        {/* Ambient Key Glow (Top Right Cyan) */}
        <div
          className="absolute top-[-10%] right-[-5%] w-[65%] h-[65%] rounded-full blur-[90px] opacity-40"
          style={{ background: "radial-gradient(circle, #00E5FF 0%, transparent 70%)" }}
        />

        {/* Ambient Fill Glow (Bottom Left Purple) */}
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[90px] opacity-35"
          style={{ background: "radial-gradient(circle, #7B61FF 0%, transparent 70%)" }}
        />

        {/* Floating Bokeh Orbs */}
        {BOKEH.map((b, i) => (
          <motion.div
            key={`bokeh-${i}`}
            animate={{
              y: [0, -14, 6, 0],
              x: [0, 8, -6, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: b.duration,
              ease: "easeInOut",
              delay: b.delay,
            }}
            className={`absolute rounded-full ${b.color} blur-[14px]`}
            style={{
              width: b.size,
              height: b.size,
              top: b.top,
              left: b.left,
              opacity: b.opacity,
            }}
          />
        ))}

        {/* Cyber Hologram Floor Rings */}
        <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[75%] h-[20%] rounded-full border border-cyan-500/30 shadow-[0_0_30px_rgba(0,229,255,0.2)] transform -rotate-x-60" />
        <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[55%] h-[15%] rounded-full border border-purple-500/40 shadow-[0_0_20px_rgba(123,97,255,0.25)] transform -rotate-x-60" />
      </div>

      {/* ─── 3D TILT CONTAINER ─── */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Soft Ion Ground Shadow */}
        <div
          style={{ transform: "translateZ(-40px)" }}
          className="absolute bottom-[6%] left-[18%] right-[18%] h-[16%] rounded-full bg-cyan-500/25 blur-[30px]"
        />

        {/* 3D Realistic Robot Character with Seamless Edge Fade */}
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          style={{ transform: "translateZ(20px)" }}
          className="relative z-10 w-[84%] h-[84%] flex items-center justify-center"
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{
              maskImage: "radial-gradient(circle at 50% 52%, black 60%, transparent 74%)",
              WebkitMaskImage: "radial-gradient(circle at 50% 52%, black 60%, transparent 74%)",
            }}
          >
            <Image
              src="/assets/img/hero/realistic-robot-hero.jpg"
              alt="Adyantra 3D Realistic AI Mascot"
              width={640}
              height={640}
              className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,229,255,0.3)]"
              priority
            />
          </div>
        </motion.div>

        {/* ─── FLOATING CYBER TELEMETRY CARDS ─── */}

        {/* Card 1: 24/7 AI Automation (Top Right) */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.2 }}
          whileHover={{ scale: 1.08, z: 90 }}
          style={{ transform: "translateZ(70px)" }}
          className="absolute top-[8%] right-[-4%] sm:right-[-2%] z-20 cursor-pointer"
        >
          <div className="flex items-center gap-3 bg-[#0A0518]/90 backdrop-blur-xl border border-cyan-500/40 shadow-[0_10px_35px_rgba(0,229,255,0.25)] rounded-2xl p-3.5 pr-5 transition-all hover:border-cyan-400 hover:shadow-[0_15px_45px_rgba(0,229,255,0.4)]">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Bot className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-mono font-bold text-white tracking-wide">AI AUTOMATION</span>
              </div>
              <div className="text-[11px] text-cyan-300/90 font-medium">24/7 Autonomous Leads</div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: +340% ROAS Performance (Bottom Left) */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.8 }}
          whileHover={{ scale: 1.08, z: 110 }}
          style={{ transform: "translateZ(85px)" }}
          className="absolute bottom-[16%] left-[-4%] sm:left-[-2%] z-20 cursor-pointer"
        >
          <div className="flex items-center gap-3 bg-[#0A0518]/90 backdrop-blur-xl border border-purple-500/40 shadow-[0_10px_35px_rgba(123,97,255,0.25)] rounded-2xl p-3.5 pr-5 transition-all hover:border-purple-400 hover:shadow-[0_15px_45px_rgba(123,97,255,0.4)]">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold font-mono text-white tracking-wide">+340% ROAS</div>
              <div className="text-[11px] text-purple-300/90 font-medium">Algorithmic Scaling</div>
            </div>
          </div>
        </motion.div>

        {/* Card 3: In-House Engineering (Bottom Right) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 4.6, ease: "easeInOut", delay: 1.4 }}
          whileHover={{ scale: 1.1, z: 130 }}
          style={{ transform: "translateZ(100px)" }}
          className="absolute bottom-[6%] right-[6%] z-30 cursor-pointer"
        >
          <div className="flex items-center gap-2.5 bg-[#090514]/95 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.5)] rounded-full py-2.5 px-4 sm:px-5 border border-white/20 transition-all hover:border-cyan-400/60">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono font-bold text-white tracking-wide">
              100% IN-HOUSE DEV
            </span>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
