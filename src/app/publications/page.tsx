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

              {pub.link && (
                <div className="mt-3 text-sm">
                  <a className="underline" href={pub.link} target="_blank">
                    View
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
}