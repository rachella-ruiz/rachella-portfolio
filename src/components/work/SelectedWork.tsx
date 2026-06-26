import Reveal from "@/components/motion/Reveal";
import PrimaryButton from "@/components/PrimaryButton";
import { projects } from "@/data/projects";
import WorkCard from "./WorkCard";

// Selected Work: dos columnas. Izquierda STICKY (top = altura real del navbar);
// ningún ancestro tiene overflow hidden/clip, así el sticky no se rompe.
// Derecha: cards apiladas dentro de un contenedor con perspectiva 3D (para el
// rotateX del scroll). En móvil, una sola columna y la izquierda deja de pegarse.
// Reutilizable: showViewAll alterna SOLO el botón "View all" (la /work futura
// lo renderiza con showViewAll={false}).
export default function SelectedWork({
  showViewAll = true,
  stickyTop = "var(--space-xxl)",
}: {
  showViewAll?: boolean;
  // Offset `top` de la columna sticky. Default = valor original (Home no cambia).
  // Se aplica inline porque el valor es dinámico (no se puede JIT como clase).
  stickyTop?: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-xlarge md:grid-cols-[minmax(min-content,1fr)_minmax(0,3fr)]">
      {/* Columna izquierda sticky (~25%). min-content evita que el titular se
          recorte. El `top` (offset sticky) llega por `stickyTop` (inline). */}
      <div className="md:sticky md:self-start" style={{ top: stickyTop }}>
        {/* El bloque de texto entra con la animación compartida al hacer scroll. */}
        <Reveal className="flex flex-col gap-medium">
          {/* Titular "Work." con el MISMO tamaño (text-h1, el token de About/
              Contact) y el MISMO dot de acento redondo. Texto corto → cabe en la
              columna ~25% sin romper el grid (a diferencia del viejo "Selected
              Work."). No se aplica el clamp 14vw/11rem de About/Contact porque a
              ese tamaño desbordaría la columna estrecha. */}
          <h2 className="text-h1 font-primary font-semibold text-text-heading">
            Work
            {/* Dot redondo de marca (primary-400), idéntico a About/Contact. */}
            <span
              aria-hidden="true"
              className="ml-[0.04em] inline-block h-[0.16em] w-[0.16em] rounded-full bg-primary-400 align-baseline"
            />
          </h2>

          <p className="max-w-sm text-body text-text-tertiary">
            A selection of products across fintech, legal tech, and operational
            systems.
          </p>

          {/* El gap-medium del flex solo aplica entre hijos presentes; al ocultar
              el botón no queda hueco residual. */}
          {showViewAll && (
            <PrimaryButton href="/work" label="View all" className="self-start" />
          )}
        </Reveal>
      </div>

      {/* Columna derecha: cards con perspectiva para el rotateX 3D.
          overflow-x-clip recorta el desborde horizontal del scale 1.1 al entrar
          (no crea scroll container ni toca overflow-y → la entrada vertical desde
          100vh sigue visible; y al ser hermana del sticky, no lo rompe). */}
      <div
        className="flex flex-col gap-medium overflow-x-clip md:gap-[var(--space-xxl)]"
        style={{ perspective: "1000px" }}
      >
        {projects.map((project) => (
          <WorkCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
