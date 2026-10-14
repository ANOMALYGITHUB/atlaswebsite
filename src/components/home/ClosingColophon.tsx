import React from "react";
import Link from "next/link";

export function ClosingColophon() {
  return (
    <section className="py-20 md:py-28 bg-paper-tint border-b border-stone text-charcoal">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl space-y-6">
          <span className="font-mono text-xs text-copper uppercase tracking-widest">
            06 / COLOPHON &amp; DIRECTION
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal leading-tight">
            Building Systems for Decades, Not News Cycles
          </h2>
          <p className="font-sans text-base md:text-lg text-charcoal-muted leading-relaxed font-light">
            ATLAS Technologies is dedicated to the long horizon of computing. Whether you are an academic researcher exploring balanced radix mathematics, a systems architect pursuing deterministic kernels, or an enterprise requiring bespoke infrastructure—we invite rigorous dialogue.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-sm bg-charcoal text-porcelain font-sans text-sm font-medium hover:bg-charcoal/90 transition-colors"
            >
              Contact the Engineering Team →
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 rounded-sm border border-stone text-charcoal font-sans text-sm font-medium hover:border-charcoal transition-colors"
            >
              Read Our Thesis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClosingColophon;
