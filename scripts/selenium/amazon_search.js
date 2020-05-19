
const fs = require('fs');
const { promisify } = require('util');

const webdriver = require('selenium-webdriver');
const { By, until } = webdriver;

const helper = require('./helper');


const main = async () => {
  const driver = await helper.create_driver();

  await driver.get('https://www.amazon.co.jp/s?k=mask');

  await driver.wait(until.elementLocated(By.css('.s-result-item')));
  await driver.findElements(By.css('.s-result-item'))
      .findElement(By.css('.a-link-normal')).click();

  //await item_list.findElement(By.css('.a-link-normal')).click();

  let base64 = await driver.takeScreenshot();
  let buffer = Buffer.from(base64, 'base64');

  await promisify(fs.writeFile)('capture.jpg', buffer);

  await driver.quit();
};



if (require.main === module) {
  main().then(() => {
    console.log('Done');
  }).catch(result => {
    console.error(result);
  });
}

