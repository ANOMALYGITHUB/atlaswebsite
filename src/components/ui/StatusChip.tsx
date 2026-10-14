import React from "react";
import { cn } from "@/lib/utils";

interface StatusChipProps {
  label: string;
  variant?: "copper" | "neutral" | "concept" | "operational";
  dot?: boolean;
  className?: string;
}

export function StatusChip({
  label,
  variant = "neutral",
  dot = false,
  className,
}: StatusChipProps) {
  const variantStyles = {
    neutral: "border-stone bg-stone/20 text-charcoal",
    copper: "border-copper/40 bg-copper/10 text-copper",
    concept: "border-copper/40 bg-copper/10 text-copper",
    operational: "border-emerald-700/30 bg-emerald-700/10 text-emerald-900",
  };

  const dotStyles = {
    neutral: "bg-charcoal/60",
    copper: "bg-copper",
    concept: "bg-copper animate-pulse",
    operational: "bg-emerald-700 animate-pulse",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm border font-mono text-[11px] uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
    >
      {dot && <span className={cn("w-1.5 h-1.5 rounded-full", dotStyles[variant])} />}
      {label}
    </span>
  );
}

export default StatusChip;
