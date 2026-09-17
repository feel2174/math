import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";
import CurriculumBridge from "@/components/CurriculumBridge";

export const metadata: Metadata = {
  title: "초3 분수 첫걸음, 단위분수와 전체의 크기 이해하기",
  description:
    "분수를 피자 조각으로만 가르치면 안 되는 이유. 전체 '1'의 기준과 수직선 위에서의 분수 위치 감각을 잡아야 초5 통분에서 무너지지 않습니다.",
  alternates: { canonical: "/grade-3/fraction-intro" },
};

export default function FractionIntro() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-3" gradeLabel="초3 가이드" />
      </div>
      <PageHero
        eyebrow="초3 분수 입문"
        title="분수의 첫걸음: 전체에 대한 부분의 크기"
        description="1/3과 1/4 중 왜 1/3이 더 클까? 분모가 커질수록 조각이 작아지는 분수 직관의 형성."
      />

      <article className="article">
        <p>
          자연수만 다루던 아이에게 분수는 외계어와 같습니다.
          지금까지는 4가 3보다 무조건 컸는데, 분수에서는 1/3이 1/4보다 더 크다고 하니 혼란에 빠집니다.
          이는 아이의 머릿속에 &lsquo;전체 1을 몇 개로 똑같이 쪼갰는가(등분할)&rsquo;라는
          <strong>단위분수(Unit Fraction)</strong>의 직관이 아직 없기 때문입니다.
        </p>

        <p>
          이 시기에 분모와 분자의 상호 관계를 시각화하지 못하면,{" "}
          <Link href="/grade-5/common-denominator-mistakes" className="inline-link font-semibold">
            초5 분수 통분
          </Link>
          에서 분모끼리 그냥 더해버리는 치명적인 오답 루프에 빠지게 됩니다.
        </p>

        <ExternalCta
          heading="우리 아이 분수 크기 감각 정밀 진단"
          description="매쓰클리닉 AI 정밀 진단으로 진분수, 가분수, 단위분수 인지 정확도를 5분 만에 진단해보세요."
          label="분수 무료 AI 정밀 진단"
          href="/#trial"
        />

        <h2>초3 분수를 성공시키는 3대 시각화 도구</h2>
        <ol>
          <li>
            <strong>1. 종이 띠 접기:</strong> 색종이 띠를 반으로 접어 1/2, 다시 반으로 접어 1/4을 만들며
            접을수록 조각 하나의 크기가 줄어드는 것을 손으로 직접 느끼게 합니다.
          </li>
          <li>
            <strong>2. 수직선 모델 (0과 1 사이):</strong> 0부터 1까지의 막대를 3등분하여 1/3의 위치를 찍는 연습을 합니다.
            분수도 하나의 &lsquo;당당한 숫자&rsquo;라는 것을 인식시켜 줍니다.
          </li>
          <li>
            <strong>3. 여러 개로 이루어진 전체의 분수:</strong> 사탕 12개의 1/4은 몇 개인가?
            나눗셈(12÷4=3)과 분수가 만나는 접점을 구체물로 확인시켜 줍니다.
          </li>
        </ol>

        <CurriculumBridge
          title="관련 연계 학습"
          items={[
            {
              grade: "초3 나눗셈 연계",
              href: "/grade-3/division-meaning",
              topic: "나눗셈의 두 가지 의미",
              description: "등분제 나눗셈이 곧 분수의 분할 개념과 완벽하게 일치합니다.",
              type: "prev",
            },
            {
              grade: "초5 통분 연계",
              href: "/grade-5/common-denominator-mistakes",
              topic: "초5 분수 통분 3대 실수",
              description: "초3의 단위분수 개념이 약하면 초5 이분모 덧셈에서 분모끼리 더하는 오류가 발생합니다.",
              type: "next",
            },
          ]}
        />
      </article>

      <SiblingLink
        href="/grade-3/division-meaning"
        label="나눗셈의 개념, 등분제와 포함제"
        direction="prev"
      />
      <GradeNav current={3} />
    </Container>
  );
}
