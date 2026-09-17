import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import DataTable from "@/components/DataTable";
import GradeNav from "@/components/GradeNav";
import DiagnosisForm from "@/components/DiagnosisForm";

export const metadata: Metadata = {
  title: "매쓰클리닉 | 초등 연산 AI 취약점 진단 및 1:1 맞춤 처방 솔루션",
  description:
    "하루 수십 문제 단순 반복은 이제 그만. 5분 온라인 AI 진단으로 우리 아이 연산 구멍을 정확히 찾아내 하루 1장 맞춤 처방지를 제공합니다.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-10 sm:pt-16 pb-12 bg-gradient-to-b from-accent-soft/30 to-background border-b border-border/40">
        <Container className="text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-surface px-3.5 py-1.5 text-xs font-semibold text-accent shadow-xs mb-6">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
            초등 연산 정밀 AI 진단 엔진 Ver 2.6
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.25] mb-6">
            양만 많은 문제집은 이제 그만.<br />
            <span className="text-accent">5분 AI 진단</span>으로 구멍만 찾아<br className="hidden sm:inline" />
            하루 1장 맞춤 처방합니다.
          </h1>

          <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl mx-auto mb-8">
            아이의 연산 부진은 연습 부족이 아닌 <strong className="text-foreground">취약 유형의 방치</strong> 때문입니다.
            14개 세부 연산 메커니즘을 정밀 스캔하여 딱 필요한 쌍둥이 처방지만 전달합니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#trial"
              className="w-full sm:w-auto rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:opacity-90 active:scale-95"
            >
              5분 무료 AI 진단 시작하기 →
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-surface-elevated"
            >
              서비스 특장점 보기
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border/60 pt-6 text-center text-xs text-muted">
            <div>
              <p className="text-lg font-bold text-foreground">5분</p>
              <p>빠른 취약점 진단</p>
            </div>
            <div>
              <p className="text-lg font-bold text-foreground">하루 1장</p>
              <p>15분 고효율 맞춤 처방</p>
            </div>
            <div>
              <p className="text-lg font-bold text-foreground">94.8%</p>
              <p>연산 오답률 개선율</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Problem Section */}
      <section className="scroll-mt-20">
        <Container className="max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">The Real Problem</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              매일 3~4장씩 풀려도 왜 실력은 제자리일까요?
            </h2>
            <p className="text-sm text-muted mt-2">
              무작정 많이 풀리는 기계식 연산은 아이를 지치게 만들고 진짜 구멍을 숨깁니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="h-10 w-10 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center font-bold text-base mb-4">
                ✕
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">기계적 분량 과다</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                감당 못할 양을 풀리면 아이는 원리 이해 대신 숫자 처리만 급급해집니다. 속도는 빨라져도 조금만 꼬인 문장제에서는 손을 놓습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="h-10 w-10 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center font-bold text-base mb-4">
                ✕
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">오답 원인 방치</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                채점 후 빨간 비 내리기만 반복하고, 틀린 이유(받아올림 계산 오류인지, 자릿수 정렬 실수인지)를 짚지 않아 똑같은 실수가 영구 누적됩니다.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="h-10 w-10 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center font-bold text-base mb-4">
                ✕
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">수학 흥미 급감</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                이미 아는 문제까지 지루하게 반복하면서 아이는 "수학은 지겨운 노동"으로 인식하여 고학년 분수 단원에서 수포자로 이어집니다.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Features Section */}
      <section id="features" className="scroll-mt-20 bg-surface-elevated/40 py-16 border-y border-border">
        <Container className="max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Our Solution</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              매쓰클리닉의 3단계 맞춤 연산 솔루션
            </h2>
            <p className="text-sm text-muted mt-2">
              최소한의 학습량으로 최대한의 정확도를 끌어올리는 AI 에듀테크 기술
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-xs">
              <span className="text-xs font-bold text-accent">솔루션 01</span>
              <h3 className="text-base font-bold text-foreground mt-1 mb-2">
                14개 영역 AI 정밀 스캐너
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                단 15문항의 인터랙티브 진단으로 연산 정확도, 계산 속도, 자릿수 인식 능력 및 빈출 오답 패턴을 알고리즘이 분석합니다.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 shadow-xs">
              <span className="text-xs font-bold text-accent">솔루션 02</span>
              <h3 className="text-base font-bold text-foreground mt-1 mb-2">
                하루 1장 쌍둥이 처방지
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                틀린 문제와 구조가 동일한 &lsquo;오답 쌍둥이 문항&rsquo;만 엄선하여 하루 딱 1장(15분)으로 확실하게 개념 구멍을 봉합합니다.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 shadow-xs">
              <span className="text-xs font-bold text-accent">솔루션 03</span>
              <h3 className="text-base font-bold text-foreground mt-1 mb-2">
                학부모 실시간 성취도 리포트
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                아이가 어떤 단원에서 실수가 줄었는지, 다음 학기 대비 취약 단원이 무엇인지 카카오 알림톡 및 웹 리포트로 한눈에 파악합니다.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. How It Works Section */}
      <section id="process" className="scroll-mt-20">
        <Container className="max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">How It Works</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              매쓰클리닉 이용 절차
            </h2>
            <p className="text-sm text-muted mt-2">
              복잡한 설치 없이 모바일과 PC에서 즉시 시작할 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface border border-border">
              <div className="h-12 w-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h3 className="font-bold text-foreground mb-1">5분 무료 진단</h3>
              <p className="text-xs text-muted leading-relaxed">
                자녀 학년에 맞춘 15개 핵심 연산 문항을 온라인으로 가볍게 풉니다.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface border border-border">
              <div className="h-12 w-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h3 className="font-bold text-foreground mb-1">AI 취약점 리포트 발송</h3>
              <p className="text-xs text-muted leading-relaxed">
                계산 오류 원인과 취약 단원 백분위를 담은 분석 리포트를 즉시 확인합니다.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface border border-border">
              <div className="h-12 w-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h3 className="font-bold text-foreground mb-1">일일 1장 맞춤 처방</h3>
              <p className="text-xs text-muted leading-relaxed">
                구멍 난 개념을 메우는 1:1 맞춤형 처방 문제지를 매일 전달받아 학습합니다.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Curriculum Overview */}
      <section id="curriculum" className="scroll-mt-20">
        <Container className="max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Curriculum Roadmap</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              학년별 연산 정밀 진단 영역
            </h2>
            <p className="text-sm text-muted mt-2">
              초1 수 감각부터 초6 중등 연계 과정까지, 학년별 결정적 취약 포인트를 짚어냅니다.
            </p>
          </div>

          <DataTable
            columns={["학년", "핵심 진단 단원", "흔한 오답 메커니즘", "매쓰클리닉 처방 솔루션"]}
            rows={[
              ["초1", "10의 보수, 받아올림 기초", "손가락 셈 의존, 감산 속도 저하", "놀이형 수 가르기·모으기 훈련"],
              ["초2", "두 자리 덧셈·뺄셈, 구구단", "받아올림/받아내림 자릿수 누락", "자리값 시각화 처방지"],
              ["초3", "나눗셈 구구, 분수 기초", "곱셈 역연산 혼동, 분수 크기 오인지", "문장제 분수 모델링 클리닉"],
              ["초4", "자연수의 혼합계산", "계산 순서 무시, 괄호 규칙 착오", "연산 순서 트리 구조화 훈련"],
              ["초5", "약수·배수, 분수의 덧셈/뺄셈", "최대공약수 착오, 통분 계산 실수", "초등 최대 고비 분수 집중 처방"],
              ["초6", "분수·소수의 나눗셈, 비례식", "역수 곱셈 혼동, 비와 비율 식 세우기", "중등 대수 연계 선행 완성"],
            ]}
          />

          <div className="mt-8">
            <p className="text-center text-xs text-muted mb-4 font-semibold">학년별 상세 진단 가이드 바로가기</p>
            <GradeNav />
          </div>
        </Container>
      </section>

      {/* 6. Lead Capture Trial Form */}
      <section id="trial" className="scroll-mt-20">
        <Container className="max-w-2xl">
          <DiagnosisForm />
        </Container>
      </section>

      {/* 7. Pricing Section */}
      <section id="pricing" className="scroll-mt-20 bg-surface-elevated/40 py-16 border-y border-border">
        <Container className="max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Transparent Pricing</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              합리적인 서비스 요금 플랜
            </h2>
            <p className="text-sm text-muted mt-2">
              부담 없는 무료 진단부터 완벽한 1:1 맞춤 코칭까지 선택할 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-border bg-surface p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-muted">체험 플랜</span>
                <h3 className="text-lg font-bold text-foreground mt-1 mb-2">5분 AI 무료 진단</h3>
                <div className="my-4">
                  <span className="text-3xl font-extrabold text-foreground">0원</span>
                </div>
                <ul className="text-xs text-muted space-y-2 border-t border-border pt-4">
                  <li>✓ 15문항 온라인 연산 진단</li>
                  <li>✓ AI 연산 취약점 분석 리포트</li>
                  <li>✓ 체험용 맞춤 처방지 1회분</li>
                </ul>
              </div>
              <a
                href="#trial"
                className="mt-6 block text-center rounded-xl border border-border bg-surface-elevated py-2.5 text-xs font-bold text-foreground hover:bg-surface"
              >
                무료 진단 받기
              </a>
            </div>

            <div className="rounded-2xl border-2 border-accent bg-surface p-6 flex flex-col justify-between shadow-md relative">
              <span className="absolute -top-3 right-4 rounded-full bg-accent px-3 py-0.5 text-[11px] font-bold text-white">
                가장 인기
              </span>
              <div>
                <span className="text-xs font-bold text-accent">정기구독</span>
                <h3 className="text-lg font-bold text-foreground mt-1 mb-2">스탠다드 맞춤 처방</h3>
                <div className="my-4">
                  <span className="text-3xl font-extrabold text-foreground">월 19,000원</span>
                </div>
                <ul className="text-xs text-muted space-y-2 border-t border-border pt-4">
                  <li>✓ 주 5일 일일 1장 맞춤 처방지 (PDF/웹)</li>
                  <li>✓ 오답 자동 누적 및 쌍둥이 문항 무제한</li>
                  <li>✓ 주간/월간 학부모 분석 리포트</li>
                  <li>✓ 언제든 해지 가능한 월간 구독</li>
                </ul>
              </div>
              <a
                href="#trial"
                className="mt-6 block text-center rounded-xl bg-accent py-2.5 text-xs font-bold text-white hover:opacity-90"
              >
                1일 무료체험 후 시작
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-muted">밀착 케어</span>
                <h3 className="text-lg font-bold text-foreground mt-1 mb-2">프리미엄 1:1 클리닉</h3>
                <div className="my-4">
                  <span className="text-3xl font-extrabold text-foreground">월 29,000원</span>
                </div>
                <ul className="text-xs text-muted space-y-2 border-t border-border pt-4">
                  <li>✓ 스탠다드 플랜의 모든 혜택 포함</li>
                  <li>✓ 전문 수학교육 코치 1:1 오답 첨삭</li>
                  <li>✓ 서술형 문장제 풀이과정 정밀 피드백</li>
                  <li>✓ 학부모 비대면 학습상담 월 1회</li>
                </ul>
              </div>
              <a
                href="#trial"
                className="mt-6 block text-center rounded-xl border border-border bg-surface-elevated py-2.5 text-xs font-bold text-foreground hover:bg-surface"
              >
                상담 신청하기
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. FAQ Section */}
      <section className="scroll-mt-20">
        <Container className="max-w-3xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              자주 묻는 질문 (FAQ)
            </h2>
            <p className="text-xs text-muted mt-1">
              매쓰클리닉 이용 전 학부모님들께서 가장 많이 물어보시는 내용입니다.
            </p>
          </div>

          <div className="space-y-4 text-left">
            <div className="rounded-xl border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">
                Q. 진단 테스트는 정말 무료인가요?
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                네, 5분 무료 AI 진단 테스트 및 자녀의 취약점 분석 리포트, 1회 맞춤 처방지는 100% 무료로 제공됩니다. 유료 결제는 정기 맞춤 처방을 원하실 때에만 진행됩니다.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">
                Q. 시중의 두꺼운 연산 문제집과 무엇이 다른가요?
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                시중 문제집은 아이가 이미 잘 아는 유형까지 기계적으로 20~30문제씩 풀게 하여 지치게 만듭니다. 매쓰클리닉은 AI 진단을 통해 아이가 계속해서 실수하는 &lsquo;핵심 2~3개 유형&rsquo;만 골라 하루 딱 1장(15분)으로 집중 훈련하므로 효율이 압도적입니다.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">
                Q. 별도의 전용 태블릿을 구매해야 하나요?
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                아닙니다. 집에 있는 스마트폰, 일반 PC, 아이패드 등 모든 웹 브라우저에서 바로 사용 가능하며, 처방 문제지는 종이 인쇄(프린트)하여 풀릴 수도 있습니다.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
