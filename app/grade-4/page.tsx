import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import AdSlot from "@/components/AdSlot";
import DataTable from "@/components/DataTable";
import GradeNav from "@/components/GradeNav";

export const metadata: Metadata = {
  title: "초4 수학이 어려워요, 속도보다 정확도",
  description:
    "초4는 혼합계산과 큰 수가 겹치며 정확도가 시험대에 오르는 시기다. 실수를 줄이는 기준을 정리했다.",
  alternates: { canonical: "/grade-4" },
  openGraph: {
    title: "초4 수학이 어려워요, 속도보다 정확도",
    description:
      "초4는 혼합계산과 큰 수가 겹치며 정확도가 시험대에 오르는 시기다. 실수를 줄이는 기준을 정리했다.",
    url: "/grade-4",
  },
};

export default function Grade4() {
  return (
    <Container>
      <PageHero
        eyebrow="초4 수학 어려워요"
        title="초4 수학이 어려워요, 속도보다 정확도"
        description="빨리 푸는 것보다 순서를 지키는 게 먼저다."
      />

      <article className="article">
        <p>
          초4부터 다루는 수의 자릿수가 커지고, 사칙연산이 한 문제에 섞인
          혼합계산이 본격 등장한다. 이전엔 한 연산만 빠르게 하면 됐지만,
          이제는 어떤 순서로 계산할지 판단하는 능력이 필요하다. 이 전환을
          놓치면 &quot;예전엔 잘했는데 갑자기 어려워요&quot;라는 말이 나온다.
        </p>

        <ExternalCta
          heading="초4 혼합계산 문제지가 필요하다면"
          description="11math.com에서 큰 수 연산부터 혼합계산까지 단계별로 받을 수 있다."
        />

        <h2>속도보다 정확도가 우선인 시기</h2>
        <p>
          초1~3까지는 빨리 푸는 게 중요한 지표였다면, 초4부턴 계산 순서를
          지켰는지, 자릿수가 밀리지 않았는지가 더 중요하다. 곱셈·나눗셈을
          덧셈·뺄셈보다 먼저 계산해야 한다는 규칙을 알면서도 실제 문제에서
          순서를 놓치는 경우가 흔하다. 답만 확인하지 말고 풀이 과정에서
          순서를 지켰는지 함께 점검한다.
        </p>

        <h2>큰 수 계산, 자릿수 정렬이 실수를 줄인다</h2>
        <p>
          네다섯 자리 수의 덧셈·뺄셈에서 가장 흔한 실수는 자릿수를 잘못
          맞춰 쓰는 것이다. 세로셈에서 자릿수 칸을 흐트러뜨리지 않고 맞춰
          쓰는 연습만으로 오답률이 눈에 띄게 준다. 암산으로 넘어가고 싶어
          하는 아이일수록 이 시기엔 세로셈을 또박또박 쓰게 하는 쪽이
          장기적으로 유리하다.
        </p>

        <AdSlot id="grade4-infeed-1" />

        <h2>초4 하루 학습 가이드</h2>
        <DataTable
          columns={["영역", "분량", "소요 시간", "비고"]}
          rows={[
            ["큰 수 연산", "1장", "15분", "자릿수 정렬 확인"],
            ["혼합계산", "1장", "15~20분", "계산 순서 점검"],
            ["검산 습관", "틀린 문제만", "5~10분", "역연산으로 확인"],
          ]}
        />

        <p>
          이 시기부터 검산 습관이 특히 효과적이다. 덧셈은 뺄셈으로, 곱셈은
          나눗셈으로 되짚는 역연산 검산을 틀린 문제만이라도 습관화하면
          스스로 실수를 찾는 힘이 생긴다. 매번 채점해주기보다 검산으로 먼저
          점검하게 하는 쪽이 오래 남는다. 자주 틀리는 유형은{" "}
          <Link href="/odap-note" className="inline-link">
            오답노트
          </Link>
          에 남겨둔다.
        </p>

        <AdSlot id="grade4-infeed-2" />

        <p>
          예전보다 푸는 속도가 느려진 것처럼 느껴질 수 있다. 대체로 퇴보가
          아니라 계산 순서를 의식하는 절차가 늘어난 것뿐이다. 속도가 줄었다고
          재촉하면 다시 순서를 건너뛰는 예전 습관으로 돌아간다. 정답률이
          안정적으로 오르는지를 속도보다 먼저 본다. 속도는 정확도가 자리
          잡은 뒤 따라오는 결과다.
        </p>
      </article>

      <GradeNav current={4} />
    </Container>
  );
}
