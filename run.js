const { Builder } = require("selenium-webdriver");
const firstTest = require("./tests/firstTest");
const login = require("./tests/login");

async function example() {
  let driver = await new Builder().forBrowser("MicrosoftEdge").build();
  await driver.get("https://staging.d39f9wp1xoa2s7.amplifyapp.com/");
  login(driver);
}

example();
