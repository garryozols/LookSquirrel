import type { Metadata } from "next";
import { EpisodeCard } from "@/components/episode-card";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/motion/reveal";
import { getEpisodes } from "@/lib/rss";

export const metadata: Metadata = {
  title: "Episodes",
  description:
    "Every rabbit hole so far — energy, tech, weird imported cars, and whatever grabbed our attention this week.",
};

export default async function EpisodesPage() {
  const episodes = await getEpisodes();

  return (
    <>
      <section className="bg-ink px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-eyebrow text-squirrel">Every episode</p>
            <h1 className="text-display-l mt-3 max-w-2xl text-cream">
              All the rabbit holes, in one place.
            </h1>
          </Reveal>

          <div className="mt-10">
            {episodes.length === 0 && (
              <p className="text-body-l text-cream/80">
                Nothing here yet — the feed&rsquo;s gone quiet, which is more
                than can be said for Garry. Check back shortly.
              </p>
            )}
            {episodes.map((episode, i) => (
              <Reveal key={episode.slug} delay={Math.min(i, 6) * 0.04}>
                <EpisodeCard episode={episode} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
