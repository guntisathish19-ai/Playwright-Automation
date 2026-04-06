// spec: tests/greenkart-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Shopping Cart Functionality', () => {
  test('Add single item to cart', async ({ page }) => {
    // Navigate to home page and note initial cart state (Items: 0, Price: 0)
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

    // Click ADD TO CART button for Brocolli (₹120)
    await page.getByRole('button', { name: 'ADD TO CART' }).first().click();

    // Verify cart counter shows Items: 1 and Price: 120
    await expect(page.locator('.cart-count')).toContainText('1');

    // Click Cart link to view cart contents
    await page.getByRole('link', { name: 'Cart' }).click();

    // Verify cart displays Brocolli - 1 Kg product
    await expect(page.getByRole('heading', { name: 'Brocolli - 1 Kg' })).toBeVisible();

    // Verify remove button is visible for the item
    await expect(page.getByRole('link', { name: '×' })).toBeVisible();
  });
});
