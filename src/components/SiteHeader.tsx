"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/research-policy-hub", label: "Research & Policy Hub" },
  { href: "/humanitarian-development-hub", label: "Humanitarian & Dev. Hub" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-sand/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-clay text-sand font-serif text-lg font-semibold">
            NS
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold tracking-tight text-night">
              Nomad Sahan
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-night-soft">
              Think Tank
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-night-soft transition-colors hover:text-clay"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-clay px-5 py-2 text-sm font-semibold text-sand transition-colors hover:bg-clay-dark"
          >
            Get Involved
          </Link>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-night" />
          <span className="block h-0.5 w-6 bg-night" />
          <span className="block h-0.5 w-6 bg-night" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-sand px-6 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-night-soft hover:bg-sand-deep hover:text-clay"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
