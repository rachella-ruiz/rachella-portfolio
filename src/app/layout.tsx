import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "@/components/SmoothScroll";

// IBM Plex Sans/Mono no son fuentes "variable" en Google Fonts:
// hay que declarar los pesos que usa el sistema de diseño.
// La opción `variable` expone cada fuente como una variable CSS, que
// tokens.css conecta a --font-primary / --font-secondary.
const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_TITLE = "Rachella Ruiz — Product Designer";
const SITE_DESCRIPTION =
  "Product designer with 7+ years across fintech, legaltech, and civic tech — making complex, high-stakes systems workable for the people who use them.";
const SITE_URL = "https://rachellaruiz.com";

// Icons + OG image come from the /app file conventions (icon.svg, apple-icon.png,
// opengraph-image.jpg). Do NOT list them here too — Next emits them automatically
// and a manual `icons`/`openGraph.images` field would duplicate the tags.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Rachella Ruiz",
    locale: "en_US",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
