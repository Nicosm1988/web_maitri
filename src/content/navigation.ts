import { CalendarDays, MapPin, MessageCircle, Sparkles } from "lucide-react";

import { whatsappUrl } from "@/content/site";

export const mainNav = [
  { href: "/clases", label: "Prácticas" },
  { href: "/horarios", label: "Horarios" },
  { href: "/docentes", label: "Comunidad" },
  { href: "/precios", label: "Aranceles" },
  { href: "/espacio", label: "El espacio" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const quickActions = [
  { icon: CalendarDays, label: "Ver horarios", href: "/horarios" },
  { icon: MessageCircle, label: "WhatsApp", href: whatsappUrl },
  { icon: MapPin, label: "Cómo llegar", href: "/espacio" },
  { icon: Sparkles, label: "Prácticas", href: "/clases" },
] as const;
