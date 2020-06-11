const assert = require('assert');
const {By} = require('selenium-webdriver')
const {Given, When, Then, setDefaultTimeout, AfterAll} = require('cucumber');
const {createDriver} = require('../../test/test')
const {BROWSER, TIMEOUT, ADMIN_PAGE} = require('../../constants')

setDefaultTimeout(TIMEOUT)
const driver = createDriver(BROWSER)

const checkAdminPageUrl = async () => {
  const currentUrl = await driver.getCurrentUrl() 
  return assert.equal(currentUrl, ADMIN_PAGE) ? 
    true : 
    false
}

const checkMenuListItem = (name) => {
  const xpath = `//span[contains(., ${name})]`
  $span = driver.findElement(By.xpath(xpath))
  return $span || null
}

const clickMenuListItem = async (name) => {
  $span = checkMenuListItem(name)
  await $span.click($span)  
}

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
    await driver.sleep(10000)
    return await checkAdminPageUrl()
  }
)

// 2) Scenario: Check Header # features\step_definitions\checking_store.feature:19

// Given i open "http://localhost/litecart/admin/" page
Given('i open {string} page', async function (string) {
  await driver.get(string)
  await driver.sleep(10000)
  return await checkAdminPageUrl()
})

// When i Click "Appearance"
When('i Click {string}', async function (string) {
  await clickMenuListItem(string)
})

// And i Check "Looogotype"
When('i Check {string}', function (string) {
  this.$listItem = checkMenuListItem(string)
})

// And i will return to the "http://localhost/litecart/admin/" page
When('i will return to the {string} page', async function (string) {
  await driver.get(string)
  await driver.sleep(10000)
  return await checkAdminPageUrl()
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



