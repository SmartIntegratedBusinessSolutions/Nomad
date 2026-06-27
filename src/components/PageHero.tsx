export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-line bg-sand-deep">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-night sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-night-soft">
          {description}
        </p>
      </div>
    </section>
  );
}
