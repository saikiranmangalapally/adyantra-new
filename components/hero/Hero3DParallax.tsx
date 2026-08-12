"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, TrendingUp, Bot } from "lucide-react";

// Static particle configs (avoids SSR hydration mismatch from Math.random)
const BOKEH = [
  { size: 80, top: "12%", left: "8%",  opacity: 0.15, duration: 7,   delay: 0,   color: "bg-cyan-300" },
  { size: 50, top: "65%", left: "75%", opacity: 0.12, duration: 9,   delay: 1.2, color: "bg-purple-300" },
  { size: 35, top: "30%", left: "85%", opacity: 0.18, duration: 6,   delay: 0.5, color: "bg-primary/40" },
  { size: 60, top: "80%", left: "20%", opacity: 0.10, duration: 8,   delay: 2,   color: "bg-cyan-200" },
  { size: 25, top: "50%", left: "60%", opacity: 0.20, duration: 5.5, delay: 0.8, color: "bg-white" },
  { size: 18, top: "20%", left: "55%", opacity: 0.25, duration: 4.5, delay: 1.5, color: "bg-white" },
  { size: 12, top: "75%", left: "45%", opacity: 0.30, duration: 6.5, delay: 0.3, color: "bg-white" },
];

export default function Hero3DParallax() {
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 120, damping: 25 });
  const mouseY = useSpring(y, { stiffness: 120, damping: 25 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-8deg", "8deg"]);

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
      className="relative w-full aspect-square max-w-[600px] flex items-center justify-center [perspective:1200px]"
    >
      {/* ─── DRIBBBLE-STYLE 3D STUDIO BACKGROUND ─── */}
      {/* This sits OUTSIDE the tilt container so it doesn't rotate with the robot */}
      <div className="absolute inset-[-15%] rounded-[50%] overflow-hidden pointer-events-none">

        {/* Base: Soft lavender-to-white radial gradient (studio backdrop) */}
        <div className="absolute inset-0 bg-gradient-radial from-[#e8e0f0] via-[#f0ecf6] to-white" 
             style={{ background: "radial-gradient(circle at 50% 40%, #e0d8f0 0%, #ece6f4 35%, #f5f2fa 60%, #ffffff 100%)" }} 
        />

        {/* Subtle warm accent glow (top-right, like studio key light) */}
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full blur-[100px] opacity-40"
             style={{ background: "radial-gradient(circle, #c4b5fd 0%, transparent 70%)" }}
        />

        {/* Cool fill light (bottom-left) */}
        <div className="absolute bottom-[-5%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[80px] opacity-30"
             style={{ background: "radial-gradient(circle, #a5f3fc 0%, transparent 70%)" }}
        />

        {/* Depth-of-field Bokeh orbs (floating, slowly drifting) */}
        {BOKEH.map((b, i) => (
          <motion.div
            key={`bokeh-${i}`}
            animate={{
              y: [0, -15, 5, 0],
              x: [0, 8, -6, 0],
              scale: [1, 1.08, 0.95, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: b.duration,
              ease: "easeInOut",
              delay: b.delay,
            }}
            className={`absolute rounded-full ${b.color} blur-[12px]`}
            style={{
              width: b.size,
              height: b.size,
              top: b.top,
              left: b.left,
              opacity: b.opacity,
            }}
          />
        ))}

        {/* Film grain / noise overlay for that premium 3D render texture */}
        <div className="absolute inset-0 opacity-[0.03]"
             style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
        />
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

        {/* Soft ground shadow beneath the robot */}
        <div
          style={{ transform: "translateZ(-30px)" }}
          className="absolute bottom-[8%] left-[15%] right-[15%] h-[15%] rounded-[50%] bg-black/[0.06] blur-[25px]"
        />

        {/* Robot Image */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          style={{ transform: "translateZ(0px)" }}
          className="relative z-10 w-[80%] h-[80%] flex items-center justify-center"
        >
          <Image
            src="/assets/img/hero/cute-robot-transparent-v2.png"
            alt="3D AI Robot"
            width={600}
            height={600}
            className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(100,60,180,0.18)]"
            priority
          />
        </motion.div>

        {/* Floating UI Card 1: AI Status (Top Right) */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
          whileHover={{ scale: 1.08, z: 90 }}
          style={{ transform: "translateZ(60px)" }}
          className="absolute top-[12%] right-[-8%] z-20 cursor-pointer"
        >
          <div className="flex items-center gap-3 bg-white/95 backdrop-blur-xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.08)] rounded-2xl p-3.5 pr-5 transition-shadow hover:shadow-[0_20px_50px_rgba(15,115,188,0.15)]">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-800">AI Active</div>
              <div className="text-[11px] text-slate-500 font-medium">Automating 24/7</div>
            </div>
          </div>
        </motion.div>

        {/* Floating UI Card 2: Growth Stats (Bottom Left) */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1 }}
          whileHover={{ scale: 1.08, z: 120 }}
          style={{ transform: "translateZ(90px)" }}
          className="absolute bottom-[18%] left-[-5%] z-20 cursor-pointer"
        >
          <div className="flex items-center gap-3 bg-white/95 backdrop-blur-xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.08)] rounded-2xl p-3.5 pr-5 transition-shadow hover:shadow-[0_20px_50px_rgba(15,115,188,0.15)]">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-primary shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-800">+340% ROAS</div>
              <div className="text-[11px] text-slate-500 font-medium">Avg. Growth</div>
            </div>
          </div>
        </motion.div>

        {/* Floating Badge: Conversion (Bottom Right) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.5 }}
          whileHover={{ scale: 1.1, z: 150 }}
          style={{ transform: "translateZ(120px)" }}
          className="absolute bottom-[8%] right-[3%] z-30 cursor-pointer"
        >
          <div className="flex items-center gap-2.5 bg-slate-900/95 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.25)] rounded-full py-2.5 px-5 border border-white/20 transition-all hover:border-amber-400/50">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="text-xs font-bold text-white tracking-wide">4.8x Conversion</span>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
