export type GradeLink = {
  grade: number;
  label: string;
  href: string;
};

export const grades: GradeLink[] = [
  { grade: 1, label: "초1 진단", href: "/grade-1" },
  { grade: 2, label: "초2 진단", href: "/grade-2" },
  { grade: 3, label: "초3 진단", href: "/grade-3" },
  { grade: 4, label: "초4 진단", href: "/grade-4" },
  { grade: 5, label: "초5 진단", href: "/grade-5" },
  { grade: 6, label: "초6 진단", href: "/grade-6" },
];

export const odapNoteLink = { label: "AI 오답 리포트", href: "/odap-note" };

export const siteUrl = "https://math.zucca100.com";
export const partnerUrl = "https://www.11math.com/";

