"use server";

import { redirect } from "next/navigation";

import { siteConfig } from "@/content/site";
import { contactFormSchema } from "@/lib/validation/contact";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    interest?: string[];
    message?: string[];
    company?: string[];
  };
};

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  if (String(formData.get("company") ?? "").trim()) {
    return {
      status: "success",
      message: "Consulta recibida.",
    };
  }

  const parsed = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    interest: formData.get("interest"),
    message: formData.get("message"),
    company: formData.get("company"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Revisá los campos marcados.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const interestLabels: Record<string, string> = {
    "primera-clase": "primera clase",
    horarios: "horarios",
    precios: "aranceles",
    membresias: "práctica regular",
    otro: "otra consulta",
  };
  const lines = [
    `Hola Maitri, soy ${parsed.data.name}.`,
    `Quisiera consultar por ${interestLabels[parsed.data.interest] ?? "una clase"}.`,
    parsed.data.message,
    parsed.data.email ? `Email: ${parsed.data.email}` : "",
    parsed.data.phone ? `Teléfono: ${parsed.data.phone}` : "",
  ].filter(Boolean);

  redirect(
    `https://wa.me/${siteConfig.phoneDigits}?text=${encodeURIComponent(lines.join("\n\n"))}`,
  );
}
