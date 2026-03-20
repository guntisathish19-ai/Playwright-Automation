const {test, expect} = require('@playwright/test');

test('OPT verfication test', async ({page})=>{

    await page.goto("https://practice.expandtesting.com/otp-login",{waitUntil: 'domcontentloaded'});
    await page.waitForLoadState('networkidle');
    console.log(await page.title());
    await page.locator("#email").fill("practice@expandtesting.com")
    await page.getByRole("button", {name:"Send OTP Code"}).click();

    await page.locator("#otp").fill("214365")
    await page.getByRole("button", {name:"Verify OTP Code"}).click()

    expect(await page.locator("#flash")).toHaveText("You logged into a secure area!")


})