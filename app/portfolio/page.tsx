import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

const detailedProjectsQuery = `*[_type == "project"] | order(year desc) {
  title,
  category,
  description,
  year,
  tags,
  "imageUrl": mainImage.asset->url
}`;

export default async function PortfolioPage() {
  const projects = await client.fetch(detailedProjectsQuery, {}, { next: { revalidate: 10 } });

  return (
    <main className="pt-40 pb-24 bg-[#F8F6F3] min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="max-w-2xl mb-20">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#C87D4F] uppercase block mb-6">Archive</span>
          <h1 className="text-6xl md:text-8xl font-extrabold text-[#0D2E2F] mb-6 tracking-tighter">Selected Works.</h1>
          <p className="text-[#0D2E2F]/60 text-xl leading-relaxed font-medium">A showcase of systems engineered for performance and brand growth.</p>
        </div>

        <div className="grid gap-12">
          {projects?.map((p: any, i: number) => (
            <div key={i} className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-black/5 shadow-sm flex flex-col lg:flex-row gap-12 items-center hover:shadow-2xl transition-all duration-700">
              <div className="w-full lg:w-2/5 aspect-square relative rounded-[2rem] overflow-hidden bg-brand-light border border-black/5">
                {p.imageUrl && (
                  <Image 
                    src={p.imageUrl} 
                    alt={p.title} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover" 
                  />
                )}
              </div>

              <div className="w-full lg:w-3/5 text-left">
                <span className="text-[#C87D4F] font-mono text-[10px] font-bold uppercase tracking-widest">{p.category}</span>
                <h3 className="text-4xl font-bold text-[#0D2E2F] mt-4 mb-6">{p.title}</h3>
                <p className="text-lg text-[#0D2E2F]/70 mb-8 leading-relaxed italic">"{p.description}"</p>
                
                <div className="flex flex-wrap gap-2">
                  {p.tags?.map((tag: string) => (
                    <span key={tag} className="bg-[#F8F6F3] px-4 py-2 rounded-full text-[10px] font-bold text-brand-teal/60 border border-black/5 uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link href="/" className="text-brand-teal font-bold underline hover:text-brand-copper transition-colors">Back to Headquarters</Link>
        </div>
      </div>
    </main>
  );
}