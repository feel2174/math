import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import AdSlot from "@/components/AdSlot";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";

export const metadata: Metadata = {
  title: "초1 받아올림, 절차만 외우면 무너지는 이유",
  description:
    "받아올림을 절차로만 외우면 두 자리 수에서 실수가 반복된다. 개념부터 잡는 연습법을 정리했다.",
  alternates: { canonical: "/grade-1/carrying" },
  openGraph: {
    title: "초1 받아올림, 절차만 외우면 무너지는 이유",
    description:
      "받아올림을 절차로만 외우면 두 자리 수에서 실수가 반복된다. 개념부터 잡는 연습법을 정리했다.",
    url: "/grade-1/carrying",
  },
};

export default function Carrying() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-1" gradeLabel="초1" />
      </div>
      <PageHero
        eyebrow="초1 수학 공부법"
        title="초1 받아올림, 절차만 외우면 무너지는 이유"
        description="왜 넘기는지 모르면 자리 수가 늘 때마다 다시 헤맨다."
      />

      <article className="article">
        <p>
          &quot;일의 자리끼리 더하고 넘긴다&quot;는 절차로만 암기시키면
          당장은 풀어도, 두 자리 이상 큰 수에서 왜 넘기는지 몰라 실수가
          반복된다.
        </p>

        <h2>왜 실수가 반복되나</h2>
        <p>
          받아올림을 절차로만 외운 아이는 8+7 같은 문제에서 기계적인
          순서로만 접근한다. 숫자가 커지거나 자리가 하나 늘면 같은 절차를
          어디에 적용해야 할지 헷갈린다. 왜 넘기는지 이해하지 못했기
          때문이다.
        </p>

        <h2>10개씩 묶어 세는 연습</h2>
        <p>
          동전이나 바둑알 10개를 묶고, 낱개 몇 개가 남는지 세는 활동을
          반복한다. 8개와 5개를 더할 때 8개 묶음에서 2개를 가져와 10을
          만들고, 남은 3개를 더하는 과정을 직접 손으로 옮겨본다. 이 경험이
          &quot;왜 10을 넘기는지&quot;를 몸으로 이해하게 만든다.
        </p>

        <ExternalCta
          heading="초1 연산 문제지가 필요하다면"
          description="11math.com에서 난이도별 초1 연산 문제지를 무료로 받을 수 있다."
        />

        <h2>문제지는 확인용으로</h2>
        <p>
          개념을 손으로 충분히 익힌 다음 문제지를 푼다. 문제지를 먼저
          풀리고 개념을 나중에 설명하면 순서가 거꾸로 된다. 채점 후 틀린
          문제는 다시 구체물로 확인해본다.
        </p>

        <AdSlot id="grade1-carrying-infeed-1" />

        <p>
          받아올림에서 한 번 무너지면 두 자리, 세 자리 덧셈까지 영향을
          준다. 처음 배우는 지금 시간을 들이는 쪽이 나중에 더 적게 걸린다.
        </p>
      </article>

      <SiblingLink
        href="/grade-1/counting-on-fingers"
        label="손가락 셈, 언제 떼야 할까"
      />

      <GradeNav current={1} />
    </Container>
  );
}
