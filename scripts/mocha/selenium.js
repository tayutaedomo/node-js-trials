
const assert = require('assert');

const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const webdriver = require('selenium-webdriver');
const { Builder, By, until } = webdriver;
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


/*
 * Usage: ./node_modules/mocha/bin/mocha scripts/mocha/selenium.js --no-timeout
 */
describe('selenium webdriver', () => {
  let driver;

  before(async () => {
    driver = await create_driver();
    process.on("unhandledRejection", console.dir);
  });

  after(() => {
    return driver.quit();
  });


  it('get and snapshot.', async ()  => {
    await driver.get('https://www.youtube.com/');

    await driver.wait(until.elementLocated(By.id('search')), 10000);

    let base64 = await driver.takeScreenshot();
    let buffer = Buffer.from(base64, 'base64');

    return promisify(fs.writeFile)('screenshot.jpg', buffer);
  });

  // Refer: https://ics.media/entry/5759/
  // it("名前欄の必須入力チェック その1", async () => {
  //   // テスト対象のページへアクセス
  //   await driver.get(
  //     "http://ics-drive.jp/sandbox/demo/demo.html"
  //   );
  //
  //   // 何も入力せずにSubmitする
  //   await driver.findElement(By.id("submitButton")).click();
  //
  //   // エラーメッセージを取得して、エラー文言が正しいかチェックする
  //   const errorMessage = await driver
  //     .findElement(By.id("error_name"))
  //     .getText();
  //   assert.equal(errorMessage, "名前を入力してください。");
  // });

  // it("名前欄の必須入力チェック その2", async () => {
  //   // テスト対象のページへアクセス
  //   await driver.get(
  //     "http://ics-drive.jp/sandbox/demo/demo.html"
  //   );
  //
  //   // 名前を入力してSubmitする
  //   await driver
  //     .findElement(By.id("name"))
  //     .sendKeys("品川太郎");
  //   await driver.findElement(By.id("submitButton")).click();
  //
  //   // エラーメッセージを取得して、エラー文言が空であるかチェックする
  //   const errorMessage = await driver
  //     .findElement(By.id("error_name"))
  //     .getText();
  //   assert.equal(errorMessage, "");
  // });
});


