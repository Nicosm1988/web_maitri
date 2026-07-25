import type { ReactNode } from "react";

import { LocalBusinessJsonLd } from "@/components/site/local-business-json-ld";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LocalBusinessJsonLd />
      <a
        href="#contenido-principal"
        className="fixed left-4 top-4 z-50 -translate-y-24 rounded-lg bg-foreground px-4 py-3 text-sm font-semibold text-background transition-transform focus:translate-y-0"
      >
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido-principal" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
