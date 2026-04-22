export type ExperienceType = "research" | "industry";

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  type: ExperienceType;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Frontend Developer — ML Interface & LLM Integration",
    company: "Bosch Center for Artificial Intelligence",
    location: "Renningen, Germany",
    period: "Nov 2023 – Mar 2025",
    type: "research",
    bullets: [
      "Designed and built an end-to-end LLM-integrated web platform: Vue.js frontend, Python REST backend, integrated with a GPT-4o-powered assistant providing context-aware suggestions.",
      "Owned UX from research through delivery: ran structured user testing, iterated on the interface, and balanced AI-assisted automation with human control.",
      "Explored ways to present AI suggestions transparently and observably to users, with attention to reliability and trust.",
      "Co-authored a peer-reviewed demo paper accepted at ESWC 2025 based on the platform.",
    ],
  },
  {
    role: "Frontend Developer (Working Student)",
    company: "GoTo Technologies GmbH",
    location: "Karlsruhe, Germany",
    period: "Oct 2020 – Oct 2023",
    type: "industry",
    bullets: [
      "Shipped React and TypeScript features for GoToMeeting and GoToResolve — widely-used products serving customers across many countries.",
      "Wrote and maintained Jest unit and component tests; participated in code reviews and upheld high code-quality standards across the team.",
      "Worked on UI responsiveness and component-level performance optimization across React applications, focusing on cross-platform consistency.",
      "Implemented Crowdin integration to enable product localization across multiple languages, and maintained design-system consistency using Material UI, Chameleon UI, and Tailwind CSS.",
    ],
  },
  {
    role: "Frontend Software Engineer",
    company: "Rekd",
    location: "Islamabad, Pakistan",
    period: "Oct 2019 – Mar 2020",
    type: "industry",
    bullets: [
      "Built complex UI components and user flows, integrating with RESTful backend APIs.",
      "Reviewed pull requests from other engineers and scoped out new features.",
    ],
  },
  {
    role: "Frontend Software Engineer",
    company: "Airtango Pvt. Ltd.",
    location: "Islamabad, Pakistan",
    period: "Oct 2018 – Jul 2019",
    type: "industry",
    bullets: [
      "Contributed to the Airtango web application in React.js and Material UI, shipping features in an Agile environment.",
      "Gained hands-on experience with CI/CD practices, Git workflows, and automated versioning.",
    ],
  },
];
