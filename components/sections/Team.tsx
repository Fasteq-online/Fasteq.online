import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { ceoQuery } from "@/sanity/lib/queries";
import { TEAM, COMPANY_VISION } from "@/constants";

export default async function Team() {
  let ceo: any = null;
  try {
    ceo = await client.fetch(ceoQuery, {}, { next: { revalidate: 10 } });
  } catch (error) {
    console.error("Sanity CEO query error:", error);
  }

  const ceoData = ceo || {
    name: TEAM[1].name,
    role: TEAM[1].role,
    bio: COMPANY_VISION.ceo_vision,
    imageUrl: null,
  };

  return (
    <section
      id="team"
      className="py-28 relative overflow-hidden border-y border-white/[0.06]"
      style={{ background: "linear-gradient(135deg, #07191A 0%, #0D2E2F 60%, #051314 100%)" }}
    >
      {/* Glows */}
      <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-[#C87D4F]/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Portrait Frame */}
          <div className="w-full lg:w-3/12">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/[0.08] shadow-xl shadow-black/30 group">
              {ceoData.imageUrl ? (
                <Image
                  src={ceoData.imageUrl}
                  alt={ceoData.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              ) : (
                <div
                  className="absolute inset-0 p-8 flex flex-col justify-between text-white"
                  style={{ background: "linear-gradient(145deg, #0D2E2F, #051314)" }}
                >
                  {/* Grid overlay */}
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: "linear-gradient(rgba(200,125,79,0.15) 1px, transparent 1px), linear-gradient(to right, rgba(200,125,79,0.15) 1px, transparent 1px)",
                      backgroundSize: "30px 30px"
                    }}
                  />
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C87D4F] font-bold relative z-10">
                    EXECUTIVE DIRECTOR
                  </span>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-heading font-extrabold text-[#F8F6F3]">{ceoData.name}</h3>
                    <p className="text-xs font-mono text-[#F8F6F3]/40 uppercase mt-1 font-bold">{ceoData.role}</p>
                  </div>
                </div>
              )}
              {/* Copper border accent */}
              <div className="absolute inset-0 rounded-3xl border border-[#C87D4F]/0 group-hover:border-[#C87D4F]/25 transition-all duration-700 pointer-events-none" />
            </div>
          </div>

          {/* Narrative Content */}
          <div className="w-full lg:w-9/12 text-left">
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#C87D4F] uppercase block mb-6">
              LEADERSHIP & VISION
            </span>

            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#F8F6F3] mb-8 tracking-tight">
              {ceoData.name}
            </h2>

            <blockquote className="text-xl md:text-2xl text-[#F8F6F3]/45 mb-10 leading-relaxed italic font-medium border-l-2 border-[#C87D4F] pl-6">
              "{ceoData.bio}"
            </blockquote>

            <div className="flex flex-wrap gap-8 items-center pt-6 border-t border-white/[0.07]">
              <div>
                <h4 className="font-heading font-extrabold text-[#F8F6F3] text-lg">{ceoData.role}</h4>
                <p className="text-[10px] text-[#C87D4F] font-mono uppercase tracking-widest mt-1 font-bold">
                  Studio Strategy & Architecture
                </p>
              </div>

              <Link
                href="/about"
                className="bg-[#C87D4F] text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#E08E5A] transition-all shadow-lg shadow-[#C87D4F]/25 hover:scale-105"
              >
                Meet Our Leadership Collective
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}