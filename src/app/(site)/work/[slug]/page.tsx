import { notFound } from "next/navigation";
import CaseHeader from "@/components/case-study/CaseHeader";
import FeatureSection from "@/components/case-study/FeatureSection";
import MediaBand from "@/components/case-study/MediaBand";
import NextCase from "@/components/case-study/NextCase";
import ProcessSteps from "@/components/case-study/ProcessSteps";
import TextSection from "@/components/case-study/TextSection";
import Reveal from "@/components/motion/Reveal";
import { caseStudies } from "@/data/case-studies";

// Static params come from the registry keys. The registry is empty for now, so
// no static pages are generated yet — expected, not a bug.
export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

// En Next 16 `params` es un Promise: hay que await.
export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = caseStudies[slug];
  if (!caseStudy) notFound();

  return (
    <article className="pt-xlarge">
      {/* Cada bloque entra con la animación de scroll compartida (whileInView). */}
      <Reveal>
        <CaseHeader header={caseStudy.header} />
      </Reveal>

      <div className="mt-section-medium flex flex-col">
        {caseStudy.sections.map((section, i) => {
          const prev = caseStudy.sections[i - 1];
          // Medium-width media are the Design Process artifacts. They belong to
          // that block, so the FIRST one hugs the cards with the same rhythm as
          // the heading→cards gap (--space-large via mt-large); subsequent ones
          // stack tight (--space-small). Everything else uses the section gap.
          const isMediumMedia =
            section.kind === "media" && section.width === "medium";
          const prevIsMediumMedia =
            prev?.kind === "media" && prev.width === "medium";
          let spacing = "mt-section-medium";
          if (i === 0) spacing = "";
          else if (isMediumMedia) spacing = prevIsMediumMedia ? "mt-small" : "mt-large";
          return (
            <Reveal key={i} className={spacing}>
              {section.kind === "text" ? (
                <TextSection section={section} />
              ) : section.kind === "process" ? (
                <ProcessSteps section={section} />
              ) : section.kind === "media" ? (
                <MediaBand section={section} />
              ) : (
                <FeatureSection section={section} />
              )}
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-section-medium">
        <NextCase currentSlug={slug} />
      </Reveal>
    </article>
  );
}
