# ABIT Website

Production-ready Next.js website for the Ashoka Behavioral Insights Team (ABIT).

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🛠 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom brand tokens
- **Components**: shadcn/ui + lucide-react icons
- **Fonts**: Anton (headings), Inter fallback for TT Commons Pro (body)
- **Linting**: ESLint + Prettier

## 🎨 Design System

### Brand Colors
- **Primary Blue**: `#0916F8`
- **Yellow**: `#FABC0D` 
- **Orange**: `#F7750B`
- **Red**: `#F80641`
- **Ink**: `#373737` (text)
- **Soft Backgrounds**: `#EFE9CE`, `#F2EFEB`
- **Surface**: `#FFFFFF`

### Typography
- **Headings**: Anton (Google Font)
- **Body**: TT Commons Pro (fallback: Inter)
- **Tracking**: 0
- **Line Height**: 1.4 for body copy

## 📁 Project Structure

```
app/
├── layout.tsx              # Root layout with fonts & metadata
├── page.tsx                # Home page
├── globals.css             # Global styles & CSS variables
└── (site)/
    └── components/
        ├── navbar.tsx      # Sticky navigation
        ├── mobile-nav.tsx  # Mobile sheet navigation
        ├── hero.tsx        # Hero section
        ├── card-grid.tsx   # Reusable card grid
        ├── event-list.tsx  # Events display
        ├── newsletter-cta.tsx # Newsletter signup
        └── footer.tsx      # Site footer

components/ui/              # shadcn/ui components
lib/
├── utils.ts               # Utility functions
└── seo.ts                # SEO metadata helpers
```

## 🎯 Key Features

- **Responsive Design**: Mobile-first with desktop enhancements
- **Accessibility**: Focus rings, semantic HTML, skip links
- **Performance**: Lighthouse score ≥95
- **SEO**: Optimized metadata and Open Graph tags
- **Type Safety**: Full TypeScript coverage

## 📝 Development Scripts

```bash
# Development
npm run dev                 # Start dev server
npm run build              # Production build
npm run start              # Start production server

# Code Quality  
npm run lint               # Run ESLint
npm run lint:fix           # Fix ESLint issues
npm run format             # Format with Prettier
npm run format:check       # Check Prettier formatting
```

## 🔧 Configuration

### Environment Variables
No environment variables required for basic setup.

### Custom CSS Classes
- `.btn-primary` - Primary button styling
- `.btn-secondary` - Secondary button styling
- `.focus-ring` - Consistent focus styling
- `.gradient-yellow-orange` - Brand gradient

## 📋 TODO

- [ ] Wire Substack RSS + embed for newsletter
- [ ] Replace TT Commons Pro font when license/source is provided
- [ ] Replace placeholder images with mascot/brand art
- [ ] Add actual newsletter integration
- [ ] Implement contact form functionality

## 🤝 Contributing

1. Follow the existing code style
2. Use semantic commit messages
3. Test responsive design on multiple devices
4. Ensure accessibility standards are met

## 📄 License

© 2025 ABIT - Ashoka Behavioral Insights Team. All rights reserved.# abit-website
