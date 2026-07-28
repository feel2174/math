import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "초5 약분과 통분, 따로 연습해야 하는 이유";

export default async function Image() {
  return renderOgImage({
    eyebrow: "초5 분수 계산 · 약분 통분",
    title: "초5 약분과 통분, 따로 연습해야 하는 이유",
  });
}
