import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-brand-teal text-white border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                <Image src="/assets/images/logo.png" alt="Logo" width={24} height={24} className="opacity-80" />
              </div>
              <span className="font-sans font-extrabold text-2xl tracking-tighter text-white">FASTEQ</span>
            </div>
            <p className="text-white/50 text-sm max-w-sm leading-relaxed mb-8">
              Technology. Design. Innovation. An award-winning global engineering and design studio architecting the future of software.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              VERCEL EDGE NETWORK: OPERATIONAL
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-copper font-bold mb-6">Navigation</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/40 hover:text-brand-copper transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-copper font-bold mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li className="hover:text-white transition-colors cursor-pointer">Custom Web Apps</li>
              <li className="hover:text-white transition-colors cursor-pointer">AI Automations</li>
              <li className="hover:text-white transition-colors cursor-pointer">UI/UX Strategy</li>
              <li className="hover:text-white transition-colors cursor-pointer">Cloud Architecture</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-copper font-bold mb-6">Newsletter</h4>
            <div className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="email@address.com" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-brand-copper/50"
              />
              <button className="bg-white text-brand-teal text-[10px] font-bold uppercase tracking-widest py-3 rounded-lg hover:bg-brand-copper hover:text-white transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
            © 2026 FASTEQ Studio. Deployed on Vercel Edge.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-[10px] font-mono text-white/30 hover:text-white transition-colors uppercase tracking-widest">Privacy Policy</Link>
            <Link href="#" className="text-[10px] font-mono text-white/30 hover:text-white transition-colors uppercase tracking-widest">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;