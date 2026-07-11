import Link from "next/link";
import type { Episode } from "@/lib/types";
import { SPOTIFY_SHOW_EMBED_URL, spotifyEpisodeEmbedUrl } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import { SpotifyEmbed } from "./spotify-embed";
import { Reveal } from "./motion/reveal";

export function FeaturedEpisode({ episode }: { episode: Episode }) {
  const embedSrc = episode.spotifyEpisodeId
    ? spotifyEpisodeEmbedUrl(episode.spotifyEpisodeId)
    : SPOTIFY_SHOW_EMBED_URL;

  return (
    <section id="listen" className="section-pad bg-ink px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-eyebrow text-squirrel">Latest episode</p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-6 grid gap-8 rounded-md border border-line bg-ink-deep p-5 sm:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
            <SpotifyEmbed
              src={embedSrc}
              title={`Listen to "${episode.title}" on Spotify`}
            />
            <div className="flex flex-col justify-center">
              <div className="text-meta flex flex-wrap items-center gap-x-3">
                {episode.episodeNumber && <span>Episode {episode.episodeNumber}</span>}
                {episode.episodeNumber && <span aria-hidden="true">·</span>}
                <span>{formatDate(episode.publishedAt)}</span>
                {episode.duration && <span aria-hidden="true">·</span>}
                {episode.duration && <span>{episode.duration}</span>}
              </div>
              <h2 className="text-display-l mt-3 text-cream">{episode.title}</h2>
              <p className="text-body-l mt-4 text-cream/85">{episode.description}</p>
              <Link
                href={`/episodes/${episode.slug}`}
                className="text-ui-label mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-squirrel px-6 py-3 text-ink-deep transition-colors hover:bg-squirrel-hot"
              >
                Play episode
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
