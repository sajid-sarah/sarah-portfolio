export type ProjectType = "research" | "side-project";

export type Project = {
  name: string;
  description: string;
  longDescription: string;
  tags: string[];
  type: ProjectType;
  github?: string;
  live?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    name: "No-Code ML Pipeline UI",
    description: "LLM-integrated web platform for building ML pipelines without code, built at Bosch Center for AI.",
    longDescription:
      "Designed and built end-to-end at Bosch BCAI as part of my thesis. A Vue.js frontend backed by a Python REST API, integrated with GPT-4o to provide context-aware suggestions as users construct ML pipelines. Focused on making AI assistance transparent and trustworthy — users stay in control while the system reduces manual configuration. The work resulted in a peer-reviewed demo paper at ESWC 2025.",
    tags: ["Vue.js", "TypeScript", "Python", "GPT-4o", "REST API", "Knowledge Graphs"],
    type: "research",
    live: "https://youtu.be/0zCtNtqx2lc",
    featured: true,
  },
  {
    name: "JobPal",
    description: "AI-assisted job application tracker with OAuth sign-in, hosted Postgres, and a guest demo mode.",
    longDescription:
      "Next.js App Router app for tracking job applications: paste a job description, an LLM extracts company, role, skills, and dates, and the app schedules follow-up reminders across a status pipeline. Built as a production-grade portfolio piece with Auth.js v5 (GitHub, Google, and a guest Credentials provider), per-user data scoping enforced at both the edge proxy and the query layer, Prisma migrations against Neon Postgres, and sliding-window rate limiting on the LLM endpoint via Upstash Redis. Deployed on Vercel; guests can click through with seeded sample data.",
    tags: ["Next.js", "TypeScript", "Auth.js", "Prisma", "Neon Postgres", "Upstash Redis", "Groq LLM", "Vercel"],
    type: "side-project",
    github: "https://github.com/sajid-sarah/jobpal",
    live: "https://jobpal-hazel.vercel.app",
    featured: true,
  },
  {
    name: "Saru",
    description: "A café web shop with a full order flow and AI-powered drink and snack recommendations.",
    longDescription:
      "A SvelteKit web shop for a fictional Berlin café. Browse the menu by category, customise orders with milk and variation options, and manage a persistent bag — all built with Svelte 5 runes. The 'For you' page lets users describe their mood and get two personalised recommendations via a Groq-powered server endpoint. Cart state, modal interactions, and the order flow demonstrate complex stateful UI patterns.",
    tags: ["SvelteKit", "TypeScript", "Tailwind CSS", "Groq API", "Svelte 5"],
    type: "side-project",
    github: "https://github.com/sajid-sarah/saru",
    live: "https://saru-green.vercel.app",
    featured: true,
  },
  {
    name: "Flashcard Generator",
    description: "Turns short study notes into flashcards using an LLM. Built with React, TypeScript, and Groq.",
    longDescription:
      "A focused tool that takes plain-text notes and generates exactly 3 study-ready flashcards via a Groq-powered LLM. Uses Vercel serverless functions to keep the API key server-side. Structured JSON output means no fragile text parsing. Clean, swipeable UI built with React and Vite.",
    tags: ["React", "TypeScript", "Vite", "Groq LLM", "Vercel Serverless"],
    type: "side-project",
    github: "https://github.com/sajid-sarah/flashcards",
    live: "https://flashcards-tau-pied.vercel.app",
    featured: true,
  },
  {
    name: "Matcha Book",
    description: "Tasting notes app with ratings and a guided preparation ritual. Built with SvelteKit.",
    longDescription:
      "A small SvelteKit app exploring how a notes system could be designed and extended: ratings, comments, and a guided step-by-step preparation flow with images. Intentionally simple — the focus is on clean UI, clear state management, and small delightful interactions. Editorial-style design.",
    tags: ["SvelteKit", "TypeScript", "Tailwind CSS", "Vercel"],
    type: "side-project",
    github: "https://github.com/sajid-sarah/matcha-book",
    live: "https://matcha-book.vercel.app",
    featured: true,
  },
];
