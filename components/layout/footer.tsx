import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { company, legalLinks, navLinks } from "@/data/company";
import { services } from "@/data/services";
import { SocialIcon } from "@/components/ui/social-icons";
import { Logo } from "./logo";

export function Footer() {
  const year = 2026;

  return (
    <footer className="relative overflow-hidden bg-ink text-fg-invert">
      <div className="blueprint-grid absolute inset-0" aria-hidden />

      <div className="relative">
        {/* ------------------------------ columns ------------------------------ */}
        <div className="shell grid grid-cols-2 gap-x-8 gap-y-14 py-20 md:grid-cols-4 lg:grid-cols-12 lg:py-24">
          {/* Identity */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4">
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
                    className="flex size-10 items-center justify-center border border-white/15 text-fg-invert-muted transition-colors duration-400 hover:border-accent hover:bg-accent hover:text-white"
                  >
                    <SocialIcon name={s.icon} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigate */}
          <nav
            aria-labelledby="footer-nav"
            className="lg:col-span-2 lg:col-start-6"
          >
            <p id="footer-nav" className="label text-fg-invert-subtle">
              Company
            </p>
            <ul className="mt-6 flex flex-col gap-3.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-fg-invert-muted transition-colors hover:text-accent-soft"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-fg-invert-muted transition-colors hover:text-accent-soft"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <nav aria-labelledby="footer-services" className="lg:col-span-2">
            <p id="footer-services" className="label text-fg-invert-subtle">
              Expertise
            </p>
            <ul className="mt-6 flex flex-col gap-3.5 text-sm">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-fg-invert-muted transition-colors hover:text-accent-soft"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-accent-soft"
                >
                  All services
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3 lg:col-start-10">
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
                className="text-fg-invert transition-colors hover:text-accent-soft"
              >
                {company.contact.phone}
              </a>
              <a
                href={`mailto:${company.contact.email}`}
                className="text-fg-invert-muted transition-colors hover:text-accent-soft"
              >
                {company.contact.email}
              </a>
              <a
                href={company.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-invert-muted transition-colors hover:text-accent-soft"
              >
                WhatsApp: {company.contact.phoneAlt}
              </a>
            </div>
          </div>
        </div>

        {/* --------------------------- oversized mark -------------------------- */}
        <div className="shell pb-10">
          <p
            aria-hidden
            className="select-none font-display text-[clamp(3rem,13vw,12rem)] font-bold leading-[0.8] tracking-[-0.05em] text-white/[0.06]"
          >
            {company.logo.line1}
          </p>
        </div>

        {/* ------------------------------ bottom bar --------------------------- */}
        <div className="border-t border-white/10">
          <div className="shell flex flex-col gap-4 py-7 text-xs md:flex-row md:items-center md:justify-between">
            <p className="text-fg-invert-subtle">
              © {year} {company.legalName} All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
              {legalLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-fg-invert-subtle transition-colors hover:text-fg-invert"
                >
                  {l.label}
                </Link>
              ))}
              <span className="font-mono text-[0.625rem] tracking-[0.15em] text-fg-invert-subtle">
                Bharatpur / Chitwan
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
