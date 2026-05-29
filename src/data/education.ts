export interface EducationItem {
  degree: { en: string; es: string };
  school: string;
  start: string;
  end: string;
}

// Order: Bachelor's first (most recent / in progress), Associate's second.
// School names kept as acronyms + "Argentina" deliberately — do NOT expand
// (UAA/UTN) and do NOT swap "Argentina" for a city.
export const education: EducationItem[] = [
  {
    degree: {
      en: "Bachelor's in Computer Science",
      es: "Licenciatura en Informática",
    },
    school: "UAA, Argentina",
    start: "Mar 2024",
    end: "Dec 2026",
  },
  {
    degree: {
      en: "Associate's in Programming",
      es: "Técnico en Programación",
    },
    school: "UTN, Argentina",
    start: "Feb 2022",
    end: "Jul 2024",
  },
];
