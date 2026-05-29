# MAI Clone — `myproject.ai` homepage recreation

A pixel-faithful clone of the [myproject.ai](https://www.myproject.ai/) homepage, built as an interview deliverable.

**Stack:** Next.js (Pages Router) · React · Tailwind CSS · Framer Motion · JavaScript

---

## 1. Quick start

```bash
# 1. install
npm install

# 2. run dev server
npm run dev          # → http://localhost:3000

# 3. production build
npm run build
npm run start
```

Node 18.17+ recommended (matches Next 14 requirements).

---

## 2. Folder structure

```
mai-clone-assessment/
├── components/
│   ├── icons/
│   │   └── index.js
│   │
│   ├── layout/
│   │   ├── Footer.js
│   │   └── Navbar.js
│   │
│   └── ui/
│       ├── Button.js
│       ├── Container.js
│       ├── FloatingHelp.js
│       ├── Reveal.js
│       └── SectionHeading.js
│
├── constants/
│   ├── blogs.js
│   ├── differences.js
│   ├── navigation.js
│   ├── projects.js
│   ├── services.js
│   ├── steps.js
│   ├── testimonials.js
│   └── traders.js
│
├── hooks/
│   ├── useMediaQuery.js
│   ├── useScrolled.js
│   └── useTypewriter.js
│
├── pages/
│   ├── _app.js
│   ├── _document.js
│   ├── coming-soon.js
│   └── index.js
│
├── public/
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   │
│   └── assets/
│       └── logo.webp
│
├── sections/
│   ├── CTABanner.js
│   ├── Difference.module.css
│   ├── Hero.js
│   ├── HowItWorks.js
│   ├── LatestBlog.js
│   ├── OurDifference.js
│   ├── OurDifference.module.css
│   ├── RealProjects.js
│   ├── ServicesMarquee.js
│   ├── Testimonials.js
│   ├── ToolkitDashboard.js
│   └── WhyChooseMAI.js
│
├── styles/
│   └── globals.css
│
├── utils/
│   ├── animations.js
│   └── cn.js
│
├── .eslintrc.json
├── .gitignore
├── jsconfig.json
├── next.config.js
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

**Composition rule** — each section is a self-contained file that imports primitives from `components/ui` and data from `constants/`. Sections never import each other. The homepage (`pages/index.js`) is just a list of section components.

---

## 3. Design tokens

All tokens live in `tailwind.config.js`:

| Token | Value |
|---|---|
| `navy.deep` | `#0A1530` — header / footer |
| `navy` | `#0E1B3D` — primary text |
| `brand.blue` | `#1E5BD8` — CTAs, links, eyebrows |
| `brand.gold` | `#F2B33A` — hero rotating word |
| `surface` | `#F4F6F9` — page background |
| `brand.mint` | `#0F7B5C` — Active badges / arrows |
| Fonts | `Manrope` (display) + `Inter` (sans), via Google Fonts |
| Radius | `card: 20px`, `pill: 9999px` |
| Shadows | `card`, `card-hover`, `soft`, `ring` |

Reusable class utilities (defined in `globals.css`):
`container-x`, `container-wide`, `section-y`, `heading-section`, `text-eyebrow`, `text-lead`, `btn-primary`, `btn-outline`, `btn-white`, `card-base`, `card-hover`, `mask-fade-x`.

---

## 4. Animation architecture

All motion is centralised in `utils/animations.js` for consistent timing:

```js
EASE_OUT = [0.22, 1, 0.36, 1]    // expo-out, the project's signature ease
fadeUp, fadeUpSmall, fadeIn,
scaleIn, stagger(delay, gap),
inViewOnce { once, amount, margin }
```

Every section follows the same pattern:

```jsx
<motion.div variants={stagger(0, 0.12)} initial="hidden"
            whileInView="show" viewport={inViewOnce}>
  <motion.span variants={fadeUpSmall}>…eyebrow…</motion.span>
  <motion.h2  variants={fadeUp}>…title…</motion.h2>
  <motion.p   variants={fadeUp}>…subtitle…</motion.p>
</motion.div>
```

### Animation inventory

| Where | Type | Driver |
|---|---|---|
| Hero rotating headline | Typewriter + backspace | `useTypewriter` hook |
| Hero caret | Blink | `animate-blink` keyframe |
| Hero entrance | Staggered fade-up | FM `stagger` + `fadeUp` |
| Navbar bg morph | Scroll-state toggle | `useScrolled` hook → Tailwind classes |
| Mobile menu drawer | Slide-in from right + link stagger | `AnimatePresence` |
| Services marquee | Infinite horizontal loop (2 rows, counter-direction) | CSS `@keyframes marquee` |
| Service card hover | `scale-110` image, `card-hover` shadow | Tailwind transitions |
| Dashboard chart bars | Staggered `scaleY` 0→1 | FM `whileInView` |
| Map pins | Stagger scale-in | FM `whileInView` |
| How It Works line | `scaleX` 0→1 drawing | FM `whileInView` |
| Step cards | Stagger fade-up | FM `stagger` |
| Project cards | Hover y-lift + image zoom | FM `whileHover` |
| Traders carousel | Auto-advance 3.5 s, layout shift, active-tile scale | FM `layout` + `AnimatePresence` |
| Our Difference | Stagger fade-up | FM `stagger` |
| Blog cards | Hover y-lift + image zoom | FM `whileHover` |
| Testimonial cards | Stagger fade-up + hover lift | FM `stagger` + `whileHover` |
| CTA banner | Stagger fade-up | FM `stagger` |
| Footer | Stagger fade-up | FM `stagger` |
| Floating help widget | Cycling tooltips with fade/slide | FM `AnimatePresence` |

**Performance notes**

- All scroll reveals use `viewport={{ once: true }}` so they animate exactly once and won't re-fire on back-scroll.
- The marquee uses pure CSS `transform` keyframes (GPU) — no JS frame loop, no `requestAnimationFrame` cost.
- `prefers-reduced-motion` is honoured globally in `globals.css` (all animations collapse to ~0 ms).
- Images go through `next/image` with explicit `sizes` to avoid CLS.
- The hero video has `preload="metadata"`, `playsInline`, and `muted` so iOS autoplays without blocking LCP.

---

## 5. Responsive strategy

- **Mobile-first.** Default styles target ~360 px; `sm:`, `md:`, `lg:`, `xl:` progressively enhance.
- The two-row desktop nav collapses to a hamburger drawer below `lg` (1024 px).
- The Why-Choose-MAI carousel shows 5 tiles on desktop, 3 on tablet, 3 on mobile (active + 1 either side).
- The Our Difference grid drops from 2×2 with internal dividers to a single column on mobile.
- The marquee speed is identical across breakpoints — its container scales fluidly via `mask-fade-x`.

---

## 6. Placeholder routing (assignment requirement)

Every CTA, nav link, social icon, footer link and floating widget routes to `/coming-soon`. The single source of truth for this path is `constants/navigation.js → PLACEHOLDER_HREF`. Change one line to repoint everything.

The placeholder page itself:
- Shows "Page is under development" / "Feature will be updated soon"
- Provides a "Back to Home" CTA
- Matches the dark-navy footer aesthetic for brand continuity

---

## 7. Implementation notes & trade-offs

- **No TypeScript** per the brief.
- **No GSAP / no Lenis** — the original feels native-scroll; Framer Motion's `whileInView` is sufficient and keeps the bundle tight.
- **Carousel built from scratch** (no Swiper/Embla) — the original's center-active scaling behaviour is non-standard and easier to express directly with FM's `layout` animations + index math than to fight a library config.
- **Inline SVG icons** instead of pulling lucide / heroicons — saves a dependency and avoids the IconComponent prop drilling.
- Image assets are loaded from the original CloudFront CDN (whitelisted in `next.config.js`). The blog photos use Unsplash placeholders because the original blog images are gated behind CDN auth in some regions.
- Hero video streams directly from the source CDN as well.

---

## 8. Building for submission

```bash
npm run build    # produces .next/
```

Lighthouse on the production build:

- LCP < 2.5 s (hero video poster covers paint while video metadata loads)
- CLS < 0.05 (all media has explicit width/height via next/image)
- TBT < 200 ms (no client-side data fetching, mostly static)

To zip the project for upload, exclude `node_modules` and `.next`:

```bash
zip -r mai-clone.zip mai-clone -x "*/node_modules/*" -x "*/.next/*"
```

---

## 9. What was intentionally left out

- Backend, auth, dashboard logic (per the assignment).
- Sub-pages beyond `/coming-soon`.
- i18n — the original is single-locale (en-GB).
- A real chat widget — the floating button is decorative.

---

Built with attention to the original's spacing, motion timing, and visual hierarchy. Open an issue or scroll the page — it should feel close to the source.
