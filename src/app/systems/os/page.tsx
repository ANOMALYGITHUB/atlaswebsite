import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { StatusChip } from "@/components/ui/StatusChip";

export const metadata: Metadata = {
  title: "ATLAS OS — Deterministic Systems Architecture",
  description:
    "Explore the ATLAS OS microkernel architecture, capability security, bounded-latency IPC, current milestones, toolchain targets, and known limitations.",
};

const kernelLayers = [
  {
    level: "04",
    name: "Autonomous Runtime",
    class: "User Space / Ring 3",
    description:
      "Perception pipelines, edge inference, and deterministic flight control applications operate in isolated, capability-bounded process spaces.",
  },
  {
    level: "03",
    name: "Real-Time IPC & Scheduler",
    class: "User Space Services",
    description:
      "Priority-aware message passing and scheduling primitives designed to bound work for high-frequency sensor and actuator loops.",
  },
  {
    level: "02",
    name: "Microkernel Core",
    class: "Privileged / Ring 0",
    description:
      "A minimal trusted computing base handling thread lifecycle, address-space isolation, capabilities, and interrupt demultiplexing.",
  },
  {
    level: "01",
    name: "Hardware Abstraction",
    class: "Platform Layer",
    description:
      "An explicit boundary between the kernel and target boards, with early targets under evaluation across aarch64, x86_64, and riscv64.",
  },
];

export default function AtlasOsPage() {
  return (
    <article className="min-h-screen bg-porcelain text-charcoal">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 md:py-24">
        <header className="max-w-4xl space-y-6 pb-12 border-b border-stone">
          <div className="flex flex-wrap items-center gap-3">
            <StatusChip label="STAGE 1: ACTIVE KERNEL ARCHITECTURE" variant="copper" dot />
            <span className="font-mono text-xs text-warm-grey">SYSTEMS / OS</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] font-normal">
            A Deterministic Microkernel for Real-Time Autonomous Systems
          </h1>
          <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-charcoal/80 max-w-3xl">
            ATLAS OS explores a small, capability-based kernel and runtime architecture designed around predictable sensor-to-actuator workloads, rather than retrofitting general-purpose assumptions into autonomous machines.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border border-stone bg-stone/25 rounded-sm font-mono text-xs">
            <div><span className="block text-[10px] text-warm-grey">DEVELOPMENT</span><span>Stage 1 / Active</span></div>
            <div><span className="block text-[10px] text-warm-grey">LANGUAGE</span><span>Rust / no_std</span></div>
            <div><span className="block text-[10px] text-warm-grey">TARGETS</span><span>aarch64 · x86_64 · riscv64</span></div>
            <div><span className="block text-[10px] text-warm-grey">LICENSE</span><span>Apache 2.0</span></div>
          </div>
        </header>

        <section className="grid lg:grid-cols-12 gap-10 py-12 border-b border-stone">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs text-copper uppercase tracking-widest">01 / DESIGN THESIS</span>
            <h2 className="font-display text-3xl font-normal">Predictability as a first-class property</h2>
          </div>
          <div className="lg:col-span-7 space-y-4 font-sans text-base leading-relaxed text-charcoal/85">
            <p>
              General-purpose kernels serve broad workloads, but their complexity can complicate worst-case reasoning for tight control loops. ATLAS OS explores a smaller trusted core, explicit authority, and bounded communication paths.
            </p>
            <p>
              This is an active architecture and runtime effort, not a production system. No automotive certification, field deployment, or battle-tested performance claims are made here.
            </p>
          </div>
        </section>

        <section className="py-12 border-b border-stone" aria-labelledby="architecture-heading">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-xs text-copper uppercase tracking-widest">02 / ARCHITECTURE</span>
              <h2 id="architecture-heading" className="font-display text-3xl md:text-4xl font-normal mt-2">Kernel layers &amp; primitives</h2>
            </div>
            <span className="font-mono text-xs text-warm-grey">SCHEMATIC / CURRENT DESIGN</span>
          </div>
          <div className="space-y-3">
            {kernelLayers.map((layer) => (
              <div key={layer.level} className="grid md:grid-cols-12 gap-4 p-5 border border-stone bg-white/25 rounded-sm hover:border-copper/50 transition-colors">
                <div className="md:col-span-1 font-mono text-copper text-sm">L{layer.level}</div>
                <div className="md:col-span-3">
                  <h3 className="font-sans font-medium">{layer.name}</h3>
                  <span className="font-mono text-[10px] uppercase text-warm-grey">{layer.class}</span>
                </div>
                <p className="md:col-span-8 font-sans text-sm leading-relaxed text-charcoal/80">{layer.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="pt-7 border-t border-stone flex flex-wrap gap-4">
          <Link href="/research/ternary" className="font-sans text-sm text-copper hover:underline">Explore Ternary Research →</Link>
          <Link href="/robotics" className="font-sans text-sm text-copper hover:underline">Explore Conceptual Robotics →</Link>
          <Link href="/contact" className="font-sans text-sm text-copper hover:underline">Contact the Systems Team →</Link>
        </div>
      </div>
    </article>
  );
}
