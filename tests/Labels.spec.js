const {test, expect} = require('@playwright/test')

test('Playwright special locators', async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Student").click();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("Test@123");
    await page.getByRole("[type='button']").click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("[type='button']").click();
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
    await page.pause();
});