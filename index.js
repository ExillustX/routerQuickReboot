require('dotenv').config();
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const quickReboot = async () => {
  const driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
  try {
    await driver.get(`http://${process.env.ROUTER_USERNAME}:${process.env.ROUTER_PASSWORD}@${process.env.ROUTER_IP}/wanL3Edit.cmd?serviceId=1&wanIfName=ppp1.2&ntwkPrtcl=0`);
    const inputElement = await driver.findElement(webdriver.By.css('table:nth-child(11) tr:nth-child(2) input'));
    const dataValue = await inputElement.getAttribute('value');
    const submitButtonCss = 'input:nth-child(2)';
    switch (dataValue) {
      case '30':
        inputElement.clear();
        inputElement.sendKeys('31');
        break;
      case '31':
        inputElement.clear();
        inputElement.sendKeys('30');
        break;
    }
    await driver.findElement(webdriver.By.css(submitButtonCss)).click();
    await driver.findElement(webdriver.By.css(submitButtonCss)).click();
  } catch (e) {
    console.error(e);
  } finally {
    await driver.quit();
  }
}

quickReboot();
