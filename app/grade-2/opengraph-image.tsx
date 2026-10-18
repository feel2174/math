export const dynamic = 'force-static';

import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "초2 구구단 외우기, 곱셈 개념이 먼저다";

export default async function Image() {
  return renderOgImage({
    eyebrow: "초2 구구단 외우기",
    title: "초2 구구단 외우기, 곱셈 개념이 먼저다",
  });
}

