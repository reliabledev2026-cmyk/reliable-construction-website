/**
 * -----------------------------------------------------------------------------
 * CLIENTS & PARTNERS
 * -----------------------------------------------------------------------------
 * Rendered as a typographic logo wall — deliberately text-based so that no
 * fabricated brand marks appear on the site.
 *
 * TO USE REAL LOGOS: add `logo: "/images/clients/name.svg"` to an entry and the
 * ClientWall component will render the image in place of the wordmark.
 */

export type Client = {
  name: string;
  /** Short abbreviation shown above the wordmark. */
  abbr: string;
  sector: string;
  logo?: string;
};

export const clients: Client[] = [
  { name: "Department of Roads", abbr: "DOR", sector: "Government" },
  { name: "Nepal Electricity Authority", abbr: "NEA", sector: "Energy" },
  { name: "Department of Water Resources & Irrigation", abbr: "DWRI", sector: "Water" },
  { name: "Kathmandu Upatyaka Khanepani Ltd.", abbr: "KUKL", sector: "Utilities" },
  { name: "Ministry of Physical Infrastructure", abbr: "MOPIT", sector: "Government" },
  { name: "Ministry of Forests & Environment", abbr: "MOFE", sector: "Environment" },
  { name: "Pokhara Metropolitan City", abbr: "PMC", sector: "Municipal" },
  { name: "Bharatpur Metropolitan City", abbr: "BMC", sector: "Municipal" },
  { name: "Rural Infrastructure Development Programme", abbr: "RIDP", sector: "Development" },
  { name: "Independent Power Producers' Association", abbr: "IPPAN", sector: "Energy" },
  { name: "Nepal Infrastructure Development Authority", abbr: "NIDA", sector: "Infrastructure" },
  { name: "Provincial Health Directorate", abbr: "PHD", sector: "Healthcare" },
];
