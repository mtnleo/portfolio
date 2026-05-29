export const ui = {
  en: {
    "nav.about": "about",
    "nav.work": "experience",
    "nav.education": "education",
    "nav.projects": "projects",

    "hero.role": "Full-stack developer · Argentina",
    "hero.name": "Martin Leonardi",
    "hero.tagline": "Building software that works, AI-focused.",
    "hero.cv": "↓ Download Resume",

    "about.title": "About",
    "about.p1":
      "Full-stack developer based in Argentina. Finishing my Computer Science degree this December; I already hold an Associate's in Programming from UTN. I build with AI every day — Claude Code, agents, automations — and I'd rather be inside what's happening than wait for it to settle.",
    "about.p2":
      "Four years in tech, but I was working with clients online before that. At seventeen I started editing videos on Fiverr for US clients. The next few years: 500+ deliveries, several thousand dollars billed, and a small team of editors I ran to scale the operation. I learned to handle clients in English — deadlines, feedback, expectations — before I learned any framework. When I started my Associate's in 2022, dev and video ran in parallel for a while. Eventually code took over.",
    "about.p3":
      "Three seasons in Colorado on a J-1 visa along the way, and a trip to San Francisco that stuck. The accent color on this site owes something to the ",

    "work.title": "Experience",

    "education.title": "Education",

    "projects.title": "Projects",
    "projects.demo": "Demo",
    "projects.code": "Code",
    "projects.demoSoon": "Demo soon",

    "footer.note": "From Argentina, onwards.",

    "note.hero": "← that's me",
  },
  es: {
    "nav.about": "sobre mí",
    "nav.work": "experiencia",
    "nav.education": "educación",
    "nav.projects": "proyectos",

    "hero.role": "Desarrollador full-stack · Argentina",
    "hero.name": "Martin Leonardi",
    "hero.tagline": "Construyendo software que sirve, AI-focused.",
    "hero.cv": "↓ Descargar CV",

    "about.title": "Sobre mí",
    "about.p1":
      "Soy desarrollador full-stack en Argentina. Termino la Licenciatura en Informática en diciembre, y ya tengo el Técnico en Programación de la UTN. Construyo con IA todos los días (Claude Code, agentes, automatizaciones) y me importa estar adentro de lo que está pasando, no esperar a que se asiente.",
    "about.p2":
      "Llevo cuatro años en tecnología, pero antes de eso ya estaba trabajando con clientes en internet. A los diecisiete abrí un perfil en Fiverr editando videos para clientes en Estados Unidos (más de 500 entregas en los años siguientes, varios miles de dólares facturados, y un equipo chico de editores que coordiné para escalar la operación). Aprendí a manejar clientes en inglés, deadlines y feedback antes que cualquier framework. Cuando empecé la tecnicatura en 2022, el desarrollo y el video convivieron unos años, y eventualmente el código se quedó con todo el espacio.",
    "about.p3":
      "En el medio pasé tres temporadas en Colorado con visa J-1 y tuve la oportunidad de conocer San Francisco. El color de este sitio le debe algo al ",

    "work.title": "Experiencia",

    "education.title": "Educación",

    "projects.title": "Proyectos",
    "projects.demo": "Demo",
    "projects.code": "Código",
    "projects.demoSoon": "Demo próximamente",

    "footer.note": "Desde Argentina, onwards.",

    "note.hero": "← ese soy yo",
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)["en"];

export function t(key: UIKey, lang: Lang): string {
  return ui[lang][key] ?? ui.en[key];
}
