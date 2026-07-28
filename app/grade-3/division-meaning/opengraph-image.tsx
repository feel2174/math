import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "초3 나눗셈, 등분제와 포함제 구분하는 법";

export default async function Image() {
  return renderOgImage({
    eyebrow: "초3 나눗셈 · 분수 첫 도입",
    title: "초3 나눗셈, 등분제와 포함제 구분하는 법",
  });
}
