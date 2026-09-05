import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, Manrope } from "next/font/google";
import { ContactFab } from "@/components/layout/contact-fab";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { JsonLd } from "@/components/seo/json-ld";
import { MotionProvider } from "@/components/ui/motion-provider";
import { company } from "@/data/company";
import { IMG } from "@/data/images";
import {
  createPageMetadata,
  siteDescription,
  siteTitle,
  siteUrl,
} from "@/lib/seo";
import { siteJsonLd } from "@/lib/structured-data";
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

const defaultSeo = createPageMetadata({
  title: siteTitle,
  description: siteDescription,
  path: "/",
  absoluteTitle: true,
  image: IMG.heroMain,
  imageAlt: "Modern family house designed for comfortable residential living",
});

export const metadata: Metadata = {
  ...defaultSeo,
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${company.name}`,
  },
  description: siteDescription,
  applicationName: company.name,
  keywords: [
    "house engineering consultancy Bharatpur",
    "house design Bharatpur",
    "2D house plan Chitwan",
    "3D exterior design Nepal",
    "structural analysis Chitwan",
    "municipality plan pass Bharatpur",
    "house construction supervision",
  ],
  authors: [{ name: company.name, url: siteUrl }],
  creator: company.name,
  publisher: company.legalName,
  category: "House engineering and construction",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: company.shortName,
    statusBarStyle: "black-translucent",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  other: {
    "geo.region": "NP-P3",
    "geo.placename": "Bharatpur, Chitwan",
    "geo.position": `${company.contact.coordinates.latitude};${company.contact.coordinates.longitude}`,
    ICBM: `${company.contact.coordinates.latitude}, ${company.contact.coordinates.longitude}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1319",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${archivo.variable} ${manrope.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="grain flex min-h-full flex-col bg-paper">
        <MotionProvider>
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
        </MotionProvider>

        <JsonLd data={siteJsonLd} />
      </body>
    </html>
  );
}
