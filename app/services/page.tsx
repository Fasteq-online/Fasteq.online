import React from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { detailedServicesQuery } from "@/sanity/lib/queries";
import { DETAILED_SERVICES } from "@/constants";

export default async function ServicesPage() {
  let services: any[] = [];
  try {
    services = await client.fetch(detailedServicesQuery, {}, { next: { revalidate: 10 } });
  } catch (error) {
    console.error("Sanity detailed services error:", error);
  }

  const displayServices = services && services.length > 0 ? services : DETAILED_SERVICES;

  return (
    <main className="pt-40 md:pt-48 pb-28 bg-[#07191A] text-white min-h-screen relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#C87D4F]/6 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0D2E2F]/60 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mb-24 text-left">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#C87D4F]/25 bg-white/[0.04] backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C87D4F] animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#C87D4F] uppercase">
              CAPABILITIES MANIFEST
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-extrabold text-[#F8F6F3] tracking-tight mb-8 leading-[0.9]">
            Full Stack <br />
            <span className="text-[#C87D4F] italic font-extrabold">Architectures.</span>
          </h1>
          <p className="text-[#F8F6F3]/50 text-lg md:text-xl max-w-2xl leading-relaxed">
            From high-frequency cloud systems to luxury consumer interfaces and bespoke AI engines, we deliver end-to-end digital mastery.
          </p>
        </div>

        {/* Services List */}
        <div className="grid gap-10">
          {displayServices.map((s: any, i: number) => (
            <div 
              key={i} 
              className="rounded-3xl border border-white/[0.08] hover:border-[#C87D4F]/40 overflow-hidden shadow-2xl flex flex-col lg:flex-row transition-all duration-500 group"
              style={{ background: "rgba(13,46,47,0.35)", backdropFilter: "blur(16px)" }}
            >
              {/* Left Color Block */}
              <div className="lg:w-1/3 p-10 md:p-12 bg-gradient-to-br from-[#0D2E2F] to-[#051314] text-white flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/[0.08]">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#C87D4F]/10 rounded-full blur-2xl pointer-events-none" />
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] font-bold text-[#C87D4F]">
                  {s.category || `DOMAINS / ${(s.order ?? (i + 1)) < 10 ? `0${s.order ?? (i + 1)}` : s.order ?? (i + 1)}`}
                </span>
                <h3 className="text-3xl md:text-4xl font-heading font-extrabold mt-16 leading-tight text-[#F8F6F3] group-hover:text-[#C87D4F] transition-colors">
                  {s.title}
                </h3>
              </div>

              {/* Right Content Block */}
              <div className="lg:w-2/3 p-10 md:p-14 text-left flex flex-col justify-between">
                <p className="text-lg md:text-xl text-[#F8F6F3]/60 mb-10 leading-relaxed font-normal">
                  {s.description}
                </p>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {s.features?.map((f: string, idx: number) => (
                    <div 
                      key={idx} 
                      className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.03] text-xs font-bold text-[#F8F6F3]/80 flex items-center gap-3 group-hover:border-[#C87D4F]/20 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#C87D4F] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-20 p-12 rounded-3xl border border-[#C87D4F]/25 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #051314 0%, #0D2E2F 100%)" }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C87D4F]/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 text-left">
            <h3 className="text-2xl md:text-3xl font-heading font-extrabold mb-2 text-[#F8F6F3]">Need a custom engineering scope?</h3>
            <p className="text-[#F8F6F3]/40 text-sm">We construct bespoke technical solutions tailored to your infrastructure requirements.</p>
          </div>
          <Link 
            href="/contact" 
            className="relative z-10 shrink-0 bg-[#C87D4F] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#E08E5A] transition-all shadow-xl shadow-[#C87D4F]/20 hover:scale-105 active:scale-95"
          >
            Schedule Technical Consultation
          </Link>
        </div>

      </div>
    </main>
  );
}