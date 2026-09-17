import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-surface-elevated/40 py-12 text-[13px] text-muted">
      <Container className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border/60 pb-6">
          <div className="flex items-center gap-2 font-bold text-foreground">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-accent text-white font-black text-xs">
              M
            </span>
            <span className="text-base">매쓰클리닉 (MathClinic)</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <Link
              href="/terms"
              className="text-foreground hover:text-accent underline underline-offset-4"
            >
              이용약관
            </Link>
            <span className="text-border">|</span>
            <Link
              href="/privacy"
              className="text-foreground hover:text-accent font-semibold underline underline-offset-4"
            >
              개인정보처리방침
            </Link>
            <span className="text-border">|</span>
            <Link
              href="/#pricing"
              className="text-muted hover:text-foreground"
            >
              서비스 요금안내
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 leading-relaxed text-xs text-muted/90">
          <div>
            <p className="font-medium text-foreground mb-1">
              (주)매쓰클리닉 에듀테크 사업본부
            </p>
            <p>대표자: 김성현 | 개인정보 처리책임자: 김영주 (feel2174@gmail.com)</p>
            <p>사업자등록번호: 220-88-12345 | 통신판매업신고번호: 제 2026-서울강남-01234 호</p>
            <p>주소: 서울특별시 강남구 테헤란로 123 매쓰타워 4층</p>
          </div>
          <div className="md:text-right">
            <p className="font-medium text-foreground mb-1">고객센터 & 제휴문의</p>
            <p>고객센터: 1588-3490 (평일 09:00 ~ 18:00)</p>
            <p>이메일: contact@mathclinic.kr</p>
            <p className="mt-2 text-muted/70">
              © {new Date().getFullYear()} MathClinic Co., Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

