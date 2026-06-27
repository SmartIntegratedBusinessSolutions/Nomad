import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Policy briefs, monographs, and evaluation reports from Nomad Sahan.",
};

const PUBLICATIONS = [
  {
    type: "Policy Brief",
    hub: "Research & Policy Hub",
    title: "Hydro-Politics and Pastoral Conflict in the Horn of Africa",
    summary:
      "An analysis of how shifting rainfall patterns are reshaping inter-clan resource competition and what federal and regional authorities can do to mitigate escalation.",
    date: "Forthcoming",
  },
  {
    type: "Monograph",
    hub: "Research & Policy Hub",
    title: "Federal-State Relations and the Constitutional Review Process",
    summary:
      "A deep-dive examination of institution building and electoral design transitions across Somalia's federal member states.",
    date: "Forthcoming",
  },
  {
    type: "Baseline Report",
    hub: "Humanitarian & Development Hub",
    title: "Livelihood Vulnerability Assessment: Coastal Puntland",
    summary:
      "High-sample quantitative and qualitative findings on food security, WASH infrastructure, and livelihood resilience in coastal communities.",
    date: "Forthcoming",
  },
  {
    type: "Evaluation Report",
    hub: "Humanitarian & Development Hub",
    title: "Independent MEL Review: Regional Stabilization Programming",
    summary:
      "A third-party verification of multi-year stabilization investment outcomes against donor-defined indicators.",
    date: "Forthcoming",
  },
];

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Output"
        title="Publications"
        description="Peer-reviewed monographs, policy briefs, baseline assessments, and evaluation reports. Our publication pipeline is being established — check back soon for our first releases."
      />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-6">
          {PUBLICATIONS.map((pub) => (
            <article
              key={pub.title}
              className="rounded-2xl border border-line p-7 transition-shadow hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em]">
                <span className="rounded-full bg-clay px-3 py-1 text-sand">{pub.type}</span>
                <span className="text-night-soft">{pub.hub}</span>
                <span className="ml-auto text-gold">{pub.date}</span>
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-night">{pub.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-night-soft">{pub.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
