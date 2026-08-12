"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on desktop, skip if touch device
    if (typeof window === "undefined") return;
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // GSAP QuickTo for smooth following
    const xDot = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power2.out" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power2.out" });
    const xRing = gsap.quickTo(ring, "x", { duration: 0.4, ease: "power2.out" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.4, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      xDot(e.clientX - 4);
      yDot(e.clientY - 4);
      xRing(e.clientX - 16);
      yRing(e.clientY - 16);
    };

    const handleMouseEnter = () => {
      gsap.to(dot, { scale: 1.5, duration: 0.2 });
      gsap.to(ring, { scale: 1.5, borderColor: "rgba(110, 231, 247, 0.8)", duration: 0.2 });
    };

    const handleMouseLeave = () => {
      gsap.to(dot, { scale: 1, duration: 0.2 });
      gsap.to(ring, { scale: 1, borderColor: "rgba(110, 231, 247, 0.4)", duration: 0.2 });
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Add hover effect to all interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [role='button'], input, textarea, select");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hide-mobile" />
      <div ref={ringRef} className="cursor-ring hide-mobile" />
    </>
  );
}
