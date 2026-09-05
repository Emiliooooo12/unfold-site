# Unfold Landing Page Report

## 1. Existing Web Assets Discovered

No existing website project, landing-page folder, or web framework was present in the provided landing-page workspace. The current workspace contained only `work/` and `outputs/`.

The desktop project was found at `C:\Users\Emiliooooo\Desktop\Claude\Notebook\unfold`. Useful assets and source material discovered:

- Real application icon: `src/unfold/gui/resources/unfold.png` and `unfold.ico`
- Product docs: `README.md`, `docs/product.md`, `docs/reflection-mode.md`, `docs/standalone-product-audit.md`, `docs/v1-release-readiness.md`
- Brand/theme colors: `src/unfold/gui/resources/theme.qss` and `dark_theme.qss`
- Release/commercial docs confirming Windows-first status, optional Reflection, local-first behavior, and no public storefront yet

## 2. Stack Selected And Why

The site uses dependency-free static HTML, CSS, and a tiny Node.js build script. This was selected because there was no existing web stack to extend, the milestone is a single static landing page, and the site does not need a database, backend, accounts, checkout, analytics, or a CMS.

The output is plain static files in `dist/`, suitable for Cloudflare Pages, Vercel, Netlify, or GitHub Pages.

## 3. Project Location

`C:\Users\Emiliooooo\Documents\Codex\2026-09-04\unfold-public-landing-page-foundation-project\outputs\unfold-site`

## 4. Sections Implemented

- Navigation
- Hero
- Core product value
- How it works
- Reflection
- Connections / Discovery
- Privacy / local-first
- Preserved Insights / Therapy Prep boundary
- Product preview
- Coming Soon status
- FAQ
- Footer with contact and legal placeholders

## 5. Final Public Positioning

Primary public positioning:

> Unfold is a private place to think things through.

The page presents Unfold as a local-first Windows desktop app for writing, reflection, connections, and preserved insights. Reflection is framed as optional support, not the product identity.

## 6. Screenshot Sources

Actual app screenshot capture was attempted using the real PySide6 Unfold application, a scratch database, and fictional demo content. The generated image files are in `public/images/unfold-*.png` with a `screenshot-manifest.json`.

Those captures are not used as launch screenshots because the offscreen render produced unreadable boxed text in this environment. The page therefore uses clearly marked product-preview placeholders and explicitly states that final public screenshots should be captured from a release-ready build before launch.

No real private user content was used.

## 7. Privacy Wording

The page says:

- "Unfold stores your writing locally on your Windows PC."
- "Writing, search, connections, saved Insights, export, backup, and restore remain useful without online services."
- "Private Reflection is designed to keep reflection processing on your computer."
- "Online Reflection is optional."

It does not claim that data can never leave the computer, because Online Reflection exists as an optional mode.

## 8. Reflection Wording

Reflection is described as offering observations, distinctions, possible tensions, and alternate frames. The page says:

> Unfold offers possibilities. You decide what fits.

It avoids diagnostic and authority language.

## 9. Therapy Prep Wording

Therapy Prep is presented as a secondary use:

> If a thought is worth bringing into therapy, Unfold can help turn your own reflection into something easier to bring into that conversation.

The page clearly states:

> Unfold is not therapy, medical advice, diagnosis, or crisis support.

## 10. FAQ

The FAQ answers:

- What is Unfold?
- Do I need Reflection to use it?
- Do my thoughts have to be sent online?
- Is Unfold a therapy app?
- What platform will it support?
- Is Unfold free?

Pricing is not invented.

## 11. Responsive Verification

The layout was built with responsive grids and mobile navigation. It was verified by static checks and local browser inspection at desktop and mobile widths. The design avoids horizontal scrolling through constrained widths, wrapping controls, and single-column mobile layouts.

Saved QA captures:

- `docs/qa/desktop.png`
- `docs/qa/mobile.png`

Desktop checks confirmed no broken images and no horizontal overflow. Mobile checks confirmed the navigation button opens the menu, updates `aria-expanded`, keeps links reachable, and avoids horizontal overflow.

## 12. Accessibility Checks

Implemented:

- Semantic HTML landmarks and sections
- Single H1 and ordered heading structure
- Skip link
- Visible keyboard focus states
- Keyboard-accessible mobile navigation button
- Proper button labels and ARIA state
- Alt text strategy for decorative icon use
- Adequate contrast against the selected palette
- Reduced-motion consideration

## 13. SEO Metadata

Implemented:

- Page title
- Meta description
- OpenGraph title and description
- Twitter card title and description
- Viewport metadata
- Favicon using the real Unfold icon

No awards, rankings, testimonials, release dates, or fake social proof are claimed.

## 14. Production Build Result

Production build command:

```bash
npm run build
```

Static verification command:

```bash
npm run check
```

Both passed locally.

## 15. Files Created

- `package.json`
- `src/index.html`
- `src/styles.css`
- `src/main.js`
- `scripts/build.mjs`
- `scripts/check.mjs`
- `scripts/dev-server.mjs`
- `README.md`
- `docs/landing-page-report.md`

## 16. Files Modified

No existing desktop application files were modified.

Copied assets from the desktop project:

- `public/images/unfold.png`
- `public/favicon.ico`

Generated attempted screenshot artifacts:

- `public/images/unfold-thoughts.png`
- `public/images/unfold-search.png`
- `public/images/unfold-reflection.png`
- `public/images/screenshot-manifest.json`
- `docs/qa/desktop.png`
- `docs/qa/mobile.png`

## 17. Known Placeholders

- `SUPPORT_EMAIL_NOT_CONFIGURED`
- Legal pages are not published yet
- Final release screenshots still need to replace the preview placeholders
- Purchase/download URLs are intentionally absent
- Pricing is intentionally absent

## 18. Exact Information Emilio Still Needs To Supply

- Public support/contact email
- Final public domain
- Approved legal documents: Privacy Policy, Terms / EULA, Refund Policy
- Approved pricing and purchase URL when ready
- Approved public download URL when ready
- Final release-ready screenshots with fictional/demo content

## 19. Exact Deployment Steps

1. Replace `SUPPORT_EMAIL_NOT_CONFIGURED` in `src/index.html`.
2. Replace the preview placeholders with clean release screenshots if deploying publicly.
3. Run `npm run build`.
4. Run `npm run check`.
5. Deploy the `dist/` directory to a static host.
6. Choose/register a domain.
7. Connect the domain to the host.
8. Use the live URL for Lemon Squeezy merchant onboarding.

## 20. Recommended Domain Requirements

- Simple, product-specific domain
- HTTPS support
- Easy static hosting integration
- No requirement for accounts, backend functions, cookies, or tracking
- Ability to add future legal routes and purchase/download links cleanly

## Explicit Answers

**A. Is the page ready to deploy publicly?**

Not quite. The structure, copy, build, and responsive foundation are ready, but Emilio should add a real contact email and replace the screenshot placeholders before using it as a polished public launch page.

**B. Does it accurately represent the current Unfold application?**

Yes, based on the discovered docs and source: Windows-first, local-first, optional Reflection, user-confirmed connections, saved Insights, backup/export/restore, and therapy prep boundaries are represented conservatively.

**C. Does it avoid exposing internal technical terminology?**

Yes. Public copy was checked for internal terms and generic hype phrases.

**D. Does it avoid fake functionality and fake claims?**

Yes. There is no checkout, fake download, pricing, customer account, fake social proof, fabricated contact email, or fabricated legal text.

**E. Can this page reasonably serve as the business/product URL supplied during Lemon Squeezy onboarding?**

Yes after adding a real contact email. For reviewer confidence, replacing the preview placeholders with readable current screenshots is strongly recommended.

**F. Can it later evolve into the actual Unfold sales site?**

Yes. The page is intentionally structured around stable product sections and can later accept pricing, purchase/download links, legal routes, and final screenshots without changing architecture.
