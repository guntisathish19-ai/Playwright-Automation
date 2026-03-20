const {test, expect} = require('@playwright/test');

test('test1', async function({browser})
{
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://google.com");
   console.log(await page.title());
   await expect(page).toHaveTitle("Google");

});

test('Context Playwright test', async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());


});

test('Page Playwright test', async ({page})=>
{
    
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
  await page.locator('#username').fill("rahulshetty");
  await page.locator('#password').fill("Learning@830$3mK2");
  await page.locator('#signInBtn').click();


});

test('logging into rahushettyacademy failing test', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await page.locator('#username').fill("rahulshetty");
    await page.locator('#password').fill("Learning@830$3mK2");
    await page.locator('#signInBtn').click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");

});
 

test('logging into rahulshettyacadymy pass test', async function({browser})
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    await page.locator('#username').fill("rahulshetty");
    await page.locator('#password').fill("Learning@830$3mK2");
    await page.locator('#signInBtn').click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    //clear text field
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();

});

test('Reading first product name', async function({browser})
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    //locators
    const userName = page.locator('#username');
    const passWord = page.locator('#password');
    const signIn = page.locator("#signInBtn");
    //logging in
    await userName.fill("rahulshettyacademy");
    await passWord.fill("Learning@830$3mK2");
    await signIn.click();
    //assertion for succesful login
    console.log(await page.locator(".navbar-brand").first().textContent());
    await expect(page.locator(".navbar-brand").first()).toContainText("ProtoCommerce");
    //reading frist and seconda products names
    console.log(await page.locator(".card-body a").first().textContent());
    console.log(await page.locator(".card-body a").nth(1).textContent());
    //reading list of elements
    console.log(await page.locator(".card-body a").allTextContents());

});
