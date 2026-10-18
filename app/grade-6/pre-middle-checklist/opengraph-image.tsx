export const dynamic = 'force-static';

import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "중1 선행 전 구멍 점검 체크리스트 4가지";

export default async function Image() {
  return renderOgImage({
    eyebrow: "초6 수학 중등 대비",
    title: "중1 선행 전 구멍 점검 체크리스트 4가지",
  });
}

