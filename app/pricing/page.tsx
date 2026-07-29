import React from "react";
import Link from "next/link";
import { PRICING_PLANS } from "@/constants";

export default function PricingPage() {
  return (
    <main className="pt-40 pb-24 bg-[#F8F6F3] min-h-screen font-sans">
      <div className="container mx-auto px-4">
        
        <div className="max-w-3xl mb-20">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#C87D4F] uppercase block mb-6">Investment</span>
          <h1 className="text-6xl md:text-8xl font-extrabold text-[#0D2E2F] tracking-tighter mb-8 leading-none">Clear Value.</h1>
          <p className="text-[#0D2E2F]/60 text-xl leading-relaxed">
            Tailored investment tiers designed for businesses at different stages of their digital journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, i) => (
            <div key={i} className={`relative p-12 rounded-[2.5rem] border ${plan.isPopular ? 'bg-[#0D2E2F] text-white border-none shadow-2xl' : 'bg-white border-black/5 text-[#0D2E2F]'}`}>
              {plan.isPopular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C87D4F] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">Recommended</span>}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-10 ${plan.isPopular ? 'text-white/50' : 'text-[#0D2E2F]/50'}`}>{plan.description}</p>
              <div className="mb-10">
                <span className="text-5xl font-extrabold">${plan.price}</span>
              </div>
              <ul className="space-y-4 mb-12">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                    <svg className="w-4 h-4 text-[#C87D4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={`block text-center py-5 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all ${plan.isPopular ? 'bg-white text-[#0D2E2F] hover:bg-[#F8F6F3]' : 'bg-[#0D2E2F] text-white hover:bg-[#1a4a4c]'}`}>
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link href="/" className="text-[#0D2E2F] font-mono text-[10px] uppercase tracking-widest font-bold border-b border-[#C87D4F] pb-2">← Back to HQ</Link>
        </div>

      </div>
    </main>
  );
}