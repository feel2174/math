import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import AdSlot from "@/components/AdSlot";
import DataTable from "@/components/DataTable";
import GradeNav from "@/components/GradeNav";
import TopicLink from "@/components/TopicLink";

export const metadata: Metadata = {
  title: "초6 수학, 중등 대비는 구멍 점검부터",
  description:
    "초6 중1 선행은 진도보다 구멍 점검이 먼저다. 비와 비율 단원과 체크리스트를 정리했다.",
  alternates: { canonical: "/grade-6" },
  openGraph: {
    title: "초6 수학, 중등 대비는 구멍 점검부터",
    description:
      "초6 중1 선행은 진도보다 구멍 점검이 먼저다. 비와 비율 단원과 체크리스트를 정리했다.",
    url: "/grade-6",
  },
};

export default function Grade6() {
  return (
    <Container>
      <PageHero
        eyebrow="초6 수학 중등 대비"
        title="초6 수학, 중등 대비는 구멍 점검부터"
        description="진도보다 구멍을 먼저 메운다."
      />

      <article className="article">
        <p>
          초6이 되면 중1 선행을 시작하는 집이 많다. 이전 학년 개념에 구멍이
          있는 채로 방정식·함수를 먼저 배우면 배우는 속도만큼 빠르게 잊는다.
          비와 비율은 초6에서 처음 등장하면서 중등 함수·방정식의 기초가
          되는 영역이라, 이 단원을 얼마나 다지느냐가 중1 수학의 출발선을
          정한다.
        </p>

        <ExternalCta
          heading="초6 비와 비율 문제지가 필요하다면"
          description="11math.com에서 비와 비율, 중등 대비 문제지를 받을 수 있다."
        />

        <h2>초6에서 먼저 잡아야 할 것</h2>
        <p>
          비와 비율이 분수와 어떻게 다른지, 중1 선행 전 무엇을 점검해야
          하는지 자세히 다뤘다.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <TopicLink
            href="/grade-6/ratio-new-language"
            title="비와 비율, 분수와 다른 점부터 이해하기"
            description="2:3, 2/3, 66.7%는 같은 값을 다르게 쓴 것뿐이다"
          />
          <TopicLink
            href="/grade-6/pre-middle-checklist"
            title="중1 선행 전 구멍 점검 체크리스트 4가지"
            description="넷 중 하나라도 불안하면 복습이 먼저다"
          />
        </div>

        <AdSlot id="grade6-infeed-1" />

        <h2>초6 하루 학습 가이드</h2>
        <DataTable
          columns={["영역", "분량", "소요 시간", "비고"]}
          rows={[
            ["비와 비율", "1장", "15분", "분수 · 백분율 전환 연습"],
            ["구멍 점검", "1장", "15~20분", "4~5학년 분수 복습"],
            ["중1 예비", "선택", "15분", "구멍 없을 때만 진행"],
          ]}
        />

        <p>
          초6 오답 관리는 단원별로 구분해둔다. 비와 비율에서 틀렸는지,
          이전 학년 분수 복습에서 틀렸는지 나눠{" "}
          <Link href="/odap-note" className="inline-link">
            오답노트
          </Link>
          에 기록하면 선행 전 어느
          영역을 더 다져야 할지 명확해진다. 막연히 문제지를 더 풀기보다
          구멍을 특정해 메우는 쪽이 효율적이다.
        </p>

        <AdSlot id="grade6-infeed-2" />

        <p>
          중2, 중3까지 미리 나간 아이 이야기를 들으면 조급해지기 쉽지만,
          구멍을 안고 선행만 앞서가면 중학교 내신에서 오히려 무너지는
          사례가 흔하다. 초6 겨울방학까진 진도보다 점검에 시간을 쓰고,
          구멍이 다 메워진 뒤 중1 과정을 시작해도 늦지 않다. 탄탄히 다진
          한 학기가 불안하게 앞서간 일 년보다 오래간다.
        </p>
      </article>

      <GradeNav current={6} />
    </Container>
  );
}
