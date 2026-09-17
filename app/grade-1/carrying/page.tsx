import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";
import CurriculumBridge from "@/components/CurriculumBridge";

export const metadata: Metadata = {
  title: "초1 받아올림, 공식만 외우면 무너지는 이유 | 십진 위치값 클리닉",
  description:
    "10이 차면 윗자리로 1묶음이 올라가는 십진법 자릿값 원리. 무작정 세로셈 공식을 외우지 않고 수 모형으로 원리를 체득하는 지도법을 소개합니다.",
  alternates: { canonical: "/grade-1/carrying" },
};

export default function Carrying() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-1" gradeLabel="초1 가이드" />
      </div>
      <PageHero
        eyebrow="초1 연산 원리"
        title="받아올림, 공식만 외우면 초2에서 무너진다"
        description="올려 적은 &lsquo;1&rsquo;이 왜 10인지 모르면 자릿수 오류는 영구히 누적됩니다."
      />

      <article className="article">
        <p>
          &ldquo;일의 자리 더해서 10 넘으면 1 올리고 남은 거 써!&rdquo;
          많은 부모님들이 받아올림을 이렇게 공식으로만 가르칩니다.
          하지만 이 &lsquo;1&rsquo;이 낱개 1개가 아니라 &lsquo;10개 묶음 1개&rsquo;라는 십진 위치값을 시각적으로 이해하지 못하면,{" "}
          <Link href="/grade-2" className="inline-link font-semibold">
            초2 두 자리 연산
          </Link>
          에서 올림수를 더하지 않고 빠뜨리거나,{" "}
          <Link href="/grade-4/place-value" className="inline-link font-semibold">
            초4 큰 수
          </Link>
          에서 자리값을 뒤섞어버립니다.
        </p>

        <ExternalCta
          heading="우리 아이 받아올림 개념 정착도 테스트"
          description="매쓰클리닉 AI 정밀 진단으로 자릿수 위치값 이해도와 받아올림 누락 패턴을 5분 만에 진단해보세요."
          label="받아올림 무료 AI 진단 받기"
          href="/#trial"
        />

        <h2>10 묶음 상자를 활용한 시각화 훈련</h2>
        <p>
          수 모형이나 10칸 달걀판에 바둑알을 채워 넣는 연습이 가장 좋습니다.
          7개에 5개를 더할 때, 5개 중 3개를 가져와 10칸 상자 하나를 완전히 닫고(10 묶음 1개),
          낱개 2개가 남는 과정을 눈으로 보여줍니다.
          상자가 가득 차서 옆 칸(십의 자리)으로 옮겨가는 것을 경험한 아이는 절대 받아올림을 잊지 않습니다.
        </p>

        <CurriculumBridge
          title="관련 연계 학습"
          items={[
            {
              grade: "이전 결손 점검",
              href: "/grade-1/counting-on-fingers",
              topic: "손가락 셈 떼는 3단계",
              description: "받아올림이 버겁다면 10 이내 가르기/모으기 암산화가 아직 부족한 상태입니다.",
              type: "prev",
            },
            {
              grade: "초2 연계",
              href: "/grade-2",
              topic: "두 자리 세로셈 완성",
              description: "초1의 10 묶음 개념이 초2 두 자리 받아올림 덧셈과 받아내림 뺄셈으로 확장됩니다.",
              type: "next",
            },
          ]}
        />
      </article>

      <SiblingLink
        href="/grade-1/counting-on-fingers"
        label="손가락 셈, 언제 떼야 할까"
        direction="prev"
      />
      <GradeNav current={1} />
    </Container>
  );
}
