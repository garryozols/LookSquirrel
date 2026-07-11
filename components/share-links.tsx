"use client";

import { useState } from "react";

export function ShareLinks({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const shareText = encodeURIComponent(`${title} — Look! Squirrel!`);
  const shareUrl = encodeURIComponent(url);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
        target="_blank"
        rel="noreferrer noopener"
        className="text-ui-label rounded-full border border-line px-4 py-2 text-cream/85 transition-colors hover:border-squirrel hover:text-squirrel"
      >
        Share on X
      </a>
      <button
        type="button"
        onClick={copyLink}
        className="text-ui-label rounded-full border border-line px-4 py-2 text-cream/85 transition-colors hover:border-squirrel hover:text-squirrel"
      >
        {copied ? "Link copied" : "Copy link"}
      </button>
    </div>
  );
}
