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
  minimalHome: u("1635006459494-c9b9665a666e", 2000), // glass-fronted modern home
  compactHome: u("1709147617968-709368900af1", 1800), // compact urban residence
  classicalHome: u("1658831467839-b64a031c3882", 1800), // classical facade reference
  valleyDawn: u("1580424917967-a8867a6e676e", 2000), // Kathmandu valley, Himalaya beyond
  gorge: u("1693405462739-e98072715b29", 2000), // terraced river gorge
  viaductDusk: u("1670912461796-81819c1e525b", 2400), // viaduct piers at dusk
  terraces: u("1637433452527-39b0103e6103", 2000), // hill terraces
  heritageCity: u("1647172122108-202c8497fdbd", 2000), // Kathmandu durbar square

  /* --- Studio / people at work --- */
  studioTable: u("1616587656879-8a8a7cce9d6c", 1800),
  reviewingDrawings: u("1619531703242-7a0eaf09839c", 1600),
  officeDiscussion: u("1568359415314-7ddb3bd0c828", 1600),
  blueprint: u("1599420187429-774dbfc6ba5d", 1600), // residential floor-plan study
  drawingSet: u("1581092335331-5e00ac65e934", 1600),
  surveyorCity: u("1628158145409-9e222b56cc0b", 1800),
  surveyorField: u("1607134541550-2994abb8077b", 1600),
  levelInstrument: u("1545186070-de624ed19875", 1600),

  /* --- Infrastructure --- */
  damSpillway: u("1673199981530-df45b3289d0d", 2000),
  damMountains: u("1611036884458-6650ef4ccfdb", 2000),
  damAerial: u("1686276920108-b779380d3d6e", 2000),
  weir: u("1509390874189-d75fd22f19f7", 1800),
  bridgeBuild: u("1559843788-693858bf7338", 2000),
  bridgeCables: u("1529926691761-20fb82067c71", 1800),
  bridgeDeck: u("1569925457326-59b1c3611227", 1800),
  bridgeTowers: u("1633363961301-4f100a78e92d", 1800),
  trussMono: u("1615117156039-6a27220d7382", 1800),
  cableMono: u("1565677375514-80207e0d04f1", 1800),
  steelFabrication: u("1603287696448-61d5b81cb720", 1800),
  steelFrame: u("1562957982-b1f25317aebd", 1600),
  craneScaffold: u("1527335988388-b40ee248d80c", 1800),
  towerConstruction: u("1602757115429-b4190ae087be", 1800),
  concreteBuilding: u("1633777396638-dc40348489ce", 2000), // contemporary residence
  concreteStair: u("1586871608370-4adee64d1794", 1600),
  tunnelExcavation: u("1586161148512-64a1b3dac527", 1800),
  tunnelLit: u("1614699160211-ab5ac10f9763", 1800),
  tunnelPortal: u("1590591061202-1ca124c61a53", 1800),
  tunnelStructure: u("1614699267194-cde409d2ebe8", 1800),
  canal: u("1621848841350-ca136382eee6", 1800),
  canalDusk: u("1565321643328-3f919879cd3b", 1800),
  canalWide: u("1592890035838-be5f32765b2b", 1800),
  canalGreen: u("1567407738557-1f354e189a68", 1800),
  mountainRoad: u("1734699762001-ea94ad09800c", 2000),

  /* --- Team portraits (square crops) --- */
  person1: u("1564490215983-296e5f56b623", 900),
  person2: u("1729157661483-ed21901ed892", 900),
  person3: u("1607746882042-944635dfe10e", 900),
  person4: u("1649433658557-54cf58577c68", 900),
  person5: u("1600878459138-e1123b37cb30", 900),
  person6: u("1758518729459-235dcaadc611", 900),
  person7: u("1637589267610-6c66fc2a086b", 900),
  person8: u("1646032540224-4ab44f77e6f2", 900),
} as const;

export type ImageKey = keyof typeof IMG;
