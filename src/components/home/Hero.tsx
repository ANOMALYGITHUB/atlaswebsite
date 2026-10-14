import React from "react";
import Link from "next/link";
import { StatusChip } from "@/components/ui/StatusChip";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-stone bg-porcelain pt-20 pb-24 md:pt-32 md:pb-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-4xl space-y-8">
          <div className="flex flex-wrap items-center gap-3">
            <StatusChip label="INDEPENDENT SYSTEMS LAB" variant="copper" dot />
            <span className="font-mono text-xs text-warm-grey tracking-wider">
              EST. 2026 // RADIX-3 &amp; EMBODIED SYSTEMS
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.05] tracking-tight text-charcoal">
            Advanced Computing Research, Deterministic Operating Systems &amp; High-Reliability Infrastructure
          </h1>

          <p className="font-sans text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-charcoal-muted max-w-3xl">
            We investigate alternatives to conventional binary architectures—advancing balanced ternary logic, deterministic microkernel runtimes, and open-architecture autonomous robotics, sustained by mission-critical systems engineering.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/research/ternary"
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm bg-charcoal text-porcelain font-sans text-sm font-medium transition-colors hover:bg-charcoal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
            >
              Explore Ternary Monograph
              <span aria-hidden="true" className="ml-2 font-mono text-xs text-stone">
                →
              </span>
            </Link>

            <Link
              href="/systems/os"
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm border border-stone bg-white/40 text-charcoal font-sans text-sm font-medium transition-colors hover:border-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
            >
              ATLAS OS Architecture
            </Link>

            <Link
              href="/infrastructure"
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm text-copper font-sans text-sm font-medium hover:underline underline-offset-4"
            >
              Infrastructure Services
            </Link>
          </div>
        </div>

        {/* Telemetry ribbon */}
        <div className="mt-16 pt-6 border-t border-stone grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs text-charcoal">
          <div>
            <span className="block text-[10px] text-warm-grey">FOUNDATION</span>
            <span className="font-medium">Balanced Ternary (-1, 0, +1)</span>
          </div>
          <div>
            <span className="block text-[10px] text-warm-grey">KERNEL LATENCY</span>
            <span className="font-medium">&lt; 15μs IPC Bound</span>
          </div>
          <div>
            <span className="block text-[10px] text-warm-grey">ROBOTICS</span>
            <span className="font-medium">Open-Airframe Concept</span>
          </div>
          <div>
            <span className="block text-[10px] text-warm-grey">LICENSING</span>
            <span className="font-medium">Apache 2.0 Open Science</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
