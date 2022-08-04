
const {By,Key,util, until} = require("selenium-webdriver")


async function goToReceivables(driver){
    await driver.findElement(By.css(`#app-global > div > div.sc-KsaEj.hyjhRa > div > div.sc-dpkrwT.daIduw.content-view-wrapper.undefined > div.sc-ibEqUB.iFwEGz > div.sc-khBlLl.cWrRzF > div:nth-child(2) > div`)).click()
    
}

module.exports= goToReceivables