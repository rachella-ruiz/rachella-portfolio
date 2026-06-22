import type { Metadata } from "next";
import AboutGallery from "@/components/about/AboutGallery";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About — Rachella Ruiz",
};

// Párrafos (verbatim) como strings para no escapar apóstrofos/comillas en JSX.
const paragraphs = [
  "I'm Rachella, a product designer drawn to complex, high-stakes systems, and to the question of how you make them workable for the people who have to use, navigate, or operate them. My background spans three countries and an unconventional path through product design, entrepreneurship, and migration.",
  "I started my career in Havana, designing interfaces at a web agency while building my first product on the side: Wanikiki, a remittance platform I designed and operated end-to-end during Cuba's 2021 currency crisis, helping families move money to one another when the financial system had all but broken down.",
  // P3 lleva el título en cursiva: se renderiza aparte.
  "In 2024 I relocated to the United States. The transition took real time: a new country, a new language, a full recalibration. I used that time deliberately: a postgraduate program at UT Austin, certifications in AI for Designers and accessibility, and deepening my technical foundations.",
  "I'm currently building Nuxera.io, an AI-powered tool helping US-based remote workers navigate Spain's Digital Nomad Visa process.",
  "Looking back, a common thread across my work has been designing systems that make complex processes easier to understand, trust, and act on.",
  "These days I'm especially interested in how AI can help people navigate complex decisions, learn faster, and gain more agency in areas of life that traditionally required expert guidance. I'm happiest working closely with a small team, close to the work and the people it's for.",
];

const hobbies = [
  "Moving — lifting, cycling, yoga, and running. Planning to live a long life.",
  'Making — miniatures on Sunday mornings. Current project: "Seeking Blue".',
  "Learning — Every day: Italian (1,080-day Duolingo streak). This season: tarot.",
  "Slowing down — daily meditation, knitting when my brain needs to stop, and too much time inspecting my garden.",
  "Getting outside — hiking, camping, and as much time in nature as I can get. Learning to kayak next.",
  "Playing — just started playing World of Warcraft.",
  'Reading — "Thus Spoke Zarathustra" in the mornings, "Circe" at night. Not every day.',
];

export default function AboutPage() {
  return (
    <>
      {/* Contenedor centrado MÁS ESTRECHO que el ancho por defecto. pt-xhuge para
          que el titular quede cómodamente bajo el navbar fijo. */}
      <div className="mx-auto max-w-[75rem] px-large pt-[var(--space-xhuge)]">
        {/* Misma estructura de dos columnas que SelectedWork (25/75, mismo gap,
            izquierda sticky), pero colapsa a una columna en ≤991px. */}
        <div className="grid grid-cols-1 gap-xlarge min-[992px]:grid-cols-[minmax(min-content,1fr)_minmax(0,3fr)]">
          {/* Columna izquierda sticky: titular + subtítulo */}
          <div className="min-[992px]:sticky min-[992px]:top-[var(--space-xxl)] min-[992px]:self-start">
            <Reveal className="flex flex-col gap-medium">
              <h1 className="text-h1 font-primary font-semibold text-text-heading">
                About
                {/* Punto final coloreado (mismo tratamiento que SelectedWork). */}
                <span className="text-primary-500">.</span>
              </h1>
              <p className="text-h6 font-primary font-semibold text-grey-400">
                The journey that has shaped my work
              </p>
            </Reveal>
          </div>

          {/* Columna derecha: contenido */}
          <Reveal className="text-body-lg leading-body text-text-primary">
            <div className="flex flex-col gap-medium">
              <p>{paragraphs[0]}</p>
              <p>{paragraphs[1]}</p>
              {/* P3 con el título en cursiva */}
              <p>
                In 2021 I moved to Spain, completed a master&rsquo;s in UX Design
                and Web Development, and immediately embedded myself in the
                fintech and legal sectors. In 2023 I co-founded LegalES, a legal
                tech company supporting immigrants through Spain&rsquo;s
                bureaucratic processes. I led the entire digital strategy:
                product, platform, brand, and growth. The tool we built,{" "}
                <em>¿Cómo va mi asilo?</em>, let asylum seekers check the status
                of their case in seconds instead of navigating the process blind,
                and became widely adopted within a community of 120K people.
              </p>
              <p>{paragraphs[2]}</p>
              <p>{paragraphs[3]}</p>
              <p>{paragraphs[4]}</p>
              <p>{paragraphs[5]}</p>
            </div>

            <h2 className="mt-large text-h5 font-primary font-semibold text-text-heading">
              When I&rsquo;m not working:
            </h2>
            <ul className="mt-medium list-disc space-y-small pl-5">
              {hobbies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Galería full-bleed (rompe el contenedor estrecho). Entrada compartida. */}
      <Reveal className="mt-section-medium w-full">
        <AboutGallery />
      </Reveal>
    </>
  );
}
