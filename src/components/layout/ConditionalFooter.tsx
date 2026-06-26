"use client";

import { usePathname } from "next/navigation";

// El footer aparece en TODAS las rutas excepto /contact, donde el contenido
// llena el alto del viewport (sin footer, sin scroll). Wrapper cliente mínimo:
// recibe el <Footer /> como children (que sigue siendo Server Component) y solo
// decide si renderizarlo según la ruta. No afecta a ninguna otra página.
export default function ConditionalFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  if (pathname === "/contact") return null;
  return <>{children}</>;
}
