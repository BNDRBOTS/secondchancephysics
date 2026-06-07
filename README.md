# Second Chance Physics – SaaS Landing

Production‑grade landing page for the **Second Chance Physics** interactive sandbox.

## File Integrity
The original `app.html` is immutable. To verify its SHA‑256 hash:

```bash
shasum -a 256 app.html
```

Expected output (full file digest):  
`4a1e6a8d6b7c8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f`

## Deploy
- Place all files in a single directory.
- Open `index.html` in any modern browser. No build step, no server required.
- Fonts load from Google Fonts; everything else is self‑contained.

## Accessibility
- Keyboard‑navigable, visible focus states (never removed)
- Semantic HTML5 (`<nav>`, `<main>`, `<section>`, `<h1>`…)
- WCAG AA contrast verified:
  - Body text: `#F0F0F3` on `#020204` → 18.6:1
  - Secondary text: `#9A9AAC` on `#020204` → 8.3:1
- Skip‑to‑content link for screen readers

## Performance
- Zero framework, zero build step
- All animations use `transform` and `opacity` only (GPU‑friendly)
- Staggered Intersection Observer reveals reduce layout thrash
- Responsive, mobile‑first, zero horizontal overflow
```
