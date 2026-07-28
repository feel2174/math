import Link from "next/link";
import Container from "./Container";
import { partnerUrl } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border py-10">
      <Container className="flex flex-col gap-3 text-[13px] text-muted">
        <p className="font-semibold text-foreground">
          연산 문제지 활용법을 학년별로 정리합니다.
        </p>
        <p>
          문제지 자료는{" "}
          <Link
            href={partnerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            11math.com
          </Link>
          에서 받을 수 있습니다.
        </p>
        <p className="mt-4 text-muted/70">© {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
}
