export interface Milestone {
  role: { en: string; es: string };
  company: string;
  start: string;
  end: string;
  bullets: { en: string[]; es: string[] };
}

export const milestones: Milestone[] = [
  {
    role: {
      en: "Placeholder — Senior Full-stack Developer",
      es: "Placeholder — Desarrollador Full-stack Senior",
    },
    company: "Acme Co.",
    start: "Jan 2024",
    end: "Present",
    bullets: {
      en: [
        "Placeholder bullet — led the rewrite of X service, cutting p95 latency by Y%.",
        "Placeholder bullet — shipped Z feature end-to-end across web and API.",
        "Placeholder bullet — mentored two juniors and ran code-review guild.",
      ],
      es: [
        "Placeholder bullet — lideré el rewrite del servicio X, bajando la latencia p95 un Y%.",
        "Placeholder bullet — entregué la feature Z end-to-end entre web y API.",
        "Placeholder bullet — mentoreé a dos juniors y coordiné el guild de code review.",
      ],
    },
  },
  {
    role: {
      en: "Placeholder — Full-stack Developer",
      es: "Placeholder — Desarrollador Full-stack",
    },
    company: "Beta Studio",
    start: "Mar 2022",
    end: "Dec 2023",
    bullets: {
      en: [
        "Placeholder bullet — built the public API powering N client integrations.",
        "Placeholder bullet — migrated the legacy frontend to a modern stack.",
        "Placeholder bullet — set up CI/CD pipelines and preview environments.",
      ],
      es: [
        "Placeholder bullet — construí la API pública que potencia N integraciones de clientes.",
        "Placeholder bullet — migré el frontend legacy a un stack moderno.",
        "Placeholder bullet — armé los pipelines de CI/CD y los entornos de preview.",
      ],
    },
  },
  {
    role: {
      en: "Placeholder — Junior Developer",
      es: "Placeholder — Desarrollador Junior",
    },
    company: "Gamma Labs",
    start: "Jul 2020",
    end: "Feb 2022",
    bullets: {
      en: [
        "Placeholder bullet — contributed to the internal dashboard used by 50+ teammates.",
        "Placeholder bullet — wrote integration tests covering the billing flow.",
        "Placeholder bullet — automated a daily report saving ~2h of manual work.",
      ],
      es: [
        "Placeholder bullet — contribuí al dashboard interno usado por 50+ compañeros.",
        "Placeholder bullet — escribí tests de integración cubriendo el flujo de billing.",
        "Placeholder bullet — automaticé un reporte diario que ahorró ~2h de trabajo manual.",
      ],
    },
  },
];
