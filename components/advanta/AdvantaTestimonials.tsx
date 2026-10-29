"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AdvantaTestimonials() {
  const [startIndex, setStartIndex] = useState(0);

  // Authentic client reviews from adyantra.in across our target business verticals
  const testimonials = [
    {
      id: 1,
      name: "Dr. Arvind M.",
      role: "Healthcare & Clinics • Founder",
      avatar: "/assets/digiplus/tm6.jpg",
      quote:
        "Adyantra completely restructured our patient acquisition funnel. Their targeted Google Ads and WhatsApp booking bot reduced our appointment drop-off rate by 40% in the first quarter.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sneha R.",
      role: "D2C Fashion Brand • Co-Founder",
      avatar: "/assets/digiplus/testimonial-1.jpg",
      quote:
        "Our Meta ROAS jumped from 1.8x to 4.8x within 60 days. Their creative testing sprint cycles and first-party conversion tracking gave us complete clarity on our marketing spend.",
      rating: 5,
    },
    {
      id: 3,
      name: "Pravalika J.",
      role: "Education Institution • Leadership",
      avatar: "/assets/digiplus/testimonial-2-1.jpg",
      quote:
        "Adyantra solved our inconsistent student enrolment numbers. Their team redesigned our course landing pages and automated our lead follow-up workflows, doubling our conversion rate.",
      rating: 5,
    },
    {
      id: 4,
      name: "Shiva Kumar M.",
      role: "Real Estate • Developer",
      avatar: "/assets/digiplus/testimonial-3-1.jpg",
      quote:
        "Adyantra completely transformed our property lead pipeline. Their targeted Meta and Google campaigns produced genuine site visit enquiries rather than junk leads.",
      rating: 5,
    },
    {
      id: 5,
      name: "Pranay Kumar K.",
      role: "IT & Software • Enterprise Lead",
      avatar: "/assets/digiplus/tm5.jpg",
      quote:
        "Adyantra seamlessly integrated our web application development and digital marketing requirements under one roof. They provided strategic improvements that noticeably increased conversions.",
      rating: 5,
    },
    {
      id: 6,
      name: "Pramode K.",
      role: "Enterprise Business • Owner",
      avatar: "/assets/digiplus/bfl.png",
      quote:
        "A pragmatic and performance-focused team. Adyantra prioritizes actual revenue and customer acquisition over vanity metrics. Their hands-on technical guidance makes them a standout partner.",
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.length - 4 : Math.max(0, prev - 1)));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= testimonials.length - 4 ? 0 : prev + 1));
  };

  const visibleCards = testimonials.slice(startIndex, startIndex + 4).length === 4
    ? testimonials.slice(startIndex, startIndex + 4)
    : testimonials.slice(0, 4);

  return (
    <section id="testimonials" aria-label="Customer Feedbacks" className="py-24 bg-[#16131c] text-white relative overflow-hidden">
      {/* 3D Spike Sphere Object on Far Right matching Screenshot 105240 */}
      <div className="hidden xl:block absolute right-0 top-12 pointer-events-none z-0 translate-x-12">
        <img
          src="/assets/digiplus/obj4.png"
          alt="3D Spike Element"
          className="w-56 h-56 object-contain opacity-90 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] animate-pulse"
        />
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Row matching Screenshot 105240 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 lg:mb-16 relative">
          {/* Left Title & Subtitle */}
          <div>
            <div className="flex items-center gap-3 text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#f5a623] mb-4 font-heading">
              <span>OUR FEEDBAKCS</span>
              <span className="w-12 h-[2.5px] bg-[#f5a623]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white font-heading leading-tight tracking-tight">
              What They’re Talking <br />
              About Company
            </h2>
          </div>

          {/* Right: Carousel Navigation Buttons matching Screenshot 105240 */}
          <div className="flex items-center gap-3 relative z-10">
            <button
              type="button"
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white text-[#111216] hover:bg-[#f5a623] flex items-center justify-center font-bold text-lg transition-all duration-300 shadow-xl cursor-pointer"
              aria-label="Previous testimonials"
            >
              ←
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white text-[#111216] hover:bg-[#f5a623] flex items-center justify-center font-bold text-lg transition-all duration-300 shadow-xl cursor-pointer"
              aria-label="Next testimonials"
            >
              →
            </button>
          </div>
        </div>

        {/* 4 Feedback Cards in 1 Row matching Screenshot 105240 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {visibleCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#201d24] border border-white/5 rounded-[26px] p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#f5a623]/30 transition-all duration-300 min-h-[360px]"
            >
              {/* Giant Watermark Quotes in Top Right */}
              <div className="absolute top-3 right-5 text-6xl font-serif text-white/5 select-none pointer-events-none font-black leading-none group-hover:text-[#f5a623]/15 transition-colors">
                “
              </div>

              <div>
                {/* User Info Header: Avatar + Name + Role */}
                <div className="flex items-center gap-3.5 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0 bg-gray-800">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-heading leading-tight group-hover:text-[#f5a623] transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-xs text-gray-400 font-medium line-clamp-1 mt-0.5">
                      {item.role}
                    </span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-[13px] text-gray-300 leading-relaxed relative z-10 mb-6 font-medium">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Bottom Star Rating matching Screenshot 105240 */}
              <div className="flex items-center gap-1 text-[#f5a623] relative z-10 pt-4 border-t border-white/5">
                {[...Array(5)].map((_, starIdx) => (
                  <svg
                    key={starIdx}
                    className={`w-4 h-4 ${starIdx < item.rating ? "fill-current" : "fill-none stroke-current"
                      }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Centered Pill Button */}
        <div className="mt-14 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#111216] hover:bg-[#222530] text-white font-semibold text-sm sm:text-base border border-white/10 shadow-[0_12px_28px_rgba(0,0,0,0.35)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.5)] transition-all duration-300 group cursor-pointer"
          >
            <span>See More Client Results</span>
            <span className="text-base group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
