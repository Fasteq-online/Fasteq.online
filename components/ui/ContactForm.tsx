"use client";

import React, { useState } from "react";

export default function ContactForm() {
  // Aapka Fix Formspree ID
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
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset(); // Form clear kar dega
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  }

  // --- Success Message View ---
  if (status === "SUCCESS") {
    return (
      <div className="py-20 text-center animate-blur-reveal">
        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-brand-teal mb-2 font-heading">Inquiry Received.</h3>
        <p className="text-brand-teal/50 text-sm">We'll review your vision and contact you shortly.</p>
        <button 
          onClick={() => setStatus("IDLE")}
          className="mt-8 text-brand-copper text-[10px] font-bold uppercase tracking-widest border-b border-brand-copper pb-1"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  // --- Main Form View ---
  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-[9px] font-bold uppercase tracking-widest text-brand-teal/40 ml-1">Full Name</label>
          <input 
            required
            name="name"
            type="text" 
            placeholder="Your name"
            className="bg-white/50 border border-black/5 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-brand-copper transition-all"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[9px] font-bold uppercase tracking-widest text-brand-teal/40 ml-1">Email Address</label>
          <input 
            required
            name="email"
            type="email" 
            placeholder="email@studio.com"
            className="bg-white/50 border border-black/5 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-brand-copper transition-all"
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="text-[9px] font-bold uppercase tracking-widest text-brand-teal/40 ml-1">Inquiry Type</label>
        <select name="service" className="bg-white/50 border border-black/5 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-brand-copper transition-all appearance-none cursor-pointer">
          <option value="General Inquiry">General Inquiry</option>
          <option value="Product Engineering">Product Engineering</option>
          <option value="AI Architecture">AI Architecture</option>
          <option value="Visual Strategy">Visual Strategy</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[9px] font-bold uppercase tracking-widest text-brand-teal/40 ml-1">Message</label>
        <textarea 
          required
          name="message"
          rows={4}
          placeholder="How can we help?"
          className="bg-white/50 border border-black/5 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-brand-copper transition-all resize-none"
        />
      </div>

      <button 
        disabled={status === "SENDING"}
        className="w-full bg-brand-teal text-white py-4 rounded-xl font-bold text-[11px] font-heading uppercase tracking-[0.2em] hover:bg-brand-copper transition-all shadow-xl shadow-brand-teal/10 disabled:opacity-50 mt-4"
      >
        {status === "SENDING" ? "Transmitting..." : "Send Message"}
      </button>

      {status === "ERROR" && (
        <p className="text-red-500 text-[10px] font-bold text-center mt-4 uppercase tracking-tighter">
          Error. Please verify your connection or try again.
        </p>
      )}
    </form>
  );
}