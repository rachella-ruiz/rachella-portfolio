import Link from "next/link";

// Link con hover compartido por el navbar y el menú:
//  - "roll" vertical del texto (dos copias apiladas; una sube y sale, la otra
//    entra desde abajo), ~0.4s, reversible.
//  - punto morado opcional arriba-derecha (scale + opacity).
// No cambia el color del texto en hover (se controla con `className`).
// Las medidas del punto van en `em`, así escala con el tamaño de fuente.
export default function RollLink({
  href,
  label,
  onClick,
  showDot = true,
  badge,
  className,
}: {
  href: string;
  label: string;
  onClick?: () => void;
  showDot?: boolean;
  badge?: React.ReactNode;
  className?: string;
}) {
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

      {/* Roll: dos copias del label */}
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

      {badge}
    </Link>
  );
}
