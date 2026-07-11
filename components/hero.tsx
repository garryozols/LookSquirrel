"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { DESCRIPTORS, SITE_TAGLINE } from "@/lib/constants";

interface HeroProps {
  latestEpisodeSlug: string | null;
}

interface WordRect {
  x: number;
  y: number;
  width: number;
}

export function Hero({ latestEpisodeSlug }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const [rect, setRect] = useState<WordRect | null>(null);
  const [dartLanded, setDartLanded] = useState(false);

  useLayoutEffect(() => {
    if (prefersReducedMotion) return;
    const wordRect = wordRef.current?.getBoundingClientRect();
    const heroRect = heroRef.current?.getBoundingClientRect();
    if (!wordRect || !heroRect) return;
    setRect({
      x: wordRect.left - heroRect.left,
      y: wordRect.bottom - heroRect.top - wordRect.height * 0.14,
      width: wordRect.width,
    });
  }, [prefersReducedMotion]);

  const showStaticUnderline = Boolean(prefersReducedMotion || !rect || dartLanded);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-ink px-5 pb-16 pt-28 sm:px-8"
    >
      <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-eyebrow text-muted">
        {DESCRIPTORS.map((d, i) => (
          <span key={d} className="inline-flex items-center gap-3">
            {d}
            {i < DESCRIPTORS.length - 1 && (
              <span aria-hidden="true" className="text-squirrel">
                ·
              </span>
            )}
          </span>
        ))}
      </div>

      <h1 className="text-display-xl max-w-5xl text-cream">
        Look!{" "}
        <span ref={wordRef} className="relative inline-block text-squirrel">
          Squirrel!
          <span
            aria-hidden="true"
            className="absolute inset-x-0 -bottom-1 h-[0.12em] rounded-full bg-squirrel transition-opacity duration-300"
            style={{ opacity: showStaticUnderline ? 1 : 0 }}
          />
        </span>
      </h1>

      <p className="text-body-l mt-6 max-w-xl text-cream/90">{SITE_TAGLINE}</p>

      <div className="mt-10 flex flex-wrap items-center gap-5">
        <Link
          href={latestEpisodeSlug ? `/episodes/${latestEpisodeSlug}` : "/episodes"}
          className="text-ui-label inline-flex items-center gap-3 rounded-full bg-squirrel px-7 py-3.5 text-ink-deep transition-colors hover:bg-squirrel-hot"
        >
          Play the latest episode
        </Link>
        <a
          href="#listen"
          className="text-ui-label text-cream/80 underline decoration-muted/50 underline-offset-4 transition-colors hover:text-squirrel hover:decoration-squirrel"
        >
          or pick a platform
        </a>
      </div>

      {!prefersReducedMotion && rect && !dartLanded && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute h-[0.12em] rounded-full bg-squirrel shadow-[0_0_18px_2px_rgba(244,141,41,0.55)]"
          style={{ top: rect.y, left: rect.x, width: Math.max(rect.width, 48) }}
          initial={{ x: -(rect.x + window.innerWidth), opacity: 0, scaleX: 0.5 }}
          animate={{ x: [undefined, 14, -6, 0], opacity: [0, 1, 1, 1], scaleX: [0.5, 1.2, 0.95, 1] }}
          transition={{ duration: 0.75, times: [0, 0.55, 0.8, 1], ease: [0.16, 1, 0.3, 1] }}
          onAnimationComplete={() => setDartLanded(true)}
        />
      )}
    </section>
  );
}
