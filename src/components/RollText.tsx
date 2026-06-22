// Texto con "roll" vertical en hover: dos copias apiladas; una sube y sale, la
// otra entra desde abajo (~0.4s, reversible). El padre debe tener la clase
// `group`. Compartido por los nav-links (RollLink) y el botón primario.
export default function RollText({ label }: { label: string }) {
  return (
    <span className="relative block overflow-hidden">
      <span className="block transition-transform duration-[400ms] ease-out group-hover:-translate-y-full">
        {label}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 block translate-y-full transition-transform duration-[400ms] ease-out group-hover:translate-y-0"
      >
        {label}
      </span>
    </span>
  );
}
