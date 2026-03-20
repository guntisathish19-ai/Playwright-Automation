const { test, expect } = require('@playwright/test');

test('more validations', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    /*await page.goto("https://chatgpt.com/");
    await page.goBack();
    await page.goForward();*/

    await expect(page.locator("[id='displayed-text']")).toBeVisible();
    await page.locator("[id='hide-textbox']").click()
    await expect(page.locator('#displayed-text')).toBeHidden();

    page.on('dialog', di => di.accept());
    await page.locator("#confirmbtn").click();
    page.on('alert', di => di.accept());
    await page.locator("#alertbtn").click();
    //hover
    await page.locator("#mousehover").hover();

    //frames
    const framesPage = page.frameLocator("#courses-iframe");
    await framesPage.locator("li a[href*='lifetime-access']:visible").click();
    const text = await framesPage.locator("div.text h2").textContent();
    console.log(text.split(" ")[1]);

});

test("Screen shot", async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("[id='displayed-text']")).toBeVisible();
    await page.locator("[id='displayed-text']").screenshot({path: 'partialscree.png'});
    await page.locator("[id='hide-textbox']").click()
    await page.screenshot({path:'screenshot.png'});
    await expect(page.locator('#displayed-text')).toBeHidden();
});

test('visual', async({page})=>
{
    await page.goto("https://chatgpt.com/");
   expect( await page.screenshot()).toMatchSnapshot("landing.png");
});