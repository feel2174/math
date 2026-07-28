"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdSlot({ id }: { id: string }) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // ad blocked or adsbygoogle.js not loaded yet — safe to ignore
    }
  }, []);

  return (
    <ins
      key={id}
      className="adsbygoogle not-prose my-8 block"
      style={{ display: "block" }}
      data-ad-client="ca-pub-9196149361612087"
      data-ad-slot="2178351016"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
