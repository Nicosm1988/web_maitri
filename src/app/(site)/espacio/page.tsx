import type { Metadata } from "next";
import { ArrowUpRight, MapPin, TrainFront } from "lucide-react";

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
        <div className="grid min-h-80 place-items-center rounded-[2rem] border border-border/70 bg-secondary/45 p-6 text-center">
          <div>
            <p className="font-heading text-3xl font-semibold">Antes de venir</p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              Escribinos para confirmar la clase, el acceso al espacio y cualquier elemento que
              necesites para practicar.
            </p>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
