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
  title: "초2 구구단 외우기, 곱셈 개념이 먼저다",
  description:
    "초2 구구단은 암기 전에 곱셈 개념부터 잡아야 오래간다. 암기 순서와 하루 분량 기준을 정리했다.",
  alternates: { canonical: "/grade-2" },
  openGraph: {
    title: "초2 구구단 외우기, 곱셈 개념이 먼저다",
    description:
      "초2 구구단은 암기 전에 곱셈 개념부터 잡아야 오래간다. 암기 순서와 하루 분량 기준을 정리했다.",
    url: "/grade-2",
  },
};

export default function Grade2() {
  return (
    <Container>
      <PageHero
        eyebrow="초2 구구단 외우기"
        title="초2 구구단 외우기, 곱셈 개념이 먼저다"
        description="암기는 개념을 잡은 다음이다."
      />

      <article className="article">
        <p>
          초2 구구단은 여름방학 특훈처럼 몰아붙이는 과제가 되기 쉽다. 하지만
          노래처럼 외우기만 하고 곱셈 개념을 놓치면, 3학년 문장제에서 언제
          곱셈을 써야 할지 판단하지 못한다. 암기표를 채우기 전에 &quot;같은
          수를 여러 번 더하는 것&quot;이라는 감각부터 심어야 한다.
        </p>

        <h2>초2에서 먼저 잡아야 할 것</h2>
        <p>
          곱셈 개념을 먼저 잡는 법과 구구단 암기 순서, 두 가지를 자세히
          다뤘다.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <TopicLink
            href="/grade-2/multiplication-concept"
            title="곱셈 개념이 먼저, 암기는 그다음"
            description="3+3+3+3에서 3×4로 이어지는 감각 잡기"
          />
          <TopicLink
            href="/grade-2/times-table-order"
            title="구구단 암기 순서, 2단부터 9단까지"
            description="쉬운 단부터 잡고 어려운 단은 유도한다"
          />
        </div>

        <ExternalCta
          heading="구구단 익힘 문제지가 필요하다면"
          description="11math.com에서 곱셈 개념부터 구구단 암기용까지 단계별로 받을 수 있다."
        />

        <AdSlot id="grade2-infeed-1" />

        <h2>초2 하루 학습 가이드</h2>
        <DataTable
          columns={["단계", "분량", "소요 시간", "중점"]}
          rows={[
            ["도입", "반 장", "10분", "묶어 세기, 곱셈 개념"],
            ["암기 초반", "1장", "15분", "2, 5단"],
            ["암기 완성", "1~2장", "15~20분", "전체 단, 유도 계산"],
          ]}
        />

        <p>
          구구단은 시험처럼 외우게 하면 거부감이 커진다. 차 안, 목욕 시간처럼
          부담 없는 순간에 짧게 반복하는 쪽이 효과적이다. 문제지는 이렇게
          익힌 단을 확인하고 속도를 붙이는 용도로 쓴다.
        </p>

        <AdSlot id="grade2-infeed-2" />

        <p>
          구구단을 다 외웠다고 끝이 아니다. 곱셈구구를 활용한 간단한
          문장제를 함께 풀어야 개념이 자리 잡았는지 확인할 수 있다. 이
          단계를 건너뛰고 3학년 나눗셈으로 넘어가면 격차가 더 벌어진다. 초2
          2학기엔 곱셈 문장제 비중을 조금씩 늘린다.
        </p>
        <p>
          암기 속도는 아이마다 차이가 크다. 한 달이면 다 외우기도, 학기
          내내 걸리기도 한다. 옆집과 비교하는 대신 어제와 오늘을 비교해주는
          쪽이 효과적이다. 채점 후 틀린 문제는{" "}
          <Link href="/odap-note" className="inline-link">
            오답노트
          </Link>
          에 이유를 남겨두면 다음
          문제지에서 같은 실수가 준다.
        </p>
      </article>

      <GradeNav current={2} />
    </Container>
  );
}
