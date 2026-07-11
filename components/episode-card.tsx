import Link from "next/link";
import type { Episode } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <Link
      href={`/episodes/${episode.slug}`}
      className="group block border-b border-line py-6 transition-colors hover:border-squirrel/50 sm:py-8"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <div className="flex items-baseline gap-4">
          {episode.episodeNumber !== null && (
            <span className="text-meta tabular-nums">
              {String(episode.episodeNumber).padStart(2, "0")}
            </span>
          )}
          <h3 className="text-display-m text-cream transition-colors group-hover:text-squirrel">
            {episode.title}
          </h3>
        </div>
        <div className="text-meta flex shrink-0 items-center gap-3">
          {episode.series && (
            <span className="rounded-full border border-line px-2.5 py-0.5 text-cream/80">
              {episode.series}
            </span>
          )}
          <span>{formatDate(episode.publishedAt)}</span>
          {episode.duration && (
            <>
              <span aria-hidden="true">·</span>
              <span>{episode.duration}</span>
            </>
          )}
          <span
            aria-hidden="true"
            className="text-squirrel opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          >
            →
          </span>
        </div>
      </div>
      {episode.description && (
        <p className="text-body mt-2 line-clamp-2 max-w-2xl text-cream/70">
          {episode.description}
        </p>
      )}
    </Link>
  );
}
