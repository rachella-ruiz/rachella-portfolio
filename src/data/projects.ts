// Fuente de verdad de los proyectos. El badge de "Work" en el Nav
// deriva su número de la longitud de este array, así que se actualiza solo.
export type Project = {
  slug: string;
  title: string;
  tag: string;
};

export const projects: Project[] = [
  { slug: "wanikiki", title: "Wanikiki", tag: "Fintech" },
  { slug: "como-va-mi-asilo", title: "Cómo va mi asilo", tag: "Legal tech" },
  { slug: "fynce", title: "Fynce", tag: "Fintech" },
];
