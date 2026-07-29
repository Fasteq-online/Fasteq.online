import React from "react";
import Link from "next/link";
import { TEAM } from "@/constants";

export default function Team() {
  const ceo = TEAM[0];

  return (
    <section id="team" className="py-24 bg-white border-y border-black/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/3 aspect-[4/5] bg-[#F8F6F3] rounded-3xl border border-black/5" />
          <div className="w-full lg:w-2/3">
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#C87D4F] uppercase block mb-6">Leadership</span>
            <h2 className="text-5xl font-extrabold text-[#0D2E2F] mb-6">{ceo.name}</h2>
            <p className="text-xl text-[#0D2E2F]/60 mb-10 italic">"{ceo.bio}"</p>
            <div className="flex items-center gap-6">
              <div>
                <h4 className="font-bold text-[#0D2E2F]">{ceo.role}</h4>
                <p className="text-[10px] text-[#C87D4F] font-mono uppercase tracking-widest mt-1">FASTEQ Strategy</p>
              </div>
              <Link href="/about" className="bg-[#0D2E2F] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#C87D4F] transition-all">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}