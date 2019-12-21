
const path = require('path');
const webdriver = require('selenium-webdriver');
const { Builder, By, until } = webdriver;
const { ServiceBuilder } = require('selenium-webdriver/chrome');

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

const main = async () => {
  const chromedriver_path = path.join(__dirname, '..', '..', 'bin', 'chromedriver');
  const service_builder = new ServiceBuilder(chromedriver_path);
  const driver = await new Builder().withCapabilities(capabilities).setChromeService(service_builder).build();
  driver.quit();
};


main().then(() => {
  console.log('Done');

}).catch(result => {
  console.error(result);
});

