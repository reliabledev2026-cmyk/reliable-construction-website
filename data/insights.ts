import { IMG } from "./images";

/**
 * -----------------------------------------------------------------------------
 * INSIGHTS / NEWS
 * -----------------------------------------------------------------------------
 * Drives /insights and /insights/[slug]. `body` is an array of paragraphs —
 * when a CMS is connected this becomes rich text or MDX.
 */

export type Insight = {
  slug: string;
  title: string;
  category: "Technical Note" | "Practice News" | "Field Report";
  date: string;
  readingTime: string;
  author: string;
  excerpt: string;
  image: string;
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "sediment-is-the-design-problem",
    title: "Sediment is the design problem, not the afterthought",
    category: "Technical Note",
    date: "2026-07-18",
    readingTime: "6 min read",
    author: "Bikash Adhikari",
    excerpt:
      "Most run-of-river schemes in Nepal are designed for head and flow, then have sediment handling added at the end. That order is backwards, and it is expensive.",
    image: IMG.damSpillway,
    body: [
      "A Himalayan catchment does not deliver water. It delivers a suspension of water, sand and gravel, in proportions that change by two orders of magnitude between the dry season and a monsoon flood. Yet the standard sequence of hydropower design still treats sediment as a downstream consequence of decisions already fixed: intake position, approach geometry and desanding arrangement are settled on hydraulic grounds, and the sediment study arrives afterwards to confirm them.",
      "The result is predictable. We have inspected intakes that silted to their crest inside three monsoons, desanding basins whose flushing gates could not mobilise the deposited material, and turbines showing erosion patterns that were entirely foreseeable from the bedload data available before design began.",
      "The alternative is not more analysis but earlier analysis. Where the intake sits on a river bend, the natural secondary current does a substantial share of the separation work for free — provided the approach geometry is arranged to exploit it rather than fight it. Deciding that after the intake position is fixed forfeits the opportunity permanently.",
      "On the Sunkoshi diversion headworks, sediment modelling preceded intake siting rather than following it. The curved approach, tunnel-type excluder and dedicated flushing sluice were configured together, and the arrangement now excludes over ninety per cent of incoming bedload. Two earlier intake attempts at the same site, designed in the conventional order, had failed within a few seasons.",
      "None of this is novel hydraulics. It is a sequencing question, and sequencing is decided by whoever writes the terms of reference. Clients who ask for sediment assessment as a first-stage deliverable rather than a compliance annex tend to get schemes that survive their design life.",
    ],
  },
  {
    slug: "what-slope-failures-actually-tell-you",
    title: "What slope failures actually tell you about drainage",
    category: "Field Report",
    date: "2026-05-06",
    readingTime: "5 min read",
    author: "Prakash Maharjan",
    excerpt:
      "On the Sindhuli realignment, two of three chronic failure zones turned out to have almost nothing to do with the cut slope itself.",
    image: IMG.mountainRoad,
    body: [
      "When a hillside road fails repeatedly at the same chainage, the instinct is to treat the cut slope as the problem and to specify a retaining structure against it. It is a defensible instinct, and on the Sindhuli section it would have been wrong twice out of three times.",
      "Mapping the three chronic failure zones against geology, land use and surface drainage rather than against the road alignment alone produced a different picture. In two zones the failure surface daylighted well above the cut, and the trigger was uncontrolled surface water arriving from abandoned agricultural terraces upslope — terraces whose drainage had stopped being maintained after out-migration emptied the settlements above.",
      "The cut slope was not the cause. It was simply where the material came to rest, and where it caused the closure that made the problem visible.",
      "Designing catchment drainage interception above the road, with soil nailing and gabion revetment only where the cut genuinely governed, treated all three zones for roughly a third less than the full retaining scheme in the original concept. More importantly, it addressed a mechanism that a retaining wall would have left entirely intact.",
      "The general lesson is not that drainage is always the answer. It is that a failure mechanism has to be established rather than assumed, and that the investigation has to extend beyond the road reserve to do it. A geotechnical investigation bounded by the right-of-way will find whatever is inside the right-of-way, and will confidently miss the rest.",
    ],
  },
  {
    slug: "base-isolation-for-public-buildings",
    title: "Base isolation is finally proportionate for Nepali public buildings",
    category: "Technical Note",
    date: "2026-03-22",
    readingTime: "7 min read",
    author: "Sunita Shrestha",
    excerpt:
      "The cost premium has narrowed to the point where the argument turns on what a building is for, not on what isolation costs.",
    image: IMG.concreteBuilding,
    body: [
      "Base isolation has been technically available in Nepal for two decades and used in almost nothing, on the reasonable grounds that it cost more than the alternative. That arithmetic has shifted. Bearing supply has become competitive, contractors have installed enough of them to price the work without a large risk margin, and the superstructure savings that isolation permits are now routinely captured rather than left on the table.",
      "The more interesting change is in how the question is framed. Conventional seismic design targets life safety: the building may be damaged beyond repair, but the occupants get out. For most buildings that is the correct objective. For a hospital, an emergency operations centre or a provincial administrative complex designated as a post-disaster command facility, it is not — a building that is standing but unusable has failed at precisely the moment it was needed.",
      "Isolation changes the performance objective rather than merely improving the numbers. By reducing the acceleration transmitted into the superstructure, it protects the non-structural systems — partitions, services, equipment, ceilings — that actually determine whether a facility can operate the morning after an earthquake. Those systems, not the frame, are what usually take a nominally survivable building out of service.",
      "On the provincial administrative complex we adopted lead-rubber bearings and verified the design with non-linear time-history analysis against seven scaled ground motion records. The superstructure demand reduction was large enough to keep the architectural intent intact and to offset a meaningful share of the isolation cost.",
      "The remaining barrier is procurement rather than engineering. Isolation has to be decided at concept stage, because it cannot sensibly be added to a scheme designed around a fixed base. That means the client's brief, not the structural engineer's preference, is what determines whether it is available as an option at all.",
    ],
  },
  {
    slug: "house-engineering-services-bharatpur",
    title: "House engineering services in Bharatpur",
    category: "Practice News",
    date: "2026-01-14",
    readingTime: "3 min read",
    author: "Reliable Consulting & Construction",
    excerpt:
      "One coordinated service for house planning, exterior design, structural analysis, municipality documentation and site supervision.",
    image: IMG.officeDiscussion,
    body: [
      "Reliable Consulting & Construction provides residential engineering support from its main office beside Hakimchowk Bigmart in Bharatpur, Chitwan.",
      "Homeowners can begin with a 2D floor plan or ask for a coordinated package covering 3D exterior design, structural analysis, municipality plan-pass documentation and site supervision.",
      "Keeping these services connected reduces the risk of an exterior idea conflicting with the floor plan, a structural decision arriving after drawings are approved, or site questions being answered without reference to the complete design.",
      "To discuss a new house, renovation or extension, visit the Bharatpur office or contact the team by telephone, WhatsApp or email.",
    ],
  },
];

export const getInsight = (slug: string) => insights.find((i) => i.slug === slug);

/** Human-readable date, stable across server and client renders. */
export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
