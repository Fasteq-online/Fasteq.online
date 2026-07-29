import { PROJECTS } from "@/constants";
import Link from "next/link";

export default function Portfolio() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter">Archive.</h2>
            <p className="text-brand-teal/40 text-xs mt-1">Selected engineered products.</p>
          </div>
          <Link href="/portfolio" className="text-[11px] font-bold uppercase tracking-widest text-brand-copper border-b border-brand-copper pb-1">View All</Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {PROJECTS.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl bg-brand-light border border-black/5 overflow-hidden relative mb-4">
                <div className="absolute inset-0 bg-brand-teal/5 group-hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="flex justify-between items-center px-1">
                <h4 className="text-sm font-bold">{p.title}</h4>
                <span className="text-[10px] font-mono opacity-30">{p.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}