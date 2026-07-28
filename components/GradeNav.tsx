import Link from "next/link";
import { grades, odapNoteLink } from "@/lib/nav";

export default function GradeNav({ current }: { current?: number }) {
  return (
    <div className="not-prose mt-12 rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <p className="text-[13px] font-semibold text-muted">학년별 연산 가이드</p>
      <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
        {grades.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className={`rounded-lg py-2 text-center text-[14px] font-medium transition-colors ${
              g.grade === current
                ? "bg-accent text-white"
                : "bg-background text-foreground hover:bg-accent-soft hover:text-accent-strong"
            }`}
          >
            {g.label}
          </Link>
        ))}
      </div>
      <Link
        href={odapNoteLink.href}
        className="mt-3 flex items-center justify-between rounded-lg bg-background px-4 py-3 text-[14px] font-medium text-foreground transition-colors hover:bg-accent-soft hover:text-accent-strong"
      >
        오답노트 양식 무료 다운로드
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
