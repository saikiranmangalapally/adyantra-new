"use client";

import React, { useEffect, useRef } from "react";

export default function AvistaNoiseCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const generateNoise = () => {
      const imgData = ctx.createImageData(width, height);
      const data = imgData.data;
      const len = data.length;
      for (let i = 0; i < len; i += 4) {
        const val = (Math.random() * 255) | 0;
        data[i] = val;
        data[i + 1] = val;
        data[i + 2] = val;
        data[i + 3] = 18; // Very subtle noise opacity
      }
      ctx.putImageData(imgData, 0, 0);
    };

    let lastDraw = 0;
    const loop = (time: number) => {
      // Throttle noise generation to ~24 fps for smooth performance
      if (time - lastDraw > 40) {
        generateNoise();
        lastDraw = time;
      }
      animationFrameId = requestAnimationFrame(loop);
    };
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="wa_cursor_noise"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
        opacity: 0.65,
      }}
    />
  );
}
