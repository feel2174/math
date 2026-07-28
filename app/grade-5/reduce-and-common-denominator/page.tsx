import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import AdSlot from "@/components/AdSlot";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";

export const metadata: Metadata = {
  title: "초5 약분과 통분, 따로 연습해야 하는 이유",
  description: "약분과 통분을 섞어 연습하면 헷갈린다. 따로 잡는 연습 순서를 정리했다.",
  alternates: { canonical: "/grade-5/reduce-and-common-denominator" },
  openGraph: {
    title: "초5 약분과 통분, 따로 연습해야 하는 이유",
    description:
      "약분과 통분을 섞어 연습하면 헷갈린다. 따로 잡는 연습 순서를 정리했다.",
    url: "/grade-5/reduce-and-common-denominator",
  },
};

export default function ReduceAndCommonDenominator() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-5" gradeLabel="초5" />
      </div>
      <PageHero
        eyebrow="초5 분수 계산 · 약분 통분"
        title="초5 약분과 통분, 따로 연습해야 하는 이유"
        description="두 절차를 각각 잡은 뒤에 합쳐 쓴다."
      />

      <article className="article">
        <p>
          약분과 통분을 한 번에 섞어 연습하면 두 절차가 헷갈린다. 각각
          따로 손에 익힌 뒤 합쳐 쓰는 순서가 효과적이다.
        </p>

        <h2>약분부터 따로 잡는다</h2>
        <p>
          6/8을 3/4으로 줄이는 연습을 통분 없이 약분만 반복한다. 분모와
          분자의 공약수를 찾아 나누는 감각, 기약분수로 정리하는 감각을
          먼저 잡는다.
        </p>

        <h2>통분을 따로 잡는다</h2>
        <p>
          1/3과 1/4처럼 분모가 다른 두 분수를 같은 분모로 맞추는 연습을
          약분과 분리해서 반복한다. 최소공배수를 구하고, 분모와 분자에
          같은 수를 곱하는 절차에만 집중한다.
        </p>

        <ExternalCta
          heading="초5 약분·통분 문제지가 필요하다면"
          description="11math.com에서 약분과 통분을 단계별로 나눈 문제지를 받을 수 있다."
        />

        <h2>합쳐서 쓰는 건 마지막이다</h2>
        <p>
          두 절차가 각각 손에 익은 다음에야 덧셈·뺄셈 문제에서 통분하고
          계산한 뒤 약분까지 이어지는 전체 흐름을 연습한다. 처음부터 한
          문제에 다 넣으면 어느 단계에서 막혔는지도 알기 어렵다.
        </p>

        <AdSlot id="grade5-reduce-infeed-1" />

        <p>
          순서를 지켜 연습하면 실수가 났을 때 약분 문제인지 통분 문제인지
          바로 구분할 수 있다. 이 구분이 결국 학습 시간을 줄여준다.
        </p>
      </article>

      <SiblingLink
        href="/grade-5/common-denominator-mistakes"
        label="통분 실수 유형 3가지와 고치는 법"
      />

      <GradeNav current={5} />
    </Container>
  );
}
