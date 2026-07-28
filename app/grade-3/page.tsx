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
  title: "초3 나눗셈과 분수, 수포자 첫 분기점",
  description:
    "초3은 나눗셈과 분수가 겹치며 수학이 처음 어려워지는 시기다. 두 개념을 잡는 순서를 정리했다.",
  alternates: { canonical: "/grade-3" },
  openGraph: {
    title: "초3 나눗셈과 분수, 수포자 첫 분기점",
    description:
      "초3은 나눗셈과 분수가 겹치며 수학이 처음 어려워지는 시기다. 두 개념을 잡는 순서를 정리했다.",
    url: "/grade-3",
  },
};

export default function Grade3() {
  return (
    <Container>
      <PageHero
        eyebrow="초3 나눗셈 · 분수 첫 도입"
        title="초3 나눗셈과 분수, 수포자 첫 분기점"
        description="이 시기를 넘기는 방식이 이후 수학 태도를 정한다."
      />

      <article className="article">
        <p>
          초3 나눗셈은 곱셈의 역연산이라는 설명만으론 부족하다. 지금까지와는
          다른 새 개념처럼 느껴지는 데다, 같은 학년에 분수까지 등장한다.
          초3을 수학이 어려워지는 첫 시기로 꼽는 이유다. 이 시기를 어떻게
          넘기느냐가 이후 학년의 수학 태도를 좌우한다.
        </p>

        <ExternalCta
          heading="초3 나눗셈 · 분수 문제지가 필요하다면"
          description="11math.com에서 등분제·포함제, 분수 개념별 문제지를 받을 수 있다."
        />

        <h2>초3에서 먼저 잡아야 할 것</h2>
        <p>
          나눗셈의 두 가지 의미와 분수를 처음 배울 때 다뤄야 할 경험을
          자세히 다뤘다.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <TopicLink
            href="/grade-3/division-meaning"
            title="나눗셈, 등분제와 포함제 구분하는 법"
            description="같은 12÷3도 묻는 상황이 다르다"
          />
          <TopicLink
            href="/grade-3/fraction-intro"
            title="분수, 처음 배울 때 꼭 잡아야 할 개념"
            description="표기보다 '똑같이 나눈 것'이라는 경험이 먼저다"
          />
        </div>

        <AdSlot id="grade3-infeed-1" />

        <h2>초3 하루 학습 가이드</h2>
        <DataTable
          columns={["영역", "분량", "소요 시간", "비고"]}
          rows={[
            ["나눗셈 연산", "1장", "15분", "등분제 · 포함제 병행"],
            ["분수 개념", "반 장", "10분", "구체물 활동 병행"],
            ["문장제", "반 장", "10~15분", "연산 선택 판단 훈련"],
          ]}
        />

        <p>
          채점 후 오답을 그냥 넘기지 않는 습관이 특히 중요하다. 나눗셈에서
          나머지를 빠뜨리는 실수, 분수에서 분모·분자를 헷갈리는 실수는
          패턴이 비슷하게 반복된다. 어떤 유형에서 자주 틀리는지{" "}
          <Link href="/odap-note" className="inline-link">
            오답노트
          </Link>
          에 기록해두면 다음
          문제지에서 그 부분만 집중해 볼 수 있다.
        </p>

        <AdSlot id="grade3-infeed-2" />

        <p>
          이전까지는 한 번 배운 개념이 계속 반복되는 구조였다면, 초3부터는
          매 단원 새 개념이 연이어 등장한다. 나눗셈을 겨우 익혔는데 곧바로
          분수가 나오고, 시간·길이 단위 계산이 겹치기도 한다. 여러 단원을
          동시에 몰아붙이기보다, 그 주 학교 진도에 문제지 학습을 맞춰
          집중하는 방식이 부담을 줄인다. 학교 진도와 나란히 가는 것만으로
          초3의 혼란은 상당 부분 준다.
        </p>
      </article>

      <GradeNav current={3} />
    </Container>
  );
}
