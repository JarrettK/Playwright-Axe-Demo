import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

/*
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/*
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  /* Directory with the test files. */
  testDir: './src/tests',
  
  /* Glob patterns or regular expressions that match test files. */
  // For example, ' **/todo-tests/*.spec.ts'. By default, Playwright Test runs .*(test|spec)\.(js|ts|mjs) files.
  testMatch: /.*(test|spec)\.(js|ts|mjs)/,
  
  /* Time in milliseconds given to each test. */
  timeout: 30 * 1000,

  /* 
   * Playwright Test uses expect library for test assertions. It extends it 
   * with the Playwright-specific matchers to achieve greater testing ergonomics.
   */
  expect: {
    /*
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  
  /* The maximum number of retry attempts per test.
   * Retry on CI : Local 
   */
  retries: 0, //process.env.CI ? 2 : 1,
  
  /* The maximum number of concurrent worker processes to use for parallelizing tests.
   * Opt out of parallel tests on CI.
   */
  workers: 1, //process.env.CI ? 1 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,

    /* 
     * Base URL to use in actions like `await page.goto('/')`. 
     * When using page.goto(url[, options]), page.route(url, handler[, options]), 
     * page.waitForURL(url[, options]), page.waitForRequest(urlOrPredicate[, options]), 
     * or page.waitForResponse(urlOrPredicate[, options]) it takes the base URL in 
     * consideration by using the URL() constructor for building the corresponding URL.
     */
    // baseURL: 'https://playwright.dev/',

    /* Whether to run browser in headless mode (no UI). */
    headless: false,

    /* Emulates 'prefers-colors-scheme' media feature. */
    colorScheme: 'dark',

    /* BrowserContexts provide a way to operate multiple independent browser sessions. */
    contextOptions: {
      /* 
       * It specified, enables strict selectors mode for this context. In the 
       * strict selectors mode all operations on selectors that imply single target 
       * DOM element will throw when more than one element matches the selector.
       */
      strictSelectors: true
    },

    /* Options for when the browser launches. */
    launchOptions:{
      /* 
       * Slows down Playwright operations by the specified amount of milliseconds. 
       * Useful so that you can see what is going on.
       */
      slowMo: 50,
    },

    /* Whether or not to enable JavaScript in the context. Defaults to true. */
    javaScriptEnabled: true,

    /* 
     * Playwright Test can record videos for your tests, controlled by the video option.
     * Video files will appear in the test output directory, typically test-results.
     */
    //video: 'retain-on-failure',

    /*
     * You can make Playwright Test capture screenshots for you - control it with the screenshot option.
     *
     */
    screenshot: 'only-on-failure',

    /* Retain trace of the test execution on failure. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
  },

  /* Playwright Test supports running multiple test projects at the same time. */
  projects: [
    /* Test against desktop viewports. */
    {
      name: 'chromium',
      use: {
        /* Name of the browser that will run the tests */
        browserName: 'chromium',
        /*
         * You can specify options separately instead of using predefined devices. 
         * There are also more options such as locale, geolocation, 
         * and timezone which can be configured.
         */
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        /* Name of the browser that will run the tests */
        browserName: 'firefox',
        /*
         * You can specify options separately instead of using predefined devices. 
         * There are also more options such as locale, geolocation, 
         * and timezone which can be configured.
         */
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        /* Name of the browser that will run the tests */
        browserName: 'webkit',
        /*
         * You can specify options separately instead of using predefined devices. 
         * There are also more options such as locale, geolocation, 
         * and timezone which can be configured.
         */
        ...devices['Desktop Safari'],
      },
    },

    /* Test against mobile viewports. */
    /*{
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },

    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 12'],
      },
    },*/

    /* Test against branded browsers. */
    /*{
      name: 'Microsoft Edge',
      use: {
        /* Browser channel to use. * /
        channel: 'msedge',
      },
    },

    {
      name: 'Google Chrome',
      use: {
        /* Browser channel to use. * /
        channel: 'chrome',
      },
    },*/
  ],

  /* The global test output directory folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};

export default config;
