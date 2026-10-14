"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface MobileNavProps {
  links: Array<{ href: string; label: string; code: string }>;
}

export function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-charcoal hover:text-copper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <span className="sr-only">Toggle Menu</span>
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-50 bg-porcelain/98 backdrop-blur-md px-6 py-8 border-t border-stone overflow-y-auto">
          <div className="font-mono text-xs text-warm-grey pb-4 border-b border-stone mb-6">
            INDEX // SITE NAVIGATION
          </div>
          <nav className="flex flex-col space-y-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-2 border-b border-stone/50 text-charcoal hover:text-copper transition-colors"
              >
                <span className="font-display text-2xl font-normal">{link.label}</span>
                <span className="font-mono text-xs text-copper">{link.code}</span>
              </Link>
            ))}
          </nav>
          <div className="mt-12 pt-6 border-t border-stone font-mono text-xs text-warm-grey space-y-2">
            <div>STATUS: SYSTEMS NOMINAL</div>
            <div>VER: 0.1.0-ARCHIVAL</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
