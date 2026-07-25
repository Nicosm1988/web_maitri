import type { Metadata } from "next";
import Link from "next/link";

import { GoogleLoginButton } from "@/components/auth/google-login-button";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export const metadata: Metadata = {
  title: "Ingresar",
  description: "Ingresá a Maitri Yoga Flow con tu cuenta de Google.",
  robots: {
    index: false,
    follow: false,
  },
};

const errorCopy: Record<string, string> = {
  config: "Faltan variables de Supabase. Revisá .env.local antes de probar el login.",
  oauth: "No pudimos completar el ingreso con Google. Probá nuevamente.",
  profile: "Tu sesión se creó, pero no pudimos preparar el perfil.",
};

type LoginPageProps = {
  searchParams: Promise<{
    next?: string;
    error?: string;
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const configured = isSupabaseConfigured();
  const nextPath = params.next ?? "/dashboard";
  const errorMessage = params.error ? errorCopy[params.error] : null;

  return (
    <main className="grid min-h-screen place-items-center bg-muted/45 px-4 py-10">
      <section className="w-full max-w-md rounded-md border border-border bg-card p-6 shadow-xl">
        <Link href="/" className="font-heading text-3xl font-semibold">
          Maitri Yoga Flow
        </Link>
        <h1 className="mt-8 font-heading text-4xl font-semibold">Ingresá a tu cuenta</h1>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          Usá tu Google/Gmail personal para acceder a perfil, reservas y membresías.
        </p>

        <div className="mt-6">
          <GoogleLoginButton nextPath={nextPath} configured={configured} />
        </div>

        {errorMessage ? (
          <p
            className="mt-4 rounded-md bg-destructive/10 p-3 text-sm text-destructive"
            role="alert"
          >
            {errorMessage}
          </p>
        ) : null}

        {!configured ? (
          <p className="mt-4 rounded-md bg-muted p-3 text-sm leading-6 text-muted-foreground">
            El botón queda preparado, pero se habilita al definir NEXT_PUBLIC_SUPABASE_URL y
            NEXT_PUBLIC_SUPABASE_ANON_KEY.
          </p>
        ) : null}
      </section>
    </main>
  );
}
