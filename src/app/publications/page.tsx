import Container from "@/components/Container";
import { publications } from "@/data/publications";

export default function PublicationsPage() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-2xl font-semibold">Publications</h1>
        <p className="mt-2 text-neutral-600">
          Papers and academic work.
        </p>

        <div className="mt-8 space-y-4">
          {publications.map((pub) => (
            <article
              key={pub.title}
              className="rounded-xl border border-neutral-200 p-5"
            >
              <h2 className="text-base font-semibold">{pub.title}</h2>
              <p className="mt-2 text-sm text-neutral-600">{pub.venue}</p>
              <p className="mt-2 text-sm text-neutral-500">{pub.authors}</p>

              {(pub.link || pub.demo) && (
                <div className="mt-3 flex gap-4 text-sm">
                  {pub.link && (
                    <a className="underline underline-offset-4 text-neutral-500 hover:text-neutral-900" href={pub.link} target="_blank" rel="noreferrer">
                      View
                    </a>
                  )}
                  {pub.demo && (
                    <a className="underline underline-offset-4 text-neutral-500 hover:text-neutral-900" href={pub.demo} target="_blank" rel="noreferrer">
                      Demo
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