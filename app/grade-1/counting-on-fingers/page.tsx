import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import AdSlot from "@/components/AdSlot";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";

export const metadata: Metadata = {
  title: "초1 손가락 셈, 언제 떼야 할까",
  description:
    "10 이내 수 구성 기준과 손가락 셈을 떼는 연습 순서를 정리했다.",
  alternates: { canonical: "/grade-1/counting-on-fingers" },
  openGraph: {
    title: "초1 손가락 셈, 언제 떼야 할까",
    description:
      "10 이내 수 구성 기준과 손가락 셈을 떼는 연습 순서를 정리했다.",
    url: "/grade-1/counting-on-fingers",
  },
};

export default function CountingOnFingers() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-1" gradeLabel="초1" />
      </div>
      <PageHero
        eyebrow="초1 수학 공부법"
        title="초1 손가락 셈, 언제 떼야 할까"
        description="기준은 정답이 아니라 반응 속도다."
      />

      <article className="article">
        <p>
          손가락으로 세는 건 나쁜 습관이 아니다. 수를 구체물로 이해하는
          자연스러운 단계다. 문제는 언제까지 의존하느냐다.
        </p>

        <h2>기준점: 10 이내 덧셈뺄셈</h2>
        <p>
          10 이내 덧셈뺄셈을 손가락 없이 답할 수 있는지가 기준이 된다.
          3+4, 8-5 같은 문제를 2~3초 안에 답하면 넘어갈 준비가 된 것이다.
          반대로 매번 손가락을 펴야 한다면 아직 받아올림으로 넘어갈 때가
          아니다.
        </p>

        <h2>10 만들기 연습이 먼저다</h2>
        <p>
          받아올림은 결국 10을 만들고 남은 수를 더하는 과정이다. 7+5를
          7+3+2로 바꿔 10을 먼저 만드는 감각이 있어야 손가락 없이 계산할 수
          있다. 이 감각은 문제지보다 동전, 바둑알, 손가락 자체를 활용한
          놀이로 먼저 잡는 게 빠르다.
        </p>

        <ExternalCta
          heading="초1 연산 문제지가 필요하다면"
          description="11math.com에서 난이도별 초1 연산 문제지를 무료로 받을 수 있다."
        />

        <h2>떼는 순서: 3단계</h2>
        <ol>
          <li>10 이내 수 구성을 자유자재로 다룬다. (예: 6은 2와 4, 3과 3)</li>
          <li>10을 만드는 짝을 자동으로 떠올린다. (7과 3, 6과 4)</li>
          <li>받아올림 문제에서 10 만들기를 적용해본다.</li>
        </ol>
        <p>
          이 세 단계를 순서대로 밟으면 손가락은 자연스럽게 필요 없어진다.
          순서를 건너뛰고 받아올림 문제지부터 풀리면 오히려 손가락에 더
          의존하게 된다.
        </p>

        <AdSlot id="grade1-counting-infeed-1" />

        <p>
          손가락을 억지로 못 쓰게 하면 계산 자체를 피하게 된다. 뗄 준비가
          됐는지는 문제지 정답률이 아니라 반응 속도로 확인한다.
        </p>
      </article>

      <SiblingLink
        href="/grade-1/carrying"
        label="받아올림, 절차만 외우면 무너지는 이유"
      />

      <GradeNav current={1} />
    </Container>
  );
}
