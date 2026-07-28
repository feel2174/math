import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { pretendard } from "./fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/nav";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "연산 문제지 활용법 | math.zucca100",
    template: "%s | math.zucca100",
  },
  description:
    "학년별 연산 문제지 활용법과 오답노트 작성법을 정리합니다. 초1부터 초6까지 하루 학습량, 개념 순서, 흔한 실수 유형을 확인하세요.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "math.zucca100",
    url: siteUrl,
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
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9196149361612087"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "math.zucca100",
              url: siteUrl,
              inLanguage: "ko-KR",
              description:
                "학년별 연산 문제지 활용법과 오답노트 작성법을 정리하는 사이트",
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
