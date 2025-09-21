# spec.md — ABIT Website Scaffold

## Project Overview
The Ashoka Behavioral Insights Team (ABIT) needs a clean, mobile-first website to showcase its work. This spec covers the scaffold for the **Home page** and the **global Navbar**, built with **Next.js (App Router) + TypeScript + Tailwind + shadcn/ui**.  
Design must strictly follow the ABIT brandkit for typography, colors, and layout.

---

## Goals
- Ship a production-ready scaffold of the Home page and Navbar.
- Ensure branding is consistent (fonts, colors, shapes, spacing).
- Make content editable via simple MDX in the future (not needed for scaffold).
- Deployable to Vercel out of the box.

---

## Tech Stack
- Framework: Next.js 14 (App Router) + TypeScript
- Styling: TailwindCSS (extended with ABIT theme tokens)
- UI Library: shadcn/ui
- Icons: lucide-react
- Fonts: Anton (headings), TT Commons Pro (body → Inter fallback), Zuume Rough Bold for accents (optional)

---

## Brand Tokens
### Colors
- Blue (primary): `#0916F8`
- Yellow: `#FABC0D`
- Orange: `#F7750B`
- Red: `#F80641`
- Ink (text): `#373737`
- Soft bg 1: `#EFE9CE`
- Soft bg 2: `#F2EFEB`
- Pink soft: `#FFD6CE`
- White: `#FFFFFF`

### Typography
- Headings: Anton (Google Font)
- Body: TT Commons Pro → Inter fallback
- Display accents: Zuume Rough Bold (if licensing permits)

### Shapes & Layout
- Rounded 2xl
- Generous whitespace
- Soft backgrounds for section separation
- Subtle shadows on cards

---

## Information Architecture (Scaffold Scope)
**Navbar (global, sticky):**
- Links: Home, About, The Nudgelet, Research Lab, Newsletter, Events, Consulting, Toolkits, Shop, Contact
- Right CTA: “Join ABIT” (primary button)
- Mobile: hamburger → Sheet menu

**Home Page Sections (scaffold placeholders):**
1. **Hero**  
   - H1: “Ashoka Behavioral Insights Team” (Anton, bold)  
   - Subhead: “Student-led research, design, and experiments at Ashoka University.”  
   - CTAs: Primary “Read The Nudgelet”, Secondary “Explore Research”  
   - Background: soft gradient (yellow → orange)

2. **Highlights (CardGrid)**  
   - 3 cards: The Nudgelet / Research Lab / Newsletter  

3. **Upcoming Events (EventList)**  
   - 2 placeholder events with date badges  

4. **Toolkits (CardGrid)**  
   - 3 placeholder cards  

5. **Newsletter CTA**  
   - Substack embed placeholder

6. **Footer**  
   - Minimal, © ABIT, links + socials

---

## Components
- `Navbar.tsx` (desktop + mobile Sheet)
- `Hero.tsx` (props: title, subtitle, CTAs, background gradient)
- `CardGrid.tsx` (responsive, accepts title/href/description)
- `EventList.tsx` (timeline style, date badges)
- `NewsletterCta.tsx` (embed placeholder)
- `Footer.tsx` (minimal links)

---

## Acceptance Criteria
- ✅ Navbar is sticky, glassy, responsive, with working mobile menu
- ✅ Home page sections render in correct order with placeholder content
- ✅ Fonts and colors follow brandkit
- ✅ Lighthouse mobile ≥95 (performance, a11y, best practices, SEO)
- ✅ Code is clean, typed, production-ready

---

## Stretch Goals (Not Required in Scaffold)
- Substack RSS feed integration
- Contact form API route
- MDX content system
- Google Drive embed utilities