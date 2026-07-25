import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  const url = new URL(path, siteConfig.url);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url.pathname,
    },
    openGraph: {
      title,
      description,
      url,
      locale: "es_AR",
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: "/images/maitri-yoga-hero.webp",
          width: 1586,
          height: 992,
          alt: "Clase de yoga en Maitri Yoga Flow",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/maitri-yoga-hero.webp"],
    },
  };
}

export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["HealthAndBeautyBusiness", "SportsActivityLocation"],
    name: siteConfig.name,
    url: siteConfig.url,
    image: new URL("/images/maitri-yoga-hero.webp", siteConfig.url).toString(),
    description:
      "Centro de yoga y meditación en Recoleta con clases de Kaladanda, Hatha, Hatha Flow y Vinyasa.",
    telephone: siteConfig.phoneLabel,
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Buenos Aires",
      addressRegion: "Ciudad Autónoma de Buenos Aires",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.latitude,
      longitude: siteConfig.longitude,
    },
    areaServed: ["Recoleta", "Buenos Aires", "CABA"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "17:00",
        closes: "21:30",
      },
    ],
    priceRange: "$$",
    sameAs: [siteConfig.instagram],
  };
}
