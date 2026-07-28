import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import AdSlot from "@/components/AdSlot";
import DataTable from "@/components/DataTable";
import GradeNav from "@/components/GradeNav";

export const metadata: Metadata = {
  title: "초2 구구단 외우기, 곱셈 개념이 먼저다",
  description:
    "초2 구구단은 암기 전에 곱셈 개념부터 잡아야 오래간다. 암기 순서와 하루 분량 기준을 정리했다.",
  alternates: { canonical: "/grade-2" },
  openGraph: {
    title: "초2 구구단 외우기, 곱셈 개념이 먼저다",
    description:
      "초2 구구단은 암기 전에 곱셈 개념부터 잡아야 오래간다. 암기 순서와 하루 분량 기준을 정리했다.",
    url: "/grade-2",
  },
};

export default function Grade2() {
  return (
    <Container>
      <PageHero
        eyebrow="초2 구구단 외우기"
        title="초2 구구단 외우기, 곱셈 개념이 먼저다"
        description="암기는 개념을 잡은 다음이다."
      />

      <article className="article">
        <p>
          초2 구구단은 여름방학 특훈처럼 몰아붙이는 과제가 되기 쉽다. 하지만
          노래처럼 외우기만 하고 곱셈 개념을 놓치면, 3학년 문장제에서 언제
          곱셈을 써야 할지 판단하지 못한다. 암기표를 채우기 전에 &quot;같은
          수를 여러 번 더하는 것&quot;이라는 감각부터 심어야 한다.
        </p>

        <h2>곱셈 개념이 먼저, 암기는 그다음</h2>
        <p>
          사탕 3개씩 담긴 봉지 4개를 3+3+3+3으로 먼저 세어보고, 그게
          3×4와 같다는 걸 눈으로 확인하는 과정이 필요하다. 이 과정 없이
          구구단표를 통째로 외우면 곱셈을 그냥 나열된 숫자로 받아들인다.
          &quot;한 상자에 6개씩 5상자면?&quot; 같은 문장제 앞에서 어떤
          연산을 써야 할지 모르는 경우가 흔하다.
        </p>

        <ExternalCta
          heading="구구단 익힘 문제지가 필요하다면"
          description="11math.com에서 곱셈 개념부터 구구단 암기용까지 단계별로 받을 수 있다."
        />

        <h2>구구단 암기 순서</h2>
        <p>
          보통 2단, 5단부터 시작해 곱셈 감각을 잡고, 3단과 4단으로
          넘어간다. 어려운 7, 8, 9단은 뒤로 미루되 이미 외운 단으로 유도하는
          법을 알려주면 부담이 준다. 7×8은 7×5와 7×3을 더한 값이라는
          식이다. 새로 외우는 대신 이미 아는 걸 조합하는 경험이 단순 반복
          암기보다 오래 남는다.
        </p>

        <AdSlot id="grade2-infeed-1" />

        <h2>초2 하루 학습 가이드</h2>
        <DataTable
          columns={["단계", "분량", "소요 시간", "중점"]}
          rows={[
            ["도입", "반 장", "10분", "묶어 세기, 곱셈 개념"],
            ["암기 초반", "1장", "15분", "2, 5단"],
            ["암기 완성", "1~2장", "15~20분", "전체 단, 유도 계산"],
          ]}
        />

        <p>
          구구단은 시험처럼 외우게 하면 거부감이 커진다. 차 안, 목욕 시간처럼
          부담 없는 순간에 짧게 반복하는 쪽이 효과적이다. 문제지는 이렇게
          익힌 단을 확인하고 속도를 붙이는 용도로 쓴다.
        </p>

        <AdSlot id="grade2-infeed-2" />

        <p>
          구구단을 다 외웠다고 끝이 아니다. 곱셈구구를 활용한 간단한
          문장제를 함께 풀어야 개념이 자리 잡았는지 확인할 수 있다. 이
          단계를 건너뛰고 3학년 나눗셈으로 넘어가면 격차가 더 벌어진다. 초2
          2학기엔 곱셈 문장제 비중을 조금씩 늘린다.
        </p>
        <p>
          암기 속도는 아이마다 차이가 크다. 한 달이면 다 외우기도, 학기
          내내 걸리기도 한다. 옆집과 비교하는 대신 어제와 오늘을 비교해주는
          쪽이 효과적이다. 채점 후 틀린 문제는{" "}
          <Link href="/odap-note" className="inline-link">
            오답노트
          </Link>
          에 이유를 남겨두면 다음
          문제지에서 같은 실수가 준다.
        </p>
      </article>

      <GradeNav current={2} />
    </Container>
  );
}
