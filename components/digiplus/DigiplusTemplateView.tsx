"use client";

import React, { useEffect, useState } from "react";

interface DigiplusTemplateViewProps {
  initialHtml?: string;
}

export default function DigiplusTemplateView({ initialHtml = "" }: DigiplusTemplateViewProps) {
  const [htmlContent, setHtmlContent] = useState<string>(initialHtml);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect(() => {
    if (!htmlContent) {
      // Fetch the authentic processed Digiplus HTML if not passed initially
      fetch("/assets/digiplus/digiplus_body_processed.html")
        .then((res) => res.text())
        .then((html) => {
          setHtmlContent(html);
        })
        .catch((err) => console.error("Error loading template HTML:", err));
    }
  }, [htmlContent]);

  useEffect(() => {
    if (!htmlContent) return;

    // Attach event listeners for the video play button
    const handleVideoClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const playBtn = target.closest(
        "#dp-watch-video-trigger, .video-play-button, .tm-sc-video-popup a, .play-button"
      );
      if (playBtn) {
        e.preventDefault();
        e.stopPropagation();
        setVideoModalOpen(true);
      }
    };

    // Attach accordion click handler for FAQ section
    const handleAccordionClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const titleBtn = target.closest(".accordion-title, .elementor-accordion-title, .card-header");
      if (titleBtn) {
        e.preventDefault();
        const item = titleBtn.closest(".accordion-item, .elementor-accordion-item, .card");
        if (item) {
          const content = item.querySelector(".accordion-collapse, .elementor-tab-content, .card-body");
          if (content) {
            const isShown =
              (content as HTMLElement).style.display === "block" ||
              content.classList.contains("show");
            if (isShown) {
              (content as HTMLElement).style.display = "none";
              content.classList.remove("show");
              titleBtn.classList.add("collapsed");
            } else {
              (content as HTMLElement).style.display = "block";
              content.classList.add("show");
              titleBtn.classList.remove("collapsed");
            }
          }
        }
      }
    };

    // Scroll to top button handler
    const handleScrollTop = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const scrollBtn = target.closest(
        ".back-to-top, .scroll-to-top, #scroll-to-top, .dp-back-to-top, .scroll-to-top"
      );
      if (scrollBtn) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    // Side panel / mobile hamburger menu toggle
    const handleSidePanel = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const trigger = target.closest(".side-panel-trigger");
      if (trigger) {
        e.preventDefault();
        const sidePanel = document.querySelector(".side-panel-container");
        const overlay = document.querySelector(".side-panel-body-overlay");
        if (trigger.classList.contains("side-panel-trigger-close")) {
          sidePanel?.classList.remove("side-panel-open");
          overlay?.classList.remove("side-panel-open");
          document.body.classList.remove("side-panel-open");
        } else {
          sidePanel?.classList.toggle("side-panel-open");
          overlay?.classList.toggle("side-panel-open");
          document.body.classList.toggle("side-panel-open");
        }
      }
    };

    // Handle Swiper carousel arrow buttons (prev/next)
    const handleSwiperArrows = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const nextBtn = target.closest(
        ".tm-swiper-arrow-next, .tm-swiper-button-next, .swiper-button-next"
      );
      if (nextBtn) {
        e.preventDefault();
        const section =
          nextBtn.closest(".elementor-widget-container, .elementor-element, section, .e-con") ||
          document;
        const wrapper =
          section.querySelector(".swiper-wrapper") ||
          document.querySelector(".tm-sc-service .swiper-wrapper");
        if (wrapper) {
          wrapper.scrollBy({ left: 410, behavior: "smooth" });
        }
      }
      const prevBtn = target.closest(
        ".tm-swiper-arrow-prev, .tm-swiper-button-prev, .swiper-button-prev"
      );
      if (prevBtn) {
        e.preventDefault();
        const section =
          prevBtn.closest(".elementor-widget-container, .elementor-element, section, .e-con") ||
          document;
        const wrapper =
          section.querySelector(".swiper-wrapper") ||
          document.querySelector(".tm-sc-service .swiper-wrapper");
        if (wrapper) {
          wrapper.scrollBy({ left: -410, behavior: "smooth" });
        }
      }
    };

    // Handle appointment form submission gracefully
    const handleFormSubmit = (e: SubmitEvent) => {
      const target = e.target as HTMLFormElement;
      if (target.closest(".wpcf7-form, form")) {
        e.preventDefault();
        alert("Thank you! Your message has been sent successfully. Our team will contact you shortly.");
      }
    };

    // Sticky Header Scroll Handler: slides in when scrolling past 150px
    const handleScroll = () => {
      const stickyHeader = document.getElementById("elementor-header-top-sticky");
      if (window.scrollY > 150) {
        stickyHeader?.classList.add("visible");
        document.body.classList.add("tm-header-sticky-active");
      } else {
        stickyHeader?.classList.remove("visible");
        document.body.classList.remove("tm-header-sticky-active");
      }
    };

    // Initial check on load
    handleScroll();

    document.addEventListener("click", handleVideoClick);
    document.addEventListener("click", handleAccordionClick);
    document.addEventListener("click", handleScrollTop);
    document.addEventListener("click", handleSidePanel);
    document.addEventListener("click", handleSwiperArrows);
    document.addEventListener("submit", handleFormSubmit);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("click", handleVideoClick);
      document.removeEventListener("click", handleAccordionClick);
      document.removeEventListener("click", handleScrollTop);
      document.removeEventListener("click", handleSidePanel);
      document.removeEventListener("click", handleSwiperArrows);
      document.removeEventListener("submit", handleFormSubmit);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [htmlContent]);

  return (
    <>
      {/* ── Exact Reference Template HTML Body inside #wrapper ── */}
      <div
        id="wrapper"
        className="clearfix tm-stretched-layout container-1300px"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />



      {/* ── 4K Video Player Modal for "Watch The Video" place ── */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-[999999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setVideoModalOpen(false)}
        >
          <button
            onClick={() => setVideoModalOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-[#f5a623] hover:text-[#0e0f14] text-white flex items-center justify-center text-2xl transition-colors z-50 cursor-pointer shadow-lg"
            aria-label="Close video"
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
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
}
