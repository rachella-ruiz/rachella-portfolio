// Guía de estilo — verifica visualmente que los design tokens quedaron
// conectados a Tailwind y a las fuentes (next/font).

type TextStyle = {
  name: string;
  className: string;
  sample: string;
};

// Estilos de texto del sistema, de mayor a menor (h1 → caption).
const textStyles: TextStyle[] = [
  { name: "h1", className: "text-h1 font-primary", sample: "Rachella Ruiz" },
  { name: "h2", className: "text-h2 font-primary", sample: "Diseñadora de producto" },
  { name: "h3", className: "text-h3 font-primary", sample: "Sistema de diseño" },
  { name: "h4", className: "text-h4 font-primary", sample: "Encabezado nivel 4" },
  { name: "h5", className: "text-h5 font-primary", sample: "Encabezado nivel 5" },
  { name: "h6", className: "text-h6 font-primary", sample: "Encabezado nivel 6" },
  { name: "body-lg", className: "text-body-lg font-primary", sample: "Texto de cuerpo grande para introducciones y destacados." },
  { name: "body", className: "text-body font-primary", sample: "Texto de cuerpo estándar, el que más se usa en párrafos." },
  { name: "body-sm", className: "text-body-sm font-primary", sample: "Texto de cuerpo pequeño para notas y detalles secundarios." },
  { name: "button-lg", className: "text-button-lg font-primary", sample: "Botón grande" },
  { name: "button-sm", className: "text-button-sm font-primary", sample: "Botón pequeño" },
  { name: "overline", className: "text-overline font-secondary uppercase", sample: "Overline / etiqueta" },
  { name: "caption", className: "text-caption font-primary", sample: "Caption: texto auxiliar pequeño." },
];

type Swatch = {
  name: string;
  hex: string;
  className: string;
};

const primary: Swatch[] = [
  { name: "primary-100", hex: "#d9d7fe", className: "bg-primary-100" },
  { name: "primary-200", hex: "#b6adfd", className: "bg-primary-200" },
  { name: "primary-300", hex: "#8b80fb", className: "bg-primary-300" },
  { name: "primary-400", hex: "#6257f2", className: "bg-primary-400" },
  { name: "primary-500", hex: "#483de1", className: "bg-primary-500" },
  { name: "primary-600", hex: "#322ac4", className: "bg-primary-600" },
  { name: "primary-700", hex: "#2218a3", className: "bg-primary-700" },
  { name: "primary-800", hex: "#140a74", className: "bg-primary-800" },
  { name: "primary-900", hex: "#06033d", className: "bg-primary-900" },
  { name: "primary-1000", hex: "#020226", className: "bg-primary-1000" },
];

const grey: Swatch[] = [
  { name: "grey-100", hex: "#f4f4f4", className: "bg-grey-100" },
  { name: "grey-200", hex: "#e0e0e0", className: "bg-grey-200" },
  { name: "grey-300", hex: "#c6c6c6", className: "bg-grey-300" },
  { name: "grey-400", hex: "#a8a8a8", className: "bg-grey-400" },
  { name: "grey-500", hex: "#8d8d8d", className: "bg-grey-500" },
  { name: "grey-600", hex: "#6f6f6f", className: "bg-grey-600" },
  { name: "grey-700", hex: "#525252", className: "bg-grey-700" },
  { name: "grey-800", hex: "#393939", className: "bg-grey-800" },
  { name: "grey-900", hex: "#262626", className: "bg-grey-900" },
  { name: "grey-1000", hex: "#1a1a1a", className: "bg-grey-1000 border border-grey-700" },
];

const accents: Swatch[] = [
  { name: "accent", hex: "#cedb8e", className: "bg-accent" },
  { name: "red", hex: "#ca423f", className: "bg-red" },
  { name: "green", hex: "#38a879", className: "bg-green" },
  { name: "yellow", hex: "#dfc35f", className: "bg-yellow" },
  { name: "white", hex: "#ffffff", className: "bg-white" },
  { name: "black", hex: "#000000", className: "bg-black border border-grey-700" },
];

function Swatches({ title, items }: { title: string; items: Swatch[] }) {
  return (
    <div className="space-y-small">
      <h3 className="text-overline font-secondary uppercase text-text-tertiary">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-small sm:grid-cols-3 lg:grid-cols-5">
        {items.map((s) => (
          <div key={s.name} className="space-y-xsmall">
            <div
              className={`${s.className} h-20 w-full rounded-small`}
              aria-hidden
            />
            <div className="space-y-tiny">
              <p className="text-body-sm font-primary text-text-primary">
                {s.name}
              </p>
              <p className="text-caption font-secondary text-text-muted">
                {s.hex}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StyleGuidePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-medium py-section-small">
      {/* Encabezado */}
      <header className="mb-section-xsmall space-y-xsmall border-b border-grey-800 pb-large">
        <p className="text-overline font-secondary uppercase text-text-link">
          Guía de estilo
        </p>
        <h1 className="text-h2 font-primary text-text-heading">
          Sistema de diseño
        </h1>
        <p className="text-body-lg font-primary text-text-secondary">
          Verificación visual de los tokens (colores, tipografía, espaciados y
          radios) conectados a Tailwind y a las fuentes IBM&nbsp;Plex.
        </p>
      </header>

      {/* Tipografía */}
      <section className="mb-section-small space-y-large">
        <h2 className="text-overline font-secondary uppercase text-text-tertiary">
          Tipografía
        </h2>
        <div className="space-y-large">
          {textStyles.map((t) => (
            <div
              key={t.name}
              className="grid grid-cols-1 gap-xsmall border-b border-grey-900 pb-large sm:grid-cols-[8rem_1fr] sm:items-baseline sm:gap-medium"
            >
              <span className="text-caption font-secondary text-text-muted">
                {t.name}
              </span>
              <p className={`${t.className} text-text-primary`}>{t.sample}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Color */}
      <section className="space-y-xlarge">
        <h2 className="text-overline font-secondary uppercase text-text-tertiary">
          Color
        </h2>
        <Swatches title="Primary" items={primary} />
        <Swatches title="Grey" items={grey} />
        <Swatches title="Accent · Sistema · Base" items={accents} />
      </section>
    </main>
  );
}
