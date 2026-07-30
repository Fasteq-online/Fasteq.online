import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

const teamQuery = `*[_type == "team"] | order(isCEO desc) {
  name,
  role,
  "imageUrl": image.asset->url
}`;

export default async function AboutPage() {
  const team = await client.fetch(teamQuery, {}, { next: { revalidate: 10 } });

  return (
    <main className="pt-40 pb-24 bg-[#F8F6F3] min-h-screen font-sans">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="max-w-4xl mb-24">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#C87D4F] uppercase block mb-6">The Studio</span>
          <h1 className="text-6xl md:text-8xl font-extrabold text-[#0D2E2F] tracking-tighter mb-10 leading-none">
            Human Ingenuity. <br /> <span className="text-[#C87D4F]">Machine Precision.</span>
          </h1>
          <p className="text-2xl text-[#0D2E2F]/60 leading-relaxed font-light">
            FASTEQ is a technical design studio. We bridge the gap between complex engineering and luxury aesthetics to build the next generation of digital products.
          </p>
        </div>

        <div className="mb-20">
          <div className="flex justify-between items-end mb-12 border-b border-black/5 pb-6">
            <h2 className="text-3xl font-bold tracking-tighter text-[#0D2E2F]">The Collective.</h2>
            <p className="text-[10px] font-mono text-brand-copper uppercase font-bold tracking-widest">Expert Network</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {team?.map((member: any, i: number) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] rounded-xl bg-white border border-black/5 overflow-hidden mb-4 shadow-sm group-hover:shadow-lg transition-all relative">
                  {member.imageUrl ? (
                    <Image 
                      src={member.imageUrl} 
                      alt={member.name} 
                      fill 
                      sizes="(max-width: 768px) 50vw, 20vw"
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#0D2E2F]/5" />
                  )}
                </div>
                <h4 className="font-bold text-[#0D2E2F] text-sm">{member.name}</h4>
                <p className="text-[10px] font-mono text-[#C87D4F] uppercase tracking-widest mt-1 font-bold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 text-center">
          <Link href="/" className="text-[#C87D4F] font-mono text-[10px] uppercase tracking-widest font-bold border-b border-[#C87D4F] pb-2">
            ← Return to Headquarters
          </Link>
        </div>
      </div>
    </main>
  );
}