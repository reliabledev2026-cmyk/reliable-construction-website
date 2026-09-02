/**
 * -----------------------------------------------------------------------------
 * TESTIMONIALS
 * -----------------------------------------------------------------------------
 * Shown in the carousel on the home page. Replace with real, attributed quotes
 * before launch — keep them specific rather than complimentary.
 */

export type Testimonial = {
  quote: string;
  name: string;
  position: string;
  organisation: string;
  project?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They told us the original intake arrangement would silt within three seasons, and they showed us the sediment data behind that view rather than simply asserting it. Redesigning cost us four months. Not redesigning would have cost us the scheme.",
    name: "Rajan Koirala",
    position: "Project Director",
    organisation: "Solu Power Development Ltd.",
    project: "Upper Solu Khola Hydropower Project",
  },
  {
    quote:
      "The supervision team held the contractor to the specification through a difficult monsoon without ever letting the programme drift into a dispute. That balance is rarer than it should be.",
    name: "Er. Mina Bhattarai",
    position: "Senior Divisional Engineer",
    organisation: "Department of Roads",
    project: "Trishuli Valley Viaduct",
  },
  {
    quote:
      "We had asked three firms for a network model. Reliable was the only one that surveyed the mains before modelling them, and it was the only model that matched what we measured in the field.",
    name: "Suresh Manandhar",
    position: "Deputy General Manager",
    organisation: "Kathmandu Upatyaka Khanepani Ltd.",
    project: "Kathmandu Valley Water Supply Improvement",
  },
  {
    quote:
      "Their assessment contradicted what we expected to hear about the cause of erosion in the catchment. They were right, and the management plan is far better for it.",
    name: "Dr. Kamala Devkota",
    position: "Under Secretary",
    organisation: "Ministry of Forests & Environment",
    project: "Karnali Watershed Environmental Assessment",
  },
  {
    quote:
      "Fourteen bridges, every component carried in by porter, delivered inside the season. The logistics planning was as carefully engineered as the structures.",
    name: "Pemba Sherpa",
    position: "Programme Coordinator",
    organisation: "Rural Infrastructure Development Programme",
    project: "Everest Region Trail Bridge Programme",
  },
];
