export const dynamic = 'force-static';

import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "초4 수학이 어려워요, 속도보다 정확도";

export default async function Image() {
  return renderOgImage({
    eyebrow: "초4 수학 어려워요",
    title: "초4 수학이 어려워요, 속도보다 정확도",
  });
}

