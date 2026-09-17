import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "매쓰클리닉 개인정보처리방침 안내입니다.",
};

export default function PrivacyPage() {
  return (
    <Container className="py-12 max-w-3xl">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
        매쓰클리닉 개인정보처리방침
      </h1>

      <div className="text-sm leading-relaxed space-y-6 text-muted">
        <p>
          (주)매쓰클리닉(이하 "회사")은 정보주체의 자유와 권리 보호를 위해
          "개인정보 보호법" 및 관계 법령이 정한 바를 준수하여, 적법하게
          개인정보를 처리하고 안전하게 관리하고 있습니다.
        </p>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">
            1. 개인정보의 수집 및 이용 목적
          </h2>
          <p>
            회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는
            개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이
            변경되는 경우에는 사전동의를 구할 예정입니다.
            <br />
            - 초등 연산 AI 무료 진단 리포트 발송 및 맞춤 처방지 제공
            <br />
            - 서비스 이용에 따른 본인 식별 및 회원 관리
            <br />
            - 서비스 개선을 위한 학습 성취도 통계 분석
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">
            2. 수집하는 개인정보의 항목
          </h2>
          <p>
            - 필수항목: 학부모 이름, 휴대전화번호, 자녀 학년
            <br />
            - 선택항목: 자녀 연산 학습 이력, 관심 단원
            <br />
            - 서비스 이용 과정에서 생성되는 정보: 접속 IP, 쿠키, 서비스 이용 기록
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">
            3. 개인정보의 보유 및 이용 기간
          </h2>
          <p>
            원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를
            지체 없이 파기합니다. 단, 관계 법령의 규정에 의하여 보존할 필요가
            있는 경우 법령에서 정한 기간 동안 보관합니다.
            <br />
            - 계약 또는 청약철회 등에 관한 기록: 5년
            <br />
            - 소비자의 불만 또는 분쟁처리에 관한 기록: 3년
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">
            4. 개인정보 보호책임자
          </h2>
          <p>
            - 책임자: 김영주 (개인정보 처리책임자)
            <br />
            - 연락처: 1588-3490
            <br />
            - 이메일: feel2174@gmail.com
          </p>
        </section>

        <p className="text-xs text-muted/80 pt-4 border-t border-border">
          공고일자: 2026년 3월 1일 | 시행일자: 2026년 3월 1일
        </p>
      </div>
    </Container>
  );
}
