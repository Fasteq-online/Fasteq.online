import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { TEAM, COMPANY_VISION } from "@/constants";

const teamQuery = `*[_type == "team"] {
  name,
  role,
  bio,
  isCEO,
  "imageUrl": image.asset->url
} | order(
  select(
    name == "Fatima Tuz Zahra" => 0,
    isCEO == true => 1,
    name == "Hamid Mushtaq" => 2,
    name == "Muhammad Saim" => 3,
    4
  ) asc
)`;

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

        {/* Team Grid — 3 top row (CEO center), 2 bottom row */}
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

          {/* Top Row — 3 members, CEO in center */}
          {(() => {
            const topRow = displayTeam.slice(0, 3);
            const bottomRow = displayTeam.slice(3, 5);
            return (
              <>
                <div className="flex justify-center items-end gap-6 mb-6">
                  {topRow.map((member: any, i: number) => {
                    const isCEO = member.isCEO || i === 1;
                    return (
                      <div
                        key={i}
                        className={`group flex-1 max-w-[260px] ${isCEO ? "max-w-[300px]" : ""}`}
                      >
                        <div
                          className={`rounded-2xl bg-[#051314] border overflow-hidden mb-4 shadow-xl transition-all duration-500 relative
                            ${isCEO
                              ? "aspect-[3/4] border-[#C87D4F]/35 shadow-[#C87D4F]/10 scale-105"
                              : "aspect-[3/4] border-white/[0.08] group-hover:border-[#C87D4F]/40"
                            }`}
                        >
                          {member.imageUrl ? (
                            <Image
                              src={member.imageUrl}
                              alt={member.name}
                              fill
                              sizes="(max-width: 768px) 50vw, 25vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          ) : (
                            <div
                              className="absolute inset-0 flex flex-col justify-between p-5 text-white"
                              style={{
                                background: isCEO
                                  ? "linear-gradient(145deg, #1a3e40, #0D2E2F, #051314)"
                                  : "linear-gradient(145deg, #0D2E2F, #051314)",
                              }}
                            >
                              {/* Grid overlay */}
                              <div
                                className="absolute inset-0 opacity-20"
                                style={{
                                  backgroundImage:
                                    "linear-gradient(rgba(200,125,79,0.15) 1px, transparent 1px), linear-gradient(to right, rgba(200,125,79,0.15) 1px, transparent 1px)",
                                  backgroundSize: "30px 30px",
                                }}
                              />
                              <span className="text-[10px] font-mono text-[#C87D4F] font-bold uppercase tracking-widest relative z-10">
                                0{i + 1}
                              </span>
                              <div className="relative z-10">
                                {isCEO && (
                                  <span className="inline-block text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-[#C87D4F] bg-[#C87D4F]/10 border border-[#C87D4F]/25 px-2.5 py-1 rounded-full mb-3">
                                    EXECUTIVE LEAD
                                  </span>
                                )}
                                <span className={`font-heading font-extrabold text-[#F8F6F3] block ${isCEO ? "text-base" : "text-xs"}`}>
                                  {member.name}
                                </span>
                              </div>
                            </div>
                          )}
                          {/* Copper glow frame for CEO */}
                          {isCEO && (
                            <div className="absolute inset-0 rounded-2xl pointer-events-none"
                              style={{ boxShadow: "inset 0 0 30px rgba(200,125,79,0.06)" }}
                            />
                          )}
                          <div className="absolute inset-0 bg-[#07191A]/10 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                        <h4 className={`font-heading font-extrabold text-[#F8F6F3] group-hover:text-[#C87D4F] transition-colors ${isCEO ? "text-lg" : "text-base"}`}>
                          {member.name}
                        </h4>
                        <p className="text-[10px] font-mono text-[#C87D4F] uppercase tracking-wider mt-1 font-bold">{member.role}</p>
                        {isCEO && (
                          <p className="text-xs text-[#F8F6F3]/40 mt-2 leading-relaxed">{member.bio}</p>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Row — 2 members, centered */}
                {bottomRow.length > 0 && (
                  <div className="flex justify-center gap-6">
                    {bottomRow.map((member: any, i: number) => (
                      <div key={i} className="group flex-1 max-w-[260px]">
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
                              <span className="text-[10px] font-mono text-[#C87D4F] font-bold uppercase tracking-widest">0{i + 4}</span>
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
                )}
              </>
            );
          })()}
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