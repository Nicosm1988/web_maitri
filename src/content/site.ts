export const siteConfig = {
  name: "Maitri Yoga Flow",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://yogamaitriflow.com",
  phoneLabel: process.env.NEXT_PUBLIC_MAITRI_PHONE_LABEL ?? "11 3087-6194",
  phoneDigits: process.env.NEXT_PUBLIC_MAITRI_PHONE_DIGITS ?? "541130876194",
  email: process.env.NEXT_PUBLIC_MAITRI_EMAIL ?? "",
  instagram: process.env.NEXT_PUBLIC_MAITRI_INSTAGRAM ?? "https://instagram.com/yogamaitriflow",
  instagramHandle: "@yogamaitriflow",
  bookingUrl:
    process.env.NEXT_PUBLIC_MAITRI_BOOKING_URL ??
    "https://docs.google.com/forms/d/e/1FAIpQLSd7xBQjJgn8G7ryMejoKNmbxTkV882-RVALAo1wvgi8mBMpRg/viewform?usp=sharing",
  address: process.env.NEXT_PUBLIC_MAITRI_ADDRESS ?? "Paraguay 1560, Recoleta, CABA",
  neighborhood: process.env.NEXT_PUBLIC_MAITRI_NEIGHBORHOOD ?? "Recoleta",
  openingHours:
    process.env.NEXT_PUBLIC_MAITRI_OPENING_HOURS ??
    "Clases de lunes a viernes. Consultá la grilla vigente antes de venir.",
  latitude: process.env.NEXT_PUBLIC_MAITRI_LATITUDE ?? "-34.5996",
  longitude: process.env.NEXT_PUBLIC_MAITRI_LONGITUDE ?? "-58.3891",
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.phoneDigits}?text=${encodeURIComponent(
  "Hola Maitri, quisiera conocer la grilla vigente y coordinar una clase.",
)}`;
