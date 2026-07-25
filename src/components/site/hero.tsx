import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig, whatsappUrl } from "@/content/site";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="hero-atmosphere relative overflow-hidden border-b border-border/70">
      <div
        aria-hidden="true"
        className="breath-orbit absolute -left-28 top-20 size-80 rounded-full border border-primary/20"
      />
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
        <div className="relative z-10 max-w-2xl">
          <p className="hero-line mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Yoga y meditación en Recoleta
          </p>
          <h1 className="hero-line font-heading text-6xl font-semibold leading-[0.86] tracking-[-0.035em] text-foreground sm:text-7xl lg:text-[5.6rem]">
            Llegá como estás.
            <span className="mt-2 block font-normal italic text-primary">Volvé a vos.</span>
          </h1>
          <p className="hero-line mt-7 max-w-lg text-lg leading-8 text-muted-foreground">
            Prácticas presenciales para mover el cuerpo, escuchar la respiración y hacer una
            pausa en medio de la ciudad.
          </p>
          <div className="hero-line mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/clases"
              className={cn(buttonVariants({ size: "lg" }), "h-12 gap-2 px-5")}
            >
              Encontrar mi práctica
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href={whatsappUrl}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 gap-2 bg-background/80 px-5",
              )}
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Hablar con Maitri
            </a>
          </div>
          <p className="hero-line mt-6 text-sm text-muted-foreground">
            {siteConfig.address} · Consultá cupo y grilla vigente
          </p>
        </div>

        <div className="hero-frame relative min-h-[390px] overflow-hidden rounded-[2.5rem_2.5rem_8rem_2.5rem] border border-background/60 bg-card shadow-2xl shadow-primary/15 lg:min-h-[590px]">
          <Image
            src="/images/maitri-yoga-hero.webp"
            alt="Clase de yoga en un estudio cálido de Buenos Aires"
            fill
            priority
            sizes="(min-width: 1280px) 608px, (min-width: 1024px) 50vw, calc(100vw - 32px)"
            className="hero-image object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/62 to-transparent p-5 text-background">
            <p className="max-w-sm text-sm leading-6">Una casa de práctica en Recoleta.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
