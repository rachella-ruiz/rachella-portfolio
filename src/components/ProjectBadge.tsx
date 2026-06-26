import { PILL_TAG } from "@/lib/pill";

// Badge de nombre de proyecto: MISMA geometría que las pill-tag + un dot de
// acento (●) que es EXCLUSIVO de este badge (pill-tag nunca lo lleva). Nombre en
// sans-serif, caja normal. Componente único compartido por las cards de Selected
// Work, el header del case study y el bloque Next case (antes 3 implementaciones).
export default function ProjectBadge({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <span className={`${PILL_TAG} gap-2 ${className ?? ""}`}>
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400"
      />
      {name}
    </span>
  );
}
