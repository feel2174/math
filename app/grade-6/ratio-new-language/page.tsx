import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import AdSlot from "@/components/AdSlot";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";

export const metadata: Metadata = {
  title: "초6 비와 비율, 분수와 다른 점부터 이해하기",
  description:
    "비와 비율은 분수를 다른 방식으로 표현한 것이다. 세 가지 표현을 자유롭게 오가는 연습법을 정리했다.",
  alternates: { canonical: "/grade-6/ratio-new-language" },
  openGraph: {
    title: "초6 비와 비율, 분수와 다른 점부터 이해하기",
    description:
      "비와 비율은 분수를 다른 방식으로 표현한 것이다. 세 가지 표현을 자유롭게 오가는 연습법을 정리했다.",
    url: "/grade-6/ratio-new-language",
  },
};

export default function RatioNewLanguage() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-6" gradeLabel="초6" />
      </div>
      <PageHero
        eyebrow="초6 수학 중등 대비"
        title="초6 비와 비율, 분수와 다른 점부터 이해하기"
        description="2:3, 2/3, 66.7%는 같은 값을 다르게 쓴 것뿐이다."
      />

      <article className="article">
        <p>
          비와 비율은 앞서 배운 분수를 다른 방식으로 표현한 것에 가깝다.
          2:3이라는 비를 분수 2/3로, 다시 비율과 백분율로 오가며 표현해야
          한다.
        </p>

        <h2>세 가지 표현, 같은 값</h2>
        <p>
          2:3(비), 2/3(분수), 66.7%(백분율)는 같은 관계를 다르게 쓴
          것뿐이다. 하나의 상황을 세 가지로 다 써보는 연습을 반복하면
          전환이 자연스러워진다.
        </p>

        <h2>분수 계산이 약하면 여기서 드러난다</h2>
        <p>
          초5까지 분수 계산이 약했다면 비와 비율 단원에서 그 공백이
          그대로 드러난다. 통분, 약분이 자동으로 안 되면 비율 계산에서도
          같은 자리에서 막힌다. 비와 비율을 새로 배우기 전에 분수 계산을
          먼저 점검하는 게 순서다.
        </p>

        <ExternalCta
          heading="초6 비와 비율 문제지가 필요하다면"
          description="11math.com에서 비와 비율, 중등 대비 문제지를 받을 수 있다."
        />

        <h2>일상 소재로 감을 잡는다</h2>
        <p>
          음료수 농도, 지도 축척, 할인율처럼 일상에서 비율을 쓰는 상황을
          문제지 전에 먼저 이야기해본다. 추상적인 숫자보다 익숙한 상황에서
          비율 감각이 먼저 잡힌다.
        </p>

        <AdSlot id="grade6-ratio-infeed-1" />

        <p>
          비와 비율은 중등 함수·방정식의 기초가 되는 영역이다. 이 단원을
          얼마나 다지느냐가 중1 수학의 출발선을 정한다.
        </p>
      </article>

      <SiblingLink
        href="/grade-6/pre-middle-checklist"
        label="중1 선행 전 구멍 점검 체크리스트 4가지"
      />

      <GradeNav current={6} />
    </Container>
  );
}
