import type { Metadata } from "next";
import { AtSign, Mail, MapPin, MessageCircle } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { PageSection } from "@/components/site/page-section";
import { siteConfig, whatsappUrl } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contacto",
  description:
    "Contactá a Maitri Yoga Flow por WhatsApp, email, Instagram o formulario para consultar por clases de yoga en Buenos Aires.",
  path: "/contacto",
  keywords: ["contacto yoga Buenos Aires", "reservar clase de yoga"],
});

export default function ContactPage() {
  return (
    <PageSection
      eyebrow="Contacto"
      title="Escribinos y encontramos tu primera práctica."
      description="Podés consultar por horarios, estilos, nivel o cualquier detalle antes de venir."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="grid gap-3">
          <a
            className="flex items-center gap-3 rounded-md border border-border bg-card p-4 hover:border-primary"
            href={whatsappUrl}
          >
            <MessageCircle className="size-5 text-primary" aria-hidden="true" />
            <span>{siteConfig.phoneLabel}</span>
          </a>
          {siteConfig.email ? (
            <a
              className="flex items-center gap-3 rounded-md border border-border bg-card p-4 hover:border-primary"
              href={`mailto:${siteConfig.email}`}
            >
              <Mail className="size-5 text-primary" aria-hidden="true" />
              <span>{siteConfig.email}</span>
            </a>
          ) : null}
          <a
            className="flex items-center gap-3 rounded-md border border-border bg-card p-4 hover:border-primary"
            href={siteConfig.instagram}
          >
            <AtSign className="size-5 text-primary" aria-hidden="true" />
            <span>{siteConfig.instagramHandle}</span>
          </a>
          <div className="flex items-start gap-3 rounded-md border border-border bg-card p-4">
            <MapPin className="mt-0.5 size-5 text-primary" aria-hidden="true" />
            <span>{siteConfig.address}</span>
          </div>
          <p className="rounded-md bg-muted p-4 text-sm leading-6 text-muted-foreground">
            {siteConfig.openingHours}
          </p>
        </div>
        <div className="rounded-md border border-border bg-card p-5 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </PageSection>
  );
}
