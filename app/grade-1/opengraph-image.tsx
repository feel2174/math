export const dynamic = 'force-static';

import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "초1 수학 공부법, 손가락은 언제 떼야 할까";

export default async function Image() {
  return renderOgImage({
    eyebrow: "초1 수학 공부법",
    title: "초1 수학 공부법, 손가락은 언제 떼야 할까",
  });
}

