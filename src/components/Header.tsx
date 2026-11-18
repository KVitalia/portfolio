"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Works", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Contacts", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative mx-auto w-full max-w-[1512px] px-6 py-8 sm:px-10">
      <div className="flex w-full items-center justify-between">
        <Link
          href="/"
          className="font-istok text-[28px] leading-none font-normal text-[#1e1e1e] sm:text-[40px] lg:text-[64px]"
        >
          VITALIA KUMESKA
        </Link>

        <div className="flex items-center gap-4 sm:gap-[46px]">
          <nav className="hidden items-center gap-[46px] font-sans text-base font-medium text-[#1e1e1e] md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:opacity-70">
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#contact"
            className="shrink-0 border-2 border-[#e3464b] bg-white/50 px-2.5 py-1.5 font-sans text-xs font-medium whitespace-nowrap text-[#1e1e1e] transition-opacity hover:opacity-80 sm:px-4 sm:py-2.5 sm:text-base"
          >
            Write Me
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex shrink-0 flex-col items-end justify-center gap-1.5 p-1 md:hidden"
          >
            <span
              className={`block h-0.5 w-6 bg-[#1e1e1e] transition-transform ${
                isMenuOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#1e1e1e] transition-transform ${
                isMenuOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="mt-4 flex flex-col items-end gap-4 border-t border-[#1e1e1e]/15 pt-4 font-sans text-base font-medium text-[#1e1e1e] md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
