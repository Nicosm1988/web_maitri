import type { Metadata } from "next";

import { ClassCard } from "@/components/site/class-card";
import { PageSection } from "@/components/site/page-section";
import { classTypes } from "@/content/practices";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Prácticas de yoga en Recoleta",
  description:
    "Conocé las prácticas de Kaladanda, Hatha, Hatha Flow, Vinyasa y meditación de Maitri Flow en Recoleta.",
  path: "/clases",
  keywords: [
    "clases de yoga en Buenos Aires",
    "vinyasa yoga",
    "hatha yoga",
    "yoga para principiantes",
  ],
});

export default function ClassesPage() {
  return (
    <PageSection
      eyebrow="Clases"
      title="Distintas formas de entrar a la práctica."
      description="Maitri integra movimiento, respiración, meditación y filosofía. Escribinos para conocer qué clase se adapta mejor a tu experiencia."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {classTypes.map((classType) => (
          <ClassCard key={classType.slug} {...classType} />
        ))}
      </div>
    </PageSection>
  );
}
