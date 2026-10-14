import React from "react";
import Link from "next/link";
import { StatusChip } from "@/components/ui/StatusChip";

export function TernaryPreview() {
  return (
    <section className="py-20 md:py-28 bg-porcelain border-b border-stone">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <StatusChip label="RADIX-3 RESEARCH" variant="copper" dot />
              <span className="font-mono text-xs text-warm-grey">MATHEMATICAL PRIMITIVES</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal">
              Beyond Binary: Balanced Ternary Architecture
            </h2>

            <p className="font-sans text-base text-charcoal/80 leading-relaxed">
              Standard computing uses asymmetric two-state logic (0, 1), requiring separate sign bits, two’s complement arithmetic, and branch speculation. Balanced ternary uses three symmetric physical states (-1, 0, +1), eliminating sign bits and offering maximum radix informational efficiency.
            </p>

            <div className="p-4 border border-stone bg-stone/20 rounded-sm font-mono text-xs space-y-2">
              <div className="text-copper">REALITY PRINCIPLE // EMULATION STATUS</div>
              <p className="text-charcoal/75 leading-relaxed font-sans text-xs">
                Our ternary work is currently evaluated via software emulators and FPGA architectures. We make no unsubstantiated claims of fabricated production silicon.
              </p>
            </div>

            <div>
              <Link
                href="/research/ternary"
                className="inline-flex items-center px-5 py-2.5 rounded-sm bg-charcoal text-porcelain font-sans text-sm font-medium hover:bg-charcoal/90 transition-colors"
              >
                Launch Trit Pulse Simulator
                <span aria-hidden="true" className="ml-2 font-mono text-xs text-stone">→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 md:p-8 border border-stone bg-white/40 rounded-sm space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-stone font-mono text-xs text-warm-grey">
              <span>TRIT TRUTH TABLE // KLEENE CONSENSUS</span>
              <span className="text-copper">RADIX = 3</span>
            </div>

            <div className="grid grid-cols-3 gap-3 font-mono text-center text-xs">
              <div className="p-3 border border-stone rounded-sm bg-porcelain">
                <span className="block text-copper font-medium">-1</span>
                <span className="text-[10px] text-warm-grey">FALSE (-1.5V)</span>
              </div>
              <div className="p-3 border border-stone rounded-sm bg-porcelain">
                <span className="block text-charcoal font-medium">0</span>
                <span className="text-[10px] text-warm-grey">UNKNOWN (0.0V)</span>
              </div>
              <div className="p-3 border border-stone rounded-sm bg-porcelain">
                <span className="block text-copper font-medium">+1</span>
                <span className="text-[10px] text-warm-grey">TRUE (+1.5V)</span>
              </div>
            </div>

            <p className="font-sans text-xs text-charcoal/75 leading-relaxed">
              Balanced ternary multiplication reduces to sign flips, while addition produces carry bits without negative asymmetry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TernaryPreview;
