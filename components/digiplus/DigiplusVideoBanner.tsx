"use client";

import React, { useState, useRef } from "react";

export default function DigiplusVideoBanner() {
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

  const openFullscreenModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <section id="video-section" className="py-12 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curved Cinematic Video Box matching Digiplus Layout */}
        <div
          className="relative w-full aspect-[16/9] md:aspect-[21/9] min-h-[420px] rounded-[36px] overflow-hidden shadow-2xl bg-[#0e0f14] group cursor-pointer"
          style={{
            backgroundImage: "url(/assets/digiplus/About.jpg)",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          onClick={togglePlay}
        >
          {/* Main Video Element (Plays the user's video) */}
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
            className={`absolute inset-0 bg-black/40 transition-opacity duration-500 pointer-events-none ${
              isPlaying ? "opacity-20" : "opacity-50"
            }`}
          />

          {/* Authentic "Watch The Video" Handwriting PNG Overlay from Digiplus */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-all duration-500 z-10 px-4 ${
              isPlaying ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <img
              src="/assets/digiplus/Watch-The-Video.png"
              alt="Watch The Video"
              className="max-w-[420px] sm:max-w-[520px] md:max-w-[580px] w-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
            />
          </div>

          {/* Bottom Right Corner Yellow Arc Shape (Authentic Ellipse-2831.png from Digiplus) */}
          <div className="absolute -bottom-10 -right-10 pointer-events-none z-10 select-none">
            <img
              src="/assets/digiplus/Ellipse-2831.png"
              alt="Play Arc Decor"
              className="w-56 h-56 sm:w-72 sm:h-72 object-contain"
            />
          </div>

          {/* Large Circular Play Button in the Bottom Right Corner */}
          <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 z-20 flex items-center gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="dp-play-btn-circle"
              aria-label={isPlaying ? "Pause Video" : "Play Video"}
              title={isPlaying ? "Pause Video" : "Play Video"}
            >
              {isPlaying ? (
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
              ) : (
                <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>

            <button
              onClick={openFullscreenModal}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider transition-all border border-white/20"
            >
              Fullscreen
            </button>
          </div>
        </div>
      </div>

      {/* Cinematic Fullscreen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-[#f5a623] hover:text-[#0e0f14] text-white flex items-center justify-center text-xl transition-colors z-50"
            aria-label="Close Modal"
          >
            ✕
          </button>

          <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
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
