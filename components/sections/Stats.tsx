"use client";
import React, { useEffect, useState, useRef } from "react";
import { STATS } from "@/constants";

const Stats = () => {
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        STATS.forEach((stat, index) => {
          let start = 0;
          const end = stat.value;
          const duration = 2000;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCounts(prev => {
                const n = [...prev];
                n[index] = end;
                return n;
              });
              clearInterval(timer);
            } else {
              setCounts(prev => {
                const n = [...prev];
                n[index] = start;
                return n;
              });
            }
          }, 16);
        });
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-brand-teal text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-extrabold font-sans text-brand-copper">
                {stat.prefix}{counts[i].toFixed(stat.value % 1 === 0 ? 0 : 1)}{stat.suffix}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;