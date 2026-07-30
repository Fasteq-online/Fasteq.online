import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

const projectsQuery = `*[_type == "project"] | order(year desc) [0...4] {
  title,
  category,
  year,
  "imageUrl": mainImage.asset->url
}`;

export default async function Portfolio() {
  const projects = await client.fetch(projectsQuery, {}, { next: { revalidate: 10 } });

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter">Archive.</h2>
            <p className="text-brand-teal/40 text-xs mt-1">Selected engineered products.</p>
          </div>
          <Link href="/portfolio" className="text-[11px] font-bold uppercase tracking-widest text-brand-copper border-b border-brand-copper pb-1 hover:text-brand-teal hover:border-brand-teal transition-all">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects?.map((p: any, i: number) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl bg-brand-light border border-black/5 overflow-hidden relative mb-4">
                {p.imageUrl && (
                  <Image 
                    src={p.imageUrl} 
                    alt={p.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-brand-teal/5 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              <div className="flex justify-between items-center px-1">
                <h4 className="text-sm font-bold text-brand-teal group-hover:text-brand-copper transition-colors">{p.title}</h4>
                <span className="text-[10px] font-mono opacity-30">{p.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}