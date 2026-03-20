const { test } = require('@playwright/test');

test('print all links', async ({ page }) => {
    await page.goto("https://www.google.com/", { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle');
    const links = await page.$$eval('a', anchors => anchors.map(a => ({
        text: a.innerText.trim(),
        href: a.href
    }))
    );
    //const links = page.locator("a[href*='https']").textContent();
    await console.log(links.length);
    await console.log(links);
});

test.only('Telugu link', async ({ page }) => {
    await page.goto("https://www.google.com/", { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle');
    const teluguLink = page.locator('a', { hasText: 'తెలుగు' });

    if (await teluguLink.count()>0) {
        console.log('Telugu link found:');
        const href = await teluguLink.first().getAttribute('href');
        console.log('URL:', href);
    } else {
        console.log('Telugu link not found on this page.');
    }
})