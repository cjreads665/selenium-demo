const {By,Key,util, until} = require("selenium-webdriver");
const createInvoice = require("./createInvoice");
const firstTest = require("./firstTest");
const goToReceivables = require("./goToReceivables");


async function login(driver){
    await driver.manage().setTimeouts( { implicit: 10000 } );
    await driver.findElement(By.css(`#app-global > div > div.sc-KsaEj.hyjhRa > div > form > div.sc-gSAPjG.cfdvAp.formGroup-wrapper > input`)).sendKeys("shahid.alam@bizpilot.in")
    await driver.findElement(By.css(`#app-global > div > div.sc-KsaEj.hyjhRa > div > form > div.sc-gHLcSH.sc-dwVMhp.sc-hIkKma.dSUoOY.kPbTCB.iHFeTI > button`)).click()
    await driver.wait(until.elementLocated(By.css(`#app-global > div > div.sc-KsaEj.hyjhRa > div > div.sc-dpkrwT.daIduw.content-view-wrapper.undefined > div.sc-ibEqUB.iFwEGz > div.sc-khBlLl.cWrRzF > div:nth-child(2) > div`)),50000)
    // goToReceivables(driver)
    createInvoice(driver)

}

module.exports= login