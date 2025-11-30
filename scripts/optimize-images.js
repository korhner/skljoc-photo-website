import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Get the directory name for the current module (ESM doesn't have __dirname)
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

// Define directories
const sourceDir = path.join(projectRoot, 'public/images/photos');
const outputDir = path.join(projectRoot, 'public/images/optimized');

// Create the optimized directory if it doesn't exist
async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (error) {
    console.error(`Error creating directory ${dir}:`, error);
  }
}

// Function to optimize a single image
async function optimizeImage(sourcePath, outputPath, category) {
  try {
    // Create category subdirectory if needed
    const categoryDir = path.join(outputDir, category);
    await ensureDir(categoryDir);

    // Get image info
    const imageInfo = await sharp(sourcePath).metadata();

    // Calculate size to keep aspect ratio but limit max dimension to 1200px
    const maxDimension = 1200;
    let width = imageInfo.width;
    let height = imageInfo.height;

    if (width > height && width > maxDimension) {
      height = Math.round((height * maxDimension) / width);
      width = maxDimension;
    } else if (height > maxDimension) {
      width = Math.round((width * maxDimension) / height);
      height = maxDimension;
    }

    // Process the image - convert to WebP with quality setting to keep under 300KB
    await sharp(sourcePath)
      .resize(width, height)
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`Optimized: ${path.basename(sourcePath)} → ${path.basename(outputPath)}`);

    // Get file sizes for comparison
    const originalStats = await fs.stat(sourcePath);
    const optimizedStats = await fs.stat(outputPath);
    const originalSize = (originalStats.size / 1024 / 1024).toFixed(2);
    const optimizedSize = (optimizedStats.size / 1024 / 1024).toFixed(2);
    const reductionPercent = ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(2);

    console.log(`  Size reduced: ${originalSize} MB → ${optimizedSize} MB (${reductionPercent}% smaller)`);

    return {
      filename: path.basename(sourcePath, path.extname(sourcePath)) + '.webp',
      path: outputPath,
      category,
      width,
      height,
      originalSize: originalStats.size,
      optimizedSize: optimizedStats.size
    };
  } catch (error) {
    console.error(`Error processing ${sourcePath}:`, error);
    return null;
  }
}

// Process all images in the photos directory
async function processDirectory() {
  try {
    // Ensure output directory exists
    await ensureDir(outputDir);

    const categories = await fs.readdir(sourceDir);
    const optimizedImages = [];

    for (const category of categories) {
      const categoryPath = path.join(sourceDir, category);
      const stats = await fs.stat(categoryPath);

      if (stats.isDirectory()) {
        // Process the category directory
        const files = await fs.readdir(categoryPath);

        for (const file of files) {
          if (file.match(/\.(jpe?g|png)$/i)) {
            const sourcePath = path.join(categoryPath, file);
            const outputFilename = path.basename(file, path.extname(file)) + '.webp';
            const outputPath = path.join(outputDir, category, outputFilename);

            const result = await optimizeImage(sourcePath, outputPath, category);
            if (result) {
              optimizedImages.push(result);
            }
          }
        }
      }
    }

    // Create a map for the portfolio data
    const portfolioDataPath = path.join(projectRoot, 'src/data/optimized-images.js');
    const portfolioData = generatePortfolioData(optimizedImages);
    await fs.writeFile(portfolioDataPath, portfolioData, 'utf8');
    console.log(`Portfolio data file created at ${portfolioDataPath}`);

    // Print summary
    console.log('\nOptimization Summary:');
    console.log(`Total images optimized: ${optimizedImages.length}`);

    const totalOriginalSize = optimizedImages.reduce((sum, img) => sum + img.originalSize, 0);
    const totalOptimizedSize = optimizedImages.reduce((sum, img) => sum + img.optimizedSize, 0);
    const totalReductionPercent = ((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(2);

    console.log(`Total size before: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Total size after: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Total reduction: ${totalReductionPercent}%`);
  } catch (error) {
    console.error('Error processing directories:', error);
  }
}

// Generate the portfolio data file
function generatePortfolioData(images) {
  // Create categories array
  const categories = [
    { id: 'all', label: 'Sve' },
    ...new Set(images.map(img => img.category))
  ].map(cat => {
    if (typeof cat === 'string') {
      return { id: cat, label: getCategoryLabel(cat) };
    }
    return cat;
  });

  // Create gallery items array
  const galleryItems = images.map(img => {
    const relativePath = `/images/optimized/${img.category}/${path.basename(img.path)}`;

    return {
      src: relativePath,
      alt: `${getCategoryLabel(img.category)} fotografija`,
      category: img.category,
      title: getRandomTitle(img.category),
      width: img.width,
      height: img.height
    };
  });

  // Generate the file content
  return `export const categories = ${JSON.stringify(categories, null, 2)};\n\nexport const optimizedGalleryItems = ${JSON.stringify(galleryItems, null, 2)};\n`;
}

// Helper function to get category label
function getCategoryLabel(category) {
  const labels = {
    'children': 'Rođendani',
    'family': 'Porodične slike',
    'social': 'Društvene mreže'
  };

  return labels[category] || category;
}

// Helper function to generate random titles for images
function getRandomTitle(category) {
  const titles = {
    'children': [
      'Radosni trenuci', 'Osmeh detinjstva', 'Radost igre', 'Dečije oduševljenje',
      'Trenutak igre', 'Radost druženja', 'Kreativni trenuci', 'Radost detinjstva',
      'Zabavne igre', 'Rođendanska proslava', 'Srećni trenuci', 'Vesela atmosfera',
      'Kreativni kutak', 'Radosna igra', 'Iskreni osmeh', 'Zabava sa prijateljima',
      'Rođendanski poklon', 'Radost proslava', 'Poseban trenutak', 'Rođendanska žurka'
    ],
    'family': [
      'Porodični trenuci', 'Porodična ljubav', 'Zagrljaj ljubavi', 'Porodična sreća',
      'Zajedničko vreme', 'Topli trenuci', 'Poseban dan', 'Porodični portret'
    ],
    'social': [
      'Svečani trenuci', 'Elegantni susreti', 'Zajednički trenuci', 'Svečano okupljanje',
      'Elegantni događaj', 'Nezaboravne proslave', 'Posebne prilike', 'Prijateljsko druženje',
      'Svečani momenti', 'Zabava sa prijateljima', 'Veselo druženje', 'Grupna fotografija'
    ]
  };

  const categoryTitles = titles[category] || titles['children'];
  const randomIndex = Math.floor(Math.random() * categoryTitles.length);
  return categoryTitles[randomIndex];
}

// Run the script
processDirectory().catch(console.error);