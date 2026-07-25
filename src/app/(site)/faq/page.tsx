import type { Metadata } from "next";

import { FAQAccordion } from "@/components/site/faq-accordion";
import { PageSection } from "@/components/site/page-section";
import { faqs } from "@/content/faq";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Preguntas frecuentes",
  description:
    "Respuestas sobre primera clase, experiencia previa, reservas, cancelaciones y clases para principiantes en Maitri Yoga Flow.",
  path: "/faq",
  keywords: ["yoga para principiantes", "preguntas frecuentes yoga"],
});

export default function FAQPage() {
  return (
    <PageSection
      eyebrow="FAQ"
      title="Antes de venir a clase."
      description="Preguntas reales para llegar con más claridad y menos ruido."
    >
      <FAQAccordion items={faqs} />
    </PageSection>
  );
}
