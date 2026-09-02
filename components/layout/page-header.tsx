import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/**
 * The dark opening band every inner page starts with.
 *
 * The navigation begins transparent over this band and turns solid on scroll,
 * so each page needs one for the header transition to read correctly.
 */
export function PageHeader({
  index,
  label,
  title,
  lede,
  image,
  breadcrumb,
  meta,
  align = "wide",
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  image?: string;
  breadcrumb?: { label: string; href: "/" | "/projects" | "/services" };
  /** Optional key/value strip along the bottom of the band. */
  meta?: { k: string; v: string }[];
  align?: "wide" | "narrow";
}) {
  return (
    <header className="relative isolate overflow-hidden bg-ink text-fg-invert">
      {image && (
        <div className="absolute inset-0" aria-hidden>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="page-header-image object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/80 to-ink/50" />
          <div className="absolute inset-0 bg-linear-to-r from-ink/80 via-ink/30 to-transparent" />
        </div>
      )}
      <div className="blueprint-grid absolute inset-0 opacity-70" aria-hidden />

      <div className="relative shell pb-14 pt-32 md:pb-16 md:pt-40 lg:pb-20 lg:pt-44">
        {breadcrumb && (
          <Reveal delay={0.02}>
            <nav aria-label="Breadcrumb" className="mb-8">
              <Link
                href={breadcrumb.href}
                className="label text-fg-invert-subtle transition-colors hover:text-accent-soft"
              >
                ← {breadcrumb.label}
              </Link>
            </nav>
          </Reveal>
        )}

        <Reveal delay={0.05}>
          <div className="label flex items-center gap-3 text-fg-invert-subtle">
            <span className="text-accent-soft">§ {index}</span>
            <span aria-hidden className="h-px w-8 bg-white/20" />
            <span>{label}</span>
          </div>

          <h1
            className={cn(
              "display-lg mt-7",
              align === "wide" ? "max-w-5xl" : "max-w-3xl",
            )}
          >
            {title}
          </h1>
        </Reveal>

        {lede && (
          <Reveal delay={0.13}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-fg-invert-muted md:text-lg">
              {lede}
            </p>
          </Reveal>
        )}

        {meta && meta.length > 0 && (
          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-white/12 pt-6 sm:grid-cols-4">
            {meta.map((m, index) => (
              <Reveal key={m.k} delay={0.16 + index * 0.05}>
                  <dt className="label text-fg-invert-subtle">{m.k}</dt>
                  <dd className="mt-2.5 font-display text-base font-semibold tracking-tight">
                    {m.v}
                  </dd>
              </Reveal>
            ))}
          </dl>
        )}
      </div>
    </header>
  );
}
