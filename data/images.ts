/**
 * -----------------------------------------------------------------------------
 * IMAGE REGISTRY
 * -----------------------------------------------------------------------------
 * Every photograph on the site is referenced through this file, so swapping the
 * placeholder photography for real project photography is a single-file job.
 *
 * TO USE YOUR OWN IMAGES:
 *   1. Drop files into /public/images/... (projects, team, services)
 *   2. Replace the `u("...")` call with the local path, e.g. IMG.heroMain =
 *      "/images/hero/main.jpg"
 *   3. Nothing else in the codebase needs to change.
 *
 * When a CMS is connected, this object is what the CMS response replaces.
 */

/** Builds an optimised Unsplash URL from a photo id. */
export const u = (id: string, w = 1800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  /* --- Hero / brand imagery --- */
  heroMain: u("1748063578185-3d68121b11ff", 2400), // illuminated modern home exterior
  modernHome: u("1633777396638-dc40348489ce", 2200), // contemporary multi-level residence
  compactHome: u("1709147617968-709368900af1", 1800), // compact urban residence
  classicalHome: u("1658831467839-b64a031c3882", 1800), // classical facade reference

  /* --- Studio / people at work --- */
  studioTable: u("1616587656879-8a8a7cce9d6c", 1800),
  reviewingDrawings: u("1619531703242-7a0eaf09839c", 1600),
  blueprint: u("1599420187429-774dbfc6ba5d", 1600), // residential floor-plan study
  drawingSet: u("1581092335331-5e00ac65e934", 1600),

  /* --- Construction / engineering --- */
  steelFrame: u("1562957982-b1f25317aebd", 1600),
  craneScaffold: u("1527335988388-b40ee248d80c", 1800),
  concreteBuilding: u("1633777396638-dc40348489ce", 2000), // contemporary residence

  /* --- Team portraits (square crops) --- */
  person1: u("1564490215983-296e5f56b623", 900),
  person2: u("1729157661483-ed21901ed892", 900),
  person3: u("1607746882042-944635dfe10e", 900),
} as const;
