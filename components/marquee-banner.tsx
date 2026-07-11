import { SITE_TAGLINE } from "@/lib/constants";

export function MarqueeBanner({ items }: { items: string[] }) {
  const content = items.length ? items : [SITE_TAGLINE];
  const looped = [...content, ...content];

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
