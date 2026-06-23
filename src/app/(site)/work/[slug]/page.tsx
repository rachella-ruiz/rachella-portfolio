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
    <article className="pt-[var(--space-xhuge)] pb-section-medium">
      {/* Cada bloque entra con la animación de scroll compartida (whileInView). */}
      <Reveal>
        <CaseHeader header={caseStudy.header} />
      </Reveal>

      <div className="mt-section-medium flex flex-col gap-section-medium">
        {caseStudy.sections.map((section, i) => (
          <Reveal key={i}>
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
        ))}
      </div>

      <Reveal className="mt-section-medium">
        <NextCase currentSlug={slug} />
      </Reveal>
    </article>
  );
}
