"use client";

import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { ProjectCard } from "@/components/projects/project-card";
import { PROJECT_CATEGORIES, type Project } from "@/data/projects";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

const FILTERS = ["All", ...PROJECT_CATEGORIES] as const;
type Filter = (typeof FILTERS)[number];

/**
 * Client-side portfolio filter.
 *
 * The controls are toggle buttons rather than tabs: the grid is a single
 * filtered region, not six separate panels, so `aria-pressed` plus a live
 * count describes it more honestly than a tablist would.
 */
export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = React.useState<Filter>("All");

  const counts = React.useMemo(() => {
    const map: Record<string, number> = { All: projects.length };
    for (const c of PROJECT_CATEGORIES) {
      map[c] = projects.filter((p) => p.category === c).length;
    }
    return map;
  }, [projects]);

  const visible = React.useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter, projects],
  );

  return (
    <div className="shell">
      {/* --------------------------------- controls -------------------------- */}
      <div className="flex flex-col gap-6 border-y border-line py-5 md:flex-row md:items-center md:justify-between">
        <div
          className="-mx-1 flex flex-wrap items-center gap-x-1 gap-y-2"
          role="group"
          aria-label="Filter projects by sector"
        >
          {FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f)}
                className={cn(
                  "label relative px-3.5 py-2.5 transition-colors duration-400",
                  active ? "text-fg-invert" : "text-fg-muted hover:text-fg",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 -z-10 bg-ink"
                    transition={{ duration: 0.45, ease: EASE }}
                  />
                )}
                <span className="relative">
                  {f}
                  <span
                    className={cn(
                      "ml-2 text-[0.625rem]",
                      active ? "text-accent" : "text-fg-subtle",
                    )}
                  >
                    {counts[f]}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <p className="label shrink-0 text-fg-subtle" aria-live="polite">
          Showing {String(visible.length).padStart(2, "0")} of{" "}
          {String(projects.length).padStart(2, "0")}
        </p>
      </div>

      {/* ----------------------------------- grid ---------------------------- */}
      <motion.ul
        layout
        className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-y-20"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.li
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.55, ease: EASE, delay: (i % 6) * 0.045 }}
            >
              <ProjectCard
                project={project}
                index={i}
                // Every third tile runs taller so the grid keeps a rhythm
                aspect={i % 3 === 1 ? "aspect-4/5" : "aspect-4/3"}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 31vw"
                priority={i < 3}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {visible.length === 0 && (
        <p className="py-24 text-center text-fg-muted">
          No projects in this sector yet.
        </p>
      )}
    </div>
  );
}
