import { test, expect } from '@playwright/test';

test.describe('Contact page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('page heading renders', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Kontakt', level: 1 })).toBeVisible();
  });

  test('contact form has all required fields', async ({ page }) => {
    const form = page.locator('#contactForm');
    await expect(form).toBeVisible();

    await expect(form.locator('#name')).toBeVisible();
    await expect(form.locator('#email')).toBeVisible();
    await expect(form.locator('#phone')).toBeVisible();
    await expect(form.locator('#service')).toBeVisible();
    await expect(form.locator('#message')).toBeVisible();
    await expect(form.getByRole('button', { name: /pošalji/i })).toBeVisible();
  });

  test('required fields have required attribute', async ({ page }) => {
    await expect(page.locator('#name')).toHaveAttribute('required', '');
    await expect(page.locator('#email')).toHaveAttribute('required', '');
    await expect(page.locator('#message')).toHaveAttribute('required', '');
  });

  test('phone field is optional', async ({ page }) => {
    const phone = page.locator('#phone');
    await expect(phone).not.toHaveAttribute('required', '');
  });

  test('contact info is displayed', async ({ page }) => {
    await expect(page.getByText('+381 62 661 892')).toBeVisible();
    await expect(page.getByText('dkorhner@gmail.com')).toBeVisible();
    await expect(page.getByText('Beograd, Srbija')).toBeVisible();
  });

  test('FAQ section renders', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /pitanja/i })).toBeVisible();
    const faqItems = page.locator('section').filter({ hasText: /pitanja/i }).locator('.bg-white.rounded-lg');
    const count = await faqItems.count();
    expect(count).toBeGreaterThanOrEqual(6);
  });
});
