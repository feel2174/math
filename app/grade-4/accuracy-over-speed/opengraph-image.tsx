import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "초4 혼합계산, 속도보다 계산 순서가 먼저인 이유";

export default async function Image() {
  return renderOgImage({
    eyebrow: "초4 수학 어려워요",
    title: "초4 혼합계산, 속도보다 계산 순서가 먼저인 이유",
  });
}
