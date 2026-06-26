/* eslint-disable @next/next/no-img-element */
import { SCHEDULE_CALL_HREF } from "@/data/contact";

// Íconos sociales servidos directamente desde /public (SVG de líneas).
// Se usan <img> a propósito (iconos decorativos de tamaño fijo).
const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rachella-ruiz/",
    src: "/icons/linkedin.svg",
  },
  {
    label: "Email",
    href: "mailto:rachellaruiz@gmail.com",
    src: "/icons/email.svg",
  },
  {
    label: "Teléfono",
    href: SCHEDULE_CALL_HREF,
    src: "/icons/call.svg",
  },
];

export default function Footer() {
  return (
    // Footer full-width: sin inset lateral, solo padding superior (section-medium).
    <footer className="pt-section-medium">
      {/* Card blanca full-bleed: toca los bordes de pantalla (las esquinas
          superiores redondeadas llegan al borde, intencional). Padding vertical
          intacto; SIN padding lateral propio (lo aporta el wrapper de contenido).
          overflow-hidden recorta el sobrante vacío de la caja de línea del
          wordmark (20vw) sin cortar los glifos. */}
      <div className="overflow-hidden rounded-t-xxlarge bg-white pb-[4rem] pt-[2.25rem] text-grey-800 md:pt-[4rem]">
        {/* Wrapper de contenido: px-large = el MISMO gutter lateral que el resto
            del sitio (hereda la reducción responsive en móvil). */}
        <div className="px-large">
          {/* Móvil: columna centrada (íconos arriba, © abajo). Desktop: fila. */}
          <div className="flex flex-col-reverse items-center gap-small md:flex-row md:items-center md:justify-between md:gap-medium">
            {/* Overline mono, gris — una sola línea, centrado en móvil */}
            <p className="whitespace-nowrap text-overline font-secondary uppercase text-grey-500">
              © 2026 Rachella Ruiz
            </p>

            {/* Íconos sociales: fila, gap 1rem, botón circular 3.5rem */}
            <div className="flex flex-row items-center gap-small">
              {socials.map(({ label, href, src }) => {
                const external = href.startsWith("http");
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="m-0 flex h-14 w-14 items-center justify-center rounded-full border border-[#ececec] p-0 transition-[opacity,background-color] duration-200 ease-[ease] hover:bg-[#ececec] hover:opacity-60"
                  >
                    <img src={src} alt="" className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Wordmark gigante (font-size 20vw). Sin tracking/transform/margen. */}
          <div className="mt-medium">
            <span
              className="block w-full text-center font-primary font-semibold leading-none text-primary-400 md:text-left"
              style={{ fontSize: "20vw" }}
            >
              Portfolio
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
