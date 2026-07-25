import type { Metadata } from "next";

import { FAQAccordion } from "@/components/site/faq-accordion";
import { Section } from "@/components/site/section";
import { faqs } from "@/lib/content";
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
    <Section
      eyebrow="FAQ"
      title="Antes de venir a clase."
      description="Preguntas reales para llegar con más claridad y menos ruido."
    >
      <FAQAccordion items={faqs} />
    </Section>
  );
}
