export const ui = {
  en: {
    "nav.about": "About",
    "nav.work": "Work",
    "nav.projects": "Projects",

    "hero.role": "Full-stack developer",
    "hero.name": "Martin Leonardi",
    "hero.tagline":
      "Placeholder tagline — short editorial sentence about what Martin does and where he's based.",
    "hero.cv": "↓ Download CV",

    "about.title": "About",
    "about.body":
      "Placeholder about copy. Two or three paragraphs in Martin's own voice — replace before launch.",

    "work.title": "Work",

    "education.title": "Education",

    "projects.title": "Projects",
    "projects.demo": "Demo",
    "projects.code": "Code",

    "footer.note": "Made with care, hosted on Cloudflare.",

    "note.hero": "← that's me",

    "toggle.label": "¿hablás español?",
  },
  es: {
    "nav.about": "Sobre mí",
    "nav.work": "Trabajo",
    "nav.projects": "Proyectos",

    "hero.role": "Desarrollador full-stack",
    "hero.name": "Martin Leonardi",
    "hero.tagline":
      "Tagline placeholder — frase editorial corta sobre qué hace Martin y desde dónde.",
    "hero.cv": "↓ Descargar CV",

    "about.title": "Sobre mí",
    "about.body":
      "Texto placeholder sobre mí. Dos o tres párrafos con la voz propia de Martin — reemplazar antes del launch.",

    "work.title": "Trabajo",

    "education.title": "Educación",

    "projects.title": "Proyectos",
    "projects.demo": "Demo",
    "projects.code": "Código",

    "footer.note": "Hecho con cuidado, hosteado en Cloudflare.",

    "note.hero": "← ese soy yo",

    "toggle.label": "speak english?",
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)["en"];

export function t(key: UIKey, lang: Lang): string {
  return ui[lang][key] ?? ui.en[key];
}
