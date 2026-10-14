import React from "react";
import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { href: "/research/ternary", label: "Research", code: "01" },
  { href: "/systems/os", label: "Systems", code: "02" },
  { href: "/robotics", label: "Robotics", code: "03" },
  { href: "/infrastructure", label: "Infrastructure", code: "04" },
  { href: "/about", label: "About", code: "05" },
  { href: "/contact", label: "Contact", code: "06" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full h-16 border-b border-stone bg-porcelain/95 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <BrandMark />

        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center gap-1.5 font-sans text-xs tracking-wider text-charcoal-muted uppercase hover:text-charcoal transition-colors py-1"
            >
              <span className="font-mono text-[10px] text-warm-grey group-hover:text-copper transition-colors">
                {link.code}
              </span>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] text-warm-grey border-l border-stone pl-4">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-copper animate-pulse" />
            <span>SYS / NOMINAL</span>
          </div>
          <MobileNav links={navLinks} />
        </div>
      </div>
    </header>
  );
}

export default Header;
