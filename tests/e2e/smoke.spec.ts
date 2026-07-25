import { expect, test } from "@playwright/test";

test("home renderiza con propuesta de valor y CTA", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Maitri Yoga Flow/);
  await expect(page.getByRole("heading", { name: /Volvé al cuerpo/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Ver horarios/i }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /WhatsApp/i }).first()).toBeVisible();
});

test("la navegación principal abre clases", async ({ page, isMobile }) => {
  test.skip(isMobile, "La navegación mobile usa menú nativo.");

  await page.goto("/");
  await page.getByRole("link", { name: "Clases" }).first().click();

  await expect(page).toHaveURL(/\/clases$/);
  await expect(
    page.getByRole("heading", { name: /Prácticas para distintos momentos/i }),
  ).toBeVisible();
});

test("login muestra el botón de Google", async ({ page }) => {
  await page.goto("/login");

  await expect(page.getByTestId("google-login-button")).toContainText("Continuar con Google");
});

test("dashboard redirige a login sin sesión", async ({ page }) => {
  await page.goto("/dashboard");

  await expect(page).toHaveURL(/\/login/);
  await expect(page.getByRole("heading", { name: /Ingresá a tu cuenta/i })).toBeVisible();
});

test("contacto valida campos en servidor", async ({ page }) => {
  await page.goto("/contacto");

  await page.getByLabel("Nombre").fill("N");
  await page.getByLabel("Email").fill("persona@example.com");
  await page.getByLabel("Mensaje").fill("Hola");
  await page.getByRole("button", { name: /Enviar consulta/i }).click();

  await expect(page.getByText("Contanos un poco más para orientarte mejor.")).toBeVisible();
});

test("home funciona en mobile", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Sólo se ejecuta en el proyecto mobile.");

  await page.goto("/");
  await expect(page.getByRole("link", { name: /Maitri Yoga Flow/i }).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: /Volvé al cuerpo/i })).toBeVisible();
});
