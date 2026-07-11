import Link from "next/link";
import type { Episode } from "@/lib/types";
import { EpisodeCard } from "./episode-card";
import { Reveal } from "./motion/reveal";

export function EpisodeGrid({ episodes }: { episodes: Episode[] }) {
  return (
    <section className="section-pad bg-ink-deep px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-display-l text-cream">Recent episodes</h2>
            <Link
              href="/episodes"
              className="text-ui-label text-squirrel underline decoration-squirrel/40 underline-offset-4 transition-colors hover:text-squirrel-hot"
            >
              All episodes
            </Link>
          </div>
        </Reveal>
        <div className="mt-8">
          {episodes.map((episode, i) => (
            <Reveal key={episode.slug} delay={Math.min(i, 4) * 0.05}>
              <EpisodeCard episode={episode} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
