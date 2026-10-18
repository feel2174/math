export const dynamic = 'force-static';

import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "초6 비와 비율, 분수와 다른 점부터 이해하기";

export default async function Image() {
  return renderOgImage({
    eyebrow: "초6 수학 중등 대비",
    title: "초6 비와 비율, 분수와 다른 점부터 이해하기",
  });
}

