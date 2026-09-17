import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";
import CurriculumBridge from "@/components/CurriculumBridge";

export const metadata: Metadata = {
  title: "통분할 때 가장 흔히 하는 치명적 실수 3가지 | 초5 분수 클리닉",
  description:
    "분모끼리 그냥 더해버리는 오답, 무조건 두 분모를 곱해 계산이 폭발하는 문제 등 초등 수학 70%가 겪는 통분 오답 유형과 해결책을 분석합니다.",
  alternates: { canonical: "/grade-5/common-denominator-mistakes" },
};

export default function CommonDenominatorMistakes() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-5" gradeLabel="초5 가이드" />
      </div>
      <PageHero
        eyebrow="초5 분수 오답 클리닉"
        title="통분할 때 가장 흔히 하는 치명적 실수 3가지"
        description="초등 수포자의 70%가 여기서 발생합니다. 왜 아이들은 분모를 맞추지 못할까요?"
      />

      <article className="article">
        <p>
          1/2 + 1/3 = 2/5 라고 적는 아이의 시험지를 보고 충격을 받은 적이 있으신가요?
          이 실수는 단순히 덤벙대서 나온 것이 아닙니다.
          자연수 연산의 덧셈 규칙(&lsquo;위아래 다 더하기&rsquo;)이 분수의 본질(&lsquo;분모는 기준, 분자는 개수&rsquo;)과
          충돌하면서 일어나는 대표적인 인지 혼란입니다.
        </p>

        <p>
          이 치명적 실수를 잡지 않고 넘어가면,{" "}
          <Link href="/grade-6" className="inline-link font-semibold">
            초6 분수 나눗셈
          </Link>
          과 중등 식의 계산에서 완전히 길을 잃게 됩니다.
        </p>

        <ExternalCta
          heading="우리 아이 통분 오답 메커니즘 정밀 진단"
          description="매쓰클리닉 AI 정밀 진단으로 이분모 덧셈·뺄셈 취약 유형을 5분 만에 스캔해보세요."
          label="통분 무료 AI 정밀 진단"
          href="/#trial"
        />

        <h2>초5가 가장 많이 범하는 통분 3대 오답 패턴</h2>
        <ol>
          <li>
            <strong>1. 분모끼리 분자끼리 더하는 오류:</strong> 피자 반 판과 3분의 1판을 합쳤는데 어떻게 5분의 2판(반 판보다 작음)이
            될 수 있는지 그림 모델을 통해 오류를 스스로 깨닫게 해야 합니다.
          </li>
          <li>
            <strong>2. 두 분모의 단순 곱으로 계산 폭발:</strong> 분모가 12와 18일 때 최소공배수 36을 찾지 않고
            12×18=216으로 무작정 곱해버려, 분자가 수백 단위로 커지면서 계산 도중 실수를 남발하는 패턴입니다.
          </li>
          <li>
            <strong>3. 분모에만 곱하고 분자에는 안 곱하기:</strong> 분모를 12로 통분하면서 분모에는 3을 곱해놓고
            분자에는 곱하는 것을 잊어버려 식의 값을 왜곡시키는 대표적 실수입니다.
          </li>
        </ol>

        <CurriculumBridge
          title="관련 연계 학습"
          items={[
            {
              grade: "초5 약분 연계",
              href: "/grade-5/reduce-and-common-denominator",
              topic: "약분과 소인수분해 원리",
              description: "통분의 역과정인 약분을 통해 숫자를 단순화하는 다음 단계 솔루션입니다.",
              type: "next",
            },
            {
              grade: "초3 결손 점검",
              href: "/grade-3/fraction-intro",
              topic: "초3 분수의 기초 직관",
              description: "분모의 의미가 헷갈린다면 초3 단위분수와 전체의 양 개념을 재정비해야 합니다.",
              type: "prev",
            },
          ]}
        />
      </article>

      <SiblingLink
        href="/grade-5/reduce-and-common-denominator"
        label="약분과 통분, 소인수분해 원리로 쉽게 풀기"
        direction="next"
      />
      <GradeNav current={5} />
    </Container>
  );
}
