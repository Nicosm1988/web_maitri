import type { ReactNode } from "react";

import { LocalBusinessJsonLd } from "@/components/site/local-business-json-ld";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LocalBusinessJsonLd />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
