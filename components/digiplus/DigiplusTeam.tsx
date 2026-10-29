"use client";

import React from "react";

export default function DigiplusTeam() {
  const team = [
    {
      name: "Wade Warren",
      role: "Digital Marketer",
      image: "/assets/digiplus/tm6.jpg",
    },
    {
      name: "Leslie Alexander",
      role: "Web Developer",
      image: "/assets/digiplus/tm5.jpg",
    },
    {
      name: "Jenny Wilson",
      role: "UI/UX Designer",
      image: "/assets/digiplus/testimonial-1.jpg",
    },
    {
      name: "Leslie Alexander",
      role: "Content Creator",
      image: "/assets/digiplus/testimonial-2-1.jpg",
    },
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching Digiplus */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold font-mono tracking-widest text-[#f5a623] uppercase mb-4">
            <span>TEAM MEMBER</span>
            <span className="w-8 h-[2px] bg-[#f5a623]"></span>
          </div>

          <h2 className="dp-section-title">
            The Geniuses Behind <br />
            <span>The Scenes</span>
          </h2>
        </div>

        {/* Team Grid matching Digiplus team-block-style2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group rounded-[24px] overflow-hidden bg-[#faf7f2] border border-black/5 hover:border-[#f5a623]/40 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col"
            >
              {/* Photo Area */}
              <div className="relative aspect-[4/4.8] w-full overflow-hidden bg-[#1c1d24]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              </div>

              {/* Bio Details */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold font-heading text-[#111216] group-hover:text-[#f5a623] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-bold text-[#f5a623] uppercase tracking-wider mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
