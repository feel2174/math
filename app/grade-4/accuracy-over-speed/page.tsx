import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";
import CurriculumBridge from "@/components/CurriculumBridge";

export const metadata: Metadata = {
  title: "초4 연산, 속도 강박을 버려야 정확도가 오른다 | 식 쓰기 클리닉",
  description:
    "연산 문제지를 빨리 푸는 아이가 고학년에서 무너지는 이유. 암산의 조급함을 멈추고 풀이과정을 줄 맞춰 쓰는 트리형 식 전개법을 안내합니다.",
  alternates: { canonical: "/grade-4/accuracy-over-speed" },
};

export default function AccuracyOverSpeed() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-4" gradeLabel="초4 가이드" />
      </div>
      <PageHero
        eyebrow="초4 연산 태도 교정"
        title="속도 강박을 버려야 고학년 수학이 산다"
        description="빨리 풀고 놀겠다는 조급함이 만든 오답 루프. 단계를 생략하지 않는 정갈한 풀이 훈련."
      />

      <article className="article">
        <p>
          &ldquo;우리 아이는 머리는 좋은데 문제를 너무 대충 풀어서 맨날 실수를 해요.&rdquo;
          초4 학부모님들의 가장 흔한 하소연입니다.
          하지만 이는 단순 실수가 아닙니다.
          초1~3 저학년 때 &lsquo;문제지 빨리 끝내기&rsquo; 경쟁을 시키면서 심어진 <strong>&lsquo;속도 강박증&rsquo;</strong>의 폐해입니다.
        </p>

        <p>
          복잡한 혼합계산과{" "}
          <Link href="/grade-5" className="inline-link font-semibold">
            초5 분수 통분
          </Link>
          은 뇌의 작업 기억량(Working Memory)을 초과하기 때문에,
          암산으로 중간 과정을 생략하면 100% 뇌부하 오류가 발생합니다.
        </p>

        <ExternalCta
          heading="우리 아이 연산 속도 vs 정확도 균형 진단"
          description="매쓰클리닉 AI 정밀 진단으로 속도 대비 오답 발생률을 정밀 측정해보세요."
          label="정확도 무료 AI 진단"
          href="/#trial"
        />

        <h2>정확도를 2배로 올리는 트리형(Tree) 식 쓰기 3원칙</h2>
        <ol>
          <li>
            <strong>1. 연산 순서 번호 매기기:</strong> 괄호와 사칙연산 기호 위에 ①, ②, ③ 번호를 먼저 매깁니다.
          </li>
          <li>
            <strong>2. 계산하지 않은 부분은 그대로 내려쓰기:</strong> 계산한 부분만 결과로 바꾸고 나머지 숫자와 부호는 줄을 맞춰 그대로 내려씁니다.
          </li>
          <li>
            <strong>3. 등호(=) 세로로 맞추기:</strong> 식의 좌우 균형과 등호(=)를 일직선으로 맞추어 시각적 혼란을 제거합니다.
          </li>
        </ol>

        <CurriculumBridge
          title="관련 연계 학습"
          items={[
            {
              grade: "초4 자리값 연계",
              href: "/grade-4/place-value",
              topic: "큰 수의 자릿값 정렬",
              description: "식 쓰기 줄 맞추기와 큰 수의 자릿수 배치가 결합되는 다음 단계 가이드입니다.",
              type: "next",
            },
            {
              grade: "오답 관리 연계",
              href: "/odap-note",
              topic: "스마트 오답 리포트",
              description: "조급한 계산으로 틀린 오답을 스스로 원인 분석하여 속도 강박을 치료하는 법.",
              type: "related",
            },
          ]}
        />
      </article>

      <SiblingLink
        href="/grade-4/place-value"
        label="큰 수의 자릿값과 0의 개수 착오 정복"
        direction="next"
      />
      <GradeNav current={4} />
    </Container>
  );
}
