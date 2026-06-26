import { PILL_BASE, PRIMARY_FILL } from "@/lib/pill";

// Badge de nombre de proyecto: rol PRIMARY (relleno blanco vía PRIMARY_FILL,
// ligado al botón "Send an email") + un dot de acento morado (●) EXCLUSIVO de
// este badge. Geometría base compartida; nombre en sans-serif, caja normal.
// Componente único compartido por las cards de Selected Work, el header del case
// study y el bloque Next case (antes 3 implementaciones).
export default function ProjectBadge({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <span
      className={`${PILL_BASE} gap-2 ${PRIMARY_FILL} text-button-sm font-primary ${className ?? ""}`}
    >
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400"
      />
      {name}
    </span>
  );
}
