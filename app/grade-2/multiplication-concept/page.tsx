import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";
import CurriculumBridge from "@/components/CurriculumBridge";

export const metadata: Metadata = {
  title: "곱셈의 개념, 동수누가와 묶어 세기로 시작해야 하는 이유",
  description:
    "곱셈을 단순 암기가 아닌 '같은 수를 여러 번 더하는 규칙(동수누가)'으로 이해해야 초3 나눗셈과 초5 분수 곱셈까지 술술 풀립니다.",
  alternates: { canonical: "/grade-2/multiplication-concept" },
};

export default function MultiplicationConcept() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-2" gradeLabel="초2 가이드" />
      </div>
      <PageHero
        eyebrow="초2 연산 개념"
        title="곱셈의 본질: 동수누가와 묶어 세기"
        description="3×4는 구구단 노래가 아니라, &lsquo;3이 4번 반복되는 상황&rsquo;의 압축 기호입니다."
      />

      <article className="article">
        <p>
          아이에게 &ldquo;3×4가 뭐야?&rdquo;라고 물었을 때 &ldquo;12!&rdquo;라고 즉답해도 안심할 수 없습니다.
          &ldquo;왜 12가 될까?&rdquo;라고 물었을 때 &ldquo;3을 4번 더하니까 12예요(3+3+3+3)&rdquo; 혹은
          &ldquo;3개씩 4묶음이니까요&rdquo;라고 설명할 수 있어야 진짜 곱셈의 개념을 아는 것입니다.
        </p>

        <p>
          이 개념이 비어있으면{" "}
          <Link href="/grade-3/division-meaning" className="inline-link font-semibold">
            초3 나눗셈
          </Link>
          에서 12÷3을 보고 &lsquo;12에서 3씩 몇 번 덜어낼 수 있는가&rsquo;라는 묶음 역연산을 전혀 이해하지 못하게 됩니다.
        </p>

        <ExternalCta
          heading="우리 아이 곱셈 개념 이해도 진단"
          description="매쓰클리닉 AI 정밀 진단으로 기계적 암기와 개념적 이해의 차이를 5분 만에 진단해보세요."
          label="곱셈 개념 무료 AI 진단"
          href="/#trial"
        />

        <h2>동수누가(同數累加)에서 곱셈 기호로의 도약</h2>
        <p>
          바구니 4개에 사과가 3개씩 들어있는 그림을 보여주고,
          &ldquo;사과가 모두 몇 개인지 더하기 식으로 써볼까?&rdquo; ➔ 3 + 3 + 3 + 3 = 12.
          &ldquo;더하기를 계속 쓰려니까 너무 길고 팔이 아프지? 그래서 수학자들이 3이 4개 있다는 뜻으로 3×4라고 줄여 쓰기로 약속했단다&rdquo;
          라고 지도하는 것이 아이에게 지적 쾌감을 선사하는 올바른 지도법입니다.
        </p>

        <CurriculumBridge
          title="관련 연계 학습"
          items={[
            {
              grade: "초2 실전 암기",
              href: "/grade-2/times-table-order",
              topic: "구구단 암기 순서 로드맵",
              description: "묶어 세기 개념을 체득한 후 뇌과학적 원리로 구구단을 완성하는 방법.",
              type: "next",
            },
            {
              grade: "초3 나눗셈 연계",
              href: "/grade-3/division-meaning",
              topic: "초3 나눗셈의 의미",
              description: "곱셈의 묶어 세기가 나눗셈의 묶어 덜어내기(포함제)로 직결됩니다.",
              type: "related",
            },
          ]}
        />
      </article>

      <SiblingLink
        href="/grade-2/times-table-order"
        label="구구단 외우는 순서, 2단부터 하면 안 되는 이유"
        direction="next"
      />
      <GradeNav current={2} />
    </Container>
  );
}
