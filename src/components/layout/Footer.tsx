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
    // Footer pegado al borde inferior: lateral 0.75rem, superior 8rem, sin inferior.
    <footer className="px-3 pt-section-medium">
      {/* Panel blanco con esquinas redondeadas solo arriba, flush abajo */}
      <div className="overflow-hidden rounded-t-xxlarge bg-white px-medium pt-large text-grey-800 sm:px-large">
        <div className="flex items-center justify-between gap-medium">
          {/* Overline mono, gris */}
          <p className="text-overline font-secondary uppercase text-grey-500">
            © 2026 Rachella Ruiz
          </p>

          {/* Íconos sociales: fila, gap 1rem, botón circular 3.5rem */}
          <div className="flex flex-row items-center gap-small">
            {socials.map(({ label, href, src }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="m-0 flex h-14 w-14 items-center justify-center rounded-full border border-grey-300 p-0 transition-[opacity,background-color] duration-200 ease-[ease] hover:bg-[#ececec] hover:opacity-60"
              >
                <img src={src} alt="" className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Wordmark gigante al ancho del panel */}
        <div className="mt-medium">
          <span
            className="block w-full font-primary font-semibold leading-none tracking-tight text-primary-500"
            style={{ fontSize: "clamp(4rem, 19vw, 17rem)" }}
          >
            Portfolio
          </span>
        </div>
      </div>
    </footer>
  );
}
