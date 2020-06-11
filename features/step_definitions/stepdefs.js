const assert = require('assert');
const {By, until} = require('selenium-webdriver')
const {Given, When, Then, After, setDefaultTimeout} = require('cucumber');
const {createDriver} = require('../../test/test')
const {BROWSER, TIMEOUT, ADMIN_PAGE} = require('../../constants')

const timeout = {timeout: TIMEOUT}
setDefaultTimeout(TIMEOUT)
const driver = createDriver(BROWSER)

// 1) Scenario: Go to the admin panel

// Given open "http://localhost/litecart/admin/login.php" page
Given(
  'open {string} page', 
  async function (string) {
    await driver.get(string)
  }
)

// When i login with "admin" user and "admin" password
When(
  'i login with {string} user and {string} password', 
  async function (string, string2) {
    const fillInput = async (name, text) => {
      await driver
          .findElement(By.xpath(`//input[@name='${name}']`))
          .sendKeys(text);
    } 

    await fillInput('username', string)
    await fillInput('password', string2)
  }
)

// And press element with text "login"
When(
  'press element with text {string}', 
  async function (string) {
    const loginButton = await driver
        .findElement(By.xpath(`//button[@name='${string}']`))
    loginButton.click(loginButton)
  }
)

// Then i have to go to the page "http://localhost/litecart/admin/" page
Then(
  'i have to go to the page {string} page', 
  async function (string) {
    await driver.wait(
      until.elementLocated(By.id('box-apps-menu')), 
      2000
    )
    const currentUrl = await driver.getCurrentUrl() 
    assert.equal(currentUrl, ADMIN_PAGE)
  }
)

After(
  async function () {
    await driver.quit()
  }
)



