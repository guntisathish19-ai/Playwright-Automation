// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { permission } from 'node:process';


const config = ({
  testDir: './tests',
  //retries: 1,
  workers: 3,
  timeout: 40 * 1000,
  expect: {
    timeout: 50 * 1000,
  },
  reporter: 'html',
  projects: [
    {
      name: 'safari',
      use: {

        browserName: 'webkit',
        headless: true,
        screenshot: 'on',
        trace: 'on',//off, on,retain-on-, only-on-failure
        //...devices['iPhone 11'],
        //ignoreHttpsErrors: true,
        permissions: ['geolocation'],
      },
    },
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        headless: false,
        args: ['--start-maximized'],
        screenshot: 'on',
        trace: 'on',//off, on, only-on-failure
        //viewport : {width:720, height:720}
        video: 'retain-on-fairlure', //on, off

      },
    }
  ]



});
module.exports = config

