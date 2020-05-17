
const fs = require('fs');
const { promisify } = require('util');

const webdriver = require('selenium-webdriver');
const { By, until } = webdriver;

const helper = require('./helper');


const youtube_search = async () => {
  const driver = await helper.create_driver();

  // Refer: https://qiita.com/tonio0720/items/70c13ad304154d95e4bc
  await driver.get('https://www.youtube.com/');

  await driver.wait(until.elementLocated(By.id('search')), 10000);

  let base64 = await driver.takeScreenshot();
  let buffer = Buffer.from(base64, 'base64');

  await promisify(fs.writeFile)('capture.jpg', buffer);

  await driver.quit();
};



if (require.main === module) {
  youtube_search().then(() => {
    console.log('Done');
  }).catch(result => {
    console.error(result);
  });
}

