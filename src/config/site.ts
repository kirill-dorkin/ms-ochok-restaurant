export const siteConfig = {
  name: "Очок",
  title: "Очок — ресторан у огня (демо MicroStudio)",
  description:
    "Очок — стойка на двенадцать гостей в Бишкеке: один сет, один сезон, открытый огонь в центре зала. Демонстрационный проект MicroStudio.",
  locale: "ru_RU",
  defaultImage: "/og.png",
  address: {
    street: "Ресторан вымышлен",
    locality: "Бишкек",
    postalCode: "Адрес не указан",
    country: "Кыргызстан",
  },
  phone: "Демо: без телефона",
  email: "",
  nav: [
    { label: "Идея", href: "#concept" },
    { label: "Сет", href: "#menu" },
    { label: "Шеф", href: "#chef" },
    { label: "Зал", href: "#interior" },
  ],
  reservation: {
    formAction: "#reserve",
    method: "get",
    note: "Демо: форма не отправляет данные.",
  },
  hours: {
    serviceDays: "Ср — Сб",
    seatings: "19:30 и 21:45",
    closed: "Вс, Пн, Вт",
    schema: {
      dayOfWeek: ["Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "19:30",
      closes: "23:45",
    },
  },
  restaurant: {
    priceRange: "KGS",
    cuisine: ["Сезонный дегустационный сет", "Кухня на огне"],
  },
  effects: {
    reveal: true,
  },
  social: [
    { label: "О проекте", href: "https://micro-studio.vercel.app/ru/work/ochok-restaurant" },
    { label: "Исходная тема", href: "https://github.com/xocothemes/ombra" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
