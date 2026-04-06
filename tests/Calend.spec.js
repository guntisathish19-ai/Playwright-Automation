const {test, expect} = require('@playwright/test');

test('Calendar date selection and submission', async ({page})=>{
    // Constants
    const CALENDAR_URL = "https://practice-automation.com/calendars/";
    const DATE_INPUT_SELECTOR = "//input[starts-with(@id, 'g1065-1')]";
    const expectedDate = {
        year: "2030",
        month: "08",
        date: "30"
    };
    const expectedFormattedDate = `${expectedDate.year}-${expectedDate.month}-${expectedDate.date}`;

    // Navigate to calendar page
    await page.goto(CALENDAR_URL, {waitUntil: 'domcontentloaded'});
    
    // Open date picker
    await page.locator(DATE_INPUT_SELECTOR).click();
    
    // Select year
    await page.locator("button.dp-cal-year").click();
    await page.getByRole("button", {name: expectedDate.year}).click();
    
    // Select month
    await page.locator(".dp-cal-month").click();
    await page.locator(".dp-month").nth(Number(expectedDate.month) - 1).click();
    
    // Select date
    await page.locator('.dp-day:not(.dp-edge-day)').getByText(expectedDate.date, { exact: true }).click();
    
    // Verify date was entered correctly
    const enteredDate = await page.locator(DATE_INPUT_SELECTOR).inputValue();
    expect(enteredDate).toBe(expectedFormattedDate);
    
    // Submit form
    await page.getByRole("button", {name: 'Submit'}).click();
    
    // Verify submission success
    const successMessage = page.locator("h4").first();
    await successMessage.waitFor();
    await expect(successMessage).toHaveText("Thank you for your response. ");
}); 