import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { StatusChip } from "@/components/ui/StatusChip";

export const metadata: Metadata = {
  title: "Infrastructure & Technical Services — ATLAS Technologies",
  description:
    "Explore ATLAS high-reliability infrastructure: dedicated bare-metal clusters, systems architecture consulting, private edge deployments, and consultation scoping.",
};

const capabilities = [
  {
    code: "INF-01",
    name: "Hardened Bare-Metal Hosting",
    scope: "Single-tenant environments",
    summary: "Dedicated compute hardware configured with custom firmware baselines, isolated out-of-band management, encrypted root stores, and verified network attachments.",
  },
  {
    code: "INF-02",
    name: "Systems Engineering Consulting",
    scope: "Architecture & audit engagements",
    summary: "Bespoke engineering reviews addressing low-latency networking, custom Linux/FreeBSD kernel tuning, high-concurrency memory layouts, and deterministic workloads.",
  },
  {
    code: "INF-03",
    name: "Private Edge Deployments",
    scope: "Localized systems infrastructure",
    summary: "Micro-datacenter and edge compute topologies engineered for high resilience, intermittent connectivity, physical tamper resistance, and localized sensor data collection.",
  },
];

export default function InfrastructurePage() {
  return (
    <article className="min-h-screen bg-porcelain text-charcoal">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 md:py-24">
        <header className="max-w-4xl space-y-6 pb-12 border-b border-stone">
          <div className="flex flex-wrap items-center gap-3">
            <StatusChip label="OPERATIONAL &amp; AVAILABLE" variant="operational" dot />
            <span className="font-mono text-xs text-warm-grey">INFRASTRUCTURE / COMMERCIAL SERVICES</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] font-normal">
            Engineered Infrastructure: High-Reliability Systems Architecture
          </h1>
          <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-charcoal/80 max-w-3xl">
            The operational foundation of ATLAS. We design, harden, and manage mission-critical compute infrastructure and offer specialized systems consulting—funding our long-term research with sustainable independence.
          </p>
        </header>

        <section className="py-12 border-b border-stone space-y-6">
          <span className="font-mono text-xs text-copper uppercase tracking-widest">01 / CAPABILITIES</span>
          <div className="space-y-6">
            {capabilities.map((c) => (
              <div key={c.code} className="p-6 border border-stone bg-white/40 rounded-sm space-y-2">
                <div className="flex justify-between items-center font-mono text-xs">
                  <span className="text-copper">{c.code}</span>
                  <span className="text-warm-grey">{c.scope}</span>
                </div>
                <h3 className="font-display text-2xl font-normal text-charcoal">{c.name}</h3>
                <p className="font-sans text-sm text-charcoal/85 leading-relaxed">{c.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="pt-7 border-t border-stone flex flex-wrap gap-4">
          <Link href="/contact" className="font-sans text-sm text-copper hover:underline">Initiate Technical Consultation →</Link>
          <Link href="/about" className="font-sans text-sm text-copper hover:underline">About Our Business Model →</Link>
        </div>
      </div>
    </article>
  );
}
