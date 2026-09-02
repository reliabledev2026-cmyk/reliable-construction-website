/**
 * -----------------------------------------------------------------------------
 * IMAGE REGISTRY
 * -----------------------------------------------------------------------------
 * Every photograph on the site is referenced through this file, so replacing a
 * placeholder with verified company photography remains a single-file change.
 *
 * TO USE YOUR OWN IMAGES:
 *   1. Drop files into /public/images/... (projects, team, services)
 *   2. Replace the relevant local path below.
 *   3. Nothing else in the codebase needs to change.
 *
 * When a CMS is connected, this object is what the CMS response replaces.
 */

export const IMG = {
  /* --- Hero / brand imagery --- */
  heroMain: "/images/hero/hero-home.webp",
  modernHome: "/images/projects/modern-home.webp",
  compactHome: "/images/projects/compact-home.webp",
  classicalHome: "/images/projects/classical-home.webp",

  /* --- Studio / people at work --- */
  studioTable: "/images/services/studio-table.webp",
  reviewingDrawings: "/images/services/reviewing-drawings.webp",
  blueprint: "/images/services/blueprint.webp",
  drawingSet: "/images/services/drawing-set.webp",

  /* --- Construction / engineering --- */
  steelFrame: "/images/services/steel-frame.webp",
  craneScaffold: "/images/services/crane-scaffold.webp",
  concreteBuilding: "/images/projects/modern-home.webp",

  /* --- Team portraits (square crops) --- */
  person1: "/images/team/person-1.webp",
  person2: "/images/team/person-2.webp",
  person3: "/images/team/person-3.webp",
} as const;
