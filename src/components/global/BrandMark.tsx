import React from "react";
import Link from "next/link";

interface BrandMarkProps {
  className?: string;
  showWordmark?: boolean;
}

export function BrandMark({ className = "w-7 h-7", showWordmark = true }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5 text-charcoal hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2"
      aria-label="ATLAS Technologies Homepage"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        role="img"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="46" stroke="#292925" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="41" stroke="#9C6246" strokeWidth="1" strokeDasharray="3 3" />
        <path
          d="M 50 12 C 50 12 70 30 70 50 C 70 70 50 88 50 88"
          stroke="#292925"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 50 12 C 50 12 30 30 30 50 C 30 70 50 88 50 88"
          stroke="#292925"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 12 50 C 12 50 30 70 50 70 C 70 70 88 50 88 50"
          stroke="#9C6246"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 12 50 C 12 50 30 30 50 30 C 70 30 88 50 88 50"
          stroke="#9C6246"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="50" cy="50" r="14" fill="#F3F0E8" stroke="#292925" strokeWidth="2" />
        <path
          d="M 44 57 L 50 41 L 56 57 M 46 53 L 54 53"
          stroke="#9C6246"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showWordmark && (
        <span className="font-display font-medium text-lg tracking-wide text-charcoal">
          ATLAS
        </span>
      )}
    </Link>
  );
}

export default BrandMark;
