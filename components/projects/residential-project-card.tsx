import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { RevealImage } from "@/components/ui/media";
import type { ResidentialProject } from "@/data/residential-projects";

export function ResidentialProjectCard({
  project,
  priority = false,
}: {
  project: ResidentialProject;
  priority?: boolean;
}) {
  return (
    <article className="group">
      <Link href={`/projects/${project.slug}`} className="block">
        <RevealImage
          src={project.image}
          alt={project.title}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="aspect-4/3 bg-paper-2"
          imgClassName="group-hover:scale-[1.035]"
        >
          <span
            aria-hidden
            className="absolute inset-0 bg-linear-to-t from-ink/55 via-transparent to-transparent transition-colors duration-700 group-hover:from-ink/65"
          />
          <span className="label absolute bottom-4 left-4 text-white/85">
            {project.label}
          </span>
        </RevealImage>

        <div className="border-b border-line py-6">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="label text-accent">{project.location}</p>
              <h3 className="display-sm mt-3 transition-[color,transform] duration-500 ease-out-expo group-hover:translate-x-1 group-hover:text-accent-deep">
                {project.title}
              </h3>
            </div>
            <ArrowUpRight
              className="mt-1 size-5 shrink-0 text-fg-subtle transition-all duration-500 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
              aria-hidden
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-fg-muted">
            {project.summary}
          </p>
        </div>
      </Link>
    </article>
  );
}
