import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import { siteConfig } from "@/content/site";

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
    default: "Maitri Yoga Flow | Yoga y meditación en Recoleta",
    template: "%s | Maitri Yoga Flow",
  },
  description:
    "Centro de yoga y meditación en Recoleta. Kaladanda, Hatha, Hatha Flow y Vinyasa en Paraguay 1560.",
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
    title: "Maitri Yoga Flow | Yoga y meditación en Recoleta",
    description:
      "Centro de yoga y meditación en Recoleta con clases presenciales y una comunidad cercana.",
    images: [
      {
        url: "/images/maitri-yoga-hero.webp",
        width: 1586,
        height: 992,
        alt: "Práctica de yoga en Maitri Flow, Recoleta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maitri Yoga Flow",
    description: "Yoga, meditación y comunidad en Recoleta, Buenos Aires.",
    images: ["/images/maitri-yoga-hero.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f8eee1",
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
