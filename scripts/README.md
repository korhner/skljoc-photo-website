# Image Optimization

This folder contains scripts for optimizing images for the Škljoc Foto website.

## Optimize Images Script

The `optimize-images.js` script processes all images in the `/public/images/photos/` directory and creates optimized versions in the `/public/images/optimized/` directory. It also generates a data file with the optimized image information.

### How it works

1. The script scans the `/public/images/photos/` directory for images in each category subfolder
2. Each image is:
   - Resized to a maximum dimension of 1200px while maintaining aspect ratio
   - Converted to WebP format with quality=80 to keep file size under 300KB
   - Saved to a matching category folder in `/public/images/optimized/`
3. A data file is generated at `src/data/optimized-images.js` containing:
   - Categories array for filtering in the portfolio gallery
   - Gallery items array with paths to optimized images

### Usage

To run the image optimization:

```bash
npm run optimize-images
```

### Results

The script provides detailed information about each optimized image and a summary showing:
- Total images optimized
- Total size before optimization
- Total size after optimization
- Total size reduction percentage

In the initial run, image sizes were reduced from 564.16 MB to 7.54 MB (98.66% reduction).