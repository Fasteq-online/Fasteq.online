import React from "react";
import Link from "next/link";
import { ADVANTAGES } from "@/constants";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-28 text-white relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #051314 0%, #0D2E2F 50%, #07191A 100%)" }}
    >
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C87D4F]/8 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0D2E2F]/80 blur-[160px] rounded-full pointer-events-none" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(200,125,79,0.2) 1px, transparent 1px), linear-gradient(to right, rgba(200,125,79,0.2) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-20">

          {/* Left: Advantages */}
          <div className="lg:w-7/12">
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#C87D4F] uppercase block mb-6">
              THE FASTEQ ADVANTAGE
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-12 tracking-tight leading-[0.95] text-[#F8F6F3]">
              Engineered for Value. <br />
              <span className="text-[#C87D4F]">Built for Scale.</span>
            </h2>

            <div className="space-y-8">
              {ADVANTAGES.map((adv, i) => (
                <div key={i} className="flex gap-5 group">
                  <div
                    className="w-12 h-12 shrink-0 rounded-2xl border border-white/[0.08] flex items-center justify-center text-[#C87D4F] group-hover:bg-[#C87D4F] group-hover:text-white group-hover:border-[#C87D4F] transition-all duration-400"
                    style={{ background: "rgba(200,125,79,0.08)" }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d={adv.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-extrabold mb-1.5 text-[#F8F6F3] group-hover:text-[#C87D4F] transition-colors">
                      {adv.title}
                    </h3>
                    <p className="text-[#F8F6F3]/40 text-sm leading-relaxed max-w-lg">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Investment Card */}
          <div className="lg:w-5/12 w-full lg:sticky lg:top-32">
            <div
              className="border border-[#C87D4F]/20 p-10 md:p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden"
              style={{ background: "rgba(13,46,47,0.5)", backdropFilter: "blur(20px)" }}
            >
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#C87D4F]/15 rounded-full blur-2xl pointer-events-none" />

              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C87D4F] font-bold block mb-4 relative z-10">
                INVESTMENT MODEL
              </span>
              <h3 className="text-3xl font-heading font-extrabold mb-4 text-[#F8F6F3] relative z-10">Transparent Tiers.</h3>
              <p className="text-[#F8F6F3]/40 text-sm mb-10 leading-relaxed relative z-10">
                Predictable pricing aligned with your milestone requirements and enterprise scalability targets.
              </p>

              <Link
                href="/pricing"
                className="group relative inline-flex items-center justify-center w-full bg-[#C87D4F] text-white py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] overflow-hidden transition-all shadow-xl shadow-[#C87D4F]/25 hover:scale-[1.03] active:scale-[0.97]"
              >
                <span className="relative z-10">Explore Pricing Tiers</span>
                <div className="absolute inset-0 bg-[#E08E5A] translate-y-full group-hover:translate-y-0 transition-transform duration-400" />
              </Link>

              {/* Trust badges */}
              <div className="mt-8 pt-6 border-t border-white/[0.07] flex flex-col gap-2 text-[10px] font-mono text-[#F8F6F3]/20 uppercase tracking-widest">
                <span>✦ No hidden fees</span>
                <span>✦ Milestone-based payments</span>
                <span>✦ NDA signed on engagement</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}