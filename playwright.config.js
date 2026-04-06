// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { worker } from 'node:cluster';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  retries: 2,
  workers: 5,
  /* Run tests in files in parallel */
  timeout: 40*1000,
  expect:{
    timeout: 50*1000,
  },
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
  
    browserName: 'chromium',
    headless: false,
    args: ['--start-maximized'],
    screenshot: 'on',
    trace: 'on' //off, on,retain-on-, only-on-failure

  },

  /* Configure projects for major browsers */
  
});
module.exports=config

