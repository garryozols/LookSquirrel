import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/motion/reveal";
import { ShareLinks } from "@/components/share-links";
import { SpotifyEmbed } from "@/components/spotify-embed";
import {
  SITE_NAME,
  SITE_URL,
  SPOTIFY_SHOW_EMBED_URL,
  spotifyEpisodeEmbedUrl,
} from "@/lib/constants";
import { getEpisodeBySlug, getEpisodes } from "@/lib/rss";
import { formatDate, sanitizeShowNotes } from "@/lib/utils";

export async function generateStaticParams() {
  const episodes = await getEpisodes();
  return episodes.map((episode) => ({ slug: episode.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const episode = await getEpisodeBySlug(slug);
  if (!episode) return {};

  const url = `${SITE_URL}/episodes/${episode.slug}`;

  return {
    title: episode.title,
    description: episode.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: episode.title,
      description: episode.description,
      url,
      images: episode.imageUrl ? [{ url: episode.imageUrl }] : undefined,
      publishedTime: episode.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: episode.title,
      description: episode.description,
    },
  };
}

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const episode = await getEpisodeBySlug(slug);
  if (!episode) notFound();

  const embedSrc = episode.spotifyEpisodeId
    ? spotifyEpisodeEmbedUrl(episode.spotifyEpisodeId)
    : SPOTIFY_SHOW_EMBED_URL;

  const url = `${SITE_URL}/episodes/${episode.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: episode.title,
    description: episode.description,
    datePublished: episode.publishedAt,
    url,
    episodeNumber: episode.episodeNumber ?? undefined,
    timeRequired: episode.durationSeconds
      ? `PT${episode.durationSeconds}S`
      : undefined,
    image: episode.imageUrl ?? undefined,
    partOfSeries: {
      "@type": "PodcastSeries",
      name: SITE_NAME,
      url: SITE_URL,
    },
    associatedMedia: episode.audioUrl
      ? { "@type": "MediaObject", contentUrl: episode.audioUrl }
      : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="bg-ink px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Link
              href="/episodes"
              className="text-ui-label text-cream/70 transition-colors hover:text-squirrel"
            >
              ← All episodes
            </Link>

            <div className="text-meta mt-6 flex flex-wrap items-center gap-x-3">
              {episode.episodeNumber !== null && (
                <span>Episode {episode.episodeNumber}</span>
              )}
              {episode.episodeNumber !== null && <span aria-hidden="true">·</span>}
              <span>{formatDate(episode.publishedAt)}</span>
              {episode.duration && <span aria-hidden="true">·</span>}
              {episode.duration && <span>{episode.duration}</span>}
              {episode.series && (
                <span className="rounded-full border border-line px-2.5 py-0.5">
                  {episode.series}
                </span>
              )}
            </div>

            <h1 className="text-display-l mt-3 text-cream">{episode.title}</h1>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8">
              <SpotifyEmbed
                src={embedSrc}
                title={`Listen to "${episode.title}" on Spotify`}
                height={232}
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="text-body mt-10 space-y-4 text-cream/85 [&_a]:text-squirrel [&_a]:underline [&_a]:underline-offset-4"
              dangerouslySetInnerHTML={{
                __html: sanitizeShowNotes(episode.showNotesHtml),
              }}
            />
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12 border-t border-line pt-8">
              <p className="text-meta mb-4">Share this episode</p>
              <ShareLinks url={url} title={episode.title} />
            </div>
          </Reveal>
        </div>
      </article>
      <Footer />
    </>
  );
}
