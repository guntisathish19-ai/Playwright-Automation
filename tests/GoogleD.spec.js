const {test} = require('@playwright/test');

test('Google page practice', async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com/");
    console.log(await page.title())
    console.log(await page.locator("#SIvCob a").nth(2).textContent())

    console.log(await page.locator("#SIvCob").textContent());

    await page.locator(".KxwPGc.AghGtd a").nth(1).click();
    //await page.locator("a.plexi-button").nth(0).click

    const documentLink = page.locator("a.plexi-button").nth(0);

    const [newWindow] = await Promise.all(
        [
            context.waitForEvent('page'),
            documentLink.click(),
        ]
    );
    await newWindow.waitForLoadState();
     console.log(await newWindow.title())
     console.log(await page.title());

     await newWindow.locator("input[type='email']").fill("email@gmail.com")

     await newWindow.locator("span[jsname='V67aGc']").nth(1).click();

    await page.pause();

});

test.only('Google Links', async ({page})=>{
    await page.goto("https://www.google.com/");
    console.log(await page.title())
    const links = await page.$$eval('a', anchors=>anchors.map(link=>
        ({text: link.innerText.trim(),
            href: link.href,
        }))
    )
    //console.log(links.lenght);
    console.log(links);
});