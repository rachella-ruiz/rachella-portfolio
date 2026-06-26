// Sistema de pills. UNA geometría base + variantes que solo cambian por propósito.
//
// PILL_BASE = única fuente de verdad de las DIMENSIONES (radio + padding). No hay
// token --radius-full ni un --space de 0.75rem/0.375rem, así que la geometría
// canónica de pill del sitio es rounded-full + px-3 + py-1.5 (escala de Tailwind),
// que ya compartían todas las pills. Las variantes heredan esto y solo varían
// el color/relleno/borde.
export const PILL_BASE = "inline-flex items-center rounded-full px-3 py-1.5";

// pill-tag: variante INFORMATIVA. Outline (borde sutil, relleno transparente),
// sans-serif, capitalización normal, SIN dot, SIN hover. (Las discipline pills.)
export const PILL_TAG = `${PILL_BASE} border border-[var(--opacity-15)] text-button-sm font-primary text-text-secondary`;
