import { Menu, MessageCircle } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { mainNav } from "@/content/navigation";
import { siteConfig, whatsappUrl } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/92 backdrop-blur supports-[backdrop-filter]:bg-background/78">
      <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3 rounded-md focus-visible:outline-ring"
        >
          <span className="flex size-10 items-center justify-center rounded-full bg-primary font-heading text-lg font-semibold text-primary-foreground">
            M
          </span>
          <span className="min-w-0">
            <span className="block truncate font-heading text-xl font-semibold leading-none">
              {siteConfig.name}
            </span>
            <span className="block text-xs text-muted-foreground">Yoga en Recoleta</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          <a href={whatsappUrl} className={cn(buttonVariants({ size: "lg" }), "gap-2")}>
            <MessageCircle className="size-4" aria-hidden="true" />
            Consultar
          </a>
        </div>

        <details className="group relative md:hidden">
          <summary className="flex size-10 list-none items-center justify-center rounded-md border border-border bg-card text-foreground marker:hidden">
            <Menu className="size-5" aria-hidden="true" />
            <span className="sr-only">Abrir menú</span>
          </summary>
          <div className="absolute right-0 top-12 w-72 rounded-md border border-border bg-card p-2 shadow-xl">
            <nav className="grid gap-1" aria-label="Principal móvil">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted focus-visible:outline-ring"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={whatsappUrl}
                className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground focus-visible:outline-ring"
              >
                Consultar una clase
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
