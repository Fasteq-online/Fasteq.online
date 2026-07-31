"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import HeroCanvas from "@/components/ui/HeroCanvas";

export default function Hero() {
  const [mounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 45, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 25 });

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        containerRef.current.style.setProperty("--mouse-x", `${clientX - rect.left}px`);
        containerRef.current.style.setProperty("--mouse-y", `${clientY - rect.top}px`);
      }
      mouseX.set(clientX);
      mouseY.set(clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const transformX = useTransform(springX, (val) => val - 500);
  const transformY = useTransform(springY, (val) => val - 500);

  if (!mounted) {
    return <section className="relative min-h-screen bg-[#07191A]" />;
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden select-none"
      style={{ background: "linear-gradient(135deg, #07191A 0%, #0D2E2F 50%, #051314 100%)" }}
    >
      {/* Particle Constellation Canvas */}
      <HeroCanvas />

      {/* Interactive Copper Grid */}
      <div className="grid-container" />

      {/* Ambient Mouse-Tracking Glow */}
      <motion.div
        style={{ x: transformX, y: transformY }}
        className="fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none -z-10 hidden md:block"
      >
        <div className="absolute inset-0 bg-[#C87D4F]/10 blur-[100px] rounded-full" />
      </motion.div>

      {/* Static Bottom-Left Glow */}
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#C87D4F]/6 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">

        {/* Live Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#C87D4F]/25 bg-white/[0.04] backdrop-blur-2xl shadow-2xl group cursor-default hover:border-[#C87D4F]/50 transition-all duration-500">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C87D4F] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C87D4F]" />
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.28em] text-[#F8F6F3]/70">
              FASTEQ ARCHITECTURE LABS — 2026
            </span>
            <span className="w-px h-3 bg-white/10" />
            <span className="text-[10px] font-mono text-[#C87D4F] font-bold uppercase tracking-widest">LIVE</span>
          </div>
        </motion.div>

        {/* Cinematic Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-heading font-extrabold leading-[0.88] tracking-[-0.04em] mb-10">
          <div className="overflow-hidden pb-2">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[#F8F6F3]"
            >
              We Build
            </motion.span>
          </div>
          <div className="overflow-hidden pb-2">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#C87D4F] italic font-extrabold block"
            >
              What&apos;s Next.
            </motion.span>
          </div>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl text-[#F8F6F3]/50 text-base sm:text-lg md:text-xl mb-14 leading-relaxed"
        >
          Software engineering, AI solutions, and luxury digital experiences — designed for companies that move fast.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md"
        >
          <Link
            href="/contact"
            className="group relative w-full sm:w-auto bg-[#C87D4F] text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] overflow-hidden transition-all shadow-2xl shadow-[#C87D4F]/25 hover:shadow-[#C87D4F]/40 hover:scale-[1.04] active:scale-[0.97]"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <span>Initiate Partnership</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-[#E08E5A] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>

          <Link
            href="/portfolio"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] text-[#F8F6F3]/70 hover:text-[#F8F6F3] border border-white/10 hover:border-[#C87D4F]/40 hover:bg-white/[0.04] transition-all duration-300"
          >
            Explore Archive
          </Link>
        </motion.div>

        {/* Telemetry Metric Pills */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-4 text-[10px] font-mono font-bold uppercase tracking-widest"
        >
          {[
            { label: "99.9% UPTIME SLA", color: "#C87D4F" },
            { label: "24 DESIGN AWARDS", color: "#4EA8A8" },
            { label: "150+ GLOBAL CLIENTS", color: "#C87D4F" },
          ].map((pill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#C87D4F]/30 transition-all cursor-default text-[#F8F6F3]/50 hover:text-[#F8F6F3]/80"
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: pill.color }} />
              <span>{pill.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Side Accents */}
      <div className="hidden lg:flex flex-col items-center gap-3 absolute left-10 bottom-16">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#C87D4F]/40 to-[#C87D4F]" />
        <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#F8F6F3]/25 [writing-mode:vertical-lr] rotate-180">
          GLOBAL ADVISORY — 2026
        </span>
      </div>

      <div className="hidden lg:flex flex-col items-center gap-3 absolute right-10 bottom-16">
        <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#F8F6F3]/25 [writing-mode:vertical-lr]">
          SCROLL TO DISCOVER
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-t from-transparent via-[#F8F6F3]/15 to-[#F8F6F3]/30" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07191A] to-transparent pointer-events-none" />
    </section>
  );
}