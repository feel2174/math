import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { pretendard } from "./fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/nav";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "매쓰클리닉 | 초등 연산 AI 취약점 진단 및 1:1 맞춤 처방 솔루션",
    template: "%s | 매쓰클리닉",
  },
  description:
    "하루 수십 문제 단순 반복은 그만. 5분 AI 진단으로 우리 아이 구멍 난 연산 취약점만 찾아내 하루 1장 맞춤 처방지를 제공하는 초등 연산 에듀테크 솔루션입니다.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "매쓰클리닉 (MathClinic)",
    url: siteUrl,
    title: "매쓰클리닉 | 초등 연산 AI 취약점 진단 및 1:1 맞춤 처방",
    description:
      "5분 AI 연산 정밀 진단으로 취약점만 골라 하루 1장 맞춤 처방하는 초등 수학 솔루션",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    other: {
      "naver-site-verification": "019aa3f57a68c7324c0251d87119689a98bb1fe1",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "매쓰클리닉 (MathClinic)",
              url: siteUrl,
              inLanguage: "ko-KR",
              description:
                "초등 연산 AI 취약점 진단 및 1:1 맞춤 처방지 솔루션",
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

