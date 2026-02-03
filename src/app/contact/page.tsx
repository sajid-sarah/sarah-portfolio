import Container from "@/components/Container";

export default function ContactPage() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <p className="mt-2 text-neutral-600">
          You can reach me here:
        </p>

        <div className="mt-6 space-y-2 text-sm">
          <div>
            Email: <a className="underline" href="mailto:sarahsajid16@gmail.com">sarahsajid16@gmail.com</a>
          </div>
          <div>
            GitHub: <a className="underline" href="https://github.com/sajid-sarah" target="_blank">github.com/sajid-sarah</a>
          </div>
          <div>
            LinkedIn: <a className="underline" href="https://linkedin.com" target="_blank">LinkedIn</a>
          </div>
        </div>
      </section>
    </Container>
  );
}