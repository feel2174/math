import Link from "next/link";

export default function ServiceCtaBanner({
  title = "우리 아이 연산 취약점, 5분이면 확인됩니다",
  description = "매쓰클리닉 AI 정밀 진단으로 자주 틀리는 오답 메커니즘을 찾고 하루 1장 맞춤 처방지를 받아보세요.",
  buttonText = "5분 무료 AI 진단 신청하기",
}: {
  title?: string;
  description?: string;
  buttonText?: string;
}) {
  return (
    <div className="not-prose my-10 rounded-2xl border border-accent/25 bg-accent-soft/40 p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="space-y-1">
        <span className="inline-block rounded bg-accent/15 px-2 py-0.5 text-xs font-bold text-accent">
          매쓰클리닉 AI 맞춤 솔루션
        </span>
        <h4 className="text-base sm:text-lg font-bold text-foreground">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-muted max-w-xl">
          {description}
        </p>
      </div>
      <Link
        href="/#trial"
        className="shrink-0 rounded-full bg-accent px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition hover:opacity-90 active:scale-95 text-center"
      >
        {buttonText} →
      </Link>
    </div>
  );
}
