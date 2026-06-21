import Link from "next/link";

// Markup del "roll" vertical (dos copias apiladas; una sube y sale, la otra
// entra desde abajo), ~0.4s, reversible.
function Roll({ label }: { label: string }) {
  return (
    <span className="relative block overflow-hidden">
      <span className="block transition-transform duration-[400ms] ease-out group-hover:-translate-y-full">
        {label}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 block translate-y-full transition-transform duration-[400ms] ease-out group-hover:translate-y-0"
      >
        {label}
      </span>
    </span>
  );
}

// Link con hover compartido por el navbar y el menú:
//  - "roll" vertical del texto.
//  - punto morado opcional (scale + opacity). Posición según `dotPosition`:
//      "top": arriba-derecha del texto (navbar).
//      "end": al FINAL del contenedor (ancho completo, space-between) (menú).
// No cambia el color del texto en hover (se controla con `className`).
export default function RollLink({
  href,
  label,
  onClick,
  showDot = true,
  dotPosition = "top",
  badge,
  className,
}: {
  href: string;
  label: string;
  onClick?: () => void;
  showDot?: boolean;
  dotPosition?: "top" | "end";
  badge?: React.ReactNode;
  className?: string;
}) {
  if (dotPosition === "end") {
    // Texto a la izquierda, punto al final del contenedor (space-between).
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`group flex w-full items-center justify-between ${className ?? ""}`}
      >
        <Roll label={label} />
        {showDot && (
          // El punto va centrado en una columna del ancho del botón × (w-xlarge),
          // anclada al borde derecho. Así el centro del punto cae sobre el centro
          // del botón × en cada breakpoint (w-xlarge es responsive como la X).
          <span className="flex w-xlarge shrink-0 items-center justify-center">
            <span
              aria-hidden="true"
              className="h-[0.45em] w-[0.45em] scale-0 rounded-full bg-primary-500 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100"
            />
          </span>
        )}
      </Link>
    );
  }

  // dotPosition "top": punto arriba-derecha del texto (medida en em, escala con la fuente).
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative inline-flex items-center ${className ?? ""}`}
    >
      {showDot && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-[0.3em] w-[0.3em] -translate-y-1/2 translate-x-[150%] scale-0 rounded-full bg-primary-500 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100"
        />
      )}
      <Roll label={label} />
      {badge}
    </Link>
  );
}
