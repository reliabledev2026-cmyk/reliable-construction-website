# Client documentation

## Website Content Requirements (PDF)

`Website-Content-Requirements.pdf` — an 18-page A4 pack that asks the client for
every piece of real information needed to replace the placeholder content
currently on the site.

It is organised in the same order as the site itself, and each section shows the
existing placeholder in a marked box so the client can confirm or correct it
rather than write from scratch. Sections are tagged **Essential** (blocks
launch), **Important** or **Optional**, and the final page is a return checklist
and sign-off.

### Editing and regenerating

`requirements-source.html` is the source. Edit it, then:

```bash
npm i -D playwright
npx playwright install chromium
node docs/render-pdf.js
```

The script downloads the three site fonts once, caches them in
`.fonts-cache.json`, and embeds them as base64 so the PDF is self-contained and
renders identically anywhere. If it cannot reach the network it falls back to
linking the hosted stylesheet.

The `__FONTS__` token in the HTML is where the font CSS is injected — leave it in
place. Opening the HTML directly in a browser falls back to system fonts, which
is expected.

### Design notes

The document deliberately reuses the website's design language: Archivo for
display, Manrope for body, IBM Plex Mono for the labels, the same ink/paper/
accent palette, and the same `§ 00` running section index. Backgrounds are kept
pale so it prints cheaply, with the dark treatment reserved for the cover.

Page breaks are mostly automatic. Only the contents page and the sign-off page
are forced onto a fresh sheet — if you add long sections, re-run the render and
check that no page ends up more than about a third empty.
