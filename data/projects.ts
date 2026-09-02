import { IMG } from "./images";

/**
 * -----------------------------------------------------------------------------
 * PROJECTS
 * -----------------------------------------------------------------------------
 * Drives: the featured grid on the home page, the filterable /projects page and
 * every /projects/[slug] detail page (generated with generateStaticParams).
 *
 * TO ADD A PROJECT: append an object below with a unique `slug`. The route, the
 * portfolio card, the filter counts and the sitemap entry follow automatically.
 *
 * `category` must be one of PROJECT_CATEGORIES so it appears under a filter.
 * `layout` only affects the asymmetric featured grid on the home page.
 */

export const PROJECT_CATEGORIES = [
  "Hydropower",
  "Transportation",
  "Buildings",
  "Water",
  "Survey",
  "Environment",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export type Project = {
  slug: string;
  title: string;
  location: string;
  province: string;
  client: string;
  category: ProjectCategory;
  sector: string;
  year: string;
  duration: string;
  status: "Completed" | "Ongoing" | "In Design";
  /** Card-level summary. Keep to one or two sentences. */
  description: string;
  /** Long-form narrative on the detail page. */
  overview: string;
  services: string[];
  scope: string[];
  highlights: { label: string; value: string }[];
  image: string;
  gallery: string[];
  featured?: boolean;
  /** Controls the tile size in the home page editorial grid. */
  layout?: "hero" | "wide" | "tall" | "standard";
};

export const projects: Project[] = [
  {
    slug: "upper-solu-khola-hydropower",
    title: "Upper Solu Khola Hydropower Project",
    location: "Solukhumbu",
    province: "Koshi Province",
    client: "Solu Power Development Ltd.",
    category: "Hydropower",
    sector: "Hydropower · Energy",
    year: "2025",
    duration: "38 months",
    status: "Ongoing",
    description:
      "Detailed engineering design and owner's engineer services for a 24 MW run-of-river scheme at 2,300 m, including headworks, a 3.4 km headrace tunnel and surface powerhouse.",
    overview:
      "The Upper Solu Khola scheme abstracts from a steep, sediment-heavy Himalayan catchment where access is limited to a single seasonal road. Our appointment covered hydrological reassessment, headworks and desanding design, waterway alignment through fractured gneiss, and the surface powerhouse civil works. Sediment was the governing design problem: the original concept underestimated bedload during monsoon, and the desanding arrangement was reconfigured to a three-chamber system with intermittent flushing that protects the turbines without unacceptable water loss. We continue to serve as owner's engineer through construction.",
    services: [
      "Feasibility Review",
      "Detailed Engineering Design",
      "Hydrological Assessment",
      "Owner's Engineer",
    ],
    scope: [
      "Hydrological reassessment and energy yield modelling",
      "Side intake and gravel trap headworks design",
      "Three-chamber desanding basin with flushing system",
      "3.4 km headrace tunnel alignment and support design",
      "Surge shaft and 640 m penstock alignment",
      "Surface powerhouse and tailrace civil design",
    ],
    highlights: [
      { label: "Installed capacity", value: "24 MW" },
      { label: "Design head", value: "312 m" },
      { label: "Headrace tunnel", value: "3.4 km" },
      { label: "Annual energy", value: "138 GWh" },
    ],
    image: IMG.damSpillway,
    gallery: [IMG.damMountains, IMG.tunnelExcavation, IMG.weir, IMG.gorge],
    featured: true,
    layout: "hero",
  },
  {
    slug: "trishuli-valley-viaduct",
    title: "Trishuli Valley Viaduct",
    location: "Nuwakot",
    province: "Bagmati Province",
    client: "Department of Roads",
    category: "Transportation",
    sector: "Transportation · Structures",
    year: "2024",
    duration: "29 months",
    status: "Completed",
    description:
      "A 420 m balanced-cantilever viaduct carrying the valley corridor across an unstable river terrace, with full construction supervision through to commissioning.",
    overview:
      "The existing road followed a terrace that had failed twice in a decade. Rather than continue to armour it, the corridor was lifted onto a 420 m viaduct on seven spans, founded in stable rock beyond the active slide mass. The superstructure was built by balanced cantilever to avoid falsework in the river. Our team carried out the structural design, the seismic assessment under NBC and AASHTO loading, and provided the resident engineering team for the full construction period.",
    services: [
      "Structural Design",
      "Geotechnical Investigation",
      "Construction Supervision",
      "Contract Administration",
    ],
    scope: [
      "Route realignment study and viaduct option appraisal",
      "Ground investigation across the active slide mass",
      "Balanced cantilever superstructure design",
      "Pier, pile cap and bored pile foundation design",
      "Seismic analysis and bearing/expansion joint design",
      "Full-time resident engineering and measurement",
    ],
    highlights: [
      { label: "Total length", value: "420 m" },
      { label: "Spans", value: "7" },
      { label: "Max pier height", value: "48 m" },
      { label: "Design life", value: "100 years" },
    ],
    image: IMG.viaductDusk,
    gallery: [IMG.bridgeCables, IMG.craneScaffold, IMG.steelFrame, IMG.bridgeDeck],
    featured: true,
    layout: "wide",
  },
  {
    slug: "kathmandu-valley-water-supply",
    title: "Kathmandu Valley Water Supply Improvement",
    location: "Lalitpur & Bhaktapur",
    province: "Bagmati Province",
    client: "Kathmandu Upatyaka Khanepani Ltd.",
    category: "Water",
    sector: "Water Resources · Urban",
    year: "2024",
    duration: "26 months",
    status: "Completed",
    description:
      "Hydraulic remodelling and rehabilitation design for 148 km of distribution network serving approximately 210,000 residents across two municipalities.",
    overview:
      "Intermittent supply and non-revenue water losses above 35% had left large parts of the network effectively unserved. We built a calibrated EPANET model from a field survey of the existing mains, redistricted the network into eleven discrete metered areas, and designed the valving, pressure management and pipe replacement needed to move the system toward continuous supply. Phasing was designed so that each district could be commissioned independently without shutting down the wider network.",
    services: [
      "Hydraulic Modelling",
      "Network Design",
      "Detailed Engineering Design",
      "Tender Documentation",
    ],
    scope: [
      "Field survey and asset condition assessment",
      "Calibrated EPANET hydraulic model of the network",
      "District metered area redistricting (11 zones)",
      "Pressure management and valve arrangement design",
      "Pipe replacement and rehabilitation drawings",
      "Phased implementation and tender documentation",
    ],
    highlights: [
      { label: "Network modelled", value: "148 km" },
      { label: "Population served", value: "210,000" },
      { label: "Metered districts", value: "11" },
      { label: "Target NRW", value: "< 18%" },
    ],
    image: IMG.canal,
    gallery: [IMG.canalWide, IMG.canalGreen, IMG.tunnelLit, IMG.drawingSet],
    featured: true,
    layout: "tall",
  },
  {
    slug: "sindhuli-bardibas-highway-section",
    title: "Sindhuli–Bardibas Highway, Section III",
    location: "Sindhuli",
    province: "Bagmati Province",
    client: "Department of Roads",
    category: "Transportation",
    sector: "Transportation · Geotechnical",
    year: "2023",
    duration: "31 months",
    status: "Completed",
    description:
      "Realignment and slope stabilisation design for a 22 km mountain section with a history of monsoon closures and recurrent slope failure.",
    overview:
      "Three chronic failure zones were closing this section for weeks each monsoon. We mapped the failures against geology and drainage rather than treating them as isolated slips, and found that two of the three were driven by uncontrolled surface water from above the road rather than by the cut slope itself. The remedial design therefore led with catchment drainage interception, supported by soil nailing and gabion revetments where the cut genuinely governed, at materially lower cost than the full retaining structures originally proposed.",
    services: [
      "Route Alignment Study",
      "Geotechnical Investigation",
      "Detailed Engineering Design",
      "Slope Stabilisation Design",
    ],
    scope: [
      "Landslide inventory and failure mechanism mapping",
      "Ground investigation across three failure zones",
      "22 km realignment and geometric design",
      "Catchment drainage interception design",
      "Soil nail, gabion and revetment design",
      "Pavement design and quantity estimation",
    ],
    highlights: [
      { label: "Section length", value: "22 km" },
      { label: "Failure zones treated", value: "3" },
      { label: "Slope works", value: "1,840 m" },
      { label: "Cost saving vs. concept", value: "≈ 31%" },
    ],
    image: IMG.mountainRoad,
    gallery: [IMG.gorge, IMG.tunnelPortal, IMG.surveyorField, IMG.terraces],
    featured: true,
    layout: "standard",
  },
  {
    slug: "province-administrative-complex",
    title: "Provincial Administrative Complex",
    location: "Hetauda",
    province: "Bagmati Province",
    client: "Ministry of Physical Infrastructure",
    category: "Buildings",
    sector: "Buildings · Public",
    year: "2024",
    duration: "24 months",
    status: "Ongoing",
    description:
      "Structural and services design for a 14,500 m² base-isolated administrative building intended to remain operational immediately after a major seismic event.",
    overview:
      "As a designated post-disaster command facility, the complex had to satisfy an immediate-occupancy performance objective rather than the life-safety standard that governs ordinary buildings. We adopted lead-rubber base isolation, which reduced superstructure demand enough to keep the architectural intent intact while protecting the non-structural systems that actually determine whether a building can be used after an earthquake. Non-linear time-history analysis was carried out against seven scaled ground motion records.",
    services: [
      "Structural Design",
      "Seismic Analysis",
      "Project Management",
      "Design Review",
    ],
    scope: [
      "Structural concept and base isolation feasibility",
      "Non-linear time-history analysis (7 records)",
      "Lead-rubber bearing specification and layout",
      "Superstructure RC frame design and detailing",
      "Foundation and isolation plinth design",
      "Design coordination and programme management",
    ],
    highlights: [
      { label: "Gross floor area", value: "14,500 m²" },
      { label: "Storeys", value: "6 + basement" },
      { label: "Isolation bearings", value: "84" },
      { label: "Performance target", value: "Immediate occupancy" },
    ],
    image: IMG.concreteBuilding,
    gallery: [IMG.concreteStair, IMG.steelFrame, IMG.towerConstruction, IMG.blueprint],
    featured: true,
    layout: "standard",
  },
  {
    slug: "budhi-gandaki-bridge-crossing",
    title: "Budhi Gandaki Bridge Crossing",
    location: "Gorkha",
    province: "Gandaki Province",
    client: "Provincial Infrastructure Development Office",
    category: "Transportation",
    sector: "Transportation · Structures",
    year: "2023",
    duration: "22 months",
    status: "Completed",
    description:
      "A 180 m cable-stayed crossing replacing a seasonal ford, designed for extreme scour and debris-flow loading in a braided river reach.",
    overview:
      "The crossing sits in a braided reach where the low-flow channel migrates several hundred metres between monsoons. A conventional multi-span structure would have placed piers in the migration corridor, so the design was taken to a single 180 m cable-stayed span clear of the active bed. Scour and debris-flow loading on the abutments governed the foundation design, which was taken to bedrock through 28 m of alluvium.",
    services: [
      "Bridge Design",
      "Hydrological Assessment",
      "Geotechnical Investigation",
      "Construction Supervision",
    ],
    scope: [
      "River morphology and channel migration study",
      "Scour and debris-flow loading assessment",
      "180 m cable-stayed superstructure design",
      "Pylon and anchorage design",
      "Deep foundation design through alluvium",
      "Construction stage analysis and supervision",
    ],
    highlights: [
      { label: "Main span", value: "180 m" },
      { label: "Carriageway", value: "7.5 m + walkways" },
      { label: "Foundation depth", value: "28 m" },
      { label: "Design flood", value: "1 in 100 year" },
    ],
    image: IMG.bridgeBuild,
    gallery: [IMG.bridgeDeck, IMG.bridgeTowers, IMG.steelFabrication, IMG.cableMono],
  },
  {
    slug: "naubise-tunnel-corridor",
    title: "Naubise Tunnel Corridor Study",
    location: "Dhading",
    province: "Bagmati Province",
    client: "Nepal Infrastructure Development Authority",
    category: "Transportation",
    sector: "Transportation · Tunnelling",
    year: "2025",
    duration: "18 months",
    status: "In Design",
    description:
      "Alignment study and preliminary design for a 2.7 km twin-tube road tunnel bypassing the most failure-prone section of the Tribhuvan corridor.",
    overview:
      "The existing corridor climbs through a sequence of tight hairpins on a slope that has never been stable. The study compared four tunnel alignments against geology, portal stability, ventilation demand and construction access. The preferred option shortens the corridor by 11 km and removes 340 m of climb, but the decisive argument was portal siting: it is the only alignment where both portals sit in competent rock away from active slide masses.",
    services: [
      "Alignment Study",
      "Geotechnical Investigation",
      "Preliminary Design",
      "Environmental Assessment",
    ],
    scope: [
      "Four-option tunnel alignment comparison",
      "Geological mapping and core drilling programme",
      "Rock mass classification and support design",
      "Portal siting and slope stability assessment",
      "Ventilation and emergency egress concept",
      "Initial Environmental Examination",
    ],
    highlights: [
      { label: "Tunnel length", value: "2.7 km" },
      { label: "Configuration", value: "Twin tube" },
      { label: "Corridor shortened", value: "11 km" },
      { label: "Climb removed", value: "340 m" },
    ],
    image: IMG.tunnelExcavation,
    gallery: [IMG.tunnelLit, IMG.tunnelPortal, IMG.tunnelStructure, IMG.mountainRoad],
  },
  {
    slug: "marsyangdi-cascade-hydropower",
    title: "Marsyangdi Cascade Hydropower Study",
    location: "Lamjung",
    province: "Gandaki Province",
    client: "Independent Power Producer Consortium",
    category: "Hydropower",
    sector: "Hydropower · Energy",
    year: "2022",
    duration: "20 months",
    status: "Completed",
    description:
      "Feasibility study for a three-stage cascade totalling 71 MW, optimising the split of head between stages against access cost and grid connection.",
    overview:
      "A single large scheme on this reach would have required a reservoir with significant inundation and a difficult resettlement case. We assessed a cascade of three run-of-river stages instead, and optimised where the head was divided between them. The controlling variables were not hydraulic but logistical: access road construction cost and transmission interconnection dominated the economics, and the final configuration reflects that rather than pure energy maximisation.",
    services: [
      "Feasibility Study",
      "Hydrological Assessment",
      "Energy Yield Modelling",
      "Environmental Screening",
    ],
    scope: [
      "Catchment hydrology and flow duration analysis",
      "Cascade configuration optimisation",
      "Headworks and waterway concept design",
      "Access road and transmission cost modelling",
      "Sediment and environmental flow assessment",
      "Financial and economic evaluation",
    ],
    highlights: [
      { label: "Total capacity", value: "71 MW" },
      { label: "Stages", value: "3" },
      { label: "Combined head", value: "486 m" },
      { label: "Annual energy", value: "402 GWh" },
    ],
    image: IMG.damMountains,
    gallery: [IMG.damAerial, IMG.weir, IMG.canalWide, IMG.gorge],
  },
  {
    slug: "sunkoshi-diversion-headworks",
    title: "Sunkoshi Diversion Headworks",
    location: "Sindhupalchok",
    province: "Bagmati Province",
    client: "Department of Water Resources & Irrigation",
    category: "Water",
    sector: "Water Resources · Irrigation",
    year: "2023",
    duration: "27 months",
    status: "Completed",
    description:
      "Barrage and intake design diverting irrigation supply to 9,400 hectares, with a sediment excluder sized for an exceptionally heavy bedload regime.",
    overview:
      "Bedload at this site had defeated two earlier intake arrangements, which silted to the point of failure within a few seasons. We modelled sediment transport across the full flow range and designed a curved-approach intake with a tunnel-type excluder and a dedicated flushing sluice, positioned so that the natural secondary current at the bend does much of the separation work before the excluder is reached.",
    services: [
      "Headworks Design",
      "Hydraulic Modelling",
      "Sediment Study",
      "Construction Supervision",
    ],
    scope: [
      "River hydrology and sediment transport modelling",
      "Barrage and undersluice hydraulic design",
      "Curved-approach intake and excluder design",
      "Stilling basin and energy dissipation design",
      "Bank protection and guide bund design",
      "Construction supervision and commissioning",
    ],
    highlights: [
      { label: "Command area", value: "9,400 ha" },
      { label: "Design discharge", value: "18 m³/s" },
      { label: "Barrage length", value: "126 m" },
      { label: "Sediment exclusion", value: "> 90%" },
    ],
    image: IMG.damAerial,
    gallery: [IMG.weir, IMG.canalGreen, IMG.canalWide, IMG.canalDusk],
  },
  {
    slug: "bagmati-corridor-improvement",
    title: "Bagmati Corridor River Training",
    location: "Kathmandu",
    province: "Bagmati Province",
    client: "High Powered Committee for Integrated Development",
    category: "Water",
    sector: "Water Resources · Urban",
    year: "2022",
    duration: "23 months",
    status: "Completed",
    description:
      "River training, embankment and flood protection design along an 11 km urban reach, combined with a continuous public riverside corridor.",
    overview:
      "The reach had been progressively encroached, narrowing the channel to the point where a moderate flood overtopped into dense settlement. The design restored conveyance width where it could be recovered, and used a stepped embankment section elsewhere so that flood capacity and a public walkway occupy the same footprint. Two-dimensional modelling was used to confirm that the works do not simply transfer the flood risk downstream.",
    services: [
      "Flood Modelling",
      "River Training Design",
      "Detailed Engineering Design",
      "Environmental Assessment",
    ],
    scope: [
      "2D hydraulic modelling of the urban reach",
      "Channel conveyance and encroachment assessment",
      "Stepped embankment and revetment design",
      "Riverside public corridor integration",
      "Outfall and drainage interface design",
      "Environmental and social impact assessment",
    ],
    highlights: [
      { label: "Reach length", value: "11 km" },
      { label: "Design flood", value: "1 in 50 year" },
      { label: "Embankment", value: "9.2 km" },
      { label: "Public corridor", value: "11 km" },
    ],
    image: IMG.canalDusk,
    gallery: [IMG.canalGreen, IMG.canalWide, IMG.terraces, IMG.heritageCity],
  },
  {
    slug: "everest-region-trail-bridges",
    title: "Everest Region Trail Bridge Programme",
    location: "Solukhumbu",
    province: "Koshi Province",
    client: "Rural Infrastructure Development Programme",
    category: "Transportation",
    sector: "Transportation · Rural Access",
    year: "2021",
    duration: "19 months",
    status: "Completed",
    description:
      "Survey, design and supervision for 14 suspended and suspension trail bridges restoring year-round access for 26 settlements above 2,800 m.",
    overview:
      "Every component had to be carried in on foot or by porter, which made section sizing a logistics problem as much as a structural one. Members were standardised across all fourteen crossings so that a single fabrication run and a single porter load-out schedule could serve the whole programme. Spans ranged from 42 m to 128 m, and each site was surveyed by GNSS with permanent control left in place for future inspection.",
    services: [
      "Topographic Survey",
      "Bridge Design",
      "Construction Supervision",
      "Community Consultation",
    ],
    scope: [
      "GNSS survey of 14 crossing sites",
      "Standardised component design across the programme",
      "Suspended and suspension bridge design",
      "Anchorage and foundation design in rock",
      "Porter logistics and load-out scheduling",
      "Site supervision and community training",
    ],
    highlights: [
      { label: "Bridges delivered", value: "14" },
      { label: "Longest span", value: "128 m" },
      { label: "Settlements served", value: "26" },
      { label: "Highest site", value: "4,140 m" },
    ],
    image: IMG.bridgeCables,
    gallery: [IMG.cableMono, IMG.trussMono, IMG.gorge, IMG.valleyDawn],
  },
  {
    slug: "dhangadhi-teaching-hospital",
    title: "Dhangadhi Teaching Hospital",
    location: "Kailali",
    province: "Sudurpashchim Province",
    client: "Provincial Health Directorate",
    category: "Buildings",
    sector: "Buildings · Healthcare",
    year: "2025",
    duration: "30 months",
    status: "Ongoing",
    description:
      "Structural design and construction supervision for a 300-bed teaching hospital on a liquefaction-susceptible Terai site.",
    overview:
      "Ground investigation identified loose saturated sands to 14 m with a liquefaction risk that ruled out shallow foundations for the main blocks. The scheme uses ground improvement beneath the low-rise wings and piled foundations under the tower, with a structural layout arranged so that critical clinical departments sit within the most robustly founded portion of the plan. We provide the resident engineering team through construction.",
    services: [
      "Structural Design",
      "Geotechnical Investigation",
      "Construction Supervision",
      "Quality Assurance",
    ],
    scope: [
      "Ground investigation and liquefaction assessment",
      "Ground improvement design for low-rise wings",
      "Piled foundation design for the ward tower",
      "RC superstructure design and detailing",
      "Departmental structural zoning for resilience",
      "Full-time construction supervision and testing",
    ],
    highlights: [
      { label: "Capacity", value: "300 beds" },
      { label: "Gross floor area", value: "21,800 m²" },
      { label: "Piles", value: "412" },
      { label: "Investigation depth", value: "32 m" },
    ],
    image: IMG.towerConstruction,
    gallery: [IMG.craneScaffold, IMG.concreteStair, IMG.steelFabrication, IMG.blueprint],
  },
  {
    slug: "pokhara-ring-road-survey",
    title: "Pokhara Ring Road Corridor Survey",
    location: "Kaski",
    province: "Gandaki Province",
    client: "Pokhara Metropolitan City",
    category: "Survey",
    sector: "Survey · Geospatial",
    year: "2024",
    duration: "9 months",
    status: "Completed",
    description:
      "UAV and ground survey of a 42 km corridor producing a controlled terrain model, orthophoto and right-of-way register for design and acquisition.",
    overview:
      "The corridor crosses dense settlement, agricultural land and two river crossings, and the municipality needed a single spatial dataset that would serve both engineering design and land acquisition. We flew the corridor by UAV against 186 surveyed ground control points, tied the whole survey to permanent control monuments, and delivered a terrain model, a 4 cm orthophoto and a parcel-level right-of-way register in one consistent coordinate system.",
    services: [
      "UAV Photogrammetry",
      "Topographic Survey",
      "GIS & Mapping",
      "Cadastral Survey",
    ],
    scope: [
      "Control network establishment (186 GCPs)",
      "UAV photogrammetric survey of 42 km corridor",
      "Digital terrain model and contour generation",
      "4 cm ground sample distance orthophoto",
      "Parcel-level right-of-way register",
      "GIS dataset delivery and client training",
    ],
    highlights: [
      { label: "Corridor length", value: "42 km" },
      { label: "Ground control points", value: "186" },
      { label: "Orthophoto GSD", value: "4 cm" },
      { label: "Parcels registered", value: "2,340" },
    ],
    image: IMG.surveyorCity,
    gallery: [IMG.surveyorField, IMG.levelInstrument, IMG.drawingSet, IMG.valleyDawn],
  },
  {
    slug: "chitwan-cadastral-utility-survey",
    title: "Chitwan Cadastral & Utility Survey",
    location: "Chitwan",
    province: "Bagmati Province",
    client: "Bharatpur Metropolitan City",
    category: "Survey",
    sector: "Survey · Municipal",
    year: "2023",
    duration: "12 months",
    status: "Completed",
    description:
      "Municipal-scale cadastral and buried utility survey across 38 km² establishing a unified spatial base for infrastructure planning.",
    overview:
      "The municipality held parcel records, water mains and drainage records in three incompatible systems, none of them georeferenced to a common datum. We resurveyed the control framework, reconciled the three record sets against field verification, and located buried services by electromagnetic detection where records were unreliable. The result is a single spatial base that subsequent design work has been able to build on directly.",
    services: [
      "Cadastral Survey",
      "Utility Mapping",
      "GIS & Mapping",
      "Data Reconciliation",
    ],
    scope: [
      "Municipal control network resurvey",
      "Cadastral parcel survey across 38 km²",
      "Buried utility detection and mapping",
      "Reconciliation of three legacy record systems",
      "Unified GIS database construction",
      "Municipal staff training and handover",
    ],
    highlights: [
      { label: "Area surveyed", value: "38 km²" },
      { label: "Parcels mapped", value: "18,600" },
      { label: "Utility runs located", value: "214 km" },
      { label: "Legacy systems merged", value: "3" },
    ],
    image: IMG.surveyorField,
    gallery: [IMG.levelInstrument, IMG.blueprint, IMG.drawingSet, IMG.heritageCity],
  },
  {
    slug: "karnali-watershed-assessment",
    title: "Karnali Watershed Environmental Assessment",
    location: "Surkhet & Dailekh",
    province: "Karnali Province",
    client: "Ministry of Forests & Environment",
    category: "Environment",
    sector: "Environment · Watershed",
    year: "2024",
    duration: "14 months",
    status: "Completed",
    description:
      "Environmental Impact Assessment and catchment management plan covering 1,240 km² of a rapidly degrading upper watershed.",
    overview:
      "Accelerating erosion in the upper catchment was being attributed to road construction, but the assessment found the dominant driver to be the loss of terrace maintenance following out-migration, with road drainage a significant but secondary contributor. Because the mechanism differed from the assumption, the management plan led with terrace rehabilitation and community forestry rather than the road-focused mitigation originally envisaged.",
    services: [
      "Environmental Impact Assessment",
      "Watershed Management Planning",
      "Public Consultation",
      "Monitoring Framework",
    ],
    scope: [
      "Baseline ecological and hydrological survey",
      "Erosion source attribution study",
      "Full EIA to Environment Protection Rules",
      "Public consultation across 22 wards",
      "Catchment management plan and costing",
      "Long-term monitoring framework design",
    ],
    highlights: [
      { label: "Catchment area", value: "1,240 km²" },
      { label: "Wards consulted", value: "22" },
      { label: "Monitoring stations", value: "16" },
      { label: "Plan horizon", value: "15 years" },
    ],
    image: IMG.terraces,
    gallery: [IMG.gorge, IMG.canalGreen, IMG.valleyDawn, IMG.mountainRoad],
  },
  {
    slug: "gandaki-basin-environmental-audit",
    title: "Gandaki Basin Compliance Audit",
    location: "Gandaki Basin",
    province: "Gandaki Province",
    client: "Provincial Environment Division",
    category: "Environment",
    sector: "Environment · Compliance",
    year: "2025",
    duration: "11 months",
    status: "Ongoing",
    description:
      "Independent environmental compliance audit of eleven operating hydropower schemes, assessing environmental flow release and mitigation delivery.",
    overview:
      "Environmental flow conditions had been imposed at licensing but never systematically verified in operation. We instrumented release points at all eleven schemes, audited twelve months of operating records against licence conditions, and assessed whether the mitigation measures committed in each EIA had actually been implemented. The audit protocol developed for this assignment is now being applied to further schemes in the basin.",
    services: [
      "Compliance Audit",
      "Environmental Monitoring",
      "Flow Assessment",
      "Reporting Framework",
    ],
    scope: [
      "Audit protocol development and agreement",
      "Environmental flow release instrumentation",
      "Twelve-month operating record audit",
      "EIA mitigation delivery verification",
      "Downstream ecological condition survey",
      "Provincial reporting framework design",
    ],
    highlights: [
      { label: "Schemes audited", value: "11" },
      { label: "Monitoring points", value: "34" },
      { label: "Audit period", value: "12 months" },
      { label: "Basin coverage", value: "Gandaki" },
    ],
    image: IMG.gorge,
    gallery: [IMG.terraces, IMG.valleyDawn, IMG.canalWide, IMG.damAerial],
  },
];

/* ---------------------------------- helpers -------------------------------- */

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const featuredProjects = projects.filter((p) => p.featured);

/** Up to `limit` other projects, preferring the same category. */
export const relatedProjects = (slug: string, limit = 3) => {
  const current = getProject(slug);
  if (!current) return projects.slice(0, limit);
  const sameCategory = projects.filter(
    (p) => p.slug !== slug && p.category === current.category,
  );
  const others = projects.filter(
    (p) => p.slug !== slug && p.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
};

export const projectsByCategory = (category: string) =>
  category === "All" ? projects : projects.filter((p) => p.category === category);
