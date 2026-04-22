import Container from "@/components/Container";
import { projects } from "@/data/projects";

const typeBadge: Record<string, string> = {
  research: "bg-violet-50 text-violet-700 ring-1 ring-violet-200",
  "side-project": "bg-neutral-100 text-neutral-600 ring-1 ring-neutral-200",
};

const typeLabel: Record<string, string> = {
  research: "Research",
  "side-project": "Project",
};

export default function ProjectsPage() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <p className="mt-2 text-neutral-600">
          A mix of research platforms and side projects.
        </p>

        <div className="mt-10 space-y-8">
          {projects.map((p) => (
            <article
              key={p.name}
              className="rounded-xl border border-neutral-200 p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h2 className="text-base font-semibold">{p.name}</h2>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${typeBadge[p.type]}`}
                >
                  {typeLabel[p.type]}
                </span>
              </div>

              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                {p.longDescription}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {(p.github || p.live) && (
                <div className="mt-5 flex gap-4 text-sm">
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
                      {p.type === "research" ? "Demo" : "Live site"}
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
}
