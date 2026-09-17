import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";
import CurriculumBridge from "@/components/CurriculumBridge";

export const metadata: Metadata = {
  title: "초1 손가락 셈, 언제 어떻게 떼야 할까 | 단계별 탈출 가이드",
  description:
    "손가락 셈은 나쁜 습관이 아닌 자연스러운 인지 발달 과정입니다. 10의 보수와 덩어리 수 인지(Subitizing)를 통해 자연스럽게 떼는 3단계 로드맵을 소개합니다.",
  alternates: { canonical: "/grade-1/counting-on-fingers" },
};

export default function CountingOnFingers() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-1" gradeLabel="초1 가이드" />
      </div>
      <PageHero
        eyebrow="초1 수 감각 클리닉"
        title="초1 손가락 셈, 억지로 멈추게 하지 마세요"
        description="손가락을 숨기는 게 아니라, 머릿속에 수의 덩어리 모델을 만들어주는 것이 진짜 해결책입니다."
      />

      <article className="article">
        <p>
          아이가 7+4나 8-3을 계산할 때 손가락을 꼼지락거리는 모습을 보면 부모님들은 가슴이 답답해집니다.
          하지만 손가락을 등 뒤로 숨기게 하거나 야단을 치면, 아이는 머릿속으로 몰래 점을 찍어 세거나 계산 자체를 두려워하게 됩니다.
          손가락 셈은 구체물에서 추상적 기호로 넘어가는 지극히 자연스러운 징검다리입니다.
        </p>

        <p>
          문제는 <strong>언제, 어떤 인지 훈련을 통해 손가락 셈을 뗄 수 있는가</strong>입니다.
          이 과정이 원활하지 않으면{" "}
          <Link href="/grade-1/carrying" className="inline-link font-semibold">
            받아올림 세로셈
          </Link>
          과{" "}
          <Link href="/grade-2" className="inline-link font-semibold">
            초2 두 자리 연산
          </Link>
          에서 계산 속도가 치명적으로 지체됩니다.
        </p>

        <ExternalCta
          heading="우리 아이 손가락 셈 탈출 준비도 진단"
          description="매쓰클리닉 5분 AI 진단으로 10 이내 수 구성 반응 속도(2초 룰)를 정밀 측정해보세요."
          label="초1 무료 AI 진단 시작하기"
          href="/#trial"
        />

        <h2>손가락 셈을 떼는 3단계 인지 로드맵</h2>
        <ol>
          <li>
            <strong>1단계: 즉각적 수량 파악 (Subitizing) 훈련</strong><br />
            주사위 눈이나 5칸 상자 속 바둑알을 1초만 보여주고 가립니다.
            하나씩 세지 않고 &ldquo;4개!&rdquo;, &ldquo;5개!&rdquo;를 직관적으로 말하게 하는 시각화 훈련입니다.
          </li>
          <li>
            <strong>2단계: 10의 보수(짝꿍 수) 암산화</strong><br />
            10을 만드는 두 수의 짝(1과 9, 2와 8, 3과 7, 4와 6, 5와 5)을 노래나 카드 게임으로 익힙니다.
            7을 보면 반사적으로 3이 떠올라야 합니다.
          </li>
          <li>
            <strong>3단계: 가르기와 모으기를 통한 10 만들기</strong><br />
            8+5를 계산할 때 손가락을 5번 꼽는 대신, 5를 2와 3으로 갈라 (8+2)+3 = 13으로 묶어내는 과정입니다.
          </li>
        </ol>

        <CurriculumBridge
          title="관련 연계 학습"
          items={[
            {
              grade: "초1 필수 연계",
              href: "/grade-1/carrying",
              topic: "받아올림 원리 시각화",
              description: "손가락을 뗀 뒤 10 묶음 십진법 자릿수를 익히는 다음 단계입니다.",
              type: "next",
            },
            {
              grade: "초2 연계 주의",
              href: "/grade-2",
              topic: "초2 두 자리 덧셈·뺄셈",
              description: "손가락 셈이 남아있으면 두 자리 세로셈에서 감당 못할 연산 피로도가 발생합니다.",
              type: "related",
            },
          ]}
        />
      </article>

      <SiblingLink
        href="/grade-1/carrying"
        label="받아올림, 절차만 외우면 무너지는 이유"
        direction="next"
      />
      <GradeNav current={1} />
    </Container>
  );
}
