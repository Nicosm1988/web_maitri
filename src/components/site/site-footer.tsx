import { AtSign, Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

import { mainNav, siteConfig, whatsappUrl } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <p className="font-heading text-2xl font-semibold">{siteConfig.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-background/75">
            Un estudio de yoga en Buenos Aires para practicar con presencia, cuidado y
            continuidad.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-2 text-sm" aria-label="Footer">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md py-1 text-background/75 transition hover:text-background focus-visible:outline-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="grid gap-3 text-sm text-background/80">
          <a className="flex items-center gap-2 hover:text-background" href={whatsappUrl}>
            <MessageCircle className="size-4" aria-hidden="true" />
            {siteConfig.phoneLabel}
          </a>
          <a
            className="flex items-center gap-2 hover:text-background"
            href={`mailto:${siteConfig.email}`}
          >
            <Mail className="size-4" aria-hidden="true" />
            {siteConfig.email}
          </a>
          <a
            className="flex items-center gap-2 hover:text-background"
            href={siteConfig.instagram}
          >
            <AtSign className="size-4" aria-hidden="true" />
            Instagram
          </a>
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4" aria-hidden="true" />
            <span>{siteConfig.address}</span>
          </p>
        </div>
      </div>
      <div className="border-t border-background/10 py-5">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 text-xs text-background/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p>Yoga, respiración y meditación en Buenos Aires.</p>
        </div>
      </div>
    </footer>
  );
}
