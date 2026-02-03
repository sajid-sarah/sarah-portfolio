import Container from "@/components/Container";
import { getDeployedProjects } from "@/lib/vercel";

export default async function HomePage() {
  const deployed = await getDeployedProjects();

  return (
    <Container>
      {/* Under construction notice */}
      <div className="mb-8 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
        🚧 Portfolio under construction — content and visuals are still being refined.
      </div>
      <section className="py-12">
        <h1 className="text-3xl font-semibold tracking-tight">
          Frontend AI Developer
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-600">
          I build scalable UI with React, TypeScript, and modern CSS. I’m
          especially interested in Human-AI interaction and AI based features.
        </p>
        
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-semibold">Deployed on Vercel</h2>
        <p className="mt-2 text-neutral-600">
          Live projects pulled from my Vercel account.
        </p>
        <div className="mt-8 space-y-4">
          {deployed.map((p) => (
            <article
              key={p.id}
              className="rounded-xl border border-neutral-200 p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold">{p.name}</h3>
                {p.framework ? (
                  <div className="text-sm text-neutral-500">
                    {p.framework}
                  </div>
                ) : null}
              </div>
              <div className="mt-3 text-sm">
                <a className="underline"
                href={p.prodUrl!}
                target="_blank"
                rel="noreferrer"
                >
                  Visit Project
                </a>
              </div>
            </article>
          ))}
          {deployed.length === 0 && (
            <div className="text-sm text-neutral-600">
              No deployed projects found.
            </div>
          )}
        </div>
      </section>
    </Container>
  );
}