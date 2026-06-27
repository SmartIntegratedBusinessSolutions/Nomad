export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-night sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-night-soft">
          {description}
        </p>
      )}
    </div>
  );
}
