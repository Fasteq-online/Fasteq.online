import React from "react";
import Link from "next/link";
import { DETAILED_PROJECTS } from "@/constants";

export default function PortfolioPage() {
  return (
    <main className="pt-40 pb-24 bg-[#F8F6F3] min-h-screen">
      <div className="container mx-auto px-4 text-center">
        
        <div className="max-w-2xl mx-auto mb-20">
          <h1 className="text-7xl font-extrabold text-[#0D2E2F] mb-6 tracking-tighter">Archive.</h1>
          <p className="text-[#0D2E2F]/60 text-xl">Detailed showcase of our engineered systems.</p>
        </div>

        <div className="grid gap-10 text-left">
          {DETAILED_PROJECTS.map((p, i) => (
            <div key={i} className="bg-white p-12 rounded-[3rem] border border-black/5 shadow-sm flex flex-col lg:flex-row gap-12 items-center">
              <div className={`w-full lg:w-1/3 aspect-square rounded-[2rem] ${p.color} flex items-center justify-center text-white text-4xl font-bold`}>
                {i + 1}
              </div>
              <div className="w-full lg:w-2/3">
                <span className="text-[#C87D4F] font-mono text-xs font-bold uppercase tracking-widest">{p.category}</span>
                <h3 className="text-4xl font-bold text-[#0D2E2F] mt-4 mb-6">{p.title}</h3>
                <p className="text-lg text-[#0D2E2F]/70 mb-8 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="bg-[#F8F6F3] px-4 py-2 rounded-full text-[10px] font-bold text-brand-teal/60 border border-black/5 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <Link href="/" className="text-brand-teal font-bold underline">Back to Home</Link>
        </div>

      </div>
    </main>
  );
}