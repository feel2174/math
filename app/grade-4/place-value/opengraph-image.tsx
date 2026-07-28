import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "초4 큰 수 계산, 자릿수 정렬로 실수 줄이기";

export default async function Image() {
  return renderOgImage({
    eyebrow: "초4 수학 어려워요",
    title: "초4 큰 수 계산, 자릿수 정렬로 실수 줄이기",
  });
}
