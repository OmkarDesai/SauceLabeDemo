// playwright.config.js
module.exports = {
    use: {
      headless: true,
      viewport: { width: 1280, height: 720 },
      actionTimeout: 0,
      baseURL: 'https://www.saucedemo.com/',
      ignoreHTTPSErrors: true,
      video: 'retain-on-failure',
      screenshot: 'only-on-failure',
      trace: 'on-first-retry',
    },
    projects: [
      {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] },
      },
      {
        name: 'firefox',
        use: { ...devices['Desktop Firefox'] },
      },
      {
        name: 'webkit',
        use: { ...devices['Desktop Safari'] },
      },
    ],
    reporter: [
        ['list'], // List reporter for console output
        ['html', { outputFolder: 'test-results', open: 'never' }] // HTML reporter
      ],
  };
  