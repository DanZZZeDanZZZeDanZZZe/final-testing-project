const {By} = require('selenium-webdriver')
const assert = require('assert')

async function checkPageUrl(driver, url) {
  const currentUrl = await driver.getCurrentUrl() 
  return assert.equal(currentUrl, url) ? 
    true : 
    false
}

function checkMenuListItem(driver, name) {
  const xpath = `//span[contains(., '${name}')]`
  $span = driver.findElement(By.xpath(xpath))
  return $span || null
}

async function clickMenuListItem(driver, name) {
  $span = checkMenuListItem(driver, name)
  await $span.click($span)  
}

module.exports = {
  checkPageUrl,
  checkMenuListItem,
  clickMenuListItem
}