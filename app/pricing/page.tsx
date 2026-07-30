import React from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { pricingQuery } from "@/sanity/lib/queries";

export default async function PricingPage() {
  const plans = await client.fetch(pricingQuery, {}, { next: { revalidate: 10 } });

  return (
    <main className="pt-40 pb-24 bg-[#F8F6F3] min-h-screen font-sans">
      <div className="container mx-auto px-6 max-w-6xl text-left">
        <div className="max-w-3xl mb-20">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#C87D4F] uppercase block mb-6">Investment</span>
          <h1 className="text-6xl md:text-8xl font-extrabold text-[#0D2E2F] tracking-tighter mb-8">Clear Value.</h1>
          <p className="text-[#0D2E2F]/60 text-xl leading-relaxed max-w-xl">
            Predictable pricing tiers designed for the next generation of digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans?.map((plan: any, i: number) => (
            <div key={i} className={`relative p-10 rounded-2xl border ${plan.isPopular ? 'bg-[#0D2E2F] text-white border-none shadow-2xl scale-105 z-10' : 'bg-white border-black/5 text-[#0D2E2F]'}`}>
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-[12px] mb-8 ${plan.isPopular ? 'text-white/50' : 'text-[#0D2E2F]/50'}`}>{plan.description}</p>
              <div className="mb-10">
                <span className="text-4xl font-bold tracking-tighter">${plan.price}</span>
              </div>
              <ul className="space-y-4 mb-12">
                {plan.features?.map((f: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-3 text-[13px] font-medium">
                    <svg className="w-3.5 h-3.5 text-[#C87D4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={`block text-center py-4 rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all ${plan.isPopular ? 'bg-white text-[#0D2E2F]' : 'bg-[#0D2E2F] text-white'}`}>
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}