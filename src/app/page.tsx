import Link from "next/link";
import Container from "@/components/Container";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";

const typeLabel: Record<string, string> = {
  research: "Research",
  industry: "Industry",
};

const typeDot: Record<string, string> = {
  research: "bg-violet-400",
  industry: "bg-sky-400",
};

const typeBadge: Record<string, string> = {
  research: "bg-violet-50 text-violet-700 ring-1 ring-violet-200",
  industry: "bg-sky-50 text-sky-700 ring-1 ring-sky-200",
};

const projectTypeBadge: Record<string, string> = {
  research: "bg-violet-50 text-violet-700 ring-1 ring-violet-200",
  "side-project": "bg-neutral-100 text-neutral-600 ring-1 ring-neutral-200",
};

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Container>
      {/* Hero */}
      <section className="py-16 sm:py-20">
        <h1 className="text-4xl font-semibold tracking-tight">Sarah Sajid</h1>
        <p className="mt-2 text-lg text-neutral-500 font-medium">
          Software Engineer
        </p>
        <p className="mt-4 max-w-2xl text-neutral-600 leading-relaxed">
          Frontend engineer building at the intersection of UI and AI. Most
          recently designed and built an LLM-integrated research platform at
          Bosch AI, combining frontend engineering with AI integration and
          user research. Based in Berlin.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <a
            href="https://github.com/sajid-sarah"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-600 hover:text-neutral-900 underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sarah-sajid-87966b52"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-600 hover:text-neutral-900 underline underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sarahsajid16@gmail.com"
            className="text-neutral-600 hover:text-neutral-900 underline underline-offset-4"
          >
            sarahsajid16@gmail.com
          </a>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 border-t border-neutral-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Projects</h2>
          <Link
            href="/projects"
            className="text-sm text-neutral-500 hover:text-neutral-900 underline underline-offset-4"
          >
            View all
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <article
              key={p.name}
              className="rounded-xl border border-neutral-200 p-5 flex flex-col"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold leading-snug">{p.name}</h3>
                <span
                  className={`flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${projectTypeBadge[p.type]}`}
                >
                  {p.type === "research" ? "Research" : "Project"}
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3 text-sm">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-500 hover:text-neutral-900 underline underline-offset-4"
                  >
                    GitHub
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-500 hover:text-neutral-900 underline underline-offset-4"
                  >
                    {p.type === "research" ? "Demo" : "Live"}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="py-12 border-t border-neutral-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Experience</h2>
          <div className="flex gap-4 text-xs text-neutral-500">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-violet-400" />
              Research
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-sky-400" />
              Industry
            </span>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          {experience.map((exp) => (
            <article key={`${exp.company}-${exp.period}`} className="flex gap-4">
              <div className="mt-1.5 flex-shrink-0">
                <span
                  className={`inline-block h-2.5 w-2.5 rounded-full ${typeDot[exp.type]}`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <div>
                    <span className="font-medium text-sm">{exp.role}</span>
                    <span className="text-neutral-500 text-sm">
                      {" "}· {exp.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${typeBadge[exp.type]}`}
                    >
                      {typeLabel[exp.type]}
                    </span>
                    <span className="text-xs text-neutral-400">{exp.period}</span>
                  </div>
                </div>
                <p className="mt-0.5 text-xs text-neutral-400">{exp.location}</p>
                <ul className="mt-3 space-y-1.5">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-neutral-600 pl-3 relative before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-neutral-300">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Publications teaser */}
      <section className="py-12 border-t border-neutral-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Publications</h2>
          <Link
            href="/publications"
            className="text-sm text-neutral-500 hover:text-neutral-900 underline underline-offset-4"
          >
            View all
          </Link>
        </div>
        <div className="mt-6 rounded-xl border border-neutral-200 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium leading-snug">
                No-Code ML Pipeline Development: Leveraging Knowledge Graphs and Language Models
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                ESWC 2025 Satellite Events (LNCS, vol. 15832)
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href="https://link.springer.com/chapter/10.1007/978-3-031-99554-5_24"
                target="_blank"
                rel="noreferrer"
                className="text-sm underline underline-offset-4 text-neutral-500 hover:text-neutral-900"
              >
                View
              </a>
              <a
                href="https://youtu.be/0zCtNtqx2lc"
                target="_blank"
                rel="noreferrer"
                className="text-sm underline underline-offset-4 text-neutral-500 hover:text-neutral-900"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
