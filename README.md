# Škljoc Photo

A modern photography portfolio website built with **Astro**, **Tailwind CSS**, and **PhotoSwipe** for Škljoc Photo by Dragana Korhner.

## 🚀 Technology Stack

- **[Astro](https://astro.build/)** - Static Site Generator with component-based architecture
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[PhotoSwipe](https://photoswipe.com/)** - JavaScript image gallery with mobile touch gestures
- **TypeScript** - Type safety and better developer experience

## 📁 Project Structure

```
.
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── BaseLayout.astro    # Main layout with SEO
│   │   │   ├── Header.astro        # Navigation header
│   │   │   └── Footer.astro        # Site footer
│   │   └── ui/
│   │       ├── Button.astro        # Reusable button component
│   │       ├── CategoryTabs.astro  # Gallery filtering tabs
│   │       ├── ContactForm.astro   # Contact form with validation
│   │       ├── GalleryItem.astro   # Gallery image component
│   │       └── PackageSelector.astro # Service package selector
│   ├── pages/
│   │   ├── index.astro     # Homepage
│   │   ├── portfolio.astro # Gallery with PhotoSwipe
│   │   ├── about.astro     # About page
│   │   └── contact.astro   # Contact page
│   └── styles/
│       └── global.css      # Global styles and Tailwind directives
├── public/
│   └── images/            # All image assets
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind configuration
├── Makefile               # Build automation
└── package.json           # Dependencies and scripts
```

## 🎨 Design System

### Colors
- **Primary**: `#f9e8ce` - Warm beige
- **Secondary**: `#d49f91` - Dusty rose
- **Accent**: `#c08a7d` - Muted terracotta
- **Text Dark**: `#3e3230` - Dark brown
- **Text Light**: `#7e6966` - Light brown

### Fonts
- **Headings**: Playfair Display (serif)
- **Body**: Montserrat (sans-serif)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌟 Features

### Component-Based Architecture
- Reusable Astro components for consistent UI
- Type-safe props with TypeScript interfaces
- Modular structure for easy maintenance

### Performance Optimizations
- Static site generation for fast loading
- Optimized images with lazy loading
- Minimal JavaScript bundle with PhotoSwipe on-demand
- Tailwind CSS purging unused styles

### SEO & Accessibility
- Structured data (JSON-LD) for better search visibility
- Open Graph and Twitter Card meta tags
- Semantic HTML structure
- ARIA labels for interactive elements
- Serbian language support (`lang="sr"`)

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Hamburger menu for mobile navigation
- Responsive image galleries
- Touch-friendly PhotoSwipe lightbox

## 🔧 Development

### Contact Form
The site uses Formspree to handle contact form submissions. To configure this:

1. Set up a Formspree account and create a form
2. Get your form ID
3. Replace `your-form-id` in `src/components/ui/ContactForm.astro` with your actual ID
4. See `FORMSPREE-SETUP.md` for detailed setup instructions

### Adding New Pages
Create a new `.astro` file in `src/pages/`:
```astro
---
import BaseLayout from '@components/layout/BaseLayout.astro';
---

<BaseLayout title="Page Title">
  <!-- Page content -->
</BaseLayout>
```

### Creating Components
Add new components to `src/components/ui/`:
```astro
---
export interface Props {
  // Define component props
}

const { /* props */ } = Astro.props;
---

<!-- Component markup -->
```

### Customizing Styles
- Edit Tailwind config in `tailwind.config.mjs`
- Add global styles in `src/styles/global.css`
- Use Tailwind utilities directly in components

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS/Android)

## 🚀 Deployment

Build the project and deploy the `dist/` folder to any static hosting service:

```bash
npm run build
```

Compatible with:
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- Any static file host

## 📄 License

© 2025 Škljoc Foto by Dragana Korhner. All rights reserved.