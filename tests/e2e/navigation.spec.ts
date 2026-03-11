import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('logo links to homepage', async ({ page }) => {
    await page.goto('/portfolio');
    await page.click('a.logo');
    await expect(page).toHaveURL('/');
  });

  test('desktop nav links navigate to correct pages', async ({ page }) => {
    await page.goto('/');

    const navLinks = [
      { label: 'Portfolio', url: '/portfolio' },
      { label: 'Kontakt', url: '/contact' },
    ];

    for (const link of navLinks) {
      await page.goto('/');
      const nav = page.locator('ul.hidden.md\\:flex');
      await nav.getByRole('link', { name: link.label }).click();
      await expect(page).toHaveURL(new RegExp(link.url));
    }
  });

  test('mobile menu opens and closes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const mobileNav = page.locator('.nav-links');
    await expect(mobileNav).not.toHaveClass(/active/);

    await page.click('.menu-toggle');
    await expect(mobileNav).toHaveClass(/active/);

    await page.click('.menu-toggle');
    await expect(mobileNav).not.toHaveClass(/active/);
  });

  test('mobile menu links navigate correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    await page.click('.menu-toggle');
    const mobileNav = page.locator('.nav-links');
    await mobileNav.getByRole('link', { name: 'Portfolio' }).click();
    await expect(page).toHaveURL('/portfolio');
  });

  test('footer links are present', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer.getByRole('link', { name: 'Portfolio' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Kontakt' })).toBeVisible();
  });
});
