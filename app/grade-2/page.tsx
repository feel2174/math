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
  title: "초2 수학 공부법, 두 자리 덧셈뺄셈과 구구단 원리 정복",
  description:
    "초2 연산의 핵심은 두 자리 받아올림 세로셈의 정착과 구구단 개념 이해입니다. 무작정 암기가 아닌 동수누가 원리와 단계별 지도법을 안내합니다.",
  alternates: { canonical: "/grade-2" },
  openGraph: {
    title: "초2 수학 공부법, 두 자리 덧셈뺄셈과 구구단 원리 정복",
    description:
      "초2 연산의 핵심은 두 자리 받아올림 세로셈의 정착과 구구단 개념 이해입니다. 무작정 암기가 아닌 동수누가 원리와 단계별 지도법을 안내합니다.",
    url: "/grade-2",
  },
};

export default function Grade2() {
  return (
    <Container>
      <PageHero
        eyebrow="초2 연산 정밀 진단"
        title="초2 수학 공부법, 두 자리 덧셈뺄셈과 구구단의 벽 넘기"
        description="받아올림 세로셈과 구구단 암기. 이 두 관문에서 연산의 체계가 잡히거나 거부감이 시작됩니다."
      />

      <article className="article">
        <p>
          초등학교 2학년은 수학 학습에서 <strong>&lsquo;본격적인 연산의 분수령&rsquo;</strong>을 맞이하는 해입니다.
          1학기에는 두 자리 수의 덧셈과 뺄셈에서 두 번 이상의 받아올림·받아내림을 만나고,
          2학기에는 평생 쓰게 될 <strong>구구단(곱셈구구)</strong>을 배웁니다.
        </p>

        <p>
          만약{" "}
          <Link href="/grade-1" className="inline-link font-semibold">
            초1 수 감각과 10의 보수
          </Link>
          가 충분히 여물지 않은 상태에서 초2 세로셈에 진입하면,
          아이는 받아올림한 숫자 &lsquo;1&rsquo;을 어디에 적어야 할지 몰라 헤매고,
          손가락을 몰래 펴느라 연산 시간이 3배 이상 늘어납니다.
          이는 고스란히{" "}
          <Link href="/grade-3" className="inline-link font-semibold">
            초3 나눗셈과 분수
          </Link>
          의 학습 포기로 이어집니다.
        </p>

        <ExternalCta
          heading="초2 연산의 두 기둥, 우리 아이 상태는?"
          description="매쓰클리닉 AI 정밀 진단으로 받아올림 누락 오류와 구구단 암기 체계를 5분 만에 진단해보세요."
          label="초2 무료 AI 진단 시작하기"
          href="/#trial"
        />

        <h2>초2 연산에서 완벽히 마스터해야 할 핵심 2대 주제</h2>
        <p>
          초2에서는 세로셈의 기계적 계산법보다 &lsquo;묶음의 원리&rsquo;를 이해하는 것이 훨씬 중요합니다.
        </p>

        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <TopicLink
            href="/grade-2/multiplication-concept"
            title="곱셈의 본질: 동수누가와 묶어 세기"
            description="3×4는 왜 3+3+3+3일까? 기계식 암기 대신 묶음 모델로 곱셈의 직관을 심어주는 법"
          />
          <TopicLink
            href="/grade-2/times-table-order"
            title="구구단 암기, 2단부터 순서대로 외우면 안 되는 이유"
            description="패턴이 쉬운 2·5단 → 4·8단 배수 관계 → 3·6·9단 → 난코스 7단 공략 로드맵"
          />
        </div>

        <h2>매쓰클리닉 AI가 포착하는 초2 대표 오답 메커니즘</h2>
        <p>
          초2 아이들의 오답지를 분석해보면 대다수가 다음 세 가지 인지적 함정에 빠져 있습니다.
        </p>

        <ul>
          <li>
            <strong>1. 받아올림 수 합산 누락:</strong> 일의 자리에서 7+8=15로 십의 자리에 1을 올려놓고도,
            정작 십의 자리(예: 3+4)를 계산할 때 올려둔 1을 더하지 않고 그냥 7로 적는 실수입니다.
            이는 시각적 공간 배치와 작업 기억(Working Memory)의 문제입니다.
          </li>
          <li>
            <strong>2. 작은 수에서 큰 수 빼기 오류:</strong> 52 - 27을 계산할 때, 일의 자리 2에서 7을 못 빼니
            무의식적으로 거꾸로 7 - 2 = 5로 적어버리는 전형적인 오류입니다.
            받아내림을 통해 십의 자리에서 10을 빌려오는 메커니즘을 구체물로 확인시켜 주어야 합니다.
          </li>
          <li>
            <strong>3. 구구단 1초 룰 실패:</strong> 7×8을 물었을 때 &ldquo;칠일은 칠, 칠이 십사...&rdquo; 하며
            처음부터 읊고 있다면 아직 장기기억으로 인출되지 않은 상태입니다.
            이는{" "}
            <Link href="/grade-3/division-meaning" className="inline-link">
              초3 나눗셈 세로셈
            </Link>
            을 풀 때 몫을 예측하지 못해 연산 속도가 극도로 느려지는 원인이 됩니다.
          </li>
        </ul>

        <h2>초2 하루 연산 학습 기준</h2>
        <DataTable
          columns={["시기", "권장 분량", "소요 시간", "핵심 클리닉 목표"]}
          rows={[
            ["1학기", "1장 (20문항)", "12~15분", "두 자리 덧셈·뺄셈 세로셈 자릿수 정렬 훈련"],
            ["여름방학", "1장 (묶음 놀이)", "10분", "동수누가(같은 수 더하기)로 곱셈 직관 형성"],
            ["2학기 초", "1~1.5장", "15분", "구구단 배수 규칙 파악 및 불규칙 구구 카드 게임"],
            ["2학기 말", "1장", "15분 이내", "구구단 랜덤 인출 (1초 즉답) 및 길이·시각 측정 연산"],
          ]}
        />

        <p>
          틀린 문제를 다룰 때는 아이를 나무라지 말고,{" "}
          <Link href="/odap-note" className="inline-link font-semibold">
            매쓰클리닉 오답 분석표
          </Link>
          를 활용하여 &lsquo;받아올림 실수인지&rsquo;, &lsquo;구구단 암기 오류인지&rsquo; 체크박스로 스스로 짚어보게 하세요.
          스스로 오류의 유형을 명명하는 순간 재발률이 절반으로 떨어집니다.
        </p>

        {/* 계통 수학 브릿지 */}
        <CurriculumBridge
          title="초2 계통 수학 연계 로드맵"
          subtitle="초2의 곱셈과 세로셈은 초등 고학년 수학의 기초 체력입니다. 전후 연계를 반드시 확인하세요."
          items={[
            {
              grade: "이전 결손 확인",
              href: "/grade-1/carrying",
              topic: "초1 10의 보수와 받아올림",
              description: "초2 두 자리 연산이 흔들린다면 초1 단계의 10 만들기 보수 연습을 다시 점검해야 합니다.",
              type: "prev",
            },
            {
              grade: "다음 단계 연계",
              href: "/grade-3",
              topic: "초3 나눗셈과 분수의 시작",
              description: "구구단이 즉답 수준으로 완성되어야 초3 나눗셈 구구와 분수 등분할 개념으로 순탄하게 진입합니다.",
              type: "next",
            },
            {
              grade: "핵심 세부 클리닉",
              href: "/grade-2/times-table-order",
              topic: "구구단 암기 전략 로드맵",
              description: "기계적 통암기가 아닌 두뇌 인지 패턴에 맞춘 효율적 구구단 정복 가이드입니다.",
              type: "related",
            },
            {
              grade: "고학년 연계 주의보",
              href: "/grade-4/accuracy-over-speed",
              topic: "초4 혼합계산과 정확도",
              description: "초2 때 형성된 암산 습관이 초4 복잡한 식에서 검산 불가능한 치명적 약점으로 변질되지 않도록 주의하세요.",
              type: "related",
            },
          ]}
        />
      </article>

      <GradeNav current={2} />
    </Container>
  );
}
