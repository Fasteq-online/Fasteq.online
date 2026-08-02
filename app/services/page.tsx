import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { detailedServicesQuery } from "@/sanity/lib/queries";
import { DETAILED_SERVICES } from "@/constants";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://fasteq.online';

export const metadata: Metadata = {
  title: "Services — Full Stack Engineering & AI Architectures",
  description:
    "Explore FASTEQ's full-stack service offerings: Next.js enterprise development, custom AI agents, luxury UI/UX strategy, and cloud infrastructure. End-to-end digital mastery.",
  keywords: [
    "Next.js enterprise development",
    "custom AI agents",
    "luxury UI UX design services",
    "full stack web development",
    "cloud infrastructure services",
    "software engineering services",
    "AI automation",
    "web app development",
  ],
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
  openGraph: {
    title: "Services — Full Stack Engineering & AI Architectures | FASTEQ",
    description:
      "From high-frequency cloud systems to luxury consumer interfaces and bespoke AI engines — FASTEQ delivers end-to-end digital mastery.",
    url: `${BASE_URL}/services`,
    type: "website",
  },
  twitter: {
    title: "Services — Full Stack Engineering & AI Architectures | FASTEQ",
    description:
      "From high-frequency cloud systems to luxury consumer interfaces and bespoke AI engines.",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${BASE_URL}/services#servicelist`,
  name: "FASTEQ Engineering Services",
  description: "Full-stack engineering, AI, and design services offered by FASTEQ Studio.",
  url: `${BASE_URL}/services`,
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Next.js Enterprise Systems",
        description: "Scalable, high-performance web applications using the latest Next.js features including SSR, API infrastructure, and microservices architecture.",
        provider: { "@id": `${BASE_URL}/#organization` },
        serviceType: "Web Development",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Custom AI & Automation",
        description: "Integrating LLMs and custom AI agents into business workflows, including GPT agents, workflow automation, and chatbot ecosystems.",
        provider: { "@id": `${BASE_URL}/#organization` },
        serviceType: "AI Engineering",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Luxury UI/UX Strategy",
        description: "Aesthetic interfaces designed for premium branding and user conversion, including brand identity, interactive prototypes, and high-fidelity UI.",
        provider: { "@id": `${BASE_URL}/#organization` },
        serviceType: "UI/UX Design",
        areaServed: "Worldwide",
      },
    },
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
    ],
  },
};

export default async function ServicesPage() {
  let services: any[] = [];
  try {
    services = await client.fetch(detailedServicesQuery, {}, { next: { revalidate: 0 } });
  } catch (error) {
    console.error("Sanity detailed services error:", error);
  }

  const displayServices = services && services.length > 0 ? services : DETAILED_SERVICES;

  return (
    <main
      aria-label="FASTEQ Engineering Services"
      className="pt-40 md:pt-48 pb-28 bg-[#07191A] text-white min-h-screen relative overflow-hidden"
    >
      {/* JSON-LD: Service ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#C87D4F]/6 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0D2E2F]/60 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mb-24 text-left">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#C87D4F]/25 bg-white/[0.04] backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C87D4F] animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#C87D4F] uppercase">
              CAPABILITIES MANIFEST
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-extrabold text-[#F8F6F3] tracking-tight mb-8 leading-[0.9]">
            Full Stack <br />
            <span className="text-[#C87D4F] italic font-extrabold">Architectures.</span>
          </h1>
          <p className="text-[#F8F6F3]/50 text-lg md:text-xl max-w-2xl leading-relaxed">
            From high-frequency cloud systems to luxury consumer interfaces and bespoke AI engines, we deliver end-to-end digital mastery.
          </p>
        </div>

        {/* Services List */}
        <div className="grid gap-10">
          {displayServices.map((s: any, i: number) => (
            <div 
              key={i} 
              className="rounded-3xl border border-white/[0.08] hover:border-[#C87D4F]/40 overflow-hidden shadow-2xl flex flex-col lg:flex-row transition-all duration-500 group"
              style={{ background: "rgba(13,46,47,0.35)", backdropFilter: "blur(16px)" }}
            >
              {/* Left Color Block */}
              <div className="lg:w-1/3 p-10 md:p-12 bg-gradient-to-br from-[#0D2E2F] to-[#051314] text-white flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/[0.08]">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#C87D4F]/10 rounded-full blur-2xl pointer-events-none" />
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] font-bold text-[#C87D4F]">
                  {s.category || `DOMAINS / ${(s.order ?? (i + 1)) < 10 ? `0${s.order ?? (i + 1)}` : s.order ?? (i + 1)}`}
                </span>

                {/* Service Icon */}
                <div className="my-8 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl border border-[#C87D4F]/20 bg-[#C87D4F]/[0.08] flex items-center justify-center shadow-lg shadow-[#C87D4F]/5 group-hover:bg-[#C87D4F]/[0.15] group-hover:border-[#C87D4F]/40 transition-all duration-500">
                    <svg className="w-10 h-10 text-[#C87D4F] group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={
                        s.icon ||
                        (s.category?.toLowerCase().includes('development')
                          ? 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                          : s.category?.toLowerCase().includes('intelligence') || s.category?.toLowerCase().includes('ai')
                          ? 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                          : s.category?.toLowerCase().includes('design')
                          ? 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
                          : s.category?.toLowerCase().includes('marketing')
                          ? 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
                          : s.category?.toLowerCase().includes('mobile')
                          ? 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                          : 'M13 10V3L4 14h7v7l9-11h-7z')
                      } />
                    </svg>
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-heading font-extrabold leading-tight text-[#F8F6F3] group-hover:text-[#C87D4F] transition-colors">
                  {s.title}
                </h3>
              </div>

              {/* Right Content Block */}
              <div className="lg:w-2/3 p-10 md:p-14 text-left flex flex-col justify-between">
                <p className="text-lg md:text-xl text-[#F8F6F3]/60 mb-10 leading-relaxed font-normal">
                  {s.description}
                </p>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {s.features?.map((f: string, idx: number) => (
                    <div 
                      key={idx} 
                      className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.03] text-xs font-bold text-[#F8F6F3]/80 flex items-center gap-3 group-hover:border-[#C87D4F]/20 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#C87D4F] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-20 p-12 rounded-3xl border border-[#C87D4F]/25 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #051314 0%, #0D2E2F 100%)" }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C87D4F]/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 text-left">
            <h3 className="text-2xl md:text-3xl font-heading font-extrabold mb-2 text-[#F8F6F3]">Need a custom engineering scope?</h3>
            <p className="text-[#F8F6F3]/40 text-sm">We construct bespoke technical solutions tailored to your infrastructure requirements.</p>
          </div>
          <Link 
            href="/contact" 
            className="relative z-10 shrink-0 bg-[#C87D4F] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#E08E5A] transition-all shadow-xl shadow-[#C87D4F]/20 hover:scale-105 active:scale-95"
          >
            Schedule Technical Consultation
          </Link>
        </div>

      </div>
    </main>
  );
}