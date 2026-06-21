// Marquee reutilizable: desplaza el texto en bucle horizontal infinito.
// Renderiza DOS copias idénticas y la pista se mueve -50% (loop sin costura).
// Decorativo (aria-hidden). El estilo de color/opacidad se pasa por className.
export default function Marquee({
  text,
  repeat = 6,
  className,
}: {
  text: string;
  repeat?: number;
  className?: string;
}) {
  const group = Array.from({ length: repeat });
  return (
    <div
      aria-hidden="true"
      className={`flex overflow-hidden ${className ?? ""}`}
    >
      {/* Pista: dos grupos idénticos para el loop sin costura */}
      <div className="marquee-track flex shrink-0">
        {[0, 1].map((g) => (
          <div key={g} className="flex shrink-0">
            {group.map((_, i) => (
              <span
                key={i}
                className="whitespace-nowrap pr-medium text-overline font-secondary uppercase tracking-overline"
              >
                {text} –
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
