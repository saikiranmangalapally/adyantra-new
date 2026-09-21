"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  TrendingUp,
  Bot,
  Zap,
  ShieldCheck,
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Sparkles,
} from "lucide-react";

export default function HeroPerformanceTerminal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanScore, setScanScore] = useState<number | null>(null);

  // ── 3D SPRING GYROSCOPE MOUSE TRACKING ──
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 120, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 120, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

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

  const handleScan = () => {
    setIsScanning(true);
    setScanScore(null);
    setTimeout(() => {
      setIsScanning(false);
      setScanScore(98.6);
    }, 1200);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-square max-w-[580px] mx-auto flex items-center justify-center [perspective:1200px] select-none"
    >
      {/* ── Ambient Neon Backdrops ── */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-purple-500/15 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-cyan-400/25 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-500/25 rounded-full blur-[100px] pointer-events-none animate-pulse [animation-delay:2s]" />

      {/* ── 3D TILT TERMINAL CONTAINER ── */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full rounded-3xl p-6 sm:p-7 bg-[#090514]/90 backdrop-blur-2xl border border-cyan-500/35 shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_40px_rgba(0,229,255,0.2)]"
      >
        {/* Terminal Header HUD */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_#34d399]" />
            <div>
              <p className="text-xs font-mono font-bold tracking-wider text-white flex items-center gap-2">
                ADYANTRA NEURAL ENGINE <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">v4.8</span>
              </p>
              <p className="text-[10px] font-mono text-cyan-300/70">4K COMMERCIAL STREAM SYNC // ONLINE</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[10px] font-mono text-cyan-300">
            <Cpu className="w-3 h-3 text-cyan-400 animate-spin [animation-duration:8s]" />
            <span>AI AGENTS ACTIVE</span>
          </div>
        </div>

        {/* ── Live Performance ROAS Chart Display ── */}
        <div className="relative rounded-2xl p-4 mb-5 bg-black/50 border border-white/10 overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-[10px] font-mono text-gray-400">EXPONENTIAL GROWTH CURVE</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-mono font-black text-white">+340%</span>
                <span className="text-xs font-mono text-emerald-400 font-bold">AVG ROAS MULTIPLIER</span>
              </div>
            </div>
            <div className="px-2 py-1 rounded bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-400 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              <span>HIGH SCALE</span>
            </div>
          </div>

          {/* Glowing Animated SVG Growth Wave */}
          <div className="relative h-28 w-full mt-1">
            <svg viewBox="0 0 400 120" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#00E5FF" stop-opacity="0.45" />
                  <stop offset="100%" stop-color="#7B61FF" stop-opacity="0.0" />
                </linearGradient>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="#00E5FF" />
                  <stop offset="50%" stop-color="#7B61FF" />
                  <stop offset="100%" stop-color="#00F5A0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="0" y1="30" x2="400" y2="30" stroke="rgba(255,255,255,0.06)" strokeDasharray="4" />
              <line x1="0" y1="65" x2="400" y2="65" stroke="rgba(255,255,255,0.06)" strokeDasharray="4" />
              <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.06)" strokeDasharray="4" />

              {/* Area Fill */}
              <path
                d="M 0 110 Q 70 95, 130 80 T 260 40 T 400 12 L 400 120 L 0 120 Z"
                fill="url(#chartGrad)"
              />

              {/* Main Glowing Line */}
              <path
                d="M 0 110 Q 70 95, 130 80 T 260 40 T 400 12"
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="3.5"
                className="drop-shadow-[0_0_12px_rgba(0,229,255,0.7)]"
              />

              {/* Active Pulse Points */}
              <circle cx="130" cy="80" r="4" fill="#00E5FF" className="animate-ping" />
              <circle cx="130" cy="80" r="3" fill="#FFFFFF" />

              <circle cx="260" cy="40" r="4" fill="#7B61FF" className="animate-ping [animation-delay:1s]" />
              <circle cx="260" cy="40" r="3" fill="#FFFFFF" />

              <circle cx="400" cy="12" r="5" fill="#00F5A0" className="animate-ping [animation-delay:0.5s]" />
              <circle cx="400" cy="12" r="4" fill="#FFFFFF" />
            </svg>
          </div>
        </div>

        {/* ── Real-Time Multiplier Tickers ── */}
        <div className="grid grid-cols-3 gap-2.5 mb-5">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-colors">
            <p className="text-[9px] font-mono text-gray-400">SEO RANK #1</p>
            <p className="text-sm font-mono font-bold text-cyan-300">94.8%</p>
            <p className="text-[8px] font-mono text-gray-500">Google Top 3</p>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition-colors">
            <p className="text-[9px] font-mono text-gray-400">PAID MEDIA</p>
            <p className="text-sm font-mono font-bold text-purple-300">4.8x</p>
            <p className="text-[8px] font-mono text-gray-500">Meta & Google</p>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-colors">
            <p className="text-[9px] font-mono text-gray-400">AI LEAD BOT</p>
            <p className="text-sm font-mono font-bold text-emerald-300">&lt;12s</p>
            <p className="text-[8px] font-mono text-gray-500">Auto Response</p>
          </div>
        </div>

        {/* ── Interactive Instant Growth Diagnostic Trigger ── */}
        <button
          onClick={handleScan}
          disabled={isScanning}
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 border border-cyan-400/50 text-white font-mono text-xs font-bold tracking-wider transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] flex items-center justify-center gap-2 cursor-pointer"
        >
          {isScanning ? (
            <>
              <Activity className="w-4 h-4 text-cyan-400 animate-spin" />
              <span className="text-cyan-300">RUNNING AI PERFORMANCE AUDIT...</span>
            </>
          ) : scanScore ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300">GROWTH POTENTIAL: {scanScore}/100 • CLAIM AUDIT →</span>
            </>
          ) : (
            <>
              <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400" />
              <span>TEST YOUR BRAND GROWTH CAPACITY (1-CLICK)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-300" />
            </>
          )}
        </button>

        {/* ── FLOATING 3D GLASS TELEMETRY BADGES ── */}

        {/* Badge 1: 24/7 AI Pipeline (Top Right) */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          style={{ transform: "translateZ(50px)" }}
          className="absolute -top-5 -right-4 z-20 pointer-events-none hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E091D]/95 border border-cyan-400/50 shadow-[0_0_20px_rgba(0,229,255,0.3)] text-white text-[11px] font-mono"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-bold text-cyan-300">24/7 AI LEADS</span>
        </motion.div>

        {/* Badge 2: 100% In-House Dev (Bottom Left) */}
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.8 }}
          style={{ transform: "translateZ(60px)" }}
          className="absolute -bottom-4 -left-4 z-20 pointer-events-none hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E091D]/95 border border-purple-400/50 shadow-[0_0_20px_rgba(123,97,255,0.3)] text-white text-[11px] font-mono"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
          <span className="font-bold text-purple-300">100% IN-HOUSE TEAM</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
