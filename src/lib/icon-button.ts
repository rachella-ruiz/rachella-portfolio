// "Outline icon-button": tratamiento COMPARTIDO para botones-ícono circulares
// accionables sobre fondo claro/blanco (íconos sociales del footer + botón de
// cierre del menú). Dirección light→dark unificada:
//   - REPOSO: sin relleno (transparente), borde hairline grey-200, ícono oscuro.
//   - HOVER:  relleno grey-100, borde transparente (círculo lleno limpio).
// Solo tokens (sin hex, sin opacity-como-color). El tamaño y el contenido
// (img/svg) los aporta cada consumidor; esto define forma + color + hover.
export const ICON_BUTTON_CLASS =
  "flex items-center justify-center rounded-full border border-grey-200 transition-colors hover:border-transparent hover:bg-grey-100";
