# Maitri Yoga Flow

Base web/app para un estudio de yoga en Buenos Aires. Está construida con Next.js 16, App Router, TypeScript estricto, Tailwind CSS, shadcn/ui, Supabase Auth y Playwright.

## Requisitos

- Node.js 22.x
- npm 11.x
- Proyecto Supabase con Google OAuth habilitado

## Instalación

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abrí `http://localhost:3000`.

## Variables

Configurá en `.env.local`:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_MAITRI_*` para datos locales, contacto, horarios y geo.

No uses service role keys en cliente. Para Google OAuth, configurá en Supabase el redirect URL:

```text
http://localhost:3000/auth/callback
https://yogamaitriflow.com/auth/callback
```

## Supabase

Las migraciones están en `supabase/migrations`.

Incluye:

- `profiles`, `instructors`, `class_types`, `class_sessions`, `bookings`, `memberships`, `site_settings`, `testimonials`
- RLS activado
- helper `public.is_admin()`
- trigger de `updated_at`
- trigger opcional sobre `auth.users` para crear perfil
- políticas para usuario dueño, lectura pública de contenido activo y gestión admin
- endurecimiento de reservas para evitar cambios de usuario/clase y permitir cancelación propia

## Scripts

```bash
npm run dev
npm run typecheck
npm run lint
npm run format
npm run test:e2e
npm run build
```

## Estructura

- `src/app/(site)`: páginas públicas y SEO local
- `src/app/login` y `src/app/auth/callback`: Supabase Google OAuth
- `src/app/dashboard`: rutas privadas de usuario
- `src/app/admin`: rutas protegidas por rol `admin`
- `src/components`: UI pública, auth, dashboard y estados
- `src/lib/supabase`: helpers SSR, tipos y autorización
- `supabase/migrations`: schema y RLS

## Herramientas/MCP recomendados

Ver `docs/mcp-recommendations.md`.
