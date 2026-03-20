const {test, expect} = require('@playwright/test')

test('Calendar test',async({page})=>
{
    
    const date = "27";
    const month = "6";
    const year = "2029";
    const expectedList = [month, date, year];
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup__input.react-date-picker__inputGroup__day").click();
    await page.locator(".react-calendar__navigation__label__labelText--from").click();
    await page.locator(".react-calendar__navigation__label__labelText--from").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__tile.react-calendar__year-view__months__month").nth(Number(month)-1).click();
    await page.locator("//abbr[text()='"+date+"']").click();
    //assertion
    const inputs = page.locator(".react-date-picker__inputGroup__input");

    for(let i=0; i<expectedList.length; i++)
    {
        const value = await inputs.nth(i).inputValue();
        expect(value).toBe(expectedList[i]);
    }


});