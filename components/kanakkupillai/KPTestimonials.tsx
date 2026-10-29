"use client";

import React from "react";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

export default function KPTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Pravalika J.",
      role: "Education Institution • Leadership",
      avatar: "/assets/digiplus/testimonial-1.jpg",
      quote:
        "Adyantra solved our inconsistent student enrolment numbers. Their team redesigned our course landing pages and automated our lead follow-up workflows, doubling our overall enquiry conversion rate.",
      rating: 5,
    },
    {
      id: 2,
      name: "Pramode K.",
      role: "Enterprise Business • Owner",
      avatar: "/assets/digiplus/tm6.jpg",
      quote:
        "A pragmatic and performance-focused team. Adyantra prioritizes actual revenue and customer acquisition over vanity metrics. Their hands-on technical guidance makes them a key growth partner.",
      rating: 5,
    },
    {
      id: 3,
      name: "Mani Deep M.",
      role: "Real Estate • Executive",
      avatar: "/assets/digiplus/testimonial-2-1.jpg",
      quote:
        "Adyantra streamlined our lead capture and WhatsApp CRM follow-ups for premium housing projects. The real estate market demands fast communication, and their automated systems gave our sales team a major edge.",
      rating: 5,
    },
    {
      id: 4,
      name: "Shiva Kumar M.",
      role: "Real Estate Developer",
      avatar: "/assets/digiplus/tm5.jpg",
      quote:
        "Adyantra completely transformed our property lead pipeline. Their targeted campaigns produced genuine site visit enquiries rather than junk leads, scaling our closed transaction value significantly.",
      rating: 5,
    },
    {
      id: 5,
      name: "Sai Teja M.",
      role: "Healthcare • Clinic Director",
      avatar: "/assets/digiplus/testimonial-3-1.jpg",
      quote:
        "Our goal was building digital credibility and increasing patient consultations. The campaign was transparent, compliant, and highly professional, resulting in a 4x increase in patient bookings.",
      rating: 5,
    },
    {
      id: 6,
      name: "Vamshi Krishna",
      role: "Enterprise Business Owner",
      avatar: "/assets/digiplus/tm6.jpg",
      quote:
        "Their strategic execution is grounded in bottom-line profitability, technical expertise, and dedicated support. They helped us scale organic pipeline while drastically reducing customer acquisition costs.",
      rating: 5,
    },
  ];

  const repeatedTestimonials = [
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section
      id="testimonials"
      aria-label="Customer Feedbacks"
      className="py-12 sm:py-14 lg:py-16 relative overflow-hidden font-sans border-b border-[#DCE3EB] bg-[#FFFFFF] text-[#12304A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Top Header Row ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            {/* Tagline Badge with Line */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs sm:text-[13px] font-medium uppercase tracking-widest text-[#12304A] font-sans">
                CLIENT REVIEWS
              </span>
              <span className="w-14 h-[2px] bg-[#FFC400] rounded-full inline-block" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight leading-[1.12] font-sans text-[#12304A]">
              What Our Clients Say <br />
              <span className="text-[#FFC400]">About Adyantra</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-base sm:text-[17px] font-normal leading-relaxed font-sans max-w-sm text-[#64748B]">
              Real feedback from 50+ scaling brands and business owners scaling profitably with Adyantra.
            </p>

            {/* Pill CTA Button in Deep Navy #12304A */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#12304A] hover:bg-[#1a4469] text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-md hover:-translate-y-0.5 group shrink-0 font-sans"
            >
              <span>Work With Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Continuous Horizontal Scrolling Feedbacks Track in Cloud White #F5F7FA ── */}
      <div className="relative w-full overflow-hidden">
        {/* Soft Left & Right Fade Masks */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 z-20 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 z-20 bg-gradient-to-l from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent"
        />

        <div className="flex overflow-hidden w-full">
          <div className="flex items-stretch gap-6 whitespace-nowrap marquee-track hover:[animation-play-state:paused] py-4 cursor-pointer">
            {repeatedTestimonials.map((card, idx) => (
              <div
                key={`feedback-${card.id}-${idx}`}
                className="w-[320px] sm:w-[380px] rounded-[24px] p-7 border border-[#DCE3EB] bg-[#FFFFFF] hover:border-[#FFC400] hover:bg-[#FFFFFF] flex flex-col justify-between shadow-[0_4px_24px_rgba(18,48,74,0.04)] relative overflow-hidden group transition-all duration-300 shrink-0 hover:-translate-y-2 whitespace-normal"
              >
                {/* Quotation Mark Watermark on Top Right */}
                <div className="absolute top-3 right-5 pointer-events-none select-none font-sans text-6xl leading-none font-medium text-[#DCE3EB]">
                  “
                </div>

                {/* Top: 5 Golden Yellow Stars */}
                <div className="relative z-10 flex items-center text-[#FFC400] gap-1 mb-4">
                  {[...Array(card.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                  ))}
                </div>

                {/* Middle: Review Quote Text in Deep Navy */}
                <div className="relative z-10 flex-1 mb-6">
                  <p className="text-base sm:text-[16px] leading-relaxed font-normal font-sans text-[#12304A]">
                    &ldquo;{card.quote}&rdquo;
                  </p>
                </div>

                {/* Bottom: Author Profile Block */}
                <div className="relative z-10 flex items-center gap-3.5 pt-4 border-t border-[#DCE3EB]">
                  <div className="w-12 h-12 rounded-full border border-[#DCE3EB] flex items-center justify-center shrink-0 shadow-sm overflow-hidden bg-[#EEF1F5]">
                    <img
                      src={card.avatar}
                      alt={card.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-base font-medium font-sans leading-tight text-[#12304A] group-hover:text-[#12304A] transition-colors">
                      {card.name}
                    </h4>
                    <p className="text-xs sm:text-[13px] font-normal font-sans mt-0.5 text-[#64748B]">
                      {card.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
