import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "서비스 이용약관",
  description: "매쓰클리닉 서비스 이용약관 안내입니다.",
};

export default function TermsPage() {
  return (
    <Container className="py-12 max-w-3xl">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
        매쓰클리닉 서비스 이용약관
      </h1>

      <div className="text-sm leading-relaxed space-y-6 text-muted">
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">
            제 1 조 (목적)
          </h2>
          <p>
            본 약관은 (주)매쓰클리닉(이하 "회사")이 제공하는 초등 연산 AI
            취약점 진단 및 1:1 맞춤 처방 솔루션 및 제반 서비스(이하
            "서비스")의 이용조건 및 절차, 회사와 회원 간의 권리,
            의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">
            제 2 조 (용어의 정의)
          </h2>
          <p>
            1. "서비스"란 회사가 이용자에게 제공하는 온라인 연산 진단,
            AI 학습 분석 리포트, 맞춤 문제지 생성 및 학습 관리 소프트웨어를
            말합니다.
            <br />
            2. "이용자"란 본 약관에 따라 회사가 제공하는 서비스를
            이용하는 회원 및 비회원을 말합니다.
            <br />
            3. "회원"이라 함은 회사에 개인정보를 제공하여 회원등록을 한
            자로서, 회사의 정보를 지속적으로 제공받으며 회사가 제공하는 서비스를
            계속적으로 이용할 수 있는 자를 말합니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">
            제 3 조 (약관의 효력 및 변경)
          </h2>
          <p>
            1. 본 약관은 서비스 초기 화면 또는 연결화면에 게시함으로써 효력이
            발생합니다.
            <br />
            2. 회사는 "약관의 규제에 관한 법률", "정보통신망 이용촉진
            및 정보보호 등에 관한 법률" 등 관련 법령을 위배하지 않는 범위에서
            본 약관을 개정할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">
            제 4 조 (서비스의 제공 및 요금 결제)
          </h2>
          <p>
            1. 회사는 5분 무료 AI 진단 서비스를 기본 제공하며, 정기구독 및 심화
            1:1 첨삭 솔루션은 유료 플랜으로 운영됩니다.
            <br />
            2. 유료 서비스의 결제 취소 및 환불은 전자상거래 등에서의
            소비자보호에 관한 법률 등 관련 법령에 따릅니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">
            제 5 조 (회사의 의무)
          </h2>
          <p>
            1. 회사는 지속적이고 안정적인 서비스의 제공을 위해 최선을 다합니다.
            <br />
            2. 회사는 회원의 개인정보를 본인의 승낙 없이 제3자에게 누설,
            배포하지 않으며, 관련 법령을 준수합니다.
          </p>
        </section>

        <p className="text-xs text-muted/80 pt-4 border-t border-border">
          공고일자: 2026년 3월 1일 | 시행일자: 2026년 3월 1일
        </p>
      </div>
    </Container>
  );
}
