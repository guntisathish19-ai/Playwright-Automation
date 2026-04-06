const {test, chromium} = require('@playwright/test');
const playwright = require('playwright');
const {request} = require('@playwright/test');

test('Practise test', async ()=>{
    const browser = await chromium.launch({args:['--start-maximized'], headless:false});
    const context = await browser.newContext({viewport:null});
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

});

test('Practise test two', async ({browser})=>{
    const context = await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://google.com");
    console.log(await page.title());
})

test.skip('Practise test three', async ({page})=>{
    await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=14626794480300713509&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062186&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1");
    await page.waitForLoadState('domcontentloaded');
    console.log(await page.title());
})

test('API test', async ({context})=>{
    const requestContext = await request.newContext();
    const response = await requestContext.post("https://rahulshettyacademy.com/loginpagePractise/",  {data:{userName:"testmail2026@gmail.com", password:"Test@123"}});
    const body = await response.json();
    const token = body.token;
    console.log(token);
});