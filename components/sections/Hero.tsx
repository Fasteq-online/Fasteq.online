"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-52 pb-32 flex flex-col items-center text-center px-4 overflow-hidden">
      
      {/* Soft Glow behind the text (As seen in Pic 2) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-copper/5 blur-[120px] rounded-full -z-10" />

      <div className="relative z-10 animate-blur-reveal">
        
        {/* Technical Badge Style */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-teal/10 bg-white/50 backdrop-blur-sm mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-copper animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-teal/50">
            FASTEQ TECHNOLOGY & DESIGN STUDIO
          </span>
        </div>
        
        {/* Headline with High-End Tracking */}
        <h1 className="text-6xl md:text-8xl lg:text-[100px] font-bold max-w-5xl leading-[0.85] tracking-[-0.06em] mb-10 text-brand-teal">
          We Architect Systems <br /> 
          <span className="text-brand-copper">That Shape The Future.</span>
        </h1>
        
        {/* Focused Subtext */}
        <p className="max-w-2xl text-brand-teal/50 text-sm md:text-lg mb-12 leading-relaxed mx-auto font-medium">
          Technology. Design. Innovation. We craft high-speed web applications, 
          autonomous AI systems, and iconic brand identities for visionary enterprises.
        </p>

        {/* Studio Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-brand-teal text-white px-10 py-4 rounded-xl font-bold text-[12px] uppercase tracking-widest hover:bg-brand-copper transition-all shadow-xl shadow-brand-teal/10">
            Start a Project
          </Link>
          <Link href="/portfolio" className="bg-white/80 backdrop-blur-sm border border-black/5 px-10 py-4 rounded-xl font-bold text-[12px] uppercase tracking-widest hover:bg-white transition-colors">
            View Archive
          </Link>
        </div>
      </div>
    </section>
  );
}