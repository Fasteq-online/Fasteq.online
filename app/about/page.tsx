import React from "react";
import Link from "next/link";
import { TEAM, COMPANY_VISION } from "@/constants";

export default function AboutPage() {
  return (
    <main className="pt-40 pb-24 bg-[#F8F6F3] min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Intro */}
        <div className="max-w-4xl mb-24">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#C87D4F] uppercase block mb-6">Our Story</span>
          <h1 className="text-7xl font-extrabold text-[#0D2E2F] tracking-tighter mb-10 leading-none">Engineering the Future.</h1>
          <p className="text-2xl text-[#0D2E2F]/60 leading-relaxed font-light">{COMPANY_VISION.description}</p>
        </div>

        {/* Vision Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-32">
          <div className="p-12 bg-white rounded-[2rem] border border-black/5">
            <h3 className="text-xs font-mono font-bold text-[#C87D4F] uppercase tracking-widest mb-4">Mission</h3>
            <p className="text-2xl font-bold text-[#0D2E2F]">{COMPANY_VISION.title}</p>
          </div>
          <div className="p-12 bg-[#0D2E2F] rounded-[2rem] text-white">
            <h3 className="text-xs font-mono font-bold text-[#C87D4F] uppercase tracking-widest mb-4">CEO's Vision</h3>
            <p className="text-xl italic">"{COMPANY_VISION.ceo_vision}"</p>
          </div>
        </div>

        {/* 5-Member Team */}
        <div className="mb-20">
          <h2 className="text-4xl font-extrabold text-[#0D2E2F] mb-12 text-center">Meet Our Experts.</h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {TEAM.map((member, i) => (
              <div key={i} className="text-center">
                <div className="aspect-[3/4] bg-[#0D2E2F]/5 rounded-2xl mb-4 border border-black/5" />
                <h4 className="font-bold text-[#0D2E2F] text-sm">{member.name}</h4>
                <p className="text-[10px] font-mono text-[#C87D4F] uppercase font-bold tracking-widest mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}