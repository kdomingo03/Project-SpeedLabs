import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000, // 30 seconds per test
  retries: 1,
  use: {
    baseURL: 'https://www.saucedemo.com/',
    storageState: 'storage/standard_user.json',
    headless: true, 
	video: 'on',
  },
  globalSetup: require.resolve('./utils/auth'),
});
