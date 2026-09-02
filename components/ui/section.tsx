import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

/**
 * Section shell — supplies the page gutter and consistent vertical rhythm.
 */
export function Section({
  children,
  className,
  id,
  dark = false,
  tight = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  tight?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        tight ? "py-16 md:py-20" : "py-20 md:py-28 lg:py-36",
        dark && "bg-ink text-fg-invert",
        className,
      )}
    >
      {children}
    </section>
  );
}

/**
 * The numbered index mark that runs through the site — "§ 03 / EXPERTISE".
 * It is the recurring typographic device that ties the sections together.
 */
export function IndexMark({
  index,
  label,
  dark = false,
  className,
}: {
  index: string;
  label: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "label flex items-center gap-3",
        dark ? "text-fg-invert-subtle" : "text-fg-subtle",
        className,
      )}
    >
      <span className={dark ? "text-accent-soft" : "text-accent"}>§ {index}</span>
      <span aria-hidden className={cn("h-px w-8", dark ? "bg-white/20" : "bg-line-strong")} />
      <span>{label}</span>
    </div>
  );
}

/**
 * Standard section header: index mark, display heading, optional lede and
 * trailing slot (usually a link). Uses an editorial two-column split.
 */
export function SectionHeader({
  index,
  label,
  title,
  lede,
  action,
  dark = false,
  align = "split",
  className,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  action?: React.ReactNode;
  dark?: boolean;
  align?: "split" | "stack";
  className?: string;
}) {
  return (
    <Reveal className={cn("shell", className)}>
      <IndexMark index={index} label={label} dark={dark} />
      <div
        className={cn(
          "mt-7 gap-x-16 gap-y-8",
          align === "split"
            ? "grid grid-cols-1 lg:grid-cols-12 lg:items-end"
            : "max-w-4xl",
        )}
      >
        <h2
          className={cn(
            "display-lg",
            align === "split" && "lg:col-span-6 xl:col-span-6",
          )}
        >
          {title}
        </h2>
        {(lede || action) && (
          <div
            className={cn(
              "flex flex-col gap-7",
              align === "split" && "lg:col-span-5 lg:col-start-8",
            )}
          >
            {lede && (
              <p className={cn("lede", dark && "text-fg-invert-muted")}>{lede}</p>
            )}
            {action}
          </div>
        )}
      </div>
    </Reveal>
  );
}
