"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Pravalika J.",
    role: "Education Institution &bull; Leadership",
    quote: "Adyantra solved our inconsistent student enrolment numbers. Their team redesigned our course landing pages and automated our lead follow-up workflows, doubling our overall enquiry conversion rate.",
    avatar: "/assets/images/resources/testi-2-1.jpg",
  },
  {
    id: "2",
    name: "Pramode K.",
    role: "Enterprise Business &bull; Owner",
    quote: "A pragmatic and performance-focused team. Adyantra prioritizes actual revenue and customer acquisition over vanity metrics. Their hands-on technical guidance makes them a key growth partner.",
    avatar: "/assets/images/resources/testi-2-2.jpg",
  },
  {
    id: "3",
    name: "Mani Deep M.",
    role: "Real Estate &bull; Executive",
    quote: "Adyantra streamlined our lead capture and WhatsApp CRM follow-ups for premium housing projects. The real estate market demands fast communication, and their automated systems gave our sales team a major edge.",
    avatar: "/assets/images/resources/testi-2-1.jpg",
  },
  {
    id: "4",
    name: "Shiva Kumar M.",
    role: "Real Estate Developer",
    quote: "Adyantra completely transformed our property lead pipeline. Their targeted campaigns produced genuine site visit enquiries rather than junk leads, scaling our closed transaction value significantly.",
    avatar: "/assets/images/resources/testi-2-2.jpg",
  },
];

export default function LotechTestimonials() {
  const [activePage, setActivePage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(TESTIMONIALS.length / itemsPerPage);
  const visibleItems = TESTIMONIALS.slice(activePage * itemsPerPage, (activePage + 1) * itemsPerPage);

  return (
    <section className="testimonials-two" id="testimonials" style={{ padding: "100px 0 110px", backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <div className="sec-title text-center" style={{ marginBottom: "50px" }}>
          <h6 className="sec-title__tagline">OUR TESTIMONIAL</h6>
          <h2 className="sec-title__title">
            What Founders &amp; Directors <br />Say About Us
          </h2>
        </div>

        <div className="row gutter-y-30">
          {visibleItems.map((testi) => (
            <div key={testi.id} className="col-lg-6">
              <div className="testimonials-two__item" style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div className="testimonials-two__item__author">
                    <div className="testimonials-two__item__thumb">
                      <img src={testi.avatar} alt={testi.name} />
                    </div>
                    <div className="testimonials-two__item__author__content">
                      <h3 className="testimonials-two__item__name" style={{ margin: "0 0 4px", fontSize: "20px", fontWeight: 700, color: "#17151F" }}>
                        {testi.name}
                      </h3>
                      <p
                        className="testimonials-two__item__designation"
                        dangerouslySetInnerHTML={{ __html: testi.role }}
                        style={{ margin: 0, fontSize: "14px", color: "#6C3BFF", fontWeight: 600 }}
                      />
                    </div>
                  </div>
                  <div className="testimonials-two__item__content" style={{ color: "#6F6B7A", fontSize: "16px", lineHeight: "26px", marginBottom: "24px" }}>
                    &ldquo;{testi.quote}&rdquo;
                  </div>
                </div>

                <div className="testimonials-two__item__bottom" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "16px", borderTop: "1px solid #ECECEC" }}>
                  <div className="testimonials-two__item__quote">
                    <img src="/assets/images/shapes/quote-two.png" alt="Quote" />
                  </div>
                  <div className="testimonials-two__item__rating" style={{ color: "#FFB800", fontSize: "18px" }}>
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "36px" }}>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActivePage(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: activePage === idx ? "32px" : "12px",
                height: "12px",
                borderRadius: "6px",
                backgroundColor: activePage === idx ? "#6C3BFF" : "#EAE7F2",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
