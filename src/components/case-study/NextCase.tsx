"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CursorFollowPill, {
  useCursorFollow,
} from "@/components/motion/CursorFollowPill";
import { projects } from "@/data/projects";

// Next case is derived from projects.ts array order, wrapping last → first.
// The whole block links to the next project's case page. Renders nothing if the
// current slug isn't found (defensive). The image carries the same cursor-follow
// "VIEW WORK" pill hover as the home WorkCards (shared CursorFollowPill).
export default function NextCase({ currentSlug }: { currentSlug: string }) {
  const { x, y, onMouseMove } = useCursorFollow();

  const index = projects.findIndex((p) => p.slug === currentSlug);
  if (index === -1) return null;
  const next = projects[(index + 1) % projects.length];

  // Outer section is full-width (px-large, like the other case sections); the
  // clickable inner block stays constrained to container-tiny (36rem), centered.
  return (
    <div className="px-large">
      <Link
        href={`/work/${next.slug}`}
        className="mx-auto block max-w-[36rem] text-center"
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
        {/* Image = cursor-follow hover target (same behavior as the home cards). */}
        <div
          onMouseMove={onMouseMove}
          className="group relative mt-large overflow-hidden rounded-large"
        >
          <img
            src={next.image}
            alt={next.name}
            className="block h-auto w-full"
          />
          <CursorFollowPill x={x} y={y} label="View work" />
        </div>
      </Link>
    </div>
  );
}
