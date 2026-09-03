export type Testimonial = {
  quote: string;
  client: string;
  location: string;
  service: string;
};

/**
 * Presentation placeholders only. Replace these with approved, attributable
 * client feedback before the public launch.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "We had a narrow plot and several room requirements that initially felt difficult to balance. Seeing the options explained clearly helped us choose a plan that felt practical for everyday family life.",
    client: "Sample homeowner 01",
    location: "Bharatpur, Chitwan",
    service: "House planning",
  },
  {
    quote:
      "Developing the floor plan and exterior together made every decision easier. We could understand the proportions, materials and final character of the house before construction began.",
    client: "Sample homeowner 02",
    location: "Chitwan",
    service: "2D plan + 3D exterior",
  },
  {
    quote:
      "The stage-by-stage site guidance gave us confidence at the moments that mattered. Questions were resolved against the drawings before they became expensive changes on site.",
    client: "Sample homeowner 03",
    location: "Bharatpur, Chitwan",
    service: "Site supervision",
  },
];
