import { IMG } from "./images";

/**
 * -----------------------------------------------------------------------------
 * CAREERS
 * -----------------------------------------------------------------------------
 * Drives /careers. Vacancies are static for now; when a CMS or ATS is connected
 * this array is what gets replaced by the fetched list.
 */

export type Vacancy = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Contract" | "Internship";
  experience: string;
  closes: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

export const vacancies: Vacancy[] = [
  {
    id: "sr-structural-engineer",
    title: "Senior Structural Engineer",
    department: "Structural Engineering",
    location: "Bharatpur (Main Office)",
    type: "Full-time",
    experience: "7+ years",
    closes: "31 October 2026",
    summary:
      "Lead structural design on bridge and public building commissions, from concept through to construction-issue drawings, with independent checking responsibility.",
    responsibilities: [
      "Lead the structural design of bridges and multi-storey buildings",
      "Carry out seismic analysis and prepare design basis reports",
      "Check and approve drawings and reinforcement detailing",
      "Mentor engineers and coordinate with other disciplines",
      "Support site teams with design clarification during construction",
    ],
    requirements: [
      "M.Sc./M.E. in Structural or Earthquake Engineering",
      "Nepal Engineering Council registration",
      "Proficiency in ETABS, SAP2000 or STAAD.Pro",
      "Demonstrated experience with NBC and AASHTO design",
      "Willingness to travel to project sites",
    ],
  },
  {
    id: "hydropower-design-engineer",
    title: "Hydropower Design Engineer",
    department: "Hydropower",
    location: "Bharatpur (Main Office)",
    type: "Full-time",
    experience: "4+ years",
    closes: "15 November 2026",
    summary:
      "Contribute to feasibility and detailed design of run-of-river schemes, with a focus on waterway hydraulics and headworks arrangement.",
    responsibilities: [
      "Prepare hydraulic design of intakes, desanding basins and waterways",
      "Carry out hydrological and energy yield analysis",
      "Produce design drawings, calculations and technical reports",
      "Support site investigation and field reconnaissance",
    ],
    requirements: [
      "M.E. in Water Resources or Hydropower Engineering",
      "Experience on at least two run-of-river schemes",
      "Competence in hydraulic modelling software",
      "Strong technical report writing in English",
    ],
  },
  {
    id: "resident-engineer",
    title: "Resident Engineer — Road Corridor",
    department: "Construction Supervision",
    location: "Sindhuli (Site-based)",
    type: "Contract",
    experience: "8+ years",
    closes: "20 October 2026",
    summary:
      "Take day-to-day charge of a mountain road supervision assignment, leading a site team of six through to completion and handover.",
    responsibilities: [
      "Lead the site supervision team and daily inspection regime",
      "Administer the contract and certify interim measurement",
      "Manage quality control testing and non-conformance closure",
      "Report progress, cost and risk to the client monthly",
    ],
    requirements: [
      "B.E./M.E. in Civil Engineering with NEC registration",
      "Prior resident engineer experience on road projects",
      "Working knowledge of FIDIC contract administration",
      "Prepared to be site-based for the assignment duration",
    ],
  },
  {
    id: "survey-engineer-uav",
    title: "Survey Engineer (UAV & GNSS)",
    department: "Survey & Geospatial",
    location: "Bharatpur / Site",
    type: "Full-time",
    experience: "3+ years",
    closes: "30 November 2026",
    summary:
      "Plan and execute topographic and photogrammetric surveys, and process the results into terrain models and GIS deliverables.",
    responsibilities: [
      "Plan and fly UAV photogrammetric surveys with ground control",
      "Operate GNSS RTK and robotic total station equipment",
      "Process point clouds into terrain models and orthophotos",
      "Prepare GIS datasets and survey reports",
    ],
    requirements: [
      "B.E. in Geomatics or Civil Engineering",
      "CAA Nepal UAV pilot authorisation (or willingness to obtain)",
      "Experience with photogrammetry and GIS software",
      "Comfortable working at altitude and in remote locations",
    ],
  },
  {
    id: "graduate-engineer",
    title: "Graduate Engineer Programme 2027",
    department: "Multiple Disciplines",
    location: "Bharatpur (Main Office)",
    type: "Full-time",
    experience: "0–2 years",
    closes: "15 December 2026",
    summary:
      "A structured two-year programme rotating graduates through design, survey and site supervision, with a named mentor throughout.",
    responsibilities: [
      "Rotate through three technical departments over two years",
      "Support design production under senior supervision",
      "Spend a minimum of six months on a construction site",
      "Complete a structured professional development record",
    ],
    requirements: [
      "B.E. in Civil, Structural, Geomatics or Environmental Engineering",
      "Strong academic record and technical fundamentals",
      "Clear written and spoken English and Nepali",
      "Genuine interest in field-based engineering work",
    ],
  },
  {
    id: "environmental-specialist",
    title: "Environmental Specialist",
    department: "Environment & Social",
    location: "Bharatpur / Site",
    type: "Full-time",
    experience: "5+ years",
    closes: "10 November 2026",
    summary:
      "Prepare IEE and EIA studies, manage the approval process and design mitigation measures that make it into the built work.",
    responsibilities: [
      "Prepare IEE and EIA reports to the Environment Protection Rules",
      "Design and supervise baseline monitoring programmes",
      "Facilitate public consultation and stakeholder engagement",
      "Manage approvals through the relevant ministry",
    ],
    requirements: [
      "M.Sc. in Environmental Science or Engineering",
      "Track record of approved IEE/EIA submissions in Nepal",
      "Field survey and monitoring experience",
      "Strong facilitation and report writing skills",
    ],
  },
];

/** Culture pillars shown above the vacancy list. */
export const culture = [
  {
    title: "Engineers, not drafters",
    body: "Graduates are given design responsibility early, with a named senior engineer checking the work and explaining the corrections.",
  },
  {
    title: "Time on site",
    body: "Everyone in the practice spends time in the field. Design judgement that has never seen a construction joint being poured is not judgement.",
  },
  {
    title: "Checked, not blamed",
    body: "Independent checking is a normal part of the process, not an accusation. Finding an error before issue is treated as the system working.",
  },
  {
    title: "Deep specialisation",
    body: "We support chartership, postgraduate study and technical society membership, and protect the time needed to pursue them.",
  },
];

export const benefits = [
  "Provident fund and gratuity",
  "Medical and accident insurance",
  "Field allowance and site accommodation",
  "Professional registration and society fees",
  "Structured mentoring for the first two years",
  "Annual technical training allowance",
  "Study leave for postgraduate programmes",
  "Paid parental leave beyond statutory minimum",
];

export const careersImages = {
  culture: IMG.studioTable,
  field: IMG.surveyorField,
  office: IMG.officeDiscussion,
};
