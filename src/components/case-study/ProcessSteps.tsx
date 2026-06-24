import type { ProcessSection as ProcessSectionData } from "@/data/case-studies/types";

// Centered overline + heading stacked above a 2×2 grid of step cards (01 & 02 top
// row, 03 & 04 bottom; collapses to 1 column ≤991px). Each step is a card:
// --surface-card background, --opacity-10 border, --radius-large radius, fluid
// clamp padding. Media no longer lives in this block (it's standalone sections).
export default function ProcessSteps({
  section,
}: {
  section: ProcessSectionData;
}) {
  return (
    <div className="mx-auto max-w-[var(--container-medium)] px-large">
      {/* Cabecera centrada: overline (secundaria) + heading. */}
      <div className="flex flex-col items-center text-center">
        <p className="text-overline font-secondary uppercase text-text-tertiary">
          {section.overline}
        </p>
        <h2 className="mt-small text-h3 font-primary font-semibold text-text-heading">
          {section.heading}
        </h2>
      </div>

      {/* Grid 2×2 (1 columna ≤991px). gap = --space-medium. */}
      <ol className="mt-large grid grid-cols-1 gap-medium min-[992px]:grid-cols-2">
        {section.steps.map((step) => (
          <li
            key={step.number}
            className="rounded-large border border-[var(--opacity-10)] bg-[var(--surface-card)] p-[clamp(24px,2.4vw,34px)]"
          >
            <p className="text-body-lg font-semibold text-text-heading">
              {step.number}. {step.title}
            </p>
            <ul className="mt-small list-disc space-y-small pl-5 text-body leading-body text-text-primary">
              {step.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
