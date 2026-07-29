"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex justify-center p-6">
      <div className={`
        flex items-center justify-between w-full max-w-4xl px-5 transition-all duration-500 rounded-full border
        ${isScrolled 
          ? "bg-white/80 backdrop-blur-md border-black/5 shadow-sm py-2" 
          : "bg-white/40 border-transparent py-3"}
      `}>
        {/* Minimal Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-5 h-5 bg-brand-teal rounded-[4px] group-hover:rotate-90 transition-transform duration-500" />
          <span className="font-heading font-bold text-base tracking-tighter text-brand-teal uppercase">FASTEQ</span>
        </Link>

        {/* Links - Compact */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="text-[12px] font-medium text-brand-teal/60 hover:text-brand-teal transition-opacity tracking-tight">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="bg-brand-teal text-white px-4 py-1.5 rounded-lg text-[11px] font-bold hover:bg-brand-copper transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}