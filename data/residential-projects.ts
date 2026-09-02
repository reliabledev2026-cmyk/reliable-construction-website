import { IMG } from "./images";

export type ResidentialProject = {
  slug: string;
  title: string;
  label: string;
  location: string;
  summary: string;
  image: string;
  gallery: string[];
  description: string[];
  scope: string[];
  facts: { label: string; value: string }[];
  serviceSlugs: string[];
};

/**
 * Illustrative residential studies used to preview the project-gallery layout.
 * Replace these entries with approved company projects and photography.
 */
export const residentialProjects: ResidentialProject[] = [
  {
    slug: "warm-modern-family-home",
    title: "Warm Modern Family Home",
    label: "Concept Study 01",
    location: "Bharatpur · Residential",
    summary:
      "A light-filled two-storey home study balancing open family spaces, shaded glazing and a clean contemporary exterior.",
    image: IMG.heroMain,
    gallery: [IMG.heroMain, IMG.blueprint, IMG.reviewingDrawings],
    description: [
      "This illustrative study explores a calm, contemporary family home organised around natural light, direct circulation and comfortable shared spaces. Deep roof edges and shaded glazing give the exterior a strong identity while responding to heat and rain.",
      "The concept is presented as a coordinated workflow: establish the room plan first, test the exterior in three dimensions, align the structural grid, and carry consistent information into approval drawings and construction.",
    ],
    scope: [
      "Family brief and room planning",
      "2D floor-plan development",
      "Contemporary exterior visualisation",
      "Structural layout coordination",
      "Municipality drawing preparation",
      "Key-stage site guidance",
    ],
    facts: [
      { label: "Project type", value: "Family residence" },
      { label: "Design direction", value: "Warm contemporary" },
      { label: "Stage", value: "Illustrative concept" },
      { label: "Location", value: "Bharatpur reference" },
    ],
    serviceSlugs: [
      "2d-house-planning",
      "3d-exterior-design",
      "structural-analysis",
    ],
  },
  {
    slug: "neo-classical-facade-study",
    title: "Neo-Classical Facade Study",
    label: "Concept Study 02",
    location: "Chitwan · Exterior Design",
    summary:
      "A symmetrical facade direction exploring columns, balconies and restrained classical detailing for a family residence.",
    image: IMG.classicalHome,
    gallery: [IMG.classicalHome, IMG.drawingSet, IMG.steelFrame],
    description: [
      "This facade study considers how classical proportions, a central entrance and restrained column detailing can give a family home a formal character without making the construction unnecessarily complicated.",
      "The architectural expression would be refined alongside the floor plan and structural arrangement, ensuring balconies, openings and vertical elements remain coordinated rather than applied after the technical design is complete.",
    ],
    scope: [
      "Facade proportion and symmetry study",
      "Entrance, balcony and opening composition",
      "Material and colour direction",
      "Floor-plan and facade coordination",
      "Structural feasibility review",
      "Presentation views for client review",
    ],
    facts: [
      { label: "Project type", value: "Facade study" },
      { label: "Design direction", value: "Neo-classical" },
      { label: "Stage", value: "Illustrative concept" },
      { label: "Location", value: "Chitwan reference" },
    ],
    serviceSlugs: [
      "2d-house-planning",
      "3d-exterior-design",
      "municipality-plan-pass",
    ],
  },
  {
    slug: "compact-urban-residence",
    title: "Compact Urban Residence",
    label: "Concept Study 03",
    location: "Bharatpur · Compact Plot",
    summary:
      "A compact house concept using clear zoning, practical openings and vertical space efficiently on a tighter plot.",
    image: IMG.compactHome,
    gallery: [IMG.compactHome, IMG.blueprint, IMG.craneScaffold],
    description: [
      "This compact-home study focuses on getting more from a tighter urban plot. Rooms are grouped to keep movement simple, useful daylight is protected, and vertical space is used deliberately rather than adding area without purpose.",
      "Early coordination is especially valuable on compact sites, where setbacks, stair placement, columns and openings compete for the same limited space. The study shows how those decisions can be resolved as one system.",
    ],
    scope: [
      "Compact plot and setback review",
      "Efficient room zoning",
      "Stair and circulation planning",
      "Structure-aware floor planning",
      "Municipality document coordination",
      "Construction-stage clarification",
    ],
    facts: [
      { label: "Project type", value: "Compact residence" },
      { label: "Design direction", value: "Clean urban" },
      { label: "Stage", value: "Illustrative concept" },
      { label: "Location", value: "Bharatpur reference" },
    ],
    serviceSlugs: [
      "2d-house-planning",
      "structural-analysis",
      "site-supervision",
      "municipality-plan-pass",
    ],
  },
];

export function projectsForService(serviceSlug: string) {
  return residentialProjects.filter((project) =>
    project.serviceSlugs.includes(serviceSlug),
  );
}

export function getResidentialProject(slug: string) {
  return residentialProjects.find((project) => project.slug === slug);
}
