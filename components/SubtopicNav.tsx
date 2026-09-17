import Link from "next/link";

export function SubtopicBreadcrumb({
  gradeHref,
  gradeLabel,
}: {
  gradeHref: string;
  gradeLabel: string;
}) {
  return (
    <Link
      href={gradeHref}
      className="inline-flex items-center gap-1 text-[13px] font-medium text-muted transition-colors hover:text-accent-strong"
    >
      ← {gradeLabel} 전체 가이드
    </Link>
  );
}

export function SiblingLink({
  href,
  label,
  direction = "next",
}: {
  href: string;
  label: string;
  direction?: "prev" | "next";
}) {
  return (
    <Link
      href={href}
      className="not-prose mt-10 flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 text-[14px] font-medium text-foreground transition-colors hover:border-accent-soft hover:bg-accent-soft/40"
    >
      <span className="flex items-center gap-2">
        {direction === "prev" && <span aria-hidden="true">←</span>}
        <span>
          {direction === "prev" ? "이전 주제" : "이어서 보기"} · {label}
        </span>
      </span>
      {direction === "next" && <span aria-hidden="true">→</span>}
    </Link>
  );
}
