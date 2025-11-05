# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
npm run dev                 # Start development server
npm run build              # Production build  
npm run start              # Start production server

# Code Quality
npm run lint               # Run ESLint
npm run lint:fix           # Fix ESLint issues
npm run format             # Format with Prettier
npm run format:check       # Check Prettier formatting
```

## Architecture Overview

This is a **Next.js 14+ App Router** website for the Ashoka Behavioral Insights Team (ABIT). The site serves as an informational showcase with no CTAs or interactive elements - purely presentational.

### Key Architectural Decisions

**Layout Structure**: Uses a three-part layout (Navbar → Main → Footer) with `flex flex-col` on the body. The navbar has a distinctive design with:
- Navbar background: `#EFE9CE` (warmer beige)
- Rest of site background: `#F2EFEB` (cooler beige)  
- Yellow divider: `#FABC0D` separating navbar from content

**Component Organization**: All site-specific components are in `app/(site)/components/` while reusable UI components from shadcn/ui are in `components/ui/`. The main page (`app/page.tsx`) only contains the Hero component - all CTAs and card grids were intentionally removed.

**Brand System Integration**: The design system is deeply integrated through:
- CSS variables in `globals.css` defining the exact ABIT brand colors
- Tailwind config extending the theme with `abit.*` color utilities  
- Custom CSS classes (`.btn-primary`, `.btn-secondary`) using brand colors
- Typography with Anton for headings and Inter as fallback for TT Commons Pro

**Image Handling**: Campus photography is handled through Next.js `Image` component with proper optimization. Real Ashoka University images replace placeholders in the hero section with a sophisticated grid layout.

### Critical Implementation Details

**Font Configuration**: Fonts are loaded via `next/font/google` in the root layout with CSS variables. Inter serves as fallback for the unavailable TT Commons Pro license.

**Color System**: Brand colors are defined as CSS custom properties and referenced both directly and through Tailwind utilities. The site background uses forced `!important` declarations to ensure consistent `#F2EFEB` throughout.

**Navigation**: Only three tabs in the navbar (Publications, Collaborations, Research) positioned on the right side using a flex spacer. Mobile navigation uses shadcn/ui Sheet component.

**Responsive Design**: Mobile-first approach with specific breakpoints. Hero images use different grid layouts and sizing across devices.

### Style Guidelines

- Always use exact hex colors for ABIT brand (`#0916F8`, `#FABC0D`, `#F7750B`, `#F80641`, etc.)
- Maintain the informational-only nature - no CTAs or conversion elements
- Keep the elegant, minimal aesthetic with clean image displays
- Use the established component patterns for consistency