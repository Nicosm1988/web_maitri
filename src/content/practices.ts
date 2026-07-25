import { HeartHandshake, Leaf, Wind } from "lucide-react";

export const valueProps = [
  {
    icon: Leaf,
    title: "Práctica con sentido",
    body: "Asanas, respiración y meditación atravesadas por una mirada consciente y amable.",
  },
  {
    icon: Wind,
    title: "Cuerpo y presencia",
    body: "Una pausa real en la ciudad para escuchar el cuerpo y volver al momento presente.",
  },
  {
    icon: HeartHandshake,
    title: "Comunidad cercana",
    body: "Un espacio de Recoleta donde la práctica se comparte sin competencia ni exigencia.",
  },
] as const;

export const classTypes = [
  {
    name: "Kaladanda Yoga",
    slug: "kaladanda",
    description:
      "Una práctica que integra el yoga físico con enseñanzas contemplativas y filosofía budista.",
    level: "Consultá por nivel",
    duration: "Presencial",
    intensity: "Consciente",
  },
  {
    name: "Hatha Yoga",
    slug: "hatha",
    description:
      "Posturas, respiración y atención para construir estabilidad, movilidad y una base sólida.",
    level: "Distintos niveles",
    duration: "Presencial",
    intensity: "Pausada",
  },
  {
    name: "Hatha Flow",
    slug: "hatha-flow",
    description:
      "Movimiento continuo y respiración consciente, con el sostén y la precisión de la práctica Hatha.",
    level: "Consultá por nivel",
    duration: "Presencial",
    intensity: "Fluida",
  },
  {
    name: "Vinyasa Yoga",
    slug: "vinyasa",
    description:
      "Secuencias dinámicas que enlazan postura y respiración para cultivar energía, foco y presencia.",
    level: "Consultá por nivel",
    duration: "Presencial",
    intensity: "Dinámica",
  },
  {
    name: "Meditación y pranayama",
    slug: "meditacion",
    description:
      "Herramientas de atención y respiración integradas a las clases y a encuentros especiales.",
    level: "Abierto",
    duration: "Presencial",
    intensity: "Sutil",
  },
] as const;

export const schedulePreview = [
  { day: "Lunes", items: [{ time: "19:30–21:30", className: "Franja de clases" }] },
  { day: "Martes", items: [{ time: "17:00–21:30", className: "Franja de clases" }] },
  { day: "Miércoles", items: [{ time: "19:30–21:30", className: "Franja de clases" }] },
  { day: "Jueves", items: [{ time: "18:45–20:30", className: "Franja de clases" }] },
  { day: "Viernes", items: [{ time: "18:30–20:30", className: "Franja de clases" }] },
] as const;

export const instructors = [
  {
    name: "Prácticas de yoga",
    slug: "practicas",
    specialty: "Kaladanda, Hatha, Hatha Flow y Vinyasa",
    bio: "El equipo comparte distintas formas de entrar a la práctica, siempre con respiración, escucha y atención.",
  },
  {
    name: "Meditación",
    slug: "meditacion",
    specialty: "Presencia y filosofía",
    bio: "Las clases integran momentos de silencio, reflexión y enseñanzas que amplían el trabajo corporal.",
  },
  {
    name: "Terapias corporales",
    slug: "terapias",
    specialty: "Masaje tailandés y shiatsu",
    bio: "Maitri también comunica sesiones de masajes como parte de una mirada integral del bienestar.",
  },
] as const;

export const pricingOptions = [
  {
    title: "Primera clase",
    price: "Consultanos",
    description: "Te ayudamos a elegir una práctica y un horario adecuado para empezar.",
    features: ["Orientación personalizada", "Confirmación de cupo", "Respuesta por WhatsApp"],
    highlighted: false,
  },
  {
    title: "Práctica regular",
    price: "Grilla vigente",
    description:
      "Opciones para sostener una frecuencia semanal y formar parte de la comunidad.",
    features: ["Distintos estilos", "Clases presenciales", "Novedades por Instagram"],
    highlighted: true,
  },
  {
    title: "Masajes",
    price: "Con reserva",
    description: "Consultá disponibilidad para sesiones de masaje tailandés y shiatsu.",
    features: ["Atención individual", "Turno coordinado", "En el espacio Maitri"],
    highlighted: false,
  },
] as const;

export const stats = [
  { value: "Recoleta", label: "en el corazón de la ciudad" },
  { value: "4+", label: "formas de practicar" },
  { value: "Presencial", label: "encuentros compartidos" },
] as const;
