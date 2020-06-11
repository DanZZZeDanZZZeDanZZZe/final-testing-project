const {Builder, Capabilities, By} = require('selenium-webdriver')

function createDriver(browser) {
  const capabilities = Capabilities[browser]()

  return new Builder()
    .withCapabilities(capabilities)
    .build()
}

module.exports = {createDriver}


