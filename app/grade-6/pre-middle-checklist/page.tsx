import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";
import CurriculumBridge from "@/components/CurriculumBridge";

export const metadata: Metadata = {
  title: "중등 입학 전 반드시 확인할 5대 연산 결손 체크리스트 | 초등 총정리",
  description:
    "중학교 1학년 1학기 내신을 가르는 초등 6년 연산 결손 5가지. 분수·소수 사칙연산, 음수 도입 준비, 거듭제곱과 소인수분해 대비 전략을 안내합니다.",
  alternates: { canonical: "/grade-6/pre-middle-checklist" },
};

export default function PreMiddleChecklist() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-6" gradeLabel="초6 가이드" />
      </div>
      <PageHero
        eyebrow="중등 연계 클리닉"
        title="중등 입학 전 반드시 확인할 5대 연산 결손 체크리스트"
        description="초등 수학 90점의 착시를 깨라. 중학교 1학기 지필평가에서 무너지는 진짜 원인을 점검합니다."
      />

      <article className="article">
        <p>
          &ldquo;초등학교 때는 늘 단원평가 100점이었는데, 중학교 첫 시험에서 60점을 받아왔어요.&rdquo;
          중1 1학기 중간고사 이후 학부모님들이 겪는 가장 흔한 충격입니다.
          초등 단원평가는 단순 연산 요령만으로도 90점 이상이 나오지만,
          중학교 수학은 <strong>음수의 부호 규칙, 소인수분해, 문자와 식, 일차방정식</strong> 등
          고도의 대수적 추상성과 연산 정확도를 요구하기 때문입니다.
        </p>

        <p>
          중학교에 입학하기 전, 초등 6년 동안 누적된 미세한 연산 구멍을 완벽히 메우지 않으면
          중등 3년 내내 수학 내신 회복이 불가능해집니다.
        </p>

        <ExternalCta
          heading="중등 입학 전 5대 연산 결손도 총진단"
          description="매쓰클리닉 AI 종합 진단으로 초등 6년 총괄 연산 결손 영역을 5분 만에 진단받아보세요."
          label="중등 대비 무료 AI 종합 진단"
          href="/#trial"
        />

        <h2>중1 수학 내신을 결정하는 5대 초등 연산 자가진단표</h2>
        <ol>
          <li>
            <strong>1. 이분모 분수의 덧셈과 뺄셈:</strong> 통분과 약분을 1분 안에 기약분수로 오답 없이 풀어내는가? (초5 결손)
          </li>
          <li>
            <strong>2. 분수와 소수의 혼합 나눗셈:</strong> 대분수를 가분수로 고치고 역수를 곱하는 과정을 실시간으로 처리하는가? (초6 결손)
          </li>
          <li>
            <strong>3. 자연수와 분수의 혼합계산 괄호 순서:</strong> 복잡한 3단계 식을 암산이 아닌 줄 맞춤으로 전개할 수 있는가? (초4 결손)
          </li>
          <li>
            <strong>4. 나눗셈의 몫과 나머지 역연산:</strong> 검산식(나누어지는 수 = 나누는 수 × 몫 + 나머지)을 문자로 세울 수 있는가? (초3 결손)
          </li>
          <li>
            <strong>5. 비례식과 비례배분의 성질:</strong> 외항의 곱과 내항의 곱이 같음을 이해하고 미지수 x를 구할 수 있는가? (초6 결손)
          </li>
        </ol>

        <CurriculumBridge
          title="관련 연계 학습"
          items={[
            {
              grade: "초6 비율 복습",
              href: "/grade-6/ratio-new-language",
              topic: "비와 비율의 언어적 이해",
              description: "중등 일차방정식 활용 문제의 핵심 문맥 해석력을 다지는 가이드입니다.",
              type: "prev",
            },
            {
              grade: "전 학년 오답 총정리",
              href: "/odap-note",
              topic: "초등 연산 최종 오답노트",
              description: "중학교 입학 전 취약한 유형을 1:1로 핀셋 교정하는 스마트 오답 솔루션.",
              type: "related",
            },
          ]}
        />
      </article>

      <SiblingLink
        href="/grade-6/ratio-new-language"
        label="비와 비율, 단순 계산이 아닌 '새로운 수의 언어'"
        direction="prev"
      />
      <GradeNav current={6} />
    </Container>
  );
}
