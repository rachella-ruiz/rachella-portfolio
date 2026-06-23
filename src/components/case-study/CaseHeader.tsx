import type { CaseStudy } from "@/data/case-studies/types";
import Media from "./Media";

// Case-study header inside the 75rem container: pill + overline row, large H1
// on the left with the intro in a right-hand column, a wrapping row of tag
// pills, then the hero media (contained, full-width inside the container).
export default function CaseHeader({
  header,
}: {
  header: CaseStudy["header"];
}) {
  return (
    <header className="mx-auto max-w-[75rem] px-large">
      {/* Pill (glass + leading dot) + overline */}
      <div className="flex flex-wrap items-center gap-small">
        <span className="inline-flex items-center gap-2 rounded-full bg-[var(--opacity-10)] px-3 py-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
          <span className="text-button-sm font-primary text-text-heading">
            {header.pill}
          </span>
        </span>
        <span className="text-overline font-secondary uppercase text-text-tertiary">
          {header.overline}
        </span>
      </div>

      {/* Title (left) + intro (right column, single column) */}
      <div className="mt-large grid grid-cols-1 gap-xlarge min-[992px]:grid-cols-2">
        <h1 className="text-h1 font-primary font-semibold text-text-heading">
          {header.title}
        </h1>
        <p className="text-body-lg leading-body text-text-primary min-[992px]:self-end">
          {header.intro}
        </p>
      </div>

      {/* Tag pills */}
      {header.tags.length > 0 && (
        <ul className="mt-large flex flex-wrap gap-small">
          {header.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[var(--opacity-15)] px-3 py-1.5 text-button-sm font-primary text-text-secondary"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      {/* Hero media: contained full-width inside the container */}
      <div className="mt-xlarge">
        <Media item={header.hero} />
      </div>
    </header>
  );
}
