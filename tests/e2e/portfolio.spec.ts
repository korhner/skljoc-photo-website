import { test, expect } from '@playwright/test';

test.describe('Portfolio', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/portfolio');
  });

  test('page heading renders', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Portfolio', level: 1 })).toBeVisible();
  });

  test('gallery renders with images', async ({ page }) => {
    const gallery = page.locator('#gallery');
    await expect(gallery).toBeVisible();

    const items = gallery.locator('.gallery-item');
    const count = await items.count();
    expect(count).toBeGreaterThan(0);
  });

  test('category tabs are present and clickable', async ({ page }) => {
    const tabs = page.locator('.category-tab');
    const count = await tabs.count();
    expect(count).toBeGreaterThan(1);

    const firstTab = tabs.first();
    await expect(firstTab).toHaveClass(/active/);

    const secondTab = tabs.nth(1);
    await secondTab.click();
    await expect(secondTab).toHaveClass(/active/);
    await expect(firstTab).not.toHaveClass(/active/);
  });

  test('category filtering hides/shows items', async ({ page }) => {
    const allItems = page.locator('#gallery .gallery-item');
    const totalCount = await allItems.count();

    const secondTab = page.locator('.category-tab').nth(1);
    const category = await secondTab.getAttribute('data-category');
    await secondTab.click();

    const visibleItems = page.locator(`#gallery .gallery-item:not(.hidden)`);
    const filteredCount = await visibleItems.count();

    expect(filteredCount).toBeLessThanOrEqual(totalCount);
    expect(filteredCount).toBeGreaterThan(0);

    for (const item of await visibleItems.all()) {
      await expect(item).toHaveAttribute('data-category', category!);
    }
  });

  test('PhotoSwipe lightbox opens on image click', async ({ page }) => {
    const firstLink = page.locator('#gallery a.pswp-item').first();
    await firstLink.click();

    const lightbox = page.locator('.pswp.pswp--open');
    await expect(lightbox).toBeVisible({ timeout: 5000 });

    await expect(lightbox.getByRole('img')).toBeVisible();
  });
});
