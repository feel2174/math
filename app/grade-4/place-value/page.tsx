import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";
import CurriculumBridge from "@/components/CurriculumBridge";

export const metadata: Metadata = {
  title: "초4 큰 수의 자릿값과 0의 개수 착오 정복 | 자릿수 시각화",
  description:
    "만, 억, 조 단위의 큰 수에서 0을 하나 더 쓰거나 빼먹는 실수. 동양의 4자리 끊어 읽기 원리와 자릿값 표를 통한 완벽 교정법을 소개합니다.",
  alternates: { canonical: "/grade-4/place-value" },
};

export default function PlaceValue() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-4" gradeLabel="초4 가이드" />
      </div>
      <PageHero
        eyebrow="초4 큰 수 클리닉"
        title="큰 수의 자릿값과 0의 개수 착오 정복"
        description="동양의 4자리 끊어 읽기와 서양의 3자리 콤마(,) 표기의 충돌에서 오는 혼란을 완벽 해결합니다."
      />

      <article className="article">
        <p>
          &ldquo;오천사백만칠천을 숫자로 써보렴.&rdquo;
          초4 아이들에게 이 문제를 내면 54007000이나 5400007000 등 0의 개수가 제각각으로 나옵니다.
          이는 우리말 수 체계(만, 억, 조 = 4자리 단위)와 아라비아 숫자의 3자리 콤마(, 단위)가
          아이의 뇌 속에서 충돌하기 때문입니다.
        </p>

        <p>
          이 자릿값 혼란을 교정하지 못하면, 세로셈에서 자리를 비워두고 계산하거나,{" "}
          <Link href="/grade-6" className="inline-link font-semibold">
            초6 소수의 곱셈과 나눗셈
          </Link>
          에서 소수점의 위치를 엉뚱한 곳에 찍게 됩니다.
        </p>

        <ExternalCta
          heading="우리 아이 큰 수 자릿값 인지력 진단"
          description="매쓰클리닉 AI 정밀 진단으로 0의 누락 및 큰 수 읽기·쓰기 정확도를 5분 만에 진단해보세요."
          label="큰 수 무료 AI 정밀 진단"
          href="/#trial"
        />

        <h2>4자리씩 끊는 &lsquo;만·억·조&rsquo; 밑줄 비법</h2>
        <p>
          숫자를 뒤에서부터 4자리씩 연필로 끊어 읽는 습관을 들이게 하세요.
          [ 5400 | 7000 ] 으로 끊고 앞의 덩어리에 &lsquo;만&rsquo;을 붙여 읽게 하면,
          빈자리에 0이 몇 개 들어가야 하는지 직관적으로 눈에 들어옵니다.
        </p>

        <CurriculumBridge
          title="관련 연계 학습"
          items={[
            {
              grade: "초4 태도 교정",
              href: "/grade-4/accuracy-over-speed",
              topic: "속도 강박과 식 쓰기",
              description: "자리값이 삐뚤빼뚤해지는 근본 원인인 조급한 암산을 치료하는 클리닉입니다.",
              type: "prev",
            },
            {
              grade: "초5 소수 연계",
              href: "/grade-5",
              topic: "초5 소수와 분수 융합",
              description: "정수 자리값의 원리가 소수 첫째 자리, 둘째 자리로 확장되는 연결 가이드입니다.",
              type: "next",
            },
          ]}
        />
      </article>

      <SiblingLink
        href="/grade-4/accuracy-over-speed"
        label="속도 강박을 버려야 정확도가 오른다"
        direction="prev"
      />
      <GradeNav current={4} />
    </Container>
  );
}
