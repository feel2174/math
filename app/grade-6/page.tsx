import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import DataTable from "@/components/DataTable";
import GradeNav from "@/components/GradeNav";
import TopicLink from "@/components/TopicLink";
import CurriculumBridge from "@/components/CurriculumBridge";

export const metadata: Metadata = {
  title: "초6 수학 공부법, 분수 나눗셈 역수 원리와 중등 연계 총정리",
  description:
    "초등 연산의 완성기이자 중등 수학의 관문. 나누기를 곱하기 역수로 바꾸는 본질적 이유와 비와 비율, 중1 입학 전 필수 결손 점검 체크리스트를 안내합니다.",
  alternates: { canonical: "/grade-6" },
  openGraph: {
    title: "초6 수학 공부법, 분수 나눗셈 역수 원리와 중등 연계 총정리",
    description:
      "초등 연산의 완성기이자 중등 수학의 관문. 나누기를 곱하기 역수로 바꾸는 본질적 이유와 비와 비율, 중1 입학 전 필수 결손 점검 체크리스트를 안내합니다.",
    url: "/grade-6",
  },
};

export default function Grade6() {
  return (
    <Container>
      <PageHero
        eyebrow="초6 연산 정밀 진단"
        title="초6 수학 공부법, 분수 나눗셈의 원리와 중등 수학 브릿지"
        description="초등 연산 총완성과 중학교 입학 전 결손 점검. 비와 비율, 역수 계산의 개념을 단단하게 다집니다."
      />

      <article className="article">
        <p>
          초등학교 6학년은 <strong>&lsquo;초등 연산의 총정리이자 중등 수학을 여는 열쇠&rsquo;</strong>입니다.
          이 시기에는 분수와 소수의 나눗셈이라는 대수적 연산과,
          생활 속 수량 관계를 다루는 <strong>비와 비율(Ratio and Proportion)</strong>,
          그리고 원의 둘레와 넓이(원주율 3.14 계산) 등 복합적인 수학 영역을 다룹니다.
        </p>

        <p>
          아이들이 분수의 나눗셈을 배울 때 가장 흔하게 저지르는 실수는 <strong>&lsquo;나누기를 곱하기로 바꾸고 분모·분자를 뒤집는다&rsquo;</strong>는
          기계적 규칙만 달달 외워 푸는 것입니다.
          왜 뒤집어 곱해야 하는지의 수학적 원리를 이해하지 못하면,{" "}
          <Link href="/grade-6/ratio-new-language" className="inline-link font-semibold">
            비와 비율
          </Link>
          과 중학교 1학년 일차방정식 활용(소금물 농도, 속력 문제)에서 문장제를 전혀 해석하지 못하게 됩니다.
        </p>

        <ExternalCta
          heading="중학교 입학 전, 초등 연산에 구멍은 없을까요?"
          description="매쓰클리닉 AI 정밀 진단으로 초6 필수 5대 영역 결손도를 측정하고 중등 대비 맞춤 처방지를 받아보세요."
          label="초6 무료 AI 진단 시작하기"
          href="/#trial"
        />

        <h2>초6에서 반드시 완성해야 할 2대 핵심 관문</h2>
        <p>
          단순 계산을 넘어 수의 비례 관계를 언어와 식으로 자유자재로 표현할 수 있어야 합니다.
        </p>

        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <TopicLink
            href="/grade-6/ratio-new-language"
            title="비와 비율, 단순 계산이 아닌 &lsquo;새로운 수의 언어&rsquo;"
            description="기준량과 비교하는 양의 본질, 백분율(%)과 비례식 세우기가 중등 함수와 과학으로 이어지는 길목"
          />
          <TopicLink
            href="/grade-6/pre-middle-checklist"
            title="중등 입학 전 반드시 확인할 5대 연산 결손 체크리스트"
            description="초등 6년 연산 중 중학교 1학년 1학기 내신을 결정짓는 핵심 결손 포인트 자가진단"
          />
        </div>

        <h2>매쓰클리닉 AI가 포착한 초6 대표 오답 메커니즘</h2>
        <ul>
          <li>
            <strong>1. 나누어지는 수까지 거꾸로 뒤집는 오류:</strong> 3/4 ÷ 2/5를 계산할 때, 뒤의 수만 역수로
            바꿔야 하는데 앞의 3/4까지 4/3으로 뒤집어버리는 기계적 조작 오류입니다.
          </li>
          <li>
            <strong>2. 기준량과 비교하는 양의 전도:</strong> &ldquo;남학생 12명에 대한 여학생 15명의 비&rdquo;를
            12:15로 거꾸로 쓰거나 비율 계산 시 분모/분자 위치를 착각하는 언어적 개념 오류입니다.
          </li>
          <li>
            <strong>3. 원주율(3.14) 소수점 계산 누적 실수:</strong> 복잡한 도형 문제에서 공식은 다 알아놓고
            마지막에 소수 두 자리 곱셈(예: 36 × 3.14)에서 단순 자리수 계산 착오로 오답을 내는 아쉬운 사례입니다.
          </li>
        </ul>

        <h2>초6 중등 대비 연산 학습 배분</h2>
        <DataTable
          columns={["단원 영역", "하루 권장량", "시간", "중등 연계 핵심"]}
          rows={[
            ["분수·소수 나눗셈", "1.5장 (15문항)", "15분", "역수 곱셈 원리 이해 및 혼합 계산"],
            ["비와 비율 / 비례배분", "1장 (문장제 포함)", "18분", "비례식 성질(외항의 곱 = 내항의 곱)"],
            ["원의 넓이와 둘레", "1장", "15분", "소수점 정밀 계산 및 원주율 π의 개념 예습"],
            ["중등 입학 대비 총복습", "1장 (약점 처방)", "15분", "초등 6년 연산 오답노트 취약 유형 누적 재확인"],
          ]}
        />

        <p>
          초6의 오답은 곧 중1 첫 중간고사의 점수입니다.{" "}
          <Link href="/odap-note" className="inline-link font-semibold">
            매쓰클리닉 스마트 오답 리포트
          </Link>
          를 활용하여 초1부터 초6까지 쌓인 연산 구멍을 단번에 봉합하세요.
        </p>

        {/* 계통 수학 브릿지 */}
        <CurriculumBridge
          title="초6 계통 수학 연계 로드맵"
          subtitle="초6 연산은 중등 수학의 튼튼한 발판입니다. 이전 결손을 점검하고 중등 과정을 준비하세요."
          items={[
            {
              grade: "이전 결손 점검",
              href: "/grade-5/reduce-and-common-denominator",
              topic: "초5 분수 통분과 약분 완성",
              description: "분수 나눗셈의 결과값을 기약분수로 나타내지 못한다면 초5 약분·통분 단원을 즉시 점검해야 합니다.",
              type: "prev",
            },
            {
              grade: "중등 연계 체크",
              href: "/grade-6/pre-middle-checklist",
              topic: "중1 수학 필수 연산 자가진단",
              description: "유리수의 사칙연산, 음수의 계산, 문자와 식을 대비하기 위해 꼭 갖춰야 할 5대 역량입니다.",
              type: "next",
            },
            {
              grade: "개념 심화 가이드",
              href: "/grade-6/ratio-new-language",
              topic: "비와 비율의 개념적 정복",
              description: "중학교 1학년 일차방정식 활용과 중2 일차함수의 기울기 개념으로 직결되는 비율의 본질입니다.",
              type: "related",
            },
            {
              grade: "오답 종합 처방",
              href: "/odap-note",
              topic: "초등 연산 최종 오답 클리닉",
              description: "초등 6년 동안 반복되었던 고질적인 계산 실수 패턴을 진단하고 완벽하게 교정하는 방법입니다.",
              type: "related",
            },
          ]}
        />
      </article>

      <GradeNav current={6} />
    </Container>
  );
}
