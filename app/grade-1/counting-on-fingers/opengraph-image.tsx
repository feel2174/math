import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "초1 손가락 셈, 언제 떼야 할까";

export default async function Image() {
  return renderOgImage({
    eyebrow: "초1 수학 공부법",
    title: "초1 손가락 셈, 언제 떼야 할까",
  });
}
