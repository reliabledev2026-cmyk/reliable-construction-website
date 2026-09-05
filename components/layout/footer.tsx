import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { company, legalLinks, navLinks } from "@/data/company";
import { services } from "@/data/services";
import { SocialIcon } from "@/components/ui/social-icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { fadeIn } from "@/lib/motion";
import { Logo } from "./logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-fg-invert">
      <div className="blueprint-grid absolute inset-0" aria-hidden />

      <div className="relative">
        {/* ------------------------------ columns ------------------------------ */}
        <RevealGroup
          gap={0.07}
          className="shell grid grid-cols-2 gap-x-8 gap-y-14 py-20 md:grid-cols-4 lg:grid-cols-12 lg:py-24"
        >
          {/* Identity */}
          <RevealItem className="col-span-2 md:col-span-4 lg:col-span-4">
            <Logo invert imageClassName="size-14" />
            <p className="mt-7 max-w-xs text-sm leading-relaxed text-fg-invert-muted">
              {company.description}
            </p>

            <ul className="mt-8 flex gap-2">
              {company.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex size-10 items-center justify-center border border-white/15 text-fg-invert-muted transition-[color,background-color,border-color,transform] duration-400 ease-out-expo hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-white"
                  >
                    <SocialIcon name={s.icon} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </RevealItem>

          {/* Navigate */}
          <RevealItem className="lg:col-span-2 lg:col-start-6">
            <nav aria-labelledby="footer-nav">
              <p id="footer-nav" className="label text-fg-invert-subtle">
                Company
              </p>
              <ul className="mt-6 flex flex-col gap-3.5 text-sm">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="inline-block text-fg-invert-muted transition-[color,transform] duration-400 ease-out-expo hover:translate-x-1 hover:text-accent-soft"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="inline-block text-fg-invert-muted transition-[color,transform] duration-400 ease-out-expo hover:translate-x-1 hover:text-accent-soft"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </RevealItem>

          {/* Services */}
          <RevealItem className="lg:col-span-2">
            <nav aria-labelledby="footer-services">
              <p id="footer-services" className="label text-fg-invert-subtle">
                Expertise
              </p>
              <ul className="mt-6 flex flex-col gap-3.5 text-sm">
                {services.slice(0, 7).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-block text-fg-invert-muted transition-[color,transform] duration-400 ease-out-expo hover:translate-x-1 hover:text-accent-soft"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="group inline-flex items-center gap-1.5 text-accent-soft"
                  >
                    All services
                    <ArrowUpRight
                      className="size-3.5 transition-transform duration-400 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden
                    />
                  </Link>
                </li>
              </ul>
            </nav>
          </RevealItem>

          {/* Contact */}
          <RevealItem className="col-span-2 md:col-span-2 lg:col-span-3 lg:col-start-10">
            <p className="label text-fg-invert-subtle">
              {company.contact.officeName}
            </p>
            <address className="mt-6 flex flex-col gap-1 text-sm not-italic leading-relaxed text-fg-invert-muted">
              <span>{company.contact.address.line1}</span>
              <span>{company.contact.address.line2}</span>
              <span>
                {company.contact.address.city}, {company.contact.address.country}
              </span>
            </address>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a
                href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
                className="inline-block text-fg-invert transition-[color,transform] duration-400 ease-out-expo hover:translate-x-1 hover:text-accent-soft"
              >
                {company.contact.phone}
              </a>
              <a
                href={`mailto:${company.contact.email}`}
                className="inline-block text-fg-invert-muted transition-[color,transform] duration-400 ease-out-expo hover:translate-x-1 hover:text-accent-soft"
              >
                {company.contact.email}
              </a>
              <a
                href={company.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-fg-invert-muted transition-[color,transform] duration-400 ease-out-expo hover:translate-x-1 hover:text-accent-soft"
              >
                WhatsApp: {company.contact.phoneAlt}
              </a>
            </div>
          </RevealItem>
        </RevealGroup>

        {/* --------------------------- oversized mark -------------------------- */}
        <Reveal className="shell pb-10" variants={fadeIn}>
          <p
            aria-hidden
            className="select-none font-display text-[clamp(3rem,13vw,12rem)] font-bold leading-[0.8] tracking-[-0.05em] text-white/[0.06]"
          >
            {company.logo.line1}
          </p>
        </Reveal>

        {/* ------------------------------ bottom bar --------------------------- */}
        <div className="border-t border-white/10">
          <Reveal className="shell flex flex-col gap-4 py-7 text-xs md:flex-row md:items-center md:justify-between" variants={fadeIn}>
            <p className="text-fg-invert-subtle">
              © {year} {company.legalName} All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
              {legalLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-fg-invert-subtle transition-colors duration-400 ease-out-expo hover:text-fg-invert"
                >
                  {l.label}
                </Link>
              ))}
              <span className="font-mono text-[0.625rem] tracking-[0.15em] text-fg-invert-subtle">
                Bharatpur / Chitwan
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}
