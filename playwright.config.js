const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 10000,
  expect: {
    timeout: 8000,
  },
  use: {
    headless: false,
    slowMo: 500,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
  ],
  reporter: [['html', { outputFolder: 'playwright-report' }]],
});
