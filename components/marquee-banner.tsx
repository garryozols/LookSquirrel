import { SITE_TAGLINE } from "@/lib/constants";

// Minimum number of items in one lap, so the row stays wider than the
// viewport on ultra-wide monitors even when the feed only has a few episodes.
const MIN_ITEMS_PER_LAP = 16;

export function MarqueeBanner({ items }: { items: string[] }) {
  const content = items.length ? items : [SITE_TAGLINE];
  const repeatCount = Math.max(1, Math.ceil(MIN_ITEMS_PER_LAP / content.length));
  const lap = Array.from({ length: repeatCount }, () => content).flat();
  const looped = [...lap, ...lap];

  return (
    <div
      className="relative overflow-hidden border-y border-squirrel-dim bg-squirrel py-3"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee gap-10 motion-reduce:animate-none motion-reduce:justify-center">
        {looped.map((item, i) => (
          <span
            key={i}
            className="font-marquee flex items-center gap-10 whitespace-nowrap text-base font-bold tracking-wide text-ink-deep"
          >
            {item}
            <span aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
