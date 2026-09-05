# Unfold Landing Page

Public landing page foundation for Unfold, a local-first Windows desktop app for writing, reflection, connections, and preserved insights.

## Local Development

Requires Node.js 20 or newer.

```bash
npm run dev
```

Then open `http://localhost:4173`.

## Production Build

```bash
npm run build
npm run check
```

The production output is `dist/`.

## Deployment

This is a static site. Deploy the contents of `dist/` to any static host, including Cloudflare Pages, Vercel, Netlify, or GitHub Pages.

Suggested static build settings:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: `20` or newer

## Required Configuration Before Public Launch

Set a real product contact email before deploying publicly. The current footer placeholder is:

```text
SUPPORT_EMAIL_NOT_CONFIGURED
```

Future purchase or download links should be added only after the public release path is approved. The current page intentionally has no checkout, no download, no mailing list backend, no analytics, no cookies, no accounts, and no licensing integration.

If a canonical domain is chosen later, add it to the metadata in `src/index.html` and use it for absolute social preview URLs if needed by the host.

## Screenshots

The `public/images` folder contains:

- `unfold.png`: real Unfold application icon from the desktop project
- attempted current app captures in `public/images/unfold-*.png`
- `screenshot-manifest.json` describing the screenshot attempt

The offscreen app captures produced unreadable text in this environment, so the public page uses clearly marked product-preview placeholders instead of pretending those captures are launch-ready. Replace the preview section with clean screenshots from a release-ready Unfold build before public launch.

Use only fictional or freshly created demo data in public screenshots. Do not use Emilio's real writing or existing local Unfold data.

## Future Legal Pages

Privacy Policy, Terms / EULA, and Refund Policy are intentionally not fabricated here. Add real legal pages when they are approved, then link them from the footer.

## Domain Steps

After local approval:

1. Choose and register a domain.
2. Deploy `dist/` to a static host.
3. Connect the domain to the host.
4. Replace the contact placeholder with a real public email.
5. Use the public product URL for Lemon Squeezy merchant onboarding.
