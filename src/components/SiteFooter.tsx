import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-night text-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-clay text-sand font-serif text-base font-semibold">
              NS
            </span>
            <span className="font-serif text-lg font-semibold">Nomad Sahan</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-sand/70">
            An intellectual navigator for the Horn of Africa — bridging field
            data and high-level policy.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-sand/80">
            <li><Link href="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link href="/research-policy-hub" className="hover:text-gold">Research & Policy Hub</Link></li>
            <li><Link href="/humanitarian-development-hub" className="hover:text-gold">Humanitarian & Dev. Hub</Link></li>
            <li><Link href="/publications" className="hover:text-gold">Publications</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Institutional
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-sand/80">
            <li>Headquarters: Garowe, Somalia</li>
            <li>
              <a href="mailto:info@nomadsahan.org" className="hover:text-gold">
                info@nomadsahan.org
              </a>
            </li>
            <li><Link href="/contact" className="hover:text-gold">Contact &amp; Get Involved</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Strategic Horizon
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-sand/70">
            2026–2028: Establishing Nomad Sahan as the regional authority on
            climate security and conflict resolution in the Horn of Africa.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-sand/50">
        © {new Date().getFullYear()} Nomad Sahan. Madax-bannaani — Intellectual Independence.
      </div>
    </footer>
  );
}
