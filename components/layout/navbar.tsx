"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { navLinks } from "@/data/company";
import { services } from "@/data/services";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";

/**
 * Sticky navigation.
 *
 * Every page opens with a dark full-bleed band, so the bar starts transparent
 * with inverted text and transitions to a solid paper surface once the user
 * scrolls past that band.
 */
export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [solid, setSolid] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setSolid(y > 80);
  });

  const invert = !solid;

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-700 ease-out-expo",
        solid
          ? "border-b border-line bg-paper/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "shell flex items-center justify-between transition-[height] duration-700 ease-out-expo",
          solid ? "h-18" : "h-22",
        )}
      >
        <Logo invert={invert} />

        {/* ---------------------------- desktop nav --------------------------- */}
        <NavigationMenu.Root
          delayDuration={80}
          className="relative hidden lg:block"
        >
          <NavigationMenu.List className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname.startsWith(link.href);

              // "Services" opens a panel listing every discipline.
              if (link.label === "Services") {
                return (
                  <NavigationMenu.Item key={link.href}>
                    <NavigationMenu.Trigger
                      className={cn(
                        "label group/nav relative flex items-center gap-1.5 px-4 py-3 transition-colors duration-300",
                        invert
                          ? "text-white/80 hover:text-white data-[state=open]:text-white"
                          : "text-fg-muted hover:text-fg data-[state=open]:text-fg",
                        active && (invert ? "text-fg-invert" : "text-fg"),
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        className="size-3 transition-transform duration-400 group-data-[state=open]/nav:rotate-180"
                        strokeWidth={2}
                        aria-hidden
                      />
                      {active && <ActiveMark invert={invert} />}
                    </NavigationMenu.Trigger>

                    <NavigationMenu.Content className="nav-panel absolute left-1/2 top-full z-50 w-[min(58rem,calc(100vw-5rem))] -translate-x-1/2 pt-3">
                      <div className="border border-line bg-paper shadow-[0_24px_60px_-24px_rgba(11,19,25,0.35)]">
                        <div className="flex items-center justify-between border-b border-line px-7 py-4">
                          <span className="label text-fg-subtle">
                            Five home-building services · one team
                          </span>
                          <NavigationMenu.Link asChild>
                            <Link
                              href="/services"
                              className="label flex items-center gap-2 text-accent link-underline"
                            >
                              All services
                              <ArrowUpRight className="size-3.5" aria-hidden />
                            </Link>
                          </NavigationMenu.Link>
                        </div>

                        <ul className="grid grid-cols-2 gap-x-8 p-4">
                          {services.map((service, i) => (
                            <li key={service.slug}>
                              <NavigationMenu.Link asChild>
                                <Link
                                  href={`/services/${service.slug}`}
                                  className="group/item flex items-baseline gap-4 px-3 py-2.5 transition-colors duration-300 hover:bg-paper-2"
                                >
                                  <span className="font-mono text-[0.625rem] tracking-[0.15em] text-fg-subtle transition-colors group-hover/item:text-accent">
                                    {String(i + 1).padStart(2, "0")}
                                  </span>
                                  <span className="flex-1">
                                    <span className="block font-display text-[0.9375rem] font-semibold tracking-tight text-fg transition-transform duration-500 ease-out-expo group-hover/item:translate-x-1">
                                      {service.title}
                                    </span>
                                  </span>
                                  <ArrowUpRight
                                    className="size-3.5 shrink-0 text-fg-subtle opacity-0 transition-all duration-500 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:opacity-100"
                                    aria-hidden
                                  />
                                </Link>
                              </NavigationMenu.Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                );
              }

              return (
                <NavigationMenu.Item key={link.href}>
                  <NavigationMenu.Link asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        "label relative block px-4 py-3 transition-colors duration-300",
                        invert
                          ? "text-white/80 hover:text-white"
                          : "text-fg-muted hover:text-fg",
                        active && (invert ? "text-fg-invert" : "text-fg"),
                      )}
                    >
                      {link.label}
                      {active && <ActiveMark invert={invert} />}
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              );
            })}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        {/* ------------------------------- actions ---------------------------- */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className={cn(
              "group/cta hidden h-11 items-center gap-3 px-6 transition-colors duration-500 ease-out-expo lg:inline-flex",
              invert
                ? "border border-white/25 text-fg-invert hover:border-accent hover:bg-accent"
                : "bg-ink text-fg-invert hover:bg-accent",
            )}
          >
            <span className="label">Request a Consultation</span>
            <ArrowUpRight
              className="size-3.5 transition-transform duration-500 ease-out-expo group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
              aria-hidden
            />
          </Link>

          <MobileNav invert={invert} />
        </div>
      </div>
    </motion.header>
  );
}

/** Shared-layout underline that slides between active navigation items. */
function ActiveMark({ invert }: { invert: boolean }) {
  return (
    <motion.span
      layoutId="nav-active"
      aria-hidden
      className={cn(
        "absolute inset-x-4 bottom-1.5 h-px",
        invert ? "bg-accent" : "bg-accent",
      )}
      transition={{ duration: 0.5, ease: EASE }}
    />
  );
}
