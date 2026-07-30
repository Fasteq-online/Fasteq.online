import React from "react";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Clients from "@/components/sections/Clients";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Pricing from "@/components/sections/Pricing";
import Team from "@/components/sections/Team";
import CTA from "@/components/sections/CTA";

// Ye "export default function Home" hona lazmi hai
export default function Home() {
  return (
    <>
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