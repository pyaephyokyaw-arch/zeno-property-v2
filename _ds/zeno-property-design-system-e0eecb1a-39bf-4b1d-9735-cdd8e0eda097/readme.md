# Zeno Property — Design System

Zeno is a Southeast Asia PropTech mobile app (iOS + Android) for browsing, saving
and enquiring about homes — listings are priced in Myanmar Kyat (MMK Lakh) with
locations across Yangon. This repository is the **design system**: tokens, type,
foundations, reusable React components and an interactive app UI kit.

- **Platform:** Mobile-first, 390px canvas (iPhone 15 Pro). 44px minimum touch target.
- **Themes:** Light (default) and Dark, switched via `[data-theme="dark"]` or `.dark`.
- **Brand accent:** Gold `#d38d29` (`--brand-primary`).
- **Type:** Sora Bold (display/titles), Nunito Sans (body & UI), Roboto Mono (code).

## Sources
- **Figma:** "Style-Guide-Zeno-Property-App.fig" (mounted virtual file). Token
  values, components, variants and the Room/Notification cards were extracted from it.
- **Uploads:** `Light Background.svg`, `Dark Background.svg` — the Zeno wordmark logos
  (copied into `assets/logo/`).
- Token collections used (originals only; duplicate Mode/Light/Dark/Default collections ignored):
  Color (52 primitives) · Theme (45 semantic, Light+Dark) · Components (29) ·
  Spacing (16) · Border radius (9) · Opacity (13).

---

## CONTENT FUNDAMENTALS

Tone is **warm, plain and helpful** — a friendly local guide, not a corporate portal.

- **Voice:** Second person, addressing the user directly. "Find your home", "Save",
  "Book a viewing", "Tap the heart on any listing to keep it here."
- **Casing:** Sentence case everywhere — buttons, titles, nav. Not Title Case, not ALL CAPS
  (small uppercase is used only for tiny section eyebrows/labels with letter-spacing).
- **Length:** Short. Labels are 1–3 words ("Browse homes", "See all", "Apply filters").
  Body copy is one or two plain sentences.
- **Numbers & locale:** Prices read `MMK 4,000L` (Lakh). Areas read `2,700 sq ft`.
  Counts are spelled inline: "248 homes in Yangon", "4 Beds · 3 Baths".
- **Greetings:** Friendly, lightly localized — "Good morning", "Mingalar 👋".
  Emoji are used *sparingly* — only the occasional greeting wave, never in UI chrome,
  labels, or as iconography.
- **Microcopy examples:** "No saved homes yet", "The agent will confirm shortly",
  "Zeno verified agent", "Price drop alert".

---

## VISUAL FOUNDATIONS

**Color.** A single warm gold accent (`#d38d29`) carries the brand against a clean
near-white / near-black neutral system. Two neutral ramps: **Ink** (dark, for text and
dark surfaces) and **Sky** (light, for backgrounds and borders). Four semantic feedback
families — success (green), error (red), warning (yellow), info (blue) — each as a soft
tinted background + darker content pair. Color is bound through **semantic Theme tokens**
(`--surface-page`, `--content-primary`, `--border-default`, `--brand-primary`), never raw
primitives, so Dark mode is a clean token flip.

**Type.** Two-family system. **Sora Bold** is reserved for Display (64) and Titles
(48/32/24) — geometric, confident headlines. **Nunito Sans** handles everything else
(18 → 10) in Regular/Medium/Bold — rounded, friendly, highly legible at small sizes.
Three line-height variants: None (1:1), Tight (1.2), Normal (1.5). Inter in the source
file is **legacy — do not use**.

**Spacing & layout.** 4px base unit, scale 4 → 120. Default internal padding is `md` (16px).
Screens are mobile-first at 390px with 16px side gutters. Lists use a 16px gap between cards.

**Corners.** Soft but not pill-everywhere. Default radius `m` = 8px (buttons, inputs,
chips-as-buttons, search). Cards use `l` = 12px. Bottom sheets use `xxxl` = 24px on the top
corners. `full` (9999) is reserved for pills, badges, avatars, switches, progress tracks
and grab handles.

**Cards.** White (`--card-bg`) with a 1px subtle border (`--border-subtle`) and 12px radius.
Property cards add a soft `shadow-sm` and a 16:10-ish image with a floating favourite button
and an optional gold status pill. No colored left-border accents, no heavy gradients.

**Elevation.** Five-step soft drop-shadow scale (xs → xl), low-opacity neutral shadows —
chips/badges barely lift; modals and sheets sit on `xl`. Dark mode deepens shadow opacity.

**Backgrounds.** Flat. App content sits on `--neutral-25` (`#f7f9fa`); surfaces and headers
are page-white. No full-bleed photographic backgrounds, no repeating patterns or textures.
Imagery appears only as property photography inside cards/heroes — warm, natural daylight tone.

**Motion.** Quick and functional. Transitions 120–160ms ease. Buttons darken ~4% on hover
and shrink to 0.98 on press; icon buttons shrink to 0.94; switch thumb slides on a 160ms
cubic-bezier. No bounces, no infinite/decorative loops. Respect reduced-motion.

**States.** Hover = subtle brightness drop; press = slight scale-down; focus = 2px gold
focus ring offset 2px. Disabled = neutral-100 fill + content-disabled text (or muted
border for outline/ghost), `not-allowed` cursor.

**Transparency & blur.** Scrims behind sheets use `rgba(0,0,0,.5)`. Floating controls over
photos (back/share/favourite on the detail hero) use a `rgba(255,255,255,.92)` capsule.
A frost blur token (12/24px) exists for optional frosted surfaces.

---

## ICONOGRAPHY

- The Figma file uses the **Iconsax / vuesax BOLD (filled)** family throughout — rounded,
  solid-fill glyphs at a consistent ~24px in UI, 16px inline with text.
- That exact set is **not on the open Iconify CDN**, and the file's exported icon vectors did
  not decode cleanly. The system therefore renders the **Solar (bold)** Iconify set — the
  closest filled, rounded match — through the `<iconify-icon>` web component, wrapped by the
  `Icon` component. **⚠️ Substitution flagged:** if pixel-exact Iconsax is required, drop the
  Iconsax SVGs into `assets/icons/` and point `Icon` at them, or license the `iconsax` Iconify set.
- Usage: `<Icon name="home-2" size={24} color="var(--brand-primary)" />`. Pass a bare name
  (Solar bold weight is appended) or a fully-qualified `set:name`. Host pages must include the
  iconify-icon script (see any component card or the UI kit).
- **Emoji** are not used as icons — only the rare greeting (👋). **Unicode** mid-dots (·) are
  used as inline metadata separators.
- **Logos:** `assets/logo/zeno-logo-light-bg.svg`, `zeno-logo-dark-bg.svg` (full lockups),
  `zeno-logo.svg` / `zeno-mark.svg` (wordmark vector).

---

## INDEX

**Root**
- `styles.css` — global entry (import this); `@import`s all token + interaction CSS.
- `readme.md` — this guide. `SKILL.md` — Agent Skill manifest.

**tokens/** — `colors.css` (primitives), `theme.css` (semantic Light+Dark + component tokens),
`spacing.css` (spacing/radius/opacity), `typography.css`, `elevation.css`, `fonts.css`.

**components/** — reusable React primitives (namespace `window.ZenoPropertyDesignSystem_*`).
One directory per component, named for the component, each holding its `.jsx`, `.d.ts`
and specimen `.card.html` (Design System tab → **Components**, sorted A–Z): ActionSheet,
Avatar, Badge, BottomSheet, Button, Card, Checkbox, Chip, Divider, Icon, IconButton,
Input, NavBar, NotificationCard, ProgressBar, PropertyCard, Radio, SearchBar,
SegmentedControl, Slider, Snackbar, Stepper, Switch, TabBar, Tabs, Tooltip.
- `interactions.css` — hover/press/focus states.

**guidelines/** — foundation specimen cards (colors, type, spacing, radius, elevation, logo).

**ui_kits/zeno-app/** — interactive mobile app (Home/Explore, Detail, Saved, Profile,
filter sheet, booking flow).

**assets/** — `logo/`, `img/` (property + blog photography).
