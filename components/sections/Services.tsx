import React from "react";
import Link from "next/link";
import { SERVICES } from "@/constants";

export default function Services() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12">
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-brand-copper uppercase block mb-4">Expertise</span>
          <h2 className="text-3xl font-bold tracking-tighter">Core Capabilities.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((s, i) => (
            <div key={i} className="p-8 bg-white/50 backdrop-blur-sm border border-black/5 rounded-2xl hover:border-brand-copper/30 transition-all group">
              <div className="w-10 h-10 bg-white border border-black/5 rounded-lg flex items-center justify-center mb-6 text-brand-teal group-hover:bg-brand-copper group-hover:text-white transition-colors duration-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={s.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 tracking-tight">{s.title}</h3>
              <p className="text-brand-teal/50 text-[13px] leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        {/* --- RESTORED BUTTON --- */}
        <div className="flex justify-start">
          <Link 
            href="/services" 
            className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-brand-teal/40 hover:text-brand-copper transition-colors"
          >
            Explore All Capabilities
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}