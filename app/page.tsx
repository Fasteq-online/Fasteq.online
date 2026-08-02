import type { Metadata } from "next";
import React from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://fasteq.online';

export const metadata: Metadata = {
  title: "FASTEQ — Global Engineering & AI Architecture Studio",
  description:
    "Award-winning software & AI architecture studio engineering high-fidelity web ecosystems, custom AI agents, and luxury digital products for global enterprises.",
  keywords: [
    "software engineering studio",
    "AI architecture studio",
    "Next.js enterprise development",
    "custom AI agents",
    "web development agency",
    "luxury UI UX design",
    "cloud infrastructure",
    "FASTEQ",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "FASTEQ — Global Engineering & AI Architecture Studio",
    description:
      "Award-winning studio engineering high-fidelity web ecosystems, AI infrastructure, and luxury digital products.",
    url: BASE_URL,
    type: "website",
  },
  twitter: {
    title: "FASTEQ — Global Engineering & AI Architecture Studio",
    description:
      "Award-winning studio engineering high-fidelity web ecosystems, AI infrastructure, and luxury digital products.",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: "FASTEQ — Global Engineering & AI Architecture Studio",
  description:
    "Award-winning software & AI architecture studio engineering high-fidelity web ecosystems, custom AI agents, and luxury digital products.",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: { "@id": `${BASE_URL}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
    ],
  },
};
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Clients from "@/components/sections/Clients";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Pricing from "@/components/sections/Pricing";
import Team from "@/components/sections/Team";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      {/* JSON-LD: WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {/* 1. Main Entrance */}
      <Hero />
      
      {/* 2. Social Proof & Trust */}
      <Stats />
      <Clients />
      
      {/* 3. Capabilities Teaser */}
      <Services />
      
      {/* 4. The Work (Archive) */}
      <Portfolio />
      
      {/* 5. The FASTEQ Advantage (Why FASTEQ?) */}
      <Pricing />
      
      {/* 6. Leadership (CEO Focus) */}
      <Team />
      
      {/* 7. Final Conversion */}
      <CTA />
    </>
  );
}