import type { Metadata } from "next";
import { MapPin } from "lucide-react";

import { Section } from "@/components/site/section";
import { siteConfig } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Espacio de yoga en CABA",
  description:
    "Conocé el espacio de Maitri Yoga Flow en Buenos Aires, pensado para practicar yoga con calma, claridad y cercanía.",
  path: "/espacio",
  keywords: ["estudio de yoga en CABA", "yoga en Buenos Aires", "espacio de yoga"],
});

export default function SpacePage() {
  return (
    <Section
      eyebrow="Espacio"
      title="Un lugar sereno dentro del ritmo de Buenos Aires."
      description="Maitri está pensado como una pausa concreta: luz natural, elementos de práctica, grupos reducidos y una ubicación accesible en CABA."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-md border border-border bg-card p-6 shadow-sm">
          <MapPin className="size-6 text-primary" aria-hidden="true" />
          <h2 className="mt-5 font-heading text-3xl font-semibold">Ubicación</h2>
          <p className="mt-4 leading-7 text-muted-foreground">{siteConfig.address}</p>
          <p className="mt-3 leading-7 text-muted-foreground">
            Zona: {siteConfig.neighborhood}. Las referencias cercanas se sumarán cuando el
            estudio defina barrio, cruces y puntos de llegada.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">{siteConfig.openingHours}</p>
        </div>
        <div className="grid min-h-80 place-items-center rounded-md border border-dashed border-border bg-muted p-6 text-center">
          <div>
            <p className="font-heading text-3xl font-semibold">Mapa y cómo llegar</p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              Sumaremos referencias cercanas, transporte y el mapa exacto cuando la dirección
              definitiva esté confirmada.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
