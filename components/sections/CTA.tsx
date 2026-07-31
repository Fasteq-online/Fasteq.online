import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden text-white"
      style={{ background: "linear-gradient(135deg, #051314 0%, #0D2E2F 40%, #07191A 100%)" }}
    >
      {/* Large ambient glows */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#C87D4F]/10 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0D2E2F]/80 blur-[160px] rounded-full pointer-events-none" />

      {/* Top copper divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C87D4F]/30 to-transparent" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(200,125,79,0.12) 1px, transparent 1px), linear-gradient(to right, rgba(200,125,79,0.12) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#C87D4F] uppercase block mb-6 px-5 py-2 rounded-full border border-[#C87D4F]/25 bg-[#C87D4F]/5">
            START YOUR TRANSFORMATION
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight mb-8 leading-[0.9] text-[#F8F6F3]">
            Architect the Future of <br />
            <span className="text-[#C87D4F] italic font-extrabold">Your Digital Ecosystem.</span>
          </h2>

          <p className="text-[#F8F6F3]/45 text-base md:text-lg max-w-xl mb-12 leading-relaxed">
            Partner with an award-winning digital engineering studio to build high-performance software and AI architectures that transcend expectations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-md">
            <Link
              href="/contact"
              className="group relative w-full sm:w-auto px-10 py-4 bg-[#C87D4F] text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] overflow-hidden transition-all shadow-2xl shadow-[#C87D4F]/25 hover:scale-[1.04] hover:shadow-[#C87D4F]/40 active:scale-[0.97]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2.5">
                <span>Initiate Project Scope</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-[#E08E5A] translate-y-full group-hover:translate-y-0 transition-transform duration-400" />
            </Link>

            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] text-[#F8F6F3]/55 hover:text-[#F8F6F3] border border-white/10 hover:border-[#C87D4F]/35 hover:bg-white/[0.04] transition-all duration-300"
            >
              Explore Archive
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-[10px] font-mono uppercase tracking-widest text-[#F8F6F3]/25">
            <span>✦ Rated 5.0 on Clutch</span>
            <span>✦ ISO 27001 Compliant</span>
            <span>✦ 72hr Response SLA</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;