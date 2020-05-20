
const fs = require('fs');
const { promisify } = require('util');

const webdriver = require('selenium-webdriver');
const { By, until } = webdriver;

const helper = require('./helper');


const main = async (email, password) => {
  const driver = await helper.create_driver();

  await driver.get('https://www.amazon.co.jp/');

  await driver.wait(until.elementLocated(By.id('nav-link-accountList')));
  await driver.findElement(By.id('nav-link-accountList')).click();

  await driver.wait(until.elementLocated(By.id('ap_email')));
  await driver.findElement(By.id('ap_email')).sendKeys(email);
  await driver.findElement(By.id('continue')).click();

  await driver.wait(until.elementLocated(By.id('ap_password')));
  await driver.findElement(By.id('ap_password')).sendKeys(password);
  await driver.findElement(By.id('signInSubmit')).click();

  let base64 = await driver.takeScreenshot();
  let buffer = Buffer.from(base64, 'base64');

  await promisify(fs.writeFile)('tmp/capture.jpg', buffer);

  await driver.quit();
};



if (require.main === module) {
  if (process.argv.length < 4) {
    console.log('Email and Password are required.');
    process.exit();
  }

  const email = process.argv[2];
  const password = process.argv[3];

  main(email, password).then(() => {
    console.log('Done');
  }).catch(result => {
    console.error(result);
  });
}

