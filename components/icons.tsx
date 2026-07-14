import type { Platform } from "@/lib/types";

export function PlatformIcon({ icon }: { icon: Platform["icon"] }) {
  switch (icon) {
    case "spotify":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
          <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M7 10.2c3.3-.9 6.9-.6 9.6 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M7.4 13.1c2.7-.7 5.7-.5 8 .8"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M7.8 15.9c2.1-.5 4.5-.4 6.3.7"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "apple":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
          <path
            d="M15.4 4.6c-.7.85-1.85 1.5-2.95 1.4-.15-1.1.4-2.25 1.05-2.95.7-.85 1.9-1.45 2.9-1.5.1 1.15-.35 2.25-1 3.05Z"
            fill="currentColor"
          />
          <path
            d="M18.9 17.1c-.35.8-.7 1.45-1.15 2.05-.6.85-1.35 1.95-2.35 1.95-.9 0-1.15-.55-2.4-.55-1.25 0-1.55.55-2.4.55-1 0-1.7-.95-2.3-1.8-1.6-2.25-2.8-6.4-1.15-9.15.8-1.35 2.25-2.2 3.8-2.2 1.05 0 1.95.6 2.65.6.7 0 1.85-.75 3.1-.65a3.9 3.9 0 0 1 3 1.65c-2.65 1.55-2.25 5.4.7 6.55Z"
            fill="currentColor"
          />
        </svg>
      );
    case "amazon":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
          <path
            d="M6 16.2c3.6 2.4 8.4 2.6 12.4.4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M17.6 15.6c.9-.15 1.9.1 2.1.5.2.4-.35 1.5-1 2.2"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 12.4V9.6c0-1.5 1.1-2.5 2.7-2.5s2.7 1 2.7 2.5v2.9M9.5 12.4c0 1.1.9 1.9 2 1.9M9.5 12.4c-.9.2-1.6.9-1.6 1.7 0 1 .9 1.7 2 1.7 1.4 0 2.3-1 2.3-2.4"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      );
    case "rss":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
          <circle cx="6.2" cy="17.8" r="1.6" fill="currentColor" />
          <path
            d="M5 11.5c4.7 0 7.5 2.8 7.5 7.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M5 6.2c7.6 0 12.8 5.2 12.8 12.8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
          <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M13.6 20v-6.4h2.15l.32-2.5h-2.47V9.45c0-.72.2-1.22 1.24-1.22h1.32V6c-.23-.03-1-.1-1.9-.1-1.9 0-3.2 1.15-3.2 3.28v1.82H8.9v2.5h2.06V20"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
          <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 8.5v7l6-3.5-6-3.5Z" fill="currentColor" />
        </svg>
      );
  }
}
