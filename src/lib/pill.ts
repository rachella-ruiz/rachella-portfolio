// Sistema de pills + roles de color. UNA geometría base + variantes por propósito.
//
// PILL_BASE = única fuente de verdad de las DIMENSIONES (radio + padding). No hay
// token --radius-full ni un --space de 0.75rem/0.375rem, así que la geometría
// canónica de pill del sitio es rounded-full + px-3 + py-1.5 (escala de Tailwind),
// que ya compartían todas las pills.
export const PILL_BASE = "inline-flex items-center rounded-full px-3 py-1.5";

// pill-tag (informativa: discipline pills) y pill-action (interactiva: View work)
// resuelven al MISMO estilo: relleno gris oscuro semi-transparente (black/60), SIN
// borde, sans-serif, caja normal, sin tracking. Nombres separados por propósito;
// estilo idéntico (el outline se mueve al botón secundario "Schedule a call").
const PILL_FILLED = `${PILL_BASE} bg-black/60 text-button-sm font-primary tracking-normal text-white`;
export const PILL_TAG = PILL_FILLED;
export const PILL_ACTION = PILL_FILLED;

// Rol PRIMARY: relleno blanco (grey-200) + texto negro. COMPARTIDO por el botón
// "Send an email" y el badge de proyecto, vía esta misma constante → quedan
// ligados (cambiar uno cambia ambos). El dot morado es exclusivo del badge.
export const PRIMARY_FILL = "bg-grey-200 text-black";
