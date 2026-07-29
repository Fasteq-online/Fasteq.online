import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Clients from "@/components/sections/Clients";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Portfolio from "@/components/sections/Portfolio";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Clients />
      <Services />
      <Team />
      <Portfolio />
      <Pricing />
      <CTA />
    </>
  );
}