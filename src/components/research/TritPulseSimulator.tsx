"use client";

import React, { useState } from "react";

type Trit = -1 | 0 | 1;

export function TritPulseSimulator() {
  const [tritA, setTritA] = useState<Trit>(1);
  const [tritB, setTritB] = useState<Trit>(0);
  const [activeGate, setActiveGate] = useState<"kleene_and" | "kleene_or" | "consensus" | "invert_a">("kleene_and");

  const invert = (t: Trit): Trit => (-t as Trit);
  const kleeneAnd = (a: Trit, b: Trit): Trit => Math.min(a, b) as Trit;
  const kleeneOr = (a: Trit, b: Trit): Trit => Math.max(a, b) as Trit;
  const consensus = (a: Trit, b: Trit): Trit => (a === b ? a : 0);

  const getResult = (): Trit => {
    switch (activeGate) {
      case "invert_a": return invert(tritA);
      case "kleene_and": return kleeneAnd(tritA, tritB);
      case "kleene_or": return kleeneOr(tritA, tritB);
      case "consensus": return consensus(tritA, tritB);
    }
  };

  const result = getResult();

  const getVoltageLabel = (t: Trit) => {
    if (t === 1) return "+1.5V (TRUE)";
    if (t === 0) return "0.0V (UNKNOWN)";
    return "-1.5V (FALSE)";
  };

  return (
    <div className="border border-stone bg-white/40 rounded-sm p-6 md:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone gap-2">
        <div>
          <span className="font-mono text-xs text-copper uppercase tracking-wider">INTERACTIVE SIMULATOR</span>
          <h3 className="font-display text-2xl text-charcoal font-normal">Balanced Trit Truth-Gate Engine</h3>
        </div>
        <span className="font-mono text-xs text-warm-grey">RADIX-3 ALGEBRA</span>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="p-4 border border-stone bg-porcelain rounded-sm space-y-3">
          <div className="flex justify-between items-center font-mono text-xs">
            <span className="text-charcoal font-medium">TRIT A INPUT</span>
            <span className="text-copper">{getVoltageLabel(tritA)}</span>
          </div>
          <div className="grid grid-cols-3 gap-2 font-mono text-xs">
            {([-1, 0, 1] as Trit[]).map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => setTritA(val)}
                className={`py-2 border rounded-sm font-medium transition-colors ${
                  tritA === val ? "bg-charcoal text-porcelain border-charcoal" : "bg-stone/20 text-charcoal border-stone hover:border-charcoal"
                }`}
              >
                {val > 0 ? `+${val}` : val}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 border border-stone bg-porcelain rounded-sm space-y-3">
          <div className="flex justify-between items-center font-mono text-xs">
            <span className="text-charcoal font-medium">TRIT B INPUT</span>
            <span className="text-copper">{getVoltageLabel(tritB)}</span>
          </div>
          <div className="grid grid-cols-3 gap-2 font-mono text-xs">
            {([-1, 0, 1] as Trit[]).map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => setTritB(val)}
                disabled={activeGate === "invert_a"}
                className={`py-2 border rounded-sm font-medium transition-colors ${
                  activeGate === "invert_a" ? "opacity-30 cursor-not-allowed" : ""
                } ${
                  tritB === val ? "bg-charcoal text-porcelain border-charcoal" : "bg-stone/20 text-charcoal border-stone hover:border-charcoal"
                }`}
              >
                {val > 0 ? `+${val}` : val}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <span className="font-mono text-xs text-warm-grey uppercase tracking-wider">GATE SELECTOR</span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
          {[
            { id: "kleene_and", label: "MIN (Kleene AND)" },
            { id: "kleene_or", label: "MAX (Kleene OR)" },
            { id: "consensus", label: "CONSENSUS" },
            { id: "invert_a", label: "INVERT A" },
          ].map((gate) => (
            <button
              key={gate.id}
              type="button"
              onClick={() => setActiveGate(gate.id as any)}
              className={`p-2.5 border rounded-sm transition-colors text-left ${
                activeGate === gate.id ? "bg-copper text-porcelain border-copper font-medium" : "bg-porcelain text-charcoal border-stone hover:border-copper"
              }`}
            >
              {gate.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-5 border border-copper/50 bg-stone/20 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
        <div>
          <span className="text-xs text-warm-grey uppercase">EVALUATED STATE OUTPUT</span>
          <div className="font-display text-3xl text-charcoal mt-1">
            RESULT = <span className="text-copper font-semibold">{result > 0 ? `+${result}` : result}</span>
          </div>
        </div>
        <div className="text-right sm:border-l sm:border-stone sm:pl-6 text-xs text-charcoal/80 space-y-1">
          <div>POTENTIAL: <span className="font-semibold text-charcoal">{getVoltageLabel(result)}</span></div>
          <div className="text-warm-grey text-[11px]">ALGEBRA: {activeGate.toUpperCase()}</div>
        </div>
      </div>
    </div>
  );
}

export default TritPulseSimulator;
