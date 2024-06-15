const {test, expect} = require("@playwright/test")

test('verify all Books link is visible',async({page}) =>{
    await page.goto("http://localhost:3000");
    //locate navigation
    await page.waitForSelector('nav.navbar');
    const allBooksLink = await page.$('a[href="/catalog"]')
    const isElVisuable = await allBooksLink.isVisible();
    expect(isElVisuable).toBe(true);
})

test('verify valid user can login', async({page}) =>{
    await page.goto("http://localhost:3000");

    await page.waitForSelector('nav.navbar');
    const loginLink = await page.$('a[href="/login"]')
    await loginLink.click();
    // fill data
    await  page.fill('#email','peter@abv.bg')
    await  page.fill('#password','123456')
    const loginBtn = await page.$('#login-form input[type="submit"]');
   await loginBtn.click(); 
    const logoutBtn =  await page.$('#logoutBtn');
    const logoutBtnText = await logoutBtn.textContent();
    expect(logoutBtnText).toBe('Logout');

})
