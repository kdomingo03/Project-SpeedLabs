import { test, expect } from '@playwright/test';

test('Checkout flow completes successfully for standard_user', async ({ page }) => {
  // Start directly on Inventory page (already logged in)
  await page.goto('/inventory.html');

  // Debug pause – opens Playwright Inspector
  //await page.pause();

  // Verify we are on Inventory page
  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.locator('.inventory_list')).toBeVisible();

  // Add "Sauce Labs Backpack" to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Navigate to cart
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Proceed to checkout
  await page.locator('[data-test="checkout"]').click();

  // Fill checkout information
  await page.locator('[data-test="firstName"]').fill('Kobe');
  await page.locator('[data-test="lastName"]').fill('Clark');
  await page.locator('[data-test="postalCode"]').fill('1300');

  await page.locator('[data-test="continue"]').click();

  // Finish checkout
  await page.locator('[data-test="finish"]').click();

  // Assertion
  await expect(
    page.locator('[data-test="complete-header"]')
  ).toHaveText('Thank you for your order!');
});
