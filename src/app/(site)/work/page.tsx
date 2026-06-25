import type { Metadata } from "next";
import SelectedWork from "@/components/work/SelectedWork";

export const metadata: Metadata = {
  title: "Work — Rachella Ruiz",
};

// Página /work: reutiliza el MISMO componente SelectedWork que la home, pero sin
// el botón "View all" (showViewAll={false}). Vive dentro del grupo (site) para
// heredar Nav + Footer del layout compartido.
// Aquí la sección es el primer contenido bajo el navbar fijo: el main ya añade
// pt = --nav-height; sumamos pt-[var(--space-xhuge)] para que el titular y la
// primera card queden cómodamente POR DEBAJO del navbar, no pegados a él.
export default function WorkPage() {
  return (
    <section className="px-large pt-[var(--space-xhuge)] pb-section-small">
      {/* Sticky top = limpieza del navbar + gap superior de página (GROUP B,
          --space-xhuge), para que la columna quede fijada desde scroll=0. */}
      <SelectedWork
        showViewAll={false}
        stickyTop="calc(var(--nav-height) + var(--space-xhuge))"
      />
    </section>
  );
}
