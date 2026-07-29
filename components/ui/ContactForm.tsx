"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="bg-brand-teal p-12 rounded-3xl text-center">
        <div className="w-16 h-16 bg-brand-copper rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
        <p className="text-white/60 text-sm">Our team will get back to you within 24 hours.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-8 text-brand-copper font-mono text-[10px] uppercase tracking-widest font-bold underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-mono uppercase tracking-widest text-brand-teal/40 font-bold ml-1">Full Name</label>
          <input 
            required
            type="text" 
            placeholder="John Doe"
            className="bg-white border border-black/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-copper transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-mono uppercase tracking-widest text-brand-teal/40 font-bold ml-1">Email Address</label>
          <input 
            required
            type="email" 
            placeholder="john@example.com"
            className="bg-white border border-black/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-copper transition-colors"
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-mono uppercase tracking-widest text-brand-teal/40 font-bold ml-1">Subject</label>
        <select className="bg-white border border-black/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-copper transition-colors appearance-none">
          <option>Web Development</option>
          <option>AI Automation</option>
          <option>UI/UX Design</option>
          <option>Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-mono uppercase tracking-widest text-brand-teal/40 font-bold ml-1">Message</label>
        <textarea 
          required
          rows={5}
          placeholder="Tell us about your project..."
          className="bg-white border border-black/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-copper transition-colors resize-none"
        />
      </div>

      <button 
        disabled={status === "sending"}
        className="w-full bg-brand-teal text-white py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-brand-teal-light transition-all shadow-xl shadow-brand-teal/10 disabled:opacity-50"
      >
        {status === "sending" ? "Dispatching..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;