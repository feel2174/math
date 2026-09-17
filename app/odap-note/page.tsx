import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import GradeNav from "@/components/GradeNav";
import DataTable from "@/components/DataTable";
import CurriculumBridge from "@/components/CurriculumBridge";

export const metadata: Metadata = {
  title: "초등 수학 오답노트 작성법과 AI 오답 분석 리포트 활용 가이드",
  description:
    "틀린 문제를 베끼는 노동이 아닌, 오답 원인을 세 가지로 분류해 쌍둥이 문항으로 해결하는 스마트 오답 클리닉. 무료 오답노트 PDF 양식을 제공합니다.",
  alternates: { canonical: "/odap-note" },
  openGraph: {
    title: "초등 수학 오답노트 작성법과 AI 오답 분석 리포트 활용 가이드",
    description:
      "틀린 문제를 베끼는 노동이 아닌, 오답 원인을 세 가지로 분류해 쌍둥이 문항으로 해결하는 스마트 오답 클리닉. 무료 오답노트 PDF 양식을 제공합니다.",
    url: "/odap-note",
  },
};

export default function OdapNote() {
  return (
    <Container>
      <PageHero
        eyebrow="스마트 오답 클리닉"
        title="초등 수학 오답노트, 베끼지 말고 &lsquo;오답의 원인&rsquo;을 분류하라"
        description="같은 문제지를 풀어도 오답을 다루는 방식에 따라 성적 곡선은 완전히 갈립니다. 4단계 오답 극복 로드맵."
      />

      <article className="article">
        <p>
          수많은 학부모님들이 아이에게 오답노트를 쓰게 하다가 며칠 만에 포기합니다.
          아이에게 문제와 해설을 공책에 예쁘게 옮겨 적게 시키기 때문입니다.
          문제를 베껴 쓰는 행위는 단순 노동일 뿐, 아이의 두뇌를 쓰게 만들지 못합니다.
          오히려 수학에 대한 피로감만 가중시킵니다.
        </p>

        <p>
          진짜 오답노트의 목적은 <strong>&lsquo;내가 어떤 인지적 오류로 틀렸는지를 스스로 자각(Meta-cognition)하고,
          동일한 구조의 쌍둥이 문제를 다시 풀어 구멍을 메우는 것&rsquo;</strong>입니다.
        </p>

        <ExternalCta
          heading="우리 아이가 반복해서 틀리는 진짜 원인은?"
          description="매쓰클리닉 AI 정밀 진단으로 자녀의 연산 오답 메커니즘을 14개 영역으로 정밀 분석해보세요."
          label="5분 무료 AI 오답 진단 신청하기"
          href="/#trial"
        />

        <h2>초등 수학 오답의 3대 핵심 원인 분류표</h2>
        <p>
          모든 틀린 문제는 아래 3가지 범주 중 하나에 속합니다.
          오답노트를 쓸 때는 문제를 길게 쓰지 말고, 이 세 가지 중 어디에 해당하는지 체크박스에 표시하는 것부터 시작해야 합니다.
        </p>

        <DataTable
          columns={["오답 유형", "원인 분석", "자주 발생하는 학년/단원", "매쓰클리닉 처방 솔루션"]}
          rows={[
            [
              "유형 A: 계산·자릿수 실수",
              "받아올림 합산 누락, 부호 혼동, 작업기억 과부하",
              "초1~2 받아올림, 초4 큰 수 자릿값",
              "풀이 과정 줄 맞추기 및 시각화 교정지",
            ],
            [
              "유형 B: 선수 개념 결손",
              "용어 정의나 연산 원리를 모른 채 공식만 적용",
              "초3 분수 도입, 초5 이분모 통분/약분",
              "이전 학년 기초 원리 복습 및 구체물 시각화",
            ],
            [
              "유형 C: 문장제 독해 오류",
              "문제의 핵심 조건 누락, 구하려는 대상 오인",
              "초3 나눗셈 문장제, 초6 비와 비율 활용",
              "문제 조건 끊어 읽기 및 그림 모델링 훈련",
            ],
          ]}
        />

        <h2>실패 없는 스마트 오답노트 작성 4단계 사이클</h2>
        <ol>
          <li>
            <strong>STEP 1. 문제 출처만 간단히 기록 (30초):</strong> 문제를 길게 베껴 쓰지 않습니다.
            &lsquo;교재명 p.42 5번&rsquo;과 같이 출처만 적어 시간을 절약합니다.
          </li>
          <li>
            <strong>STEP 2. 오답 원인 태깅 (1분):</strong> 계산 실수인지, 개념을 모른 것인지,
            문제를 잘못 읽은 것인지 3대 체크박스 중 하나에 표기하고, 자신이 실수한 부분을 빨간 펜으로 동그라미 칩니다.
          </li>
          <li>
            <strong>STEP 3. 그 자리에서 즉시 다시 풀기 (3분):</strong> 해설지를 보고 베끼지 말고,
            자신의 손으로 처음부터 끝까지 올바른 식을 다시 써서 풀어냅니다.
          </li>
          <li>
            <strong>STEP 4. 일주일 뒤 &lsquo;오답 쌍둥이 문항&rsquo;으로 재확인:</strong> 다시 풀어서 맞혔다고 끝이 아닙니다.
            일주일 뒤 숫자만 바꾼 쌍둥이 문제를 주어 완벽하게 개념이 정착되었는지 검증합니다.
          </li>
        </ol>

        <div className="not-prose my-10 text-center rounded-2xl border border-accent/30 bg-accent-soft/40 p-8">
          <h3 className="text-lg font-bold text-foreground mb-2">
            매쓰클리닉 표준 A4 1장 오답노트 양식
          </h3>
          <p className="text-xs sm:text-sm text-muted mb-5 max-w-md mx-auto">
            인쇄해서 바로 쓰는 1일 5분 오답 분류 양식입니다. 문제 출처, 3대 원인 체크박스, 재풀이 칸으로 구성되어 있습니다.
          </p>
          <a
            href="/odap-note.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-[15px] font-bold text-white shadow-md transition-all hover:opacity-90 active:scale-95"
          >
            오답노트 양식 PDF 무료 다운로드 ↓
          </a>
        </div>

        <h2>학년별 맞춤 오답 관리 전략</h2>
        <ul>
          <li>
            <Link href="/grade-1" className="inline-link font-semibold">
              초1 오답 가이드:
            </Link>{" "}
            글씨 쓰기가 서툰 초1은 노트를 쓰게 하지 말고, 부모님과 &ldquo;여기서 뭐가 헷갈렸어?&rdquo; 말로 문답하는 구술 코칭을 진행합니다.
          </li>
          <li>
            <Link href="/grade-2" className="inline-link font-semibold">
              초2 오답 가이드:
            </Link>{" "}
            받아올림 세로셈 자릿수 정렬 실수와 구구단 헷갈림을 포스트잇에 적어 책상에 붙여두는 시각적 오답 관리가 효과적입니다.
          </li>
          <li>
            <Link href="/grade-3" className="inline-link font-semibold">
              초3 오답 가이드:
            </Link>{" "}
            나눗셈의 몫과 나머지 조건(나머지 &lt; 나누는 수) 오류를 집중 점검하고 그림으로 상황을 다시 그려보게 합니다.
          </li>
          <li>
            <Link href="/grade-4" className="inline-link font-semibold">
              초4 오답 가이드:
            </Link>{" "}
            혼합계산에서 연산 순서 번호(①, ②)를 매기는 습관을 오답노트에 그대로 반영하여 풀이과정을 3줄 이상 쓰게 합니다.
          </li>
          <li>
            <Link href="/grade-5" className="inline-link font-semibold">
              초5 오답 가이드:
            </Link>{" "}
            통분 시 최소공배수를 구하지 못한 것인지, 최종 답에서 약분을 빠뜨린 것인지 오답 이유를 엄격하게 분리 기록합니다.
          </li>
          <li>
            <Link href="/grade-6" className="inline-link font-semibold">
              초6 오답 가이드:
            </Link>{" "}
            비와 비율의 기준량/비교하는 양 설정 착오와 소수점 계산 누수를 집중 관리하여 중등 내신 감점을 사전에 차단합니다.
          </li>
        </ul>

        {/* 전 학년 촘촘한 연계 브릿지 */}
        <CurriculumBridge
          title="학년별 집중 취약점 클리닉 바로가기"
          subtitle="오답의 근본 원인을 뿌리 뽑으려면 학년별 취약 단원 가이드를 확인하세요."
          items={[
            {
              grade: "초등 저학년",
              href: "/grade-1/carrying",
              topic: "초1 받아올림과 10의 보수",
              description: "연산 오답의 80%는 10의 보수 불완전에서 시작됩니다.",
              type: "related",
            },
            {
              grade: "초등 중학년",
              href: "/grade-3/fraction-intro",
              topic: "초3 분수 기초와 크기 직관",
              description: "추상적 수 개념의 시작, 분수 오답을 잡는 법.",
              type: "related",
            },
            {
              grade: "초등 고학년",
              href: "/grade-5/common-denominator-mistakes",
              topic: "초5 분수 통분 3대 오답 유형",
              description: "초등 최대 고비인 통분과 약분 실수를 완벽 봉합하는 솔루션.",
              type: "related",
            },
            {
              grade: "중등 연계",
              href: "/grade-6/pre-middle-checklist",
              topic: "초6 중등 대비 연산 자가진단",
              description: "중학교 입학 전 반드시 다져야 할 초등 6년 연산 총정리.",
              type: "related",
            },
          ]}
        />
      </article>

      <GradeNav />
    </Container>
  );
}
