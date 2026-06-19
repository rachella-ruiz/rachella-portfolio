// Fuente de verdad de los proyectos. El badge de "Work" en el Nav deriva su
// número de la longitud de este array (data-driven), así que se actualiza solo.
// Por ahora está vacío a propósito (badge = 0) para verificar la integración;
// en producción se irá poblando con los proyectos reales.
export type Project = {
  slug: string;
  title: string;
  tag: string;
};

export const projects: Project[] = [];
