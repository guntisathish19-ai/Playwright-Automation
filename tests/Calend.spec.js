const {test, expect} = require('@playwright/test');

test('test', async ({page})=>{
    page.goto("https://practice-automation.com/calendars/", {waitUntil: 'domcontentloaded'});
    await page.locator("//input[starts-with(@id, 'g1065-1')]").click();
    const year = "2030";
    const month = "08";
    const date = "30";
    await page.locator("button.dp-cal-year").click();
    //await page.locator("button.dp-year").filter({hastext:year}).click();
    await page.getByRole("button", {name: year}).click();
    //await page.getByRole("button", {date-month: })
    await page.locator(".dp-cal-month").click();
    await page.locator(".dp-month").first().waitFor();
    await page.locator(".dp-month").nth(Number(month)-1).click();
    //await page.locator(".dp-day:not(.dp-edge-day)").filter({ hasText: new RegExp(`^${date}$`) }).click();
    await page.locator('.dp-day:not(.dp-edge-day)').getByText(date, { exact: true }).click();
    //await day.locator("text="+date).click();

    const entereddate = await page.locator("//input[starts-with(@id, 'g1065-1')]").inputValue();
    await expect(entereddate).toBe(year+"-"+month+"-"+date);

    await page.getByRole("button", {name: 'Submit'}).click();
    await page.locator("h4").first().waitFor();
    expect(page.locator("h4").first()).toHaveText("Thank you for your response. ");
    


    await page.pause();
}); 