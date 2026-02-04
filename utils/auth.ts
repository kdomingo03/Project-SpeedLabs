import { chromium } from '@playwright/test';

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  // Inject auth cookie BEFORE navigation
  await context.addCookies([
    {
      name: 'session-username',
      value: 'standard_user',
      domain: 'www.saucedemo.com',
      path: '/',
    },
  ]);

  // Save storage state
  await context.storageState({
    path: 'storage/standard_user.json',
  });

  await browser.close();
}

export default globalSetup;
