# tusharmoraye.com

Single page portfolio for Tushar Moraye, AI Product Engineer.

## Stack

- Astro 7 (static output, zero framework runtime)
- Tailwind CSS v4 via `@tailwindcss/vite`
- GSAP ScrollTrigger for the pinned sections, plain IntersectionObserver for everything else
- three.js for the hero pointer trail, lazily imported after idle and only on a
  fine pointer with motion allowed, so touch and reduced motion users never fetch it
- `astro-icon` with Phosphor icons, `simple-icons` for brand marks
- `@astrojs/sitemap`, JSON-LD Person and ProfessionalService schema, Open Graph card at `public/og.png`

## Commands

```bash
npm install
npm run dev       # local dev server
npm run build     # static build into dist/
npm run preview   # serve the built site
```

## Before launch

1. Set `contactEndpoint` in `src/data/site.ts` to a real form endpoint (Formspree, Basin, a Cloudflare Worker).
   While it is empty the contact form hands the message to the visitor's mail client instead.
2. Point the domain at the `dist/` output. `site` in `astro.config.mjs` is already `https://tusharmoraye.com`.

## Theme

Dark is the locked default. The header toggle switches to light and stores the choice in `localStorage`.
All colour lives in CSS custom properties in `src/styles/global.css`; there is one accent token for the whole page.

## Images

See `CREDITS.md`. All photography is self hosted in `public/img` as WebP with a JPEG fallback.
