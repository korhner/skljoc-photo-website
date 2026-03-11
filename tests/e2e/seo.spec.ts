import { test, expect } from '@playwright/test';

const pages = [
  { path: '/', titleContains: 'Dragana Korhner' },
  { path: '/portfolio', titleContains: 'Portfolio' },
  { path: '/contact', titleContains: 'Kontakt' },
];

test.describe('SEO and meta tags', () => {
  for (const pg of pages) {
    test(`${pg.path} has correct title`, async ({ page }) => {
      await page.goto(pg.path);
      const title = await page.title();
      expect(title).toContain(pg.titleContains);
    });

    test(`${pg.path} has meta description`, async ({ page }) => {
      await page.goto(pg.path);
      const description = page.locator('meta[name="description"]');
      await expect(description).toHaveAttribute('content', /.+/);
    });

    test(`${pg.path} has lang="sr" attribute`, async ({ page }) => {
      await page.goto(pg.path);
      await expect(page.locator('html')).toHaveAttribute('lang', 'sr');
    });

    test(`${pg.path} has Open Graph tags`, async ({ page }) => {
      await page.goto(pg.path);
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/);
      await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /.+/);
    });
  }

  test('homepage has JSON-LD structured data', async ({ page }) => {
    await page.goto('/');
    const jsonLd = page.locator('script[type="application/ld+json"]');
    const count = await jsonLd.count();
    expect(count).toBeGreaterThanOrEqual(1);

    const content = await jsonLd.first().textContent();
    const data = JSON.parse(content!);
    expect(data['@type']).toBe('LocalBusiness');
  });

  test('portfolio page has ImageGallery structured data', async ({ page }) => {
    await page.goto('/portfolio');
    const jsonLd = page.locator('script[type="application/ld+json"]');
    const content = await jsonLd.first().textContent();
    const data = JSON.parse(content!);
    expect(data['@type']).toBe('ImageGallery');
  });

  test('all pages have canonical URL', async ({ page }) => {
    for (const pg of pages) {
      await page.goto(pg.path);
      const canonical = page.locator('link[rel="canonical"]');
      await expect(canonical).toHaveAttribute('href', /.+/);
    }
  });
});
