import React from "react";
import Link from "next/link";
import { StatusChip } from "@/components/ui/StatusChip";

export function InfrastructurePreview() {
  return (
    <section className="py-20 md:py-28 bg-porcelain border-b border-stone">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <StatusChip label="OPERATIONAL &amp; AVAILABLE" variant="operational" dot />
            <span className="font-mono text-xs text-warm-grey">INFRASTRUCTURE / COMMERCIAL</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal">
            Hardened Infrastructure &amp; Systems Consulting
          </h2>

          <p className="font-sans text-base text-charcoal/80 leading-relaxed">
            The operational foundation that funds our long-term research. We engineer dedicated bare-metal hosting environments, perform kernel-level performance audits, and architect private edge deployments with zero-trust isolation.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 border border-stone bg-white/40 rounded-sm">
              <span className="font-mono text-xs text-copper">DEDICATED HOSTING</span>
              <p className="font-sans text-xs text-charcoal/80 mt-1">Single-tenant hardware with attested boot chains.</p>
            </div>
            <div className="p-4 border border-stone bg-white/40 rounded-sm">
              <span className="font-mono text-xs text-copper">KERNEL TUNING</span>
              <p className="font-sans text-xs text-charcoal/80 mt-1">Linux/FreeBSD scheduler jitter and IPC optimization.</p>
            </div>
            <div className="p-4 border border-stone bg-white/40 rounded-sm">
              <span className="font-mono text-xs text-copper">EDGE ARCHITECTURE</span>
              <p className="font-sans text-xs text-charcoal/80 mt-1">Autonomous edge nodes for intermittent networks.</p>
            </div>
          </div>

          <div>
            <Link
              href="/infrastructure"
              className="inline-flex items-center px-5 py-2.5 rounded-sm bg-charcoal text-porcelain font-sans text-sm font-medium hover:bg-charcoal/90 transition-colors"
            >
              Initiate Consultation Scoping →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfrastructurePreview;
