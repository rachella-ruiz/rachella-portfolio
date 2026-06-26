// Sistema de pills + roles de color. UNA geometría base + variantes por propósito.
//
// PILL_BASE = única fuente de verdad de las DIMENSIONES (radio + padding). No hay
// token --radius-full ni un --space de 0.75rem/0.375rem, así que la geometría
// canónica de pill del sitio es rounded-full + px-3 + py-1.5 (escala de Tailwind),
// que ya compartían todas las pills.
export const PILL_BASE = "inline-flex items-center rounded-full px-3 py-1.5";

// pill-tag y pill-action comparten la GEOMETRÍA base (radio + padding) y el texto
// sans caja-normal sin tracking, pero el RELLENO se decopla por contexto:
//
// pill-tag (discipline pills, sobre fondo NEGRO del case study): relleno SÓLIDO
// grey-900 para que sean visibles. Sin blur, sin transparencia.
export const PILL_TAG = `${PILL_BASE} bg-grey-900 text-button-sm font-primary tracking-normal text-white`;

// pill-action (View work, sobre la card de proyecto con contenido detrás): GLASS
// — translúcido (bg-black/60) + backdrop-blur (valores glass originales). El blur
// necesita contenido rico detrás (que el negro no da), por eso no se usa en tag.
export const PILL_ACTION = `${PILL_BASE} bg-black/60 backdrop-blur-md text-button-lg font-primary tracking-normal text-white`;

// Rol PRIMARY: relleno blanco (grey-200) + texto negro. COMPARTIDO por el botón
// "Send an email" y el badge de proyecto, vía esta misma constante → quedan
// ligados (cambiar uno cambia ambos). El dot morado es exclusivo del badge.
export const PRIMARY_FILL = "bg-grey-200 text-black";
