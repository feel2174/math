import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import DataTable from "@/components/DataTable";
import GradeNav from "@/components/GradeNav";
import TopicLink from "@/components/TopicLink";
import CurriculumBridge from "@/components/CurriculumBridge";

export const metadata: Metadata = {
  title: "초4 수학 공부법, 혼합계산 순서와 자리값 오류 탈출하기",
  description:
    "초4 연산은 복잡한 식의 연산 순서와 큰 수의 자리값 정렬이 핵심입니다. 속도 강박을 버리고 정확도와 식 쓰기 습관을 바로잡는 클리닉을 소개합니다.",
  alternates: { canonical: "/grade-4" },
  openGraph: {
    title: "초4 수학 공부법, 혼합계산 순서와 자리값 오류 탈출하기",
    description:
      "초4 연산은 복잡한 식의 연산 순서와 큰 수의 자리값 정렬이 핵심입니다. 속도 강박을 버리고 정확도와 식 쓰기 습관을 바로잡는 클리닉을 소개합니다.",
    url: "/grade-4",
  },
};

export default function Grade4() {
  return (
    <Container>
      <PageHero
        eyebrow="초4 연산 정밀 진단"
        title="초4 수학 공부법, 혼합계산과 자리값에서 실수를 잡는 법"
        description="암산의 한계가 오는 시기. 긴 식을 질서정연하게 전개하는 &lsquo;식 쓰기 습관&rsquo;이 초등 고학년 수학의 성패를 가릅니다."
      />

      <article className="article">
        <p>
          초등학교 4학년은 지금까지 감각과 암산으로 수학 문제를 풀어오던 아이들이 <strong>&lsquo;가장 심한 벽&rsquo;</strong>을 만나는 시기입니다.
          만 단위, 억 단위, 조 단위까지 커지는 <strong>큰 수의 자릿값</strong>과
          덧셈·뺄셈·곱셈·나눗셈에 소괄호·중괄호까지 얽힌 <strong>자연수의 혼합계산</strong>이 등장하기 때문입니다.
        </p>

        <p>
          이때 아이가 여전히 연습장 구석에 낙서하듯 흘려 쓰고 암산으로만 해결하려 든다면,
          계산 순서가 뒤엉켜 어이없는 오답을 반복하게 됩니다.
          초4에서 식을 한 줄씩 단계별로 내려쓰는 습관을 들이지 못하면,{" "}
          <Link href="/grade-5" className="inline-link font-semibold">
            초5 분수·소수 복합 연산
          </Link>
          과 중등 일차방정식에서는 손을 댈 수조차 없게 됩니다.
        </p>

        <ExternalCta
          heading="초4 혼합계산, 우리 아이는 순서를 잘 지키고 있을까요?"
          description="매쓰클리닉 AI 정밀 진단으로 연산 순서 오류율과 자릿수 누락 습관을 5분 만에 진단해보세요."
          label="초4 무료 AI 진단 시작하기"
          href="/#trial"
        />

        <h2>초4에서 반드시 바로잡아야 할 핵심 2대 주제</h2>
        <p>
          기계적 문제풀이 속도보다 &lsquo;정확도&rsquo;와 &lsquo;자리값에 대한 통제력&rsquo;을 길러야 합니다.
        </p>

        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <TopicLink
            href="/grade-4/accuracy-over-speed"
            title="속도 강박을 버려야 정확도가 오른다"
            description="빨리 풀기 경쟁이 낳는 치명적 오답 루프. 단계를 생략하지 않는 트리형 식 쓰기 지도법"
          />
          <TopicLink
            href="/grade-4/place-value"
            title="큰 수의 자릿값과 0의 개수 착오 정복"
            description="천만, 억, 조 단위에서 0을 빠뜨리는 원인 분석 및 4자리 끊어 읽기 시각화 훈련"
          />
        </div>

        <h2>매쓰클리닉 AI가 포착한 초4 대표 오답 유형 3가지</h2>
        <ul>
          <li>
            <strong>1. 왼쪽에서 오른쪽으로 그냥 계산하기:</strong> 20 - 4 × 3을 볼 때 곱셈을 먼저 해야 한다는
            규칙을 깜빡하고 20-4=16을 먼저 한 뒤 16×3=48로 답을 쓰는 오류입니다.
            연산 우선순위를 기호 위에 번호(①, ②)로 매기는 시각화 훈련이 필요합니다.
          </li>
          <li>
            <strong>2. 괄호 안팎의 순서 착오:</strong> 괄호가 여러 개 겹쳐 있거나 나눗셈과 덧셈이 섞였을 때
            작업 기억 한계로 인해 중간 계산값을 잊어버리고 엉뚱한 수를 대입하는 현상입니다.
          </li>
          <li>
            <strong>3. 큰 수 자릿수 정렬 실패:</strong> 세로셈을 할 때 일의 자리, 십의 자리, 백의 자리를
            삐뚤빼뚤하게 적어 다른 자리 숫자끼리 더하거나 빼는 단순 위치 정렬 실수입니다.
          </li>
        </ul>

        <h2>초4 일일 연산 배분과 권장 학습표</h2>
        <DataTable
          columns={["단원 영역", "하루 권장량", "풀이 시간", "핵심 점검 기준"]}
          rows={[
            ["큰 수 읽기·쓰기", "1장", "10분", "4자리씩(만·억·조) 밑줄 긋고 읽기"],
            ["혼합계산 순서", "1.5장 (15문항)", "15~18분", "연산 순서 번호 매기기 + 풀이 과정 3줄 내려쓰기"],
            ["분수 덧셈·뺄셈(동분모)", "1장", "12분", "분모는 그대로 두고 분자만 계산하는 원리 확인"],
            ["소수의 덧셈·뺄셈", "1장", "12분", "소수점(.) 위치 맞추어 세로셈 정렬하기"],
          ]}
        />

        <p>
          초4부터는 틀린 문제의 풀이과정을 보존하는 것이 생명입니다.{" "}
          <Link href="/odap-note" className="inline-link font-semibold">
            매쓰클리닉 오답노트
          </Link>
          에 틀린 중간 식을 남겨두면, &lsquo;내가 3번째 줄 괄호 풀 때 부호를 틀렸구나&rsquo;를 아이 스스로 발견할 수 있습니다.
        </p>

        {/* 계통 수학 브릿지 */}
        <CurriculumBridge
          title="초4 계통 수학 연계 로드맵"
          subtitle="초4 혼합계산의 질서는 초5 통분과 중등 대수식 계산의 뼈대가 됩니다."
          items={[
            {
              grade: "이전 결손 점검",
              href: "/grade-3/division-meaning",
              topic: "초3 나눗셈 연산력 점검",
              description: "혼합계산에서 계속 오답이 난다면 초3 나눗셈과 두 자리 곱셈의 기초 연산력을 재확인하세요.",
              type: "prev",
            },
            {
              grade: "다음 단계 연계",
              href: "/grade-5",
              topic: "초5 약수·배수와 분수의 통분",
              description: "초등 최대 고비인 초5 분수 단원으로 진입하기 전, 식 전개 능력과 정확도를 완성해야 합니다.",
              type: "next",
            },
            {
              grade: "태도 교정 클리닉",
              href: "/grade-4/accuracy-over-speed",
              topic: "정확도를 높이는 식 전개법",
              description: "조급한 암산을 멈추고 한 줄씩 차분히 푸는 아이가 고학년 심화 문제에서 앞서 나갑니다.",
              type: "related",
            },
            {
              grade: "오답 관리 습관",
              href: "/odap-note",
              topic: "식 풀이 과정 오답노트",
              description: "풀이 과정의 어느 줄에서 연산 오류가 발생했는지 짚어내는 정밀 오답 관리법입니다.",
              type: "related",
            },
          ]}
        />
      </article>

      <GradeNav current={4} />
    </Container>
  );
}
