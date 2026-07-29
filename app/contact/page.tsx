import React from "react";
import ContactForm from "@/components/ui/ContactForm";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-brand-light min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Content */}
          <div>
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-brand-copper uppercase block mb-6">Contact Us</span>
            <h1 className="text-5xl md:text-7xl font-sans font-extrabold text-brand-teal tracking-tight mb-8 leading-tight">
              Let's start a <br /> <span className="text-brand-copper">conversation.</span>
            </h1>
            <p className="text-brand-teal/60 text-lg mb-12 max-w-md">
              Whether you have a specific project in mind or just want to explore the possibilities of AI and design, we're here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-black/5 text-brand-copper">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-brand-teal">Email us</h4>
                  <p className="text-sm text-brand-teal/50 font-mono">hello@fasteq.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-black/5 text-brand-copper">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-brand-teal">Visit Studio</h4>
                  <p className="text-sm text-brand-teal/50 font-mono text-balance">123 Innovation Drive, Tech District, San Francisco</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-brand-teal/5 border border-black/5">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}