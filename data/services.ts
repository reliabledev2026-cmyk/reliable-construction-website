import { IMG } from "./images";

/**
 * -----------------------------------------------------------------------------
 * SERVICES
 * -----------------------------------------------------------------------------
 * Drives: the home page expertise list, /services, and every /services/[slug]
 * detail page (routes are generated from `slug`).
 *
 * TO ADD A SERVICE: append an object below. The number, routing, navigation and
 * sitemap entry are all derived automatically.
 *
 * `icon` is a key into components/icon.tsx — add the icon there if you use a new
 * name.
 */

export type Service = {
  slug: string;
  title: string;
  /** One-line summary used in lists and cards. */
  summary: string;
  /** Full narrative for the service detail page. */
  description: string;
  /** What the assignment typically covers. */
  scope: string[];
  /** Specific technical capabilities and tooling. */
  capabilities: string[];
  icon: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "2d-house-planning",
    title: "2D House Planning",
    summary:
      "Practical floor plans shaped around your plot, family needs, movement, light and future use.",
    description:
      "A good home begins with a clear plan. We translate your room requirements, preferred style, plot dimensions, access and budget into coordinated 2D drawings that can guide design decisions, municipality documentation and construction. Options are discussed early, while layouts are still easy to improve.",
    scope: [
      "Client brief and room schedule",
      "Plot-based concept planning",
      "Floor plans and circulation",
      "Door, window and stair coordination",
      "Area statement and drawing revisions",
      "Construction drawing coordination",
    ],
    capabilities: [
      "Residential space planning",
      "Orientation, daylight and ventilation review",
      "Practical room sizing",
      "Coordination with structure and services",
    ],
    icon: "clipboard",
    image: IMG.blueprint,
  },
  {
    slug: "3d-exterior-design",
    title: "3D Exterior Design",
    summary:
      "Exterior visualisation that lets you review the form, materials and character of your home before building.",
    description:
      "Three-dimensional exterior design makes the architectural idea easier to understand before work starts on site. We develop the visible form of the house alongside the floor plan, testing proportions, openings, balconies, rooflines, colours and material combinations so decisions can be made with confidence.",
    scope: [
      "Exterior massing and form development",
      "Facade composition",
      "Balcony, opening and roof treatment",
      "Material and colour studies",
      "Perspective views",
      "Client review and design refinement",
    ],
    capabilities: [
      "Residential exterior modelling",
      "Day and material visualisation",
      "Design coordination with floor plans",
      "Presentation-ready exterior views",
    ],
    icon: "building",
    image: IMG.concreteBuilding,
  },
  {
    slug: "structural-analysis",
    title: "Structural Analysis",
    summary:
      "Coordinated structural analysis and detailing focused on safe, practical residential construction.",
    description:
      "The structural system has to support the architectural plan without creating avoidable complexity on site. We analyse the proposed house, develop the foundation and frame arrangement, and coordinate structural drawings with the approved layout so the contractor has clear information to build from.",
    scope: [
      "Structural layout and load path",
      "Foundation design",
      "Column, beam and slab design",
      "Staircase and roof structure",
      "Reinforcement drawings",
      "Structural design coordination",
    ],
    capabilities: [
      "Residential reinforced-concrete design",
      "Seismic design considerations",
      "Nepal Building Code coordination",
      "Buildable structural detailing",
    ],
    icon: "construction",
    image: IMG.steelFrame,
  },
  {
    slug: "site-supervision",
    title: "Site Supervision",
    summary:
      "Regular engineering guidance and quality checks to help construction follow the approved drawings.",
    description:
      "Drawings achieve their purpose only when they are understood and followed on site. Our supervision service provides technical checks at key stages, answers design questions, records issues and helps the client and construction team keep the work aligned with the approved architectural and structural information.",
    scope: [
      "Setting-out and drawing review",
      "Foundation and reinforcement checks",
      "Concrete-work observations",
      "Architectural dimension checks",
      "Site query and variation guidance",
      "Progress and quality observations",
    ],
    capabilities: [
      "Stage-based technical inspections",
      "Drawing interpretation for site teams",
      "Photographic observation records",
      "Coordination of design clarifications",
    ],
    icon: "hardhat",
    image: IMG.craneScaffold,
  },
  {
    slug: "municipality-plan-pass",
    title: "Municipality Plan Pass",
    summary:
      "Preparation and coordination of the technical drawing set required for municipality submission.",
    description:
      "Municipality approval is easier when the architectural and structural documents are prepared together from the beginning. We organise the relevant plans, schedules and supporting technical information for submission and assist with drawing updates when the reviewing authority raises a query.",
    scope: [
      "Submission drawing preparation",
      "Area and setback coordination",
      "Architectural drawing compilation",
      "Structural document coordination",
      "Schedule and form support",
      "Revision support for review comments",
    ],
    capabilities: [
      "Residential plan-pass documentation",
      "Drawing-set consistency checks",
      "Municipality requirement coordination",
      "Submission revision management",
    ],
    icon: "clipboard",
    image: IMG.drawingSet,
  },
];

/** Useful supporting scopes that can sit alongside the five core services. */
export const additionalServices = [
  {
    title: "Cost Estimation & BOQ",
    body: "Early quantity and cost guidance to keep design decisions aligned with a realistic construction budget.",
  },
  {
    title: "Property Valuation",
    body: "Structured property assessment and reporting for owners who need a considered view of land or building value.",
  },
  {
    title: "Interior Planning",
    body: "Room layouts, material direction and furnishing guidance coordinated with how the home will be used.",
  },
  {
    title: "Renovation Guidance",
    body: "Practical advice for extensions, layout changes and improvements to an existing home before work begins.",
  },
] as const;

/** Lookup helper used by the service detail route. */
export const getService = (slug: string) => services.find((s) => s.slug === slug);
