import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import AdSlot from "@/components/AdSlot";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";

export const metadata: Metadata = {
  title: "초2 곱셈 개념, 구구단 암기 전에 먼저 잡아야 하는 이유",
  description:
    "곱셈이 무엇인지 모르고 구구단만 외우면 문장제에서 막힌다. 개념을 잡는 순서를 정리했다.",
  alternates: { canonical: "/grade-2/multiplication-concept" },
  openGraph: {
    title: "초2 곱셈 개념, 구구단 암기 전에 먼저 잡아야 하는 이유",
    description:
      "곱셈이 무엇인지 모르고 구구단만 외우면 문장제에서 막힌다. 개념을 잡는 순서를 정리했다.",
    url: "/grade-2/multiplication-concept",
  },
};

export default function MultiplicationConcept() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-2" gradeLabel="초2" />
      </div>
      <PageHero
        eyebrow="초2 구구단 외우기"
        title="초2 곱셈 개념, 구구단 암기 전에 먼저 잡아야 하는 이유"
        description="암기표보다 3+3+3+3이 먼저다."
      />

      <article className="article">
        <p>
          곱셈은 같은 수를 여러 번 더하는 것이다. 이 감각 없이 구구단표부터
          외우면 곱셈을 그냥 숫자 나열로 받아들인다.
        </p>

        <h2>3+3+3+3에서 3×4로</h2>
        <p>
          사탕 3개씩 담긴 봉지 4개를 3+3+3+3으로 먼저 세어보고, 그게
          3×4와 같다는 걸 눈으로 확인한다. 덧셈식과 곱셈식을 나란히
          써보면서 같은 값이라는 걸 반복해서 보여준다.
        </p>

        <h2>문장제에서 곱셈을 알아보는 연습</h2>
        <p>
          &quot;한 상자에 6개씩 5상자면?&quot; 같은 문제에서 어떤 연산을
          써야 할지 판단하는 연습이 필요하다. &quot;~씩 ~개&quot;라는
          표현이 곱셈 신호라는 걸 여러 문제로 반복해서 확인한다. 이 판단력이
          없으면 구구단을 다 외워도 언제 써야 할지 모른다.
        </p>

        <ExternalCta
          heading="구구단 익힘 문제지가 필요하다면"
          description="11math.com에서 곱셈 개념부터 구구단 암기용까지 단계별로 받을 수 있다."
        />

        <h2>그림으로 확인하기</h2>
        <p>
          배열판(가로세로로 점을 찍은 표)에 3×4를 표시해보면 가로 3개,
          세로 4줄이 곱이 된다는 걸 시각적으로 이해할 수 있다. 이 그림은
          나중에 나눗셈, 넓이 개념으로도 이어진다.
        </p>

        <AdSlot id="grade2-multiplication-infeed-1" />

        <p>
          이 개념 없이 시작한 암기는 오래가지 못한다. 며칠 걸리더라도
          곱셈이 무엇인지부터 확인하고 암기로 넘어간다.
        </p>
      </article>

      <SiblingLink
        href="/grade-2/times-table-order"
        label="구구단 암기 순서, 2단부터 9단까지"
      />

      <GradeNav current={2} />
    </Container>
  );
}
