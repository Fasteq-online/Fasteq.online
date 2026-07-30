import React from "react";
import { client } from "@/sanity/lib/client";
import { clientsQuery } from "@/sanity/lib/queries";

export default async function Clients() {
  const clients = await client.fetch(clientsQuery, {}, { next: { revalidate: 10 } });

  return (
    <section className="py-12 border-b border-black/5 overflow-hidden bg-white">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-20 px-10">
            {clients?.map((c: any) => (
              <span key={c.name} className="text-2xl font-heading font-black text-brand-teal/10 hover:text-brand-copper transition-colors cursor-default uppercase italic tracking-tighter">
                {c.name}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}