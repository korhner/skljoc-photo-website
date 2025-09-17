# Skljoc Photo by Dragana Korhner Website

A personal brand website for a photographer specializing in portrait photography and children's birthday parties with a minimalist, neutral aesthetic.

## Project Overview

This is a responsive photography portfolio website that includes:

- Homepage with featured works
- Portfolio gallery with filtering by category
- About page with services information
- Contact page with form and FAQ

## Features

- Mobile-responsive design optimized for all screen sizes
- Clean, minimalist aesthetic with a neutral color palette
- Image gallery with category filtering
- Contact form with validation
- Fully responsive navigation menu

## Getting Started

1. Replace placeholder images in the `images` directory with your own photography
2. Update personal information and text throughout the site
3. Customize colors and styling in CSS files if desired
4. Add your social media links in the navigation and footer
5. Deploy to your preferred hosting provider

## Customization

### Changing Colors

The color scheme is defined in the CSS variables in `css/style.css`. Update the following variables to change the color palette:

```css
:root {
    --primary-color: #f9e8ce;
    --secondary-color: #d49f91;
    --accent-color: #c08a7d;
    --text-color: #3e3230;
    --light-text: #7e6966;
}
```

### Adding Portfolio Items

To add new items to your portfolio gallery:

1. Add your images to the `images` directory
2. Edit the `portfolio.html` file
3. Add new `.gallery-item` elements with the appropriate `data-category` attribute
4. Update the image path and overlay information

### Contact Form Integration

The contact form is currently set up for demonstration purposes only. To make it functional:

1. Choose a form handling service (e.g., Formspree, Netlify Forms)
2. Update the form action in `contact.html`
3. Modify the form handling in `js/contact.js` as needed

## Directory Structure

```
skljoc-photo/
│
├── css/
│   ├── style.css        # Main styles
│   ├── portfolio.css    # Portfolio page styles
│   ├── about.css        # About page styles
│   └── contact.css      # Contact page styles
│
├── js/
│   ├── script.js        # Main JavaScript
│   ├── portfolio.js     # Portfolio filtering
│   └── contact.js       # Contact form handling
│
├── images/              # Images directory
│
├── index.html           # Homepage
├── portfolio.html       # Portfolio page
├── about.html           # About page
└── contact.html         # Contact page
```

## Browser Compatibility

This website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS/Android)