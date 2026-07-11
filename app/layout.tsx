import type { Metadata, Viewport } from "next";
import { Syne, Space_Grotesk, Amaranth } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { NoiseOverlay } from "@/components/noise-overlay";
import { SiteHeader } from "@/components/site-header";
import { SkipLink } from "@/components/skip-link";
import {
  PODCAST_RSS_URL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  SPOTIFY_SHOW_URL,
} from "@/lib/constants";
import { getShowMeta } from "@/lib/rss";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const amaranth = Amaranth({
  subsets: ["latin"],
  variable: "--font-amaranth",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "A show about following curiosity down rabbit holes — energy, tech, importing weird cars, whatever's interesting this week. Hosted by Garry Ozols.",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_TAGLINE,
    url: SITE_URL,
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_TAGLINE,
  },
  alternates: {
    types: {
      "application/rss+xml": [{ url: PODCAST_RSS_URL, title: `${SITE_NAME} RSS feed` }],
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#296869",
  colorScheme: "dark",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const show = await getShowMeta();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: SITE_NAME,
    description: show.description || SITE_TAGLINE,
    url: SITE_URL,
    image: show.imageUrl ?? undefined,
    webFeed: PODCAST_RSS_URL,
    sameAs: [SPOTIFY_SHOW_URL],
    author: {
      "@type": "Person",
      name: "Garry Ozols",
    },
  };

  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceGrotesk.variable} ${amaranth.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SkipLink />
        <SmoothScrollProvider>
          <NoiseOverlay />
          <SiteHeader />
          <main id="main">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
