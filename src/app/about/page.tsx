import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vision, mission, core values, and comparative strategic advantage of Nomad Sahan.",
};

const COMPARISON = [
  {
    area: "Data Collection",
    traditional: "Often rely on secondary data or remote interviews.",
    international: "Deploy short-term field enumerators or local sub-contractors.",
    nomadSahan: "Maintains full-time, institutional, community-embedded field networks.",
  },
  {
    area: "Policy Influence",
    traditional: "Focus heavily on high-level macro commentary.",
    international: "Focus primarily on narrow program metrics (M&E outputs).",
    nomadSahan: "Translates hard field data directly into high-level policy papers.",
  },
  {
    area: "Climate & Peace",
    traditional: "Treat climate change and security as separate themes.",
    international: "Evaluate climate or peace through highly narrow project lenses.",
    nomadSahan: "Integrates Climate Security as a foundational, cross-cutting framework.",
  },
  {
    area: "Institutional Model",
    traditional: "Heavily dependent on volatile international donor grants.",
    international: "Driven entirely by short-term commercial aid tenders.",
    nomadSahan: "A hybrid structure aligned with major global research institutes.",
  },
];

const GOALS = [
  {
    title: "Regional Institutional Reference",
    description:
      "To establish Nomad Sahan as the absolute authority on the intersection of climate change and conflict resolution within the Horn of Africa.",
  },
  {
    title: "Digital Data Infrastructure",
    description:
      "Launching specialized interactive mapping tools tracking hydro-political friction points and local resource accessibility in real-time.",
  },
  {
    title: "National Policy Pipeline",
    description:
      "Creating formal advisory tracks with national and federal member state ministries to systematically embed empirical field research into environmental, legislative, and agricultural policies.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Nomad Sahan"
        title="Identity, Vision & Mission"
        description="A premier, hyper-localized independent think tank operating at the intersection of rigorous field research, high-level policy analysis, and community-driven development strategy."
      />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-night">Vision</h2>
            <p className="mt-4 text-base leading-relaxed text-night-soft">
              A stable, democratic, and climate-resilient Somalia and Horn of
              Africa, where regional governance, peacebuilding, and economic
              development are guided by flawless indigenous data, rigorous
              scientific inquiry, and far-sighted policy analysis.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-night">Mission</h2>
            <p className="mt-4 text-base leading-relaxed text-night-soft">
              To generate high-impact, independent research and
              action-oriented policy alternatives that address the
              structural drivers of conflict, mitigate climate-induced
              instabilities, strengthen democratic governance, and foster
              localized development solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-sand-deep">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <SectionHeading eyebrow="Comparative Strategic Advantage" title="A distinct operational identity" />
          <div className="mt-10 overflow-x-auto rounded-2xl border border-line bg-sand">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-line bg-night text-sand">
                  <th className="px-5 py-4 font-semibold">Functional Area</th>
                  <th className="px-5 py-4 font-semibold">Traditional Think Tanks</th>
                  <th className="px-5 py-4 font-semibold">International Research Firms</th>
                  <th className="px-5 py-4 font-semibold text-gold">Nomad Sahan</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.area} className={i % 2 === 1 ? "bg-sand-deep/60" : ""}>
                    <td className="px-5 py-4 font-semibold text-night">{row.area}</td>
                    <td className="px-5 py-4 text-night-soft">{row.traditional}</td>
                    <td className="px-5 py-4 text-night-soft">{row.international}</td>
                    <td className="px-5 py-4 font-medium text-clay">{row.nomadSahan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading eyebrow="Strategic Horizon 2026–2028" title="Where we are headed" />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {GOALS.map((goal) => (
            <div key={goal.title} className="rounded-2xl border border-line p-6">
              <h3 className="font-serif text-lg font-semibold text-night">{goal.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-night-soft">{goal.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
