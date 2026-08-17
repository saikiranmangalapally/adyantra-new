"use client";

import { useEffect, useRef, useState } from "react";

interface HeroVideoBackgroundProps {
  videoSrc?: string;
  overlayOpacity?: string;
  className?: string;
}

export default function HeroVideoBackground({
  videoSrc = "/hero-bg.mp4",
  overlayOpacity = "bg-black/60",
  className = "",
}: HeroVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // React JSX doesn't always bind DOM properties defaultMuted / muted correctly
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");

    const attemptPlay = async () => {
      try {
        await video.play();
        setIsVideoLoaded(true);
      } catch {
        // Autoplay policy prevented playback (e.g. Low Power Mode on iOS/Android)
        // Auto-start on first user touch/scroll/click
        const handleInteraction = () => {
          video.play().then(() => setIsVideoLoaded(true)).catch(() => {});
          window.removeEventListener("touchstart", handleInteraction);
          window.removeEventListener("scroll", handleInteraction);
          window.removeEventListener("click", handleInteraction);
        };

        window.addEventListener("touchstart", handleInteraction, { once: true, passive: true });
        window.addEventListener("scroll", handleInteraction, { once: true, passive: true });
        window.addEventListener("click", handleInteraction, { once: true, passive: true });
      }
    };

    attemptPlay();
  }, [videoSrc]);

  return (
    <div className={`absolute inset-0 overflow-hidden bg-slate-950 ${className}`}>
      {/* Background Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-700 ${
          isVideoLoaded ? "opacity-100" : "opacity-80"
        }`}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Dark overlay for better text legibility */}
      <div className={`absolute inset-0 ${overlayOpacity}`} />
    </div>
  );
}
