import Link from "next/link";
import Container from "./Container";
import { grades, odapNoteLink } from "@/lib/nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-surface/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 font-bold tracking-tight text-foreground"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white font-black text-base">
            M
          </span>
          <span className="text-lg">
            매쓰클리닉<span className="text-accent text-xs ml-1 font-semibold">AI</span>
          </span>
        </Link>
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="서비스 주요 메뉴"
        >
          <Link
            href="/#features"
            className="rounded-lg px-3 py-1.5 text-[14px] font-medium text-muted transition-colors hover:text-foreground hover:bg-surface-elevated"
          >
            특장점
          </Link>
          <Link
            href="/#process"
            className="rounded-lg px-3 py-1.5 text-[14px] font-medium text-muted transition-colors hover:text-foreground hover:bg-surface-elevated"
          >
            진단 프로세스
          </Link>
          <Link
            href="/#curriculum"
            className="rounded-lg px-3 py-1.5 text-[14px] font-medium text-muted transition-colors hover:text-foreground hover:bg-surface-elevated"
          >
            학년별 진단
          </Link>
          <Link
            href={odapNoteLink.href}
            className="rounded-lg px-3 py-1.5 text-[14px] font-medium text-muted transition-colors hover:text-foreground hover:bg-surface-elevated"
          >
            오답 분석기
          </Link>
          <Link
            href="/#pricing"
            className="rounded-lg px-3 py-1.5 text-[14px] font-medium text-muted transition-colors hover:text-foreground hover:bg-surface-elevated"
          >
            요금제
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/#trial"
            className="rounded-full bg-accent px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition hover:opacity-90 active:scale-95"
          >
            5분 무료 진단받기
          </Link>
        </div>
      </Container>
    </header>
  );
}

