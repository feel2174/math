import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import AdSlot from "@/components/AdSlot";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";

export const metadata: Metadata = {
  title: "중1 선행 전 구멍 점검 체크리스트 4가지",
  description:
    "중1 선행을 시작하기 전에 확인해야 할 4가지 체크포인트를 정리했다.",
  alternates: { canonical: "/grade-6/pre-middle-checklist" },
  openGraph: {
    title: "중1 선행 전 구멍 점검 체크리스트 4가지",
    description:
      "중1 선행을 시작하기 전에 확인해야 할 4가지 체크포인트를 정리했다.",
    url: "/grade-6/pre-middle-checklist",
  },
};

export default function PreMiddleChecklist() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-6" gradeLabel="초6" />
      </div>
      <PageHero
        eyebrow="초6 수학 중등 대비"
        title="중1 선행 전 구멍 점검 체크리스트 4가지"
        description="넷 중 하나라도 불안하면 복습이 먼저다."
      />

      <article className="article">
        <p>
          이전 학년 개념에 구멍이 있는 채로 중1 방정식·함수를 먼저 배우면
          배우는 속도만큼 빠르게 잊는다.
        </p>

        <h2>체크 1. 분수 사칙연산</h2>
        <p>
          덧셈, 뺄셈, 곱셈, 나눗셈을 실수 없이 하는지 확인한다. 분수가
          섞인 계산은 중1 방정식 전체에 걸쳐 반복해서 등장한다.
        </p>

        <h2>체크 2. 통분과 약분</h2>
        <p>
          별도로 생각하지 않아도 자동으로 나오는 수준인지 확인한다.
          방정식을 풀 때마다 통분과 약분을 매번 처음부터 고민한다면 아직
          자동화되지 않은 것이다.
        </p>

        <ExternalCta
          heading="초6 비와 비율 문제지가 필요하다면"
          description="11math.com에서 비와 비율, 중등 대비 문제지를 받을 수 있다."
        />

        <h2>체크 3. 비와 비율 문장제</h2>
        <p>
          방정식 없이 비와 비율 문장제를 풀 수 있는지 확인한다. 방정식으로
          풀기 전에 비례식 감각으로 먼저 풀어봐야 나중에 방정식과
          연결된다.
        </p>

        <h2>체크 4. 소수와 분수 전환</h2>
        <p>
          0.75와 3/4을 자유롭게 오갈 수 있는지 확인한다. 중1 정수와 유리수
          단원에서 소수와 분수를 섞어 계산하는 문제가 바로 등장한다.
        </p>

        <AdSlot id="grade6-checklist-infeed-1" />

        <p>
          넷 중 하나라도 불안하면 선행보다 초등 과정 복습이 먼저다. 구멍을
          남긴 채 진도만 나가면 중등 과정에서 같은 자리를 계속 다시
          배운다. 탄탄히 다진 한 학기가 불안하게 앞서간 일 년보다
          오래간다.
        </p>
      </article>

      <SiblingLink
        href="/grade-6/ratio-new-language"
        label="비와 비율, 분수와 다른 점부터 이해하기"
      />

      <GradeNav current={6} />
    </Container>
  );
}
