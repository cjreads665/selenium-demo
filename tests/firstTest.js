const {By,Key,util} = require("selenium-webdriver")


async function firstTest(driver){
    await driver.manage().setTimeouts( { implicit: 10000 } );
    await driver.findElement(By.css(`#app-global > div > div.sc-KsaEj.hyjhRa > div > form > div.sc-gHLcSH.sc-dwVMhp.sc-hIkKma.dSUoOY.kPbTCB.iHFeTI > button`)).click()
   
}

module.exports= firstTest