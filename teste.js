const { chromium } = require('playwright');

(async() => {
    const browser = await chromium.launch({ headless: false })
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://demo.testfire.net/login.jsp')
    await page.screenshot({ path: `todo.png` })
    await browser.close()

})()