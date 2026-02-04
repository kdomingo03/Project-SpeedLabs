import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],

  use: {
    baseURL: 'https://www.saucedemo.com/',
    storageState: 'storage/standard_user.json',
    headless: true,
    video: 'on',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },

  globalSetup: require.resolve('./utils/auth'),
});
