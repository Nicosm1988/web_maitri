import type { Metadata } from "next";
import { HandHeart, HeartHandshake } from "lucide-react";

import { PageSection } from "@/components/site/page-section";
import { buttonVariants } from "@/components/ui/button";
import { whatsappUrl } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "Karma Yoga",
  description: "Formas de colaborar con Maitri mediante voluntariado y aportes conscientes.",
  path: "/karma-yoga",
});

export default function KarmaYogaPage() {
  return (
    <PageSection
      eyebrow="Karma Yoga"
      title="La práctica también puede tomar la forma de servicio."
      description="Dos maneras de sostener el espacio y ayudar a que la práctica llegue a más personas."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {[
          [
            HeartHandshake,
            "Voluntariado",
            "Ofrecer tiempo, presencia o habilidades para acompañar tareas concretas de la comunidad.",
          ],
          [
            HandHeart,
            "Aporte económico",
            "Colaborar de manera consciente con las actividades y proyectos que Maitri comunique.",
          ],
        ].map(([Icon, title, body]) => (
          <article
            key={String(title)}
            className="flex min-h-80 flex-col rounded-[2rem] border border-border bg-card p-8"
          >
            <Icon className="size-8 text-primary" aria-hidden="true" />
            <h2 className="mt-9 font-heading text-4xl font-semibold">{String(title)}</h2>
            <p className="mt-4 leading-7 text-muted-foreground">{String(body)}</p>
            <a
              href={whatsappUrl}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "mt-auto min-h-11",
              )}
            >
              Quiero colaborar
            </a>
          </article>
        ))}
      </div>
      <p className="mt-6 text-sm leading-6 text-muted-foreground">
        Las condiciones y destinos de cada aporte se informarán con claridad antes de confirmar
        cualquier colaboración.
      </p>
    </PageSection>
  );
}
