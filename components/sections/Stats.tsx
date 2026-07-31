import React from "react";
import { client } from "@/sanity/lib/client";
import { statsQuery } from "@/sanity/lib/queries";

export default async function Stats() {
  let stats: any[] = [];
  try {
    stats = await client.fetch(statsQuery, {}, { next: { revalidate: 10 } });
  } catch (error) {
    console.error("Sanity stats error:", error);
  }

  const displayStats = stats && stats.length > 0 ? stats : [
    { label: "Uptime SLA", value: "99.9", suffix: "%", prefix: "" },
    { label: "Projects Delivered", value: "50", suffix: "+", prefix: "" },
    { label: "Global Clients", value: "25", suffix: "+", prefix: "" },
    { label: "Code Accuracy", value: "100", suffix: "%", prefix: "" },
  ];

  return (
    <section
      className="py-20 relative overflow-hidden border-y border-white/[0.06]"
      style={{ background: "linear-gradient(90deg, #051314 0%, #0D2E2F 50%, #051314 100%)" }}
    >
      {/* Top line accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C87D4F]/25 to-transparent" />
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C87D4F]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {displayStats.map((stat: any, i: number) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl border border-white/[0.06] hover:border-[#C87D4F]/40 transition-all duration-500 flex flex-col items-center justify-center text-center"
              style={{ background: "rgba(255,255,255,0.025)" }}
            >
              {/* Inner hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-[#C87D4F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="text-4xl sm:text-5xl font-heading font-extrabold text-[#C87D4F] mb-2 tracking-tight group-hover:scale-110 transition-transform duration-400 relative z-10">
                {stat.prefix}{stat.value}{stat.suffix}
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-[#F8F6F3]/35 font-bold group-hover:text-[#F8F6F3]/70 transition-colors relative z-10">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}