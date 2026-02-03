import { test, expect } from '@playwright/test';

test('Backpack Add to Cart button changes state and color', async ({ page }) => {
  // Start logged in on Inventory page
  await page.goto('/inventory.html');

  const backpackButton = page.locator(
    '[data-test="add-to-cart-sauce-labs-backpack"]'
  );

  // Verify initial state
  await expect(backpackButton).toBeVisible();
  await expect(backpackButton).toHaveText('Add to cart');

  // Click Add to Cart
  await backpackButton.click();

  // Button should now be "Remove"
  const removeButton = page.locator(
    '[data-test="remove-sauce-labs-backpack"]'
  );

  await expect(removeButton).toBeVisible();
  await expect(removeButton).toHaveText('Remove');

  // Get computed text color
  const textColor = await removeButton.evaluate(el =>
    window.getComputedStyle(el).color
  );

  // Assert SauceDemo red color
  expect(textColor).toBe('rgb(226, 35, 26)');
  
  // Debug pause – opens Playwright Inspector
  //await page.pause();
});
