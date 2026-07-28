export default function AdSlot({ id }: { id: string }) {
  return (
    <div
      data-ad-slot={id}
      className="not-prose my-8 flex h-24 items-center justify-center rounded-xl border border-dashed border-border text-[12px] text-muted/60"
    >
      광고 영역 ({id})
    </div>
  );
}
