import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "연산 문제지, 순서가 실력을 가른다";

export default async function Image() {
  return renderOgImage({
    eyebrow: "연산 학습 로드맵",
    title: "연산 문제지, 순서가 실력을 가른다",
  });
}
