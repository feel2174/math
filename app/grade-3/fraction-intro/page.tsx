import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import AdSlot from "@/components/AdSlot";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";

export const metadata: Metadata = {
  title: "초3 분수, 처음 배울 때 꼭 잡아야 할 개념",
  description:
    "분수를 문제지로만 익히면 초5 통분에서 무너진다. 처음 배울 때 다뤄야 할 경험을 정리했다.",
  alternates: { canonical: "/grade-3/fraction-intro" },
  openGraph: {
    title: "초3 분수, 처음 배울 때 꼭 잡아야 할 개념",
    description:
      "분수를 문제지로만 익히면 초5 통분에서 무너진다. 처음 배울 때 다뤄야 할 경험을 정리했다.",
    url: "/grade-3/fraction-intro",
  },
};

export default function FractionIntro() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-3" gradeLabel="초3" />
      </div>
      <PageHero
        eyebrow="초3 나눗셈 · 분수 첫 도입"
        title="초3 분수, 처음 배울 때 꼭 잡아야 할 개념"
        description="표기보다 '똑같이 나눈 것'이라는 경험이 먼저다."
      />

      <article className="article">
        <p>
          &quot;전체를 똑같이 나눈 것 중 하나&quot;라는 등분할 개념을
          충분히 경험하지 못하면, 분수가 왜 자연수처럼 셈이 안 되는지
          이해하지 못한 채 넘어간다.
        </p>

        <h2>피자와 종이접기로 시작한다</h2>
        <p>
          피자 한 판을 4조각으로 나누고 그중 1조각이 1/4이라는 걸 눈으로
          확인한다. 종이를 반으로, 다시 반으로 접으며 1/2, 1/4을 직접
          만들어본다. 표기(1/4)는 이 경험 다음에 붙여준다.
        </p>

        <h2>똑같이 나눴는지가 핵심이다</h2>
        <p>
          4조각으로 나눴어도 크기가 다르면 분수로 표현할 수 없다.
          &quot;똑같이&quot;가 분수의 전제 조건이라는 걸 반복해서
          확인한다. 크기가 다른 조각과 같은 조각을 비교해보는 활동이
          도움이 된다.
        </p>

        <ExternalCta
          heading="초3 나눗셈 · 분수 문제지가 필요하다면"
          description="11math.com에서 등분제·포함제, 분수 개념별 문제지를 받을 수 있다."
        />

        <h2>크기 비교는 그림으로</h2>
        <p>
          1/2과 1/3 중 무엇이 큰지 헷갈리는 경우가 많다. 숫자가 클수록
          분수가 작아지는 이유(더 잘게 나눴으니까)를 그림으로 보여주면
          규칙을 억지로 외우지 않아도 이해한다.
        </p>

        <AdSlot id="grade3-fraction-infeed-1" />

        <p>
          이 경험이 부족한 채 1/2, 1/3 표기와 크기 비교를 문제지로만
          익히면, 초5 통분에서 그 공백이 그대로 드러난다. 초3 분수는
          어렵게 가르치기보다 손으로 충분히 다뤄보게 하는 게 핵심이다.
        </p>
      </article>

      <SiblingLink
        href="/grade-3/division-meaning"
        label="나눗셈, 등분제와 포함제 구분하는 법"
      />

      <GradeNav current={3} />
    </Container>
  );
}
