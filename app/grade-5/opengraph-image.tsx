export const dynamic = 'force-static';

import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "초5 분수 계산, 통분에서 갈린다";

export default async function Image() {
  return renderOgImage({
    eyebrow: "초5 분수 계산 · 약분 통분",
    title: "초5 분수 계산, 통분에서 갈린다",
  });
}

