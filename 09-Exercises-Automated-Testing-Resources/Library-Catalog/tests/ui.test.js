const {test, expect} = require("@playwright/test")

test('verify all Books link is visible',async({page}) =>{
    await page.goto("http://localhost:3000");
    //locate navigation
    await page.waitForSelector('nav.navbar');
    const allBooksLink = await page.$('a[href="/catalog"]')
    const isElVisuable = await allBooksLink.isVisible();
    expect(isElVisuable).toBe(true);
})
