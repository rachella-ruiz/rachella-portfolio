/* eslint-disable @next/next/no-img-element */
// Íconos sociales servidos directamente desde /public (SVG de líneas).
// Se usan <img> a propósito (iconos decorativos de tamaño fijo).
const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rachella-ruiz/",
    src: "/linkedin.svg",
  },
  { label: "Email", href: "mailto:rachellaruiz@gmail.com", src: "/email.svg" },
  {
    label: "Teléfono",
    href: "https://calendly.com/rachellaruiz/30min",
    src: "/call.svg",
  },
];

export default function Footer() {
  return (
    // Wrapper externo: inset 0.75rem lados (margen del panel) + 8rem arriba.
    <footer className="px-3 pt-section-medium">
      {/* Card blanca (footer_wrap). Padding lateral = gutter de página menos el inset
          del panel (0.75rem), de modo que (inset + padding) = var(--space-large),
          el MISMO gutter horizontal que usa la navbar (px-large) en cada breakpoint.
          Así el contenido del footer cae sobre los mismos ejes que el logo/hamburguesa.
          overflow-hidden recorta el wordmark (22vw) en horizontal y el sobrante vacío
          de su caja de línea (evita el espacio negro) sin cortar los glifos. */}
      <div className="overflow-hidden rounded-t-xxlarge bg-white px-[calc(var(--space-large)-0.75rem)] pb-[5rem] pt-[2.25rem] text-grey-800 md:pt-[4rem]">
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

        {/* Wordmark gigante al ancho del panel (font-size 20vw).
            Sin tracking/transform/margen: sus bordes ópticos caen sobre los gutters. */}
        <div className="mt-medium">
          <span
            className="block w-full font-primary font-semibold leading-none text-primary-500"
            style={{ fontSize: "20vw" }}
          >
            Portfolio
          </span>
        </div>
      </div>
    </footer>
  );
}
