import type { CaseStudy } from "@/data/case-studies/types";
import Media from "./Media";

// Case-study header in the site's full-width (px-large) container: pill + overline
// row, the H1 (H3 type scale) on the left with the intro (tertiary) in a right-hand
// column, a wrapping row of tag pills, then the hero media. Rows are 1rem
// (--space-small) apart.
export default function CaseHeader({
  header,
}: {
  header: CaseStudy["header"];
}) {
  return (
    <header className="px-large">
      {/* Pill (glass + leading dot) + overline */}
      <div className="flex flex-wrap items-center gap-small">
        <span className="inline-flex items-center gap-2 rounded-full bg-[var(--opacity-10)] px-3 py-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
          <span className="text-button-sm font-primary text-text-heading">
            {header.pill}
          </span>
        </span>
        <span className="text-overline font-secondary uppercase text-text-tertiary">
          {header.overline}
        </span>
      </div>

      {/* Title (left ~60%, H3 scale) + intro (right ~40% column, aligned lower).
          mt-small (1rem) = gap to the pill/overline row above. */}
      <div className="mt-small grid grid-cols-1 gap-xlarge min-[992px]:grid-cols-[3fr_2fr]">
        <h1 className="text-h3 font-primary font-semibold text-text-heading">
          {header.title}
        </h1>
        <p className="text-body-lg leading-body text-text-tertiary min-[992px]:self-end">
          {header.intro}
        </p>
      </div>

      {/* Tag pills. mt-small (1rem) = gap to the H1 row above; gap-xsmall (0.5rem)
          between individual pills (row + column, since they wrap). */}
      {header.tags.length > 0 && (
        <ul className="mt-small flex flex-wrap gap-xsmall">
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
