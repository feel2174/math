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
  title: "초5 분수 계산, 통분에서 갈린다",
  description:
    "초5 분수 계산은 통분에서 막히면 그 뒤로 다 막힌다. 흔한 실수 세 가지와 연습 순서를 정리했다.",
  alternates: { canonical: "/grade-5" },
  openGraph: {
    title: "초5 분수 계산, 통분에서 갈린다",
    description:
      "초5 분수 계산은 통분에서 막히면 그 뒤로 다 막힌다. 흔한 실수 세 가지와 연습 순서를 정리했다.",
    url: "/grade-5",
  },
};

export default function Grade5() {
  return (
    <Container>
      <PageHero
        eyebrow="초5 분수 계산 · 약분 통분"
        title="초5 분수 계산, 통분에서 갈린다"
        description="약분과 통분을 따로 잡아야 실수가 준다."
      />

      <article className="article">
        <p>
          초5는 분수 계산이 본격화되는 학년이다. 덧셈·뺄셈은 물론
          곱셈·나눗셈까지 분수로 다뤄야 하고, 모든 계산의 출발점이 약분과
          통분이다. 초3 분수 개념이 부실하면 이 시기에 공백이 그대로
          드러난다.
        </p>

        <ExternalCta
          heading="초5 약분·통분 문제지가 필요하다면"
          description="11math.com에서 약분과 통분을 단계별로 나눈 문제지를 받을 수 있다."
        />

        <h2>초5에서 먼저 잡아야 할 것</h2>
        <p>
          통분에서 반복되는 실수 유형과 약분·통분을 따로 연습하는 순서를
          자세히 다뤘다.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <TopicLink
            href="/grade-5/common-denominator-mistakes"
            title="통분 실수 유형 3가지와 고치는 법"
            description="어느 단계에서 틀렸는지 구분하면 연습이 빨라진다"
          />
          <TopicLink
            href="/grade-5/reduce-and-common-denominator"
            title="약분과 통분, 따로 연습해야 하는 이유"
            description="두 절차를 각각 잡은 뒤에 합쳐 쓴다"
          />
        </div>

        <AdSlot id="grade5-infeed-1" />

        <h2>초5 하루 학습 가이드</h2>
        <DataTable
          columns={["영역", "분량", "소요 시간", "비고"]}
          rows={[
            ["약분 집중", "1장", "15분", "기약분수 정리 습관"],
            ["통분 집중", "1장", "15분", "최소공배수 확인"],
            ["분수 사칙연산", "1장", "15~20분", "약분 · 통분 통합 적용"],
          ]}
        />

        <p>
          통분 문제를 틀렸을 땐 어느 단계에서 실수했는지 구분해서 본다.
          공배수를 잘못 구했는지, 분자를 안 곱했는지, 약분을 빠뜨렸는지에
          따라 다시 연습할 부분이 다르다.{" "}
          <Link href="/odap-note" className="inline-link">
            오답노트
          </Link>
          에 어느 단계 실수인지
          표시해두면 같은 실수를 반복하지 않는다.
        </p>

        <AdSlot id="grade5-infeed-2" />

        <p>
          자신 없어 할수록 자연수 계산으로 검산하는 습관이 도움이 된다.
          1/2 + 1/3을 계산한 뒤 어림으로 1보다 작아야 한다는 감각을 먼저
          세우고 결과와 비교한다. 절차만 기계적으로 따라가면 답이 터무니없이
          커지거나 작아져도 못 느끼는 경우가 많은데, 어림 감각을 함께
          기르면 스스로 실수를 알아챈다.
        </p>
      </article>

      <GradeNav current={5} />
    </Container>
  );
}
