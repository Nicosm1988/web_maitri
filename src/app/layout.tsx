import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import { siteConfig } from "@/lib/content";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Maitri Yoga Flow | Estudio de yoga en Buenos Aires",
    template: "%s | Maitri Yoga Flow",
  },
  description:
    "Clases de yoga, respiracion y meditacion en Buenos Aires. Un espacio calido para practicar con claridad, presencia y cuidado.",
  applicationName: "Maitri Yoga Flow",
  authors: [{ name: "Maitri Yoga Flow" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteConfig.url,
    siteName: "Maitri Yoga Flow",
    title: "Maitri Yoga Flow | Estudio de yoga en Buenos Aires",
    description:
      "Yoga en Buenos Aires con clases de Hatha, Vinyasa, Yin, principiantes, meditacion y respiracion.",
    images: [
      {
        url: "/images/maitri-yoga-hero.webp",
        width: 1586,
        height: 992,
        alt: "Clase de yoga en un estudio calido de Buenos Aires",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maitri Yoga Flow",
    description:
      "Estudio de yoga en Buenos Aires con clases para principiantes y practicantes avanzados.",
    images: ["/images/maitri-yoga-hero.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      className={`${inter.variable} ${cormorant.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>{children}</body>
    </html>
  );
}
