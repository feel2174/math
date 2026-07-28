import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import AdSlot from "@/components/AdSlot";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";

export const metadata: Metadata = {
  title: "초5 통분 실수 유형 3가지와 고치는 법",
  description: "통분에서 반복되는 세 가지 실수와 각각의 교정법을 정리했다.",
  alternates: { canonical: "/grade-5/common-denominator-mistakes" },
  openGraph: {
    title: "초5 통분 실수 유형 3가지와 고치는 법",
    description:
      "통분에서 반복되는 세 가지 실수와 각각의 교정법을 정리했다.",
    url: "/grade-5/common-denominator-mistakes",
  },
};

export default function CommonDenominatorMistakes() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-5" gradeLabel="초5" />
      </div>
      <PageHero
        eyebrow="초5 분수 계산 · 약분 통분"
        title="초5 통분 실수 유형 3가지와 고치는 법"
        description="어느 단계에서 틀렸는지 구분하면 연습이 빨라진다."
      />

      <article className="article">
        <p>통분에서 아이들이 반복적으로 저지르는 실수는 크게 세 가지다.</p>

        <h2>1. 분자를 안 곱하는 실수</h2>
        <p>
          분모만 통분하고 분자는 그대로 두는 경우다. 1/2을 1/4로
          통분하려면 분모를 2배로 늘린 만큼 분자도 2배로 늘려 2/4가
          되어야 한다. 분모와 분자를 같은 수로 곱한다는 원칙을 문제마다
          소리 내어 확인하게 한다.
        </p>

        <h2>2. 공배수를 잘못 구하는 실수</h2>
        <p>
          최소공배수 대신 아무 공배수나 써도 계산은 되지만, 숫자가 커져
          이후 약분 단계에서 실수가 는다. 6과 8의 공배수로 48 대신
          24(최소공배수)를 쓰면 계산이 훨씬 간단해진다. 공배수를 구하는
          연습을 통분과 분리해서 따로 해보는 것도 도움이 된다.
        </p>

        <ExternalCta
          heading="초5 약분·통분 문제지가 필요하다면"
          description="11math.com에서 약분과 통분을 단계별로 나눈 문제지를 받을 수 있다."
        />

        <h2>3. 약분을 빠뜨리는 실수</h2>
        <p>
          계산 후 답을 기약분수로 정리하지 않고 그대로 두는 경우다. 답이
          맞아도 기약분수로 정리하지 않으면 감점되는 경우가 많다. 계산이
          끝나면 &quot;더 나눌 수 있는지&quot; 한 번 더 확인하는 걸 마무리
          습관으로 붙인다.
        </p>

        <AdSlot id="grade5-mistakes-infeed-1" />

        <p>
          통분 문제를 틀렸을 땐 어느 단계에서 실수했는지 구분해서 본다.
          세 유형 중 어디에 해당하는지 표시해두면 다시 연습할 부분이
          명확해진다.
        </p>
      </article>

      <SiblingLink
        href="/grade-5/reduce-and-common-denominator"
        label="약분과 통분, 따로 연습해야 하는 이유"
      />

      <GradeNav current={5} />
    </Container>
  );
}
