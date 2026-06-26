import type { Metadata } from "next";
import type { ReactNode } from "react";
import Globe from "@/components/hero/Globe";
import Reveal from "@/components/motion/Reveal";
import PrimaryButton from "@/components/PrimaryButton";
import ScheduleCallLink from "@/components/ScheduleCallLink";
import {
  EMAIL,
  EMAIL_HREF,
  LINKEDIN_LABEL,
  LINKEDIN_URL,
  LOCATION_LABEL,
} from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact — Rachella Ruiz",
};

// Columna de info: overline mono (token de overline del sitio) + valor debajo.
function InfoColumn({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-small">
      <p className="text-overline font-secondary uppercase tracking-overline text-text-tertiary">
        {label}
      </p>
      {children}
    </div>
  );
}

const VALUE_LINK =
  "text-body-lg font-primary text-text-heading transition-colors hover:text-text-tertiary";

export default function ContactPage() {
  return (
    // Group B (About/Work): pt = --space-xhuge, gutter px-large. min-h llena el
    // viewport bajo el navbar fijo para anclar el bloque inferior abajo (mt-auto).
    <section className="flex min-h-[calc(100svh-var(--nav-height))] flex-col px-large pt-[var(--space-xhuge)] pb-section-small">
      {/* Titular gigante con dot de acento — MISMO tratamiento que el título de
          About (text-h1 + clamp + span dot primary-400), aquí alineado a la izq. */}
      <Reveal>
        <h1
          className="text-h1 font-primary font-semibold text-text-heading"
          style={{ fontSize: "clamp(var(--size-h1), 14vw, 11rem)" }}
        >
          Contact
          <span
            aria-hidden="true"
            className="ml-[0.04em] inline-block h-[0.16em] w-[0.16em] rounded-full bg-primary-400 align-baseline"
          />
        </h1>
      </Reveal>

      {/* Bloque inferior. Izquierda: label + intro + par de CTAs (mismos
          componentes que el Connect CTA del home). Derecha (misma fila,
          alineada al fondo): tres columnas de info con overlines mono. */}
      <Reveal className="mt-auto flex flex-col gap-xlarge pt-section-medium lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col">
          <h2 className="text-h5 font-primary font-semibold text-text-heading">
            Let&rsquo;s connect
          </h2>
          <p className="mt-small max-w-sm text-body-lg leading-body text-text-tertiary">
            Schedule an intro call to talk about what you&rsquo;re building, or
            just reach out directly.
          </p>
          <div className="mt-large flex flex-wrap items-center gap-medium">
            <PrimaryButton href={EMAIL_HREF} label="Send an email" />
            <ScheduleCallLink />
          </div>
        </div>

        <div className="flex flex-wrap gap-xlarge">
          <InfoColumn label="Email">
            <a href={EMAIL_HREF} className={VALUE_LINK}>
              {EMAIL}
            </a>
          </InfoColumn>
          <InfoColumn label="LinkedIn">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={VALUE_LINK}
            >
              {LINKEDIN_LABEL}
            </a>
          </InfoColumn>
          <InfoColumn label="Based in">
            <span className="inline-flex items-center gap-xsmall text-body-lg font-primary text-text-heading">
              <Globe className="inline-block h-5 w-5" />
              {LOCATION_LABEL}
            </span>
          </InfoColumn>
        </div>
      </Reveal>
    </section>
  );
}
