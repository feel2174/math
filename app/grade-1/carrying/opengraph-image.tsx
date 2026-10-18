export const dynamic = 'force-static';

import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "초1 받아올림, 절차만 외우면 무너지는 이유";

export default async function Image() {
  return renderOgImage({
    eyebrow: "초1 수학 공부법",
    title: "초1 받아올림, 절차만 외우면 무너지는 이유",
  });
}

