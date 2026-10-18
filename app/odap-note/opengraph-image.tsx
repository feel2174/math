export const dynamic = 'force-static';

import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "오답노트 작성법, 양식 무료 다운로드";

export default async function Image() {
  return renderOgImage({
    eyebrow: "오답노트 양식",
    title: "오답노트 작성법, 양식 무료 다운로드",
  });
}

