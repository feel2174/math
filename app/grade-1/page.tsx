import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import AdSlot from "@/components/AdSlot";
import DataTable from "@/components/DataTable";
import GradeNav from "@/components/GradeNav";
import TopicLink from "@/components/TopicLink";

export const metadata: Metadata = {
  title: "초1 수학 공부법, 손가락은 언제 떼야 할까",
  description:
    "초1 연산은 속도보다 수 감각이다. 받아올림 전 손가락 셈 떼는 시점과 하루 분량 기준을 정리했다.",
  alternates: { canonical: "/grade-1" },
  openGraph: {
    title: "초1 수학 공부법, 손가락은 언제 떼야 할까",
    description:
      "초1 연산은 속도보다 수 감각이다. 받아올림 전 손가락 셈 떼는 시점과 하루 분량 기준을 정리했다.",
    url: "/grade-1",
  },
};

export default function Grade1() {
  return (
    <Container>
      <PageHero
        eyebrow="초1 수학 공부법"
        title="초1 수학 공부법, 손가락은 언제 떼야 할까"
        description="속도보다 수 감각이 먼저인 시기다."
      />

      <article className="article">
        <p>
          초1 수학 공부법을 검색하면 대부분 연산지 몇 장을 풀렸는지에 초점이
          맞다. 하지만 이 시기에 중요한 건 정답 속도가 아니라 숫자를 손으로,
          눈으로 느끼는 수 감각이다. 받아올림 있는 덧셈도 이때 처음 만난다.
          여기서 잡힌 습관이 이후 몇 년의 연산 태도를 좌우한다.
        </p>

        <ExternalCta
          heading="초1 연산 문제지가 필요하다면"
          description="11math.com에서 난이도별 초1 연산 문제지를 무료로 받을 수 있다."
        />

        <h2>초1에서 먼저 잡아야 할 것</h2>
        <p>
          손가락 셈을 떼는 시점과 받아올림 개념, 두 가지가 초1 연산의
          핵심이다. 각각 자세히 다뤘다.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <TopicLink
            href="/grade-1/counting-on-fingers"
            title="손가락 셈, 언제 떼야 할까"
            description="10 이내 수 구성 기준과 떼는 연습 3단계"
          />
          <TopicLink
            href="/grade-1/carrying"
            title="받아올림, 절차만 외우면 무너지는 이유"
            description="10 만들기 연습으로 개념부터 잡는 법"
          />
        </div>

        <AdSlot id="grade1-infeed-1" />

        <h2>초1 하루 학습 가이드</h2>
        <DataTable
          columns={["시기", "분량", "소요 시간", "중점"]}
          rows={[
            ["1학기 초", "반 장", "5~10분", "10 이내 수 구성"],
            ["1학기 말", "1장", "10~15분", "받아올림 준비"],
            ["2학기", "1장 내외", "15분", "받아올림 · 받아내림"],
          ]}
        />

        <p>
          분량을 무리하게 늘리기보다, 채점 후 왜 틀렸는지 한 문장이라도
          물어보는 쪽이 차이를 만든다. &quot;여기서 뭐가 헷갈렸어?&quot;
          질문 하나가 스스로 오류를 인식하는 첫 훈련이 된다. 이 습관은
          학년이 오르면{" "}
          <Link href="/odap-note" className="inline-link">
            오답노트
          </Link>{" "}
          작성으로
          자연스럽게 이어진다.
        </p>

        <AdSlot id="grade1-infeed-2" />

        <p>
          연산지 외에 수 세기 놀이, 보드게임 주사위 합 계산처럼 일상에서
          숫자를 다루는 경험도 병행한다. 문제지만으로 채우기보다 실생활 수
          감각 경험을 함께 쌓는 게 초1 연산의 기초 체력이다.
        </p>
        <p>
          연산지를 고를 때도 난이도 순서를 지킨다. 받아올림 없는 덧셈, 하나
          있는 덧셈, 여러 번 있는 덧셈 순으로 단계를 나눠 풀리면 매번 새
          벽을 만나지 않고 자신감을 쌓는다. 난이도가 뒤섞인 문제지를 그대로
          풀리면 쉬운 문제와 어려운 문제를 오가며 집중력이 흐트러진다.
          앞쪽은 복습, 뒤쪽은 새 유형으로 구성된 문제지를 고른다. 이 순서만
          지켜도 초2 이후 연산 학습이 한결 수월해진다.
        </p>
      </article>

      <GradeNav current={1} />
    </Container>
  );
}
