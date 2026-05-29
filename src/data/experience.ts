export interface Milestone {
  role: { en: string; es: string };
  company: { en: string; es: string };
  start: string;
  end: string;
  bullets: { en: string[]; es: string[] };
}

// Order is deliberately NOT strict-chronological — it follows narrative
// relevance, not date. Visible dates make clear this is a decision, not a bug.
export const milestones: Milestone[] = [
  {
    role: {
      en: "Freelance Full-stack Developer",
      es: "Desarrollador Full-stack Freelance",
    },
    company: { en: "Self-employed", es: "Independiente" },
    start: "Apr 2026",
    end: "Present",
    bullets: {
      en: [
        "Building web sites and applications with Next.js, TypeScript, Supabase and Cloudflare. Modern stack, fast to iterate.",
        "Designing custom solutions that mix code with automations and integrations, avoiding unnecessary complexity.",
        "Bringing product judgment beyond the technical side: SEO, online presence, and what looks good — after four years editing for brands.",
      ],
      es: [
        "Desarrollo sitios y aplicaciones web con Next.js, TypeScript, Supabase y Cloudflare. Stack moderno, ágil para iterar.",
        "Diseño soluciones a medida combinando código con automatizaciones e integraciones, evitando complejidad innecesaria.",
        "Aporto criterio de producto además del técnico: SEO, presencia online y qué se ve bien, después de cuatro años editando para marcas.",
      ],
    },
  },
  {
    role: {
      en: "Frontend Engineer Intern",
      es: "Frontend Engineer Intern",
    },
    company: { en: "Grid Dynamics", es: "Grid Dynamics" },
    start: "Jul 2025",
    end: "Sep 2025",
    bullets: {
      en: [
        "Three-month internship at a multinational headquartered in San Francisco, reporting to a senior mentor.",
        "Worked through the frontend curriculum: deep JavaScript, modern CSS, API architecture, and security fundamentals.",
        "Learned how a software company operates at scale: async reporting and working under mentorship from senior devs.",
      ],
      es: [
        "Internship de tres meses en una multinacional con base en San Francisco, reportando a un mentor senior.",
        "Recorrí el currículum de frontend: JavaScript en profundidad, CSS moderno, arquitectura de APIs y ciberseguridad básica.",
        "Aprendí cómo opera una empresa de software a escala: reporte asincrónico y trabajo bajo mentoría con devs senior.",
      ],
    },
  },
  {
    role: {
      en: "Freelance Video Editor",
      es: "Editor de Video Freelance",
    },
    company: { en: "Self-employed", es: "Independiente" },
    start: "Jun 2021",
    end: "Dec 2024",
    bullets: {
      en: [
        "Edited 500+ videos for US clients: long-form YouTube, reels, podcasts, and ads — backed by 130+ five-star reviews.",
        "Ran a small team of editors and managed client material, keeping every delivery to the standard I offered.",
        "Worked with creators and agencies, some with large audiences. Learned that editing supports the idea: it doesn't invent it.",
      ],
      es: [
        "Edité más de 500 videos para clientes en Estados Unidos: YouTube long-form, reels, podcasts y anuncios. Servicio sostenido por 130+ reviews de cinco estrellas.",
        "Coordiné un equipo chico de editores y gestioné el material de los clientes, manteniendo el estándar que ofrecía.",
        "Trabajé con creators y agencias, algunos con audiencias grandes. Aprendí que la edición sostiene la idea: no la inventa.",
      ],
    },
  },
];
