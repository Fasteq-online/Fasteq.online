import React from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { pricingQuery } from "@/sanity/lib/queries";
import { PRICING_PLANS } from "@/constants";

export default async function PricingPage() {
  let plans: any[] = [];
  try {
    plans = await client.fetch(pricingQuery, {}, { next: { revalidate: 0 } });
  } catch (error) {
    console.error("Sanity pricing error:", error);
  }

  const displayPlans = plans && plans.length > 0 ? plans : PRICING_PLANS;

  return (
    <main className="pt-40 md:pt-48 pb-28 bg-[#07191A] text-white min-h-screen relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#C87D4F]/6 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl text-left relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#C87D4F]/25 bg-white/[0.04] backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C87D4F] animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#C87D4F] uppercase">
              FINANCIAL ARCHITECTURE
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-extrabold text-[#F8F6F3] tracking-tight mb-8 leading-[0.9]">
            Transparent <br />
            <span className="text-[#C87D4F] italic font-extrabold">Investments.</span>
          </h1>
          <p className="text-[#F8F6F3]/50 text-lg md:text-xl leading-relaxed max-w-xl">
            Modular engineering packages designed for early-stage stealth launches, enterprise expansions, and custom digital systems.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {displayPlans.map((plan: any, i: number) => {
            const isPopular = plan.isPopular;
            return (
              <div 
                key={i} 
                className={`
                  relative p-10 md:p-12 rounded-3xl flex flex-col justify-between transition-all duration-500 hover:shadow-2xl
                  ${isPopular 
                    ? "bg-[#0D2E2F] text-white shadow-2xl scale-[1.03] z-10 border-2 border-[#C87D4F]" 
                    : "bg-white/[0.03] border border-white/[0.08] text-[#F8F6F3] backdrop-blur-xl"}
                `}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C87D4F] text-white px-5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-[0.2em] shadow-md">
                    Recommended Tier
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-heading font-extrabold text-[#F8F6F3]">{plan.name}</h3>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C87D4F]">TIER 0{i + 1}</span>
                  </div>

                  <p className="text-xs mb-8 leading-relaxed text-[#F8F6F3]/50">
                    {plan.description}
                  </p>

                  <div className="mb-10 pb-8 border-b border-white/[0.08]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold text-[#C87D4F]">$</span>
                      <span className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-[#F8F6F3]">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-xs font-mono text-[#F8F6F3]/40">/ project</span>}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-12">
                    {plan.features?.map((f: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-3 text-xs font-semibold text-[#F8F6F3]/80">
                        <svg className="w-4 h-4 shrink-0 text-[#C87D4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href="/contact" 
                  className={`
                    block text-center py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-md
                    ${isPopular 
                      ? "bg-[#C87D4F] text-white hover:bg-[#E08E5A] shadow-[#C87D4F]/30 hover:scale-[1.02]" 
                      : "bg-white/[0.06] border border-white/10 text-[#F8F6F3] hover:bg-[#C87D4F] hover:border-[#C87D4F]"}
                  `}
                >
                  Engage Architecture Scope
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}