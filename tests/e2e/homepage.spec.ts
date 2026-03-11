import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('hero section renders with heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Zdravo/i })).toBeVisible();
  });

  test('about section has CTA buttons', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Portfolio' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Kontakt' }).first()).toBeVisible();
  });

  test('services section renders', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /moje usluge/i })).toBeVisible();
  });

  test('featured work shows 3 gallery images', async ({ page }) => {
    const featuredImages = page.locator('section .group img');
    await expect(featuredImages).toHaveCount(3);

    for (const img of await featuredImages.all()) {
      await expect(img).toHaveAttribute('src', /.+/);
    }
  });

  test('CTA section links to contact page', async ({ page }) => {
    const ctaSection = page.locator('section').filter({ hasText: /sačuvamo.*trenutke/i });
    const ctaLink = ctaSection.getByRole('link', { name: /zakažite/i });
    await expect(ctaLink).toBeVisible();
    await expect(ctaLink).toHaveAttribute('href', '/contact');
  });
});
