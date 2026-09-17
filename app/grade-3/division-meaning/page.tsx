import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";
import CurriculumBridge from "@/components/CurriculumBridge";

export const metadata: Metadata = {
  title: "나눗셈의 개념, 등분제와 포함제를 구분해야 하는 이유 | 초3 수학 클리닉",
  description:
    "사탕을 똑같이 나누어주기(등분제)와 몇 개씩 묶어 덜어내기(포함제). 이 두 가지 나눗셈 상황을 직관적으로 구분해야 초4 분수 나눗셈까지 막힘없이 이어집니다.",
  alternates: { canonical: "/grade-3/division-meaning" },
};

export default function DivisionMeaning() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-3" gradeLabel="초3 가이드" />
      </div>
      <PageHero
        eyebrow="초3 나눗셈 클리닉"
        title="나눗셈의 두 얼굴: 묶기와 똑같이 나누기"
        description="기계식 나눗셈 부호 계산 전에 상황을 그림으로 모델링하는 직관을 심어주어야 합니다."
      />

      <article className="article">
        <p>
          수학에서 12÷3은 두 가지 전혀 다른 실생활 상황을 가집니다.
          첫째는 <strong>사탕 12개를 3명에게 똑같이 나누어주는 상황(등분제)</strong>이고,
          둘째는 <strong>사탕 12개를 3개씩 봉지에 묶어 담는 상황(포함제)</strong>입니다.
        </p>

        <p>
          아이들이 문장제 문제에서 식을 세우지 못하는 이유는 이 둘의 차이를 모른 채 무조건 &lsquo;큰 수 ÷ 작은 수&rsquo;로
          기계적 나눗셈만 했기 때문입니다.
          특히 포함제(몇 번 덜어낼 수 있는가) 개념이 약하면{" "}
          <Link href="/grade-6" className="inline-link font-semibold">
            초6 분수 나눗셈(3/4 ÷ 1/8)
          </Link>
          에서 4분의 3 안에 8분의 1이 몇 번 들어있는지를 전혀 상상하지 못합니다.
        </p>

        <ExternalCta
          heading="우리 아이 나눗셈 문장제 식 세우기 능력은?"
          description="매쓰클리닉 AI 정밀 진단으로 몫과 나머지, 포함제·등분제 독해력을 5분 만에 진단해보세요."
          label="나눗셈 무료 AI 정밀 진단"
          href="/#trial"
        />

        <h2>나눗셈 지도 시 반드시 짚어야 할 2가지 핵심</h2>
        <ul>
          <li>
            <strong>1. 곱셈과의 가역성(역연산):</strong> 12 ÷ 3 = □ 는 곧 3 × □ = 12 라는 구구단의 빈칸 채우기입니다.
            곱셈을 반대로 되감는 사고가 자연스러워야 세로셈에서 몫을 즉시 올려 쓸 수 있습니다.
          </li>
          <li>
            <strong>2. 나머지의 본질:</strong> &ldquo;더 이상 3개씩 묶어 담을 수 없어서 남은 것&rdquo;이 나머지입니다.
            따라서 나머지는 항상 나누는 수(3)보다 작아야 한다는 절대 규칙을 그림으로 확인시켜 줍니다.
          </li>
        </ul>

        <CurriculumBridge
          title="관련 연계 학습"
          items={[
            {
              grade: "초2 구구단 연계",
              href: "/grade-2/times-table-order",
              topic: "구구단 암기 체계",
              description: "나눗셈 몫 찾기가 더디다면 초2 구구단의 인출 속도를 재정비해야 합니다.",
              type: "prev",
            },
            {
              grade: "초3 분수 연계",
              href: "/grade-3/fraction-intro",
              topic: "분수의 첫걸음과 전체의 양",
              description: "등분할 나눗셈의 결과가 곧 단위분수의 크기로 확장됩니다.",
              type: "next",
            },
          ]}
        />
      </article>

      <SiblingLink
        href="/grade-3/fraction-intro"
        label="분수의 첫걸음, 전체에 대한 부분의 크기"
        direction="next"
      />
      <GradeNav current={3} />
    </Container>
  );
}
