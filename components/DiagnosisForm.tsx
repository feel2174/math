"use client";

import { useState } from "react";

export default function DiagnosisForm() {
  const [submitted, setSubmitted] = useState(false);
  const [grade, setGrade] = useState("3");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("속도는 빠른데 실수가 잦음");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("학부모님 성함과 연락처를 입력해주세요.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent-soft/50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white text-2xl font-bold">
          ✓
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">
          무료 AI 연산 진단 신청이 접수되었습니다!
        </h3>
        <p className="text-sm text-muted leading-relaxed max-w-md mx-auto">
          입력해주신 <strong>{phone}</strong> 번호로 자녀(초{grade}) 맞춤형 5분 온라인
          진단 링크와 무료 처방지 샘플을 카카오 알림톡으로 발송해 드립니다.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-lg bg-surface-elevated px-4 py-2 text-xs font-semibold text-foreground hover:bg-surface border border-border"
        >
          다른 자녀 추가 신청하기
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-sm space-y-5"
    >
      <div className="border-b border-border/80 pb-4">
        <span className="inline-block rounded bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent mb-1">
          비용 0원 · 즉시 참여
        </span>
        <h3 className="text-lg font-bold text-foreground">
          우리 아이 연산 구멍 찾기, 5분 무료 AI 진단
        </h3>
        <p className="text-xs text-muted mt-1">
          현재 학년과 고민을 남겨주시면 맞춤 진단 테스트와 1일 처방지를 보내드립니다.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-foreground mb-1.5">
            자녀 학년 <span className="text-accent">*</span>
          </label>
          <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
          >
            <option value="1">초등학교 1학년 (수 감각/덧셈 기초)</option>
            <option value="2">초등학교 2학년 (두 자리 덧셈·뺄셈/구구단)</option>
            <option value="3">초등학교 3학년 (나눗셈/분수 시작)</option>
            <option value="4">초등학교 4학년 (혼합계산/분수 덧셈)</option>
            <option value="5">초등학교 5학년 (약수·배수/약분·통분)</option>
            <option value="6">초등학교 6학년 (분수·소수 나눗셈/비례식)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-foreground mb-1.5">
            학부모 성함 <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="홍길동"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-foreground mb-1.5">
            휴대전화번호 (진단 링크 수신용) <span className="text-accent">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="010-1234-5678"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-foreground mb-1.5">
            가장 큰 연산 고민
          </label>
          <select
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
          >
            <option value="속도는 빠른데 실수가 잦음">속도는 빠른데 어이없는 실수가 잦음</option>
            <option value="계산 속도가 너무 느림">계산 속도가 너무 느려 시험 시간이 부족함</option>
            <option value="분수/나눗셈 개념을 헷갈려함">분수나 나눗셈 개념을 완전히 헷갈려함</option>
            <option value="문제집 풀기 싫어하고 지루해함">문제집 풀기를 극도로 싫어하고 거부함</option>
          </select>
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full rounded-xl bg-accent py-3.5 text-sm font-bold text-white shadow-md transition hover:opacity-95 active:scale-[0.99]"
        >
          무료 AI 진단 링크 & 맞춤 처방지 받기 →
        </button>
        <p className="mt-2 text-center text-[11px] text-muted">
          * 신청 시 개인정보 수집 및 무료 진단 알림톡 발송에 동의한 것으로 간주됩니다.
        </p>
      </div>
    </form>
  );
}
