import React from "react";
import { COLOR_TOKENS, CONTRAST_PAIRS } from "@/lib/tokens";

export default function DevTokensPage() {
  return (
    <div className="p-10 bg-porcelain min-h-screen text-charcoal font-sans">
      <h1 className="font-display text-4xl mb-6">Design Tokens Showcase</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {Object.entries(COLOR_TOKENS).map(([name, hex]) => (
          <div key={name} className="p-4 border border-stone rounded-sm bg-white/40">
            <div className="h-16 rounded-sm mb-2" style={{ backgroundColor: hex }} />
            <div className="font-mono text-xs font-semibold">{name}</div>
            <div className="font-mono text-[10px] text-warm-grey">{hex}</div>
          </div>
        ))}
      </div>
      <h2 className="font-display text-2xl mb-4">WCAG Contrast Pairs</h2>
      <div className="space-y-2 font-mono text-xs">
        {CONTRAST_PAIRS.map((pair, idx) => (
          <div key={idx} className="p-3 border border-stone rounded-sm flex justify-between">
            <span>{pair.foreground} on {pair.background}</span>
            <span>{pair.contrastRatio} ({pair.compliance})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
