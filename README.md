# Play Studio — Official Website

The marketing website for **Play Studio Bhutan**, a professional audio-visual production company based in Thimphu, Bhutan. Built with Next.js 16, React 19, and Tailwind CSS 4.

---

## What This Project Is

Play Studio provides sound system hire, stage lighting, acoustic treatment installation, recording studio services, and mixing/mastering production. This website serves as the primary marketing and contact hub for the business.

**Live URL:** https://playstudiobhutan.com  
**Location:** Changzamtog, Thimphu, Bhutan

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.2.3 | Framework (App Router) |
| React | 19.2.4 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| Framer Motion | 12.x | Animations |
| React Hook Form | 7.x | Form handling |
| Zod | 4.x | Schema validation |
| Nodemailer | 8.x | Contact form emails via Gmail SMTP |
| next-sitemap | 4.x | Auto-generates sitemap.xml on build |
| Heroicons | 2.x | Icon library |

---

## Project Structure

```
play-studio/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (Navbar, Footer, fonts, metadata)
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles, CSS variables, animations
│   ├── loading.tsx             # Global loading skeleton
│   ├── not-found.tsx           # 404 page
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── equipment/page.tsx
│   ├── faq/page.tsx
│   ├── portfolio/page.tsx
│   ├── terms/page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   ├── sound-and-lighting/page.tsx
│   │   ├── acoustic-treatment/page.tsx
│   │   ├── recording/page.tsx
│   │   └── mixing-mastering/page.tsx
│   └── api/
│       └── contact/route.ts    # Contact form API — sends emails via Nodemailer
│
├── components/
│   ├── home/                   # Hero, StatsBar, ServicesOverview, FeaturedProjects,
│   │                           # TestimonialsSlider, TrustedBy, CTABanner
│   ├── layout/                 # Navbar, Footer, PageHero, Container
│   ├── services/               # One component per service page
│   ├── about/
│   ├── contact/
│   ├── equipment/
│   ├── faq/
│   ├── portfolio/
│   ├── terms/
│   └── ui/                     # Button, Container, SectionHeading, AnimateOnScroll,
│                               # CountUp, ImagePlaceholder
│
├── data/                       # All site content as TypeScript — edit here to update copy
│   ├── company.ts              # Name, address, hours, contact, nav links, stats, values
│   ├── services.ts             # 4 core services with descriptions and slugs
│   ├── packages.ts             # Equipment hire packages (3 tiers x 4 categories)
│   ├── equipment.ts            # Full equipment inventory (50+ items, 8 categories)
│   ├── portfolio.ts            # Project showcase entries
│   ├── faq.ts                  # Frequently asked questions
│   ├── team.ts                 # Team member bios
│   ├── testimonials.ts         # Client testimonials
│   └── terms.ts                # Terms & conditions sections
│
├── lib/
│   └── animations.ts           # Reusable Framer Motion variants
│
├── types/
│   └── index.ts                # All TypeScript interfaces and types
│
├── public/
│   ├── images/                 # Logo, team photos, portfolio images, client logos
│   ├── favicon.ico
│   ├── site.webmanifest
│   └── ...other favicon sizes
│
├── next.config.ts              # Image remote domains config
├── next-sitemap.config.js      # Sitemap generation config
├── .env.local                  # Local secrets — never commit this
├── .env.example                # Template for required env vars
└── package.json
```

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Home — Hero, stats, services overview, featured projects, testimonials |
| `/about` | Company story, mission/vision, team, milestones |
| `/services` | Services hub overview |
| `/services/sound-and-lighting` | Sound system & stage lighting hire |
| `/services/acoustic-treatment` | Acoustic treatment & installation |
| `/services/recording` | Recording & music production |
| `/services/mixing-mastering` | Mixing & mastering |
| `/portfolio` | Project showcase |
| `/equipment` | Full equipment inventory with category filter |
| `/contact` | Contact form + location map |
| `/faq` | Frequently asked questions |
| `/terms` | Terms & conditions |
| `/api/contact` | POST — contact form submission handler |

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/giridinesh23/play-studio.git
cd play-studio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

Open `.env.local` and configure:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
CONTACT_EMAIL=your@gmail.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

> **Gmail App Password:** Do not use your regular Gmail password. Generate a 16-character App Password at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords) with "Mail" access. Two-factor authentication must be enabled on the Gmail account first.

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Production build + auto-generate sitemap.xml |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Contact Form & Email

The contact form at `/contact` POSTs to `/api/contact`. On submission, two emails are sent via Gmail SMTP:

- **Admin email** → `CONTACT_EMAIL` — full enquiry details with a reply-to button
- **Client confirmation** → the submitter's email — booking summary and expected response time

Both emails use dark-themed HTML templates matching the site's gold/navy design.

**Required env vars:** `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL`

---

## Sitemap

`next-sitemap` runs automatically after every production build (`npm run build`) and outputs:

- `public/sitemap.xml` — all public routes
- `public/robots.txt` — allows all crawlers

Configure the site URL via `NEXT_PUBLIC_SITE_URL` in `.env.local`. Sitemap config lives in `next-sitemap.config.js`.

---

## Updating Content

All site copy is stored as TypeScript in the `data/` directory — no component changes needed for content updates:

- **Company info, address, hours** → `data/company.ts`
- **Services** → `data/services.ts`
- **Equipment inventory** → `data/equipment.ts`
- **Hire packages** → `data/packages.ts`
- **Portfolio projects** → `data/portfolio.ts`
- **Team members** → `data/team.ts`
- **Testimonials** → `data/testimonials.ts`
- **FAQ** → `data/faq.ts`
- **Terms & conditions** → `data/terms.ts`

---

## Deployment

The project is ready to deploy on [Vercel](https://vercel.com) (recommended) or any Node.js host.

On Vercel, add all variables from `.env.example` under **Project Settings → Environment Variables**. The build command (`npm run build`) handles sitemap generation automatically.

---

## Known TODOs

- [ ] Add real social media URLs in `data/company.ts`
- [ ] Add phone/WhatsApp number in `data/company.ts`
- [ ] Complete lighting equipment inventory in `data/equipment.ts`
- [ ] Replace placeholder testimonials with real client quotes in `data/testimonials.ts`
- [ ] Complete remaining portfolio entries in `data/portfolio.ts`
- [ ] Add 5th team member details in `data/team.ts`
- [ ] Replace placeholder portfolio images with real event photos
