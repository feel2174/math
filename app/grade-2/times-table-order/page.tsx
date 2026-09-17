import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";
import CurriculumBridge from "@/components/CurriculumBridge";

export const metadata: Metadata = {
  title: "구구단 외우는 순서, 2단부터 하면 안 되는 이유 | 뇌인지 암기법",
  description:
    "구구단을 2단부터 9단까지 무작정 외우면 7단과 8단에서 막힙니다. 규칙이 명확한 2·5단부터 시작해 4·8단 배수 관계를 공략하는 과학적 구구단 로드맵을 소개합니다.",
  alternates: { canonical: "/grade-2/times-table-order" },
};

export default function TimesTableOrder() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-2" gradeLabel="초2 가이드" />
      </div>
      <PageHero
        eyebrow="초2 암기 전략"
        title="구구단 외우는 순서, 2단부터 차례대로 외우지 마세요"
        description="두뇌는 규칙과 패턴을 좋아합니다. 배수와 대칭 관계를 활용하면 암기 시간이 절반으로 줄어듭니다."
      />

      <article className="article">
        <p>
          아이에게 2단, 3단, 4단... 차례대로 벽보를 보고 외우게 하면 대부분 7단과 8단에서 좌절합니다.
          7과 8은 직관적인 규칙이 적고 숫자가 크기 때문입니다.
          하지만 구구단에는 강력한 규칙과 대칭성(교환법칙: 3×7 = 7×3)이 존재합니다.
        </p>

        <p>
          순서만 바꿔도 81개의 구구단 중 실제로 새로 외워야 할 계산은 36개로 대폭 줄어듭니다.
          구구단 인출이 1초 안에 되지 않으면{" "}
          <Link href="/grade-3/division-meaning" className="inline-link font-semibold">
            초3 나눗셈 구구
          </Link>
          에서 몫을 어림잡지 못해 세로셈이 전면 마비됩니다.
        </p>

        <ExternalCta
          heading="우리 아이 구구단 1초 즉답 인출 테스트"
          description="매쓰클리닉 AI 정밀 진단으로 81개 구구단 중 취약한 특정 단(특히 7·8단)을 5분 만에 스캔해보세요."
          label="구구단 무료 AI 스피드 진단"
          href="/#trial"
        />

        <h2>두뇌 인지 과학에 맞춘 구구단 정복 4단계</h2>
        <ol>
          <li>
            <strong>1단계 (규칙이 쉬운 단): 2단 ➔ 5단</strong><br />
            일의 자리가 0과 5로 끝나는 5단과 짝수로 끝나는 2단으로 성공 경험과 자신감을 심어줍니다.
          </li>
          <li>
            <strong>2단계 (배수 관계 단): 4단 ➔ 8단</strong><br />
            4단은 2단의 2배(두 번 더하기), 8단은 4단의 2배라는 배수 관계를 깨닫게 합니다.
          </li>
          <li>
            <strong>3단계 (리듬감 있는 단): 3단 ➔ 6단 ➔ 9단</strong><br />
            9단은 십의 자리가 1씩 커지고 일의 자리가 1씩 작아지며 각 자리 숫자의 합이 9가 되는 마법 같은 규칙을 발견하게 합니다.
          </li>
          <li>
            <strong>4단계 (마지막 난코스): 7단 정복</strong><br />
            이미 앞선 단에서 7×2, 7×3, 7×4, 7×5, 7×6, 7×8, 7×9를 교환법칙으로 다 배웠기 때문에 오직 7×7=49 하나만 외우면 끝납니다!
          </li>
        </ol>

        <CurriculumBridge
          title="관련 연계 학습"
          items={[
            {
              grade: "초2 개념 복습",
              href: "/grade-2/multiplication-concept",
              topic: "곱셈의 개념과 묶어 세기",
              description: "암기 전 동수누가 원리를 먼저 다지는 기초 가이드입니다.",
              type: "prev",
            },
            {
              grade: "초3 필수 연계",
              href: "/grade-3/division-meaning",
              topic: "초3 나눗셈과 구구단 역연산",
              description: "구구단이 장기기억으로 고착되어야 초3 나눗셈 몫을 1초 만에 찾을 수 있습니다.",
              type: "next",
            },
          ]}
        />
      </article>

      <SiblingLink
        href="/grade-2/multiplication-concept"
        label="곱셈의 개념, 동수누가와 묶어 세기"
        direction="prev"
      />
      <GradeNav current={2} />
    </Container>
  );
}
