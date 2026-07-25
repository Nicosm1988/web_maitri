# MCP y herramientas recomendadas

Para este proyecto conviene mantener habilitados:

- `modern-web-guidance`: patrones de plataforma web para forms, dialogs, popovers, imágenes, performance y responsive layout. No apareció como herramienta callable en este entorno.
- `next-devtools-mcp`: inspección de rutas, errores, metadata y logs reales de Next.js.
- `playwright` o Playwright MCP: navegación, smoke tests, responsive y capturas visuales.
- `chrome-devtools`: Lighthouse, accesibilidad, SEO y performance traces.
- `github`: issues, PRs, checks y publicación de cambios.
- `supabase/postgres`: revisión de schema, migraciones y políticas RLS sin exponer secretos.

Reglas operativas:

- Usar solo anon key en cliente.
- Mantener service role fuera del frontend.
- Verificar auth con `getUser()` para decisiones de autorización.
- No relajar RLS para resolver errores.
