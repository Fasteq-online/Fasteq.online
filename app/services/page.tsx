import React from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { detailedServicesQuery } from "@/sanity/lib/queries";

export default async function ServicesPage() {
  const services = await client.fetch(detailedServicesQuery, {}, { next: { revalidate: 10 } });

  return (
    <main className="pt-40 pb-24 bg-[#F8F6F3] min-h-screen font-sans">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#C87D4F] uppercase block mb-6">Expertise</span>
          <h1 className="text-6xl md:text-8xl font-extrabold text-[#0D2E2F] tracking-tighter mb-8 leading-none">Full Stack <br /> Solutions.</h1>
        </div>

        <div className="grid gap-12">
          {services?.map((s: any, i: number) => (
            <div key={i} className="bg-white rounded-[2.5rem] border border-black/5 overflow-hidden shadow-sm flex flex-col lg:flex-row transition-all hover:shadow-xl">
              <div className={`lg:w-1/3 p-12 ${s.color || 'bg-brand-teal'} text-white flex flex-col justify-between`}>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">{s.category}</span>
                <h3 className="text-3xl font-bold mt-20">{s.title}</h3>
              </div>
              <div className="lg:w-2/3 p-12 md:p-16 text-left">
                <p className="text-xl text-[#0D2E2F]/70 mb-10 leading-relaxed">{s.description}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {s.features?.map((f: string, idx: number) => (
                    <div key={idx} className="p-4 bg-[#F8F6F3] rounded-2xl border border-black/5 text-sm font-bold text-[#0D2E2F]/80 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C87D4F]" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}