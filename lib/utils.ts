import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional class names, resolving Tailwind conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** "01", "02" … used for the numbered index running through the site. */
export function pad(n: number, width = 2) {
  return String(n).padStart(width, "0");
}
