import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Decinos tu nombre para poder responderte.")
    .max(80, "Usá un nombre más breve."),
  email: z
    .string()
    .trim()
    .email("Usá un email válido para que podamos escribirte.")
    .max(120, "Usá un email más breve."),
  phone: z.string().trim().max(40, "Usá un teléfono más breve.").optional().or(z.literal("")),
  interest: z
    .enum(["primera-clase", "horarios", "precios", "membresias", "otro"])
    .default("primera-clase"),
  message: z
    .string()
    .trim()
    .min(12, "Contanos un poco más para orientarte mejor.")
    .max(1200, "El mensaje es demasiado largo."),
  company: z.string().trim().max(0).optional().or(z.literal("")),
});

export type ContactFormFields = z.infer<typeof contactFormSchema>;
