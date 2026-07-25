import type { Metadata } from "next";
import { ArrowUpRight, MapPin, TrainFront } from "lucide-react";
import Image from "next/image";

import { PageSection } from "@/components/site/page-section";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "Espacio de yoga en Recoleta",
  description: "Encontrá Maitri Yoga Flow en Paraguay 1560, Recoleta, Ciudad de Buenos Aires.",
  path: "/espacio",
  keywords: ["estudio de yoga en CABA", "yoga en Buenos Aires", "espacio de yoga"],
});

export default function SpacePage() {
  return (
    <PageSection
      eyebrow="Espacio"
      title="Un lugar sereno dentro del ritmo de Buenos Aires."
      description="Maitri funciona en Paraguay 1560, en Recoleta. Confirmá el horario de tu clase antes de acercarte."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-3xl border border-border/70 bg-card/85 p-6 shadow-sm">
          <MapPin className="size-6 text-primary" aria-hidden="true" />
          <h2 className="mt-5 font-heading text-3xl font-semibold">Ubicación</h2>
          <p className="mt-4 leading-7 text-muted-foreground">{siteConfig.address}</p>
          <p className="mt-3 flex items-start gap-2 leading-7 text-muted-foreground">
            <TrainFront className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
            Zona céntrica de Recoleta, cerca de las avenidas Santa Fe y Córdoba.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">{siteConfig.openingHours}</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Paraguay%201560%2C%20Buenos%20Aires"
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "mt-6 gap-2")}
          >
            Abrir en Google Maps
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="relative min-h-80 overflow-hidden rounded-[2rem] border border-border/70 bg-secondary/45">
          <Image
            src="/images/maitri-space.webp"
            alt="Sala de práctica de Maitri preparada con mats y elementos"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-6 pt-20 text-background">
            <p className="font-heading text-3xl font-semibold">Antes de venir</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-background/80">
              Escribinos para confirmar la clase, el acceso al espacio y cualquier elemento que
              necesites para practicar.
            </p>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
