import type { CaseStudy } from "@/data/case-studies/types";
import ProjectBadge from "@/components/ProjectBadge";
import { PILL_TAG } from "@/lib/pill";
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
      {/* Badge de proyecto (pill-tag + dot) + overline */}
      <div className="flex flex-wrap items-center gap-small">
        <ProjectBadge name={header.pill} />
        <span className="text-overline font-secondary uppercase text-text-tertiary">
          {header.overline}
        </span>
      </div>

      {/* Two equal-height columns (50/50, grid stretch). LEFT: H1 at the top and
          the tag pills anchored to the BOTTOM. RIGHT: the intro anchored to the
          BOTTOM. So pills (left) and intro (right) share the same bottom baseline.
          mt-small (1rem) = gap to the pill/overline row above. */}
      <div className="mt-small grid grid-cols-1 gap-xlarge min-[992px]:grid-cols-2">
        {/* LEFT: flex column. gap-large = the MINIMUM gap between H1 and pills;
            justify-between (desktop) pushes the pills to the bottom when the
            column is stretched to match the right one. */}
        <div className="flex flex-col gap-large min-[992px]:justify-between">
          <h1 className="text-h3 font-primary font-semibold text-text-heading">
            {header.title}
          </h1>
          {header.tags.length > 0 && (
            <ul className="flex flex-wrap gap-xsmall">
              {header.tags.map((tag) => (
                <li key={tag} className={PILL_TAG}>
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* RIGHT: intro anchored to the bottom of the column (justify-end). */}
        <div className="flex flex-col min-[992px]:justify-end">
          <p className="text-body-lg leading-body text-text-tertiary">
            {header.intro}
          </p>
        </div>
      </div>

      {/* Hero media: contained full-width inside the container */}
      <div className="mt-xlarge">
        <Media item={header.hero} />
      </div>
    </header>
  );
}
