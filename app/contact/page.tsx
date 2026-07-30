import React from "react";
import ContactForm from "@/components/ui/ContactForm";
import { client } from "@/sanity/lib/client";
import { contactQuery } from "@/sanity/lib/queries";

export default async function ContactPage() {
  // Fetching editable Gmail and Location from Sanity
  const info = await client.fetch(contactQuery, {}, { next: { revalidate: 10 } });

  return (
    <main className="pt-48 pb-24 min-h-screen font-sans relative">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Live Editable Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-teal/10 bg-white/50 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-copper animate-pulse" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-teal/50">Direct Communication</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold text-brand-teal tracking-tighter mb-10 leading-none">
              Let's <span className="text-brand-copper">Sync.</span>
            </h1>
            
            <p className="text-xl text-brand-teal/50 mb-16 max-w-md font-medium">
              Ready to architect your next digital legacy? We are currently accepting new projects.
            </p>

            <div className="space-y-10">
              <div className="group">
                <h4 className="text-[10px] font-mono font-bold text-brand-copper uppercase tracking-widest mb-2">Gmail Address</h4>
                <p className="text-2xl font-bold text-brand-teal hover:text-brand-copper transition-colors cursor-pointer">
                  {info?.email || "hello@fasteq.com"}
                </p>
              </div>

              <div className="group">
                <h4 className="text-[10px] font-mono font-bold text-brand-copper uppercase tracking-widest mb-2">Office Location</h4>
                <p className="text-2xl font-bold text-brand-teal leading-tight max-w-xs">
                  {info?.location || "Innovation District, Tech Plaza, ST-40"}
                </p>
              </div>
              
              {/* Socials - Pre-set for Studio feel */}
              <div className="flex gap-8 pt-6 border-t border-black/5">
                <a href={info?.instagram || "#"} className="text-xs font-bold font-mono opacity-40 hover:opacity-100 hover:text-brand-copper transition-all">INSTAGRAM</a>
                <a href={info?.linkedin || "#"} className="text-xs font-bold font-mono opacity-40 hover:opacity-100 hover:text-brand-copper transition-all">LINKEDIN</a>
                <a href="#" className="text-xs font-bold font-mono opacity-40 hover:opacity-100 hover:text-brand-copper transition-all">TWITTER (X)</a>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="bg-white/40 backdrop-blur-md p-10 md:p-14 rounded-[2.5rem] border border-black/5 shadow-2xl shadow-brand-teal/5">
            <h3 className="text-2xl font-bold mb-8 tracking-tighter">Inquiry Form.</h3>
            <ContactForm />
          </div>

        </div>
      </div>
    </main>
  );
}