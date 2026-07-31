"use client";

import React, { useState } from "react";

const inputClass = `w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-sm text-[#F8F6F3] 
  placeholder:text-[#F8F6F3]/20 focus:outline-none focus:border-[#C87D4F]/60 focus:ring-2 
  focus:ring-[#C87D4F]/10 transition-all`;

export default function ContactForm() {
  const FORMSPREE_ID = "mykrawpd";

  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("SENDING");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }
  }

  if (status === "SUCCESS") {
    return (
      <div className="py-16 text-center">
        <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/25 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-heading font-extrabold text-[#F8F6F3] mb-3">Inquiry Transmitted.</h3>
        <p className="text-[#F8F6F3]/40 text-sm max-w-sm mx-auto leading-relaxed">
          Your project specifications have been logged. Our partners will respond within 24 business hours.
        </p>
        <button
          onClick={() => setStatus("IDLE")}
          className="mt-8 text-[#C87D4F] text-xs font-mono font-bold uppercase tracking-widest border-b border-[#C87D4F]/30 hover:border-[#C87D4F] pb-1 transition-all"
        >
          Transmit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#F8F6F3]/30 ml-1">
            Full Name <span className="text-[#C87D4F]">*</span>
          </label>
          <input
            required
            name="name"
            type="text"
            placeholder="Alex Sterling"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#F8F6F3]/30 ml-1">
            Email Address <span className="text-[#C87D4F]">*</span>
          </label>
          <input
            required
            name="email"
            type="email"
            placeholder="sterling@enterprise.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#F8F6F3]/30 ml-1">
          Engagement Domain
        </label>
        <select
          name="service"
          className={inputClass + " cursor-pointer"}
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          <option value="General Inquiry" style={{ background: "#07191A" }}>General Strategic Advisory</option>
          <option value="Product Engineering" style={{ background: "#07191A" }}>Enterprise Software Engineering</option>
          <option value="AI Architecture" style={{ background: "#07191A" }}>Bespoke AI Architecture & Agents</option>
          <option value="Visual Strategy" style={{ background: "#07191A" }}>Luxury Digital Product Design</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#F8F6F3]/30 ml-1">
          Project Scope & Objectives <span className="text-[#C87D4F]">*</span>
        </label>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Detail your technical timeline, vision, and operational targets..."
          className={inputClass + " resize-none"}
        />
      </div>

      <button
        disabled={status === "SENDING"}
        className="w-full bg-[#C87D4F] text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#E08E5A] transition-all shadow-xl shadow-[#C87D4F]/20 disabled:opacity-50 mt-4 active:scale-[0.99]"
      >
        {status === "SENDING" ? "Transmitting…" : "Transmit Project Scope →"}
      </button>

      {status === "ERROR" && (
        <p className="text-red-400 text-xs font-mono font-bold text-center uppercase tracking-tight">
          Transmission interrupted. Please verify fields and retry.
        </p>
      )}
    </form>
  );
}