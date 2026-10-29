"use client";

import React from "react";

export default function ExactTeam() {
  const team = [
    {
      name: "Wade Warren",
      role: "Digital Marketer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Leslie Alexander",
      role: "Web Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Jenny Wilson",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Leslie Alexander",
      role: "Content Creator",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="team" className="py-20 lg:py-28 bg-white relative border-b border-slate-200/80">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#FF5B26]">
              TEAM MEMBER
            </span>
            <span className="w-16 h-[2px] bg-[#FF5B26]"></span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
            The Geniuses Behind <br />
            <span className="text-[#0D3B66]">The Scenes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group rounded-[28px] overflow-hidden bg-[#F8FAFC] border border-slate-200/80 hover:border-[#FF5B26]/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col"
            >
              <div className="relative aspect-[4/4.8] w-full overflow-hidden bg-slate-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-lg font-black text-slate-900 group-hover:text-[#FF5B26] transition">
                  {member.name}
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
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
