import React from "react";
import { cn } from "@/lib/utils";

interface DividerProps {
  label?: string;
  className?: string;
}

export function Divider({ label, className }: DividerProps) {
  return (
    <div className={cn("relative my-12 flex items-center justify-center", className)}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-stone" />
      </div>
      {label && (
        <span className="relative bg-porcelain px-3 font-mono text-[10px] uppercase tracking-widest text-warm-grey">
          {label}
        </span>
      )}
    </div>
  );
}

export default Divider;
