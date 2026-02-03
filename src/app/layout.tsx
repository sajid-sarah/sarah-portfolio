import "./globals.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Sarah Sajid",
  description: "Frontend/AI Developer — Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900">
        <Nav />
        <main>{children}</main>
        <footer className="mt-16 border-t border-neutral-200 py-10 text-sm text-neutral-500">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            © {new Date().getFullYear()} Sarah Sajid
          </div>
        </footer>
      </body>
    </html>
  );
}
