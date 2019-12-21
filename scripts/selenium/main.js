
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const webdriver = require('selenium-webdriver');
const { Builder, By, until } = webdriver;
const { ServiceBuilder } = require('selenium-webdriver/chrome');


const main = async () => {
  const driver = await create_driver();

  // Refer: https://qiita.com/tonio0720/items/70c13ad304154d95e4bc
  await driver.get('https://www.youtube.com/');

  await driver.wait(until.elementLocated(By.id('search')), 10000);

  let base64 = await driver.takeScreenshot();
  let buffer = Buffer.from(base64, 'base64');

  await promisify(fs.writeFile)('screenshot.jpg', buffer);

  await driver.quit();
};


const create_driver = async () => {
  const capabilities = webdriver.Capabilities.chrome();
  capabilities.set('chromeOptions', {
    args: [
      '--headless',
      '--no-sandbox',
      '--disable-gpu',
      `--window-size=1980,1200`
      // other chrome options
    ]
  });

  const chromedriver_path = path.join(__dirname, '..', '..', 'bin', 'chromedriver');
  const service_builder = new ServiceBuilder(chromedriver_path);
  const builder = new Builder().withCapabilities(capabilities).setChromeService(service_builder);
  const driver = await builder.build();

  return driver;
};



main().then(() => {
  console.log('Done');

}).catch(result => {
  console.error(result);
});

