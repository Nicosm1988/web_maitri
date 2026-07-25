"use server";

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
      message: "Gracias por escribirnos. Te vamos a responder pronto.",
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

  return {
    status: "success",
    message:
      "Gracias por escribirnos. Te vamos a responder por email o WhatsApp si lo compartiste en el mensaje.",
  };
}
