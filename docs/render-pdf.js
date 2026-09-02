/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * Renders docs/requirements-source.html to docs/Website-Content-Requirements.pdf.
 *
 *   npm i -D playwright && npx playwright install chromium
 *   node docs/render-pdf.js
 *
 * The three site fonts are downloaded once, cached in docs/.fonts-cache.json and
 * embedded into the PDF as base64, so the finished file needs no network access
 * and renders identically on any machine.
 */
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const DOCS = __dirname;
const SRC = path.join(DOCS, "requirements-source.html");
const OUT = path.join(DOCS, "Website-Content-Requirements.pdf");
const CACHE = path.join(DOCS, ".fonts-cache.json");

const GF =
  "https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700" +
  "&family=Manrope:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap";
const UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";

/** Fetch the latin woff2 face for every family/weight and base64 them. */
async function loadFaces() {
  if (fs.existsSync(CACHE)) return JSON.parse(fs.readFileSync(CACHE, "utf8"));

  const css = await (await fetch(GF, { headers: { "User-Agent": UA } })).text();
  const faces = [];
  const blocks = css.matchAll(/\/\*\s*([\w-]+)\s*\*\/\s*@font-face\s*\{(.*?)\}/gs);
  for (const [, subset, body] of blocks) {
    if (subset !== "latin") continue; // the site is English-only
    faces.push({
      family: body.match(/font-family:\s*'([^']+)'/)[1],
      weight: body.match(/font-weight:\s*(\d+)/)[1],
      url: body.match(/url\((https:\/\/[^)]+\.woff2)\)/)[1],
    });
  }
  for (const f of faces) {
    const buf = Buffer.from(
      await (await fetch(f.url, { headers: { "User-Agent": UA } })).arrayBuffer(),
    );
    f.b64 = buf.toString("base64");
    delete f.url;
  }
  fs.writeFileSync(CACHE, JSON.stringify(faces));
  return faces;
}

(async () => {
  let fontCss = "";
  try {
    const faces = await loadFaces();
    fontCss = faces
      .map(
        (f) =>
          `@font-face{font-family:'${f.family}';font-style:normal;font-weight:${f.weight};` +
          `font-display:block;src:url(data:font/woff2;base64,${f.b64}) format('woff2');}`,
      )
      .join("\n");
  } catch (err) {
    // Offline: fall back to the hosted stylesheet so the render still succeeds.
    console.warn("Could not embed fonts (" + err.message + ") — linking instead.");
    fontCss = `@import url('${GF}');`;
  }

  // replaceAll, so a stray mention of the token elsewhere cannot swallow the fonts.
  const html = fs.readFileSync(SRC, "utf8").replaceAll("__FONTS__", fontCss);
  const tmp = path.join(DOCS, ".render.tmp.html");
  fs.writeFileSync(tmp, html);

  // CHROMIUM_PATH lets you point at an existing Chromium instead of Playwright's.
  const browser = await chromium.launch(
    process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {},
  );
  const page = await browser.newPage();
  await page.goto("file://" + tmp, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(800);

  await page.pdf({
    path: OUT,
    format: "A4",
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: "<div></div>",
    footerTemplate: `
      <div style="width:100%;font-family:monospace;font-size:6.2pt;letter-spacing:.14em;
                  color:#8b949a;padding:0 15mm;display:flex;justify-content:space-between;">
        <span>RELIABLE CONSULTING &amp; CONSTRUCTION &nbsp;·&nbsp; WEBSITE CONTENT REQUIREMENTS</span>
        <span class="pageNumber"></span>
      </div>`,
    margin: { top: "14mm", right: "15mm", bottom: "16mm", left: "15mm" },
  });

  await browser.close();
  fs.unlinkSync(tmp);
  console.log(`Written ${OUT} (${Math.round(fs.statSync(OUT).size / 1024)} KB)`);
})();
