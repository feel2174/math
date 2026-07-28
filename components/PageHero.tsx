export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <div className="pt-10 pb-8 sm:pt-14 sm:pb-10">
      {eyebrow ? (
        <p className="text-[13px] font-semibold text-accent">{eyebrow}</p>
      ) : null}
      <h1 className="mt-2 text-[26px] font-extrabold leading-tight tracking-tight text-foreground sm:text-[30px]">
        {title}
      </h1>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">
        {description}
      </p>
    </div>
  );
}
