import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "초2 구구단 암기 순서, 2단부터 9단까지";

export default async function Image() {
  return renderOgImage({
    eyebrow: "초2 구구단 외우기",
    title: "초2 구구단 암기 순서, 2단부터 9단까지",
  });
}
