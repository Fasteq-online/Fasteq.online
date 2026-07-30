import React from "react";
import { client } from "@/sanity/lib/client";
import { statsQuery } from "@/sanity/lib/queries";

export default async function Stats() {
  const stats = await client.fetch(statsQuery, {}, { next: { revalidate: 10 } });

  return (
    <section className="py-12 bg-brand-teal text-white border-y border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats?.map((stat: any, i: number) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-3xl font-bold font-heading text-brand-copper tracking-tighter">
                {stat.prefix}{stat.value}{stat.suffix}
              </span>
              <span className="text-[9px] font-mono uppercase tracking-[0.3em] opacity-40 font-bold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}