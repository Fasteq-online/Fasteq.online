import React from "react";
import Link from "next/link";
import { ADVANTAGES } from "@/constants";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0D2E2F] text-white">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left: Content */}
          <div className="lg:w-1/2">
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#C87D4F] uppercase block mb-6">The Advantage</span>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-10 tracking-tighter leading-none">Why Choose <br /> FASTEQ?</h2>
            
            <div className="space-y-10">
              {ADVANTAGES.map((adv, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-[#C87D4F]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={adv.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{adv.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Pricing Teaser Box */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-sm text-center">
              <h3 className="text-2xl font-bold mb-6">Transparent Investment.</h3>
              <p className="text-white/40 text-sm mb-10 leading-relaxed">
                We believe in clear value and results-driven pricing for every digital ecosystem we build.
              </p>
              <Link 
                href="/pricing" 
                className="inline-block w-full bg-[#C87D4F] text-white py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#AE6B42] transition-all shadow-xl shadow-[#C87D4F]/20"
              >
                View Pricing Tiers
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}