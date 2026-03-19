## Design notes (RÖKTIPS landing)

### Brand & tone
- **Brand**: Display as **RÖKTIPS** (all caps, Ö). Keep URLs/emails lowercase (e.g. `roktips.com`, `anthony@roktips.com`).
- **Audience**: Guitarists + other string players.
- **Style**: Dark, high-contrast “rock” aesthetic. Keep typography consistent (Bebas Neue for headings, Inter for body).

### Global UI patterns
- **Buttons**: Use the existing outline style (`btn btn--secondary`) for CTAs across the site.
- **Sticky buy bar**: Single CTA **Buy Now** linking to `#cta`. No logo/text in the bar. Opaque background to prevent bleed-through.
- **Offer banner + buy bar (header stack)**:
  - Both are **`position: sticky`** (not `fixed`) for best cross-browser reliability, including iOS Safari.
  - The buy bar sits directly under the banner using a CSS variable `--banner-h` set by JS based on the banner’s rendered height (so it still works when the banner wraps to 2 lines).

### Bilingual (Vietnamese default)
- **Languages**: Vietnamese (default) and English.
- **Toggle**: Top-right pill switch with flags, green thumb. Persists choice via `localStorage`.
- **Implementation**: i18n keys in markup (`data-i18n`, `data-i18n-html`, `data-i18n-placeholder`, `data-i18n-aria`, `data-i18n-title`, `data-i18n-content`) updated by JS.
- **Modals**: Language toggle updates text live even when modals are open.

### Video
- **YouTube modal**: Opens from “Watch Video” button; responsive sizing fits viewport and stops playback on close.
- **Local MP4 modal**: Opens from “How it works” section button; responsive sizing fits viewport; resets on close.

### Responsive notes
- **Mobile hero image**: Reduced on small screens to keep the hero compact and readable.
- **Offer banner text**: Centred on mobile.

### Lead capture (contact modal)
- **Goal**: Capture details for future marketing; purchases happen on Shopify/TikTok.
- **Phone UX**: Single input defaulting to `+84 `; entering an actual number requires selecting WhatsApp/Zalo.
- **Validation**: Name+email is acceptable without phone; default country code alone does not count as a phone number.

### B2B
- **Entry point**: Footer link “B2B Buyer?” opens the contact modal in B2B mode.
- **Sheet tagging**: Submissions include `message=B2B` when opened via B2B link; otherwise `message=B2C`.

### Legal
- **Pages**: `privacy.html` and `terms.html`, bilingual with the same language toggle and site styling.
- **Links**: Legal links included in footer and referenced from the contact modal privacy line.

