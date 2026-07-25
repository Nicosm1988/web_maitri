import type { Metadata } from "next";

import { siteConfig } from "@/lib/content";

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
      "Estudio de yoga en Buenos Aires con clases de Hatha, Vinyasa, Yin, yoga para principiantes, meditación y respiración.",
    telephone: siteConfig.phoneLabel,
    email: siteConfig.email,
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
    areaServed: ["Buenos Aires", "CABA"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    priceRange: "$$",
    sameAs: [siteConfig.instagram],
  };
}
