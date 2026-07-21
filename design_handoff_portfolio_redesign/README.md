# Handoff: justinbell.me Portfolio Redesign — "Dark Studio"

## Overview
A visual redesign of the existing one-page portfolio at justinbell.me. The information
architecture and section order are **unchanged**. This is a **reskin**: a new color
system, type system, and per-section styling applied on top of the current component
structure. Default theme is a dark "studio" look with a one-click toggle to a clean
light look.

## About the Design Files
The file in this bundle — `Justin Bell Portfolio.dc.html` — is a **design reference
created in HTML**. It is a prototype demonstrating the intended look, layout, type,
color, and the light/dark behavior. It is **not** production code to copy verbatim.

Your task is to **recreate this look inside the existing Next.js 14 / React 18 /
TypeScript / Tailwind repo**, reskinning the existing per-section components in place
using the repo's established patterns (Tailwind classes, `next/font`, `framer-motion`).

## Fidelity
**High-fidelity.** Colors, typography, spacing, and layout in the reference are final.
Match them precisely, adapted to Tailwind utilities + the token layer described below.

## ⚠️ Critical constraints (read first)
1. **Do NOT port text content from the reference file or the live site.** The reference
   was built from the live site and its Resume content is **stale**. The current local
   component files (especially `components/Resume.tsx`, updated today) are the **source
   of truth for all copy, bullets, dates, and ordering**. Reskin existing markup; keep
   its text.
2. **Repo is React 18 / Next 14 App Router** — no React 19 / Next 15 APIs.
3. **Dark mode currently uses the media strategy and cannot toggle.** You MUST:
   - Add `darkMode: 'class'` to `tailwind.config.js`.
   - Install and wire **`next-themes`** with `defaultTheme="dark"` and
     `attribute="class"`. Wrap the app in `<ThemeProvider>` in the root layout
     (`suppressHydrationWarning` on `<html>`), and drive the Navbar toggle from
     `useTheme()`.
   - The existing vestigial `.dark` variables in `globals.css` should be replaced by the
     token set below.
4. Commit today's `Resume.tsx` / résumé PDF changes to `main` **before** starting, so the
   redesign lands as its own clean branch on top of correct content.

## Design System

### Theme tokens (CSS variables → Tailwind)
Define these in `app/globals.css` (extending the existing `--background`/`--foreground`
pattern), then expose them through `tailwind.config.js` under `theme.extend.colors` so
they're usable as utilities (`bg-panel`, `text-muted`, `border-line`, `bg-accent`, etc.).

Use HSL or hex — hex shown here. `:root` = dark (default). `.light` (or your chosen
non-dark class) overrides.

```
/* DARK (default, :root) */
--bg:              #0e0f11   /* page background */
--panel:           #16181b   /* cards, inputs */
--panel-2:         #1b1e22   /* alternating section bands (Experience, Skills) */
--text:            #e8e9ea   /* primary text */
--muted:           #8a8f96   /* secondary text, nav links */
--border:          #24272b   /* all hairline borders */
--accent:          #4de3d1   /* teal accent */
--accent-ink:      #0e0f11   /* text/icon on accent fills */
--card-tint:       #12211f   /* project tech-chip background */
--card-tint-border:#2b3a38   /* project tech-chip border */
--hero-grid:       #17191c   /* hero background grid lines */
--nav-bg:          rgba(14,15,17,.82)   /* sticky nav (with backdrop-blur) */

/* LIGHT (.light override) */
--bg:              #fbfbfa
--panel:           #ffffff
--panel-2:         #f4f4f2
--text:            #1a1a19
--muted:           #6b6b68
--border:          #e6e6e3
--accent:          #0d9488   /* deeper teal that passes contrast on light */
--accent-ink:      #ffffff
--card-tint:       #effbf9
--card-tint-border:#c7ece7
--hero-grid:       #ececea
--nav-bg:          rgba(251,251,250,.85)
```

Note the accent intentionally **shifts per theme** (`#4de3d1` dark → `#0d9488` light) so
it reads correctly on each background. Same hue family, cohesive. Because it's a
variable, no per-component conditionals are needed.

### Typography (via `next/font`)
Three families. Replace the current Inter `fontFamily.sans` default.

| Role | Family | Load via | Tailwind |
|------|--------|----------|----------|
| Display / headings | **Space Grotesk** | `next/font/google` | `font-display` |
| Body / UI | **Geist** | `geist` package or `next/font/google` | `font-sans` (default) |
| Labels / mono | **JetBrains Mono** | `next/font/google` | `font-mono` |

Type scale (exact, from the reference):
- Hero H1: `font-display`, **80px**, line-height 1, letter-spacing -0.03em, weight 600.
  Responsive: step down to ~44–52px on mobile.
- Section H2: `font-display`, **40px**, letter-spacing -0.02em, weight 600.
- Contact H2: `font-display`, **46px**, letter-spacing -0.025em, weight 600.
- Section eyebrow: `font-mono`, **12px**, color `--accent`, letter-spacing 0.08em,
  uppercase, formatted `01 — ABOUT`, `02 — EXPERIENCE`, etc.
- Card/role titles: `font-display`, 16–22px, weight 600.
- Body copy: `font-sans`, 14–19px, line-height 1.6–1.72, color `--muted`.
- Chips / metadata / dates: `font-mono`, 11.5–14px.

### Shape & spacing
- Border radius: cards/panels **12–16px**, buttons/inputs **9px**, chips **8px**
  (tech-chips on projects are pill: **16px**).
- Section vertical padding: **96px** top/bottom (`py-24`), horizontal `40px` gutters.
- Content max width: **1160px**, centered.
- Alternating section bands: About & Projects & Contact sit on `--bg`; Experience &
  Skills sit on `--panel-2`. Every section separated by a 1px `--border` top rule.
- Buttons: solid = `bg-accent text-accent-ink`; secondary = `border border-line`.
- Transitions: background/color 0.3s on the theme switch; nav links color 0.18s hover.

## Screens / Sections
One page, scroll anchors `#home #about #resume #projects #skills #contact`. Reskin each
existing component; keep its content.

### Navbar (`components/Navbar.tsx`)
Sticky, `--nav-bg` + `backdrop-blur(12px)`, 1px bottom border. Left: teal dot (8px,
glowing `box-shadow:0 0 12px accent`) + "Justin Bell" in `font-display` 600. Right:
mono nav links (`about experience projects skills contact`, color `--muted`, hover
`--text`) + **theme toggle pill** (border, radius 20px, ~78px min-width; label
`☀ Light` when dark / `☾ Dark` when light — or swap to a sun/moon icon from the
available icon libs).

### Hero (`components/Hero.tsx`)
`#home`. Background = subtle grid: two `linear-gradient` lines in `--hero-grid`, 54px
cells. Eyebrow `// senior software engineer` (mono, accent). H1 at 80px (spec above),
max-width ~16ch. Sub-paragraph `--muted`, max-width ~56ch. Three buttons: primary "View
my work →" (accent), "Contact me" (border), "Download résumé" (border, muted) linking to
the résumé PDF.

### About (`components/About.tsx`)
`#about` on `--bg`. Eyebrow `01 — ABOUT`, H2 "About me". Two-column grid (1.4fr / 1fr):
left = existing bio paragraphs (`--muted` with key names in `--text`); right = 2×2 (or
stacked) grid of four numbered value cards (`--panel`, border, radius 12px, mono index in
accent, `font-display` title, muted description). Below, an "interests & passions" row of
bordered text chips. **No emoji** (the live site used emoji — drop them; use text chips).

### Experience (`components/Resume.tsx`) — content is source of truth, do not rewrite
`#resume` on `--panel-2`. Eyebrow `02 — EXPERIENCE`, H2. Stack of role cards (`--panel`,
border, radius 14px, 32px padding): title (`font-display`) + right-aligned mono date in
accent on one row; company · location line in `--muted`; bullet list. For the long
Washington Post role, bullets use a **two-column** layout (`columns:2`, gap 40px) on
desktop, single column on mobile. Below: two education cards side by side. Pull ALL text
from the current file.

### Projects (`components/Projects.tsx`)
`#projects` on `--bg`. Eyebrow `03 — PROJECTS`, H2. Two-column card grid. Each card:
screenshot (`/public/*_screenshot.png`, ~260px tall, cover, top-aligned, 1px bottom
border) → padding 30px → `font-display` title → muted description → mono tech chips
(`--card-tint` bg, `--card-tint-border`, accent text, pill) → "View project →" link with
accent underline. Keep existing project data.

### Skills (`components/Skills.tsx`)
`#skills` on `--panel-2`. Eyebrow `04 — SKILLS`, H2. 2×2 grid of categories. Each
category header is a mono path label in accent (`~/frontend`, `~/backend & database`,
`~/testing & tools`, `~/aws services`) over a wrap of mono chips (`--panel` bg, border,
radius 8px). Keep existing skill lists.

### Contact (`components/Contact.tsx`)
`#contact` on `--bg`. Two columns. Left: eyebrow `05 — CONTACT`, H2 "Let's connect.",
muted paragraph, then mono contact links (email + LinkedIn) each with an accent `→`.
Right: the existing contact form — inputs/textarea styled `--panel` bg, `--border`,
radius 9px, muted placeholders; submit button `bg-accent text-accent-ink`. Preserve the
form's existing submit logic.

### Footer
1px top border, "Justin Bell" (`font-display`) left, mono meta line right.

## Interactions & Behavior
- **Theme toggle**: `next-themes` `useTheme()`. `defaultTheme="dark"`, persists to
  localStorage, no FOUC (add the standard `next-themes` script via provider).
- **Smooth scroll**: `html { scroll-behavior: smooth }` for anchor nav (already fine).
- **framer-motion**: keep/[re-add] the existing entrance animations (fade/slide-up on
  scroll into view). Nothing in the reskin requires removing them.
- **Hover**: nav links color shift; buttons subtle; cards may add a border/elevation
  hover if desired (optional, not in reference).
- **Responsive**: below ~900px collapse all two-column grids to single column; hero H1
  steps down; nav links collapse to a menu if that already exists in the repo.

## State Management
- Theme state owned entirely by `next-themes` — do not hand-roll.
- Contact form state: unchanged from current implementation.

## Assets
- Project screenshots already in `/public`: `gamerelish_screenshot*.png`,
  `atraves_screenshot.png`. Reference file hotlinks the live versions — use the local
  `/public` copies.
- Résumé PDF at the current public path — keep the existing link.

## Files
- `Justin Bell Portfolio.dc.html` — the HTML design reference (this bundle).
- `CLAUDE_CODE_PROMPT.md` — paste-ready prompt to drive the implementation.
