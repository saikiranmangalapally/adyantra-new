"use client";

import React, { useState, useRef } from "react";

export default function AdvantaVideoIntro() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="video-intro" className="relative z-20">
      {/* Background: Top half white/light, bottom half dark matching Fun Facts section */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-white" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#1b1c23]" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 pb-6">
        {/* Curved Video Thumbnail Card matching Screenshot 2026-10-27 104557.png */}
        <div
          className="relative w-full aspect-[16/8] md:aspect-[21/9] min-h-[340px] md:min-h-[460px] rounded-[36px] overflow-hidden shadow-2xl bg-[#111216] group cursor-pointer border border-black/10 z-20"
          style={{
            backgroundImage: "url(/assets/digiplus/About.jpg)",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          onClick={togglePlay}
        >
          {/* Main Video Element */}
          <video
            ref={videoRef}
            src="/assets/videos/ai_services.mp4"
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              isPlaying ? "opacity-100" : "opacity-0"
            }`}
            playsInline
            loop
            preload="metadata"
          />

          {/* Dark Overlay when paused */}
          <div
            className={`absolute inset-0 bg-black/25 transition-opacity duration-500 pointer-events-none ${
              isPlaying ? "opacity-0" : "opacity-25"
            }`}
          />

          {/* Overlapping Yellow Circle Accent with Black Play Button on Left Edge */}
          <div className="absolute -left-10 sm:-left-12 top-1/2 -translate-y-1/2 z-20 pointer-events-none flex items-center justify-center">
            {/* Outer Yellow Circle with white line */}
            <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-[#f5a623] flex items-center justify-center relative shadow-xl">
              {/* Thin white concentric circle outline */}
              <div className="absolute inset-2 rounded-full border border-white/40 pointer-events-none" />

              {/* Inner Black Play Circle Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1b1c23] hover:bg-black text-[#f5a623] flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer pointer-events-auto group"
                aria-label={isPlaying ? "Pause Video" : "Play Video"}
              >
                {isPlaying ? (
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7 fill-current ml-1 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Authentic White "Watch The Video" Script in Center */}
          <div
            className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-500 z-10 px-4 ${
              isPlaying ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <img
              src="/assets/digiplus/Watch-The-Video.png"
              alt="Watch The Video"
              className="max-w-[420px] sm:max-w-[540px] md:max-w-[640px] w-full object-contain filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.9)]"
            />
          </div>
        </div>
      </div>

      {/* Cinematic Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-[#f5a623] text-white flex items-center justify-center text-xl transition-colors z-50 cursor-pointer"
            aria-label="Close Modal"
          >
            ✕
          </button>
          <div
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src="/assets/videos/ai_services.mp4"
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}

