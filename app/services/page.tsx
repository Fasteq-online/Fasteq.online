import React from "react";
import Link from "next/link";
import { DETAILED_SERVICES } from "@/constants";

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-24 bg-[#F8F6F3] min-h-screen font-sans">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-20">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#C87D4F] uppercase block mb-6">Our Full Capabilities</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#0D2E2F] tracking-tight mb-8">
            Expert <span className="text-[#C87D4F]">Solutions.</span>
          </h1>
          <p className="text-[#0D2E2F]/60 text-lg leading-relaxed">
            From enterprise architecture to high-end visual design, we build the systems that drive growth.
          </p>
        </div>

        <div className="grid gap-12">
          {DETAILED_SERVICES.map((service, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] border border-black/5 overflow-hidden shadow-sm flex flex-col lg:flex-row transition-all hover:shadow-xl">
              <div className={`lg:w-1/3 p-12 ${service.color} text-white flex flex-col justify-between`}>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">{service.category}</span>
                <h3 className="text-3xl font-bold mt-20">{service.title}</h3>
              </div>
              <div className="lg:w-2/3 p-12 md:p-16 text-left">
                <p className="text-xl text-[#0D2E2F]/70 mb-10 leading-relaxed">{service.description}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((f, idx) => (
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

        <div className="mt-20 text-center">
          <Link href="/" className="text-[#C87D4F] font-mono text-xs uppercase tracking-widest font-bold border-b border-[#C87D4F] pb-2">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}