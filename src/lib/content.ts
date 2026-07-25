import {
  CalendarDays,
  HeartHandshake,
  Leaf,
  MapPin,
  MessageCircle,
  Sparkles,
  Wind,
} from "lucide-react";

export const siteConfig = {
  name: "Maitri Yoga Flow",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://yogamaitriflow.com",
  phoneLabel: process.env.NEXT_PUBLIC_MAITRI_PHONE_LABEL ?? "+54 9 11 0000-0000",
  phoneDigits: process.env.NEXT_PUBLIC_MAITRI_PHONE_DIGITS ?? "5491100000000",
  email: process.env.NEXT_PUBLIC_MAITRI_EMAIL ?? "hola@yogamaitriflow.com",
  instagram: process.env.NEXT_PUBLIC_MAITRI_INSTAGRAM ?? "https://instagram.com/yogamaitriflow",
  address:
    process.env.NEXT_PUBLIC_MAITRI_ADDRESS ?? "Buenos Aires, Ciudad Autónoma de Buenos Aires",
  neighborhood: process.env.NEXT_PUBLIC_MAITRI_NEIGHBORHOOD ?? "CABA",
  openingHours:
    process.env.NEXT_PUBLIC_MAITRI_OPENING_HOURS ??
    "Lunes a viernes de 8 a 21 hs. Sábados de 9 a 13 hs.",
  latitude: process.env.NEXT_PUBLIC_MAITRI_LATITUDE ?? "-34.6037",
  longitude: process.env.NEXT_PUBLIC_MAITRI_LONGITUDE ?? "-58.3816",
};

export const whatsappUrl = `https://wa.me/${siteConfig.phoneDigits}?text=${encodeURIComponent(
  "Hola Maitri, quiero consultar por una clase de yoga.",
)}`;

export const mainNav = [
  { href: "/clases", label: "Clases" },
  { href: "/horarios", label: "Horarios" },
  { href: "/docentes", label: "Docentes" },
  { href: "/precios", label: "Precios" },
  { href: "/espacio", label: "Espacio" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
];

export const valueProps = [
  {
    icon: Leaf,
    title: "Practica consciente",
    body: "Clases guiadas con presencia, técnica clara y respeto por cada cuerpo.",
  },
  {
    icon: Wind,
    title: "Respiración y calma",
    body: "Movimiento, meditación y respiración para bajar el ritmo sin desconectarte de vos.",
  },
  {
    icon: HeartHandshake,
    title: "Comunidad cuidada",
    body: "Grupos reducidos, docentes atentos y un clima humano desde la primera clase.",
  },
];

export const classTypes = [
  {
    name: "Hatha",
    slug: "hatha",
    description:
      "Posturas sostenidas, respiración consciente y alineación amable para construir base, fuerza y estabilidad.",
    level: "Todos los niveles",
    duration: "75 min",
    intensity: "Media",
  },
  {
    name: "Vinyasa",
    slug: "vinyasa",
    description:
      "Secuencias fluidas que enlazan movimiento y respiración. Una práctica dinámica, creativa y enfocada.",
    level: "Intermedio",
    duration: "60 min",
    intensity: "Alta",
  },
  {
    name: "Yin",
    slug: "yin",
    description:
      "Posturas pasivas y profundas para soltar tensión, mejorar movilidad y entrenar una atención más suave.",
    level: "Todos los niveles",
    duration: "75 min",
    intensity: "Baja",
  },
  {
    name: "Yoga suave / principiantes",
    slug: "principiantes",
    description:
      "Una entrada gradual al yoga, con explicaciones simples, opciones de adaptación y ritmo tranquilo.",
    level: "Inicial",
    duration: "60 min",
    intensity: "Baja",
  },
  {
    name: "Meditación / respiración",
    slug: "meditacion-respiracion",
    description:
      "Encuentros para regular el sistema nervioso, practicar atención plena y aprender técnicas respiratorias.",
    level: "Todos los niveles",
    duration: "45 min",
    intensity: "Suave",
  },
];

export const schedulePreview = [
  {
    day: "Lunes",
    items: [
      { time: "08:30", className: "Hatha", teacher: "Sofía" },
      { time: "19:00", className: "Vinyasa", teacher: "Martina" },
    ],
  },
  {
    day: "Martes",
    items: [
      { time: "10:00", className: "Yoga suave", teacher: "Luz" },
      { time: "18:30", className: "Yin", teacher: "Camila" },
    ],
  },
  {
    day: "Miércoles",
    items: [
      { time: "08:30", className: "Hatha", teacher: "Sofía" },
      { time: "19:00", className: "Meditación", teacher: "Nicolás" },
    ],
  },
  {
    day: "Jueves",
    items: [
      { time: "12:30", className: "Vinyasa", teacher: "Martina" },
      { time: "20:00", className: "Yin", teacher: "Camila" },
    ],
  },
  {
    day: "Sábado",
    items: [{ time: "10:30", className: "Principiantes", teacher: "Luz" }],
  },
];

export const instructors = [
  {
    name: "Sofía Rivas",
    slug: "sofia-rivas",
    specialty: "Hatha y alineación",
    bio: "Acompaña prácticas claras, estables y sensibles al momento de cada persona.",
  },
  {
    name: "Martina Salvatierra",
    slug: "martina-salvatierra",
    specialty: "Vinyasa y movimiento consciente",
    bio: "Diseña secuencias fluidas con foco en respiración, fuerza y escucha corporal.",
  },
  {
    name: "Camila Peralta",
    slug: "camila-peralta",
    specialty: "Yin y descanso profundo",
    bio: "Integra quietud, movilidad suave y herramientas para regular el estrés.",
  },
  {
    name: "Luz Fernández",
    slug: "luz-fernandez",
    specialty: "Principiantes",
    bio: "Hace que la primera clase se sienta simple, cuidada y posible.",
  },
];

export const pricingOptions = [
  {
    title: "Clase suelta",
    price: "Configurable",
    description: "Ideal para probar el espacio o sostener una práctica flexible.",
    features: ["Reserva por clase", "Todos los estilos", "Cupo sujeto a disponibilidad"],
    highlighted: false,
  },
  {
    title: "Pack de clases",
    price: "Configurable",
    description: "Para practicar semanalmente con mejor valor por encuentro.",
    features: ["Más continuidad", "Reserva por cupo disponible", "Acompañamiento cercano"],
    highlighted: true,
  },
  {
    title: "Membresía mensual",
    price: "Configurable",
    description: "Pensada para quienes quieren continuidad y prioridad de cupo.",
    features: ["Rutina sostenida", "Prioridad para clases regulares", "Seguimiento simple"],
    highlighted: false,
  },
];

export const faqs = [
  {
    question: "¿Necesito experiencia previa?",
    answer:
      "No. Hay clases para principiantes y docentes que ofrecen variantes para que puedas practicar con seguridad.",
  },
  {
    question: "¿Qué tengo que llevar?",
    answer:
      "Ropa cómoda y una botella de agua. El espacio puede ofrecer mats y elementos, sujeto a disponibilidad.",
  },
  {
    question: "¿Puedo probar una clase?",
    answer:
      "Sí. Podés escribirnos por WhatsApp para coordinar tu primera práctica y elegir el horario más adecuado.",
  },
  {
    question: "¿Cómo reservo?",
    answer:
      "Podés escribirnos por WhatsApp o completar el formulario de contacto. Te ayudamos a elegir horario y estilo.",
  },
  {
    question: "¿Qué pasa si cancelo?",
    answer:
      "Te pedimos avisar con anticipación para liberar el cupo. La política puntual se informa al momento de reservar.",
  },
  {
    question: "¿Hay clases para principiantes?",
    answer:
      "Sí. Yoga suave / principiantes está pensado para empezar paso a paso, sin exigencia ni apuro.",
  },
];

export const stats = [
  { value: "5", label: "estilos de práctica" },
  { value: "60-75", label: "minutos por clase" },
  { value: "CABA", label: "base local" },
];

export const quickActions = [
  { icon: CalendarDays, label: "Ver horarios", href: "/horarios" },
  { icon: MessageCircle, label: "WhatsApp", href: whatsappUrl },
  { icon: MapPin, label: "Ubicación", href: "/espacio" },
  { icon: Sparkles, label: "Clases", href: "/clases" },
];
