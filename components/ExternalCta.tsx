import Link from "next/link";
import { partnerUrl } from "@/lib/nav";

export default function ExternalCta({
  heading,
  description,
  label = "11math.com 바로가기",
}: {
  heading: string;
  description: string;
  label?: string;
}) {
  return (
    <div className="not-prose my-8 rounded-2xl border border-accent-soft bg-accent-soft/60 p-5 sm:p-6">
      <p className="text-[15px] font-bold text-accent-strong">{heading}</p>
      <p className="mt-1.5 text-[14px] leading-relaxed text-foreground/80">
        {description}
      </p>
      <Link
        href={partnerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-accent-strong"
      >
        {label}
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
