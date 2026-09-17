import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";
import CurriculumBridge from "@/components/CurriculumBridge";

export const metadata: Metadata = {
  title: "비와 비율, 단순 계산이 아닌 새로운 수의 언어 | 초6 수학 클리닉",
  description:
    "기준량과 비교하는 양의 본질. 백분율(%), 비례배분, 비례식 성질이 중학교 함수와 과학(농도·속력)으로 이어지는 핵심 맥락을 짚어냅니다.",
  alternates: { canonical: "/grade-6/ratio-new-language" },
};

export default function RatioNewLanguage() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-6" gradeLabel="초6 가이드" />
      </div>
      <PageHero
        eyebrow="초6 수학의 꽃"
        title="비와 비율: 단순 계산이 아닌 &lsquo;새로운 수의 언어&rsquo;"
        description="비교의 기준을 세우는 힘. 중학교 1학년 일차방정식 활용과 함수 그래프의 뿌리가 여기에 있습니다."
      />

      <article className="article">
        <p>
          &ldquo;3 : 5에서 기준량은 무엇일까요?&rdquo;
          많은 아이들이 &lsquo;~에 대한&rsquo;이라는 국어 표현에 걸려 넘어져 기준량과 비교하는 양을 거꾸로 씁니다.
          비와 비율은 지금까지의 &lsquo;절대적인 수량&rsquo; 셈법에서 벗어나,
          두 수량 사이의 <strong>&lsquo;상대적인 배율 관계&rsquo;</strong>를 표현하는 완전히 새로운 차원의 수학적 언어입니다.
        </p>

        <p>
          이 비례적 사고(Proportional Reasoning)가 완성되지 않은 채 중학교에 올라가면,
          중1 일차방정식 활용의 소금물 농도, 기차 속력 문제와 중2 일차함수의 &lsquo;기울기(x 증가량에 대한 y 증가량의 비율)&rsquo;에서
          수학을 전면 포기하게 됩니다.
        </p>

        <ExternalCta
          heading="우리 아이 비와 비율 개념 해석력 진단"
          description="매쓰클리닉 AI 정밀 진단으로 비례식 세우기 및 문장제 언어 독해력을 5분 만에 진단해보세요."
          label="비와 비율 무료 AI 정밀 진단"
          href="/#trial"
        />

        <h2>비와 비율을 정복하는 3대 개념 브릿지</h2>
        <ul>
          <li>
            <strong>1. &lsquo;~에 대한&rsquo;은 언제나 분모(기준량):</strong> &ldquo;B에 대한 A의 비&rdquo;는
            B를 기준으로 삼겠다는 뜻이므로, 분수로 바꿨을 때 항상 기준량 B가 분모로 내려갑니다(A/B).
          </li>
          <li>
            <strong>2. 비율의 세 가지 변신:</strong> 분수(3/4) = 소수(0.75) = 백분율(75%).
            이 셋이 표기만 다를 뿐 정확히 같은 크기임을 수직선과 백분율 그리드로 직관 체득시킵니다.
          </li>
          <li>
            <strong>3. 비례배분의 원리:</strong> 전체를 2:3으로 나눈다면, 전체를 (2+3=5)등분한 뒤
            각각 2/5와 3/5를 곱해 가져가는 원리를 실생활 용돈 나누기나 피자 배분으로 확인합니다.
          </li>
        </ul>

        <CurriculumBridge
          title="관련 연계 학습"
          items={[
            {
              grade: "중등 입학 대비",
              href: "/grade-6/pre-middle-checklist",
              topic: "중1 대비 연산 5대 결손 진단",
              description: "비와 비율을 포함해 초등 6년 연산 중 중학 내신을 결정하는 핵심 항목 총정리.",
              type: "next",
            },
            {
              grade: "초5 분수 연계",
              href: "/grade-5/reduce-and-common-denominator",
              topic: "약분과 기약분수",
              description: "비의 성질(전항과 후항을 같은 수로 나누어도 비율은 같다)의 모태가 되는 약분 원리.",
              type: "prev",
            },
          ]}
        />
      </article>

      <SiblingLink
        href="/grade-6/pre-middle-checklist"
        label="중등 입학 전 반드시 확인할 5대 연산 결손 체크리스트"
        direction="next"
      />
      <GradeNav current={6} />
    </Container>
  );
}
