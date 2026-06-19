import Link from "next/link";

// Link con hover compartido por el navbar y el menú:
//  - "roll" vertical del texto (dos copias apiladas; una sube y sale, la otra
//    entra desde abajo), ~0.4s, reversible.
//  - punto morado opcional (scale + opacity). Su posición depende de
//    `dotPosition`: "top" (arriba-derecha, navbar) o "end" (centrado al final
//    de la línea, menú).
// No cambia el color del texto en hover (se controla con `className`).
// Las medidas del punto van en `em`, así escala con el tamaño de fuente.
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
  const dotClasses =
    dotPosition === "end"
      ? // centrado verticalmente, al final de la línea
        "top-1/2 right-0 -translate-y-1/2 translate-x-[160%]"
      : // arriba a la derecha del texto
        "top-0 right-0 -translate-y-1/2 translate-x-[150%]";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative inline-flex items-center ${className ?? ""}`}
    >
      {showDot && (
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute ${dotClasses} h-[0.3em] w-[0.3em] scale-0 rounded-full bg-primary-500 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100`}
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
