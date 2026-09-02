import { IMG } from "./images";

export type TeamMember = {
  name: string;
  position: string;
  qualification: string;
  focus: string;
  experience: string;
  discipline: string;
  bio: string;
  image: string;
  placeholder?: boolean;
};

/**
 * Temporary profiles for layout review only.
 * Replace names, qualifications and portraits with approved company material
 * before launch.
 */
export const team: TeamMember[] = [
  {
    name: "Er. Aakash Sharma",
    position: "Principal Civil Engineer",
    qualification: "B.E. Civil Engineering",
    focus: "House planning, technical coordination and site delivery",
    experience: "To be confirmed",
    discipline: "Civil Engineering",
    bio: "Temporary profile copy for the residential planning and delivery lead.",
    image: IMG.person1,
    placeholder: true,
  },
  {
    name: "Ar. Nisha Adhikari",
    position: "Architectural Designer",
    qualification: "B.Arch",
    focus: "Residential layouts, exterior visualisation and interiors",
    experience: "To be confirmed",
    discipline: "Architecture",
    bio: "Temporary profile copy for the architectural design and visualisation lead.",
    image: IMG.person3,
    placeholder: true,
  },
  {
    name: "Er. Prakash Thapa",
    position: "Structural Engineer",
    qualification: "M.E. Structural Engineering",
    focus: "Residential analysis, detailing and construction guidance",
    experience: "To be confirmed",
    discipline: "Structures",
    bio: "Temporary profile copy for the structural analysis and detailing lead.",
    image: IMG.person2,
    placeholder: true,
  },
];

export const leadership = team;

export const teamStats = [
  { value: 3, suffix: "", label: "Sample profiles" },
  { value: 3, suffix: "", label: "Core disciplines" },
  { value: 5, suffix: "", label: "Integrated services" },
  { value: 1, suffix: "", label: "Coordinated workflow" },
];
