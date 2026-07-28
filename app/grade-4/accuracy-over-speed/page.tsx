import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import AdSlot from "@/components/AdSlot";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";

export const metadata: Metadata = {
  title: "초4 혼합계산, 속도보다 계산 순서가 먼저인 이유",
  description:
    "혼합계산은 계산 순서를 지키는 게 먼저다. 흔한 실수와 점검법을 정리했다.",
  alternates: { canonical: "/grade-4/accuracy-over-speed" },
  openGraph: {
    title: "초4 혼합계산, 속도보다 계산 순서가 먼저인 이유",
    description:
      "혼합계산은 계산 순서를 지키는 게 먼저다. 흔한 실수와 점검법을 정리했다.",
    url: "/grade-4/accuracy-over-speed",
  },
};

export default function AccuracyOverSpeed() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-4" gradeLabel="초4" />
      </div>
      <PageHero
        eyebrow="초4 수학 어려워요"
        title="초4 혼합계산, 속도보다 계산 순서가 먼저인 이유"
        description="규칙을 알아도 실제 문제에서 놓치는 경우가 흔하다."
      />

      <article className="article">
        <p>
          곱셈·나눗셈을 덧셈·뺄셈보다 먼저 계산해야 한다는 규칙을 알면서도
          실제 문제에서 순서를 놓치는 경우가 흔하다.
        </p>

        <h2>괄호부터, 곱셈·나눗셈 다음, 덧셈·뺄셈 마지막</h2>
        <p>
          혼합계산의 기본 순서다. 3+4×2를 왼쪽부터 순서대로 계산하면
          14가 나오지만, 규칙대로 곱셈을 먼저 하면 11이 맞다. 이 차이를
          직접 두 가지로 계산해보며 왜 순서가 중요한지 체감시킨다.
        </p>

        <h2>풀이 과정에 순서를 표시하게 한다</h2>
        <p>
          답만 확인하지 말고 어떤 부분을 먼저 계산했는지 번호나 동그라미로
          표시하게 한다. 순서를 의식하고 있는지 눈으로 확인할 수 있다.
          답이 틀렸을 때 순서 실수인지 계산 실수인지 구분하는 데도 도움이
          된다.
        </p>

        <ExternalCta
          heading="초4 혼합계산 문제지가 필요하다면"
          description="11math.com에서 큰 수 연산부터 혼합계산까지 단계별로 받을 수 있다."
        />

        <h2>흔한 실수 두 가지</h2>
        <p>
          괄호 안을 다 계산하지 않고 넘어가는 실수, 곱셈·나눗셈을 왼쪽부터
          순서대로 하지 않고 뒤섞어 계산하는 실수가 흔하다. 특히 나눗셈과
          곱셈이 같이 나오면 왼쪽에서 오른쪽 순서로 계산해야 하는데 이
          규칙을 놓치는 경우가 많다.
        </p>

        <AdSlot id="grade4-accuracy-infeed-1" />

        <p>
          속도가 느려진 것처럼 보여도 순서를 의식하는 과정이 늘어난
          것뿐이다. 정답률이 안정적으로 오르는지를 속도보다 먼저 본다.
        </p>
      </article>

      <SiblingLink
        href="/grade-4/place-value"
        label="큰 수 계산, 자릿수 정렬로 실수 줄이기"
      />

      <GradeNav current={4} />
    </Container>
  );
}
