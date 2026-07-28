import Link from "next/link";

export default function TopicLink({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col gap-1 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent-soft hover:bg-accent-soft/40"
    >
      <span className="text-[14px] font-semibold text-foreground">
        {title}
      </span>
      <span className="text-[13px] leading-relaxed text-muted">
        {description}
      </span>
      <span className="mt-1 text-[13px] font-medium text-accent">
        자세히 보기 →
      </span>
    </Link>
  );
}
