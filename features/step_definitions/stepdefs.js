const {By} = require('selenium-webdriver')
const cucumber = require('cucumber');
const {createDriver} = require('../../test/test')
const {BROWSER, TIMEOUT} = require('../../constants/constants')
const helpers = require('../../scripts/scripts')

const {checkPageUrl, checkMenuListItem, clickMenuListItem} = helpers
const {Given, When, Then, setDefaultTimeout, AfterAll} = cucumber

const driver = createDriver(BROWSER)
setDefaultTimeout(TIMEOUT)
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
    return await checkPageUrl(driver, string)
  }
)

// 2) Scenario: Check Header # features\step_definitions\checking_store.feature:19

// Given i open "http://localhost/litecart/admin/" page
Given('i open {string} page', async function (string) {
  await driver.get(string)
  return await checkPageUrl(driver, string)
})

// When i Click <menu>
When('i Click {string}', async function (string) {
  await clickMenuListItem(driver, string)
})

// And i Check <menu_item>
When('i Check {string}', function (string) {
  this.$listItem = checkMenuListItem(driver, string)
})

// And i will return to the "http://localhost/litecart/admin/" page
When('i will return to the {string} page', async function (string) {
  await driver.get(string)
  return await checkPageUrl(driver, string)
})

// Then menu item exists
Then('menu item exists', function () {
  return this.$listItem ? true : false
})

AfterAll(
  async function () {
    await driver.quit()
  }
)



