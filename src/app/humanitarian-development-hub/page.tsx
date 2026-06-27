import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Humanitarian & Development Hub",
  description:
    "The data and operations engine of Nomad Sahan: independent MEL, peacebuilding, needs assessments, and capacity building.",
};

const AREAS = [
  {
    title: "Independent Monitoring, Evaluation & Learning (MEL)",
    description:
      "Serving as a trusted third-party verifier for multi-year, large-scale international aid, stabilization, and public infrastructure projects.",
  },
  {
    title: "Community-Led Peacebuilding & Stabilization",
    description:
      "Facilitating local reconciliation dialogues, tracking customary (Xeer) dispute resolutions, and designing frameworks to transition communities away from active resource conflicts.",
  },
  {
    title: "Humanitarian Baseline & Needs Assessments",
    description:
      "Executing high-sample quantitative surveys and qualitative focus groups in remote or insecure zones to evaluate food security, WASH infrastructure, and livelihood vulnerability.",
  },
  {
    title: "Demographic & Empowerment Studies",
    description:
      "Gathering data on the inclusion and economic marginalization of youth, women, and internally displaced persons (IDPs) to shape targeted development interventions.",
  },
  {
    title: "Technical Capacity Building",
    description:
      "Conducting seminars, data literacy workshops, and professional development training for local researchers, civil servants, and civil society actors to institutionalize research-driven practices.",
  },
];

const OUTPUTS = [
  "Comprehensive baseline/endline evaluation reports",
  "Community dialogue maps",
  "Digital dashboard integrations for donor tracking",
  "Rapid field vulnerability metrics",
];

export default function HumanitarianDevelopmentHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Pillar II"
        title="Humanitarian & Development Hub"
        description="The Data & Operations Engine — providing large-scale, field-based operational capabilities, mirroring the technical data collection and evaluation infrastructure of global development firms."
      />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading eyebrow="Focus Areas" title="Where we operate on the ground" />
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
