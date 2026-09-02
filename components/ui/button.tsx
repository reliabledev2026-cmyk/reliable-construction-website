import { Slot } from "@radix-ui/react-slot";
import { ArrowRight } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "outline" | "outlineLight" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.18em] " +
  "transition-[background-color,color,border-color] duration-500 ease-out-expo " +
  "disabled:pointer-events-none disabled:opacity-50 select-none";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-fg-invert hover:bg-accent",
  accent: "bg-accent text-white hover:bg-ink",
  outline:
    "border border-line-strong text-fg hover:border-ink hover:bg-ink hover:text-fg-invert",
  outlineLight:
    "border border-white/25 text-fg-invert hover:border-transparent hover:bg-paper hover:text-ink",
  ghost: "text-fg hover:text-accent",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5",
  md: "h-12 px-7",
  lg: "h-14 px-9",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
  /** Appends a chevron that nudges right on hover. */
  withArrow?: boolean;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  asChild = false,
  withArrow = false,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          {children}
          {withArrow && <ArrowGlyph />}
        </>
      )}
    </Comp>
  );
}

/** Exported so `asChild` consumers (e.g. next/link) can include the arrow. */
export function ArrowGlyph({ className }: { className?: string }) {
  return (
    <ArrowRight
      className={cn(
        "size-3.5 shrink-0 transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-1",
        className,
      )}
      strokeWidth={1.75}
      aria-hidden
    />
  );
}
