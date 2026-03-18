## Plan / roadmap (current state)

### Implemented
- **Bilingual site (VN default + EN)** with persistent toggle and full-page string swapping (including open modals).
- **Responsive video modals**:
  - YouTube modal opens from a button.
  - Local MP4 modal accessible from “How it works”.
- **Contact modal UX improvements**:
  - First name + email on same row (desktop).
  - Phone input defaults to `+84 `; phone requires WhatsApp/Zalo selection only if a real number is provided.
  - Contact modal includes links to Privacy Policy / Terms of Use.
- **B2B flow**:
  - Footer “B2B Buyer?” opens contact modal and tags submissions with `message=B2B` (otherwise `message=B2C`).
- **Legal pages**: `privacy.html` and `terms.html` added and bilingual.
- **Footer refresh**: Narrow footer with copyright, legal links, and back-to-top icon.
- **Sticky buy bar**: Single “Buy Now” button linking to `#cta`.

### Ops / data capture
- **Google Sheet**: Add a **Message** column after **Channel**.
- **Apps Script**: Update to accept and write `message` (B2B/B2C) alongside existing fields.

### Next candidates
- **FAQ rewrite**: Content and bilingual mapping once final copy is ready.
- **Footer refinements**: If footer links/copy changes again, update i18n keys accordingly.
- **Buy links**: Replace placeholders with real Shopify/TikTok URLs when ready.
- **Analytics** (optional): Track language toggle, modal opens, and lead submits (privacy compliant).

