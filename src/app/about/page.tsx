import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { StatusChip } from "@/components/ui/StatusChip";

export const metadata: Metadata = {
  title: "About & Engineering Thesis — ATLAS Technologies",
  description:
    "Learn about ATLAS Technologies: an independent research lab and systems engineering firm investigating alternative computing architectures and deterministic software.",
};

export default function AboutPage() {
  return (
    <article className="min-h-screen bg-porcelain text-charcoal">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 md:py-24">
        <header className="max-w-4xl space-y-6 pb-12 border-b border-stone">
          <div className="flex flex-wrap items-center gap-3">
            <StatusChip label="INDEPENDENT RESEARCH &amp; SYSTEMS" variant="neutral" dot />
            <span className="font-mono text-xs text-warm-grey">FOUNDING THESIS</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] font-normal">
            Reopening Forgotten Paths in Computing Architecture
          </h1>
          <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-charcoal/80 max-w-3xl">
            ATLAS Technologies is an independent research lab and systems engineering firm. We investigate fundamental alternatives to conventional binary computing, build deterministic operating systems, and explore embodied machine intelligence.
          </p>
        </header>

        <section className="py-12 border-b border-stone grid md:grid-cols-3 gap-8">
          <div className="p-6 border border-stone bg-white/30 rounded-sm space-y-3">
            <span className="font-mono text-xs text-copper">PRINCIPLE 01</span>
            <h3 className="font-display text-2xl font-normal">First-Principles Inquiry</h3>
            <p className="font-sans text-sm text-charcoal/80">Evaluating computing architectures on mathematical and physical merit rather than inherited convention.</p>
          </div>
          <div className="p-6 border border-stone bg-white/30 rounded-sm space-y-3">
            <span className="font-mono text-xs text-copper">PRINCIPLE 02</span>
            <h3 className="font-display text-2xl font-normal">Radical Transparency</h3>
            <p className="font-sans text-sm text-charcoal/80">Strict separation of simulation from fabricated silicon, architectural drafts from running kernels, and CAD from flight hardware.</p>
          </div>
          <div className="p-6 border border-stone bg-white/30 rounded-sm space-y-3">
            <span className="font-mono text-xs text-copper">PRINCIPLE 03</span>
            <h3 className="font-display text-2xl font-normal">Sustainable Independence</h3>
            <p className="font-sans text-sm text-charcoal/80">Financing long-term foundational inquiries through operational infrastructure services rather than hype cycles.</p>
          </div>
        </section>

        <div className="pt-7 border-t border-stone flex flex-wrap gap-4">
          <Link href="/research/ternary" className="font-sans text-sm text-copper hover:underline">Read Ternary Monograph →</Link>
          <Link href="/contact" className="font-sans text-sm text-copper hover:underline">Contact the Engineering Team →</Link>
        </div>
      </div>
    </article>
  );
}
