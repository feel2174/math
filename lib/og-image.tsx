import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

let fontCache: { bold: Buffer; semibold: Buffer; regular: Buffer } | null =
  null;

async function loadFonts() {
  if (fontCache) return fontCache;
  const dir = join(process.cwd(), "assets/fonts");
  const [bold, semibold, regular] = await Promise.all([
    readFile(join(dir, "Pretendard-Bold.otf")),
    readFile(join(dir, "Pretendard-SemiBold.otf")),
    readFile(join(dir, "Pretendard-Regular.otf")),
  ]);
  fontCache = { bold, semibold, regular };
  return fontCache;
}

export async function renderOgImage({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  const { bold, semibold, regular } = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "84px 96px",
          background: "linear-gradient(135deg, #2b6cb0 0%, #17385f 100%)",
          fontFamily: "Pretendard",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 26,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.01em",
          }}
        >
          math.zucca100
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            fontWeight: 600,
            color: "#a9cdf0",
            marginTop: 40,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 62,
            fontWeight: 700,
            lineHeight: 1.32,
            color: "#ffffff",
            marginTop: 14,
            maxWidth: 980,
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      ...ogImageSize,
      fonts: [
        { name: "Pretendard", data: regular, style: "normal", weight: 400 },
        { name: "Pretendard", data: semibold, style: "normal", weight: 600 },
        { name: "Pretendard", data: bold, style: "normal", weight: 700 },
      ],
    }
  );
}
