# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern photography portfolio website for "Škljoc Foto" - a photographer specializing in children's birthday parties and portrait photography in Belgrade, Serbia. The website is built with Astro, Tailwind CSS, and PhotoSwipe for optimal performance and developer experience.

## Architecture

### Core Structure
- **Astro Pages**: Component-based pages in `src/pages/` (index, portfolio, about, contact)
- **Tailwind CSS**: Utility-first CSS with custom color palette and typography
- **Reusable Components**: Modular Astro components in `src/components/`
- **Static Generation**: Astro builds to static HTML/CSS/JS for optimal performance
- **TypeScript Support**: Type-safe props and interfaces

### Key Components

**Layout Components** (`src/components/layout/`):
- `BaseLayout.astro`: Main layout with SEO meta tags and structured data
- `Header.astro`: Responsive navigation with mobile menu
- `Footer.astro`: Site footer with social links

**UI Components** (`src/components/ui/`):
- `GalleryItem.astro`: Individual gallery items with PhotoSwipe integration
- `CategoryTabs.astro`: Gallery filtering tabs
- `ContactForm.astro`: Contact form with client-side validation
- `PackageSelector.astro`: Service package tabs
- `Button.astro`: Reusable button with variants

## Development

### Running the Site Locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev
# or use Makefile
make dev

# Build for production
npm run build
# or
make build

# Preview production build
npm run preview
# or
make preview
```

### Testing Responsive Design
- Test at Tailwind breakpoints: sm (640px), md (768px), lg (1024px)
- Mobile menu activates below md breakpoint
- Gallery grid adjusts columns based on viewport

## Important Considerations

### Third-party Dependencies
The site uses these CDN-loaded libraries:
- **PhotoSwipe**: Gallery lightbox functionality (portfolio page)
- **Lightbox2**: Alternative lightbox (loaded but may not be actively used)
- **Justified Gallery**: Gallery layout library
- **Font Awesome**: Icons throughout the site
- **Google Fonts**: Playfair Display and Montserrat

### SEO & Metadata
- Each page has Serbian language (`lang="sr"`) declaration
- Structured data (JSON-LD) for LocalBusiness and ImageGallery
- Meta descriptions optimized for Serbian market
- Keywords targeting Belgrade photography services

### Color Scheme (defined in `css/style.css`)
```css
--primary-color: #f9e8ce;    /* Warm beige */
--secondary-color: #d49f91;  /* Dusty rose */
--accent-color: #c08a7d;     /* Muted terracotta */
--text-color: #3e3230;       /* Dark brown */
--light-text: #7e6966;       /* Light brown */
```

### Image Organization
Images are organized in subdirectories:
- `/images/portraits/` - Portrait photography
- `/images/children/` - Children's events
- `/images/artistic/` - Artistic photography
- Placeholder files currently exist (`.html` files in image directories should be replaced with actual images)

## Browser Automation Configuration

The `.claude/settings.local.json` file includes permissions for Puppeteer browser automation, useful for:
- Testing the live site
- Capturing screenshots
- Automated testing of gallery interactions
- Form submission testing

## Common Tasks

### Adding New Portfolio Items
1. Add image to appropriate `/images/` subdirectory
2. Edit `portfolio.html` - add new `.gallery-item` with proper `data-category`
3. Include PhotoSwipe data attributes for lightbox functionality

### Updating Contact Information
- Phone/email: Update in header/footer sections across all HTML files
- Social media links: Modify icon links in navigation/footer
- Business hours: Update JSON-LD structured data in `index.html`

### Modifying Gallery Categories
1. Update category tabs in `portfolio.html`
2. Ensure gallery items have matching `data-category` attributes
3. No JavaScript changes needed - filtering is data-attribute based