// Ícono inline (Email / sobre). Usa currentColor para heredar el color.
export default function EmailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 22 18"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3.00006 1H19.0001C20.1001 1 21.0001 1.9 21.0001 3V15C21.0001 16.1 20.1001 17 19.0001 17H3.00006C1.90006 17 1.00006 16.1 1.00006 15V3C1.00006 1.9 1.90006 1 3.00006 1Z" />
      <path d="M21.0001 3L11.0001 10L1.00006 3" />
    </svg>
  );
}
