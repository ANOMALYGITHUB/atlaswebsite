import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { StatusChip } from "@/components/ui/StatusChip";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Cryptographic Directory — ATLAS Technologies",
  description:
    "Direct engineering contact channels, public PGP verification keys, and secure inquiry transmission for ATLAS Technologies.",
};

export default function ContactPage() {
  return (
    <article className="min-h-screen bg-porcelain text-charcoal">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 md:py-24">
        <header className="max-w-4xl space-y-6 pb-12 border-b border-stone">
          <div className="flex flex-wrap items-center gap-3">
            <StatusChip label="DIRECT ENGINEERING CHANNELS" variant="operational" dot />
            <span className="font-mono text-xs text-warm-grey">CONTACT &amp; DIRECTORY</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] font-normal">
            Direct Communications &amp; Cryptographic Directory
          </h1>
          <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-charcoal/80 max-w-3xl">
            We value focused, substantive communication with researchers, systems engineers, and infrastructure partners. Transmit an inquiry below or reach our direct desks.
          </p>
        </header>

        <section className="py-12 border-b border-stone grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-stone bg-white/30 rounded-sm space-y-2">
            <span className="font-mono text-xs text-copper">GENERAL &amp; LAB</span>
            <div className="font-mono text-xs font-semibold text-charcoal">contact@atlas-technologies.org</div>
            <p className="font-sans text-xs text-charcoal/70">General inquiries and administrative matters.</p>
          </div>
          <div className="p-6 border border-stone bg-white/30 rounded-sm space-y-2">
            <span className="font-mono text-xs text-copper">RESEARCH &amp; SCIENCE</span>
            <div className="font-mono text-xs font-semibold text-charcoal">research@atlas-technologies.org</div>
            <p className="font-sans text-xs text-charcoal/70">Ternary computing, formal proofs, and academic collaboration.</p>
          </div>
          <div className="p-6 border border-stone bg-white/30 rounded-sm space-y-2">
            <span className="font-mono text-xs text-copper">INFRASTRUCTURE</span>
            <div className="font-mono text-xs font-semibold text-charcoal">infrastructure@atlas-technologies.org</div>
            <p className="font-sans text-xs text-charcoal/70">Dedicated bare-metal hosting and systems consulting scoping.</p>
          </div>
        </section>

        <section className="py-12 border-b border-stone grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 border border-stone bg-stone/20 rounded-sm space-y-3 font-mono text-xs">
              <span className="text-copper">CRYPTOGRAPHIC TRUST</span>
              <div className="font-medium text-charcoal">PGP Fingerprint:</div>
              <div className="p-2 bg-porcelain border border-stone rounded-sm text-[11px] break-all select-all">
                E2A4 991B 3804 C771 94F0 2218 57AA 0192 48B1 FC30
              </div>
              <p className="font-sans text-xs text-charcoal/75 leading-relaxed">
                For sensitive communications, encrypt your payload with our key prior to transmission.
              </p>
            </div>
          </div>
        </section>

        <div className="pt-7 border-t border-stone flex flex-wrap gap-4">
          <Link href="/about" className="font-sans text-sm text-copper hover:underline">About ATLAS →</Link>
          <Link href="/systems/os" className="font-sans text-sm text-copper hover:underline">ATLAS OS Architecture →</Link>
        </div>
      </div>
    </article>
  );
}
