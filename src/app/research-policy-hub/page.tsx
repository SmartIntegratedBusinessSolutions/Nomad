import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Research & Policy Analysis Hub",
  description:
    "The intellectual engine of Nomad Sahan: climate security, geopolitical forecasting, governance, and migration policy analysis.",
};

const AREAS = [
  {
    title: "Climate Security & Resource Dynamics",
    description:
      "Investigating how environmental degradation, erratic rainfall patterns, and shifting microclimates exacerbate inter-clan and intra-communal conflicts over land, pasture, and water rights.",
  },
  {
    title: "Geopolitical Forecasting & Regional Security",
    description:
      "Tracking changing alignments in the Horn of Africa, maritime security, border dynamics, and trans-boundary hydro-politics.",
  },
  {
    title: "Governance, Constitutionalism & Democracy",
    description:
      "Analyzing institution building, federal-state relations, constitutional review mechanisms, and electoral design transitions within volatile political landscapes.",
  },
  {
    title: "Displacement, Migration & Urbanization",
    description:
      "Mapping the socio-economic drivers and policy responses to forced climate displacement and irregular migration corridors.",
  },
];

const OUTPUTS = [
  "Peer-reviewed monographs",
  "Regular regional security updates",
  "Targeted policy briefs for legislative bodies",
  "Strategic scenario-building matrices",
];

export default function ResearchPolicyHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Pillar I"
        title="Research & Policy Analysis Hub"
        description="The Intellectual Engine — synthesizing complex political, environmental, and security developments into actionable briefs for governments, diplomats, and international bodies."
      />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading eyebrow="Focus Areas" title="Where we direct our analysis" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {AREAS.map((area) => (
            <div key={area.title} className="rounded-2xl border border-line p-7">
              <h3 className="font-serif text-xl font-semibold text-night">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-night-soft">{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-sand-deep">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <SectionHeading eyebrow="Key Outputs" title="What this hub produces" />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {OUTPUTS.map((output) => (
              <li key={output} className="flex items-start gap-3 rounded-xl bg-sand p-4 text-sm text-night-soft">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                {output}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
