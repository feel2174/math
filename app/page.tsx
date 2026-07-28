import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import AdSlot from "@/components/AdSlot";
import DataTable from "@/components/DataTable";
import GradeNav from "@/components/GradeNav";

export const metadata: Metadata = {
  title: "연산 문제지, 순서가 실력을 가른다",
  description:
    "같은 연산 문제지를 풀어도 결과는 다르다. 학년별 연산·사고력 배분과 오답 관리법을 확인하세요.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "연산 문제지, 순서가 실력을 가른다",
    description:
      "같은 연산 문제지를 풀어도 결과는 다르다. 학년별 연산·사고력 배분과 오답 관리법을 확인하세요.",
    url: "/",
  },
};

export default function Home() {
  return (
    <Container>
      <PageHero
        eyebrow="연산 학습 로드맵"
        title="연산 문제지, 순서가 실력을 가른다"
        description="많이 풀어도 순서가 어긋나면 실력은 제자리다."
      />

      <article className="article">
        <p>
          같은 문제지를 풀어도 결과는 갈린다. 수 감각이 느는 아이가 있고, 숫자만
          봐도 손사래 치는 아이가 있다. 차이는 문제지 질이 아니라 활용 순서에서
          난다.
        </p>
        <p>
          언제, 얼마나, 어떤 순서로 푸는지가 연산 학습의 대부분을 좌우한다.
          아래에 학년별 배치 기준과 오답 관리법을 정리했다.
        </p>

        <ExternalCta
          heading="문제지부터 준비한다면"
          description="11math.com에서 학년별 연산 문제지를 무료로 받을 수 있다."
        />

        <h2>연산만 파다가 놓치는 3가지</h2>
        <p>
          열심히 챙길수록 오히려 수학을 멀리하게 되는 경우가 있다. 현장에서
          반복적으로 보이는 패턴은 세 가지다.
        </p>
        <ul>
          <li>
            <strong>분량 과다형.</strong> 감당 못 할 양을 풀리면 이해 대신
            처리부터 한다. 빨리 끝내려 대충 풀고, 틀린 이유는 돌아보지 않는다.
            속도는 늘어도 개념은 비어간다.
          </li>
          <li>
            <strong>연산 편중형.</strong> 연산만 풀리고 사고력·서술형을
            병행하지 않으면, 계산은 빨라도 문장제 앞에서 얼어붙는다. 초3 이후
            나눗셈과 분수가 섞이며 격차가 벌어진다.
          </li>
          <li>
            <strong>오답 방치형.</strong> 채점만 하고 틀린 문제를 다시 안
            풀리면, 같은 유형에서 계속 틀려도 다음 장으로 넘어간다. 문제지를
            아무리 풀어도 실력은 제자리다.
          </li>
        </ul>

        <AdSlot id="home-infeed-1" />

        <h2>학년별 연산·사고력 배분</h2>
        <p>연산과 사고력 비중은 학년이 오를수록 달라져야 한다.</p>
        <DataTable
          columns={["학년", "하루 분량", "연산 비중", "보완 영역"]}
          rows={[
            ["초1", "1장 내외", "80%", "수 감각, 놀이 연산"],
            ["초2", "1~2장", "75%", "곱셈 개념, 구구단"],
            ["초3", "2장", "65%", "분수 개념, 문장제"],
            ["초4", "2장", "55%", "혼합계산 정확도"],
            ["초5", "2~3장", "50%", "약분, 통분"],
            ["초6", "2~3장", "45%", "비와 비율, 중등 대비"],
          ]}
        />
        <p>
          학년이 오를수록 연산 비중은 줄이고 개념·문장제 비중을 늘린다. 초1~2
          시기엔 반복이 수 감각을 잡는 데 도움이 되지만, 초3부터는 분수와
          나눗셈이 겹치며 단순 반복만으로 버티기 어렵다. 학년별 세부 가이드는
          아래 내비게이션에서 확인할 수 있다.
        </p>

        <h2>오답을 자산으로 바꾸는 법</h2>
        <p>
          같은 문제지도 오답을 다루는 방식에 따라 결과가 갈린다. 틀린 문제를
          그냥 넘기지 않고 이유를 기록하면 다음 문제지에서 같은 실수가
          준다. 실수인지, 개념을 몰라서인지, 시간이 부족했는지 구분하는
          것만으로 약점이 보인다.
        </p>
        <p>
          무료로 배포하는 오답노트 양식은 이 세 가지 이유를 체크박스로 바로
          표시하도록 만들었다. 채점 후 옮겨 적는 데 5분이면 충분하다. 자세한
          작성법과 다운로드는{" "}
          <Link href="/odap-note" className="inline-link">
            오답노트 양식 페이지
          </Link>에서 확인한다.
        </p>

        <AdSlot id="home-bottom" />
      </article>

      <GradeNav />
    </Container>
  );
}
