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
    slug: "property-valuation",
    title: "Property Valuation",
    summary:
      "Considered valuation of residential land and buildings for informed property decisions.",
    description:
      "A useful valuation looks beyond a single headline figure. We review the purpose of the assessment, available property information, site access, location, land characteristics and the condition of any existing building to prepare a clear, evidence-based opinion of value for the agreed use.",
    scope: [
      "Valuation purpose and document review",
      "Site visit and property identification",
      "Land, access and location assessment",
      "Existing-building condition review",
      "Relevant value considerations",
      "Structured valuation report",
    ],
    capabilities: [
      "Residential land and building assessment",
      "Area and condition observations",
      "Comparable-property considerations",
      "Purpose-specific reporting",
    ],
    icon: "valuation",
    image: IMG.modernHome,
  },
  {
    slug: "municipality-plan-pass",
    title: "Municipal Drawings & Plan Pass",
    summary:
      "Coordinated technical drawings and documentation for residential municipality submission.",
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
    title: "3D Exterior Design & Rendering",
    summary:
      "Realistic exterior visualisation for reviewing form, materials and character before building.",
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
    slug: "master-plan-project-report",
    title: "Master Plan & Project Report",
    summary:
      "Site-wide planning and clear project reporting for larger residential or mixed-use developments.",
    description:
      "Projects involving several buildings, phased development or a larger land parcel need decisions to be organised beyond an individual floor plan. We study access, building placement, circulation, open space, infrastructure and development priorities, then communicate the proposed direction through coordinated master-plan drawings and a practical project report.",
    scope: [
      "Site context and development brief",
      "Land-use and building placement studies",
      "Access, circulation and open-space planning",
      "Infrastructure coordination framework",
      "Development phasing considerations",
      "Master-plan drawings and project report",
    ],
    capabilities: [
      "Residential development planning",
      "Site feasibility option studies",
      "Area and land-use schedules",
      "Presentation and planning reports",
    ],
    icon: "report",
    image: IMG.studioTable,
  },
  {
    slug: "interior-planning-furnishing",
    title: "Interior Planning & Furnishing",
    summary:
      "Functional room planning, material direction and furnishing coordinated with everyday use.",
    description:
      "Interior decisions work best when they grow from the architecture rather than being added after construction. We coordinate furniture layouts, built-in storage, kitchen and bathroom requirements, material palettes, lighting intent and selected interior details so each room feels practical, coherent and ready to implement.",
    scope: [
      "Room use and furniture layouts",
      "Kitchen and bathroom planning",
      "Built-in storage and cabinetry direction",
      "Material and colour palette",
      "Ceiling and lighting coordination",
      "Interior views and furnishing guidance",
    ],
    capabilities: [
      "Residential space planning",
      "Custom furniture and joinery coordination",
      "Material and finish selection",
      "Implementation-ready design guidance",
    ],
    icon: "interior",
    image: IMG.compactHome,
  },
  {
    slug: "structural-drawings",
    title: "Structural Drawings",
    summary:
      "Clear foundation, frame and reinforcement drawings coordinated with the approved architecture.",
    description:
      "Structural calculations have to be translated into drawings that can be understood and followed on site. We develop coordinated foundation, column, beam, slab, stair and reinforcement information, resolving interfaces with the architectural plan before the drawing set is issued for construction.",
    scope: [
      "Foundation layouts and details",
      "Column and beam layouts",
      "Slab and staircase details",
      "Reinforcement drawings",
      "Structural schedules and notes",
      "Architectural coordination and revisions",
    ],
    capabilities: [
      "Residential RCC detailing",
      "Analysis-to-drawing coordination",
      "Construction-readable technical details",
      "Drawing revisions and clarification",
    ],
    icon: "drawing",
    image: IMG.steelFrame,
  },
  {
    slug: "consultation-feasibility",
    title: "Consultation & Feasibility",
    summary:
      "Early technical advice to clarify the plot, priorities, constraints and most useful next step.",
    description:
      "Not every project begins with a complete brief. A focused consultation helps organise the available information, identify important site and planning constraints, test whether the intended direction is realistic and define which professional services are needed before committing to detailed design or construction.",
    scope: [
      "Client goals and project-stage review",
      "Plot information and initial constraints",
      "Room, scale and use requirements",
      "Early planning and buildability advice",
      "Service scope and sequence guidance",
      "Practical next-step recommendations",
    ],
    capabilities: [
      "Pre-design consultation",
      "Residential feasibility review",
      "Independent design or drawing review",
      "Project scope planning",
    ],
    icon: "consultation",
    image: IMG.reviewingDrawings,
  },
];

/** Useful supporting scopes that can sit alongside the core services. */
export const additionalServices = [
  {
    title: "Cost Estimation & BOQ",
    body: "Early quantity and cost guidance to keep design decisions aligned with a realistic construction budget.",
  },
  {
    title: "Renovation & Extension Guidance",
    body: "Practical advice for layout changes, additions and upgrades to an existing home before work begins.",
  },
  {
    title: "As-Built Documentation",
    body: "Measured drawings that record the visible arrangement and dimensions of an existing building.",
  },
  {
    title: "Construction Coordination",
    body: "Drawing clarification and communication support when design decisions need to be resolved during the build.",
  },
] as const;

/** Lookup helper used by the service detail route. */
export const getService = (slug: string) => services.find((s) => s.slug === slug);
