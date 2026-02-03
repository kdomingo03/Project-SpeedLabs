import { test, expect, devices } from '@playwright/test';

// Use iPhone 12 viewport for the test
test.use({
  ...devices['iPhone 12'],
});

test('Checkout flow works correctly on mobile viewport', async ({ page }) => {
  // 1️⃣ Start logged in on Inventory page
  await page.goto('/inventory.html');

  // Verify inventory is visible
  await expect(page.locator('.inventory_list')).toBeVisible();

  // 2️⃣ Add "Sauce Labs Backpack" to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // 3️⃣ Navigate to cart
  await page.locator('[data-test="shopping-cart-link"]').click();

  // 4️⃣ Proceed to checkout
  await page.locator('[data-test="checkout"]').click();

  // 5️⃣ Fill in checkout information
  await page.locator('[data-test="firstName"]').fill('Mark');
  await page.locator('[data-test="lastName"]').fill('Johnson');
  await page.locator('[data-test="postalCode"]').fill('1500');

  await page.locator('[data-test="continue"]').click();

  // 6️⃣ Finish checkout
  await page.locator('[data-test="finish"]').click();

  // 7️⃣ Assertion: Verify "Thank you for your order" message
  await expect(
    page.locator('[data-test="complete-header"]')
  ).toHaveText('Thank you for your order!');
});
