import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";
import CurriculumBridge from "@/components/CurriculumBridge";

export const metadata: Metadata = {
  title: "약분과 통분, 소인수분해 원리로 쉽게 풀기 | 초5 수학 클리닉",
  description:
    "기약분수로 나타내지 않아 감점되는 원인과 공약수·공배수를 나눗셈 기호 하나로 빠르게 분해하는 시각적 약분 기술을 소개합니다.",
  alternates: { canonical: "/grade-5/reduce-and-common-denominator" },
};

export default function ReduceAndCommonDenominator() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-5" gradeLabel="초5 가이드" />
      </div>
      <PageHero
        eyebrow="초5 연산 기술"
        title="약분과 통분, 소인수분해 원리로 쉽게 풀기"
        description="두 수의 공통 성분을 찾아내는 안목. 중학교 1학년 소인수분해의 뼈대가 여기서 만들어집니다."
      />

      <article className="article">
        <p>
          약분(Reduction)과 통분(Finding a Common Denominator)은 동전의 양면과 같습니다.
          통분이 &lsquo;분모를 키워 크기를 맞추는 과정&rsquo;이라면,
          약분은 &lsquo;분모와 분자를 같은 수로 나누어 가장 단순한 기약분수로 다이어트하는 과정&rsquo;입니다.
        </p>

        <p>
          이 두 개념을 기계적으로 처리하지 않고 두 수가 품고 있는 <strong>&lsquo;공약수(Common Divisor)&rsquo;</strong>를
          직관적으로 꿰뚫어보는 아이는 중학교 1학년 소인수분해와 유리수 사칙연산에서도 최고의 속도와 정확도를 자랑합니다.
        </p>

        <ExternalCta
          heading="우리 아이 약분·통분 속도와 기약분수 정착도 진단"
          description="매쓰클리닉 AI 정밀 진단으로 최대공약수 찾기 속도와 약분 누락 패턴을 5분 만에 진단해보세요."
          label="약분·통분 무료 AI 정밀 진단"
          href="/#trial"
        />

        <h2>나눗셈 기호(ㄴ자 모양)를 활용한 동시 약분 비법</h2>
        <p>
          분모와 분자를 공책 한쪽에 나란히 적고 ㄴ자 나눗셈 기호로 2, 3, 5 같은 작은 소수(Prime number)부터
          차례로 나누어 내려가는 훈련을 시키세요.
          더 이상 나누어지지 않을 때 남은 밑바닥 숫자가 바로 &lsquo;기약분수의 분모와 분자&rsquo;가 됩니다.
        </p>

        <CurriculumBridge
          title="관련 연계 학습"
          items={[
            {
              grade: "초5 오답 점검",
              href: "/grade-5/common-denominator-mistakes",
              topic: "통분 3대 오답 패턴",
              description: "약분이 서투르면 통분 계산 결과값에서 분모가 불필요하게 커져 오답이 발생합니다.",
              type: "prev",
            },
            {
              grade: "초6 나눗셈 연계",
              href: "/grade-6",
              topic: "초6 분수 나눗셈과 역수",
              description: "분수의 나눗셈 계산 중 대각선 미리 약분하기 기술로 직결되는 기초 역량입니다.",
              type: "next",
            },
          ]}
        />
      </article>

      <SiblingLink
        href="/grade-5/common-denominator-mistakes"
        label="통분할 때 가장 흔히 하는 치명적 실수 3가지"
        direction="prev"
      />
      <GradeNav current={5} />
    </Container>
  );
}
