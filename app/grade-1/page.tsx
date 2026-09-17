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
  title: "초1 수학 공부법, 수 감각과 10의 보수로 시작하는 연산 로드맵",
  description:
    "초1 연산은 속도보다 수 감각입니다. 10의 보수 형성, 손가락 셈 떼는 시점, 받아올림 준비와 하루 권장 학습량을 정리했습니다.",
  alternates: { canonical: "/grade-1" },
  openGraph: {
    title: "초1 수학 공부법, 수 감각과 10의 보수로 시작하는 연산 로드맵",
    description:
      "초1 연산은 속도보다 수 감각입니다. 10의 보수 형성, 손가락 셈 떼는 시점, 받아올림 준비와 하루 권장 학습량을 정리했습니다.",
    url: "/grade-1",
  },
};

export default function Grade1() {
  return (
    <Container>
      <PageHero
        eyebrow="초1 연산 정밀 진단"
        title="초1 수학 공부법, 속도보다 수 감각이 먼저인 이유"
        description="받아올림과 손가락 셈의 갈림길. 초1에서 다져진 수 감각이 초등 6년의 수학 태도를 결정합니다."
      />

      <article className="article">
        <p>
          초등학교 1학년 학부모님들이 가장 흔하게 범하는 실수는 <strong>&lsquo;연산 문제지를 하루 몇 장 풀렸는가&rsquo;</strong>에
          매달리는 것입니다. 하지만 초1 시기의 수학은 단순 계산 속도를 겨루는 훈련이 아닙니다.
          숫자를 기호가 아닌 &lsquo;직관적인 양(Quantity)&rsquo;으로 받아들이는 <strong>수 감각(Number Sense)</strong>과
          10을 채우는 <strong>10의 보수 개념</strong>을 형성하는 결정적 시기입니다.
        </p>

        <p>
          여기서 원리를 건너뛰고 단순 암기식으로 세로셈을 시작하면, 당장은 100점을 받을지 몰라도{" "}
          <Link href="/grade-2" className="inline-link font-semibold">
            초2 두 자리 덧셈·뺄셈
          </Link>
          과{" "}
          <Link href="/grade-2/times-table-order" className="inline-link font-semibold">
            구구단
          </Link>
          에 들어서는 순간 두뇌의 과부하로 심각한 연산 지체 현상이 발생합니다.
        </p>

        <ExternalCta
          heading="우리 아이 초1 수 감각은 어느 수준일까요?"
          description="매쓰클리닉 5분 무료 AI 진단으로 손가락 의존도와 10의 보수 완성도를 정밀 측정해보세요."
          label="초1 무료 AI 진단 시작하기"
          href="/#trial"
        />

        <h2>초1 연산에서 반드시 완성해야 할 2대 핵심 주제</h2>
        <p>
          초1 교육과정에서 아이들이 가장 큰 인지적 장벽을 느끼는 영역은 손가락 셈 탈출과 받아올림 개념 도입입니다.
          매쓰클리닉에서는 이 두 가지 주제를 정밀 클리닉으로 분리하여 지도합니다.
        </p>

        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <TopicLink
            href="/grade-1/counting-on-fingers"
            title="손가락 셈, 언제 어떻게 떼야 할까"
            description="10 이내 직관적 수량 인지(Subitizing) 훈련과 단계별 손가락 탈출 3단계"
          />
          <TopicLink
            href="/grade-1/carrying"
            title="받아올림, 공식만 외우면 초2에서 무너진다"
            description="10 만들기 가르기와 모으기를 통한 십진법 자릿수 시각화 원리"
          />
        </div>

        <h2>매쓰클리닉 AI가 스캔하는 초1 3대 취약점 메커니즘</h2>
        <p>
          단순히 &lsquo;틀렸다&rsquo;로 끝내지 않고, 아이가 어떤 인지적 오류를 겪고 있는지 세밀하게 파악해야 합니다.
          초1 단계에서 자주 발생하는 세 가지 메커니즘은 다음과 같습니다.
        </p>

        <ul>
          <li>
            <strong>1. 이어 세기(Counting-on) 고착화:</strong> 7+4를 계산할 때 머릿속에서 &lsquo;7, 8, 9, 10, 11&rsquo;로
            하나씩 세고 있다면 아직 10의 보수(7+3=10) 분해가 이뤄지지 않은 상태입니다. 이는 수의 덩어리 계산을 방해합니다.
          </li>
          <li>
            <strong>2. 받아올림 1의 자리값 오인지:</strong> 8+5=13에서 1이 단순한 숫자 &lsquo;1&rsquo;이 아니라
            &lsquo;10 묶음 1개&rsquo;라는 십진 위치값을 체득하지 못하면,{" "}
            <Link href="/grade-4/place-value" className="inline-link">
              초4 큰 수와 자리값
            </Link>
            단원까지 자릿수 실수가 이어집니다.
          </li>
          <li>
            <strong>3. 오답에 대한 두려움:</strong> 틀린 문제를 지우개로 벅벅 지우고 정답만 다시 쓰는 습관은
            자신의 사고 오류를 검토할 기회를 박탈합니다. 초1부터{" "}
            <Link href="/odap-note" className="inline-link">
              초등 오답노트 습관
            </Link>
            을 &lsquo;틀린 이유 말해보기&rsquo;로 길러주어야 합니다.
          </li>
        </ul>

        <h2>초1 시기별 하루 학습량 및 공부 가이드</h2>
        <p>
          무리한 분량은 수학에 대한 거부감만 키웁니다. 집중력이 짧은 초1은 하루 10~15분, 딱 1장이면 충분합니다.
        </p>

        <DataTable
          columns={["학습 시기", "권장 분량", "적정 소요 시간", "중점 클리닉 영역"]}
          rows={[
            ["1학기 초", "반 장 (10문항 내외)", "5~10분", "5와 10 가르기·모으기, 구체물 수 놀이"],
            ["1학기 말", "1장 (15문항)", "10~12분", "10 이내 덧셈·뺄셈의 암산화 (2초 룰)"],
            ["2학기 초", "1장 (15문항)", "12~15분", "10을 이용한 덧셈 (8+3=8+2+1)"],
            ["2학기 말", "1장 (20문항)", "15분 이내", "받아내림이 있는 뺄셈 기초 및 서술형 1문항 병행"],
          ]}
        />

        <h2>초1 학부모를 위한 실천 코칭 3계명</h2>
        <ol>
          <li>
            <strong>계산 시간을 재며 재촉하지 마세요.</strong> 타이머를 켜두면 아이는 원리를 생각하기보다
            손가락을 더 빨리 펴려 하거나 찍는 습관이 듭니다. 속도는 원리가 정착되면 저절로 빨라집니다.
          </li>
          <li>
            <strong>바둑알, 동전, 계란판 등 구체물을 적극 활용하세요.</strong> 10칸 계란판에 탁구공을 넣으며
            7개에 3개가 더해져 10개가 꽉 차는 과정을 눈으로 보여주는 것이 문제집 100장보다 효과적입니다.
          </li>
          <li>
            <strong>틀린 문제 하나를 함께 분석하세요.</strong> &ldquo;어디서 생각이 멈췄어?&rdquo;라고 부드럽게 물어보고,
            아이가 스스로 &ldquo;7에서 3을 먼저 주고 1이 남았어요&rdquo;라고 설명할 수 있다면 그날 학습은 100점입니다.
          </li>
        </ol>

        {/* 학년간 단단한 계통 연계 브릿지 */}
        <CurriculumBridge
          title="초1 계통 수학 연계 로드맵"
          subtitle="초1 수 감각 결손은 초2, 초3으로 갈수록 눈덩이처럼 불어납니다. 앞뒤 단계를 함께 점검하세요."
          items={[
            {
              grade: "다음 학년 연계",
              href: "/grade-2",
              topic: "초2 두 자리 덧셈·뺄셈 & 구구단",
              description: "초1 10의 보수가 완벽해야 초2의 받아올림 세로셈과 묶어 세기(구구단)가 수월해집니다.",
              type: "next",
            },
            {
              grade: "세부 심화 가이드",
              href: "/grade-1/carrying",
              topic: "받아올림 원리 시각화 훈련",
              description: "십진 모형을 통해 10 묶음이 다음 자리로 넘어가는 과정을 체화하는 클리닉입니다.",
              type: "related",
            },
            {
              grade: "연계 취약점 점검",
              href: "/grade-3/division-meaning",
              topic: "초3 나눗셈과 역연산 기초",
              description: "초1 가르기 훈련의 완성도가 초3 묶음 나눗셈의 직관으로 직결됩니다.",
              type: "related",
            },
            {
              grade: "오답 관리 습관",
              href: "/odap-note",
              topic: "초등 연산 스마트 오답 리포트",
              description: "초1 때부터 오답을 기록하고 원인을 파악하는 아이는 고학년 분수에서 결코 무너지지 않습니다.",
              type: "related",
            },
          ]}
        />
      </article>

      <GradeNav current={1} />
    </Container>
  );
}
