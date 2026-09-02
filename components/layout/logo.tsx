import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  invert = false,
  imageClassName,
}: {
  className?: string;
  invert?: boolean;
  imageClassName?: string;
}) {
  return (
    <Link
      href="/"
      aria-label={`${company.name} — home`}
      className={cn("group/logo flex items-center gap-3", className)}
    >
      <Image
        src="/logo.jpg"
        alt=""
        width={88}
        height={88}
        loading="eager"
        className={cn(
          "size-11 shrink-0 rounded-full border object-cover shadow-sm transition-[border-color,transform] duration-500 group-hover/logo:scale-[1.03]",
          invert
            ? "border-white/30 group-hover/logo:border-accent-soft"
            : "border-line-strong group-hover/logo:border-accent",
          imageClassName,
        )}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[0.95rem] font-bold tracking-[0.05em]",
            invert ? "text-fg-invert" : "text-fg",
          )}
        >
          {company.logo.line1}
        </span>
        <span
          className={cn(
            "mt-1 font-mono text-[0.5rem] font-medium tracking-[0.12em]",
            invert ? "text-white/65" : "text-fg-subtle",
          )}
        >
          {company.logo.line2}
        </span>
      </span>
    </Link>
  );
}
