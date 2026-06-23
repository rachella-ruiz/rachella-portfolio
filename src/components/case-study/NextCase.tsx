/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { projects } from "@/data/projects";

// Next case is derived from projects.ts array order, wrapping last → first.
// The whole block links to the next project's case page. Renders nothing if the
// current slug isn't found (defensive).
export default function NextCase({ currentSlug }: { currentSlug: string }) {
  const index = projects.findIndex((p) => p.slug === currentSlug);
  if (index === -1) return null;
  const next = projects[(index + 1) % projects.length];

  return (
    <Link
      href={`/work/${next.slug}`}
      className="block px-large text-center"
    >
      <div className="flex flex-wrap items-center justify-center gap-small">
        <span className="text-overline font-secondary uppercase text-text-tertiary">
          Next case
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-[var(--opacity-10)] px-3 py-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
          <span className="text-button-sm font-primary uppercase text-text-heading">
            {next.name}
          </span>
        </span>
      </div>
      <img
        src={next.image}
        alt={next.name}
        className="mt-large block h-auto w-full rounded-large"
      />
    </Link>
  );
}
