"use client";

import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer
      className="text-white border-t border-white/[0.06] pt-24 pb-12 relative overflow-hidden"
      style={{ background: "#051314" }}
    >
      {/* Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[400px] bg-[#C87D4F]/6 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0D2E2F]/60 blur-[160px] pointer-events-none" />

      {/* Top copper line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C87D4F]/30 to-transparent" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-2 text-left">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/assets/images/logo.png"
                  alt="FASTEQ Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl tracking-widest text-[#F8F6F3] uppercase block leading-none">FASTEQ</span>
                <span className="text-[9px] font-mono tracking-widest text-[#C87D4F] uppercase font-bold mt-0.5 block">Tech &amp; Design</span>
              </div>
            </Link>

            <p className="text-[#F8F6F3]/40 text-sm max-w-sm leading-relaxed mb-8">
              An award-winning global software & AI architecture studio engineering high-frequency web ecosystems with mathematical precision.
            </p>

            {/* Operational Status */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-[#F8F6F3]/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>VERCEL EDGE: 100% OPERATIONAL</span>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {["X", "LI", "GH"].map((s) => (
                <button
                  key={s}
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-mono font-bold text-[#F8F6F3]/40 hover:text-[#C87D4F] hover:border-[#C87D4F]/40 transition-all"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="text-left">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C87D4F] font-bold mb-6">NAVIGATION</h4>
            <ul className="space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs font-medium text-[#F8F6F3]/45 hover:text-[#F8F6F3] transition-colors flex items-center gap-2 group">
                    <span className="w-3 h-px bg-[#C87D4F]/0 group-hover:bg-[#C87D4F]/60 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Domains */}
          <div className="text-left">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C87D4F] font-bold mb-6">DOMAINS</h4>
            <ul className="space-y-3.5 text-xs text-[#F8F6F3]/45 font-medium">
              {["Enterprise Next.js", "Bespoke AI Agents", "Luxury UI/UX", "Cloud Infrastructure", "Performance Audits"].map((item) => (
                <li key={item} className="hover:text-[#F8F6F3] transition-colors cursor-pointer flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#C87D4F]/40 group-hover:bg-[#C87D4F] transition-colors" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-left">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C87D4F] font-bold mb-6">ADVISORY DISPATCH</h4>
            <p className="text-xs text-[#F8F6F3]/35 mb-5 leading-relaxed">
              Quarterly technical briefs on web performance, AI, and architecture strategy.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-mono">
                ✓ Subscribed to dispatch.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="executive@enterprise.com"
                  className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-xs text-[#F8F6F3] placeholder:text-[#F8F6F3]/25 focus:outline-none focus:border-[#C87D4F]/50 transition-all"
                />
                <button
                  type="submit"
                  className="bg-[#C87D4F] text-white text-[10px] font-mono font-bold uppercase tracking-widest py-3 rounded-xl hover:bg-[#E08E5A] transition-all shadow-lg shadow-[#C87D4F]/20 active:scale-[0.98]"
                >
                  Subscribe to Brief
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.07] flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-[#F8F6F3]/25">
          <p className="uppercase tracking-widest">
            © 2026 FASTEQ STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-[#C87D4F] transition-colors uppercase tracking-widest">PRIVACY</Link>
            <Link href="#" className="hover:text-[#C87D4F] transition-colors uppercase tracking-widest">TERMS</Link>
            <Link href="#" className="hover:text-[#C87D4F] transition-colors uppercase tracking-widest">SECURITY SLA</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;