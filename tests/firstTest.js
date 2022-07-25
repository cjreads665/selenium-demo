const {Builder} = require('selenium-webdriver')

async function example(){
    let driver = await new Builder().forBrowser("MicrosoftEdge").build()

    await driver.get("https://www.seleniumeasy.com/")


}

example()