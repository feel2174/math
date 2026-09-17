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
  title: "초3 수학 공부법, 나눗셈 개념과 분수 첫걸음 완전 정복",
  description:
    "초3은 수포자 1차 위기 구간입니다. 나눗셈의 두 가지 의미(포함제·등분제)와 분수의 등분할 개념, 초4·초5로 이어지는 연산 맥락을 정리했습니다.",
  alternates: { canonical: "/grade-3" },
  openGraph: {
    title: "초3 수학 공부법, 나눗셈 개념과 분수 첫걸음 완전 정복",
    description:
      "초3은 수포자 1차 위기 구간입니다. 나눗셈의 두 가지 의미(포함제·등분제)와 분수의 등분할 개념, 초4·초5로 이어지는 연산 맥락을 정리했습니다.",
    url: "/grade-3",
  },
};

export default function Grade3() {
  return (
    <Container>
      <PageHero
        eyebrow="초3 연산 정밀 진단"
        title="초3 수학 공부법, 나눗셈과 분수의 장벽을 넘는 법"
        description="자연수에서 분수로 세계관이 확장되는 결정적 해. 나눗셈의 원리와 분수 직관이 고학년 수학을 좌우합니다."
      />

      <article className="article">
        <p>
          수학교육 전문가들이 입을 모아 <strong>&lsquo;초등 수학의 1차 급격한 단절 구간&rsquo;</strong>으로 꼽는 학년이 바로 초등학교 3학년입니다.
          초1~2까지는 사탕을 세듯 눈에 보이는 <strong>자연수의 세계</strong>였다면,
          초3부터는 하나의 사물을 쪼개는 <strong>분수(Fraction)</strong>와 곱셈의 역연산인 <strong>나눗셈(Division)</strong>이라는
          추상적 개념이 본격 등장합니다.
        </p>

        <p>
          이 시기 아이들이 겪는 혼란의 뿌리를 거슬러 올라가면 대부분{" "}
          <Link href="/grade-2/times-table-order" className="inline-link font-semibold">
            초2 구구단 인출 속도
          </Link>
          가 불안정하거나, 나눗셈을 단순 계산 공식으로만 외웠기 때문입니다.
          원리 이해 없이 요령만 익히면{" "}
          <Link href="/grade-5" className="inline-link font-semibold">
            초5 분수의 덧셈과 뺄셈
          </Link>
          에서 100% 수포자 대열에 합류하게 됩니다.
        </p>

        <ExternalCta
          heading="우리 아이, 나눗셈과 분수 개념이 바로 서 있을까요?"
          description="매쓰클리닉 5분 AI 진단으로 몫과 나머지의 이해도 및 분수 감각을 정밀 진단받아보세요."
          label="초3 무료 AI 진단 시작하기"
          href="/#trial"
        />

        <h2>초3에서 반드시 짚고 넘어가야 할 2대 핵심 단원</h2>
        <p>
          단순히 몫을 구하는 기술이 아니라 문장제 속에서 나눗셈과 분수의 의미를 직관적으로 떠올릴 수 있어야 합니다.
        </p>

        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <TopicLink
            href="/grade-3/division-meaning"
            title="나눗셈의 두 얼굴: 묶기와 똑같이 나누기"
            description="사탕 12개를 3명에게 나누기(등분제) vs 3개씩 묶어 담기(포함제)의 시각화 원리"
          />
          <TopicLink
            href="/grade-3/fraction-intro"
            title="분수의 첫걸음: 전체에 대한 부분의 크기"
            description="1/3은 왜 3개 중 하나일까? 단위분수와 진분수를 피자 모형으로 직관 이해하기"
          />
        </div>

        <h2>매쓰클리닉 AI가 분석한 초3 주요 오답 패턴</h2>
        <ul>
          <li>
            <strong>1. 나머지 조건 망각 오류:</strong> 나눗셈에서 &lsquo;나머지는 항상 나누는 수보다 작아야 한다&rsquo;는
            기본 원칙을 잊고, 23÷4 = 4 나머지 7처럼 몫을 과소평가하여 오답을 내는 현상입니다.
            이는 구구단에서 4의 배수 중 23에 가장 가까운 4×5=20을 능동적으로 찾아내는 훈련이 부족하기 때문입니다.
          </li>
          <li>
            <strong>2. 분수와 자연수의 크기 혼동:</strong> 1/2과 1/4 중 분모가 더 큰 1/4이 더 크다고 대답하는 오류입니다.
            초1~2 동안 굳어진 &lsquo;숫자가 크면 더 많다&rsquo;는 자연수 직관이 분모의 &lsquo;등분 횟수&rsquo; 개념과 충돌하는 전형적 사례입니다.
          </li>
          <li>
            <strong>3. 문장제 식 세우기 불능:</strong> &ldquo;연필 24자루를 한 상자에 6자루씩 넣으면 몇 상자가 될까요?&rdquo;를
            읽고 24+6이나 24×6을 무작정 시도하는 경우입니다.
            상황을 그림으로 그리는 모델링 훈련과{" "}
            <Link href="/odap-note" className="inline-link">
              오답노트를 통한 문맥 파악
            </Link>
            이 절실한 시점입니다.
          </li>
        </ul>

        <h2>초3 하루 학습 플랜 및 시간 배분</h2>
        <DataTable
          columns={["학습 영역", "하루 권장량", "연산 vs 사고력 비중", "지도 중점"]}
          rows={[
            ["나눗셈 기초", "1.5장 (25문항)", "연산 70% : 문장제 30%", "나머지가 있는 나눗셈 구구 역연산 훈련"],
            ["분수 도입", "1장 (개념+그림)", "연산 50% : 개념 50%", "단위분수 크기 비교, 수직선 위에 분수 찍기"],
            ["두 자리 곱셈", "1장 (20문항)", "연산 80% : 문장제 20%", "자릿값 맞추기(십의 자리 곱할 때 0 채우기)"],
            ["길이와 시간", "반 장 (서술형)", "연산 40% : 개념 60%", "60진법 시간 덧셈·뺄셈 자릿수 변환"],
          ]}
        />

        {/* 계통 수학 브릿지 */}
        <CurriculumBridge
          title="초3 계통 수학 연계 로드맵"
          subtitle="초3의 나눗셈과 분수는 초4 혼합계산과 초5 통분의 직속 모태입니다."
          items={[
            {
              grade: "이전 결손 점검",
              href: "/grade-2/times-table-order",
              topic: "초2 구구단 1초 즉답 훈련",
              description: "나눗셈 몫 찾기가 3초 이상 걸린다면 초2 구구단의 인출 속도를 먼저 끌어올려야 합니다.",
              type: "prev",
            },
            {
              grade: "다음 단계 연계",
              href: "/grade-4",
              topic: "초4 자연수 혼합계산과 큰 수",
              description: "초3 나눗셈과 곱셈이 자유자재로 다뤄져야 초4의 복잡한 괄호 혼합계산 식을 해결할 수 있습니다.",
              type: "next",
            },
            {
              grade: "고학년 분수 예방",
              href: "/grade-5/reduce-and-common-denominator",
              topic: "초5 약분과 통분 클리닉",
              description: "초3의 단위분수 개념이 잡혀있어야 초5의 이분모 덧셈·뺄셈 통분을 암기가 아닌 원리로 해결합니다.",
              type: "related",
            },
            {
              grade: "오답 자가 처방",
              href: "/odap-note",
              topic: "초3 맞춤 오답 분류법",
              description: "계산 실수인지, 몫과 나머지의 개념 오해인지 체크하여 쌍둥이 문제로 즉시 보완하세요.",
              type: "related",
            },
          ]}
        />
      </article>

      <GradeNav current={3} />
    </Container>
  );
}
