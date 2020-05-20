
const path = require('path');
const debug = require('debug')('node-js-trials:scripts:selenium:helper');

const webdriver = require('selenium-webdriver');
const { Builder } = webdriver;
const { ServiceBuilder } = require('selenium-webdriver/chrome');


const create_driver = async (options) => {
  options = options || {};

  const capabilities = webdriver.Capabilities.chrome();

  const chrome_options = {
    args: [
      '--incognito',
      '--headless',
      '--disable-gpu',
      '--window-size=1280,800'
    ],
    w3c: false // Important!! Why?
  };

  if (options.args) chrome_options.args = options.args;
  if (options.prefs) chrome_options.prefs = options.prefs;

  debug('chrome_options:', chrome_options);

  capabilities.set('chromeOptions', chrome_options);

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

