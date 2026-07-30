import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { ceoQuery } from "@/sanity/lib/queries";

export default async function Team() {
  const ceo = await client.fetch(ceoQuery, {}, { next: { revalidate: 10 } });
  if (!ceo) return null;

  return (
    <section id="team" className="py-24 bg-white border-y border-black/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/3">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-brand-light border border-black/5 group">
              {ceo.imageUrl && (
                <Image 
                  src={ceo.imageUrl} 
                  alt={ceo.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              )}
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-brand-copper uppercase block mb-6">Leadership</span>
            <h2 className="text-5xl font-bold text-brand-teal mb-6 tracking-tighter">{ceo.name}</h2>
            <p className="text-xl text-brand-teal/60 mb-10 leading-relaxed italic font-medium">"{ceo.bio}"</p>
            <div className="flex flex-wrap gap-6 items-center">
              <div>
                <h4 className="font-bold text-brand-teal">{ceo.role}</h4>
                <p className="text-[10px] text-brand-copper font-mono uppercase tracking-widest mt-1 font-bold">Studio Strategy Lead</p>
              </div>
              <Link href="/about" className="bg-brand-teal text-white px-8 py-3.5 rounded-xl font-bold text-[12px] uppercase tracking-widest hover:bg-brand-copper transition-all">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}