"use client";

import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "@/lib/variants";

const clientReviews = [
  {
    name: "Shiva Kumar M.",
    role: "Real Estate • Developer",
    quote: "Adyantra completely transformed our property lead pipeline. Their targeted Meta and Google campaigns produced genuine site visit enquiries rather than junk leads. The team is responsive, transparent, and focused on real sales outcomes.",
    initials: "SK",
  },
  {
    name: "Pranay Kumar K.",
    role: "IT & Software • Enterprise",
    quote: "Adyantra seamlessly integrated our web application development and digital marketing requirements under one roof. They provided strategic improvements to our user onboarding funnel that noticeably increased conversions.",
    initials: "PK",
  },
  {
    name: "Sai Teja M.",
    role: "Healthcare & Clinic • Director",
    quote: "Our goal was establishing digital credibility and increasing patient consultations. Adyantra executed a transparent SEO and local search campaign with clear monthly tracking. Highly professional service.",
    initials: "ST",
  },
  {
    name: "Pravalika J.",
    role: "Education Institution • Lead",
    quote: "Adyantra solved our inconsistent student enrolment numbers. Their team redesigned our course landing pages and automated our lead follow-up workflows, doubling our overall enquiry conversion rate.",
    initials: "PJ",
  },
  {
    name: "Pramode K.",
    role: "Enterprise Business • Owner",
    quote: "A pragmatic and performance-focused team. Adyantra prioritizes actual revenue and customer acquisition over vanity metrics. Their hands-on technical guidance makes them a key growth partner.",
    initials: "PK",
  },
  {
    name: "Mani Deep M.",
    role: "Real Estate • Executive",
    quote: "Adyantra streamlined our lead capture and WhatsApp CRM follow-ups for premium housing projects. The real estate market demands fast communication, and their automated systems gave our sales team a major edge.",
    initials: "MD",
  },
  {
    name: "Priyanka S.",
    role: "Education & Academy • Founder",
    quote: "Our experience with Adyantra has been exceptional. They audited our entire student acquisition journey—from ad creative copy to checkout forms—providing end-to-end optimizations that boosted enrolments.",
    initials: "PS",
  },
  {
    name: "Santosh Kumar B.",
    role: "Healthcare & Clinic • Director",
    quote: "Adyantra took the time to study our medical practice before launching our campaigns. Their data-backed Google Search ads improved patient acquisitions while keeping our cost-per-lead low.",
    initials: "SK",
  },
  {
    name: "Jagadesh A.",
    role: "Tech Enterprise • Founder",
    quote: "Having web engineering and performance marketing handled by a single unified team eliminated miscommunication. Adyantra's technical execution is fast, secure, and conversion-focused.",
    initials: "JA",
  },
  {
    name: "Shekhar P.",
    role: "Enterprise Business • Owner",
    quote: "Adyantra stands out for their accountability and clear performance reporting. They consistently optimize ad spend and campaign messaging based on real conversion data.",
    initials: "SP",
  },
  {
    name: "Karthik M.",
    role: "Real Estate • Developer",
    quote: "Qualified buyer lead generation was our primary bottleneck. Adyantra refined our audience segmentation and ad copy, resulting in qualified leads and our highest sales quarter to date.",
    initials: "KM",
  },
  {
    name: "Vamshi Krishna",
    role: "Enterprise Business • Owner",
    quote: "Adyantra delivers strategic execution with a clear focus on bottom-line business profitability. Their technical expertise and dedicated account support make them a trusted long-term partner.",
    initials: "VK",
  },
];

const firstRowReviews = clientReviews.slice(0, 6);
const secondRowReviews = clientReviews.slice(6, 12);

/* Crisp Solid Review Card Component (Left Aligned, Middle Dot Role System) */
function ReviewCard({
  name,
  role,
  quote,
  initials,
}: {
  name: string;
  role: string;
  quote: string;
  initials: string;
}) {
  const roleParts = role.split(" • ");

  return (
    <figure className="relative w-[340px] sm:w-[360px] shrink-0 cursor-pointer overflow-hidden rounded-3xl border border-border/80 bg-white p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-primary/50 hover:scale-[1.02] transition-all duration-300 mx-1.5 flex flex-col justify-between group">
      <div className="relative z-10">
        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
            {initials}
          </div>
          <div>
            <h4 className="font-bold text-secondary text-sm sm:text-base leading-tight group-hover:text-primary transition-colors">{name}</h4>
            <span className="inline-flex items-center gap-1.5 mt-1 text-[11px] font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-0.5 rounded-full whitespace-nowrap">
              {roleParts.length === 2 ? (
                <>
                  <span className="whitespace-nowrap">{roleParts[0]}</span>
                  <span className="w-1 h-1 rounded-full bg-primary/70 shrink-0" />
                  <span className="whitespace-nowrap">{roleParts[1]}</span>
                </>
              ) : (
                <span className="whitespace-nowrap">{role}</span>
              )}
            </span>
          </div>
        </div>
        
        <p className="text-secondary/75 leading-relaxed text-sm sm:text-[15px] font-medium tracking-tight">
          "{quote}"
        </p>
      </div>
    </figure>
  );
}

export default function ServiceTestimonials() {
  return (
    <section className="section-padding relative overflow-hidden bg-white border-t border-border/80" id="testimonials">
      <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10 text-center mb-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={slideUp} className="sub-title bg-color-2 mb-3">CLIENT REVIEWS</motion.div>
          <motion.h2 variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-secondary">What Our Clients Say</motion.h2>
          <motion.p variants={slideUp} className="text-muted-foreground mt-3 text-sm sm:text-base max-w-xl mx-auto">
            Real feedback from 50+ scaling brands and business owners we partner with.
          </motion.p>
        </motion.div>
      </div>

      {/* 2-Row Auto-Scrolling Infinite Marquees (No Overlap, Compact Vertical Gap) */}
      <div className="relative flex flex-col gap-3 overflow-hidden py-2">
        {/* Row 1 (Left Scrolling) */}
        <div className="flex overflow-hidden group py-2">
          <div className="flex shrink-0 gap-2 animate-[marquee_45s_linear_infinite] group-hover:[animation-play-state:paused]">
            {firstRowReviews.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </div>
          <div className="flex shrink-0 gap-2 animate-[marquee_45s_linear_infinite] group-hover:[animation-play-state:paused]" aria-hidden="true">
            {firstRowReviews.map((review, i) => (
              <ReviewCard key={`dup1-${i}`} {...review} />
            ))}
          </div>
        </div>

        {/* Row 2 (Right Scrolling) */}
        <div className="flex overflow-hidden group py-2">
          <div className="flex shrink-0 gap-2 animate-[marquee-reverse_45s_linear_infinite] group-hover:[animation-play-state:paused]">
            {secondRowReviews.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </div>
          <div className="flex shrink-0 gap-2 animate-[marquee-reverse_45s_linear_infinite] group-hover:[animation-play-state:paused]" aria-hidden="true">
            {secondRowReviews.map((review, i) => (
              <ReviewCard key={`dup2-${i}`} {...review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
