import Link from "next/link";

interface BridgeItem {
  grade: string;
  href: string;
  topic: string;
  description: string;
  type: "prev" | "next" | "related";
}

export default function CurriculumBridge({
  title = "계통 수학 연계 학습 가이드",
  subtitle = "초등 연산은 나선형 구조입니다. 앞선 개념에 구멍이 있으면 다음 단계에서 반드시 무너집니다.",
  items,
}: {
  title?: string;
  subtitle?: string;
  items: BridgeItem[];
}) {
  return (
    <div className="not-prose my-10 rounded-2xl border border-border bg-surface-elevated/50 p-6 sm:p-7">
      <div className="mb-4">
        <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white text-xs font-black">
            ⇄
          </span>
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-muted mt-1">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {items.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="group block rounded-xl border border-border bg-surface p-4 transition-all hover:border-accent/40 hover:shadow-xs"
          >
            <div className="flex items-center justify-between text-xs font-semibold mb-1">
              <span
                className={`rounded px-1.5 py-0.5 text-[11px] font-bold ${
                  item.type === "prev"
                    ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                    : item.type === "next"
                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                    : "bg-accent/10 text-accent"
                }`}
              >
                {item.type === "prev"
                  ? "← 이전 결손 점검"
                  : item.type === "next"
                  ? "다음 단계 연계 →"
                  : "★ 핵심 오답 클리닉"}
              </span>
              <span className="text-muted group-hover:text-foreground">
                {item.grade}
              </span>
            </div>
            <p className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">
              {item.topic}
            </p>
            <p className="text-xs text-muted mt-1 leading-snug">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
