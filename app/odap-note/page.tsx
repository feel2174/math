import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import AdSlot from "@/components/AdSlot";
import GradeNav from "@/components/GradeNav";

export const metadata: Metadata = {
  title: "오답노트 작성법, 양식 무료 다운로드",
  description:
    "같은 문제지를 풀어도 오답노트를 쓰는 아이와 안 쓰는 아이는 성적 곡선이 다르다. 4단계 작성법과 무료 PDF 양식을 소개한다.",
  alternates: { canonical: "/odap-note" },
  openGraph: {
    title: "오답노트 작성법, 양식 무료 다운로드",
    description:
      "같은 문제지를 풀어도 오답노트를 쓰는 아이와 안 쓰는 아이는 성적 곡선이 다르다. 4단계 작성법과 무료 PDF 양식을 소개한다.",
    url: "/odap-note",
  },
};

export default function OdapNote() {
  return (
    <Container>
      <PageHero
        eyebrow="오답노트 양식"
        title="오답노트 작성법, 양식 무료 다운로드"
        description="같은 문제지를 풀어도 오답노트를 쓰면 성적 곡선이 달라진다."
      />

      <article className="article">
        <p>
          채점만 하고 넘어가면 틀린 문제는 그대로 끝난다. 왜 틀렸는지 짧게
          라도 남기면 다음 문제지에서 같은 실수를 알아채는 눈이 생긴다.
          오답노트는 거창한 필기 노트가 아니라, 실수 이유를 세 가지로
          분류해두는 표 한 장이면 충분하다.
        </p>

        <h2>오답노트 작성 4단계</h2>
        <ol>
          <li>
            <strong>틀린 문제를 그대로 옮겨 적지 않는다.</strong> 문제를
            통째로 베끼는 데 시간을 쓰면 쓰기 자체가 부담돼 오래 못 간다.
            어느 문제지, 몇 번인지만 짧게 적는다.
          </li>
          <li>
            <strong>틀린 이유를 세 가지 중 하나로 표시한다.</strong> 계산
            실수인지, 개념을 몰라서인지, 시간이 부족했는지 체크박스로
            구분한다. 이 구분만으로 스스로 약점을 인식한다.
          </li>
          <li>
            <strong>다시 풀어본다.</strong> 이유를 적었으면 그 자리에서
            바로 다시 푼다. 며칠 미루면 처음 틀렸을 때 감각이 사라져 같은
            실수가 반복된다.
          </li>
          <li>
            <strong>일주일 뒤 한 번 더 확인한다.</strong> 다시 풀어
            맞혔다고 끝이 아니다. 일주일 뒤 같은 유형을 한 번 더 만나 실수가
            진짜 고쳐졌는지 확인한다.
          </li>
        </ol>

        <AdSlot id="odap-infeed-1" />

        <div className="not-prose my-8 text-center">
          <a
            href="/odap-note.pdf"
            download
            className="cta-pulse inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-accent-strong"
          >
            오답노트 양식 PDF 무료 다운로드
          </a>
        </div>

        <p>
          인쇄해서 바로 쓰는 A4 한 장 양식이다. 날짜·과목 칸, 문제 출처
          칸, 틀린 이유 체크박스 3종, 다시 풀기 칸으로 구성했다.
        </p>

        <h2>오래 쓰는 법</h2>
        <p>
          매일 한 장씩 채우려 하면 부담이 커 며칠 안에 그만둔다. 채점 후
          틀린 문제가 있을 때만, 그 자리에서 5분 안에 채우는 걸 목표로
          삼으면 오래 간다. 한 달에 한 번은 쌓인 오답노트를 훑어보며 자주
          틀린 유형을 함께 확인한다.
        </p>
        <p>
          오답노트는 틀린 걸 기록하는 노트가 아니라, 같은 실수가 줄어드는
          과정을 눈으로 확인하는 도구다. 학년별로 자주 틀리는 유형은 아래
          가이드에서 확인한다.
        </p>

        <ExternalCta
          heading="문제지가 아직 없다면"
          description="11math.com에서 학년별 연산 문제지를 받아 오답노트와 함께 쓴다."
        />
      </article>

      <GradeNav />
    </Container>
  );
}
