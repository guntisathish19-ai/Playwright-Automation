const {test, expect} = require('@playwright/test');

test('dropdowns and radio buttons', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const documentlink = await page.locator("[href*='documents-request']"); //blinking text
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("select.form-control").selectOption("Consultant");
    await page.locator("span.radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    //assertion
    console.log(await page.locator("span.radiotextsty").last().isChecked());
     await expect(page.locator("span.radiotextsty").last()).toBeChecked();
    //termsandconditions
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    //console.log(await page.locator("#terms").isChecked());
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentlink).toHaveAttribute("class", "blinkingText");

    await page.pause();

});