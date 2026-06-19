/* eslint-disable @next/next/no-img-element */
// Íconos sociales servidos directamente desde /public (SVG de líneas).
// Se usan <img> a propósito (iconos decorativos de tamaño fijo).
const socials = [
  { label: "LinkedIn", href: "#", src: "/linkedin.svg" },
  { label: "Email", href: "mailto:rachellaruiz@gmail.com", src: "/email.svg" },
  { label: "Teléfono", href: "tel:+10000000000", src: "/call.svg" },
];

export default function Footer() {
  return (
    // footer_wrap: padding 4rem 2rem 1rem 2rem (xlarge / medium / small / medium).
    // El bottom de 1rem evita que el glow del wordmark se recorte en el borde.
    <footer className="px-medium pb-small pt-xlarge">
      {/* Panel blanco, esquinas redondeadas arriba. overflow-x-clip recorta el
          wordmark (22vw) en horizontal sin recortar su borde inferior. */}
      <div className="overflow-x-clip rounded-t-xxlarge bg-white px-medium pt-large text-grey-800 sm:px-large">
        {/* Móvil: columna centrada (íconos arriba, © abajo). Desktop: fila. */}
        <div className="flex flex-col-reverse items-center gap-small md:flex-row md:items-center md:justify-between md:gap-medium">
          {/* Overline mono, gris — una sola línea, centrado en móvil */}
          <p className="whitespace-nowrap text-overline font-secondary uppercase text-grey-500">
            © 2026 Rachella Ruiz
          </p>

          {/* Íconos sociales: fila, gap 1rem, botón circular 3.5rem */}
          <div className="flex flex-row items-center gap-small">
            {socials.map(({ label, href, src }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="m-0 flex h-14 w-14 items-center justify-center rounded-full border border-[#ececec] p-0 transition-[opacity,background-color] duration-200 ease-[ease] hover:bg-[#ececec] hover:opacity-60"
              >
                <img src={src} alt="" className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Wordmark gigante al ancho del panel (font-size 22vw) */}
        <div className="mt-medium">
          <span
            className="block w-full font-primary font-semibold leading-none tracking-tight text-primary-500"
            style={{ fontSize: "22vw" }}
          >
            Portfolio
          </span>
        </div>
      </div>
    </footer>
  );
}
