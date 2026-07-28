import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "초2 곱셈 개념, 구구단 암기 전에 먼저 잡아야 하는 이유";

export default async function Image() {
  return renderOgImage({
    eyebrow: "초2 구구단 외우기",
    title: "초2 곱셈 개념, 구구단 암기 전에 먼저 잡아야 하는 이유",
  });
}
