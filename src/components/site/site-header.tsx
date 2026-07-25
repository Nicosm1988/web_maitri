import { LogIn, Menu, UserRound } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { mainNav, siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/92 backdrop-blur supports-[backdrop-filter]:bg-background/78">
      <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3 rounded-md focus-visible:outline-ring"
        >
          <span className="flex size-9 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
            M
          </span>
          <span className="min-w-0">
            <span className="block truncate font-heading text-xl font-semibold leading-none">
              {siteConfig.name}
            </span>
            <span className="block text-xs text-muted-foreground">Yoga en Buenos Aires</span>
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

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/login"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
          >
            <LogIn className="size-4" aria-hidden="true" />
            Ingresar
          </Link>
          <Link href="/dashboard" className={cn(buttonVariants({ size: "lg" }), "gap-2")}>
            <UserRound className="size-4" aria-hidden="true" />
            Mi perfil
          </Link>
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
              <Link
                href="/login"
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted focus-visible:outline-ring"
              >
                Ingresar
              </Link>
              <Link
                href="/dashboard"
                className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground focus-visible:outline-ring"
              >
                Mi perfil
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
