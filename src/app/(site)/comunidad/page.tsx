import type { Metadata } from "next";
import { Heart, Mail, Users } from "lucide-react";
import Image from "next/image";

import { PageSection } from "@/components/site/page-section";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig, whatsappUrl } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "Comunidad Maitri",
  description: "Newsletter, encuentros y formas de participar en la comunidad de Maitri Flow.",
  path: "/comunidad",
});

export default function CommunityPage() {
  return (
    <PageSection
      eyebrow="Comunidad"
      title="La práctica se sostiene en compañía."
      description="Un espacio para enterarte de clases, encuentros, nuevas lecturas y formas de colaborar con Maitri."
    >
      <div className="relative mb-8 min-h-[420px] overflow-hidden rounded-[2rem_2rem_7rem_2rem]">
        <Image
          src="/images/maitri-community.webp"
          alt="Grupo de practicantes compartiendo una experiencia de yoga"
          fill
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        <p className="absolute bottom-0 max-w-xl p-7 font-heading text-3xl italic text-background sm:p-10 sm:text-4xl">
          Practicar juntos también es aprender a cuidarnos.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <section className="rounded-[2rem] bg-foreground p-8 text-background sm:p-10">
          <Mail className="size-7 text-secondary" aria-hidden="true" />
          <h2 className="mt-8 font-heading text-4xl font-semibold">Carta semanal</h2>
          <p className="mt-4 max-w-md leading-7 text-background/72">
            Recibí novedades, prácticas breves y nuevas lecturas. La inscripción definitiva se
            activará al conectar la plataforma de newsletter.
          </p>
          <a
            href={whatsappUrl}
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "mt-7 min-h-11",
            )}
          >
            Quiero sumarme
          </a>
        </section>
        <section className="rounded-[2rem] bg-secondary/50 p-8 sm:p-10">
          <Users className="size-7 text-primary" aria-hidden="true" />
          <h2 className="mt-8 font-heading text-4xl font-semibold">Voces de Maitri</h2>
          <p className="mt-4 max-w-md leading-7 text-muted-foreground">
            Este espacio mostrará testimonios reales de estudiantes, publicados únicamente con
            consentimiento. No vamos a inventar experiencias para completar el diseño.
          </p>
          <a
            href={siteConfig.instagram}
            className="mt-7 inline-flex min-h-11 items-center gap-2 font-medium text-primary"
          >
            <Heart className="size-4" aria-hidden="true" /> Conocer la comunidad en Instagram
          </a>
        </section>
      </div>
    </PageSection>
  );
}
