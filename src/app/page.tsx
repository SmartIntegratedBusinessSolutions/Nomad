import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const HUBS = [
  {
    href: "/research-policy-hub",
    name: "Research & Policy Analysis Hub",
    tagline: "The Intellectual Engine",
    areas: [
      "Climate Security & Resource Dynamics",
      "Geopolitical Forecasting & Regional Security",
      "Governance, Constitutionalism & Democracy",
      "Displacement, Migration & Urbanization",
    ],
  },
  {
    href: "/humanitarian-development-hub",
    name: "Humanitarian & Development Hub",
    tagline: "The Data & Operations Engine",
    areas: [
      "Independent Monitoring, Evaluation & Learning (MEL)",
      "Community-Led Peacebuilding & Stabilization",
      "Humanitarian Baseline & Needs Assessments",
      "Demographic & Empowerment Studies",
    ],
  },
];

const VALUES = [
  {
    name: "Intellectual Independence",
    somali: "Madax-bannaani",
    description:
      "Maintaining absolute neutrality and academic rigor, free from external political or factional influence.",
  },
  {
    name: "Scientific & Empirical Integrity",
    somali: "Daacadnimo iyo Hufnaan",
    description:
      "Grounding all strategic counsel in rigorous, verifiable, field-generated data.",
  },
  {
    name: "Climate & Security Integration",
    somali: null,
    description:
      "Viewing ecological realities and peace dynamics as a single, interconnected ecosystem.",
  },
  {
    name: "Inclusivity & Local Ownership",
    somali: "Ka-qaybgal",
    description:
      "Elevating local voices, minority communities, youth, and women to shape high-level policy.",
  },
  {
    name: "Agility & Innovation",
    somali: "Hal-abuur",
    description:
      "Utilizing cutting-edge data capture, remote sensing integration, and adaptive field methodologies.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-night text-sand">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(199,154,60,0.18),_transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Garowe, Somalia &middot; Est. 2026
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            An intellectual navigator for the Horn of Africa
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sand/80">
            Nomad Sahan is a hyper-localized independent think tank operating
            at the intersection of rigorous field research, high-level
            policy analysis, and community-driven development strategy.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="rounded-full bg-clay px-6 py-3 text-sm font-semibold text-sand transition-colors hover:bg-clay-dark"
            >
              Our Story
            </Link>
            <Link
              href="/publications"
              className="rounded-full border border-sand/30 px-6 py-3 text-sm font-semibold text-sand transition-colors hover:bg-sand/10"
            >
              View Publications
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Identity"
          title="A hybrid model, uncoupled from commercial logistics"
          description={
            'The name "Sahan" is rooted in the Somali tradition of nomadic pathfinders — expert scouts sent ahead to analyze terrain, weather, and conflict dynamics to safely guide their communities toward peace and stability. Nomad Sahan combines large-scale data operations and independent MEL with elite geopolitical and climate security forecasting.'
          }
        />
      </section>

      <section className="border-y border-line bg-sand-deep">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading eyebrow="Institutional Framework" title="Two Core Strategic Hubs" />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {HUBS.map((hub) => (
              <Link
                key={hub.href}
                href={hub.href}
                className="group flex flex-col rounded-2xl border border-line bg-sand p-8 transition-shadow hover:shadow-lg"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">
                  {hub.tagline}
                </span>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-night">
                  {hub.name}
                </h3>
                <ul className="mt-6 space-y-2 text-sm text-night-soft">
                  {hub.areas.map((area) => (
                    <li key={area} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {area}
                    </li>
                  ))}
                </ul>
                <span className="mt-8 text-sm font-semibold text-clay group-hover:underline">
                  Explore the hub &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Core Values" title="What guides our work" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value) => (
            <div key={value.name} className="rounded-2xl border border-line p-6">
              <h3 className="font-serif text-lg font-semibold text-night">
                {value.name}
                {value.somali && (
                  <span className="ml-2 text-sm font-normal italic text-clay">
                    ({value.somali})
                  </span>
                )}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-night-soft">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-clay text-sand">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Strategic Horizon 2026–2028
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sand/90">
            Establishing Nomad Sahan as the absolute regional authority on
            the intersection of climate change and conflict resolution in
            the Horn of Africa.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-night px-6 py-3 text-sm font-semibold text-sand transition-colors hover:bg-night-soft"
          >
            Partner With Us
          </Link>
        </div>
      </section>
    </>
  );
}
