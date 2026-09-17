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
  title: "초5 수학 공부법, 약수·배수와 분수 통분의 최대 고비 넘기",
  description:
    "초등 수학의 70%가 좌절하는 초5 분수 단원. 공통분모 찾기와 약분·통분의 핵심 원리, 오답을 줄이는 1:1 맞춤 클리닉을 안내합니다.",
  alternates: { canonical: "/grade-5" },
  openGraph: {
    title: "초5 수학 공부법, 약수·배수와 분수 통분의 최대 고비 넘기",
    description:
      "초등 수학의 70%가 좌절하는 초5 분수 단원. 공통분모 찾기와 약분·통분의 핵심 원리, 오답을 줄이는 1:1 맞춤 클리닉을 안내합니다.",
    url: "/grade-5",
  },
};

export default function Grade5() {
  return (
    <Container>
      <PageHero
        eyebrow="초5 연산 정밀 진단"
        title="초5 수학 공부법, 초등 수학의 에베레스트 &lsquo;분수 통분&rsquo; 정복"
        description="약수와 배수, 약분과 통분, 분수의 사칙연산. 여기서 무너지면 중등 수학 전체가 붕괴합니다."
      />

      <article className="article">
        <p>
          초등학교 5학년은 단언컨대 <strong>&lsquo;초등 6년 중 가장 어려운 고비&rsquo;</strong>입니다.
          많은 아이들이 초4까지 90점대를 유지하다가 초5 1학기에 들어서면서 점수가 급락하고 수학을 포기하기 시작합니다.
          그 중심에는 <strong>약수와 배수</strong>, 그리고 이를 기반으로 분모가 다른 두 분수를 계산하는 <strong>통분(Common Denominator)과 약분</strong>이 있습니다.
        </p>

        <p>
          이 과정은 앞서 배운{" "}
          <Link href="/grade-2/times-table-order" className="inline-link font-semibold">
            구구단
          </Link>
          과{" "}
          <Link href="/grade-3/division-meaning" className="inline-link font-semibold">
            나눗셈
          </Link>
          , 그리고{" "}
          <Link href="/grade-3/fraction-intro" className="inline-link font-semibold">
            단위분수 개념
          </Link>
          이 유기적으로 총동원되어야만 풀 수 있는 고난도 융합 연산입니다.
          단순 요령이나 암기식으로 버티려 하면{" "}
          <Link href="/grade-6" className="inline-link font-semibold">
            초6 분수·소수 혼합 나눗셈
          </Link>
          과 중1 유리수 연산에서 회복 불가능한 타격을 입게 됩니다.
        </p>

        <ExternalCta
          heading="우리 아이, 초5 분수의 벽 앞에 서 있나요?"
          description="매쓰클리닉 AI 정밀 진단으로 통분 오류율, 기약분수 미약분 습관, 최소공배수 개념 결손을 5분 만에 확인하세요."
          label="초5 무료 AI 진단 시작하기"
          href="/#trial"
        />

        <h2>초5 연산의 승패를 가르는 2대 핵심 주제</h2>
        <p>
          분모를 맞추는 과정에서 아이들이 왜 실수하는지, 원리를 정확히 꿰뚫어야 합니다.
        </p>

        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <TopicLink
            href="/grade-5/common-denominator-mistakes"
            title="통분할 때 가장 흔히 하는 치명적 실수 3가지"
            description="분모끼리 그냥 더해버리는 오류, 최소공배수가 아닌 단순 곱으로 계산하다가 숫자가 폭발하는 문제 해결법"
          />
          <TopicLink
            href="/grade-5/reduce-and-common-denominator"
            title="약분과 통분, 소인수분해 원리로 쉽게 풀기"
            description="기약분수로 나타내지 않아 감점되는 원인 및 두 수의 공통 성분을 찾아내는 시각적 약분 기법"
          />
        </div>

        <h2>매쓰클리닉 AI가 포착한 초5 대표 오답 메커니즘</h2>
        <ul>
          <li>
            <strong>1. 분모끼리 더하는 오류:</strong> 1/2 + 1/3을 계산하라고 하면 (1+1)/(2+3) = 2/5라고 적어버리는
            어처구니없는 실수입니다. 피자 반 판과 3분의 1판을 합쳤는데 왜 2/5가 될 수 없는지 크기 모델링 감각이 결여되어 발생하는 현상입니다.
          </li>
          <li>
            <strong>2. 무조건 두 분모를 곱해서 통분하기:</strong> 분모가 12와 18일 때 최소공배수인 36을 찾지 않고
            12×18=216으로 무식하게 분모를 키워 계산하다가 계산 과정에서 곱셈·나눗셈 실수를 연발하는 경우입니다.
          </li>
          <li>
            <strong>3. 최종 답에서 기약분수 약분 누락:</strong> 계산을 끝까지 잘 해놓고도 답안에 6/8이나 4/10을 그대로 써서
            틀리는 습관입니다. 약분이 기계적 반사 신경으로 정착되어야 합니다.
          </li>
        </ul>

        <h2>초5 추천 하루 연산 루틴</h2>
        <DataTable
          columns={["단원 영역", "하루 권장량", "시간", "지도 핵심"]}
          rows={[
            ["약수와 배수", "1.5장", "15분", "나눗셈을 이용한 공약수·공배수 구하기"],
            ["약분과 통분", "1.5장 (15문항)", "18분", "공통분모 찾는 3가지 방법(최소공배수 활용 우선)"],
            ["분수의 덧셈·뺄셈", "1.5장 (15문항)", "20분", "대분수를 가분수로 고치거나 자연수/분수 분리 계산"],
            ["분수의 곱셈", "1장 (20문항)", "15분", "계산 전 대각선 방향 미리 약분하기 습관 정착"],
          ]}
        />

        <p>
          초5는 오답의 원인을 스스로 규명하는 메타인지가 결정적으로 필요한 시기입니다.{" "}
          <Link href="/odap-note" className="inline-link font-semibold">
            매쓰클리닉 오답 분석표
          </Link>
          에 통분 실수인지, 단순 곱셈 착오인지 표기하게 하세요.
        </p>

        {/* 계통 수학 브릿지 */}
        <CurriculumBridge
          title="초5 계통 수학 연계 로드맵"
          subtitle="초5 분수는 초등 수학의 종착역이자 중등 수학의 출발점입니다."
          items={[
            {
              grade: "이전 결손 점검",
              href: "/grade-3/fraction-intro",
              topic: "초3 분수 기초와 크기 감각",
              description: "통분이 도무지 이해되지 않는다면 초3 단위분수와 진분수의 양적 크기 감각을 복습해야 합니다.",
              type: "prev",
            },
            {
              grade: "다음 단계 연계",
              href: "/grade-6",
              topic: "초6 분수·소수 나눗셈과 비율",
              description: "초5 분수 연산이 탄탄해야 초6의 역수 곱셈과 비례식, 중등 유리수 사칙연산으로 자연스럽게 직결됩니다.",
              type: "next",
            },
            {
              grade: "오답 집중 클리닉",
              href: "/grade-5/common-denominator-mistakes",
              topic: "통분 오답 유형 심층 분석",
              description: "가장 많은 아이들이 오답을 내는 3대 통분 패턴을 분석하고 맞춤 교정지를 확인하세요.",
              type: "related",
            },
            {
              grade: "오답 관리 습관",
              href: "/odap-note",
              topic: "초5 고난도 오답 노트법",
              description: "약분 누락과 통분 연산 오답을 1주일 간격으로 재검산하는 4단계 오답 사이클입니다.",
              type: "related",
            },
          ]}
        />
      </article>

      <GradeNav current={5} />
    </Container>
  );
}
