import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-brand-teal relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-copper/5 -skew-x-12 translate-x-1/4" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-brand-copper uppercase block mb-6">Ready to scale?</span>
          <h2 className="text-4xl md:text-6xl font-sans font-extrabold text-white tracking-tight mb-10 leading-tight">
            Let’s Build the Future <br /> of Your Digital Ecosystem.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="mailto:hello@fasteq.com"
              className="group relative px-10 py-5 bg-brand-copper text-white rounded-full font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-brand-copper-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            <Link
              href="#portfolio"
              className="text-white/60 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors underline underline-offset-8"
            >
              Explore our process
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;