import PrimaryButton from "@/components/PrimaryButton";
import { projects } from "@/data/projects";
import WorkCard from "./WorkCard";

// Selected Work: dos columnas. Izquierda STICKY (top = altura real del navbar);
// ningún ancestro tiene overflow hidden/clip, así el sticky no se rompe.
// Derecha: cards apiladas dentro de un contenedor con perspectiva 3D (para el
// rotateX del scroll). En móvil, una sola columna y la izquierda deja de pegarse.
export default function SelectedWork() {
  return (
    <div className="grid grid-cols-1 gap-xlarge md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-[var(--space-custom-3)]">
      {/* Columna izquierda sticky */}
      <div className="flex flex-col gap-medium md:sticky md:top-[var(--nav-height)] md:self-start">
        <h2 className="text-h2 font-primary font-semibold text-text-heading">
          Selected
          <br />
          <span className="inline-flex items-center">
            Work
            <span
              aria-hidden="true"
              className="ml-[0.18em] inline-block h-[0.42em] w-[0.42em] rounded-full bg-primary-500"
            />
          </span>
        </h2>

        <p className="max-w-sm text-body-sm text-text-tertiary">
          A selection of products across fintech, legal tech, and operational
          systems.
        </p>

        <PrimaryButton href="/work" label="View all" className="self-start" />
      </div>

      {/* Columna derecha: cards con perspectiva para el rotateX 3D.
          overflow-x-clip recorta el desborde horizontal del scale 1.1 al entrar
          (no crea scroll container ni toca overflow-y → la entrada vertical desde
          100vh sigue visible; y al ser hermana del sticky, no lo rompe). */}
      <div
        className="flex flex-col gap-[var(--space-custom-3)] overflow-x-clip"
        style={{ perspective: "1000px" }}
      >
        {projects.map((project) => (
          <WorkCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
