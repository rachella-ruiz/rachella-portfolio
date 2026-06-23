import type { ProcessSection as ProcessSectionData } from "@/data/case-studies/types";
import Media from "./Media";
import SplitLayout from "./SplitLayout";

// LEFT: overline + heading + numbered steps (bold "NN. Title" + a bullet list).
// RIGHT: media stacked vertically with spacing. On mobile SplitLayout stacks
// (text first, then media).
export default function ProcessSteps({
  section,
}: {
  section: ProcessSectionData;
}) {
  return (
    <div className="px-large">
      <SplitLayout
        ratio="minmax(0,1fr) minmax(0,1fr)"
        left={
          <div>
            <p className="text-overline font-secondary uppercase text-text-tertiary">
              {section.overline}
            </p>
            <h2 className="mt-small text-h3 font-primary font-semibold text-text-heading">
              {section.heading}
            </h2>
            <ol className="mt-large flex flex-col gap-large">
              {section.steps.map((step) => (
                <li key={step.number}>
                  <p className="text-body-lg font-semibold text-text-heading">
                    {step.number}. {step.title}
                  </p>
                  <ul className="mt-small list-disc space-y-small pl-5 text-body-lg leading-body text-text-primary">
                    {step.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        }
        right={
          section.media && section.media.length > 0 ? (
            <div className="flex flex-col gap-large">
              {section.media.map((item, i) => (
                <Media key={i} item={item} />
              ))}
            </div>
          ) : null
        }
      />
    </div>
  );
}
