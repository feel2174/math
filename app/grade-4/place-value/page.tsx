import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import AdSlot from "@/components/AdSlot";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";

export const metadata: Metadata = {
  title: "초4 큰 수 계산, 자릿수 정렬로 실수 줄이기",
  description:
    "네다섯 자리 수 계산에서 자릿수를 맞춰 쓰는 연습법과 검산 습관을 정리했다.",
  alternates: { canonical: "/grade-4/place-value" },
  openGraph: {
    title: "초4 큰 수 계산, 자릿수 정렬로 실수 줄이기",
    description:
      "네다섯 자리 수 계산에서 자릿수를 맞춰 쓰는 연습법과 검산 습관을 정리했다.",
    url: "/grade-4/place-value",
  },
};

export default function PlaceValue() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-4" gradeLabel="초4" />
      </div>
      <PageHero
        eyebrow="초4 수학 어려워요"
        title="초4 큰 수 계산, 자릿수 정렬로 실수 줄이기"
        description="가장 흔한 실수는 자릿수를 잘못 맞춰 쓰는 것이다."
      />

      <article className="article">
        <p>
          네다섯 자리 수의 덧셈·뺄셈에서 가장 흔한 실수는 자릿수를 잘못
          맞춰 쓰는 것이다.
        </p>

        <h2>세로셈, 칸을 맞춰 쓴다</h2>
        <p>
          일의 자리는 일의 자리끼리, 십의 자리는 십의 자리끼리 정확히 줄을
          맞춰 쓰는 연습이 먼저다. 모눈종이나 자릿수 칸이 그어진 연습지를
          쓰면 훨씬 수월하다. 암산으로 넘어가고 싶어 해도 이 시기엔
          세로셈을 또박또박 쓰게 한다.
        </p>

        <h2>역연산으로 검산한다</h2>
        <p>
          덧셈은 뺄셈으로, 뺄셈은 덧셈으로 되짚어 확인하는 습관을 들인다.
          1234+5678을 계산했으면 결과에서 5678을 다시 빼서 1234가 나오는지
          확인한다. 틀린 문제만이라도 이 습관을 들이면 스스로 실수를 찾는
          힘이 생긴다.
        </p>

        <ExternalCta
          heading="초4 혼합계산 문제지가 필요하다면"
          description="11math.com에서 큰 수 연산부터 혼합계산까지 단계별로 받을 수 있다."
        />

        <h2>어림으로 먼저 확인한다</h2>
        <p>
          계산 전에 &quot;대략 얼마나 나올지&quot; 어림해보는 습관도 실수를
          줄인다. 1234+5678은 대략 1200+5700이니 7000 근처가 나와야 한다.
          계산 결과가 어림값과 크게 다르면 자릿수가 밀렸다는 신호다.
        </p>

        <AdSlot id="grade4-place-value-infeed-1" />

        <p>
          자릿수 정렬과 검산 습관은 이후 혼합계산, 분수 계산까지 이어지는
          기초 체력이다.
        </p>
      </article>

      <SiblingLink
        href="/grade-4/accuracy-over-speed"
        label="혼합계산, 속도보다 계산 순서가 먼저인 이유"
      />

      <GradeNav current={4} />
    </Container>
  );
}
