# Auditoría y plan de acción — Maitri Yoga Flow

Fecha: 25 de julio de 2026

## Diagnóstico ejecutivo

La web tiene una base técnica moderna y una propuesta visual clara, pero nació con contenido de
demostración. La prioridad no es agregar más pantallas: es convertirla en una fuente confiable,
reducir fricción para consultar una clase y expresar mejor el carácter contemplativo de Maitri.

## Fuentes utilizadas

- Instagram público: `@yogamaitriflow`.
- Perfil público de Maitri Flow en Wellhub.
- Sitio y código actual.

Los horarios, docentes y valores pueden cambiar. La web debe mostrarlos como información dinámica o
derivar a una fuente vigente; nunca debe completar datos faltantes con ejemplos que parezcan reales.

## Hallazgos

### P0 — Confianza y conversión

1. Había teléfono, docentes, horarios y servicios ficticios.
2. El dominio propio no resuelve por DNS.
3. Vercel no tiene variables de Supabase; login, reservas y administración no constituyen hoy un
   recorrido productivo completo.
4. El CTA principal competía entre horarios, WhatsApp, login y perfil.

### P1 — Experiencia y contenido

1. La home repetía clases, horarios, docentes, precios y accesos, produciendo una página demasiado
   larga.
2. El lenguaje era genérico para un estudio de yoga y no reflejaba la voz contemplativa del
   Instagram.
3. La identidad visual era funcional pero intercambiable con cualquier estudio de bienestar.
4. El menú exponía demasiadas opciones y daba protagonismo a una cuenta todavía no configurada.

### P2 — Ingeniería y operación

1. Toda la configuración editorial estaba mezclada en `src/lib/content.ts`.
2. No existe un CMS o fuente operativa para horarios, docentes y valores.
3. Las pruebas E2E cubren humo básico, pero no navegación móvil completa, enlaces externos, datos
   estructurados ni estados de autenticación configurada/no configurada.
4. Falta una política explícita de actualización de contenido y un responsable editorial.

## Cambios aplicados en esta etapa

- Contenido movido a `src/content`, separado de utilidades e infraestructura.
- Datos de muestra eliminados o reemplazados por información pública verificable.
- Identidad pastel tierra: arena, arcilla, rosa empolvado y tonos salvia.
- Home simplificada en cinco bloques: propuesta, valores, prácticas, comunidad/Instagram y próximos
  pasos.
- SEO local actualizado para Recoleta y Paraguay 1560.
- Información cambiante etiquetada como orientativa y sujeta a confirmación.
- Variables de ejemplo actualizadas sin inventar correo ni credenciales.

## Plan recomendado

### Fase 1 — Publicación confiable

- Corregir DNS de `yogamaitriflow.com`.
- Confirmar con Maitri el teléfono, dirección exacta y link de inscripción.
- Definir un canal único de conversión: WhatsApp o formulario.
- Ocultar login/perfil hasta configurar Supabase o completar ese recorrido.

**Criterio de éxito:** una persona puede entender qué es Maitri, dónde está y cómo reservar en menos
de 30 segundos.

### Fase 2 — Contenido real

- Solicitar fotos originales del espacio, clases y equipo con autorización de uso.
- Confirmar biografías y retratos de docentes.
- Cargar grilla y aranceles vigentes desde una fuente editable.
- Crear una sección breve de novedades/talleres basada en contenido propio, sin copiar captions.

**Criterio de éxito:** cero placeholders y actualización editorial sin tocar código.

### Fase 3 — Reservas

- Decidir si Supabase es realmente necesario.
- Si se mantiene: configurar Auth, URLs de redirección, migraciones, RLS y variables de Vercel.
- Implementar cupos, cancelaciones y estados de reserva reales.
- Añadir telemetría de errores y eventos de conversión respetuosos de la privacidad.

**Criterio de éxito:** reserva completa, confirmada y recuperable desde móvil.

### Fase 4 — Crecimiento local

- Crear y verificar Google Business Profile.
- Mantener nombre, dirección y teléfono consistentes en web, Instagram y directorios.
- Añadir testimonios autorizados y preguntas frecuentes reales.
- Medir clics a WhatsApp, formulario y cómo llegar.
- Trabajar páginas específicas sólo cuando exista contenido útil: Kaladanda, Hatha, Vinyasa,
  meditación y masajes.

**Criterio de éxito:** crecimiento de consultas calificadas y búsquedas locales, no sólo tráfico.

## Backlog técnico

- Agregar CI en GitHub para typecheck, lint, build y E2E.
- Añadir pruebas de menú móvil, `robots.txt`, sitemap y JSON-LD.
- Incorporar auditorías Lighthouse con umbrales.
- Definir tipos editoriales y validación Zod para contenido externo.
- Añadir `env` validation al arranque y estados explícitos cuando Supabase no está configurado.
- Revisar contraste, navegación por teclado, reducción de movimiento y tamaños táctiles en cada
  entrega.

## Decisiones que requieren confirmación del negocio

- Teléfono y WhatsApp definitivo.
- Dirección/piso/timbre e instrucciones de llegada.
- Grilla y aranceles vigentes.
- Nombres, fotos y biografías del equipo.
- Política de prueba, reservas y cancelaciones.
- Si el formulario público actual continúa siendo el canal oficial.
