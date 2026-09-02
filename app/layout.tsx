import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, Manrope } from "next/font/google";
import { ContactFab } from "@/components/layout/contact-fab";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { company } from "@/data/company";
import { IMG } from "@/data/images";
import "./globals.css";

/* --------------------------------- fonts ---------------------------------- */
/* Archivo carries the display voice, Manrope the body copy, IBM Plex Mono the
   technical labelling that runs through the site. */

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

/* -------------------------------- metadata -------------------------------- */

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} — House Planning, Design & Construction in Bharatpur`,
    template: `%s — ${company.shortName}`,
  },
  description: company.description,
  keywords: [
    "house design Bharatpur",
    "2D house plan Chitwan",
    "3D exterior design Nepal",
    "residential structural analysis",
    "municipality plan pass Bharatpur",
    "house construction supervision",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: company.url,
    siteName: company.name,
    title: `${company.name} — Your Dream Home, Our Commitment`,
    description: company.description,
    images: [
      {
        url: IMG.heroMain,
        width: 1200,
        height: 630,
        alt: "Residential building design and construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: company.name,
    description: company.description,
    images: [IMG.heroMain],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0b1319",
  colorScheme: "light",
};

/* ------------------------------ structured data --------------------------- */

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: company.name,
  legalName: company.legalName,
  url: company.url,
  logo: new URL("/logo.jpg", company.url).toString(),
  description: company.description,
  email: company.contact.email,
  telephone: company.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.contact.address.line1,
    addressLocality: company.contact.address.line2,
    addressRegion: company.contact.address.city,
    addressCountry: "NP",
  },
  areaServed: { "@type": "AdministrativeArea", name: "Chitwan, Nepal" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${archivo.variable} ${manrope.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="grain flex min-h-full flex-col bg-paper">
        {/* Keyboard users can jump the navigation */}
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[200] focus:bg-ink focus:px-5 focus:py-3 focus:text-fg-invert"
        >
          Skip to content
        </a>

        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <ContactFab />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organisationSchema),
          }}
        />
      </body>
    </html>
  );
}
