import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { featuredProjectsQuery } from "@/sanity/lib/queries";
import { PROJECTS } from "@/constants";

export default async function Portfolio() {
  let projects: any[] = [];
  try {
    projects = await client.fetch(featuredProjectsQuery, {}, { next: { revalidate: 10 } });
  } catch (error) {
    console.error("Sanity projects error:", error);
  }

  const displayProjects = projects && projects.length > 0 ? projects : PROJECTS;

  return (
    <section
      id="portfolio"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #07191A 0%, #051314 100%)" }}
    >
      {/* Ambient radial glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#C87D4F]/5 rounded-full blur-[200px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#C87D4F] uppercase block mb-4">
              ARCHIVE & CASE STUDIES
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[#F8F6F3] tracking-tight leading-none">
              Featured Works.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-widest text-[#C87D4F] hover:text-[#F8F6F3] transition-colors"
          >
            <span>View Full Archive</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {displayProjects.map((p: any, i: number) => (
            <Link key={i} href="/portfolio" className="group block">
              {/* Image Frame */}
              <div className="aspect-[16/11] rounded-3xl overflow-hidden relative mb-6 border border-white/[0.07] group-hover:border-[#C87D4F]/30 transition-all duration-700 shadow-2xl shadow-black/30 group-hover:shadow-[#C87D4F]/10">
                {p.imageUrl ? (
                  <Image
                    src={p.imageUrl}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-8 text-white"
                    style={{ background: `linear-gradient(135deg, #0D2E2F ${i % 2 === 0 ? "0%" : "20%"}, #051314 100%)` }}
                  >
                    {/* Decorative grid lines */}
                    <div className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: "linear-gradient(rgba(200,125,79,0.15) 1px, transparent 1px), linear-gradient(to right, rgba(200,125,79,0.15) 1px, transparent 1px)",
                        backgroundSize: "40px 40px"
                      }}
                    />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C87D4F] font-bold mb-3 relative z-10">CASE STUDY — {p.year || "2026"}</span>
                    <span className="text-2xl font-heading font-extrabold relative z-10">{p.title}</span>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#07191A]/20 group-hover:bg-transparent transition-colors duration-700" />

                {/* Floating Category Tag */}
                <div className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-[#051314]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold uppercase tracking-widest text-[#F8F6F3]/70 shadow-sm group-hover:border-[#C87D4F]/40 group-hover:text-[#C87D4F] transition-all">
                  {p.category}
                </div>

                {/* Arrow overlay on hover */}
                <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-[#C87D4F] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg translate-y-2 group-hover:translate-y-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              <div className="flex justify-between items-center px-1">
                <h3 className="text-xl font-heading font-extrabold text-[#F8F6F3] group-hover:text-[#C87D4F] transition-colors duration-300">
                  {p.title}
                </h3>
                <span className="text-xs font-mono text-[#F8F6F3]/25 font-bold">{p.year || "2026"}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}