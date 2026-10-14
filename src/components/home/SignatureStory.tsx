import React from "react";
import { SignatureStoryClient } from "./SignatureStoryClient";
import { StatusChip } from "@/components/ui/StatusChip";

export function SignatureStory() {
  return (
    <section
      id="signature-story-container"
      aria-labelledby="signature-story-heading"
      className="py-20 md:py-28 bg-porcelain border-b border-stone relative"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-copper tracking-widest">
                STORYBOARD // NARRATIVE SEQUENCE
              </span>
              <span className="font-mono text-xs text-warm-grey">{"//"}</span>
              <StatusChip label="CONTINUITY OF COMPUTING" variant="copper" />
            </div>
            <h2
              id="signature-story-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal"
            >
              The Architecture: From Trit to Machine
            </h2>
          </div>
          <p className="font-sans text-sm md:text-base text-charcoal-muted max-w-md">
            How fundamental ternary logic informs kernel scheduling invariants, which in turn guarantee sub-millisecond control in autonomous airframes.
          </p>
        </div>

        <div className="mt-12">
          <SignatureStoryClient />
        </div>
      </div>
    </section>
  );
}

export default SignatureStory;
