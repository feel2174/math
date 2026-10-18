export const dynamic = 'force-static';

import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "초3 분수, 처음 배울 때 꼭 잡아야 할 개념";

export default async function Image() {
  return renderOgImage({
    eyebrow: "초3 나눗셈 · 분수 첫 도입",
    title: "초3 분수, 처음 배울 때 꼭 잡아야 할 개념",
  });
}

