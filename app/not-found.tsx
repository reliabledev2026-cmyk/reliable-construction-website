import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { navLinks } from "@/data/company";

export default function NotFound() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-ink text-fg-invert">
      <div className="blueprint-grid absolute inset-0 opacity-70" aria-hidden />

      <Reveal className="relative shell py-32">
        <div className="label flex items-center gap-3 text-fg-invert-subtle">
          <span className="text-accent-soft">Error</span>
          <span aria-hidden className="h-px w-8 bg-white/20" />
          <span>404 — Not Found</span>
        </div>

        <h1 className="display-xl mt-8">
          This page is
          <br />
          off the alignment.
        </h1>

        <p className="mt-8 max-w-lg text-base leading-relaxed text-fg-invert-muted md:text-lg">
          The address you followed does not exist, or the page has been moved.
          The routes below will get you back on the corridor.
        </p>

        <ul className="mt-12 flex flex-wrap gap-2">
          <li>
            <Link
              href="/"
              className="group/btn inline-flex items-center gap-3 bg-accent px-6 py-4 text-white transition-colors duration-500 ease-out-expo hover:bg-paper hover:text-ink"
            >
              <span className="label">Home</span>
              <ArrowUpRight
                className="size-4 transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                aria-hidden
              />
            </Link>
          </li>
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="label inline-flex items-center border border-white/20 px-6 py-4 text-fg-invert-muted transition-colors duration-500 hover:border-accent hover:bg-accent hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
