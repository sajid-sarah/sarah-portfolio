import Container from "@/components/Container";

export default function ContactPage() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <p className="mt-2 text-neutral-600">
          Open to frontend and full-stack roles in Berlin and remote. Feel free to reach out.
        </p>

        <div className="mt-8 space-y-3 text-sm">
          <div>
            <span className="text-neutral-400 w-20 inline-block">Email</span>
            <a
              className="underline underline-offset-4 text-neutral-700 hover:text-neutral-900"
              href="mailto:sarahsajid16@gmail.com"
            >
              sarahsajid16@gmail.com
            </a>
          </div>
          <div>
            <span className="text-neutral-400 w-20 inline-block">GitHub</span>
            <a
              className="underline underline-offset-4 text-neutral-700 hover:text-neutral-900"
              href="https://github.com/sajid-sarah"
              target="_blank"
              rel="noreferrer"
            >
              github.com/sajid-sarah
            </a>
          </div>
          <div>
            <span className="text-neutral-400 w-20 inline-block">LinkedIn</span>
            <a
              className="underline underline-offset-4 text-neutral-700 hover:text-neutral-900"
              href="https://linkedin.com/in/sarah-sajid-87966b52"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/sarah-sajid-87966b52
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
}
