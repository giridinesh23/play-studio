# Play Studio Website — Complete Reference for Codex

## Project Overview

**Play Studio** is a professional audio-visual production company based in Changzamtog, Thimphu, Bhutan. This is their business website.

- **Live URL:** https://playstudiobhutan.com
- **GitHub Repo:** https://github.com/giridinesh23/play-studio.git
- **Hosting:** Vercel (auto-deploys from `main` branch)
- **Domain:** playstudiobhutan.com (connected via Vercel)

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.2.3 | React framework (App Router) |
| React | 19.2.4 | UI library |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | v4 | Styling (uses `@tailwindcss/postcss`) |
| Framer Motion | ^12.38.0 | Animations |
| Nodemailer | ^8.0.9 | Contact form email sending |
| react-hook-form | ^7.72.1 | Form handling |
| Zod | ^4.3.6 | Form validation |
| next-sitemap | ^4.2.3 | SEO sitemap generation |
| @heroicons/react | ^2.2.0 | Icons |
| clsx | ^2.1.1 | Conditional class names |

**Fonts:** Montserrat (headings) + Nunito (body) — loaded via `next/font/google`

---

## Project Root Path

```
/Users/dineshgiri/Documents/Claude/Play Studio Website/play-studio/
```

All commands (npm, git, etc.) should be run from this directory.

---

## File Structure

### Pages (Next.js App Router)

```
app/
├── layout.tsx              # Root layout — Navbar, Footer, fonts, metadata, JSON-LD
├── page.tsx                # Home page — Hero, StatsBar, ServicesOverview, FeaturedProjects, TestimonialsSlider, TrustedBy, CTABanner
├── globals.css             # Global styles, CSS variables, custom utilities
├── loading.tsx             # Loading spinner
├── not-found.tsx           # Custom 404 page
├── about/page.tsx          # About page
├── contact/page.tsx        # Contact form page
├── equipment/page.tsx      # Equipment inventory page
├── faq/page.tsx            # FAQ page
├── portfolio/page.tsx      # Portfolio/projects page
├── terms/page.tsx          # Terms of service page
├── services/
│   ├── page.tsx            # Services overview
│   ├── sound-and-lighting/page.tsx
│   ├── acoustic-treatment/page.tsx
│   ├── recording/page.tsx
│   └── mixing-mastering/page.tsx
└── api/
    └── contact/route.ts    # POST endpoint — sends emails via Nodemailer (SMTP)
```

### Components

```
components/
├── layout/
│   ├── Navbar.tsx          # Fixed header, scroll detection, mobile hamburger, Services dropdown
│   ├── Footer.tsx          # Site footer with links, social, contact info
│   └── PageHero.tsx        # Reusable page header banner for inner pages
├── home/
│   ├── Hero.tsx            # Full-screen hero with background image, logo icon, particles
│   ├── StatsBar.tsx        # Animated counter stats (10+ years, 2000+ events, etc.)
│   ├── ServicesOverview.tsx # 4 service cards
│   ├── FeaturedProjects.tsx # Portfolio highlights
│   ├── TestimonialsSlider.tsx # Client testimonials carousel
│   ├── TrustedBy.tsx       # Client logo marquee
│   └── CTABanner.tsx       # Call-to-action banner
├── about/AboutContent.tsx
├── contact/ContactContent.tsx  # Form with react-hook-form + Zod validation
├── equipment/EquipmentContent.tsx  # Filterable equipment grid
├── faq/FAQContent.tsx          # Accordion FAQ
├── portfolio/PortfolioContent.tsx  # Filterable project grid
├── services/
│   ├── ServicesContent.tsx
│   ├── SoundLightingContent.tsx  # Includes tiered packages from data/packages.ts
│   ├── AcousticContent.tsx
│   ├── RecordingContent.tsx
│   └── MixingMasteringContent.tsx
├── terms/TermsContent.tsx
└── ui/
    ├── AnimateOnScroll.tsx  # Intersection observer wrapper for scroll animations
    ├── Button.tsx           # Reusable button/link component
    ├── Container.tsx        # Max-width centered container
    ├── CountUp.tsx          # Animated number counter (used in StatsBar)
    ├── ImagePlaceholder.tsx # Placeholder for missing images
    └── SectionHeading.tsx   # Consistent section title styling
```

### Data Layer (all content lives here)

```
data/
├── company.ts       # Company info, stats, milestones, values, nav links, mission/vision, founding story
├── services.ts      # 4 services: sound-and-lighting, acoustic-treatment, recording, mixing-mastering
├── packages.ts      # Equipment packages by category & tier (conference, solo, 4-piece, full band)
├── equipment.ts     # Full equipment inventory (mixers, speakers, subs, amps, mics)
├── team.ts          # 4 team members + 1 placeholder
├── portfolio.ts     # 3 real projects + 5 placeholders
├── testimonials.ts  # 3 placeholder testimonials (need 6 real ones)
├── faq.ts           # FAQ questions and answers
└── terms.ts         # Terms of service sections
```

### Types

```
types/index.ts       # All TypeScript interfaces (TeamMember, Service, Project, Testimonial, FAQ,
                     # EquipmentItem, PackageCategory, PackageTier, TermsSection, CompanyInfo,
                     # Stat, Milestone, NavLink, Value, PricingItem)
```

### Utilities

```
lib/animations.ts    # Framer Motion variants: fadeInUp, fadeInLeft, fadeInRight, scaleIn,
                     # staggerContainer, staggerItem
```

### Config Files

```
next.config.ts           # Image remote patterns (unsplash, dailybhutan, breathebhutan, blogger.googleusercontent)
next-sitemap.config.js   # Sitemap config for playstudiobhutan.com
tsconfig.json            # TypeScript config with @/ path alias
postcss.config.mjs       # PostCSS with @tailwindcss/postcss
eslint.config.mjs        # ESLint config
package.json             # Dependencies and scripts
.env.example             # Environment variable template
.env.local               # Actual env vars (DO NOT commit)
```

### Public Assets

```
public/
├── images/
│   ├── logo-wordmark.png  # Full "PLAY STUDIO" wordmark with play icon (transparent bg) — used in Navbar
│   ├── logo-icon.png      # Standalone triangular play button icon (transparent bg) — used in Hero
│   └── logo.svg           # Old logo (still exists but no longer referenced)
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── site.webmanifest
├── robots.txt
├── sitemap.xml
└── sitemap-0.xml
```

---

## Design System / Color Palette

Defined as CSS custom properties in `app/globals.css`:

| Variable | Value | Usage |
|---|---|---|
| `--color-primary` | `#1B2A4A` | Main background |
| `--color-primary-light` | `#243556` | Slightly lighter bg |
| `--color-accent` | `#E2B340` | Gold accent (buttons, highlights) |
| `--color-accent-hover` | `#F0C855` | Gold hover state |
| `--color-dark` | `#0D1B2A` | Darkest background |
| `--color-card` | `#1E2D47` | Card background |
| `--color-card-hover` | `#243859` | Card hover |
| `--color-text` | `#F8F5EE` | Main text (off-white) |
| `--color-text-muted` | `#94A0BC` | Secondary text |
| `--color-border` | `#2A3A54` | Border color |
| `--color-purple` | `#7C5CFC` | Purple accent |
| `--color-purple-dark` | `#5B3CC4` | Dark purple |
| `--color-success` | `#34D399` | Success green |
| `--color-error` | `#F87171` | Error red |

These are registered with Tailwind v4 via `@theme inline` in globals.css, so you can use them as `bg-primary`, `text-accent`, `border-border`, etc.

### Custom CSS Classes

- `.glass-card` — frosted glass card effect
- `.gradient-border` — gradient border on hover
- `.section-glow` — ambient gradient line at top of sections
- `.text-gradient` — gold-to-purple gradient text
- `.shimmer-line` — animated shimmer effect

### Custom Animations

- `animate-marquee` — horizontal scroll (TrustedBy logos)
- `animate-float` — vertical floating
- `animate-pulse-gold` — gold opacity pulse
- `animate-shimmer` — shimmer background
- `animate-glow` — glow pulse

---

## Contact Form (API Route)

**Endpoint:** `POST /api/contact`

**Payload:**
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string (optional)",
  "service": "string (optional)",
  "eventDate": "string (optional)",
  "venue": "string (optional)",
  "message": "string (required)"
}
```

**Behavior:**
1. Validates name, email, message are present
2. Sends styled HTML email to admin (`CONTACT_EMAIL` env var)
3. Sends styled HTML confirmation email to the client
4. Returns `{ success: true }` or `{ error: "..." }`

**Environment variables required (set in Vercel dashboard AND .env.local):**
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=playstudiobhutan@gmail.com
SMTP_PASS=<Gmail App Password>
CONTACT_EMAIL=playstudiobhutan@gmail.com
NEXT_PUBLIC_SITE_URL=https://playstudiobhutan.com
```

---

## How to Run Locally

```bash
cd /Users/dineshgiri/Documents/Claude/Play\ Studio\ Website/play-studio
npm install
npm run dev
# Opens at http://localhost:3000
```

## How to Build

```bash
npm run build    # Runs: next build && next-sitemap
npm run start    # Runs: next start (production mode)
```

---

## How to Push Code to GitHub & Vercel

Vercel is connected to the GitHub repo and auto-deploys on every push to `main`.

```bash
cd /Users/dineshgiri/Documents/Claude/Play\ Studio\ Website/play-studio

# 1. Check what changed
git status
git diff

# 2. Stage files (be specific — don't use git add .)
git add <file1> <file2> ...

# 3. Commit
git commit -m "Your commit message"

# 4. Push to GitHub (this automatically triggers Vercel deployment)
git push origin main
```

**Git remote:** `origin` → `https://github.com/giridinesh23/play-studio.git`
**Branch:** `main`

After pushing, Vercel will:
1. Detect the push to `main`
2. Run `npm run build` (next build && next-sitemap)
3. Deploy to https://playstudiobhutan.com (usually takes 1-2 minutes)

---

## SEO Setup

- **Metadata:** Title, description, keywords, OpenGraph — defined in `app/layout.tsx`
- **JSON-LD:** LocalBusiness schema markup in `app/layout.tsx`
- **Sitemap:** Auto-generated by next-sitemap for all routes
- **robots.txt:** Allows all crawlers on all routes
- **Title template:** `%s | Play Studio` (inner pages) / `Play Studio — Where Every Event Meets Perfection` (home)

---

## Current State & Known TODOs

### What's Complete
- All 11+ pages built and functional
- Responsive design (mobile + desktop)
- Navbar with scroll effect, mobile menu, Services dropdown
- Hero with animated particles and logo
- Stats bar with animated counters
- Contact form with dual email system (admin + client confirmation)
- Equipment inventory with category filtering
- Sound system packages with tiered sizing
- Portfolio with category filtering
- SEO (metadata, JSON-LD, sitemap, robots.txt)
- Accessibility (skip-to-content, focus-visible, semantic HTML)
- Custom scrollbar, selection colors, glass effects

### What's Placeholder / Missing
- **Phone & WhatsApp numbers** — empty strings in `data/company.ts`
- **Facebook & Instagram URLs** — empty strings in `data/company.ts`
- **Testimonials** — only 3 placeholders, needs 6 real ones (`data/testimonials.ts`)
- **Portfolio** — 3 real projects + 5 placeholders (`data/portfolio.ts`)
- **5th team member** — placeholder entry in `data/team.ts`
- **Team photos** — referenced at `/images/team/*.jpg` but files don't exist
- **Lighting equipment** — not yet added to `data/equipment.ts`
- **Pricing data** — `PricingItem` type exists in `types/index.ts` but no data file uses it
- **SMTP env vars** — need to verify they're set in Vercel dashboard

---

## Important Notes for Codex

1. **Next.js 16** — This uses Next.js 16.2.3 which may have breaking changes from earlier versions. Check `node_modules/next/dist/docs/` for current API docs if unsure.

2. **Tailwind CSS v4** — Uses the new `@theme inline` syntax in globals.css, NOT `tailwind.config.js`. Colors are CSS variables registered via `@theme`.

3. **App Router** — All pages use the Next.js App Router pattern (`app/` directory, not `pages/`). Client components are marked with `"use client"`.

4. **Data-driven** — All content is in typed data files under `data/`. To update content, edit the data files — don't hardcode text in components.

5. **Logo files:**
   - `public/images/logo-wordmark.png` — Full "PLAY STUDIO" text logo (transparent bg, used in Navbar)
   - `public/images/logo-icon.png` — Triangular play icon only (transparent bg, used in Hero)
   - `public/images/logo.svg` — Old logo, no longer used

6. **Images with `unoptimized` prop** — The logo PNGs in Navbar and Hero use `unoptimized` on the Next.js `<Image>` component to preserve PNG transparency (Next.js optimization can convert to JPEG which loses alpha).

7. **External images** — Portfolio uses external image URLs from dailybhutan.com and breathebhutan.com. These domains are whitelisted in `next.config.ts` under `images.remotePatterns`.

8. **Contact form emails** — The HTML email templates are inline in `app/api/contact/route.ts`. They use dark-themed styled HTML with the Play Studio branding.
