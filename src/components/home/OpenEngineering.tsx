import React from "react";

export function OpenEngineering() {
  return (
    <section className="py-20 md:py-28 bg-porcelain border-b border-stone">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl space-y-4 mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-copper">
            05 / OPEN SCIENCE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-normal text-charcoal">
            Open-Source Artifacts &amp; Reproducibility
          </h2>
          <p className="font-sans text-sm text-charcoal-muted leading-relaxed">
            In accordance with our commitment to scientific peer review, core logic emulators and kernel specifications are published under the Apache 2.0 license.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 font-mono text-xs">
          <div className="p-5 border border-stone bg-white/40 rounded-sm space-y-2">
            <span className="text-copper">REPO // TERNARY-CORE</span>
            <div className="font-sans font-medium text-sm text-charcoal">Balanced Ternary Logic Emulator</div>
            <p className="font-sans text-xs text-charcoal/70">Software emulator and truth-gate verification test suite.</p>
            <div className="pt-2 text-warm-grey">LICENSE: Apache 2.0</div>
          </div>

          <div className="p-5 border border-stone bg-white/40 rounded-sm space-y-2">
            <span className="text-copper">REPO // ATLAS-OS-SPEC</span>
            <div className="font-sans font-medium text-sm text-charcoal">Capability Microkernel Architecture</div>
            <p className="font-sans text-xs text-charcoal/70">RFCs, capability isolation models, and scheduling proofs.</p>
            <div className="pt-2 text-warm-grey">LICENSE: Apache 2.0</div>
          </div>

          <div className="p-5 border border-stone bg-white/40 rounded-sm space-y-2">
            <span className="text-copper">REPO // DRONE-FRAME-STUDY</span>
            <div className="font-sans font-medium text-sm text-charcoal">Airframe CAD &amp; Schematics</div>
            <p className="font-sans text-xs text-charcoal/70">Open physical schematics and modular carrier designs.</p>
            <div className="pt-2 text-warm-grey">STATUS: Stage 1 CAD</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpenEngineering;
