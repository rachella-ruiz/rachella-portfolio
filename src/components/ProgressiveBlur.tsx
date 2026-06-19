// Progressive blur decorativo, fijo al borde inferior del viewport.
// Apila varios paneles: cada uno con más blur y una máscara de gradiente
// desplazada hacia abajo, de modo que el desenfoque se intensifica
// gradualmente hacia el fondo. Solo decorativo (pointer-events: none).
const LAYERS = 9;

export default function ProgressiveBlur() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-30 h-24 w-full"
    >
      {Array.from({ length: LAYERS }).map((_, i) => {
        const blur = 0.5 * Math.pow(2, i); // 0.5, 1, 2, 4, ... px
        const start = i * (100 / LAYERS);
        const mask = `linear-gradient(to bottom, transparent ${start}%, black ${
          start + 100 / LAYERS
        }%, black ${start + 200 / LAYERS}%, transparent ${
          start + 300 / LAYERS
        }%)`;
        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              maskImage: mask,
              WebkitMaskImage: mask,
            }}
          />
        );
      })}
    </div>
  );
}
