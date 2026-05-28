export interface EducationItem {
  degree: { en: string; es: string };
  school: string;
  start: string;
  end: string;
}

export const education: EducationItem[] = [
  {
    degree: {
      en: "Programming Technician",
      es: "Técnico en Programación",
    },
    school: "UTN",
    start: "Feb 2022",
    end: "Jul 2024",
  },
  {
    degree: {
      en: "Bachelor's in Computer Science",
      es: "Licenciatura en Informática",
    },
    school: "Universidad Atlántida Argentina",
    start: "Mar 2024",
    end: "Dec 2026",
  },
];
