// Home. Por ahora solo el esqueleto: 3 secciones placeholder vacías,
// en orden y con el espaciado correcto (tokens de section).

export default function HomePage() {
  return (
    <>
      <section
        id="hero"
        aria-label="Hero"
        className="mx-auto w-full max-w-6xl px-medium py-section-small"
      >
        <div className="min-h-[40vh]" />
      </section>

      <section
        id="selected-work"
        aria-label="Selected Work"
        className="mx-auto w-full max-w-6xl px-medium py-section-small"
      >
        <div className="min-h-[60vh]" />
      </section>

      <section
        id="connect"
        aria-label="Connect"
        className="mx-auto w-full max-w-6xl px-medium py-section-small"
      >
        <div className="min-h-[40vh]" />
      </section>
    </>
  );
}
