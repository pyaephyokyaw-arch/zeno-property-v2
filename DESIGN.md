# Zeno Property: Website Design Spec

This spec covers all 16 marketing pages. It builds on the **Zeno Property Design System**, adapted to a dark desktop web theme.
Live site: https://zeno-property-site.vercel.app

---

## 1. Page inventory

| # | File | Purpose | Hero type |
|---|------|---------|-----------|
| 01 | `zeno-landing.html` | Home: product story, discovery, insights, app CTA | Full hero + light-rays canvas |
| 02 | `zeno-platform.html` | Platform features | Full hero |
| 03 | `zeno-agents.html` | For agents | Full hero |
| 04 | `zeno-developers.html` | For developers | Full hero |
| 05 | `zeno-partners.html` | Partnerships | Full hero |
| 06 | `zeno-about.html` | Vision, principles, values, regional ambition | Full hero |
| 07 | `zeno-careers.html` | Culture, Life at ZENO, benefits | Full hero + light-rays canvas |
| 08 | `zeno-jobs.html` | Open roles list | Compact hero |
| 09 | `zeno-job-detail.html` | Single role + application | Compact hero |
| 10 | `zeno-newsroom.html` | Press and announcements | Compact hero |
| 11 | `zeno-articles.html` | Article index | Compact hero |
| 12 | `zeno-article-detail.html` | Single article | Article header |
| 13 | `zeno-contact.html` | Offices + contact form | Compact hero |
| 14 | `zeno-privacy.html` | Legal | Legal header |
| 15 | `zeno-terms.html` | Legal | Legal header |
| 16 | `zeno-cookies.html` | Legal | Legal header |

Shared assets: `assets/a11y.css` (loaded last on every page; holds the type scale, contrast fixes and focus styles), `assets/a11y.js`, `zeno-logo.svg`, `vercel.json`.

---

## 2. Color tokens (dark web theme)

Every page defines these in `:root`. Use the tokens, never raw hex.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#090a0a` | Page background |
| `--bg2` | `#202325` | Alternate section band, cards |
| `--bg3` | `#303437` | Raised surfaces, inputs |
| `--pp` | `#d38d29` | Brand gold, primary accent (= DS `--brand-primary`) |
| `--pl` | `#f1cb7c` | Light gold: eyebrows, focus ring, gradient start |
| `--pd` | `#975614` | Deep gold: gradient end |
| `--tp` | `#f7f9fa` | Primary text |
| `--tm` | `#979c9e` | Secondary / body-muted text |
| `--td` | `#80868d` | Tertiary text (raised from `#50555c` for AA) |
| `--gb` | `rgba(255,255,255,.06)` | Hairline borders |
| `--pb` | `rgba(211,141,41,.22)` | Gold borders |
| `--gs` | `rgba(255,255,255,.03)` | Glass surface fill |
| `--green` | `#23c16b` | Success |
| `--teal` | `#9bdcfd` | Info |

**Rules**
- There is one accent, gold. Don't add new hues.
- Text on gold is ink `#0b0c0d` (7.2:1). Never white on gold (2.8:1 fails).
- Brand gradient: `linear-gradient(135deg,#f1cb7c,#d38d29)`. It's reserved for the logo, primary buttons and one emphasised hero word (`.grad-em`).
- Hairlines on dark: `rgba(255,255,255,.14)` for structural rules, `--gb` for card edges.
- Ambient glow: a radial `rgba(211,141,41,.14)`, at most one per section.

---

## 3. Typography

| Role | Family | Weight |
|---|---|---|
| Headings H1–H4, display numbers/words | **Sora** `var(--font-display)` | 700 only |
| Body, UI, nav, buttons, forms, lists | **Nunito Sans** `var(--font-body)` | 400 / 500 / 700 |
| Code | **Roboto Mono** `var(--font-mono)` | 400 / 500 |
| Inter | Legacy: **do not use** | |

Always reference the `--font-*` tokens, never a literal family. Weights 600/800/900 are not loaded by the system and must not be used. Body sizes stay on the system scale: **18 / 16 / 14 / 12 / 10px**.

### Unified heading scale (enforced in `a11y.css`)

| Level | Size | Line-height | Tracking | Use |
|---|---|---|---|---|
| H1 (Display 64) | `clamp(40px, 5.2vw, 64px)` | 1.2 | -0.02em | Hero only, **one per page** |
| H2 (Title 1, 48) | `clamp(32px, 3.6vw, 48px)` | 1.2 | -0.02em | Section titles |
| H2 (compact) | `clamp(24px, 2.4vw, 32px)` | 1.2 | | Inside `.legal-content`, `.role-section`, `.form-header` |
| H3 (Title 3, 24) | `clamp(20px, 1.7vw, 24px)` | 1.2 | -0.01em | Cards, rows, sub-sections |
| H4 | `18px` | 1.2 | | Minor labels |

- Don't set `font-size` on heading classes in page CSS; the global scale wins. Child spans inherit.
- The only exception is `h3.ab-val-name` on the About values list: `clamp(32px,4.4vw,60px)`.
- Decorative oversized words (for example Careers › Life at ZENO "Think / Build / Grow") are **spans**, not headings, and carry `aria-hidden="true"`.
- All headings use `text-wrap: balance`.

### Body

| Style | Size | Line-height |
|---|---|---|
| Hero sub (`.hero-sub`) | 18px | 1.5 |
| Body | 16px | 1.75–1.8 |
| Lead / feature paragraph | 18px | 1.75 |
| Eyebrow (`.overline`) | 14px, 700, uppercase, 0.14em tracking, `--pl` | |
| Footer meta | 12px (legal links), 10px (copyright) | |

Body text never goes below 16px. Measure is 44–60ch.

---

## 4. Layout and spacing

- **Container:** 1200px max. Side padding is `max(48px, calc((100% - 1200px)/2))`.
- **Grid:** CSS grid with `gap` everywhere. Use `minmax(0,1fr)` tracks.
- **Section padding:** 96–120px desktop, 72–88px at ≤960px, 56–72px at ≤640px.
- **Nav height:** `--nav-h: 72px`. Anchor offset comes from `scroll-padding-top`.
- **Spacing:** 4px base (DS scale 4 → 120). Common steps are 8, 16, 20, 24, 32, 40, 48, 64, 96.
- **Radii:** `--r` 16px (cards, images), `--r-sm` 10px, `--r-btn` 9px. Pills use 9999.

### Breakpoints
| Width | Behaviour |
|---|---|
| > 960px | Full 2-column editorial splits |
| ≤ 960px | Splits stack, padding drops to 32px |
| ≤ 640px | Single column, padding 24px, number gutters shrink |

### Mobile nav (≤860px, `assets/nav-responsive.js`)
- Logo on the left; language switcher and a 44×44px menu button on the right. The left links move into a slide-down panel.
- ≤640px: GET ZENO APP leaves the bar and becomes a full-width gold button (ink text) in the panel.
- The menu button sets `aria-expanded`, and Esc closes the panel.

### Favicon
`favicon.svg` (gold flame logomark only, no wordmark), `favicon-32.png` and `apple-touch-icon.png` (gold mark on `#090a0a`), with `theme-color` `#090a0a`.

### Signature layout patterns
1. **Editorial split:** 5/7 or 1/1 columns, with the heading left and body or visual right. `.split-row` alternates `--bg` and `--bg2`; `.reverse` flips it.
2. **Numbered hairline rows:** `01 / 02 / 03` index plus title and body between 1px rules. On hover a gold 8% tint fills left→right (`scaleX`). Used for insights, principles, values and Life at ZENO.
3. **Offset image frame:** the photo sits in a 16px-radius frame with a displaced outline or tinted block behind it.
4. **Bordered panel:** `rgba(255,255,255,.03)` fill, 1px `rgba(255,255,255,.1)` border, `--radius-l`. Used for discovery.
5. **CTA ribbon:** left-aligned headline and buttons, with the phone mock offset right. No collage overlap.

---

## 5. Components

| Component | Spec |
|---|---|
| **Navbar** | Fixed, 3-column grid (links · logo · actions). Background `rgba(9,10,10,.6)` + blur 20px. When `.scrolled` it becomes `.97` with a gold 1px underline shadow. Links are 16/500 `--tm`, with a gold underline that grows on hover/active. Order on the right: links → **GET ZENO APP** → language switcher. |
| **Primary button** `.btn-primary` | Gold gradient, ink text, 11×22 padding, `--r-btn`, min-height 44px. Soft gold glow; on hover it lifts -2px and the glow gets stronger. |
| **Ghost button** `.btn-ghost` | Transparent with a 1px light border and `--tp` text. Same size as primary. |
| **Eyebrow** `.overline` | See type table. Left-aligned by default; `.center` centers it. |
| **Image placeholder** `.img-ph` | Dark gradient, `--gb` border, `--r`. Scales to 1.02 on parent hover. |
| **Cards** | `--bg2` / glass fill, `--gb` border, 16px radius. Staggered lift on reveal. No colored left borders. |
| **Forms** | `--bg3` inputs with 44px min height. Placeholder color `#80868d`. Every field has a `<label>` (currently `.sr-only`; see §9). |
| **Footer** | Background `--ink-darkest`. Columns: brand + description · link columns · app badges · offices. The legal row sits at the bottom. |
| **Scroll progress** | 2px gold bar fixed under the nav, `scaleX` bound to scroll. |
| **Skip link** | Light-gold pill; visible on focus at top-left. |

---

## 6. Motion

| Effect | Implementation | Timing |
|---|---|---|
| Preloader | Flame mark scales in → wordmark clip-path wipe → counter 000→100 + bar → logo lifts → panel wipes up | Fixed 2.70s |
| Reveal | `.reveal` → `.in`, translateY 26px → 0, fade | .6s ease. Stagger with `.d1–.d4` (80ms steps) |
| Parallax imagery | GSAP ScrollTrigger scrub | |
| Heading settle | Scrubbed y/opacity | |
| Word ink reveal | Per-word color from muted to `--tp` on scroll | |
| Scroll-drawn rules | `scaleX(0→1)`, origin left | 1.2s `cubic-bezier(.2,.7,.2,1)` |
| Row hover fill | `::before` `scaleX` | .5s same curve |
| Hover lift | translateY(-2px) + glow | .2s |

- The easing standard is `cubic-bezier(.2,.7,.2,1)`. No bounces and no infinite decorative loops (the hero orbs and light rays are the only ambient motion).
- Reduced motion: `a11y.css` collapses every transition and animation and forces `.reveal` visible. The preloader exits immediately.

---

## 7. Accessibility (WCAG 2.1 AA baseline)

- One H1 per page, then H2 for sections and H3 inside them. No skipped levels.
- Landmarks: `<nav>`, `<main id="main">` (skip-link target), `<footer>`.
- Focus: `2px solid #f1cb7c`, offset 3px, on all interactive elements.
- Hit targets are at least 44px.
- Contrast: body `--tp`/`--tm` on `--bg` passes AA. Ink text goes on gold.
- Decorative duplicates of text get `aria-hidden="true"`.
- Every page has `<link rel="canonical">`, a unique `<title>` and a meta description.

---

## 8. Content voice

- Plain, confident and warm. The company name is written **ZENO** in copy and headlines.
- Headlines in Title Case are accepted on the marketing site (for example "A Place to Think, Build, and Grow."). Buttons are short verbs: "View Open Roles →", "Get Zeno App".
- Eyebrows are uppercase and 1–3 words.
- No emoji. Use a mid-dot (·) for inline metadata.
- Keep client-supplied copy verbatim.

---

## 9. Outstanding items

- [ ] Replace placeholder `#` links: store badges, social icons, "Read more"
- [ ] Visible form labels (fields currently rely on placeholders + `.sr-only` labels)
- [ ] Credibility content: attribution for the Ben Horowitz quote, photo captions
- [ ] `sitemap.xml` and `robots.txt`
- [ ] Open Graph / Twitter preview images per page

---

## 10. Do / Don't

**Do:** use tokens · use grid + gap · use hairline rows for lists · give each section one gold emphasis · keep one H1 · let `a11y.css` own heading sizes.

**Don't:** white text on gold · new accent colors · inline heading `font-size` · Inter · colored left-border cards · heavy gradient backgrounds · emoji icons · text below 16px in body.
