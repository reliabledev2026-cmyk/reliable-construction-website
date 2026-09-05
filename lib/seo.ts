import type { Metadata } from "next";
import { company } from "@/data/company";

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || company.url;

/** Canonical production origin. Override when the final custom domain is ready. */
export const siteUrl = new URL(configuredSiteUrl).origin;

export const siteTitle = company.name;

export const siteDescription =
  "Reliable Consulting & Construction provides property valuation, house planning, 3D rendering, structural design, municipal drawings, interior planning and site supervision in Bharatpur.";

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  image: string;
  imageAlt: string;
  keywords?: string[];
  noIndex?: boolean;
};

/**
 * Builds complete per-route metadata. Nested metadata is deliberately repeated
 * because Next.js shallowly replaces Open Graph and Twitter objects.
 */
export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  image,
  imageAlt,
  keywords,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const socialTitle = absoluteTitle
    ? title
    : `${title} | ${company.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_NP",
      url: canonical,
      siteName: company.name,
      title: socialTitle,
      description,
      images: [
        {
          url: absoluteUrl(image),
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [{ url: absoluteUrl(image), alt: imageAlt }],
    },
    ...(noIndex
      ? { robots: { index: false, follow: true, nocache: true } }
      : {}),
  };
}
