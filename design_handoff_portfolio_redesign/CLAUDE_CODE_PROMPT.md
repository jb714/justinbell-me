# Claude Code — paste-ready prompt

Copy everything in the fenced block below into Claude Code from the root of your repo.
`README.md` (in this same handoff folder) and `Justin Bell Portfolio.dc.html` should be
readable — either copy this whole `design_handoff_portfolio_redesign/` folder into the
repo, or point Claude Code at wherever you saved it.

---

```
I'm redesigning my portfolio (justinbell.me). This is a RESKIN — the section order and
all copy stay the same; I'm changing the visual system to a dark "studio" look with a
one-click light toggle. A full spec is in design_handoff_portfolio_redesign/README.md and
an HTML design reference is at design_handoff_portfolio_redesign/Justin Bell Portfolio.dc.html.
Read both before starting.

Stack facts (do not violate):
- Next.js 14 App Router, React 18, TypeScript 5.3, Tailwind 3.4. No React 19 / Next 15 APIs.
- One-page site; page.tsx composes Navbar → Hero → About → Resume → Projects → Skills →
  Contact from components/. Reskin each component IN PLACE.
- framer-motion 11, react-icons, @heroicons/react are available.

Hard constraints:
1. DO NOT change or port any text content. The reference HTML has STALE resume content.
   The current local component files — especially components/Resume.tsx — are the source
   of truth for all copy, bullets, dates, and ordering. Keep existing text; only restyle.
2. Fix the theme system: it currently uses Tailwind's media strategy and can't toggle.
   - Add `darkMode: 'class'` to tailwind.config.js.
   - Install `next-themes`; wrap the root layout in <ThemeProvider attribute="class"
     defaultTheme="dark" enableSystem={false}>; add suppressHydrationWarning to <html>.
   - Wire the Navbar toggle with useTheme(). No hand-rolled theme state, no FOUC.
3. Set up the token layer: put the theme CSS variables from the README into
   app/globals.css (:root = dark, .light = light overrides), replacing the vestigial
   .dark block. Expose them in tailwind.config.js theme.extend.colors so they're normal
   utilities (bg-bg, bg-panel, text-text, text-muted, border-line, bg-accent,
   text-accent-ink, etc.). Name them however is cleanest.
4. Fonts via next/font: Space Grotesk (font-display / headings), Geist (font-sans / body,
   default), JetBrains Mono (font-mono / labels). Replace the current Inter default.
5. Match the type scale, spacing, radii, section bands, and per-section layouts exactly
   as documented in the README (hero grid background, numbered value cards, mono section
   eyebrows "01 — ABOUT", project tech-chips, ~/path skill headers, etc.).
6. Keep the existing framer-motion entrance animations and the contact form's submit
   logic working. Drop the emoji from the interests row (use text chips).

Before you start, remind me to commit today's Resume.tsx / résumé PDF changes to main, so
this lands as a clean branch on top of correct content.

Plan of attack I'd like:
1. Confirm you've read the README + reference and restate the token names you'll use.
2. globals.css tokens + tailwind.config (darkMode class, colors, fonts) + next-themes
   provider wiring + next/font setup. Show me this foundation before touching components.
3. Then reskin components one at a time in this order — Navbar, Hero, About, Resume,
   Projects, Skills, Contact, footer — pausing after each so I can review the diff.
Keep diffs per-section and reviewable. Don't rewrite content.
```

---

## After it runs — quick QA checklist
- Toggle flips **dark ⇄ light** and persists on reload, no flash of wrong theme.
- Accent reads correctly in BOTH themes (`#4de3d1` dark / `#0d9488` light).
- Resume section text matches your just-updated `Resume.tsx` — nothing reverted.
- Hero H1 is Space Grotesk, ~80px desktop, steps down on mobile.
- Section eyebrows are mono + accent (`01 — ABOUT` …).
- All two-column grids collapse cleanly on mobile.
- Project screenshots load from `/public` (not hotlinked to the live site).
