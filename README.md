# Portfolio — Blueprint

A single-page developer portfolio styled as an architectural blueprint. Black and white, monospace labels, grid paper backgrounds, and crosshair markers. No gradients, no grays, no rounded corners.

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:3000
```

## How to Customize

Everything lives in one file: **`src/app/page.tsx`**. No config files, no CMS.

### Your Name & Role

Near the top of the file, update the hero section:

```
h1 → "Odionye\nJovita."     → your name
Nav logo → "◇ OJ / ..."      → your initials + role
Typewriter words → [...]    → roles you cycle through
LAT ... LON ...             → coordinates / location string
```

### Hero Bio & Specs

```tsx
<p> ... your one-paragraph bio ... </p>
<div>STATUS → ● AVAILABLE</div>
<div>EXP    → 03+ YR</div>
<div>SHIP   → WORLDWIDE</div>
```

### About Section (`#about`)

Replace the paragraph and the FOCUS/METHOD/OUTPUT labels.

### Tech Stack (`#stack`)

Edit the `stack` array near the top of `page.tsx`:

```ts
{ name: "Node.js", note: "primary" },
{ name: "Docker",  note: "runtime" },
// add / remove / reorder
```

### Projects (`#projects`)

Edit the `projects` array. Each entry:

```ts
{
  id: "P-01",
  title: "Project Name",
  desc: "Short description (1-2 sentences).",
  tech: "Node.js · Express · MongoDB",
  metrics: ["Metric A", "Metric B", "Live"],
  href: "https://...",
}
```

### Contact (`#contact`)

Update email, GitHub, LinkedIn, and X links. The contact form uses `mailto:` — just change the email address in the `handleSubmit` function.

### Page Metadata

Update **`src/app/layout.tsx`** for `<title>`, `<meta>` description, and Open Graph tags. Update the favicon path if needed.

### Theme

Respects the user's OS-level preference on first visit. A toggle button (◐/◑) in the nav lets them override. Classes are `:root` (light) and `.dark` (dark).

Update color tokens in **`src/app/globals.css`**:
- `:root` block — light mode (background, foreground, border, input, grid-color)
- `.dark` block — dark mode (same variables, inverted)

The blueprint grid uses `--grid-color`. Fonts load from `rsms.me/inter` (variable) and system monospace.

## Project Structure

```
src/
├── app/
│   ├── globals.css     ← theme tokens, grid utilities, cursor, animations
│   ├── layout.tsx      ← metadata, ThemeProvider
│   └── page.tsx        ← everything else (data, nav, sections, form)
├── components/
│   └── Typewriter.tsx  ← typing/deleting animation
└── hooks/
    └── use-reveal.ts   ← scroll-triggered reveal on elements with class "reveal"
```

## Build & Deploy

```bash
npm run build    # production build
npm run start    # serve production build
```

Deploys to anywhere that hosts Next.js — [Vercel](https://vercel.com), [Netlify](https://netlify.com), or your own server.

## Design

Inspired by architectural blueprints and terminal aesthetics. Every element is intentional:

- **Zero border radius** — sharp corners everywhere
- **Crosshair markers** — on every bordered container
- **Dotted measurement lines** — separating sections and metadata
- **Blueprint grid** — 48px and 12px grid paper backgrounds
- **Monospace labels** — JetBrains Mono at 10px, uppercase, wide tracking
- **No color** — only background/foreground swap, no tints or accents
- **Coordinate readout** — live x/y mouse position in the nav
