// Fuente de verdad de los proyectos (data-driven). El badge de "Work" en el Nav
// deriva su número de la longitud de este array, y la sección Selected Work se
// alimenta del mismo. Campos en este orden: slug, name, image.
// Las imágenes viven en /public en minúscula; respetar las rutas tal cual
// (Vercel distingue mayúsculas/minúsculas).
export type Project = {
  slug: string;
  name: string;
  image: string;
};

export const projects: Project[] = [
  { slug: "wanikiki", name: "Wanikiki", image: "/work/wanikiki.png" },
  { slug: "como-va-mi-asilo", name: "Cómo va mi asilo", image: "/work/cvma.png" },
  { slug: "fynce", name: "Fynce", image: "/work/fynce.png" },
];
