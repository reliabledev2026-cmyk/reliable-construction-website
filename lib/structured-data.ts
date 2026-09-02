import { company, facebookPageUrl } from "@/data/company";
import { IMG } from "@/data/images";
import type { Service } from "@/data/services";
import { services } from "@/data/services";
import { absoluteUrl, siteUrl } from "@/lib/seo";

export const organisationId = `${siteUrl}/#organisation`;
export const websiteId = `${siteUrl}/#website`;

const areaServed = [
  { "@type": "City", name: "Bharatpur" },
  { "@type": "AdministrativeArea", name: "Chitwan, Nepal" },
];

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${siteUrl}/`,
      name: company.name,
      description: company.description,
      inLanguage: "en-NP",
      publisher: { "@id": organisationId },
    },
    {
      "@type": ["ProfessionalService", "GeneralContractor"],
      "@id": organisationId,
      name: company.name,
      legalName: company.legalName,
      url: `${siteUrl}/`,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.jpg"),
        width: 2054,
        height: 2048,
      },
      image: absoluteUrl(IMG.heroMain),
      description: company.description,
      slogan: company.tagline,
      email: company.contact.email,
      telephone: "+977-56-517722",
      sameAs: [facebookPageUrl],
      address: {
        "@type": "PostalAddress",
        streetAddress: company.contact.address.line1,
        addressLocality: company.contact.address.line2,
        addressRegion: company.contact.address.city,
        addressCountry: "NP",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: company.contact.coordinates.latitude,
        longitude: company.contact.coordinates.longitude,
      },
      hasMap: company.contact.mapsUrl,
      areaServed,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer enquiries",
        telephone: "+977-56-517722",
        email: company.contact.email,
        areaServed: "NP",
      },
      knowsAbout: services.map((service) => service.title),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "House engineering and construction services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.summary,
            url: absoluteUrl(`/services/${service.slug}`),
          },
        })),
      },
    },
  ],
};

function breadcrumbNode(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    ...breadcrumbNode(items),
  };
}

export function serviceJsonLd(service: Service) {
  const path = `/services/${service.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${absoluteUrl(path)}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.description,
        url: absoluteUrl(path),
        image: absoluteUrl(service.image),
        provider: { "@id": organisationId },
        areaServed,
      },
      breadcrumbNode([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: service.title, path },
      ]),
    ],
  };
}
