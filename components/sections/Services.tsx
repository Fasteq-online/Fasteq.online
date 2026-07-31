"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { client } from "@/sanity/lib/client";
import { servicesQuery } from "@/sanity/lib/queries";
import { SERVICES } from "@/constants";

export default function Services() {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    client
      .fetch(servicesQuery)
      .then((data) => {
        setServices(data && data.length > 0 ? data : SERVICES);
      })
      .catch(() => setServices(SERVICES));
  }, []);

  const displayServices = services.length > 0 ? services : SERVICES;

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "#07191A" }}
    >
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#C87D4F]/6 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0D2E2F]/60 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#C87D4F] uppercase block mb-4">
              CAPABILITIES & EXPERTISE
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[#F8F6F3] tracking-tight leading-none">
              Engineered for <br />
              <span className="text-[#C87D4F]">Supreme Performance.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[#F8F6F3]/40 text-sm md:text-base max-w-md leading-relaxed"
          >
            We merge software architecture, high-frequency user interfaces, and artificial intelligence into cohesive digital products.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {displayServices.map((s: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="group relative p-8 md:p-9 rounded-3xl border border-white/[0.07] hover:border-[#C87D4F]/35 transition-all duration-500 flex flex-col justify-between cursor-default overflow-hidden"
              style={{ background: "rgba(13,46,47,0.3)", backdropFilter: "blur(12px)" }}
            >
              {/* Hover inner glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(circle at 30% 30%, rgba(200,125,79,0.08) 0%, transparent 70%)" }}
              />

              {/* Spec Index */}
              <div className="absolute top-6 right-7 text-[10px] font-mono font-bold tracking-widest text-[#F8F6F3]/15 group-hover:text-[#C87D4F]/50 transition-colors">
                SPEC.{(s.order ?? (i + 1)) < 10 ? `0${s.order ?? (i + 1)}` : s.order ?? (i + 1)}
              </div>

              <div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center mb-8 text-[#C87D4F] group-hover:bg-[#C87D4F] group-hover:text-white group-hover:border-[#C87D4F] transition-all duration-500 shadow-inner"
                  style={{ background: "rgba(200,125,79,0.08)" }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d={s.icon || "M12 2L2 7l10 5 10-5-10-5z"} />
                  </svg>
                </div>

                <h3 className="text-xl font-heading font-extrabold text-[#F8F6F3] mb-4 group-hover:text-[#C87D4F] transition-colors duration-300">
                  {s.title}
                </h3>

                <p className="text-[#F8F6F3]/40 text-sm leading-relaxed mb-6">
                  {s.description}
                </p>
              </div>

              <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold">
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#F8F6F3]/20 group-hover:text-[#C87D4F]/70 transition-colors">Explore</span>
                <span className="text-[#F8F6F3]/20 group-hover:text-[#C87D4F] group-hover:translate-x-1 transition-all duration-300">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="flex justify-start">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-widest text-[#F8F6F3]/30 hover:text-[#C87D4F] transition-colors"
          >
            <span>Explore Complete Capabilities Architecture</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}