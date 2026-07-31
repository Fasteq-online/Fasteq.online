"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Copper Scroll Progress Line */}
      <motion.div
        style={{ scaleX: scrollYProgress, background: "linear-gradient(to right, #0D2E2F, #C87D4F, #E08E5A, #C87D4F, #0D2E2F)" }}
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[110]"
      />

      <header className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-4 px-4 md:pt-6 md:px-6 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl px-5 md:px-6 transition-all duration-500 rounded-full border ${
            isScrolled
              ? "py-3 bg-[#051314]/90 backdrop-blur-2xl border-[#C87D4F]/20 shadow-2xl shadow-black/40 scale-[0.99]"
              : "py-4 bg-[#07191A]/70 backdrop-blur-xl border-white/[0.07]"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/assets/images/logo.png"
                alt="FASTEQ Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading font-extrabold text-sm tracking-widest text-[#F8F6F3] uppercase leading-none">FASTEQ</span>
              <span className="text-[8px] font-mono tracking-widest text-[#C87D4F] uppercase font-bold hidden sm:block mt-0.5">Tech &amp; Design</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.04] p-1.5 rounded-full border border-white/[0.06]">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-semibold tracking-tight transition-all duration-300 rounded-full ${
                    isActive ? "text-[#07191A] font-bold" : "text-[#F8F6F3]/50 hover:text-[#F8F6F3]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 bg-[#C87D4F] rounded-full shadow-lg shadow-[#C87D4F]/30"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.label}
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-[#C87D4F] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#E08E5A] transition-all duration-300 shadow-lg shadow-[#C87D4F]/25 hover:shadow-[#C87D4F]/40 hover:scale-105 active:scale-95"
            >
              <span>Initiate</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] text-[#F8F6F3] focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`w-4 h-0.5 bg-[#F8F6F3] transition-transform duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-1" : ""}`} />
              <span className={`w-4 h-0.5 bg-[#F8F6F3] transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-4 h-0.5 bg-[#F8F6F3] transition-transform duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex flex-col justify-center px-8"
            style={{ background: "rgba(5,19,20,0.97)", backdropFilter: "blur(40px)" }}
          >
            <div className="flex flex-col gap-6 max-w-md mx-auto w-full text-left">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C87D4F] font-bold">Studio Navigation</span>
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={`text-4xl font-heading font-extrabold tracking-tight block transition-colors ${
                      pathname === link.href ? "text-[#C87D4F]" : "text-[#F8F6F3]/60 hover:text-[#F8F6F3]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.08 }}
                className="pt-6 border-t border-white/10"
              >
                <Link
                  href="/contact"
                  className="block text-center bg-[#C87D4F] text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-2xl shadow-[#C87D4F]/30"
                >
                  Start Project Scope
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}