"use client";

import { useEffect, useRef, useState } from "react";

interface HeroVideoBackgroundProps {
  videoSrc?: string;
  overlayOpacity?: string;
  className?: string;
}

export default function HeroVideoBackground({
  videoSrc = "/hero-bg.mp4",
  overlayOpacity = "bg-slate-950/50",
  className = "",
}: HeroVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");

    const playVideo = () => {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay blocked by mobile battery saver / policy
          const triggerOnInteract = () => {
            video.play().then(() => setIsPlaying(true)).catch(() => {});
            window.removeEventListener("touchstart", triggerOnInteract);
            window.removeEventListener("scroll", triggerOnInteract);
            window.removeEventListener("click", triggerOnInteract);
          };
          window.addEventListener("touchstart", triggerOnInteract, { once: true, passive: true });
          window.addEventListener("scroll", triggerOnInteract, { once: true, passive: true });
          window.addEventListener("click", triggerOnInteract, { once: true, passive: true });
        });
    };

    playVideo();
  }, [videoSrc]);

  return (
    <div className={`absolute inset-0 overflow-hidden bg-gradient-to-b from-[#0e0720] via-[#140b2e] to-[#0b0518] ${className}`}>
      {/* ── Glowing Tech Backdrop (Ensures hero is vibrant even before video buffers) ── */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(106, 71, 237, 0.45) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.35) 0%, transparent 50%)",
        }}
      />

      {/* Subtle Tech Dot Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#6A47ED 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient Moving Gradient Orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      {/* ── Background Video Layer ── */}
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        className={`h-full w-full object-cover mix-blend-screen transition-opacity duration-1000 ${
          isPlaying ? "opacity-75" : "opacity-30"
        }`}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Dark tint overlay for crystal clear typography */}
      <div className={`absolute inset-0 ${overlayOpacity} backdrop-blur-[0.5px]`} />

      {/* Bottom seamless fade to next section */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/10 to-transparent pointer-events-none opacity-10" />
    </div>
  );
}
