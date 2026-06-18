# AKSHAY OBULAPURAM — Portfolio

A cinematic, futuristic AI systems portfolio built with Next.js, TypeScript, Three.js, and Tailwind CSS.

---

## FILE STRUCTURE

```
akshay-portfolio/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   └── page.tsx                # Main page assembling all sections
│
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx     # Cinematic hero with particles + portrait
│   │   ├── AICore3D.tsx        # Interactive 3D AI core (Three.js / R3F)
│   │   ├── FeaturedProjects.tsx # Sentrix, Vektor, Atlas, CrispCV
│   │   ├── ExperimentalProjects.tsx # AnimeJutsuVision + live projects
│   │   ├── TechCapabilities.tsx # Interactive capability panels
│   │   ├── Experience.tsx      # Timeline experience + certification cards
│   │   └── Contact.tsx         # Minimal cinematic contact section
│   │
│   └── ui/
│       ├── Navbar.tsx          # Sticky nav with theme toggle + mobile menu
│       ├── ThemeProvider.tsx   # Dark/light theme context + localStorage
│       ├── CustomCursor.tsx    # Cursor with ring — auto-hides on touch
│       └── ScrollProgress.tsx  # Thin red progress bar at top
│
├── lib/
│   └── useReveal.ts            # IntersectionObserver scroll-reveal hook
│
├── styles/
│   └── globals.css             # All CSS variables, themes, typography utils
│
├── public/
│   ├── portrait.jpg            # ← ADD YOUR PORTRAIT IMAGE HERE
│   └── fonts/                  # ← ADD FONTS (see FONT SETUP below)
│       ├── MonumentExtended-Regular.otf
│       ├── MonumentExtended-Ultrabold.otf
│       ├── GeneralSans-Regular.otf
│       └── GeneralSans-Medium.otf
│
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
└── next.config.mjs
```

---

## QUICK START

```bash
# 1. Install dependencies
npm install

# 2. Add your portrait
# Place your portrait image as: public/portrait.jpg
# The image will auto-blend into the background using CSS masking

# 3. Add fonts (or skip — Google Fonts fallback is auto-loaded)
# Download from the links below and place in public/fonts/

# 4. Run dev server
npm run dev

# 5. Open http://localhost:3000
```

---

## FONT SETUP

Cabinet Grotesk and JetBrains Mono load automatically from Google Fonts.

For Monument Extended and General Sans (premium):

**Monument Extended**
Download from: https://pangrampangram.com/products/monument-extended
Place at: `public/fonts/MonumentExtended-Regular.otf`
         `public/fonts/MonumentExtended-Ultrabold.otf`

**General Sans**
Download from: https://pangrampangram.com/products/general-sans
Place at: `public/fonts/GeneralSans-Regular.otf`
         `public/fonts/GeneralSans-Medium.otf`

If fonts aren't placed, Cabinet Grotesk is used as fallback — still looks great.

---

## PORTRAIT IMAGE

Place your portrait at `public/portrait.jpg`.

For best results:
- Dark/neutral background
- Chest-up framing
- High contrast lighting
- The CSS mask will automatically feather/blend the edges into the background
- Works in both dark and light themes

---

## THEME SYSTEM

Dark theme (default): Matte black + graphite + crimson red
Light theme: Warm ivory + gunmetal + deep red

Toggle is in the Navbar (top right). Preference is saved to localStorage.

All CSS variables are in `styles/globals.css` — customize colors there.

---

## MOBILE

- Custom cursor is automatically hidden on touch devices
- 3D canvas is simplified (lower DPR on mobile)
- Particle count reduces on mobile (40 vs 80)
- Grid layouts collapse to single column
- All sections remain cinematic and premium

---

## DEPLOYMENT (VERCEL)

```bash
# Push to GitHub
git init && git add . && git commit -m "init"

# Deploy to Vercel
npx vercel
```

Or connect your GitHub repo to vercel.com — auto-deploys on push.

---

## CUSTOMIZATION QUICK GUIDE

| What to change | Where |
|---|---|
| Name / headline | `HeroSection.tsx` |
| Projects | `FeaturedProjects.tsx` — PROJECTS array |
| Capabilities | `TechCapabilities.tsx` — CAPABILITIES array |
| Experience | `Experience.tsx` — EXPERIENCE + CERTIFICATIONS arrays |
| Colors | `styles/globals.css` — `:root` and `[data-theme="light"]` |
| Links | `Contact.tsx` — LINKS array |
| 3D Core | `AICore3D.tsx` — CoreArtifact component |

---

## TECH STACK

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Three.js + React Three Fiber + Drei** (3D AI Core)
- **Framer Motion** (ready to use, imported in package.json)
- **CSS IntersectionObserver** (scroll reveals — no GSAP needed)
- **Vercel** (deployment)

---

Built for Akshay Obulapuram — AI Systems Engineer & Full Stack Developer.
