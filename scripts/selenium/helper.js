
const path = require('path');

const webdriver = require('selenium-webdriver');
const { Builder } = webdriver;
const { ServiceBuilder } = require('selenium-webdriver/chrome');


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

  const CHROMEDRIVER_EXE = process.platform === 'win32' ? 'chromedriver.exe' : 'chromedriver';
  const chromedriver_path = path.join(__dirname, '..', '..', 'bin', CHROMEDRIVER_EXE);
  const service_builder = new ServiceBuilder(chromedriver_path);
  const builder = new Builder().withCapabilities(capabilities).setChromeService(service_builder);
  const driver = await builder.build();

  return driver;
};


module.exports = {
  create_driver: create_driver
};

