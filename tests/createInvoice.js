
const {By,Key,util, until} = require("selenium-webdriver")


async function createInvoice(driver){
    //click on + button
    await driver.findElement(By.xpath(`//*[@id="main-header"]/div[2]/button[3]`)).click()
    //click on create invoice
    await driver.findElement(By.xpath(`//*[@id="app-global"]/div/div[2]/div/div/div/div[1]`)).click()
    //select customer default - amazon
    await driver.findElement(By.xpath(`//*[@id="app-global"]/div/div[2]/form/div[2]/div[2]/div/ul/li[2]`)).click()
    //select address 
    await driver.findElement(By.xpath(`//*[@id="app-global"]/div/div[2]/form/fieldset/div[1]/div/div[1]/div[2]/div/ul/li[1]`)).click()
    //select an item  
    await driver.findElement(By.xpath(`//*[@id="select-sales-item-0"]`)).click()
    await driver.findElement(By.xpath(`//*[@id="app-global"]/div/div[2]/form/fieldset/div[4]/div/div/div/div/div[2]/div/ul/li[1]`)).click()
    //wait for 10s  
    // await driver.manage().setTimeouts( { implicit: 10000 } );
    await driver.findElement(By.xpath(`//*[@id="app-global"]/div/div[2]/form/fieldset/button`)).click()

}

module.exports= createInvoice