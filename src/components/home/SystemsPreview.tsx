import React from "react";
import Link from "next/link";
import { StatusChip } from "@/components/ui/StatusChip";

export function SystemsPreview() {
  return (
    <section className="py-20 md:py-28 bg-porcelain border-b border-stone">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <StatusChip label="STAGE 1 ARCHITECTURE" variant="copper" dot />
            <span className="font-mono text-xs text-warm-grey">SYSTEMS / ATLAS OS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal">
            ATLAS OS: Deterministic Microkernel Architecture
          </h2>

          <p className="font-sans text-base text-charcoal/80 leading-relaxed">
            Autonomous machines require predictable scheduling guarantees rather than best-effort time slicing. ATLAS OS is a capability-based microkernel written in Rust, isolating device drivers, IPC channels, and memory allocations into verified user-space domains.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 border border-stone bg-stone/20 rounded-sm space-y-1">
              <span className="font-mono text-xs text-copper">BOUNDED IPC</span>
              <p className="font-sans text-xs text-charcoal/80">Zero-copy message passing with verified worst-case execution timing bounds.</p>
            </div>
            <div className="p-4 border border-stone bg-stone/20 rounded-sm space-y-1">
              <span className="font-mono text-xs text-copper">CAPABILITY SECURITY</span>
              <p className="font-sans text-xs text-charcoal/80">No ambient authority; explicit object-capability tokens protect all hardware endpoints.</p>
            </div>
          </div>

          <div>
            <Link
              href="/systems/os"
              className="inline-flex items-center px-5 py-2.5 rounded-sm bg-charcoal text-porcelain font-sans text-sm font-medium hover:bg-charcoal/90 transition-colors"
            >
              Explore Kernel Specifications →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SystemsPreview;
