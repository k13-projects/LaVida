# La Vida San Diego

A modern, responsive one-page website for La Vida San Diego - a healthy food restaurant bringing fresh, feel-good food to sunny San Diego.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Accessible component library
- **Embla Carousel** - Touch-friendly carousel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd LaVida

# Install dependencies
npm install
```

### Development

```bash
# Start development server (port 8080)
npm run dev
```

### Production Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── common/          # Shared components
│   │   ├── OptimizedImage.tsx
│   │   └── SectionDivider.tsx
│   ├── layout/          # Layout components
│   │   └── Navbar.tsx
│   ├── sections/        # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Menu.tsx
│   │   ├── Locations.tsx
│   │   ├── Catering.tsx
│   │   ├── OrderOnline.tsx
│   │   ├── Instagram.tsx
│   │   └── Footer.tsx
│   └── ui/              # shadcn/ui components
├── data/                # Static data
│   ├── heroSlides.ts
│   ├── menuItems.ts
│   └── locations.ts
├── hooks/               # Custom React hooks
├── lib/                 # Utilities
├── pages/               # Page components
└── test/                # Test files

public/
└── images/
    ├── hero/            # Hero carousel images
    ├── menu/            # Menu gallery images
    ├── about/           # About section images
    └── logo/            # Logo variants
```

## Brand Guidelines

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Olive Green | #9F9D58 | Primary brand color |
| Forest Green | #535A3D | Dark accents |
| Light Peach | #FEBDBA | Secondary/backgrounds |
| Coral | #F28383 | Accent color |
| Cream | #F4E1C1 | Neutral backgrounds |
| Off-white | #FFF6F0 | Page background |

### Typography

- **Font**: Montserrat (Google Fonts)
- **Headings**: Weight 700 (Bold)
- **Body**: Weight 400 (Regular)

## Features

- Responsive design (mobile, tablet, desktop)
- Auto-advancing hero carousel with 5 slides
- Lazy-loaded images for performance
- Smooth scroll navigation
- Interactive food gallery with hover effects
- Location cards with map-style background
- Online ordering integration (Toast, Grubhub)
- Instagram follow section

## Performance

The website is optimized for fast loading:
- Lazy loading for below-fold images
- Optimized image assets
- Minimal JavaScript bundle
- CSS animations using transform/opacity

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests |

## Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages.

**Setup Steps:**

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under "Build and deployment", select **GitHub Actions** as the source
4. Push to the `main` branch to trigger automatic deployment

The site will be available at: `https://<username>.github.io/LaVida/`

**Custom Domain (Optional):**

1. In repository Settings > Pages, add your custom domain
2. Update `vite.config.ts` and change the base to `'/'`:
   ```ts
   base: mode === 'production' ? '/' : '/',
   ```
3. Add a `CNAME` file in the `public/` folder with your domain

### Other Platforms

The site can also be deployed to:
- Vercel
- Netlify
- AWS S3/CloudFront

```bash
# Build for production
npm run build

# Output is in dist/ directory
```

## License

Proprietary - La Vida San Diego
