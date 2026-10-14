import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { StatusChip } from "@/components/ui/StatusChip";
import { TritPulseSimulator } from "@/components/research/TritPulseSimulator";

export const metadata: Metadata = {
  title: "Ternary Computing Research Monograph — ATLAS Technologies",
  description:
    "Scientific monograph exploring balanced ternary computing (radix-3), Brusentsov's Setun lineage, mathematical efficiency, and logic gate primitives.",
};

export default function TernaryResearchPage() {
  return (
    <article className="min-h-screen bg-porcelain text-charcoal">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 md:py-24">
        {/* Monograph Header */}
        <header className="max-w-4xl space-y-6 pb-12 border-b border-stone">
          <div className="flex flex-wrap items-center gap-3">
            <StatusChip label="RESEARCH MONOGRAPH // OPEN ACCESS" variant="copper" dot />
            <span className="font-mono text-xs text-warm-grey">MONO-2026-03-TRIT</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] font-normal">
            Balanced Ternary Logic: Mathematical Foundations &amp; Circuit Efficiency
          </h1>

          <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-charcoal/80 max-w-3xl">
            An investigation into symmetric radix-3 computing systems, eliminating sign-bit asymmetry, minimizing interconnect congestion, and realizing ternary logic in contemporary microarchitectures.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border border-stone bg-stone/25 rounded-sm font-mono text-xs">
            <div>
              <span className="block text-[10px] text-warm-grey">AUTHOR</span>
              <span>ATLAS Systems Lab</span>
            </div>
            <div>
              <span className="block text-[10px] text-warm-grey">STATUS</span>
              <span className="text-copper">Active Research</span>
            </div>
            <div>
              <span className="block text-[10px] text-warm-grey">LICENSE</span>
              <span>Apache 2.0</span>
            </div>
            <div>
              <span className="block text-[10px] text-warm-grey">TARGET</span>
              <span>Emulation &amp; FPGA</span>
            </div>
          </div>
        </header>

        {/* Reality Principle Banner */}
        <div className="my-10 p-5 rounded-sm border border-stone bg-stone/20 space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-charcoal font-medium uppercase tracking-wider">
            <span>[ REALITY PRINCIPLE // AUTHENTIC DISCLOSURE ]</span>
          </div>
          <p className="font-sans text-xs text-charcoal/85 leading-relaxed">
            ATLAS ternary research is currently validated through formal mathematical models, cycle-accurate software emulators, and FPGA bitstreams. We make no claims of fabricated custom production silicon. All research artifacts and emulator code are published under the Apache 2.0 license.
          </p>
        </div>

        {/* Section 01: The Radix-3 Advantage */}
        <section className="grid lg:grid-cols-12 gap-10 py-12 border-b border-stone">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs text-copper uppercase tracking-widest">
              01 / MATHEMATICAL FOUNDATIONS
            </span>
            <h2 className="font-display text-3xl font-normal text-charcoal">
              The Informational Density of Radix e
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 font-sans text-base text-charcoal/85 leading-relaxed">
            <p>
              In information theory, the most efficient radix for representing numbers is Euler&apos;s number (e ≈ 2.71828). Because fractional radixes are impractical in digital switching, the closest integer is 3. Radix-3 requires fewer total digits and switching traces than binary (radix-2) to express the same magnitude.
            </p>
            <p>
              Balanced ternary adopts the symmetric digit set &#123;-1, 0, +1&#125;. Unlike standard binary, where negative numbers require a dedicated sign bit and two&apos;s complement transformation, balanced ternary achieves innate symmetry: negating a value is accomplished simply by inverting every trit.
            </p>
          </div>
        </section>

        {/* Section 02: Interactive Simulator */}
        <section className="py-12 border-b border-stone space-y-6">
          <div>
            <span className="font-mono text-xs text-copper uppercase tracking-widest">
              02 / LOGIC EXPERIMENTATION
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-normal mt-2">
              Interactive Trit Pulse Simulator
            </h2>
          </div>
          <TritPulseSimulator />
        </section>

        {/* Section 03: Brusentsov's Lineage */}
        <section className="grid lg:grid-cols-12 gap-10 py-12 border-b border-stone">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs text-copper uppercase tracking-widest">
              03 / HISTORICAL PROVENANCE
            </span>
            <h2 className="font-display text-3xl font-normal text-charcoal">
              Brusentsov &amp; the Setun Heritage
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 font-sans text-base text-charcoal/85 leading-relaxed">
            <p>
              In 1958, Nikolai Brusentsov developed the Setun computer at Moscow State University—the only historical ternary computer deployed in real-world academic and industrial computing. Operating with ferrite-core magnetic amplifiers, the Setun demonstrated exceptional reliability and arithmetic economy before being shelved due to Soviet central economic planning.
            </p>
            <p>
              ATLAS honors Brusentsov&apos;s legacy by formalizing balanced ternary algebra for modern hardware description languages (Verilog/SpinalHDL) and developing memory-safe emulator runtimes in Rust.
            </p>
          </div>
        </section>

        {/* Citations & Open Work */}
        <section className="py-12 space-y-6">
          <span className="font-mono text-xs text-copper uppercase tracking-widest">
            04 / BIBLIOGRAPHY &amp; ARTIFACTS
          </span>
          <div className="border border-stone rounded-sm bg-white/30 p-6 font-mono text-xs space-y-4">
            <div>1. Knuth, D. E. (1997). The Art of Computer Programming, Vol. 2: Seminumerical Algorithms (Positional Number Systems).</div>
            <div>2. Brusentsov, N. P., et al. (1960). The Setun Ternary Digital Computer. Moscow State University Press.</div>
            <div>3. Hayes, B. (2001). Third Base. American Scientist, 89(6), 490-494.</div>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/systems/os" className="font-sans text-sm text-copper hover:underline">Explore ATLAS OS Architecture →</Link>
            <Link href="/contact" className="font-sans text-sm text-copper hover:underline">Academic Collaboration Inquiries →</Link>
          </div>
        </section>
      </div>
    </article>
  );
}
