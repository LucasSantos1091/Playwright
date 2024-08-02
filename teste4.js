const { chromium } = require('playwright');

(async() => {
    const browser = await chromium.launch({ headless: false, slowMo: 50 })
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://demo.testfire.net/login.jsp')

    await page.fill('input[id = "uid"]', 'Lucasfarias')
    await page.fill('input[id = "passw"]', 'Teste123')
    await page.click('input[name="btnSubmit"]')

})()