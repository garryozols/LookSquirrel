import Link from "next/link";
import { PODCAST_RSS_URL, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import { SOCIALS } from "@/lib/socials";
import { PlatformIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl font-extrabold tracking-tight text-cream">
              {SITE_NAME}
            </p>
            <p className="text-meta mt-2 max-w-xs">{SITE_TAGLINE}</p>
          </div>

          <div className="flex items-center gap-5">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.name}
                className="text-cream/70 transition-colors hover:text-squirrel"
              >
                <PlatformIcon icon={social.icon} />
              </a>
            ))}
            <a
              href={PODCAST_RSS_URL}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="RSS feed"
              className="text-cream/70 transition-colors hover:text-squirrel"
            >
              <PlatformIcon icon="rss" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-meta sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <nav aria-label="Footer" className="flex items-center gap-5">
            <Link href="/" className="transition-colors hover:text-squirrel">
              Home
            </Link>
            <Link href="/episodes" className="transition-colors hover:text-squirrel">
              Episodes
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
