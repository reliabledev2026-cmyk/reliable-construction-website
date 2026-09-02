import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { company } from "@/data/company";
import { IMG } from "@/data/images";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description: `Discuss your house planning, design or construction needs with ${company.name} in Bharatpur, Chitwan.`,
  path: "/contact",
  image: IMG.compactHome,
  imageAlt: "Compact contemporary house exterior",
  keywords: [
    "engineering consultant Hakimchowk",
    "house consultant Bharatpur contact",
    "construction consultancy Chitwan",
  ],
});

export default function ContactPage() {
  const { contact } = company;

  return (
    <>
      <PageHeader
        index="01"
        label="Contact"
        title={
          <>
            Request a
            <br />
            consultation.
          </>
        }
        lede="Tell us about your plot, the home you want to build and the stage you are at. We can help with planning, exterior design, structural analysis, municipality documentation and site supervision."
        image={IMG.concreteBuilding}
      />

      <Section>
        <div className="shell grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-12">
          {/* ------------------------------ details --------------------------- */}
          <div className="lg:col-span-4">
            <Reveal>
              <p className="label text-fg-subtle">Direct contact</p>

              <ul className="mt-8 flex flex-col border-t border-line">
                <ContactRow
                  icon={<MessageCircle className="size-4" strokeWidth={1.5} />}
                  label="Phone & WhatsApp"
                >
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="link-underline"
                  >
                    {contact.phone}
                  </a>
                  <a
                    href={contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-fg-muted"
                  >
                    WhatsApp: {contact.phoneAlt}
                  </a>
                </ContactRow>

                <ContactRow
                  icon={<Mail className="size-4" strokeWidth={1.5} />}
                  label="Email"
                >
                  <a href={`mailto:${contact.email}`} className="link-underline">
                    {contact.email}
                  </a>
                </ContactRow>

                <ContactRow
                  icon={<MapPin className="size-4" strokeWidth={1.5} />}
                  label={contact.officeName}
                >
                  <span>{contact.address.line1}</span>
                  <span>{contact.address.line2}</span>
                  <span className="text-fg-muted">
                    {contact.address.city}, {contact.address.country}
                  </span>
                </ContactRow>

              </ul>
            </Reveal>
          </div>

          {/* -------------------------------- form ---------------------------- */}
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.08}>
              <div className="flex items-baseline justify-between gap-6 border-b border-line pb-5">
                <h2 className="display-sm">Project enquiry</h2>
                <span className="label text-fg-subtle">All fields required</span>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ---------------------------------- map ------------------------------- */}
      <section className="border-t border-line bg-paper-2">
        <div className="shell py-16 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="label text-fg-subtle">Location</p>
                <h2 className="display-md mt-5">Find the office.</h2>
              </div>
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="label group inline-flex items-center gap-2 text-accent"
              >
                Open in Google Maps
                <ArrowUpRight
                  className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </a>
            </div>
          </Reveal>

          {/* Live Google Maps embed using the supplied main-office coordinates. */}
          <Reveal delay={0.1}>
            <div className="mt-10 grid overflow-hidden border border-line bg-paper lg:grid-cols-12">
              <div className="relative min-h-[22rem] lg:col-span-8 lg:min-h-[30rem]">
                <iframe
                  src={contact.mapsEmbedUrl}
                  title={`${company.name} main office location on Google Maps`}
                  loading="eager"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0 grayscale-[15%]"
                />
              </div>

              <div className="blueprint-grid relative flex flex-col justify-between bg-ink p-7 text-fg-invert lg:col-span-4 lg:p-10">
                <div>
                  <p className="label text-accent-soft">{contact.officeName}</p>
                  <h3 className="display-sm mt-6">Visit us in Bharatpur.</h3>
                  <p className="mt-5 text-sm leading-relaxed text-fg-invert-muted">
                    {contact.address.line1}
                    <br />
                    {contact.address.line2}
                    <br />
                    {contact.address.city}, {contact.address.country}
                  </p>
                </div>

                <div className="mt-10 border-t border-white/12 pt-6">
                  <p className="font-mono text-[0.625rem] tracking-[0.12em] text-fg-invert-subtle">
                    {contact.coordinates.latitude.toFixed(6)}, {" "}
                    {contact.coordinates.longitude.toFixed(6)}
                  </p>
                  <a
                    href={contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 flex items-center justify-between bg-accent px-5 py-4 text-white transition-colors duration-500 hover:bg-paper hover:text-ink"
                  >
                    <span className="label">Get directions</span>
                    <ArrowUpRight
                      className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden
                    />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ quick actions -------------------------- */}
      <section className="bg-ink text-fg-invert">
        <Reveal className="shell grid grid-cols-1 md:grid-cols-2">
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="group relative isolate flex items-center justify-between gap-6 overflow-hidden border-b border-white/12 py-12 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent md:border-b-0 md:border-r md:pr-10"
          >
            <span
              className="absolute inset-0 -z-10 origin-left scale-x-0 bg-white/[0.045] transition-transform duration-700 ease-out-expo group-hover:scale-x-100 group-focus-visible:scale-x-100"
              aria-hidden
            />
            <span className="relative z-10">
              <span className="label text-fg-invert-subtle">
                Prefer to talk?
              </span>
              <span className="display-sm mt-4 block">
                {contact.phone}
              </span>
            </span>
            <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-white/15 text-fg-invert-muted transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-white group-focus-visible:border-accent group-focus-visible:bg-accent group-focus-visible:text-white">
              <Phone className="size-5" strokeWidth={1.4} aria-hidden />
            </span>
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="group relative isolate flex items-center justify-between gap-6 overflow-hidden py-12 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent md:pl-10"
          >
            <span
              className="absolute inset-0 -z-10 origin-left scale-x-0 bg-white/[0.045] transition-transform duration-700 ease-out-expo group-hover:scale-x-100 group-focus-visible:scale-x-100"
              aria-hidden
            />
            <span className="relative z-10 min-w-0">
              <span className="label text-fg-invert-subtle">
                Prefer to write?
              </span>
              <span className="mt-4 block font-display text-lg font-semibold tracking-tight wrap-break-word sm:text-xl lg:text-2xl">
                {contact.email}
              </span>
            </span>
            <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-white/15 text-fg-invert-muted transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-white group-focus-visible:border-accent group-focus-visible:bg-accent group-focus-visible:text-white">
              <Mail className="size-5" strokeWidth={1.4} aria-hidden />
            </span>
          </a>
        </Reveal>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-5 border-b border-line py-6">
      <span className="mt-0.5 text-accent" aria-hidden>
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="label text-fg-subtle">{label}</p>
        <div className="mt-3 flex flex-col gap-1.5 break-words text-sm">
          {children}
        </div>
      </div>
    </li>
  );
}
