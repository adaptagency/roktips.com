## RÖKTIPS landing site

Static marketing site for **RÖKTIPS** with a bilingual (Vietnamese default + English) toggle, video modals, and a lead-capture contact modal that can post to Google Sheets.

### Run locally

- **Option A (recommended)**: run a simple local web server from the repo root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

- **Option B**: open `index.html` directly (some embeds may behave differently under `file://`).

### Structure

- **`index.html`**: main landing page, sticky header (offer banner + buy bar), modals, footer links.
- **`css/styles.css`**: site styling and responsive layout.
- **`js/script.js`**: language toggle/i18n, modal behaviour, reveal animations, lead form submission.
- **`privacy.html` / `terms.html`**: bilingual legal pages matching the site styling.
- **`google-apps-script.gs`**: example Google Apps Script handler for saving leads to a Google Sheet.
- **`img/`**: site images/assets.

### Bilingual toggle (i18n)

- Vietnamese is the default language; English is optional via the toggle.
- Translatable content is marked in HTML via `data-i18n*` attributes and updated by `js/script.js`.
- Language preference is persisted via `localStorage`.

### Sticky header (Safari-safe)

The offer banner and buy bar form a **sticky header stack**:

- Both are `position: sticky` (not `fixed`) for cross-browser reliability, including iOS Safari.
- The buy bar offsets below the banner using a CSS variable `--banner-h`, updated by JS based on the banner’s rendered height (handles wrapping).

### Lead capture + Google Sheets

The contact modal can post lead details to a Google Apps Script endpoint.

- Submissions include a `message` field:
  - `B2B` when opened via the “B2B Buyer?” footer link
  - `B2C` otherwise
- The phone input defaults to `+84`. If a user doesn’t enter any additional digits, the phone is treated as empty and is not sent.

To use this in production, deploy your own Apps Script and set the endpoint URL in `js/script.js`.

### Deployment

This is a static site and can be deployed via GitHub Pages or any static host.

