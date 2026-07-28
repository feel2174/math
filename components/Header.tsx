import Link from "next/link";
import Container from "./Container";
import { grades, odapNoteLink } from "@/lib/nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-surface/85 backdrop-blur">
      <Container className="flex h-14 items-center justify-between gap-4">
        <Link
          href="/"
          className="shrink-0 text-[15px] font-bold tracking-tight text-foreground"
        >
          math<span className="text-accent">.</span>zucca100
        </Link>
        <nav
          className="flex min-w-0 gap-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="학년별 연산 가이드"
        >
          {grades.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="shrink-0 rounded-full px-2.5 py-1.5 text-[13px] font-medium text-muted transition-colors hover:bg-accent-soft hover:text-accent-strong"
            >
              {g.label}
            </Link>
          ))}
          <Link
            href={odapNoteLink.href}
            className="shrink-0 rounded-full px-2.5 py-1.5 text-[13px] font-medium text-accent transition-colors hover:bg-accent-soft"
          >
            오답노트
          </Link>
        </nav>
      </Container>
    </header>
  );
}
