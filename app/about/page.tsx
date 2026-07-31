import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { TEAM, COMPANY_VISION } from "@/constants";

const teamQuery = `*[_type == "team"] | order(isCEO desc) {
  name,
  role,
  bio,
  "imageUrl": image.asset->url
}`;

export default async function AboutPage() {
  let team: any[] = [];
  try {
    team = await client.fetch(teamQuery, {}, { next: { revalidate: 10 } });
  } catch (error) {
    console.error("Sanity team query error:", error);
  }

  const displayTeam = team && team.length > 0 ? team : TEAM;

  return (
    <main className="pt-40 md:pt-48 pb-28 bg-[#07191A] text-white min-h-screen relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C87D4F]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0D2E2F]/60 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mb-24 text-left">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#C87D4F]/25 bg-white/[0.04] backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C87D4F] animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#C87D4F] uppercase">
              THE STUDIO ETHOS
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-extrabold text-[#F8F6F3] tracking-tight mb-10 leading-[0.9]">
            Human Ingenuity. <br /> 
            <span className="text-[#C87D4F] italic font-extrabold">Machine Precision.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#F8F6F3]/50 leading-relaxed font-normal">
            {COMPANY_VISION.description}
          </p>
        </div>

        {/* Team Grid */}
        <div className="mb-24">
          <div className="flex justify-between items-end mb-12 border-b border-white/[0.08] pb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#F8F6F3] tracking-tight">The Collective.</h2>
              <p className="text-xs font-mono text-[#F8F6F3]/40 mt-1">Multi-disciplinary engineers, AI researchers, and UX architects.</p>
            </div>
            <span className="text-[10px] font-mono text-[#C87D4F] uppercase font-bold tracking-widest hidden sm:block">
              EXPERT NETWORK
            </span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {displayTeam.map((member: any, i: number) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] rounded-2xl bg-[#051314] border border-white/[0.08] group-hover:border-[#C87D4F]/40 overflow-hidden mb-4 shadow-xl transition-all duration-500 relative">
                  {member.imageUrl ? (
                    <Image 
                      src={member.imageUrl} 
                      alt={member.name} 
                      fill 
                      sizes="(max-width: 768px) 50vw, 20vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0D2E2F] to-[#051314] p-5 flex flex-col justify-between text-white">
                      <span className="text-[10px] font-mono text-[#C87D4F] font-bold uppercase tracking-widest">0{i + 1}</span>
                      <div>
                        <span className="text-xs font-heading font-extrabold text-[#F8F6F3] block">{member.name}</span>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-[#07191A]/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h4 className="font-heading font-extrabold text-[#F8F6F3] text-base group-hover:text-[#C87D4F] transition-colors">{member.name}</h4>
                <p className="text-[10px] font-mono text-[#C87D4F] uppercase tracking-wider mt-1 font-bold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-20 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F8F6F3]/40 uppercase tracking-widest hover:text-[#C87D4F] transition-colors"
          >
            <span>← Return to Headquarters</span>
          </Link>
        </div>

      </div>
    </main>
  );
}