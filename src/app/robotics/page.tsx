import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { StatusChip } from "@/components/ui/StatusChip";

export const metadata: Metadata = {
  title: "Robotics & Autonomous Hardware — ATLAS Technologies",
  description:
    "Concept exploration of an open-architecture AI drone kit, sensor fusion, edge compute, and future autonomous hardware research.",
};

export default function RoboticsPage() {
  return (
    <article className="min-h-screen bg-porcelain text-charcoal">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 md:py-24">
        <header className="max-w-4xl space-y-6 pb-12 border-b border-stone">
          <div className="flex flex-wrap items-center gap-3">
            <StatusChip label="CONCEPT EXPLORATION" variant="concept" dot />
            <span className="font-mono text-xs text-warm-grey">ROBOTICS / AIRFRAME STUDIES</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] font-normal">
            Embodied Machine Intelligence: From Perception to Flight
          </h1>
          <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-charcoal/80 max-w-3xl">
            Autonomous machines need tight coupling between sensors, edge compute, and deterministic software. ATLAS explores these relationships through an open-architecture aerial robotics concept.
          </p>
          <div className="p-5 border border-copper/40 bg-copper/5 rounded-sm">
            <div className="font-mono text-xs text-copper uppercase tracking-wider">Reality boundary / concept stage</div>
            <p className="font-sans text-sm leading-relaxed text-charcoal/85 mt-2">
              The drone kit is a design exploration, not a shipping product. CAD concepts, sensor payloads, and flight architecture remain under engineering evaluation. No consumer units are currently shipping. No pre-orders or delivery dates are offered.
            </p>
          </div>
        </header>

        <section className="py-12 border-b border-stone space-y-6">
          <span className="font-mono text-xs text-copper uppercase tracking-widest">01 / AIRFRAME SPECIFICATIONS</span>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 border border-stone bg-stone/20 rounded-sm">
              <span className="text-copper block">STRUCTURE</span>
              <div className="font-medium mt-1">Carbon Unibody</div>
              <p className="font-sans text-[11px] text-charcoal/70 mt-1">Resonance dampening composite</p>
            </div>
            <div className="p-4 border border-stone bg-stone/20 rounded-sm">
              <span className="text-copper block">COMPUTE</span>
              <div className="font-medium mt-1">Modular Carrier</div>
              <p className="font-sans text-[11px] text-charcoal/70 mt-1">Thermal envelope 15W-35W</p>
            </div>
            <div className="p-4 border border-stone bg-stone/20 rounded-sm">
              <span className="text-copper block">SENSORS</span>
              <div className="font-medium mt-1">Stereo Flow + IMU</div>
              <p className="font-sans text-[11px] text-charcoal/70 mt-1">Hardware-synced clocking</p>
            </div>
            <div className="p-4 border border-stone bg-stone/20 rounded-sm">
              <span className="text-copper block">CONTROL LOOP</span>
              <div className="font-medium mt-1">500Hz Deterministic</div>
              <p className="font-sans text-[11px] text-charcoal/70 mt-1">Sub-millisecond jitter bound</p>
            </div>
          </div>
        </section>

        <div className="pt-7 border-t border-stone flex flex-wrap gap-4">
          <Link href="/systems/os" className="font-sans text-sm text-copper hover:underline">ATLAS OS architecture →</Link>
          <Link href="/research/ternary" className="font-sans text-sm text-copper hover:underline">Ternary research →</Link>
          <Link href="/contact" className="font-sans text-sm text-copper hover:underline">Research collaboration →</Link>
        </div>
      </div>
    </article>
  );
}
