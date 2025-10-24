# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static photography portfolio website for "Škljoc Foto" - a photographer specializing in children's birthday parties and portrait photography in Belgrade, Serbia. The website is built with vanilla HTML, CSS, and JavaScript without any build process or framework dependencies.

## Architecture

### Core Structure
- **Static HTML pages**: Each page is a standalone HTML file (`index.html`, `portfolio.html`, `about.html`, `contact.html`)
- **Modular CSS**: Separate CSS files for each page plus a shared `style.css` for common styles
- **Vanilla JavaScript**: Minimal JS for interactivity (mobile menu, gallery filtering, contact forms)
- **No build process**: Direct file serving, no compilation or bundling required

### Key Components

**Portfolio Gallery System** (`portfolio.html` + `js/portfolio.js`):
- Uses PhotoSwipe library for lightbox functionality (loaded via CDN)
- Category-based filtering with data attributes (`data-category`)
- Tabs for category selection: All, Portraits, Children, Artistic
- Fade animations for smooth transitions

**Navigation System**:
- Responsive mobile menu with hamburger toggle
- Active page highlighting in navigation
- Implemented in `js/script.js`

**Package Selector** (on homepage and about page):
- Tab-based package switcher for service offerings
- Dynamic content display based on selected package

## Development

### Running the Site Locally
```bash
# Using Python's built-in server
python3 -m http.server 8000

# Then open http://localhost:8000 in browser
```

### Testing Responsive Design
- Test at breakpoints: 768px (tablet), 480px (mobile)
- Mobile menu activates below 768px width
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