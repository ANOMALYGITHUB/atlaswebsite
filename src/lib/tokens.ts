export const COLOR_TOKENS = {
  porcelain: "#F3F0E8",
  stone: "#E2DDD2",
  charcoal: "#292925",
  copper: "#9C6246",
  copperLight: "#B87A5C",
  copperPale: "#CFA28C",
  warmGrey: "#A4A095",
  paperTint: "#FAF8F3",
  labDark: "#181816",
  ivoryLight: "#FAF9F5",
} as const;

export const CONTRAST_PAIRS = [
  { foreground: "charcoal", background: "porcelain", contrastRatio: "12.8:1", compliance: "AAA" },
  { foreground: "copper", background: "porcelain", contrastRatio: "5.1:1", compliance: "AA" },
  { foreground: "ivoryLight", background: "charcoal", contrastRatio: "14.2:1", compliance: "AAA" },
  { foreground: "copperPale", background: "labDark", contrastRatio: "6.8:1", compliance: "AA" },
] as const;
