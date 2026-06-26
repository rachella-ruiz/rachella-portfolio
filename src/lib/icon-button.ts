// "Filled icon-button": tratamiento COMPARTIDO para botones-ícono circulares
// accionables sobre fondo claro/blanco (íconos sociales del footer + botón de
// cierre del menú). Dirección light→dark unificada:
//   - REPOSO: relleno grey-100 (sin borde/outline), ícono oscuro.
//   - HOVER:  relleno grey-200 (un paso más oscuro).
// Solo tokens (sin hex, sin opacity-como-color). El tamaño y el color del ícono
// (img/svg) los aporta cada consumidor; esto define forma + fondo + hover.
export const ICON_BUTTON_CLASS =
  "flex items-center justify-center rounded-full bg-grey-100 transition-colors hover:bg-grey-200";
