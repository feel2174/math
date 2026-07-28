import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import AdSlot from "@/components/AdSlot";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";

export const metadata: Metadata = {
  title: "초2 구구단 암기 순서, 2단부터 9단까지",
  description:
    "구구단을 어떤 순서로 외우면 부담이 줄어드는지 정리했다. 유도 계산법도 소개한다.",
  alternates: { canonical: "/grade-2/times-table-order" },
  openGraph: {
    title: "초2 구구단 암기 순서, 2단부터 9단까지",
    description:
      "구구단을 어떤 순서로 외우면 부담이 줄어드는지 정리했다. 유도 계산법도 소개한다.",
    url: "/grade-2/times-table-order",
  },
};

export default function TimesTableOrder() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-2" gradeLabel="초2" />
      </div>
      <PageHero
        eyebrow="초2 구구단 외우기"
        title="초2 구구단 암기 순서, 2단부터 9단까지"
        description="쉬운 단부터 잡고 어려운 단은 유도한다."
      />

      <article className="article">
        <p>
          구구단을 1단부터 순서대로 외우게 하면 오히려 부담이 크다. 쉬운
          단부터 잡고 어려운 단은 유도하는 순서가 효율적이다.
        </p>

        <h2>2단, 5단이 먼저다</h2>
        <p>
          2단은 짝수만 외우면 되고, 5단은 끝자리가 0과 5로만 끝나 규칙이
          뚜렷하다. 이 두 단으로 곱셈 감각과 자신감을 먼저 잡는다.
        </p>

        <h2>3단, 4단으로 확장</h2>
        <p>
          2단과 5단이 익숙해지면 3단, 4단으로 넘어간다. 아직 규칙이 단순한
          편이라 큰 무리 없이 이어진다.
        </p>

        <ExternalCta
          heading="구구단 익힘 문제지가 필요하다면"
          description="11math.com에서 곱셈 개념부터 구구단 암기용까지 단계별로 받을 수 있다."
        />

        <h2>어려운 단은 유도한다</h2>
        <p>
          7, 8, 9단은 통째로 외우기보다 이미 아는 단을 조합해 유도하는
          법을 알려준다. 7×8은 7×5(35)와 7×3(21)을 더한 값이다. 9단은
          10단에서 그 수를 빼는 방법도 있다(9×6 = 10×6-6). 새로 외우는
          대신 이미 아는 걸 조합하는 경험이 단순 반복 암기보다 오래 남는다.
        </p>

        <AdSlot id="grade2-times-table-infeed-1" />

        <p>
          다 외웠는지는 순서대로 물어보지 않는 게 좋다. 7×6처럼 무작위로
          물어봐서 1~2초 안에 답하면 자리 잡은 것이다. 순서대로만 외운
          경우 노래처럼 처음부터 불러야 답을 찾기도 한다.
        </p>
      </article>

      <SiblingLink
        href="/grade-2/multiplication-concept"
        label="곱셈 개념, 구구단 암기 전에 먼저 잡아야 하는 이유"
      />

      <GradeNav current={2} />
    </Container>
  );
}
