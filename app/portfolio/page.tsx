import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { DETAILED_PROJECTS } from "@/constants";

const detailedProjectsQuery = `*[_type == "project"] | order(year desc) {
  title,
  category,
  description,
  year,
  tags,
  "imageUrl": mainImage.asset->url
}`;

export default async function PortfolioPage() {
  let projects: any[] = [];
  try {
    projects = await client.fetch(detailedProjectsQuery, {}, { next: { revalidate: 10 } });
  } catch (error) {
    console.error("Sanity detailed projects error:", error);
  }

  const displayProjects = projects && projects.length > 0 ? projects : DETAILED_PROJECTS;

  return (
    <main className="pt-40 md:pt-48 pb-28 bg-[#07191A] text-white min-h-screen relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-[#C87D4F]/6 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-20 text-left">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#C87D4F]/25 bg-white/[0.04] backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C87D4F] animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#C87D4F] uppercase">
              PROJECT ARCHIVE & REGISTRIES
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-extrabold text-[#F8F6F3] mb-6 tracking-tight leading-[0.9]">
            Selected <br />
            <span className="text-[#C87D4F] italic font-extrabold">Works.</span>
          </h1>
          <p className="text-[#F8F6F3]/50 text-lg md:text-xl leading-relaxed font-normal">
            A curated registry of software ecosystems engineered for maximum performance, resilience, and conversion impact.
          </p>
        </div>

        {/* Projects Stack */}
        <div className="grid gap-12">
          {displayProjects.map((p: any, i: number) => (
            <div 
              key={i} 
              className="p-8 md:p-12 rounded-3xl border border-white/[0.08] hover:border-[#C87D4F]/40 shadow-2xl flex flex-col lg:flex-row gap-12 items-center transition-all duration-700 group"
              style={{ background: "rgba(13,46,47,0.3)", backdropFilter: "blur(16px)" }}
            >
              {/* Media Frame */}
              <div className="w-full lg:w-2/5 aspect-[4/3] lg:aspect-square relative rounded-2xl overflow-hidden bg-[#051314] border border-white/[0.08] shrink-0">
                {p.imageUrl ? (
                  <Image 
                    src={p.imageUrl} 
                    alt={p.title} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0D2E2F] to-[#051314] p-8 flex flex-col justify-between text-white">
                    <div className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: "linear-gradient(rgba(200,125,79,0.15) 1px, transparent 1px), linear-gradient(to right, rgba(200,125,79,0.15) 1px, transparent 1px)",
                        backgroundSize: "30px 30px"
                      }}
                    />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C87D4F] font-bold relative z-10">CASE STUDY 0{i + 1}</span>
                    <div className="relative z-10">
                      <span className="text-xs font-mono text-[#F8F6F3]/40 uppercase block mb-1">{p.year || "2026"} RELEASE</span>
                      <h4 className="text-3xl font-heading font-extrabold text-[#F8F6F3]">{p.title}</h4>
                    </div>
                  </div>
                )}
              </div>

              {/* Text Meta */}
              <div className="w-full lg:w-3/5 text-left flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#C87D4F] font-mono text-[11px] font-bold uppercase tracking-widest">{p.category}</span>
                    <span className="text-white/20">•</span>
                    <span className="text-[#F8F6F3]/40 font-mono text-[11px] font-bold">{p.year || "2026"}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-[#F8F6F3] mb-6 group-hover:text-[#C87D4F] transition-colors duration-300">
                    {p.title}
                  </h3>

                  <p className="text-base md:text-lg text-[#F8F6F3]/60 mb-8 leading-relaxed font-normal italic">
                    "{p.description}"
                  </p>
                </div>

                {/* Tech Tags */}
                {p.tags && p.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2.5 pt-6 border-t border-white/[0.08]">
                    {p.tags.map((tag: string) => (
                      <span 
                        key={tag} 
                        className="bg-white/[0.04] px-4 py-2 rounded-full text-[10px] font-mono font-bold text-[#F8F6F3]/70 border border-white/10 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Back Link */}
        <div className="mt-20 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F8F6F3]/40 uppercase tracking-widest hover:text-[#C87D4F] transition-colors"
          >
            <span>← Return to Executive Overview</span>
          </Link>
        </div>
      </div>
    </main>
  );
}