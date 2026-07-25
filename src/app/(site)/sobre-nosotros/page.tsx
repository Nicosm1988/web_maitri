import type { Metadata } from "next";
import Image from "next/image";

import { PageSection } from "@/components/site/page-section";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Sobre Maitri",
  description: "Historia, valores y enfoque de la enseñanza de Maitri Yoga Flow en Recoleta.",
  path: "/sobre-nosotros",
});

export default function AboutPage() {
  return (
    <PageSection
      eyebrow="Sobre nosotros"
      title="Una casa donde la práctica puede volverse encuentro."
      description="Maitri reúne yoga, respiración, meditación y comunidad en Recoleta. Una propuesta para practicar con atención, curiosidad y amabilidad."
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-[440px] overflow-hidden rounded-[2rem_2rem_7rem_2rem]">
          <Image
            src="/images/maitri-yoga-hero.webp"
            alt="Práctica compartida en un espacio cálido"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-heading text-4xl italic leading-tight text-primary">
            Practicar no es alcanzar una forma perfecta. Es aprender a estar.
          </p>
          <div className="mt-8 space-y-5 leading-7 text-muted-foreground">
            <p>
              El enfoque de Maitri parte del cuerpo y la respiración para cultivar presencia,
              escucha y una relación menos exigente con la experiencia.
            </p>
            <p>
              La historia completa del estudio y los perfiles de sus maestras serán incorporados
              con nombres, fotografías y formaciones verificadas.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {[
          ["Amabilidad", "Una práctica que no se mide por rendimiento ni comparación."],
          ["Atención", "Tiempo para observar el cuerpo, la respiración y la mente."],
          ["Comunidad", "Aprender y sostener la práctica en compañía."],
        ].map(([title, body]) => (
          <article key={title} className="border-t border-primary/35 pt-6">
            <h2 className="font-heading text-3xl font-semibold">{title}</h2>
            <p className="mt-3 leading-7 text-muted-foreground">{body}</p>
          </article>
        ))}
      </div>
    </PageSection>
  );
}
