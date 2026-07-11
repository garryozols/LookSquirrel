import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg font-extrabold tracking-tight text-cream transition-colors hover:text-squirrel"
        >
          Look! Squirrel!
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-6">
          <Link
            href="/episodes"
            className="text-ui-label text-cream/90 transition-colors hover:text-squirrel"
          >
            Episodes
          </Link>
          <Link
            href="/#listen"
            className="text-ui-label rounded-sm border border-squirrel px-3 py-1.5 text-squirrel transition-colors hover:bg-squirrel hover:text-ink-deep"
          >
            Listen
          </Link>
        </nav>
      </div>
    </header>
  );
}
