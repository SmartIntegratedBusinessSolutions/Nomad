import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Get Involved",
  description:
    "Reach Nomad Sahan's Garowe headquarters, or partner with us across research, policy, and field operations.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Contact Nomad Sahan"
        description="Whether you represent a government ministry, a donor institution, a research partner, or a local community organization — we welcome the conversation."
      />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <ContactForm />

          <div className="space-y-8">
            <div className="rounded-2xl border border-line p-7">
              <h3 className="font-serif text-lg font-semibold text-night">Headquarters</h3>
              <p className="mt-2 text-sm text-night-soft">Garowe, Somalia</p>
            </div>
            <div className="rounded-2xl border border-line p-7">
              <h3 className="font-serif text-lg font-semibold text-night">Correspondence</h3>
              <a
                href="mailto:info@nomadsahan.org"
                className="mt-2 block text-sm font-medium text-clay hover:underline"
              >
                info@nomadsahan.org
              </a>
            </div>
            <div className="rounded-2xl border border-line bg-sand-deep p-7">
              <h3 className="font-serif text-lg font-semibold text-night">Ways to Engage</h3>
              <ul className="mt-3 space-y-2 text-sm text-night-soft">
                <li>Commission an independent MEL evaluation</li>
                <li>Propose a joint research initiative</li>
                <li>Request a policy briefing</li>
                <li>Support our field research network</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
