import type { Metadata } from "next";
import React from "react";
import ContactForm from "@/components/ui/ContactForm";
import { client } from "@/sanity/lib/client";
import { contactQuery } from "@/sanity/lib/queries";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://fasteq.online';

export const metadata: Metadata = {
  title: "Contact FASTEQ — Initiate Dialogue",
  description:
    "Start a conversation with FASTEQ Studio. We consult on enterprise product design, Next.js core systems, and custom AI agents. Reach out to schedule a technical consultation.",
  keywords: [
    "contact FASTEQ",
    "hire software studio",
    "web development consultation",
    "AI engineering inquiry",
    "enterprise product design contact",
    "Next.js consultation",
    "custom AI agent development",
  ],
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Contact FASTEQ — Initiate Dialogue",
    description:
      "Start a conversation with FASTEQ. We consult on enterprise product design, Next.js systems, and custom AI agents.",
    url: `${BASE_URL}/contact`,
    type: "website",
  },
  twitter: {
    title: "Contact FASTEQ — Initiate Dialogue",
    description:
      "Start a conversation with FASTEQ. We consult on enterprise product design, Next.js systems, and custom AI agents.",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${BASE_URL}/contact#webpage`,
  url: `${BASE_URL}/contact`,
  name: "Contact FASTEQ Studio",
  description:
    "Reach out to FASTEQ for enterprise software, AI engineering, and luxury UI/UX design consultations.",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${BASE_URL}/contact` },
    ],
  },
};

export default async function ContactPage() {
  let info: any = null;
  try {
    info = await client.fetch(contactQuery, {}, { next: { revalidate: 0 } });
  } catch (error) {
    console.error("Sanity contact info error:", error);
  }

  return (
    <main
      aria-label="Contact FASTEQ Studio"
      className="pt-40 md:pt-48 pb-28 min-h-screen bg-[#07191A] text-white relative overflow-hidden"
    >
      {/* JSON-LD: ContactPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {/* Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#C87D4F]/6 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0D2E2F]/60 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Left Side: Contact Information & Headquarters */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#C87D4F]/25 bg-white/[0.04] backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-[#C87D4F] animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#C87D4F]">
                DIRECT ADVISORY CHANNEL
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-heading font-extrabold text-[#F8F6F3] tracking-tight mb-8 leading-[0.9]">
              Initiate <br />
              <span className="text-[#C87D4F] italic font-extrabold">Dialogue.</span>
            </h1>
            
            <p className="text-[#F8F6F3]/50 text-lg mb-12 max-w-md font-normal leading-relaxed">
              We consult on enterprise product design, Next.js core systems, and custom AI agents. Select your parameters below.
            </p>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] shadow-sm">
                <h4 className="text-[10px] font-mono font-bold text-[#C87D4F] uppercase tracking-widest mb-2">
                  DIRECT EMAIL INBOX
                </h4>
                <a 
                  href={`mailto:${info?.email || "hello@fasteq.com"}`}
                  className="text-xl md:text-2xl font-heading font-extrabold text-[#F8F6F3] hover:text-[#C87D4F] transition-colors block"
                >
                  {info?.email || "hello@fasteq.com"}
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] shadow-sm">
                <h4 className="text-[10px] font-mono font-bold text-[#C87D4F] uppercase tracking-widest mb-2">
                  STUDIO HEADQUARTERS
                </h4>
                <p className="text-lg font-heading font-bold text-[#F8F6F3] leading-snug">
                  {info?.location || "Innovation District, Tech Plaza, ST-40"}
                </p>
              </div>
              
              {/* Social Channels */}
              <div className="flex flex-wrap gap-6 pt-4">
                <a 
                  href={info?.instagram || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs font-mono font-bold text-[#F8F6F3]/40 hover:text-[#C87D4F] transition-colors uppercase tracking-wider"
                >
                  INSTAGRAM
                </a>
                <a 
                  href={info?.linkedin || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs font-mono font-bold text-[#F8F6F3]/40 hover:text-[#C87D4F] transition-colors uppercase tracking-wider"
                >
                  LINKEDIN
                </a>
                <a 
                  href="#" 
                  className="text-xs font-mono font-bold text-[#F8F6F3]/40 hover:text-[#C87D4F] transition-colors uppercase tracking-wider"
                >
                  TWITTER (X)
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Dark Glass Form Card */}
          <div className="lg:col-span-7 bg-[#051314]/80 backdrop-blur-2xl p-8 md:p-14 rounded-3xl border border-white/[0.1] shadow-2xl">
            <div className="mb-8 border-b border-white/[0.08] pb-6">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#C87D4F] block mb-1">
                PROJECT SCOPE INTAKE
              </span>
              <h3 className="text-3xl font-heading font-extrabold text-[#F8F6F3]">Technical Specification Form</h3>
            </div>
            <ContactForm />
          </div>

        </div>
      </div>
    </main>
  );
}