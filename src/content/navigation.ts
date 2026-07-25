import { CalendarDays, MapPin, MessageCircle, Sparkles } from "lucide-react";

import { whatsappUrl } from "@/content/site";

export const mainNav = [
  { href: "/clases", label: "Clases" },
  { href: "/horarios", label: "Agenda" },
  { href: "/filosofia", label: "Filosofía & Dharma" },
  { href: "/sobre-nosotros", label: "Maitri" },
  { href: "/comunidad", label: "Comunidad" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const quickActions = [
  { icon: CalendarDays, label: "Clase de prueba", href: whatsappUrl },
  { icon: MessageCircle, label: "WhatsApp", href: whatsappUrl },
  { icon: MapPin, label: "Cómo llegar", href: "/espacio" },
  { icon: Sparkles, label: "Conocer el Dharma", href: "/filosofia" },
] as const;
