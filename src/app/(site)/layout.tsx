import SiteLayout from "@/components/layout/SiteLayout";

// Todas las páginas dentro de (site) comparten Nav + Footer.
// (La guía de estilo vive fuera de este grupo y queda intacta.)
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteLayout>{children}</SiteLayout>;
}
