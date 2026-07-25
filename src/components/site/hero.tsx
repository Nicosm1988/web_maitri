import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { stats, whatsappUrl } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-muted/35">
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:py-16">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Yoga en Buenos Aires
          </p>
          <h1 className="font-heading text-5xl font-semibold leading-[0.95] text-foreground sm:text-6xl lg:text-7xl">
            Volvé al cuerpo con una práctica cálida y consciente.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Maitri es un estudio de yoga en CABA para moverte, respirar y sostener una rutina
            que te haga bien, sin exigencia vacía ni automatismos.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/horarios"
              className={cn(buttonVariants({ size: "lg" }), "h-12 gap-2 px-5")}
            >
              Ver horarios
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
              Escribinos por WhatsApp
            </a>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-md border border-border bg-card/80 p-3">
                <dt className="text-xs leading-5 text-muted-foreground">{stat.label}</dt>
                <dd className="mt-1 font-heading text-2xl font-semibold text-foreground">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-md border border-border bg-card shadow-2xl shadow-primary/10 lg:min-h-[560px]">
          <Image
            src="/images/maitri-yoga-hero.webp"
            alt="Clase de yoga en un estudio cálido de Buenos Aires"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/62 to-transparent p-5 text-background">
            <p className="max-w-sm text-sm leading-6">
              Grupos reducidos, docentes atentos y una práctica que acompaña tu energía real de
              cada día.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
