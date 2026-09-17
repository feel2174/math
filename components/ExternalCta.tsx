import Link from "next/link";

export default function ExternalCta({
  heading = "우리 아이 연산 구멍 찾기",
  description = "5분 온라인 무료 진단으로 취약 단원을 확인하고 맞춤 처방지를 받아보세요.",
  label = "5분 무료 진단 신청하기",
  href = "/#trial",
}: {
  heading?: string;
  description?: string;
  label?: string;
  href?: string;
}) {
  return (
    <div className="not-prose my-8 rounded-2xl border border-accent/20 bg-accent-soft/50 p-5 sm:p-6">
      <p className="text-[15px] font-bold text-accent-strong">{heading}</p>
      <p className="mt-1.5 text-[14px] leading-relaxed text-foreground/80">
        {description}
      </p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-accent-strong shadow-xs"
      >
        {label}
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}

