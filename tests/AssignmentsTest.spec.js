const {test, expect} = require('@playwright/test');

test('logging in assignment', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    //logging in
    await page.locator('#userEmail').fill("testmail2026@gmail.com");
    await page.locator('#userPassword').fill("Test@123");
    await page.locator("[value='Login']").click();
    //assertion for succesfull login
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const text = await page.locator("button.btn.btn-custom").first().textContent();
    const homeText = text.trim();
    console.log(homeText);
    //await expect(page.locator("button.btn.btn-custom").first()).toContainText(" HOME ");
    await expect(homeText).toBe("HOME");
    const allTitles = await page.locator(".card-body b").allTextContents();
    console.log(await page.locator(".card-body b").first().textContent());
    console.log(allTitles);

});

