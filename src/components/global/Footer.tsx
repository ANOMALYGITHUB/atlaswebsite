import React from "react";
import Link from "next/link";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="w-full border-t border-stone bg-lab-dark text-stone pt-16 pb-12 font-sans">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone/20">
          <div className="md:col-span-5 space-y-4">
            <BrandMark showWordmark={true} className="w-8 h-8" />
            <p className="font-sans text-sm text-stone/80 max-w-sm leading-relaxed">
              ATLAS Technologies is an independent research lab and systems engineering firm investigating alternative computing architectures, deterministic operating systems, and autonomous robotics.
            </p>
            <div className="font-mono text-xs text-copper-pale">
              RESEARCH // ARCHITECTURE // EMBODIMENT
            </div>
          </div>

          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-xs text-copper-pale uppercase tracking-wider">Research</div>
            <ul className="space-y-2 text-sm text-stone/80">
              <li><Link href="/research/ternary" className="hover:text-porcelain transition-colors">Ternary Lab</Link></li>
              <li><Link href="/systems/os" className="hover:text-porcelain transition-colors">ATLAS OS</Link></li>
              <li><Link href="/robotics" className="hover:text-porcelain transition-colors">Drone Kit</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-xs text-copper-pale uppercase tracking-wider">Services</div>
            <ul className="space-y-2 text-sm text-stone/80">
              <li><Link href="/infrastructure" className="hover:text-porcelain transition-colors">Dedicated Hosting</Link></li>
              <li><Link href="/infrastructure" className="hover:text-porcelain transition-colors">Kernel Audits</Link></li>
              <li><Link href="/infrastructure" className="hover:text-porcelain transition-colors">Edge Topologies</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs text-copper-pale uppercase tracking-wider">Inquiries</div>
            <ul className="space-y-2 text-xs font-mono text-stone/70">
              <li>contact@atlas-technologies.org</li>
              <li>research@atlas-technologies.org</li>
              <li className="pt-2 text-[11px] text-warm-grey">PGP: E2A4 991B 3804 C771 94F0 2218 57AA 0192 48B1 FC30</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-warm-grey">
          <div>© {new Date().getFullYear()} ATLAS Technologies. Open research under Apache 2.0.</div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-porcelain transition-colors">Thesis</Link>
            <Link href="/contact" className="hover:text-porcelain transition-colors">Security Disclosures</Link>
            <Link href="/sitemap.xml" className="hover:text-porcelain transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
