import React from "react";
import { client } from "@/sanity/lib/client";
import { clientsQuery } from "@/sanity/lib/queries";
import { CLIENT_LOGOS } from "@/constants";

export default async function Clients() {
  let clients: any[] = [];
  try {
    clients = await client.fetch(clientsQuery, {}, { next: { revalidate: 0 } });
  } catch (error) {
    console.error("Sanity clients query error:", error);
  }

  const clientList = clients && clients.length > 0
    ? clients.map((c: any) => c.name)
    : CLIENT_LOGOS;

  return (
    <section
      className="py-16 relative overflow-hidden border-b border-white/[0.06]"
      style={{ background: "#051314" }}
    >
      {/* Edge fade masks */}
      <div className="absolute top-0 left-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #051314, transparent)" }}
      />
      <div className="absolute top-0 right-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #051314, transparent)" }}
      />

      <div className="container mx-auto px-6 mb-6 text-center">
        <span className="text-[9px] font-mono uppercase tracking-[0.35em] text-[#F8F6F3]/20 font-bold">
          Trusted By Industry Pioneers & Global Enterprises
        </span>
      </div>

      <div className="flex whitespace-nowrap animate-marquee py-3 items-center">
        {[...Array(3)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center gap-16 md:gap-24 px-8 shrink-0">
            {clientList.map((name: string, i: number) => (
              <span
                key={`${loopIdx}-${i}`}
                className="text-2xl md:text-3xl font-heading font-extrabold text-[#F8F6F3]/10 hover:text-[#C87D4F] transition-colors duration-400 cursor-default uppercase tracking-tighter"
              >
                {name}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}