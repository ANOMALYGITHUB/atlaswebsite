import React from "react";

const principles = [
  {
    num: "01",
    title: "First-Principles Inquiry",
    desc: "We question industry conventions solidified in the 1950s—re-evaluating ternary arithmetic, capability security, and synchronous deterministic hardware.",
  },
  {
    num: "02",
    title: "Radical Transparency",
    desc: "We clearly demarcate simulated mathematical proofs from physical silicon, architectural drafts from running kernels, and conceptual CAD from flight-proven airframes.",
  },
  {
    num: "03",
    title: "Sustainable Independence",
    desc: "Our foundational research is financed through high-reliability infrastructure services and specialized engineering consulting, avoiding speculative hype cycles.",
  },
];

export function Principles() {
  return (
    <section className="py-20 md:py-28 bg-porcelain border-b border-stone">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl space-y-3 mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-copper">
            01 / OPERATIONAL ETHOS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal">
            Grounded in Verification
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((p) => (
            <div key={p.num} className="p-6 md:p-8 border border-stone bg-white/30 rounded-sm space-y-4">
              <span className="font-mono text-xs text-copper font-medium tracking-widest">
                RULE // {p.num}
              </span>
              <h3 className="font-display text-2xl font-normal text-charcoal">{p.title}</h3>
              <p className="font-sans text-sm text-charcoal-muted leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Principles;
