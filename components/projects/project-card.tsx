import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

/**
 * Portfolio tile. Hover behaviour is pure CSS so the card can stay a server
 * component — the parent supplies the scroll reveal.
 *
 * `aspect` is passed in rather than fixed, which is what lets the featured grid
 * mix tile proportions instead of repeating one card shape.
 */
export function ProjectCard({
  project,
  aspect = "aspect-4/3",
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw",
  priority = false,
  index,
}: {
  project: Project;
  aspect?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  index?: number;
}) {
  return (
    <article className={cn("group", className)}>
      <Link href={`/projects/${project.slug}`} className="block">
        {/* ------------------------------- plate ------------------------------ */}
        <div
          className={cn(
            "crop-marks relative w-full overflow-hidden bg-paper-2 text-white",
            aspect,
          )}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover transition-transform duration-[1.1s] ease-out-expo group-hover:scale-[1.04]"
          />

          {/* Overlay deepens slightly on hover to lift the labels */}
          <span
            aria-hidden
            className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/5 to-ink/10 opacity-70 transition-opacity duration-700 group-hover:opacity-95"
          />

          {/* Category + status */}
          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4 md:p-5">
            <span className="label bg-ink/55 px-2.5 py-1.5 backdrop-blur-sm">
              {project.category}
            </span>
            {index !== undefined && (
              <span className="label text-white/70">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
          </div>

          {/* Location + arrow */}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 md:p-5">
            <span className="label text-white/85">
              {project.location} · {project.year}
            </span>
            <span className="flex size-10 shrink-0 translate-y-1 items-center justify-center border border-white/30 opacity-0 transition-all duration-500 ease-out-expo group-hover:translate-y-0 group-hover:border-accent group-hover:bg-accent group-hover:opacity-100">
              <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden />
            </span>
          </div>
        </div>

        {/* ------------------------------ caption ----------------------------- */}
        <div className="pt-5">
          <h3 className="font-display text-lg font-semibold leading-snug tracking-[-0.025em] transition-transform duration-600 ease-out-expo group-hover:translate-x-1.5 md:text-xl">
            {project.title}
          </h3>
          <p className="mt-2.5 text-sm text-fg-muted">{project.sector}</p>
          <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5">
            {project.services.slice(0, 3).map((s) => (
              <li
                key={s}
                className="label border border-line px-2 py-1 text-fg-subtle"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  );
}
